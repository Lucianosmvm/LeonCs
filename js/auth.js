// ═══════════════════════════════════════════════════════
// AUTH — Registro, login, logout e perfil do usuário
// Depende de: config.js, state.js, firebase.js, ui.js, navigation.js
// ═══════════════════════════════════════════════════════

// ── Mensagens de erro Firebase ──

function _fbErrMsg(code) {
  const m = {
    'auth/email-already-in-use': 'Este e-mail já está em uso.',
    'auth/invalid-email':        'E-mail inválido.',
    'auth/weak-password':        'Senha fraca (mín. 6 caracteres).',
    'auth/user-not-found':       'Usuário não encontrado.',
    'auth/wrong-password':       'Senha incorreta.',
    'auth/invalid-credential':   'E-mail ou senha incorretos.',
    'auth/too-many-requests':    'Muitas tentativas. Tente mais tarde.',
    'auth/popup-closed-by-user': 'Login cancelado.',
    'auth/network-request-failed':    'Sem conexão com a internet.',
    'auth/unauthorized-domain':       'Domínio não autorizado. Adicione-o no Firebase Console → Authentication → Authorized domains.',
    'auth/operation-not-allowed':     'Login com Google não está ativado no Firebase Console.',
    'auth/popup-blocked':             'Popup bloqueado pelo navegador. Permita popups para este site.',
    'auth/cancelled-popup-request':   'Login cancelado.',
  };
  return m[code] || `Erro inesperado (${code}). Tente novamente.`;
}

function _clearAuthErrs() {
  ['reg-name-err', 'reg-email-err', 'reg-pass-err', 'log-email-err', 'log-pass-err']
    .forEach(id => { const el = document.getElementById(id); if (el) el.textContent = ''; });
  document.querySelectorAll('input').forEach(i => i.classList.remove('err'));
}

// ── Registro ──

async function doRegister() {
  if (!_fbAuth || !window._fb) { showToast('Configure o Firebase primeiro!', 'err'); return; }
  _clearAuthErrs();
  const name  = document.getElementById('reg-name').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const pass  = document.getElementById('reg-pass').value;
  let valid = true;
  if (!name)         { document.getElementById('reg-name-err').textContent  = 'Nome obrigatório';    document.getElementById('reg-name').classList.add('err');  valid = false; }
  if (!email)        { document.getElementById('reg-email-err').textContent = 'E-mail obrigatório';  document.getElementById('reg-email').classList.add('err'); valid = false; }
  if (pass.length<6) { document.getElementById('reg-pass-err').textContent  = 'Mín. 6 caracteres';  document.getElementById('reg-pass').classList.add('err');  valid = false; }
  if (!valid) return;
  showLoading('CRIANDO CONTA...');
  try {
    const cred = await window._fb.createUserWithEmailAndPassword(_fbAuth, email, pass);
    await window._fb.updateProfile(cred.user, { displayName: name });
    await _ensureUserDoc(cred.user);
    showToast('Conta criada! Bem-vindo, ' + name + '!', 'ok');
    // onAuthStateChanged dispara automaticamente
  } catch(e) {
    document.getElementById('reg-email-err').textContent = _fbErrMsg(e.code);
    hideLoading();
  }
}

// ── Login ──

async function doLogin() {
  if (!_fbAuth || !window._fb) { showToast('Configure o Firebase!', 'err'); return; }
  _clearAuthErrs();
  const email = document.getElementById('log-email').value.trim();
  const pass  = document.getElementById('log-pass').value;
  if (!email) { document.getElementById('log-email-err').textContent = 'E-mail obrigatório'; return; }
  if (!pass)  { document.getElementById('log-pass-err').textContent  = 'Senha obrigatória';  return; }
  showLoading('ENTRANDO...');
  try {
    await window._fb.signInWithEmailAndPassword(_fbAuth, email, pass);
    // onAuthStateChanged dispara → go('hm')
  } catch(e) {
    document.getElementById('log-pass-err').textContent = _fbErrMsg(e.code);
    hideLoading();
  }
}

// ── Detecção de WebView (TikTok, Instagram, etc.) ──

function _isInAppBrowser() {
  const ua = navigator.userAgent || '';
  return /musical_ly|TikTok|BytedanceWebview|Instagram|FBAN|FBAV|FB_IAB|Line\/|KAKAOTALK|MicroMessenger/i.test(ua)
    || (typeof window.ReactNativeWebView !== 'undefined');
}

