// ═══════════════════════════════════════════════════════
// APP — Service Worker (PWA offline) e inicialização
// Depende de: todos os módulos anteriores
// ═══════════════════════════════════════════════════════

// ── PWA Install ──

let _installPrompt = null;

function _isStandalone() {
  return window.matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
}

function _isIos() {
  return /iPhone|iPad|iPod/.test(navigator.userAgent) && !window.MSStream;
}

function _showInstallBanner() {
  if (_isStandalone()) return;
  const el = document.getElementById('install-banner');
  if (el) el.style.display = 'flex';
}

function promptInstall() {
  if (_installPrompt) {
    _installPrompt.prompt();
    _installPrompt.userChoice.then(() => {
      _installPrompt = null;
      const el = document.getElementById('install-banner');
      if (el) el.style.display = 'none';
    });
  } else if (_isIos()) {
    document.getElementById('modal-ios-install').classList.add('on');
  }
}

function closeIosInstall() {
  document.getElementById('modal-ios-install').classList.remove('on');
}

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  _installPrompt = e;
  _showInstallBanner();
});

window.addEventListener('appinstalled', () => {
  const el = document.getElementById('install-banner');
  if (el) el.style.display = 'none';
});

// ── Service Worker (offline / PWA) ──
if ('serviceWorker' in navigator) {
  const sw = `const C='lcs-v2';self.addEventListener('install',e=>{self.skipWaiting()});self.addEventListener('fetch',e=>{e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));});`;
  navigator.serviceWorker
    .register(URL.createObjectURL(new Blob([sw], { type: 'application/javascript' })))
    .catch(() => {});
}

// ── Inicialização ──
function initApp() {
  if (FIREBASE_CONFIG.apiKey && FIREBASE_CONFIG.apiKey !== 'SUA_API_KEY') {
    showLoading('CONECTANDO...');
    loadFirebase();
  } else {
    loadFirebase(); // dispara modo demo em caso de erro
  }
}

window.addEventListener('DOMContentLoaded', () => {
  if (_isIos() && !_isStandalone()) _showInstallBanner();
  initApp();
});

// Esconde o loading caso o usuário volte da tela de pagamento (bfcache restore)
window.addEventListener('pageshow', (e) => {
  if (e.persisted) hideLoading();
});
