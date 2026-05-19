// ═══════════════════════════════════════════════════════
// CONFIG — Firebase, constantes do jogo e links de pagamento
// ═══════════════════════════════════════════════════════

// Firebase — cole suas credenciais em console.firebase.google.com
const FIREBASE_CONFIG = {
  apiKey:            "AIzaSyA8ZNEhBJtHAeEtIXQUlXQmFp4zI3MQ_0U",
  authDomain:        "leon-cs.firebaseapp.com",
  projectId:         "leon-cs",
  storageBucket:     "leon-cs.firebasestorage.app",
  messagingSenderId: "751282094721",
  appId:             "1:751282094721:web:a8c870885adcbb457ec380",
  measurementId:     "G-2PXHCCXNB5"
};

// Stripe — Payment Links
const PAYMENT_LINK_MONTHLY = 'https://buy.stripe.com/5kQ4gza1371rdHE1jJ5AQ00';
const PAYMENT_LINK_ANNUAL  = 'https://buy.stripe.com/28E28r4GJgC10US3rR5AQ01';

// Constantes do jogo
const KEY      = 'leoncs_v3';
const MAX_H    = 5;
const REGEN_MS = 20 * 60 * 1000;
const XP_LV    = 200;
const LV_NAMES = ['RECRUTA', 'AGENTE', 'VETERANO', 'ESPECIALISTA', 'MESTRE', 'LENDA'];

// Código de acesso para Professor
const TEACHER_CODE = 'PROF2025';

// Matérias disponíveis
const SUBJECTS = [
  { id: 'csharp',      label: 'C#',                    icon: '🎮', color: '#9b59b6', desc: 'Aprenda C# do zero com missões temáticas' },
  { id: 'python',      label: 'Python',                icon: '🐍', color: '#3498db', desc: 'Lógica e automação com Python' },
  { id: 'html',        label: 'HTML / CSS',            icon: '🌐', color: '#e67e22', desc: 'Criação de páginas web' },
  { id: 'java',        label: 'Java',                  icon: '☕', color: '#e74c3c', desc: 'Orientação a objetos com Java' },
  { id: 'english',     label: 'Inglês Técnico',        icon: '🇺🇸', color: '#27ae60', desc: 'Vocabulário e gramática para TI' },
  { id: 'networking',  label: 'Redes de Computadores', icon: '🔗', color: '#16a085', desc: 'Protocolos, topologias e infraestrutura' },
  { id: 'maintenance', label: 'Manutenção de PC',      icon: '🔧', color: '#8e44ad', desc: 'Hardware, diagnóstico e reparo' },
];