function _openInExternalBrowser() {
  const url = location.href;
  // Tenta Android Intent (abre no Chrome)
  const intent = 'intent://' + url.replace(/^https?:\/\//, '') + '#Intent;scheme=https;package=com.android.chrome;end';
  const link = document.createElement('a');
  link.href = intent;
  link.click();
  // Fallback: mostra instrução manual
  setTimeout(() => {
    showToast('Toque nos 3 pontos (⋮) e escolha "Abrir no navegador"', 'info');
  }, 500);
}

// ── Login com Google ──

async function loginGoogle() {
  if (!_fbAuth || !window._fb) { showToast('Configure o Firebase!', 'err'); return; }

  if (_isInAppBrowser()) {
    _openInExternalBrowser();
    return;
  }

  showLoading('CONECTANDO...');
  try {
    const cred = await window._fb.signInWithPopup(_fbAuth, new window._fb.GoogleAuthProvider());
    await _ensureUserDoc(cred.user);
    unlockAchievement('google_login');
    // onAuthStateChanged dispara → go('hm')
  } catch(e) {
    showToast(_fbErrMsg(e.code), 'err');
    hideLoading();
  }
}

// ── Logout ──

async function doLogout() {
  if (!confirm('Deseja sair da conta?')) return;
  window._loggingOut = true;
  try { if (_fbAuth && window._fb) await window._fb.signOut(_fbAuth); } catch(e) {}
  window._currentUser = null;
  S = defState();
  _saveLocal();
  document.querySelectorAll('.scr').forEach(s => s.classList.remove('on'));
  document.getElementById('ob').classList.add('on');
  document.body.classList.add('desk-auth');
  showToast('Até mais, agente!', 'info');
}

// ── Recuperar senha ──

async function doForgotPass() {
  const email = document.getElementById('log-email').value.trim();
  if (!email) { showToast('Digite seu e-mail primeiro', 'err'); return; }
  if (!_fbAuth || !window._fb) return;
  showLoading('ENVIANDO...');
  try {
    await window._fb.sendPasswordResetEmail(_fbAuth, email);
    showToast('E-mail de recuperação enviado!', 'ok');
  } catch(e) { showToast(_fbErrMsg(e.code), 'err'); }
  finally { hideLoading(); }
}

// ── Excluir conta ──

async function doDeleteAccount() {
  if (!confirm('Apagar sua conta e todo progresso? Irreversível.')) return;
  if (!confirm('Confirma exclusão definitiva?')) return;
  showLoading('REMOVENDO...');
  try {
    if (_fbDb && window._currentUser && window._fb) {
      await window._fb.deleteDoc(window._fb.doc(_fbDb, 'users', window._currentUser.uid));
      await window._fb.deleteUser(window._currentUser);
    }
    S = defState();
    _saveLocal();
    go('ob');
    showToast('Conta removida.', 'info');
  } catch(e) { showToast('Faça login novamente para excluir.', 'err'); }
  finally { hideLoading(); }
}

// ── UI de Auth ──

function goAuth(tab) {
  go('au');
  switchAuthTab(tab);
}

function switchAuthTab(tab) {
  document.getElementById('tab-reg').classList.toggle('active', tab === 'reg');
  document.getElementById('tab-log').classList.toggle('active', tab === 'log');
  document.getElementById('form-reg').style.display = tab === 'reg' ? 'flex' : 'none';
  document.getElementById('form-log').style.display = tab === 'log' ? 'flex' : 'none';
  document.getElementById('au-hdr-title').textContent = tab === 'reg' ? 'CRIAR CONTA' : 'ENTRAR';
}

// ── Perfil ──

function refreshProfile() {
  const u = window._currentUser;
  if (!u) return;
  const ini = (u.displayName || '?').split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
  const av  = document.getElementById('pr-av');
  av.innerHTML = u.photoURL ? `<img src="${u.photoURL}" alt="">` : ini;
  document.getElementById('pr-uname').textContent   = u.displayName || 'Agente';
  document.getElementById('pr-uemail').textContent  = u.email || '';
  const pill = document.getElementById('pr-pill');
  pill.textContent = S.premium ? '👑 PREMIUM' : 'FREE';
  pill.className   = 'pr-pill ' + (S.premium ? 'premium' : 'free');
  document.getElementById('pr-xp').textContent      = S.xp + ' XP';
  document.getElementById('pr-lv').textContent      = getLv() + ' — ' + getLvName();
  document.getElementById('pr-streak').textContent  = S.streak + ' dias 🎯';
  const _prTotal = S.done.length + Object.values(S.subjectDone || {}).reduce((a,v)=>a+v.length,0);
  document.getElementById('pr-ms').textContent      = _prTotal + ' missões completas';
  document.getElementById('pr-correct').textContent = S.correct || 0;
  document.getElementById('pr-since').textContent   = S.createdAt || '—';
  const upBtn = document.getElementById('pr-upgrade-btn');
  if (upBtn) upBtn.style.display = S.premium ? 'none' : 'flex';
}
