// ═══════════════════════════════════════════════════════
// GAME — Motor da lição, exercícios, resultado e modal
// Depende de: config.js, state.js, navigation.js, missions.js
// ═══════════════════════════════════════════════════════

// ── Intro da missão ──

function openMission(i) {
  if (!MISSIONS[i]) return;
  const alreadyDone = S.done.includes(MISSIONS[i].id);
  if (!alreadyDone && i > 0 && !S.done.includes(MISSIONS[i - 1].id)) {
    showToast('Complete a missão anterior primeiro! 🔒', 'bad');
    return;
  }
  const _m = MISSIONS[i];
  if (!_m.free && !S.premium) { go('pw'); return; }
  if (S.hearts <= 0 && !S.premium) { showNoH(); return; }
  SEL.mission    = i;
  SEL.missionObj = null;
  SEL.subjectId  = 'csharp';
  const m = MISSIONS[i];
  document.getElementById('it-num').textContent       = `MISSÃO ${String(i + 1).padStart(2, '0')} / ${MISSIONS.length}`;
  document.getElementById('it-hdr-title').textContent = m.title;
  const icoEl = document.getElementById('it-ico');
  if (/\.\w+$/.test(m.icon)) {
    icoEl.innerHTML = `<img src="${m.icon}" alt="${m.title}" style="width:3.5rem;height:3.5rem;object-fit:contain;">`;
  } else {
    icoEl.textContent = m.icon;
  }
  document.getElementById('it-title').textContent     = m.title;
  document.getElementById('it-desc').textContent      = m.desc;
  document.getElementById('it-objs').innerHTML = m.objs.map(o =>
    `<div class="obj-row"><div class="obj-dot"></div>${o}</div>`).join('');
  go('it');
}

// ── Iniciar / renderizar lição ──

function _getActiveMission() {
  return SEL.missionObj || MISSIONS[SEL.mission];
}

function startLesson() {
  SEL.step = 0; SEL.correct = 0; SEL.wrong = 0; SEL.xpGained = 0;
  SEL.answered = false; SEL.chosen = null; SEL.combo = 0;
  go('ls');
  renderStep();
}

function renderStep() {
  if (S.hearts <= 0 && !S.premium) { showNoH(); return; }
  const m    = _getActiveMission();
  const step = m.steps[SEL.step];
  const pct  = (SEL.step / m.steps.length) * 100;

  document.getElementById('ls-prog').style.width = pct + '%';
  document.getElementById('ls-prog-cnt').textContent = (SEL.step + 1) + '/' + m.steps.length;
  renderH('ls-hearts');

  SEL.answered = false;
  SEL.chosen   = null;

  // Reset footer
  const fb  = document.getElementById('fb');
  fb.className = 'fb';
  const btn = document.getElementById('btn-chk');
  btn.disabled  = true;
  btn.className = 'btn-check';
  btn.textContent = 'VERIFICAR';
  btn.onclick = checkAns;

  // Monta corpo do passo
  const body      = document.getElementById('ls-body');
  const typeLabel = { mc: '// MÚLTIPLA ESCOLHA', code: '// LEIA O CÓDIGO', fill: '// COMPLETE O CÓDIGO' }[step.type];

  let html = `<div class="step-tag">${typeLabel}</div>`;

  if (step.bubble) {
    html += `<div class="bubble-row">
      <div class="char-av">🎮</div>
      <div class="bubble">${step.bubble}</div>
    </div>`;
  }

  if (step.code) {
    html += `<div class="code-wrap">
      <div class="code-header">
        <div class="code-dots">
          <div class="code-dot"></div>
          <div class="code-dot"></div>
          <div class="code-dot"></div>
        </div>
        <div class="code-lang">C#</div>
      </div>
      <pre class="code-pre">${step.code}</pre>
    </div>`;
  }

  html += `<div class="ls-q">${step.q}</div>`;

  if (step.type === 'fill') {
    html += `<input class="fill-inp" id="fill-inp" placeholder="Digite aqui..." autocomplete="off" autocorrect="off" spellcheck="false">`;
  } else {
    const L = ['A', 'B', 'C', 'D'];
    html += `<div class="opts">`;
    step.opts.forEach((o, i) => {
      html += `<button class="opt" onclick="selOpt(${i})" id="opt-${i}">
        <div class="opt-lt">${L[i]}</div>${o.t}
      </button>`;
    });
    html += `</div>`;
  }

  body.innerHTML = html;

  if (step.type === 'fill') {
    const inp = document.getElementById('fill-inp');
    inp.addEventListener('input',   () => { btn.disabled = inp.value.trim().length === 0; });
    inp.addEventListener('keydown', e  => { if (e.key === 'Enter' && !btn.disabled) checkAns(); });
    setTimeout(() => inp.focus(), 100);
  }
}

