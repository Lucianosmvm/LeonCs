// ═══════════════════════════════════════════════════════
// NAVIGATION — Roteamento entre telas e refresh de UI
// Depende de: config.js, state.js, auth.js, ui.js
// ═══════════════════════════════════════════════════════

// Mapa de tela → tela pai (para o botão voltar do Android)
const BACK_MAP = {
  hm: null,   // home não tem pai — sai do app
  sb: 'hm',
  mp: 'sb',
  it: 'mp',
  ls: 'mp',
  rs: 'mp',
  pr: 'hm',
  rk: 'hm',
  ac: 'hm',
  pw: 'hm',
  tc: 'hm',
  'tc-edit': 'tc',
  'tc-stats': 'tc',
};

let _navInProgress = false;

function go(id) {
  if (id === 'pw' && S.premium) { showToast('Você já é Premium! 👑', 'ok'); id = 'hm'; }
  document.querySelectorAll('.scr').forEach(s => s.classList.remove('on'));
  const el = document.getElementById(id);
  if (!el) { console.warn('Tela não encontrada:', id); return; }
  el.classList.add('on');
  // Empurra estado no histórico para o botão voltar do Android capturar
  if (!_navInProgress) {
    history.pushState({ screen: id }, '', '');
  }
  if (id === 'hm') refreshHome();
  if (id === 'sb') refreshSubjectSelect();
  if (id === 'mp') { if (!SEL.subjectId || SEL.subjectId === 'csharp') refreshMap(); else refreshSubjectMap(); }
  if (id === 'pr') refreshProfile();
  if (id === 'rk') refreshRank();
  if (id === 'ac') renderAchievements();
  // Desktop: telas de auth ficam fullscreen, as demais mostram sidebars
  const authScreens = ['sp', 'ob', 'au'];
  document.body.classList.toggle('desk-auth', authScreens.includes(id));
  // Destaca link ativo na nav desktop e mobile
  const navMap = { hm: 'dn-hm', sb: 'dn-sb', mp: 'dn-mp', pr: 'dn-pr', pw: 'dn-pw', rk: 'dn-rk' };
  const mobMap = { hm: 'mn-hm', sb: 'mn-sb', mp: 'mn-mp', pr: 'mn-pr', rk: 'mn-rk' };
  document.querySelectorAll('.dn-link').forEach(l => l.classList.remove('active'));
  document.querySelectorAll('.mn-link').forEach(l => l.classList.remove('active'));
  const activeLink = document.getElementById(navMap[id]);
  if (activeLink) activeLink.classList.add('active');
  const activeMob = document.getElementById(mobMap[id]);
  if (activeMob) activeMob.classList.add('active');
  // Oculta mob-nav em telas de auth
  const authScreens2 = ['sp', 'ob', 'au'];
  const mobNav = document.getElementById('mob-nav');
  if (mobNav) mobNav.style.display = authScreens2.includes(id) ? 'none' : '';
  refreshDeskSidebar();
}

// ── Sidebar desktop direita ──

function refreshDeskSidebar() {
  const _u = window._currentUser;
  if (_u) {
    const ini = (_u.displayName || '?').split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
    const av = document.getElementById('da-av');
    if (av) av.innerHTML = _u.photoURL ? `<img src="${_u.photoURL}">` : ini;
    const nm = document.getElementById('da-name');
    if (nm) nm.textContent = _u.displayName || 'Agente';
    const pl = document.getElementById('da-plan');
    if (pl) { pl.textContent = S.premium ? '👑 PREMIUM' : 'FREE'; pl.className = 'da-plan ' + (S.premium ? 'gold' : 'dim'); }
  }
  const xpEl = document.getElementById('da-xp');    if (xpEl) xpEl.textContent = S.xp;
  const lvEl = document.getElementById('da-lv');    if (lvEl) lvEl.textContent = getLv();
  const _totalDone = S.done.length + Object.values(S.subjectDone || {}).reduce((a,v)=>a+v.length,0);
  const msEl = document.getElementById('da-ms');    if (msEl) msEl.textContent = _totalDone;
  const stEl = document.getElementById('da-streak'); if (stEl) stEl.textContent = S.streak;
  renderH('da-hearts');
}

// ── Home ──

let htInterval = null;

function refreshHome() {
  regenH();
  renderH('hm-hearts');
  document.getElementById('hm-xp').textContent     = S.xp;
  document.getElementById('hm-lv').textContent     = getLv();
  const _hmTotal = S.done.length + Object.values(S.subjectDone || {}).reduce((a,v)=>a+v.length,0);
  document.getElementById('hm-ms').textContent     = _hmTotal;
  document.getElementById('hm-streak').textContent = S.streak + (S.streak === 1 ? ' DIA' : ' DIAS');
  document.getElementById('hm-badge').textContent  = `// ${getLvName()} · NÍVEL ${getLv()}`;

  const _u = window._currentUser;
  if (_u) {
    const _ini = (_u.displayName || '?').split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
    const _av = document.getElementById('hm-av');
    if (_av) _av.innerHTML = _u.photoURL
      ? `<img src="${_u.photoURL}" style="width:100%;height:100%;border-radius:50%;object-fit:cover">`
      : _ini;
    const _un = document.getElementById('hm-uname');
    if (_un) _un.textContent = _u.displayName || 'Agente';
    const _pl = document.getElementById('hm-uplan');
    if (_pl) { _pl.textContent = S.premium ? '👑 PREMIUM' : 'FREE'; _pl.className = 'hm-uplan ' + (S.premium ? 'gold' : 'dim'); }
  }

  const _mb = document.getElementById('hm-btn-mission');
  if (_mb) { _mb.innerHTML = S.done.length > 0 ? '▶ &nbsp;CONTINUAR' : '▶ &nbsp;INICIAR'; _mb.onclick = () => go('sb'); }

  const _pb = document.getElementById('hm-premium-banner');
  if (_pb) _pb.style.display = S.premium ? 'none' : 'flex';

  clearInterval(htInterval);
  const tel = document.getElementById('hm-htimer');
  function tick() {
    regenH();
    renderH('hm-hearts');
    tel.textContent = S.premium ? '' : S.hearts >= MAX_H ? '' : `+❤️ em ${fmtTime(nextHeartMs())}`;
  }
  tick();
  htInterval = setInterval(tick, 1000);
  refreshDeskSidebar();
}

