// ═══════════════════════════════════════════════════════
// FIREBASE — SDK, Auth e Firestore
// Depende de: config.js, state.js, ui.js, navigation.js
// ═══════════════════════════════════════════════════════

let _fbAuth = null, _fbDb = null;
window._loggingOut = false;
window._currentUser = null;
window._fb = null;

async function loadFirebase() {
  try {
    const { initializeApp } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js");
    const { getAuth, onAuthStateChanged,
            createUserWithEmailAndPassword, signInWithEmailAndPassword,
            signInWithPopup, GoogleAuthProvider, signOut,
            updateProfile, sendPasswordResetEmail, deleteUser }
          = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js");
    const { getFirestore, doc, setDoc, getDoc, updateDoc, deleteDoc, serverTimestamp,
            collection, query, orderBy, limit, getDocs, addDoc, where, onSnapshot, deleteField, increment }
          = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js");

    const app = initializeApp(FIREBASE_CONFIG);
    _fbAuth = getAuth(app);
    _fbDb   = getFirestore(app);

    window._fb = {
      createUserWithEmailAndPassword, signInWithEmailAndPassword,
      signInWithPopup, GoogleAuthProvider, signOut,
      updateProfile, sendPasswordResetEmail, deleteUser,
      doc, setDoc, getDoc, updateDoc, deleteDoc, serverTimestamp,
      collection, query, orderBy, limit, getDocs, addDoc, where, onSnapshot, deleteField, increment
    };

    // AUTH STATE OBSERVER — persiste login entre reloads
    let _authGen = 0;
    onAuthStateChanged(_fbAuth, async (user) => {
      hideLoading();
      if (user) {
        const gen = ++_authGen;
        window._currentUser = user;
        showLoading('SINCRONIZANDO...');
        await _loadCloud(user.uid);
        hideLoading();
        if (gen !== _authGen || window._loggingOut) return;
        regenH(); checkStreakLoss(); _saveLocal();
        await checkPaymentReturn();
        if (gen !== _authGen || window._loggingOut) return;
        go('sb');
      } else {
        ++_authGen;
        window._loggingOut = false;
        window._currentUser = null;
        S = defState();
        _saveLocal();
        document.querySelectorAll('.scr').forEach(s => s.classList.remove('on'));
        document.getElementById('ob').classList.add('on');
        document.body.classList.add('desk-auth');
      }
    });

  } catch(e) {
    // Firebase não configurado → modo demo (funciona localmente sem auth)
    console.warn('Firebase não configurado. Rodando em modo demo:', e.message);
    hideLoading();
    window._currentUser = { uid: 'demo', displayName: 'Leon Demo', email: 'demo@leoncs.app', photoURL: null };
    regenH(); checkStreakLoss(); _saveLocal();
    go('sb');
  }
}

async function _ensureUserDoc(user) {
  if (!_fbDb || !window._fb) return;
  const ref  = window._fb.doc(_fbDb, 'users', user.uid);
  const snap = await window._fb.getDoc(ref);
  if (!snap.exists()) {
    await window._fb.setDoc(ref, {
      name: user.displayName || 'Agente', email: user.email,
      xp: 0, hearts: MAX_H, streak: 0, lastPlayed: null,
      done: [], correct: 0, premium: false, achievements: {},
      subjectDone: {},
      createdAt: window._fb.serverTimestamp(),
      lastLogin:  window._fb.serverTimestamp(),
    });
  } else {
    await window._fb.updateDoc(ref, { lastLogin: window._fb.serverTimestamp() });
  }
}

async function _loadCloud(uid) {
  if (!_fbDb || !window._fb) return;
  try {
    const snap = await window._fb.getDoc(window._fb.doc(_fbDb, 'users', uid));
    if (snap.exists()) {
      const d = snap.data();
      S.xp         = d.xp         ?? 0;
      S.hearts     = d.hearts     ?? MAX_H;
      S.streak     = d.streak     ?? 0;
      S.lastPlayed = d.lastPlayed ?? null;
      S.done       = d.done       ?? [];
      S.correct       = d.correct       ?? 0;
      S.premium       = d.premium       ?? false;
      S.achievements  = d.achievements  ?? {};
      S.createdAt     = d.createdAt?.toDate?.()?.toLocaleDateString('pt-BR') ?? '—';
      S.subjectDone   = d.subjectDone   ?? {};
    }
  } catch(e) { console.warn('Offline — usando dados locais'); }
}

function syncCloud() {
  if (!_fbDb || !window._currentUser || !window._fb) return;
  const uid  = window._currentUser.uid;
  const name = window._currentUser.displayName || 'Agente';
  window._fb.updateDoc(window._fb.doc(_fbDb, 'users', uid), {
    xp: S.xp, hearts: S.hearts, streak: S.streak,
    lastPlayed: S.lastPlayed, done: S.done,
    correct: S.correct || 0, premium: S.premium,
    achievements: S.achievements || {},
    subjectDone: S.subjectDone || {},
    lastLogin: window._fb.serverTimestamp(),
  }).catch(() => {});
  // Atualiza entrada pública no ranking (só dados não-sensíveis)
  const subjectDoneMap = S.subjectDone || {};
  const subjectXp = {};
  SUBJECTS.forEach(s => {
    if (s.id === 'csharp') return;
    subjectXp[s.id] = (subjectDoneMap[s.id] || []).length;
  });
  window._fb.setDoc(window._fb.doc(_fbDb, 'ranking', uid), {
    name, xp: S.xp, streak: S.streak,
    done: S.done.length + Object.values(subjectDoneMap).reduce((a, v) => a + v.length, 0),
    subjectDone: Object.fromEntries(SUBJECTS.map(s => [s.id, s.id === 'csharp' ? S.done.length : (subjectDoneMap[s.id] || []).length])),
    subjectXp,
    updatedAt: window._fb.serverTimestamp(),
  }).catch(() => {});
}

async function loadRanking() {
  if (!_fbDb || !window._fb) return [];
  try {
    const q    = window._fb.query(
      window._fb.collection(_fbDb, 'ranking'),
      window._fb.orderBy('xp', 'desc'),
      window._fb.limit(50)
    );
    const snap = await window._fb.getDocs(q);
    return snap.docs.map(d => ({ uid: d.id, ...d.data() }));
  } catch(e) { console.warn('Ranking indisponível:', e.message); return []; }
}

