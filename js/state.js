// ═══════════════════════════════════════════════════════
// STATE — Estado do jogo, persistência local, corações e nível
// Depende de: config.js
// ═══════════════════════════════════════════════════════

// ── Persistência ──

function defState() {
  return { xp: 0, hearts: MAX_H, lastHeartLost: null, streak: 0, lastPlayed: null, done: [], correct: 0, premium: false, createdAt: '', achievements: {}, currentSubject: 'csharp', subjectDone: {} };
}

function loadS() {
  try { const r = localStorage.getItem(KEY); return r ? { ...defState(), ...JSON.parse(r) } : defState(); }
  catch(e) { return defState(); }
}

function saveS() {
  try { localStorage.setItem(KEY, JSON.stringify(S)); } catch(e) {}
  syncCloud();
}

function _saveLocal() {
  try { localStorage.setItem(KEY, JSON.stringify(S)); } catch(e) {}
}

let S = loadS();

// ── Sessão da lição ──
let SEL = { mission: 0, step: 0, correct: 0, wrong: 0, xpGained: 0, answered: false, chosen: null };

// ── Regen de corações ──

function regenH() {
  if (S.premium) { S.hearts = MAX_H; S.lastHeartLost = null; return; }
  if (S.hearts >= MAX_H) { S.lastHeartLost = null; return; }
  if (!S.lastHeartLost) return;
  const elapsed = Date.now() - S.lastHeartLost;
  const regen = Math.floor(elapsed / REGEN_MS);
  if (regen > 0) {
    S.hearts = Math.min(MAX_H, S.hearts + regen);
    if (S.hearts >= MAX_H) { S.hearts = MAX_H; S.lastHeartLost = null; }
    else { S.lastHeartLost += regen * REGEN_MS; }
    saveS();
    renderH('hm-hearts');
    renderH('mp-hearts');
    renderH('ls-hearts');
  }
}

function nextHeartMs() {
  if (S.hearts >= MAX_H || !S.lastHeartLost) return 0;
  return REGEN_MS - ((Date.now() - S.lastHeartLost) % REGEN_MS);
}

function fmtTime(ms) {
  const s = Math.ceil(ms / 1000);
  return `${Math.floor(s / 60).toString().padStart(2, '0')}:${(s % 60).toString().padStart(2, '0')}`;
}

function renderH(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = '';
  if (S.premium) {
    const h = document.createElement('span');
    h.className = 'hrt hrt-inf';
    h.textContent = '∞';
    el.appendChild(h);
    return;
  }
  for (let i = 0; i < MAX_H; i++) {
    const h = document.createElement('span');
    h.className = 'hrt' + (i >= S.hearts ? ' off' : '');
    h.textContent = '❤️';
    el.appendChild(h);
  }
}

function loseH() {
  if (S.premium) return;
  if (S.hearts > 0) {
    S.hearts--;
    if (S.hearts < MAX_H) S.lastHeartLost = Date.now();
    if (S.hearts === 0)   S.lastHeartLost = Date.now();
    saveS();
  }
  renderH('ls-hearts');
  renderH('mp-hearts');
  renderH('hm-hearts');
}

// ── Ofensiva (streak) ──

// Chamado no login: só verifica se perdeu a ofensiva, não incrementa
function checkStreakLoss() {
  if (!S.lastPlayed || S.lastPlayed === new Date().toDateString()) return;
  const diff = Math.floor((new Date() - new Date(S.lastPlayed)) / 86400000);
  if (diff > 1) { S.streak = 0; _saveLocal(); }
}

// Chamado ao concluir missão: incrementa ou reseta a ofensiva
function checkStreak() {
  const today = new Date().toDateString();
  if (S.lastPlayed === today) return; // já contou hoje
  const diff = S.lastPlayed ? Math.floor((new Date() - new Date(S.lastPlayed)) / 86400000) : 1;
  S.streak = diff === 1 ? S.streak + 1 : 1;
  S.lastPlayed = today;
  saveS();
}

// ── Nível ──

function getLv()     { return Math.floor(S.xp / XP_LV) + 1; }
function getLvXp()   { return S.xp % XP_LV; }
function getLvPct()  { return (getLvXp() / XP_LV) * 100; }
function getLvName() { return LV_NAMES[Math.min(getLv() - 1, LV_NAMES.length - 1)]; }
