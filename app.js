const pages = [...document.querySelectorAll('.page')];
const navLinks = [...document.querySelectorAll('.nav-link')];
const globalSearch = document.getElementById('globalSearch');
const collapseBtn = document.getElementById('collapseBtn');
const focusMixBtn = document.getElementById('focusMixBtn');
const commandPalette = document.getElementById('commandPalette');
const paletteInput = document.getElementById('paletteInput');
const paletteList = document.getElementById('paletteList');
const closePaletteBtn = document.getElementById('closePaletteBtn');
const sessionNote = document.getElementById('sessionNote');
const saveNoteBtn = document.getElementById('saveNoteBtn');

const routeCards = [...document.querySelectorAll('.route-card')];
const filterTargets = [...document.querySelectorAll('[data-search]')];
const jumpButtons = [...document.querySelectorAll('[data-jump]')];
const laneButtons = [...document.querySelectorAll('[data-route]')];

const audioFileInput = document.getElementById('audioFileInput');
const chooseFileBtn = document.getElementById('chooseFileBtn');
const dropzone = document.getElementById('dropzone');
const fileMeta = document.getElementById('fileMeta');
const statusPill = document.getElementById('statusPill');
const issueList = document.getElementById('issueList');
const actionList = document.getElementById('actionList');
const evidenceTable = document.getElementById('evidenceTable');
const waveCanvas = document.getElementById('waveCanvas');
const spectrumCanvas = document.getElementById('spectrumCanvas');
const metricGrid = document.getElementById('metricGrid');

const STORAGE_KEY = 'kapman-toolkit-note';
const ctxWave = waveCanvas.getContext('2d');
const ctxSpectrum = spectrumCanvas.getContext('2d');
let audioCtx;

const paletteItems = [
  { label: 'Overview', type: 'Page', page: 'overview', keywords: 'home dashboard' },
  { label: 'Mix Check', type: 'Page', page: 'mixcheck', keywords: 'wav waveform stereo crest' },
  { label: 'Routes', type: 'Page', page: 'routes', keywords: 'workflow low end groove' },
  { label: 'Library', type: 'Page', page: 'library', keywords: 'plugins fabfilter arturia valhalla' },
  { label: 'Finish', type: 'Page', page: 'finish', keywords: 'reference export stop' }
];

function setPage(pageId){
  pages.forEach(page => page.classList.toggle('is-active', page.id === pageId));
  navLinks.forEach(link => link.classList.toggle('is-active', link.dataset.page === pageId));
}

navLinks.forEach(link => link.addEventListener('click', () => setPage(link.dataset.page)));
focusMixBtn.addEventListener('click', () => setPage('mixcheck'));

jumpButtons.forEach(btn => btn.addEventListener('click', () => setPage(btn.dataset.jump)));
laneButtons.forEach(btn => btn.addEventListener('click', () => {
  setPage('routes');
  const target = document.getElementById(btn.dataset.route);
  if(target){
    target.open = true;
    target.scrollIntoView({behavior:'smooth', block:'center'});
  }
}));

collapseBtn.addEventListener('click', () => routeCards.forEach(card => card.open = false));

function filterContent(query){
  const q = query.trim().toLowerCase();
  filterTargets.forEach(target => {
    const hit = !q || (target.dataset.search || '').toLowerCase().includes(q);
    target.style.display = hit ? '' : 'none';
  });
}

globalSearch.addEventListener('input', (e) => filterContent(e.target.value));

function renderPalette(items, activeIndex = 0){
  paletteList.innerHTML = '';
  items.forEach((item, index) => {
    const btn = document.createElement('button');
    btn.className = 'palette-item' + (index === activeIndex ? ' is-active' : '');
    btn.innerHTML = `<span>${item.label}</span><small>${item.type}</small>`;
    btn.addEventListener('click', () => {
      setPage(item.page);
      closePalette();
    });
    paletteList.appendChild(btn);
  });
}

function openPalette(){
  commandPalette.classList.remove('hidden');
  paletteInput.value = '';
  renderPalette(paletteItems);
  requestAnimationFrame(() => paletteInput.focus());
}
function closePalette(){
  commandPalette.classList.add('hidden');
}

closePaletteBtn.addEventListener('click', closePalette);
commandPalette.addEventListener('click', (e) => { if(e.target === commandPalette) closePalette(); });

