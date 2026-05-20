// ═══════════════════════════════════════════════════════
// TEACHER — Painel do Professor: matérias, missões e stats de alunos
// ═══════════════════════════════════════════════════════

let _tcSubject    = null; // matéria selecionada no painel
let _tcSubjects   = [];   // matérias do professor no Firestore
let _tcMissions   = [];
let _tcEditing    = null;
let _tcSteps      = [];
let _tcStepIdx    = -1;
let _tcStepOpts   = [];

// ── Tela principal ──

async function refreshTeacher() {
  const u = window._currentUser;
  if (!u) return;
  const ini = (u.displayName || '?').split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
  const av = document.getElementById('tc-av');
  if (av) av.innerHTML = u.photoURL ? `<img src="${u.photoURL}" alt="">` : ini;
  const nm = document.getElementById('tc-name');
  if (nm) nm.textContent = u.displayName || 'Professor';

  await loadTcSubjects();
}

async function loadTcSubjects() {
  const tabs = document.getElementById('tc-subj-tabs');
  const list = document.getElementById('tc-mission-list');
  if (!tabs) return;

  tabs.innerHTML = '<span style="font-size:.7rem;color:var(--t3)">// CARREGANDO...</span>';

  // Carrega todas as matérias criadas por este professor
  try {
    const uid = window._currentUser?.uid;
    const q = window._fb.query(
      window._fb.collection(_fbDb, 'subjects'),
      window._fb.orderBy('createdAt', 'asc')
    );
    const snap = await window._fb.getDocs(q);
    _tcSubjects = snap.docs.map(d => ({ id: d.id, ...d.data() }));
  } catch(e) {
    _tcSubjects = [];
  }

  // Renderiza abas
  tabs.innerHTML = '';

  if (!_tcSubjects.length) {
    tabs.innerHTML = '<span style="font-size:.72rem;color:var(--t3)">Nenhuma matéria criada. Clique em + NOVA MATÉRIA</span>';
    if (list) list.innerHTML = '<div class="tc-empty">Crie uma matéria primeiro para adicionar atividades.</div>';
    return;
  }

  if (!_tcSubject || !_tcSubjects.find(s => s.id === _tcSubject)) {
    _tcSubject = _tcSubjects[0].id;
  }

  _tcSubjects.forEach(s => {
    const btn = document.createElement('button');
    btn.className = 'subj-tab' + (s.id === _tcSubject ? ' active' : '');
    btn.style.setProperty('--subj-color', s.color || '#c8a96e');
    btn.textContent = (s.icon || '📚') + ' ' + s.name;
    btn.dataset.sid = s.id;
    btn.addEventListener('click', () => {
      tabs.querySelectorAll('.subj-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      _tcSubject = s.id;
      loadTcMissions();
    });
    tabs.appendChild(btn);
  });

  loadTcMissions();
}

async function loadTcMissions() {
  const list = document.getElementById('tc-mission-list');
  if (!list || !_tcSubject) return;
  list.innerHTML = '<div class="tc-loading">// CARREGANDO ATIVIDADES...</div>';
  _tcMissions = await loadTeacherMissions(_tcSubject);
  if (!_tcMissions.length) {
    list.innerHTML = '<div class="tc-empty">Nenhuma atividade criada ainda.<br>Clique em + NOVA ATIVIDADE</div>';
    return;
  }
  list.innerHTML = _tcMissions.map((m, i) => `
    <div class="tc-mcard">
      <div class="tc-mcard-info">
        <div class="tc-mcard-title">${m.icon || '📝'} ${m.title || 'Sem título'}</div>
        <div class="tc-mcard-meta">${(m.steps || []).length} exercícios · Ordem ${m.order ?? i}</div>
      </div>
      <div class="tc-mcard-btns">
        <button class="tc-btn-edit" onclick="tcEditMission(${i})">✏️ Editar</button>
        <button class="tc-btn-del"  onclick="tcDeleteMission(${i})">🗑️</button>
      </div>
    </div>
  `).join('');
}

// ── Nova Matéria ──

function tcNewSubject() {
  document.getElementById('modal-subject').classList.add('on');
  document.getElementById('ms-name').value  = '';
  document.getElementById('ms-icon').value  = '📚';
  document.getElementById('ms-color').value = '#3498db';
  document.getElementById('ms-desc').value  = '';
  document.getElementById('ms-id').value    = '';
}

async function tcSaveSubject() {
  const name  = document.getElementById('ms-name').value.trim();
  const icon  = document.getElementById('ms-icon').value.trim() || '📚';
  const color = document.getElementById('ms-color').value || '#3498db';
  const desc  = document.getElementById('ms-desc').value.trim();
  const existingId = document.getElementById('ms-id').value.trim();

  if (!name) { showToast('Nome obrigatório.', 'err'); return; }

  showLoading('SALVANDO MATÉRIA...');
  try {
    const data = { name, icon, color, desc };
    if (existingId) data.id = existingId;
    await saveSubject(data);
    showToast('Matéria salva!', 'ok');
    document.getElementById('modal-subject').classList.remove('on');
    await loadTcSubjects();
  } catch(e) { showToast('Erro: ' + e.message, 'err'); }
  finally { hideLoading(); }
}

function tcCloseSubjectModal() {
  document.getElementById('modal-subject').classList.remove('on');
}

// ── Editor de missão ──

async function tcDeleteMission(i) {
  const m = _tcMissions[i];
  if (!m || !m._firestoreId) return;
  if (!confirm(`Excluir "${m.title}"? Irreversível.`)) return;
  showLoading('EXCLUINDO...');
  try {
    await deleteTeacherMission(_tcSubject, m._firestoreId);
    showToast('Atividade excluída.', 'ok');
    loadTcMissions();
  } catch(e) { showToast('Erro ao excluir.', 'err'); }
  finally { hideLoading(); }
}

function tcNewMission() {
  if (!_tcSubject) { showToast('Crie uma matéria primeiro.', 'err'); return; }
  _tcEditing = { title: '', icon: '📝', desc: '', objs: [''], free: true, order: _tcMissions.length, steps: [] };
  _tcSteps = [];
  renderTcEditor();
  go('tc-edit');
}

function tcEditMission(i) {
  _tcEditing = { ..._tcMissions[i] };
  _tcSteps = (_tcEditing.steps || []).map(s => ({ ...s }));
  renderTcEditor();
  go('tc-edit');
}

function renderTcEditor() {
  if (!_tcEditing) return;
  const el = id => document.getElementById(id);
  if (el('tce-title'))   el('tce-title').value   = _tcEditing.title || '';
  if (el('tce-icon'))    el('tce-icon').value     = _tcEditing.icon  || '📝';
  if (el('tce-desc'))    el('tce-desc').value     = _tcEditing.desc  || '';
  if (el('tce-order'))   el('tce-order').value    = _tcEditing.order ?? 0;
  if (el('tce-free'))    el('tce-free').checked   = _tcEditing.free  !== false;
  renderTcObjs();
  renderTcSteps();
}

function renderTcObjs() {
  const container = document.getElementById('tce-objs');
  if (!container) return;
  const objs = _tcEditing.objs || [''];
  container.innerHTML = objs.map((o, i) => `
    <div class="tce-obj-row">
      <input class="tce-inp" placeholder="Objetivo ${i+1}" value="${_esc(o)}"
             oninput="_tcEditing.objs[${i}]=this.value">
      <button class="tc-btn-del" onclick="tcRemoveObj(${i})">✕</button>
    </div>
  `).join('');
}

function tcAddObj() {
  if (!_tcEditing.objs) _tcEditing.objs = [];
  _tcEditing.objs.push('');
  renderTcObjs();
}

function tcRemoveObj(i) {
  _tcEditing.objs.splice(i, 1);
  renderTcObjs();
}

function renderTcSteps() {
  const container = document.getElementById('tce-steps');
  if (!container) return;
  if (!_tcSteps.length) {
    container.innerHTML = '<div class="tc-empty" style="margin:12px 0">Nenhum exercício. Adicione abaixo.</div>';
    return;
  }
  container.innerHTML = _tcSteps.map((s, i) => `
    <div class="tce-step-card">
      <div class="tce-step-head">
        <span class="tce-step-num">Q${i+1} · ${_stepTypeLabel(s.type)}</span>
        <div style="display:flex;gap:6px">
          <button class="tc-btn-edit" onclick="tcEditStep(${i})">✏️</button>
          <button class="tc-btn-del"  onclick="tcRemoveStep(${i})">✕</button>
        </div>
      </div>
      <div class="tce-step-q">${s.q || '(sem pergunta)'}</div>
    </div>
  `).join('');
}

function _stepTypeLabel(t) {
  return { mc: 'Múltipla Escolha', fill: 'Complete o Código', code: 'Leia o Código' }[t] || t;
}

function tcRemoveStep(i) {
  _tcSteps.splice(i, 1);
  renderTcSteps();
}

// ── Modal de exercício ──

function tcAddStep() {
  _tcStepIdx = -1;
  _tcStepOpts = [{ t: '', ok: true }, { t: '', ok: false }, { t: '', ok: false }, { t: '', ok: false }];
  _renderStepModal({});
  document.getElementById('modal-step').classList.add('on');
}

function tcEditStep(i) {
  _tcStepIdx = i;
  const s = _tcSteps[i];
  _tcStepOpts = (s.opts || [{ t: '', ok: true }, { t: '', ok: false }, { t: '', ok: false }, { t: '', ok: false }]).map(o => ({ ...o }));
  _renderStepModal(s);
  document.getElementById('modal-step').classList.add('on');
}

function _renderStepModal(s) {
  const el = id => document.getElementById(id);
  if (el('sm-type'))   el('sm-type').value   = s.type   || 'mc';
  if (el('sm-bubble')) el('sm-bubble').value  = s.bubble || '';
  if (el('sm-code'))   el('sm-code').value    = s.code   || '';
  if (el('sm-q'))      el('sm-q').value       = s.q      || '';
  if (el('sm-ans'))    el('sm-ans').value      = s.ans    || '';
  if (el('sm-exp'))    el('sm-exp').value      = s.exp    || '';
  _smTypeChange();
  _renderStepOpts();
}

function _smTypeChange() {
  const t = document.getElementById('sm-type')?.value;
  const fillRow  = document.getElementById('sm-fill-row');
  const optsArea = document.getElementById('sm-opts-area');
  if (fillRow)  fillRow.style.display  = t === 'fill' ? 'flex' : 'none';
  if (optsArea) optsArea.style.display = t !== 'fill' ? 'block' : 'none';
}

function _renderStepOpts() {
  const container = document.getElementById('sm-opts');
  if (!container) return;
  container.innerHTML = _tcStepOpts.map((o, i) => `
    <div class="sm-opt-row">
      <input type="radio" name="sm-correct" ${o.ok ? 'checked' : ''} onchange="_tcStepOpts.forEach((x,j)=>x.ok=j===${i})">
      <input class="tce-inp" placeholder="Opção ${String.fromCharCode(65+i)}" value="${_esc(o.t)}"
             oninput="_tcStepOpts[${i}].t=this.value">
    </div>
  `).join('');
}

function tcSaveStep() {
  const el = id => document.getElementById(id);
  const type   = el('sm-type')?.value   || 'mc';
  const bubble = el('sm-bubble')?.value || '';
  const code   = el('sm-code')?.value   || '';
  const q      = el('sm-q')?.value      || '';
  const ans    = el('sm-ans')?.value    || '';
  const exp    = el('sm-exp')?.value    || '';

  if (!q) { showToast('Pergunta obrigatória.', 'err'); return; }

  const step = { type, q, exp };
  if (bubble) step.bubble = bubble;
  if (code)   step.code   = code;

  if (type === 'fill') {
    if (!ans) { showToast('Resposta obrigatória para preenchimento.', 'err'); return; }
    step.ans = ans;
  } else {
    const filled = _tcStepOpts.filter(o => o.t.trim());
    if (filled.length < 2) { showToast('Adicione ao menos 2 opções.', 'err'); return; }
    if (!_tcStepOpts.some(o => o.ok && o.t.trim())) { showToast('Marque a opção correta.', 'err'); return; }
    step.opts = _tcStepOpts.filter(o => o.t.trim());
  }

  if (_tcStepIdx >= 0) { _tcSteps[_tcStepIdx] = step; } else { _tcSteps.push(step); }
  document.getElementById('modal-step').classList.remove('on');
  renderTcSteps();
}

function tcCloseStepModal() {
  document.getElementById('modal-step').classList.remove('on');
}

// ── Salvar missão ──

async function tcSaveMission() {
  const el = id => document.getElementById(id);
  _tcEditing.title   = el('tce-title')?.value.trim() || '';
  _tcEditing.icon    = el('tce-icon')?.value.trim()  || '📝';
  _tcEditing.desc    = el('tce-desc')?.value.trim()  || '';
  _tcEditing.order   = parseInt(el('tce-order')?.value) || 0;
  _tcEditing.free    = el('tce-free')?.checked !== false;
  _tcEditing.steps   = _tcSteps;
  _tcEditing.subject = _tcSubject;

  if (!_tcEditing.title) { showToast('Título obrigatório.', 'err'); return; }
  if (!_tcSteps.length)  { showToast('Adicione ao menos 1 exercício.', 'err'); return; }

  showLoading('SALVANDO...');
  try {
    await saveTeacherMission(_tcSubject, _tcEditing);
    showToast('Atividade salva!', 'ok');
    go('tc');
  } catch(e) { showToast('Erro ao salvar: ' + e.message, 'err'); }
  finally { hideLoading(); }
}

// ── Stats de alunos ──

async function refreshTcStats() {
  const list = document.getElementById('tc-students-list');
  if (!list) return;
  list.innerHTML = '<div class="tc-loading">// CARREGANDO ALUNOS...</div>';

  const [students, results] = await Promise.all([
    loadStudentList(),
    _tcSubject ? loadMissionResults(_tcSubject) : Promise.resolve([]),
  ]);

  document.getElementById('tc-students-count').textContent = students.length + ' alunos';

  if (!students.length) {
    list.innerHTML = '<div class="tc-empty">Nenhum aluno cadastrado ainda.</div>';
    return;
  }

  list.innerHTML = students.map((s, i) => {
    const medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `${i+1}.`;
    const subjectDone = (s.subjectDone || {})[_tcSubject || '']?.length || 0;
    const myResults = results.filter(r => r.uid === s.uid);
    const avgAcc = myResults.length
      ? Math.round(myResults.reduce((a, r) => a + (r.accuracy || 0), 0) / myResults.length)
      : null;

    return `<div class="rk-row">
      <div class="rk-pos">${medal}</div>
      <div class="rk-info">
        <div class="rk-name">${s.name || 'Aluno'}</div>
        <div class="rk-meta">
          ${s.xp || 0} XP · Nv ${Math.floor((s.xp||0)/200)+1}
          ${_tcSubject ? ` · ${subjectDone} ativ. nesta matéria` : ''}
          ${avgAcc !== null ? ` · ${avgAcc}% acerto` : ''}
        </div>
      </div>
      <div class="rk-xp">${s.done?.length || 0} missões</div>
    </div>`;
  }).join('');
}

// ── Utilitários ──

function _esc(str) {
  return (str || '').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
