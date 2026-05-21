// Embaralha as opções de questões MC nas missões C# para distribuir respostas corretas uniformemente
// Uso: node tools/shuffle_missions.js

const fs = require('fs');
const path = require('path');

function seededRandom(seed) {
  let s = seed;
  return function() {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0xffffffff;
  };
}

function shuffleArray(arr, rand) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function shuffleMissionFile(filePath, fileIndex) {
  let src = fs.readFileSync(filePath, 'utf8');

  // Localiza cada bloco opts: [ ... ] e embaralha as opções
  let questionIndex = 0;
  src = src.replace(/opts:\s*\[([\s\S]*?)\]/g, (match, inner) => {
    const seed = fileIndex * 1000 + questionIndex++;
    const rand = seededRandom(seed);

    // Extrai cada { t: '...', ok: ... }
    const optPattern = /\{([^}]+)\}/g;
    const opts = [];
    let m;
    while ((m = optPattern.exec(inner)) !== null) {
      opts.push(m[0]);
    }

    if (opts.length < 2) return match;

    // Verifica quantas respostas corretas há
    const correctCount = opts.filter(o => /ok:\s*true/.test(o)).length;
    if (correctCount !== 1) return match; // não mexe em casos ambíguos

    const shuffled = shuffleArray(opts, rand);
    const newInner = inner.replace(optPattern, () => shuffled.shift() || '{}');
    return `opts: [${newInner}]`;
  });

  fs.writeFileSync(filePath, src, 'utf8');
}

// Processa missões 10 a 99 de C#
const missionsDir = path.join(__dirname, '..', 'missions', 'csharp');
let count = 0;
for (let i = 10; i <= 99; i++) {
  const filePath = path.join(missionsDir, `mission_${i}.js`);
  if (fs.existsSync(filePath)) {
    shuffleMissionFile(filePath, i);
    count++;
    console.log(`✓ mission_${i}.js`);
  }
}
console.log(`\nProcessadas: ${count} missões`);