// ── Interação com opções ──

function selOpt(i) {
  if (SEL.answered) return;
  SEL.chosen = i;
  document.querySelectorAll('.opt').forEach((b, j) => b.classList.toggle('sel', j === i));
  document.getElementById('btn-chk').disabled = false;
}

// ── Verificar resposta ──

function checkAns() {
  if (SEL.answered) return;
  SEL.answered = true;
  const step = _getActiveMission().steps[SEL.step];
  let ok = false;

  if (step.type === 'fill') {
    const val = document.getElementById('fill-inp').value.trim();
    ok = val.trim().toLowerCase() === step.ans.trim().toLowerCase();
    document.getElementById('fill-inp').className = 'fill-inp ' + (ok ? 'ok' : 'bad');
  } else {
    ok = step.opts[SEL.chosen]?.ok === true;
    document.getElementById('opt-' + SEL.chosen)?.classList.add(ok ? 'ok' : 'bad');
    if (!ok) step.opts.forEach((_, i) => {
      if (step.opts[i].ok) document.getElementById('opt-' + i)?.classList.add('ok');
    });
  }

  if (ok) {
    S.xp += 10; SEL.xpGained += 10; SEL.correct++;
    S.correct = (S.correct || 0) + 1;
    saveS();
    xpFlash('+10 XP');
    SEL.combo++;
    if (SEL.combo > 0 && SEL.combo % 5 === 0) comboFlash();
  } else {
    SEL.wrong++;
    SEL.combo = 0;
    loseH();
  }

  showFb(ok, step.exp);
  const btn = document.getElementById('btn-chk');
  btn.textContent = 'CONTINUAR';
  btn.className   = 'btn-check ' + (ok ? 'cont' : 'cont-bad');
  btn.disabled    = false;
  btn.onclick     = nextStep;
}

function showFb(ok, txt) {
  const fb = document.getElementById('fb');
  fb.className = 'fb show ' + (ok ? 'ok' : 'bad');
  document.getElementById('fb-ico').textContent = ok ? '✅' : '❌';
  document.getElementById('fb-h').textContent   = ok ? 'Excelente, agente!' : 'Não desta vez...';
  document.getElementById('fb-p').textContent   = txt;
}

function xpFlash(txt) {
  const el = document.createElement('div');
  el.className  = 'xpflash';
  el.textContent = txt;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 900);
}

function comboFlash() {
  const el = document.createElement('div');
  el.className = 'combo-banner';
  el.innerHTML = '<span class="combo-ico">⚡</span><span class="combo-txt">SEQUÊNCIA LETAL ×' + SEL.combo + '</span>';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2000);
}

function launchConfetti() {
  const colors = ['#c8a96e','#e0c080','#4caf7d','#e05555','#ffffff','#f0a030'];
  for (let i = 0; i < 48; i++) {
    const el = document.createElement('div');
    el.className = 'confetti-piece';
    const size = 6 + Math.random() * 8;
    el.style.cssText = [
      'left:'      + (Math.random() * 100) + 'vw',
      'background:'+ colors[Math.floor(Math.random() * colors.length)],
      'width:'     + size + 'px',
      'height:'    + size + 'px',
      'animation-delay:'   + (Math.random() * 0.6) + 's',
      'animation-duration:'+ (1.4 + Math.random() * 1.2) + 's',
      'transform:rotate('  + (Math.random() * 360) + 'deg)',
    ].join(';');
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2800);
  }
}