// ── Ranking Global ──

async function refreshRank() {
  const body = document.getElementById('rk-list');
  if (!body) return;
  body.innerHTML = '<div class="rk-loading">// CARREGANDO RANKING...</div>';
  const entries = await loadRanking();
  if (!entries.length) {
    body.innerHTML = '<div class="rk-empty">Nenhum agente no ranking ainda.<br>Complete uma missão para aparecer aqui!</div>';
    return;
  }
  const myUid = window._currentUser?.uid;
  body.innerHTML = entries.map((e, i) => {
    const isMe  = e.uid === myUid;
    const medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `${i + 1}.`;
    return `<div class="rk-row${isMe ? ' rk-me' : ''}">
      <div class="rk-pos">${medal}</div>
      <div class="rk-info">
        <div class="rk-name">${e.name}${isMe ? '<span class="rk-you">VOCÊ</span>' : ''}</div>
        <div class="rk-meta">${e.done} missões · ${e.streak} dias 🎯</div>
      </div>
      <div class="rk-xp">${e.xp} XP</div>
    </div>`;
  }).join('');
}

// ── Map / Missões ──

function refreshMap() {
  regenH();
  renderH('mp-hearts');
  document.getElementById('mp-xp').textContent      = S.xp;
  document.getElementById('lv-label').textContent   = `${getLvName()} · NV ${getLv()}`;
  document.getElementById('lv-xp').textContent      = `${getLvXp()} / ${XP_LV} XP`;
  document.getElementById('lv-fill').style.width    = getLvPct() + '%';
  const subjLabel = document.getElementById('mp-subj-label');
  if (subjLabel && (!SEL.subjectId || SEL.subjectId === 'csharp')) { subjLabel.textContent = 'C#'; }
  const subjIcon = document.getElementById('mp-subj-icon');
  if (subjIcon && (!SEL.subjectId || SEL.subjectId === 'csharp')) { subjIcon.textContent = '🎮'; }

  const list = document.getElementById('mlist');
  list.innerHTML = '';
  const doneLst = Array.isArray(S.done) ? S.done : [];
  MISSIONS.forEach((m, i) => {
    if (!m) return;
    const done       = doneLst.includes(m.id);
    const seqLocked  = i > 0 && MISSIONS[i - 1] && !doneLst.includes(MISSIONS[i - 1].id);
    const premLocked = !m.free && !S.premium;
    const cl    = 'mcard' + (done ? ' done' : seqLocked ? ' lck' : premLocked ? ' plck' : ' avail');
    const st    = done ? 'done' : seqLocked ? 'lck' : premLocked ? 'plck' : 'avail';
    const stTxt = done ? '✓'   : seqLocked ? '🔒'  : premLocked ? '👑'   : '▶';
    const card  = document.createElement('div');
    card.className = cl;
    card.innerHTML = `
      <div class="mic">${/\.\w+$/.test(m.icon) ? `<img src="${m.icon}" alt="${m.title}">` : m.icon}</div>
      <div class="minfo">
        <h3>${m.title}</h3>
        <p>// ${m.steps.length} EXERCÍCIOS · ${m.steps.length * 10 + 50} XP</p>
        <div class="mxpbar"><div class="mxpbar-f" style="width:${done ? 100 : 0}%"></div></div>
      </div>
      <div class="mst ${st}">${stTxt}</div>`;
    if (!seqLocked || done) card.onclick = () => openMission(i);
    list.appendChild(card);
  });
}

// ── Botão voltar Android / histórico do browser ──

// Empurra um estado inicial para que o primeiro "voltar" não feche o app
window.addEventListener('DOMContentLoaded', () => {
  history.replaceState({ screen: 'hm' }, '', '');
});

window.addEventListener('popstate', (e) => {
  const currentScreen = document.querySelector('.scr.on');
  const currentId = currentScreen ? currentScreen.id : 'hm';
  const parent = BACK_MAP[currentId];

  // Sempre empurra novo estado para manter histórico navegável
  history.pushState({ screen: parent || 'hm' }, '', '');

  if (!parent) {
    // Está na home — deixa o comportamento padrão fechar o app
    // (o pushState acima impede o fechamento imediato; usuário precisará voltar de novo)
    return;
  }

  _navInProgress = true;
  go(parent);
  _navInProgress = false;
});