document.addEventListener('keydown', (e) => {
  if((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k'){
    e.preventDefault();
    openPalette();
  }
  if(e.key === 'Escape') closePalette();
});

paletteInput.addEventListener('input', () => {
  const q = paletteInput.value.trim().toLowerCase();
  const items = paletteItems.filter(item => (`${item.label} ${item.keywords}`).toLowerCase().includes(q));
  renderPalette(items);
});

const savedNote = localStorage.getItem(STORAGE_KEY);
if(savedNote) sessionNote.value = savedNote;
saveNoteBtn.addEventListener('click', () => {
  localStorage.setItem(STORAGE_KEY, sessionNote.value.trim());
  saveNoteBtn.textContent = 'Saved';
  setTimeout(() => saveNoteBtn.textContent = 'Save note', 1200);
});

chooseFileBtn.addEventListener('click', () => audioFileInput.click());
audioFileInput.addEventListener('change', (e) => {
  const file = e.target.files?.[0];
  if(file) handleAudioFile(file);
});

['dragenter','dragover'].forEach(evt => dropzone.addEventListener(evt, (e) => {
  e.preventDefault();
  dropzone.classList.add('dragging');
}));
['dragleave','drop'].forEach(evt => dropzone.addEventListener(evt, (e) => {
  e.preventDefault();
  dropzone.classList.remove('dragging');
}));
dropzone.addEventListener('drop', (e) => {
  const file = e.dataTransfer?.files?.[0];
  if(file) handleAudioFile(file);
});
dropzone.addEventListener('keydown', (e) => {
  if(e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    audioFileInput.click();
  }
});

function formatDb(value){ return Number.isFinite(value) ? `${value.toFixed(1)} dB` : '—'; }
function formatDbfs(value){ return Number.isFinite(value) ? `${value.toFixed(1)} dBFS` : '—'; }
function formatPct(value){ return Number.isFinite(value) ? `${(value * 100).toFixed(0)}%` : '—'; }
function clamp(x, min, max){ return Math.max(min, Math.min(max, x)); }
function db(x){ return 20 * Math.log10(Math.max(x, 1e-12)); }

function updateMeta(file, buffer){
  fileMeta.innerHTML = '';
  const pills = [
    file.name,
    `${Math.round(buffer.duration)} s`,
    `${buffer.sampleRate} Hz`,
    `${buffer.numberOfChannels} ch`
  ];
  pills.forEach(text => {
    const span = document.createElement('span');
    span.className = 'meta-pill';
    span.textContent = text;
    fileMeta.appendChild(span);
  });
}

function ensureAudioContext(){
  if(!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}

async function handleAudioFile(file){
  try{
    statusPill.textContent = 'Analyzing…';
    setPage('mixcheck');
    const buffer = await file.arrayBuffer();
    const audioBuffer = await ensureAudioContext().decodeAudioData(buffer.slice(0));
    updateMeta(file, audioBuffer);
    const analysis = analyzeAudio(audioBuffer);
    renderAnalysis(analysis);
    statusPill.textContent = analysis.triggers.length ? `Watch ${analysis.triggers.length} signals` : 'Looks controlled';
  }catch(err){
    statusPill.textContent = 'Could not decode file';
    issueList.innerHTML = `<div class="issue-empty">This file could not be decoded here. Try WAV or AIFF.</div>`;
    actionList.innerHTML = `<div class="issue-empty">No actions available.</div>`;
    console.error(err);
  }
}

function analyzeAudio(buffer){
  const left = buffer.getChannelData(0);
  const right = buffer.numberOfChannels > 1 ? buffer.getChannelData(1) : left;
  const len = Math.min(left.length, right.length);
  const step = Math.max(1, Math.floor(len / 240000));

  let peak = 0, sumMidSq = 0, sumL = 0, sumR = 0, sumLSq = 0, sumRSq = 0, corrCount = 0;
  let prevLpfMid = 0, prevLpfSide = 0;
  let lowMidEnergy = 0, lowSideEnergy = 0;
  const alpha = lowpassAlpha(120, buffer.sampleRate, step);

  for(let i = 0; i < len; i += step){
    const l = left[i];
    const r = right[i];
    const mid = (l + r) * 0.5;
    const side = (l - r) * 0.5;
    peak = Math.max(peak, Math.abs(l), Math.abs(r));
    sumMidSq += mid * mid;
    sumL += l * r;
    sumLSq += l * l;
    sumRSq += r * r;
    corrCount++;

    prevLpfMid = prevLpfMid + alpha * (mid - prevLpfMid);
    prevLpfSide = prevLpfSide + alpha * (side - prevLpfSide);
    lowMidEnergy += prevLpfMid * prevLpfMid;
    lowSideEnergy += prevLpfSide * prevLpfSide;
  }

  const peakDb = db(peak);
  const rms = Math.sqrt(sumMidSq / corrCount);
  const rmsDb = db(rms);
  const crestDb = peakDb - rmsDb;
  const corr = sumL / Math.sqrt(Math.max(sumLSq * sumRSq, 1e-12));
  const lowSideRatio = lowSideEnergy / Math.max(lowMidEnergy + lowSideEnergy, 1e-12);

  const dynSpreadDb = dynamicSpread(left, right, buffer.sampleRate);
  const bands = spectralShares(left, right, buffer.sampleRate);
  const centroid = spectralCentroid(left, right, buffer.sampleRate);
  const peaks = buildPeaks(left, right, 420);

  const metrics = {
    peakDb, rmsDb, crestDb, corr, lowSideRatio, dynSpreadDb,
    bands, centroid
  };

  const rules = [
    {
      key:'headroom', label:'Headroom', value:peakDb, rule:'Peak > -1 dBFS',
      hit: peakDb > -1,
      read: peakDb > -1 ? 'Very close to full scale.' : 'Enough top headroom for a premaster.',
      action:'Pull the loudest bus back before export.',
      severity: peakDb > -0.3 ? 'bad' : 'warn'
    },
    {
      key:'crest', label:'Crest', value:crestDb, rule:'Crest < 8 dB',
      hit: crestDb < 8,
      read: crestDb < 8 ? 'Punch may be getting flattened.' : 'Transient contrast is still alive.',
      action:'Check drum bus compression and clip stages.',
      severity:'warn'
    },
    {
      key:'corr', label:'Stereo correlation', value:corr, rule:'Corr < 0.35',
      hit: corr < 0.35,
      read: corr < 0.35 ? 'Stereo field may collapse unpredictably.' : 'Stereo relationship is reasonably stable.',
      action:'Recheck wide FX returns and any bass wideners.',
      severity:'warn'
    },
    {
      key:'lowSide', label:'Low-band side', value:lowSideRatio, rule:'Low side > 18%',
      hit: lowSideRatio > 0.18,
      read: lowSideRatio > 0.18 ? 'Too much side energy below 120 Hz.' : 'Low band stays fairly centered.',
      action:'Collapse sub support or narrow the lowest layer.',
      severity: lowSideRatio > 0.26 ? 'bad' : 'warn'
    },
    {
      key:'lowmid', label:'Low-mid share', value:bands[1].share, rule:'120–400 Hz > 24%',
      hit: bands[1].share > 0.24,
      read: bands[1].share > 0.24 ? 'Low-mid build can cloud punch.' : 'Low-mid load is controlled.',
      action:'Audit 200–350 Hz on pads, bass harmonics and rooms.',
      severity:'warn'
    },
    {
      key:'top', label:'Top-end share', value:bands[4].share + bands[5].share, rule:'2 kHz+ > 14%',
      hit: (bands[4].share + bands[5].share) > 0.14,
      read: (bands[4].share + bands[5].share) > 0.14 ? 'Top end may read sharp or busy.' : 'Top end sits in a safer range.',
      action:'Check hats and bright distortion before adding more air.',
      severity:'warn'
    }
  ];

  const triggers = rules.filter(rule => rule.hit);

  return { metrics, rules, triggers, peaks };
}

function lowpassAlpha(freq, sr, step){
  const dt = step / sr;
  const rc = 1 / (2 * Math.PI * freq);
  return dt / (rc + dt);
}

function buildPeaks(left, right, bins){
  const len = Math.min(left.length, right.length);
  const chunk = Math.max(1, Math.floor(len / bins));
  const peaks = [];
  for(let i = 0; i < bins; i++){
    const start = i * chunk;
    const end = Math.min(len, start + chunk);
    let p = 0;
    for(let j = start; j < end; j += 8){
      const mid = (left[j] + right[j]) * 0.5;
      p = Math.max(p, Math.abs(mid));
    }
    peaks.push(p);
  }
  return peaks;
}

function dynamicSpread(left, right, sampleRate){
  const len = Math.min(left.length, right.length);
  const window = Math.max(1024, Math.floor(sampleRate * 0.35));
  const values = [];
  for(let i = 0; i + window < len; i += window){
    let sum = 0;
    for(let j = 0; j < window; j += 16){
      const mid = (left[i+j] + right[i+j]) * 0.5;
      sum += mid * mid;
    }
    const rms = Math.sqrt(sum / (window / 16));
    values.push(db(rms));
  }
  values.sort((a,b)=>a-b);
  if(!values.length) return 0;
  const low = values[Math.floor(values.length * 0.15)];
  const high = values[Math.floor(values.length * 0.9)];
  return high - low;
}

function spectralShares(left, right, sampleRate){
  const size = 1024;
  const hopCount = 12;
  const len = Math.min(left.length, right.length);
  const step = Math.max(size, Math.floor(len / hopCount));
  const bandDefs = [
    { name:'20–40', min:20, max:40, energy:0 },
    { name:'40–120', min:40, max:120, energy:0 },
    { name:'120–400', min:120, max:400, energy:0 },
    { name:'400–2k', min:400, max:2000, energy:0 },
    { name:'2–8k', min:2000, max:8000, energy:0 },
    { name:'8–16k', min:8000, max:16000, energy:0 }
  ];
  let windowCount = 0;

  for(let o = 0; o + size < len && windowCount < hopCount; o += step){
    const frame = new Float32Array(size);
    for(let i = 0; i < size; i++) frame[i] = ((left[o+i] + right[o+i]) * 0.5) * hann(i, size);
    for(let k = 1; k < size / 2; k++){
      let re = 0, im = 0;
      for(let n = 0; n < size; n++){
        const angle = 2 * Math.PI * k * n / size;
        re += frame[n] * Math.cos(angle);
        im -= frame[n] * Math.sin(angle);
      }
      const mag = re * re + im * im;
      const freq = k * sampleRate / size;
      const band = bandDefs.find(b => freq >= b.min && freq < b.max);
      if(band) band.energy += mag;
    }
    windowCount++;
  }

  const total = bandDefs.reduce((acc, b) => acc + b.energy, 0) || 1;
  return bandDefs.map(b => ({ ...b, share: b.energy / total }));
}

function spectralCentroid(left, right, sampleRate){
  const size = 1024;
  const len = Math.min(left.length, right.length);
  if(len < size) return 0;
  const start = Math.floor((len - size) / 2);
  const frame = new Float32Array(size);
  for(let i = 0; i < size; i++) frame[i] = ((left[start+i] + right[start+i]) * 0.5) * hann(i, size);
  let num = 0, den = 0;
  for(let k = 1; k < size / 2; k++){
    let re = 0, im = 0;
    for(let n = 0; n < size; n++){
      const angle = 2 * Math.PI * k * n / size;
      re += frame[n] * Math.cos(angle);
      im -= frame[n] * Math.sin(angle);
    }
    const mag = Math.sqrt(re * re + im * im);
    const freq = k * sampleRate / size;
    num += freq * mag;
    den += mag;
  }
  return den ? num / den : 0;
}

function hann(i, size){ return 0.5 * (1 - Math.cos((2 * Math.PI * i) / (size - 1))); }

function renderAnalysis(analysis){
  const { metrics, rules, triggers, peaks } = analysis;

  const cells = [...metricGrid.children];
  const values = [
    formatDbfs(metrics.peakDb),
    formatDbfs(metrics.rmsDb),
    formatDb(metrics.crestDb),
    metrics.corr.toFixed(2),
    formatPct(metrics.lowSideRatio),
    formatDb(metrics.dynSpreadDb)
  ];
  cells.forEach((cell, i) => { const strong = cell.querySelector('strong'); if(strong) strong.textContent = values[i]; });

  issueList.innerHTML = '';
  actionList.innerHTML = '';
  evidenceTable.innerHTML = '<div class="evidence-row evidence-head"><span>Signal</span><span>Measured</span><span>Rule</span><span>Read</span></div>';

  rules.forEach(rule => {
    const row = document.createElement('div');
    row.className = 'evidence-row';
    const measured = typeof rule.value === 'number'
      ? (rule.key === 'corr' ? rule.value.toFixed(2)
        : rule.key === 'lowSide' || rule.key === 'lowmid' || rule.key === 'top' ? formatPct(rule.value)
        : formatDb(rule.value))
      : String(rule.value);
    row.innerHTML = `<span>${rule.label}</span><span>${measured}</span><span>${rule.rule}</span><span>${rule.read}</span>`;
    evidenceTable.appendChild(row);
  });

  if(!triggers.length){
    issueList.innerHTML = '<div class="issue-chip good"><strong>No hard trigger</strong><p>Measured signals stay within the current rule set.</p><div class="trigger">Listen, reference once, export.</div></div>';
    actionList.innerHTML = '<div class="action-card"><strong>Do one last reference pass</strong><p>Keep the next move small. Avoid adding new processors just because the panel is calm.</p></div>';
  }else{
    triggers.forEach(trigger => {
      const issue = document.createElement('div');
      issue.className = `issue-chip ${trigger.severity}`;
      issue.innerHTML = `<strong>${trigger.label}</strong><p>${trigger.read}</p><div class="trigger">Triggered by ${trigger.rule}</div>`;
      issueList.appendChild(issue);

      const action = document.createElement('div');
      action.className = 'action-card';
      action.innerHTML = `<strong>${trigger.action}</strong><p>Do this before broadening the chain. Keep the pass short and measurable.</p><div class="trigger">Because ${trigger.label.toLowerCase()} crossed its rule</div>`;
      actionList.appendChild(action);
    });
  }

  drawWaveform(peaks);
  drawSpectrum(metrics.bands);
}

function drawWaveform(peaks){
  const { width, height } = waveCanvas;
  ctxWave.clearRect(0,0,width,height);
  drawGrid(ctxWave, width, height, 10, 6);
  const center = height / 2;
  const barW = width / peaks.length;
  ctxWave.fillStyle = 'rgba(88,166,255,.16)';
  ctxWave.fillRect(0, 0, width, height);
  for(let i = 0; i < peaks.length; i++){
    const v = clamp(peaks[i], 0, 1);
    const h = v * (height * 0.42);
    const x = i * barW;
    const gradient = ctxWave.createLinearGradient(0, center-h, 0, center+h);
    gradient.addColorStop(0, 'rgba(87,242,200,.95)');
    gradient.addColorStop(.55, 'rgba(88,166,255,.9)');
    gradient.addColorStop(1, 'rgba(185,147,255,.95)');
    ctxWave.fillStyle = gradient;
    ctxWave.fillRect(x, center - h, Math.max(1, barW - 1), h * 2);
  }
}

function drawSpectrum(bands){
  const { width, height } = spectrumCanvas;
  ctxSpectrum.clearRect(0,0,width,height);
  drawGrid(ctxSpectrum, width, height, 6, 5);
  const palette = ['#58a6ff','#57f2c8','#ffc96a','#b993ff','#ff7ea8','#7dffa1'];
  const gap = 22;
  const barW = (width - gap * (bands.length + 1)) / bands.length;
  bands.forEach((band, i) => {
    const h = Math.max(14, band.share * (height * 0.86));
    const x = gap + i * (barW + gap);
    const y = height - h - 26;
    const grad = ctxSpectrum.createLinearGradient(0, y, 0, y + h);
    grad.addColorStop(0, palette[i]);
    grad.addColorStop(1, 'rgba(255,255,255,.1)');
    roundedRect(ctxSpectrum, x, y, barW, h, 14, grad);
    ctxSpectrum.fillStyle = '#dbe7ff';
    ctxSpectrum.font = '600 12px Inter, system-ui, sans-serif';
    ctxSpectrum.textAlign = 'center';
    ctxSpectrum.fillText(`${Math.round(band.share * 100)}%`, x + barW / 2, y - 10);
    ctxSpectrum.fillStyle = 'rgba(220,232,255,.7)';
    ctxSpectrum.fillText(band.name, x + barW / 2, height - 8);
  });
}

function drawGrid(ctx, width, height, cols, rows){
  ctx.strokeStyle = 'rgba(255,255,255,.06)';
  ctx.lineWidth = 1;
  for(let i = 1; i < cols; i++){
    const x = (width / cols) * i;
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke();
  }
  for(let i = 1; i < rows; i++){
    const y = (height / rows) * i;
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke();
  }
}

function roundedRect(ctx, x, y, w, h, r, fill){
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
  ctx.fillStyle = fill;
  ctx.fill();
}

function bootVisuals(){
  drawWaveform(new Array(420).fill(0).map((_, i) => 0.14 + Math.sin(i / 16) * 0.06 + Math.random() * 0.03));
  drawSpectrum([
    {name:'20–40',share:.06},{name:'40–120',share:.34},{name:'120–400',share:.18},
    {name:'400–2k',share:.24},{name:'2–8k',share:.12},{name:'8–16k',share:.06}
  ]);
}

bootVisuals();