// ── Próximo passo / fim ──

function nextStep() {
  SEL.step++;
  const m = _getActiveMission();
  if (SEL.step >= m.steps.length) {
    checkStreak();
    const subjectId = SEL.subjectId || 'csharp';
    if (subjectId === 'csharp') {
      if (!S.done.includes(m.id)) {
        S.done.push(m.id);
        S.xp += 50; SEL.xpGained += 50;
      }
    } else {
      const mid = m._resolvedId || m._firestoreId || m.id;
      markSubjectMissionDone(mid);
S.xp += 50; SEL.xpGained += 50;
    }
    saveS();
    checkAchievements();
    if (SEL.wrong === 0) unlockAchievement('perfect_run');
    showResult(true);
  } else {
    renderStep();
  }
}

function showResult(win) {
  const total = SEL.correct + SEL.wrong;
  const acc   = total > 0 ? Math.round((SEL.correct / total) * 100) : 100;
  document.getElementById('rs-ico').textContent       = win ? '🏆' : '💀';
  document.getElementById('rs-title').textContent     = win ? 'MISSÃO COMPLETA' : 'MISSÃO FALHOU';
  document.getElementById('rs-title').className       = 'rs-title ' + (win ? 'win' : 'lose');
  document.getElementById('rs-sub').textContent       = win ? 'Bem executado, agente.' : 'Reagrupe e tente de novo.';
  document.getElementById('rs-c').textContent         = SEL.correct;
  document.getElementById('rs-w').textContent         = SEL.wrong;
  document.getElementById('rs-a').textContent         = acc + '%';
  document.getElementById('rs-xp').textContent        = '+' + SEL.xpGained + ' XP';
  document.getElementById('rs-xp-box').style.opacity  = win ? '1' : '.4';

  const next = SEL.mission + 1;
  const btn  = document.getElementById('rs-next');
  const subjectId = SEL.subjectId || 'csharp';
  if (subjectId === 'csharp') {
    if (next < MISSIONS.length) {
      btn.textContent = `▶ PRÓXIMA: ${MISSIONS[next].title}`;
      btn.onclick = () => openMission(next);
    } else {
      btn.textContent = '🏆 VER MISSÕES';
      btn.onclick = () => go('mp');
    }
  } else {
    const all = SEL.allMissions || [];
    if (next < all.length) {
      btn.textContent = `▶ PRÓXIMA: ${all[next].title || 'Atividade ' + (next+1)}`;
      btn.onclick = () => { const doneLst = SEL.subjectDoneLst || []; openSubjectMission(all[next], next, all, doneLst); };
    } else {
      btn.textContent = '🏆 VER ATIVIDADES';
      btn.onclick = () => go('mp');
    }
  }
  go('rs');
  if (win && SEL.wrong === 0) setTimeout(launchConfetti, 300);
}

function retryLesson() {
  if (S.hearts <= 0 && !S.premium) { showNoH(); return; }
  startLesson();
}

function exitConfirm() {
  if (confirm('Abandonar a missão?')) go('mp');
}

// ── Modal sem vidas ──

let mInt = null;

function showNoH() {
  document.getElementById('modal-nh').classList.add('on');
  clearInterval(mInt);
  function tick() {
    regenH();
    renderH('hm-hearts');
    renderH('mp-hearts');
    const el = document.getElementById('modal-timer');
    if (S.hearts >= MAX_H) { el.textContent = 'VIDAS CHEIAS! ❤️'; clearInterval(mInt); }
    else el.textContent = fmtTime(nextHeartMs());
  }
  tick();
  mInt = setInterval(tick, 1000);
}

function closeModal() {
  document.getElementById('modal-nh').classList.remove('on');
  clearInterval(mInt);
}
