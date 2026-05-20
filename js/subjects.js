// ═══════════════════════════════════════════════════════
// SUBJECTS — Tela de seleção de matéria e mapa filtrado
// Depende de: config.js, state.js, firebase.js, navigation.js
// ═══════════════════════════════════════════════════════

let _currentSubjectId = 'csharp';
let _teacherMissionsCache = {};

function refreshSubjectSelect() {
  const grid = document.getElementById('sb-grid');
  if (!grid) return;
  const u = window._currentUser;
  if (u) {
    const ini = (u.displayName || '?').split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
    const av = document.getElementById('sb-av');
    if (av) av.innerHTML = u.photoURL ? `<img src="${u.photoURL}" alt="">` : ini;
    const nm = document.getElementById('sb-name');
    if (nm) nm.textContent = u.displayName || 'Agente';
  }

  const done = S.subjectDone || {};
  grid.innerHTML = SUBJECTS.map(s => {
    const count = done[s.id]?.length || 0;
    return `
    <div class="sb-card" style="--subj-color:${s.color}" onclick="openSubject('${s.id}')">
      <div class="sb-card-ico">${s.icon}</div>
      <div class="sb-card-label">${s.label}</div>
      <div class="sb-card-desc">${s.desc}</div>
      <div class="sb-card-count">${count} missões completas</div>
    </div>`;
  }).join('');
}

async function openSubject(subjectId) {
  _currentSubjectId = subjectId;
  S.currentSubject  = subjectId;
  SEL.subjectId     = subjectId;
  const subj = SUBJECTS.find(s => s.id === subjectId);
  document.getElementById('mp-subj-label').textContent = subj ? subj.label : '';
  document.getElementById('mp-subj-icon').textContent  = subj ? subj.icon  : '';
  await refreshSubjectMap();
  go('mp');
}

async function refreshSubjectMap() {
  regenH();
  renderH('mp-hearts');
  document.getElementById('mp-xp').textContent      = S.xp;
  document.getElementById('lv-label').textContent   = `${getLvName()} · NV ${getLv()}`;
  document.getElementById('lv-xp').textContent      = `${getLvXp()} / ${XP_LV} XP`;
  document.getElementById('lv-fill').style.width    = getLvPct() + '%';

  const list = document.getElementById('mlist');
  list.innerHTML = '<div class="tc-loading">// CARREGANDO...</div>';

  let allMissions = [];
  const subjectDone = (S.subjectDone || {})[_currentSubjectId] || [];

  if (_currentSubjectId === 'csharp') {
    allMissions = MISSIONS.map(m => ({ ...m, _source: 'local' }));
  } else {
    if (!_teacherMissionsCache[_currentSubjectId]) {
      _teacherMissionsCache[_currentSubjectId] = await loadTeacherMissions(_currentSubjectId);
    }
    allMissions = _teacherMissionsCache[_currentSubjectId].map((m, i) => ({
      ...m,
      id: m._firestoreId || i,
      _source: 'firestore',
    }));
  }

  list.innerHTML = '';
  if (!allMissions.length) {
    list.innerHTML = '<div class="tc-empty" style="margin:20px">Nenhuma atividade disponível para esta matéria ainda.</div>';
    return;
  }

  const doneLst = _currentSubjectId === 'csharp'
    ? (Array.isArray(S.done) ? S.done : [])
    : subjectDone;

  allMissions.forEach((m, i) => {
    if (!m) return;
    const done       = doneLst.includes(m.id ?? i);
    const seqLocked  = i > 0 && !doneLst.includes((allMissions[i-1]?.id) ?? (i-1));
    const premLocked = !m.free && !S.premium;
    const cl    = 'mcard' + (done ? ' done' : seqLocked ? ' lck' : premLocked ? ' plck' : ' avail');
    const st    = done ? 'done' : seqLocked ? 'lck' : premLocked ? 'plck' : 'avail';
    const stTxt = done ? '✓'   : seqLocked ? '🔒'  : premLocked ? '👑'   : '▶';
    const steps = m.steps || [];
    const card  = document.createElement('div');
    card.className = cl;
    card.innerHTML = `
      <div class="mic">${/\.\w+$/.test(m.icon || '') ? `<img src="${m.icon}" alt="${m.title}">` : (m.icon || '📝')}</div>
      <div class="minfo">
        <h3>${m.title || 'Atividade ' + (i+1)}</h3>
        <p>// ${steps.length} EXERCÍCIOS · ${steps.length * 10 + 50} XP</p>
        <div class="mxpbar"><div class="mxpbar-f" style="width:${done ? 100 : 0}%"></div></div>
      </div>
      <div class="mst ${st}">${stTxt}</div>`;
    if (!seqLocked || done) card.onclick = () => openSubjectMission(m, i, allMissions, doneLst);
    list.appendChild(card);
  });
}

function openSubjectMission(m, i, allMissions, doneLst) {
  if (!m.free && !S.premium) { go('pw'); return; }
  if (S.hearts <= 0 && !S.premium) { showNoH(); return; }

  SEL.mission      = i;
  SEL.subjectId    = _currentSubjectId;
  SEL.missionObj   = m;
  SEL.allMissions  = allMissions;
  SEL.subjectDoneLst = doneLst;

  document.getElementById('it-num').textContent       = `ATIVIDADE ${String(i+1).padStart(2,'0')} / ${allMissions.length}`;
  document.getElementById('it-hdr-title').textContent = m.title || '';
  const icoEl = document.getElementById('it-ico');
  if (/\.\w+$/.test(m.icon || '')) {
    icoEl.innerHTML = `<img src="${m.icon}" alt="${m.title}" style="width:3.5rem;height:3.5rem;object-fit:contain;">`;
  } else {
    icoEl.textContent = m.icon || '📝';
  }
  document.getElementById('it-title').textContent = m.title || '';
  document.getElementById('it-desc').textContent  = m.desc  || '';
  document.getElementById('it-objs').innerHTML = (m.objs || []).map(o =>
    `<div class="obj-row"><div class="obj-dot"></div>${o}</div>`).join('');
  go('it');
}

function markSubjectMissionDone(missionId) {
  if (_currentSubjectId === 'csharp') return;
  if (!S.subjectDone) S.subjectDone = {};
  if (!S.subjectDone[_currentSubjectId]) S.subjectDone[_currentSubjectId] = [];
  if (!S.subjectDone[_currentSubjectId].includes(missionId)) {
    S.subjectDone[_currentSubjectId].push(missionId);
  }
  saveS();
  delete _teacherMissionsCache[_currentSubjectId];
}
