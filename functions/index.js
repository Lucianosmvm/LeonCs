// ═══════════════════════════════════════════════════════
// STRIPE WEBHOOK — Firebase Cloud Function
// Recebe eventos do Stripe e atualiza premium no Firestore
// ═══════════════════════════════════════════════════════

const { onRequest } = require('firebase-functions/v2/https');
const { setGlobalOptions } = require('firebase-functions/v2');
const admin = require('firebase-admin');
const { defineSecret } = require('firebase-functions/params');

admin.initializeApp();

setGlobalOptions({ region: 'us-central1' });

const STRIPE_SECRET      = defineSecret('STRIPE_SECRET_KEY');
const STRIPE_WEBHOOK_SIG = defineSecret('STRIPE_WEBHOOK_SECRET');
const TEACHER_SECRET     = defineSecret('TEACHER_CODE');

// ── Valida código de professor (server-side) ──
exports.validateTeacherCode = onRequest(
  { secrets: [TEACHER_SECRET], cors: ['https://leoncs.com.br', 'https://leon-cs.web.app'] },
  (req, res) => {
    if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');
    const { code } = req.body;
    if (!code) return res.status(400).json({ valid: false });
    res.json({ valid: code === TEACHER_SECRET.value() });
  }
);

// ── Webhook principal ──
exports.stripeWebhook = onRequest(
  { secrets: [STRIPE_SECRET, STRIPE_WEBHOOK_SIG] },
  async (req, res) => {
    if (req.method !== 'POST') {
      return res.status(405).send('Method Not Allowed');
    }

    const stripe = require('stripe')(STRIPE_SECRET.value());
    const sig    = req.headers['stripe-signature'];

    let event;
    try {
      event = stripe.webhooks.constructEvent(
        req.rawBody,
        sig,
        STRIPE_WEBHOOK_SIG.value()
      );
    } catch (err) {
      console.error('Webhook signature inválida:', err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    const db = admin.firestore();

    try {
      switch (event.type) {

        // ── Pagamento confirmado (checkout one-time ou primeira cobrança) ──
        case 'checkout.session.completed': {
          const session = event.data.object;
          const uid = session.client_reference_id;
          if (!uid) { console.warn('checkout.session.completed sem client_reference_id'); break; }

          await db.doc(`users/${uid}`).update({
            premium:          true,
            stripeCustomerId: session.customer      || null,
            stripeSubId:      session.subscription  || null,
            premiumSince:     admin.firestore.FieldValue.serverTimestamp(),
          });
          console.log(`Premium ativado: uid=${uid}`);
          break;
        }

        // ── Renovação de assinatura bem-sucedida ──
        case 'invoice.payment_succeeded': {
          const invoice = event.data.object;
          if (invoice.billing_reason !== 'subscription_cycle') break;
          const subId = invoice.subscription;
          if (!subId) break;

          // Busca usuário pelo stripeSubId
          const snap = await db.collection('users')
            .where('stripeSubId', '==', subId)
            .limit(1)
            .get();
          if (snap.empty) { console.warn(`Nenhum usuário com stripeSubId=${subId}`); break; }

          await snap.docs[0].ref.update({ premium: true });
          console.log(`Renovação confirmada: uid=${snap.docs[0].id}`);
          break;
        }

        // ── Assinatura cancelada ou pagamento falhou ──
        case 'customer.subscription.deleted':
        case 'invoice.payment_failed': {
          const obj   = event.data.object;
          const subId = obj.subscription ?? obj.id;
          if (!subId) break;

          const snap = await db.collection('users')
            .where('stripeSubId', '==', subId)
            .limit(1)
            .get();
          if (snap.empty) { console.warn(`Nenhum usuário com stripeSubId=${subId}`); break; }

          await snap.docs[0].ref.update({ premium: false });
          console.log(`Premium removido: uid=${snap.docs[0].id}, evento=${event.type}`);
          break;
        }

        default:
          // Ignora outros eventos
          break;
      }
    } catch (err) {
      console.error('Erro ao processar evento:', event.type, err);
      return res.status(500).send('Erro interno');
    }

    res.json({ received: true });
  }
);
