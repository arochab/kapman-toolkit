const state = {
  page: 'home',
  favorites: JSON.parse(localStorage.getItem('kapmanFavorites') || '[]'),
  checks: JSON.parse(localStorage.getItem('kapmanChecks') || '[]'),
  selected: null,
  audio: null,
  issues: []
};

const NAV = [
  {id:'home', label:'Home', icon:'i-home'},
  {id:'routes', label:'Routes', icon:'i-route'},
  {id:'recipes', label:'Recipes', icon:'i-recipe'},
  {id:'library', label:'Library', icon:'i-library'},
  {id:'fix', label:'Fix', icon:'i-fix'},
  {id:'mix', label:'Mix Check', icon:'i-mix'},
  {id:'finish', label:'Finish', icon:'i-finish'},
  {id:'session', label:'My Session', icon:'i-session'}
];

const VENDORS = [
  {id:'fabfilter', short:'FF', name:'FabFilter', note:'surgical control', color:'#f59e0b'},
  {id:'uhe', short:'UH', name:'u-he', note:'analog depth', color:'#a78bfa'},
  {id:'arturia', short:'AR', name:'Arturia', note:'classic synth tone', color:'#4f7cff'},
  {id:'d16', short:'D16', name:'D16', note:'club edge', color:'#ef4444'},
  {id:'valhalla', short:'VH', name:'Valhalla', note:'space and decay', color:'#3ed0c4'},
  {id:'xln', short:'XL', name:'XLN', note:'drums and groove', color:'#64d38a'},
  {id:'korg', short:'KRG', name:'Korg', note:'retro color', color:'#f472b6'},
  {id:'ableton', short:'L12', name:'Live 12', note:'native fallback', color:'#94a3b8'}
];

const ROUTES = [
  {id:'rt-low-end', title:'Low End Lock', copy:'Make kick and bass coexist in 10 minutes.', tags:['Kick','Bass','Mono'], accent:'blue', vendor:'fabfilter', steps:['Solo kick and bass only.','Choose who owns 45–70 Hz.','Shorten the loser before EQ.','Sidechain for movement, not rescue.'], checks:['Kick peak is readable on laptop speakers.','Bass still feels present in mono.','Sub is stable bar to bar.'], use:'Use when the groove collapses once the bass enters.', avoid:'Do not pile EQ and multiband before checking envelope length.', stop:'Stop when kick punches without bass disappearing.'},
  {id:'rt-clean-mid', title:'Midrange Cleanup', copy:'Clear 250 Hz to 2 kHz without thinning the track.', tags:['Mids','Clarity','Space'], accent:'teal', vendor:'fabfilter', steps:['Mute reverbs first.','Find the loudest competing layer.','Reduce overlapping mid content on the weaker role.','Reintroduce ambience only after the core is clear.'], checks:['Lead vocal or lead synth is instantly readable.','Snare body still exists.','The mix sounds less tiring at low volume.'], use:'Use when the mix feels expensive but blurry.', avoid:'Do not high-pass everything blindly.', stop:'Stop when the center feels readable at low playback level.'},
  {id:'rt-groove', title:'Groove Rescue', copy:'Fix a flat beat without adding ten new layers.', tags:['Drums','Movement','Swing'], accent:'amber', vendor:'xln', steps:['Mute one busy percussion loop.','Push contrast between kick and hat accents.','Offset one element for pocket, not chaos.','Add one short automation move every 8 bars.'], checks:['Head nod happens before you think about sound design.','Kick pattern feels anchored.','Percussion supports, does not dominate.'], use:'Use when the loop is technically fine but emotionally dead.', avoid:'Do not stack more percussion before fixing accents.', stop:'Stop when one drum idea carries the section.'},
  {id:'rt-hook', title:'Hook Builder', copy:'Turn a decent synth into a memorable lead line.', tags:['Lead','Hooks','Topline'], accent:'rose', vendor:'uhe', steps:['Pick one lead with strong identity.','Write rhythm before melody complexity.','Keep one repeatable motif.','Add one contrast move every 4 bars.'], checks:['The hook survives with no FX.','Rhythm is singable.','The patch is not masking the idea.'], use:'Use when the top line exists but leaves no trace.', avoid:'Do not rely on delay to fake memorability.', stop:'Stop when the dry rhythm already works.'},
  {id:'rt-breakdown', title:'Breakdown Tension', copy:'Build air and expectation without mud.', tags:['Breakdown','FX','Space'], accent:'violet', vendor:'valhalla', steps:['Drop low-end first.','Keep one anchor element through the break.','Automate width or send, not both on every track.','Reserve one obvious lift into the drop.'], checks:['The break feels bigger, not just wetter.','The return of the kick feels earned.','No reverb cloud remains on the first downbeat.'], use:'Use when the breakdown feels passive.', avoid:'Do not smear the whole mix with long tails.', stop:'Stop when the drop re-entry feels inevitable.'},
  {id:'rt-finish', title:'Finish Fast', copy:'Move from loop mode to export mode tonight.', tags:['Commit','Arrange','Export'], accent:'green', vendor:'ableton', steps:['Duplicate the loop to a full rough timeline.','Make only role-level decisions first.','Bounce references early.','Use the finish checklist before new sound design.'], checks:['Intro, body, break, drop, outro all exist.','There is a clear loudest moment.','You can export now without embarrassment.'], use:'Use when you are stuck polishing 16 bars forever.', avoid:'Do not open new plugins during finish mode.', stop:'Stop when the song communicates, not when it becomes perfect.'}
];

const RECIPES = [
  {id:'rc-bass-stack', title:'Modern Electro Bass Stack', copy:'One sub, one edge, one movement layer.', tags:['Bass','Electro','Core'], accent:'blue', solve:'Dense but controlled bass tone.', steps:['Sub: Diva or Mini V for the foundation.','Edge: add a second layer one octave up with less low-mid weight.','Movement: automate filter or envelope amount, not loudness.'], first:'Shape envelope before touching saturation.', avoid:'Do not let all layers own 100–250 Hz.', stop:'Stop when the stack feels big in mono.'},
  {id:'rc-drum-bus', title:'Drum Bus Tightener', copy:'Faster drums without cartoon compression.', tags:['Drums','Bus','Punch'], accent:'amber', solve:'Sharper transients with less clutter.', steps:['Clip or saturate lightly first.','Compress after tone, not before.','Use short parallel ambience only on the tops.'], first:'Bypass every insert and re-add only what still helps.', avoid:'Do not smash kick and snare equally.', stop:'Stop when the groove feels more urgent, not louder.'},
  {id:'rc-lead-width', title:'Lead Width Without Blur', copy:'Make the lead larger while protecting the center.', tags:['Lead','Stereo','Hooks'], accent:'rose', solve:'Wider lead that still cuts.', steps:['Keep one dry mono spine.','Push width to a copy or aux.','Delay one side slightly or spread upper harmonics only.'], first:'A/B in mono before committing.', avoid:'Do not widen the low mids.', stop:'Stop when the hook still hits from the phone speaker.'},
  {id:'rc-break-air', title:'Break Air Builder', copy:'Open the track without washing out the return.', tags:['Break','Air','FX'], accent:'violet', solve:'Expansive breaks with clean drops.', steps:['Remove density before adding atmosphere.','Automate one primary send.','Filter the ambience away before the drop.'], first:'Make the break lighter before you make it wider.', avoid:'Do not automate five risers at once.', stop:'Stop when the contrast is obvious with closed eyes.'},
  {id:'rc-house-stab', title:'House Stab Control', copy:'Short stabs that bounce without muddying the pocket.', tags:['House','Stabs','Pocket'], accent:'teal', solve:'Tighter harmonic rhythm.', steps:['Cut tail length first.','Favor upper mids over low mids.','Use one groove source only.'], first:'Check whether the stab is late, not just too loud.', avoid:'Do not chorus the whole chord stack.', stop:'Stop when the stab answers the drums.'},
  {id:'rc-finish-export', title:'Pre-Master Bounce', copy:'Export a mix that a mastering engineer can trust.', tags:['Export','Finish','Mix'], accent:'green', solve:'Cleaner premaster handoff.', steps:['Remove anything on the master that hides issues.','Leave small headroom.','Export reference and premaster together.'], first:'Check mono and low-volume balance.', avoid:'Do not chase loudness at the end.', stop:'Stop when your reference check is boring in the best way.'}
];

const LIBRARY = [
  {id:'pl-diva-sub', title:'Sub Architect', vendor:'u-he Diva', vendorId:'uhe', short:'UH', color:'#a78bfa', type:'Bass', accent:'blue', summary:'Sine/triangle-based sub for tight underground low-end.', use:'Foundation for kick-bass systems that must stay stable.', first:'Set amp envelope length before EQ. Then decide if it owns the deepest octave.', avoid:'Do not layer another full-range bass on top immediately.', stop:'Stop when the sub remains intelligible after mono collapse.', pair:'Pairs well with FabFilter Pro-Q and subtle Saturn edge.', path:'Diva → mono → tone → sidechain.'},
  {id:'pl-mini-bass', title:'Mono Beast', vendor:'Arturia Mini V', vendorId:'arturia', short:'AR', color:'#4f7cff', type:'Bass', accent:'blue', summary:'Thick mono bass with club-friendly upper harmonics.', use:'Groovy electro and house basslines with obvious identity.', first:'Tune filter envelope amount before reaching for distortion.', avoid:'Do not leave the sustain too long if kick clarity matters.', stop:'Stop when the bassline reads even with the kick back in.', pair:'Works with sidechain and light clipping.', path:'Mini V → tone → clip → sidechain.'},
  {id:'pl-jup-lead', title:'Retro Sync', vendor:'Arturia Jup-8 V', vendorId:'arturia', short:'AR', color:'#4f7cff', type:'Lead', accent:'rose', summary:'Bright sync lead for memorable toplines.', use:'When the hook needs an obvious front-facing voice.', first:'Shape vibrato or pitch movement before widening.', avoid:'Do not blur it with long delays too early.', stop:'Stop when the dry patch already sounds catchy.', pair:'Pairs with tempo delay and mono support layer.', path:'Jup-8 → mono spine + width aux.'},
  {id:'pl-cs80', title:'Blade Runner Wash', vendor:'Arturia CS-80 V', vendorId:'arturia', short:'AR', color:'#4f7cff', type:'Pad', accent:'violet', summary:'Cinematic pad for emotional breakdown weight.', use:'For deep atmosphere that still feels classy.', first:'Low-cut earlier than you think.', avoid:'Do not let it dominate the vocal or lead zone.', stop:'Stop when it supports emotion without obvious clouding.', pair:'Great with filtered Valhalla reverbs.', path:'CS-80 → HPF → send FX.'},
  {id:'pl-diva-lead', title:'Wire Lead', vendor:'u-he Diva', vendorId:'uhe', short:'UH', color:'#a78bfa', type:'Lead', accent:'rose', summary:'Cutting mono lead with analog urgency.', use:'When midrange authority matters more than width.', first:'Choose oscillator bite before any insert chain.', avoid:'Do not stereo-spread the whole source.', stop:'Stop when it wins against the drums in mono.', pair:'Best with short slap and harmonic exciter.', path:'Diva → drive → delay send.'},
  {id:'pl-poly', title:'Poly Warmth', vendor:'Korg Polysix', vendorId:'korg', short:'KRG', color:'#f472b6', type:'Pad', accent:'violet', summary:'Soft vintage pad for pop-leaning warmth.', use:'Layer under colder digital elements.', first:'Trim low mids before reverb.', avoid:'Do not chorus every supporting layer too.', stop:'Stop when warmth appears without a blanket over the mix.', pair:'Pairs with narrow room and top-end shelf.', path:'Polysix → EQ → room.'},
  {id:'pl-303', title:'303 Acid Line', vendor:'D16 Phoscyon', vendorId:'d16', short:'D16', color:'#ef4444', type:'Bass', accent:'amber', summary:'Forward acid line for movement and attitude.', use:'Drive sections that need bite and repetition.', first:'Program accents before saturation.', avoid:'Do not let resonance eat the kick zone.', stop:'Stop when motion arrives without harshness.', pair:'Great with sidechain and delay throws.', path:'Phoscyon → saturate → duck.'},
  {id:'pl-ad2', title:'Punch Kit', vendor:'XLN Addictive Drums', vendorId:'xln', short:'XL', color:'#64d38a', type:'Drums', accent:'green', summary:'Acoustic-electronic punch source for layered drums.', use:'When synthetic drums need human transient detail.', first:'Pick the kit piece that solves the problem, not a whole kit.', avoid:'Do not stack with similar transients blindly.', stop:'Stop when one acoustic layer improves realism.', pair:'Works with transient shaping and tight room.', path:'AD2 single hits → transient control.'},
  {id:'pl-proq', title:'Surgical EQ', vendor:'FabFilter Pro-Q', vendorId:'fabfilter', short:'FF', color:'#f59e0b', type:'FX', accent:'teal', summary:'Fast corrective and balancing EQ.', use:'Clear overlaps and refine hierarchy.', first:'Cut only after confirming the source role.', avoid:'Do not carve every track in solo.', stop:'Stop when the target element reads easier in the full mix.', pair:'Lives after envelope decisions, before widening.', path:'source → Pro-Q → check in context.'},
  {id:'pl-saturn', title:'Tone Drive', vendor:'FabFilter Saturn', vendorId:'fabfilter', short:'FF', color:'#f59e0b', type:'FX', accent:'amber', summary:'Controlled saturation for density and top-end intent.', use:'Add harmonics before reaching for louder levels.', first:'Pick one band to enhance, not all of them.', avoid:'Do not brighten harsh sources with more aggression.', stop:'Stop when the sound feels more tangible, not brighter.', pair:'Pairs with Pro-Q cleanup and gain match.', path:'tone → match level → decide.'},
  {id:'pl-proc2', title:'Punch Glue', vendor:'FabFilter Pro-C', vendorId:'fabfilter', short:'FF', color:'#f59e0b', type:'FX', accent:'green', summary:'Bus compression with reliable attack-release control.', use:'Shape groove or keep a bus in place.', first:'Listen for envelope change before gain reduction amount.', avoid:'Do not use it to fix a weak source.', stop:'Stop when motion improves but transients survive.', pair:'Strong on drum and music buses.', path:'bus → comp → level match.'},
  {id:'pl-val-room', title:'Short Room', vendor:'Valhalla Room', vendorId:'valhalla', short:'VH', color:'#3ed0c4', type:'FX', accent:'violet', summary:'Fast room space for glue without blur.', use:'Create believable depth around drums or leads.', first:'Filter the return before length decisions.', avoid:'Do not send the full low end.', stop:'Stop when dry elements still lead the perception.', pair:'Great with drums and stabs.', path:'send → room → filter.'},
  {id:'pl-val-delay', title:'Throw Delay', vendor:'Valhalla Delay', vendorId:'valhalla', short:'VH', color:'#3ed0c4', type:'FX', accent:'violet', summary:'Tempo-synced space for selective emphasis.', use:'Spotlight transitions and hook endings.', first:'Automate sends instead of leaving it constant.', avoid:'Do not wash the entire line.', stop:'Stop when the delay is missed more than heard.', pair:'Excellent on vocal chops and synth tails.', path:'send automation → delay throw.'}
];

const FIXES = [
  {id:'fx-kick-bass', title:'Kick disappears when bass enters', copy:'Choose a bottom owner and shorten the loser before EQ.', tags:['Bass','Kick','Mono'], accent:'blue', steps:['Mute everything but kick and bass.','Pick who owns the deepest octave.','Reduce bass release or kick tail first.','Only then use EQ for overlap cleanup.']},
  {id:'fx-harsh', title:'Top end is sharp or tiring', copy:'Check 3–6 kHz before blaming “brightness”.', tags:['Harshness','Highs'], accent:'amber', steps:['Listen quieter.','Bypass exciters, saturators and wideners.','Find the loudest offender, not all offenders.','Trim one source first.']},
  {id:'fx-flat', title:'Track feels flat', copy:'Increase contrast before adding more layers.', tags:['Dynamics','Arrangement'], accent:'teal', steps:['Mute one supporting layer.','Create one real quiet section.','Push one hook element forward.','Automate one obvious move every 8 bars.']},
  {id:'fx-muddy', title:'Mix is muddy', copy:'Remove overlapping low mids from the weaker role.', tags:['Mud','Mids'], accent:'amber', steps:['Kill long reverbs first.','Solo the center of the arrangement.','Find who owns 250–500 Hz.','Clear support layers, not the lead role.']},
  {id:'fx-narrow', title:'Mix feels small', copy:'Protect the center, then widen the supporting layer only.', tags:['Stereo','Width'], accent:'violet', steps:['Keep one mono spine.','Widen a copy or a send.','Do not widen the low end.','Check mono immediately.']},
  {id:'fx-loop', title:'You are stuck in loop mode', copy:'Arrange badly before you arrange beautifully.', tags:['Finish','Workflow'], accent:'green', steps:['Duplicate the loop to full length.','Mark intro, break, drop, outro.','Make role decisions only.','Export a rough version tonight.']}
];

const FINISH = [
  {id:'ch-headroom', title:'Premaster headroom is clean', text:'No last-second limiter heroics. Peaks stay sensible.'},
  {id:'ch-mono', title:'Mono still works', text:'Kick, bass and hook survive collapse.'},
  {id:'ch-contrast', title:'Loudest section is obvious', text:'There is a clear payoff, not flat energy.'},
  {id:'ch-translation', title:'Low-volume check passes', text:'Balance still makes sense quietly.'},
  {id:'ch-fx', title:'Returns are under control', text:'Reverbs and delays support, not smear.'},
  {id:'ch-export', title:'Reference and premaster exported', text:'You can leave the session and still judge it later.'}
];

const PAGE_META = {
  home:{eyebrow:'Dashboard', title:'Kapman Toolkit'},
  routes:{eyebrow:'Workflow', title:'Routes'},
  recipes:{eyebrow:'Stacks', title:'Recipes'},
  library:{eyebrow:'Plugins', title:'Library'},
  fix:{eyebrow:'Troubleshooting', title:'Fix'},
  mix:{eyebrow:'Analysis', title:'Mix Check'},
  finish:{eyebrow:'Commit', title:'Finish'},
  session:{eyebrow:'Memory', title:'My Session'}
};

const stage = document.getElementById('mainStage');
const nav = document.getElementById('nav');
const vendorDock = document.getElementById('vendorDock');
const searchInput = document.getElementById('searchInput');
const inspector = document.getElementById('inspector');
const inspectorTitle = document.getElementById('inspectorTitle');
const inspectorKicker = document.getElementById('inspectorKicker');
const inspectorBody = document.getElementById('inspectorBody');
const pageTitle = document.getElementById('pageTitle');
const eyebrow = document.getElementById('eyebrow');
const toast = document.getElementById('toast');

init();

function init(){
  renderNav();
  renderVendorDock();
  bindGlobal();
  render();
  selectDetail(ROUTES[0], 'Route');
}

function bindGlobal(){
  searchInput.addEventListener('input', () => render());
  document.getElementById('favoritesBtn').addEventListener('click', () => { state.page='session'; render(); });
  document.getElementById('mixBtn').addEventListener('click', () => { state.page='mix'; render(); });
  document.getElementById('closeInspector').addEventListener('click', () => inspector.classList.remove('open'));
  document.getElementById('railToggle').addEventListener('click', () => document.body.classList.toggle('focus'));
  document.getElementById('mobileNav').addEventListener('click', ()=> document.getElementById('sidebar').classList.toggle('open'));
}

function renderNav(){
  nav.innerHTML = NAV.map(item => `
    <button class="nav-btn ${state.page===item.id?'active':''}" data-page="${item.id}">
      <svg class="icon"><use href="#${item.icon}"></use></svg>
      <span>${item.label}</span>
      <span class="nav-count">${navCount(item.id)}</span>
    </button>
  `).join('');
  [...nav.querySelectorAll('.nav-btn')].forEach(btn => btn.addEventListener('click', () => {
    state.page = btn.dataset.page;
    document.getElementById('sidebar').classList.remove('open');
    render();
  }));
}

function navCount(id){
  if(id==='routes') return ROUTES.length;
  if(id==='recipes') return RECIPES.length;
  if(id==='library') return LIBRARY.length;
  if(id==='fix') return FIXES.length;
  if(id==='finish') return FINISH.length;
  if(id==='session') return state.favorites.length;
  return '•';
}

function renderVendorDock(){
  vendorDock.innerHTML = VENDORS.map(v => `
    <button class="vendor-plate" data-vendor="${v.id}">
      <div class="vendor-top">
        <div class="vendor-badge" style="background:${v.color}">${v.short}</div>
        <div>
          <div class="vendor-name">${v.name}</div>
          <div class="vendor-note">${v.note}</div>
        </div>
      </div>
    </button>
  `).join('');
  [...vendorDock.querySelectorAll('.vendor-plate')].forEach(btn => btn.addEventListener('click', () => {
    state.page = 'library';
    searchInput.value = btn.dataset.vendor;
    render();
  }));
}

function render(){
  renderNav();
  const meta = PAGE_META[state.page];
  eyebrow.textContent = meta.eyebrow;
  pageTitle.textContent = meta.title;
  if(state.page==='home') renderHome();
  if(state.page==='routes') renderCollection('routes', ROUTES, routeCard);
  if(state.page==='recipes') renderCollection('recipes', RECIPES, recipeCard);
  if(state.page==='library') renderCollection('library', LIBRARY, pluginCard);
  if(state.page==='fix') renderCollection('fix', FIXES, fixCard);
  if(state.page==='mix') renderMix();
  if(state.page==='finish') renderFinish();
  if(state.page==='session') renderSession();
}

function q(){ return searchInput.value.trim().toLowerCase(); }
function match(item){
  const terms = Object.values(item).join(' ').toLowerCase();
  return !q() || terms.includes(q());
}
function renderCollection(type, data, cardFn){
  const filtered = data.filter(match);
  const titleMap = {
    routes:['Fast paths', 'Open one route. The inspector gives the exact move order.'],
    recipes:['Tight stacks', 'Short combinations that solve a real job.'],
    library:['Plugin roles', 'Pick faster. Open one item to get the exact use case.'],
    fix:['First moves', 'No essays. Just the first smart moves.']
  };
  const [title, copy] = titleMap[type];
  stage.innerHTML = `
    <section class="section-header">
      <div>
        <h2 class="section-title">${title}</h2>
        <p class="section-copy">${copy}</p>
      </div>
      <div class="section-actions">
        <button class="mini-btn" id="showAllBtn">${filtered.length} visible</button>
      </div>
    </section>
    <section class="list-card surface">
      <div class="list-scroll">${filtered.map(cardFn).join('')}</div>
    </section>
  `;
  bindCards(type, filtered);
}

function renderHome(){
  stage.innerHTML = `
    <section class="hero">
      <div class="hero-grid">
        <div>
          <h2>Fewer clicks. Better calls. Less session drift.</h2>
          <p>Kapman Toolkit is now built around the fastest next move: route, fix, recipe, or measured mix check. Open one thing. Decide. Move on.</p>
          <div class="section-actions">
            <button class="primary-btn" id="heroMix"><svg class="icon"><use href="#i-mix"></use></svg><span>Run Mix Check</span></button>
            <button class="ghost-btn" id="heroRoute"><svg class="icon"><use href="#i-route"></use></svg><span>Open Routes</span></button>
          </div>
          <div class="kpi-row">
            <div class="kpi-card"><div class="kpi-k">Routes</div><div class="kpi-v">${ROUTES.length}</div></div>
            <div class="kpi-card"><div class="kpi-k">Recipes</div><div class="kpi-v">${RECIPES.length}</div></div>
            <div class="kpi-card"><div class="kpi-k">Plugins</div><div class="kpi-v">${LIBRARY.length}</div></div>
            <div class="kpi-card"><div class="kpi-k">Favorites</div><div class="kpi-v">${state.favorites.length}</div></div>
          </div>
        </div>
        <div class="hero-right">
          <div class="surface">
            <div class="surface-head"><div><h3>Today’s best entry points</h3><p>Start where the friction actually is.</p></div></div>
            <div class="surface-grid">
              ${homeQuick('Kick vs bass','Low End Lock','blue','routes','rt-low-end')}
              ${homeQuick('Flat groove','Groove Rescue','amber','routes','rt-groove')}
              ${homeQuick('Muddy center','Midrange Cleanup','teal','routes','rt-clean-mid')}
              ${homeQuick('Finish tonight','Finish Fast','green','routes','rt-finish')}
            </div>
          </div>
          <div class="surface">
            <div class="surface-head"><div><h3>Focus zones</h3><p>One tap to the exact lane.</p></div></div>
            <div class="chips">
              ${['bass','lead','pad','drums','stereo','finish'].map(tag => `<button class="chip blue quick-filter" data-filter="${tag}">${tag}</button>`).join('')}
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-header"><div><h2 class="section-title">Fast lanes</h2><p class="section-copy">The shortest path to a useful decision.</p></div></section>
    <section class="grid-3">
      ${tileFromRoute(ROUTES[0])}
      ${tileFromRecipe(RECIPES[0])}
      ${tileMixCheck()}
    </section>
  `;
  document.getElementById('heroMix').onclick = () => { state.page='mix'; render(); };
  document.getElementById('heroRoute').onclick = () => { state.page='routes'; render(); };
  [...stage.querySelectorAll('.home-open')].forEach(btn => btn.onclick = () => openById(btn.dataset.type, btn.dataset.id));
  [...stage.querySelectorAll('.quick-filter')].forEach(btn => btn.onclick = () => { state.page='library'; searchInput.value = btn.dataset.filter; render(); });
  const mixTile = document.getElementById('homeMixTile');
  if(mixTile) mixTile.onclick = () => { state.page='mix'; render(); };
}

function homeQuick(kicker, title, accent, type, id){
  return `<button class="quick-card home-open" data-type="${type}" data-id="${id}"><div class="chip ${accent}">${kicker}</div><h4>${title}</h4><p>Open the exact moves.</p></button>`;
}
function tileFromRoute(item){
  return `<button class="tile home-open" data-type="routes" data-id="${item.id}"><div class="tile-top"><div class="tile-icon"><svg class="icon"><use href="#i-route"></use></svg></div><span class="chip ${item.accent}">${item.tags[0]}</span></div><h4>${item.title}</h4><p>${item.copy}</p><div class="tile-footer"><div class="chips">${item.tags.slice(0,2).map(t=>`<span class="chip ${item.accent}">${t}</span>`).join('')}</div><svg class="icon"><use href="#i-arrow"></use></svg></div></button>`;
}
function tileFromRecipe(item){
  return `<button class="tile home-open" data-type="recipes" data-id="${item.id}"><div class="tile-top"><div class="tile-icon"><svg class="icon"><use href="#i-recipe"></use></svg></div><span class="chip ${item.accent}">${item.tags[0]}</span></div><h4>${item.title}</h4><p>${item.copy}</p><div class="tile-footer"><div class="chips">${item.tags.slice(0,2).map(t=>`<span class="chip ${item.accent}">${t}</span>`).join('')}</div><svg class="icon"><use href="#i-arrow"></use></svg></div></button>`;
}
function tileMixCheck(){
  return `<button class="tile" id="homeMixTile"><div class="tile-top"><div class="tile-icon"><svg class="icon"><use href="#i-wave"></use></svg></div><span class="chip violet">Measured</span></div><h4>Mix Check</h4><p>Waveform, spectrum, stereo, low-end control and threshold-based actions.</p><div class="tile-footer"><div class="chips"><span class="chip violet">WAV</span><span class="chip violet">Local only</span></div><svg class="icon"><use href="#i-arrow"></use></svg></div></button>`;
}

function bindCards(type, items){
  [...document.querySelectorAll('.row-card')].forEach(card => card.addEventListener('click', () => {
    const id = card.dataset.id;
    const item = items.find(x => x.id===id);
    if(item) selectDetail(item, labelFor(type));
    [...document.querySelectorAll('.row-card')].forEach(el=>el.classList.remove('active'));
    card.classList.add('active');
  }));
  [...document.querySelectorAll('.star-btn')].forEach(btn => btn.addEventListener('click', e => {
    e.stopPropagation();
    toggleFavorite(btn.dataset.id);
    render();
  }));
}

function labelFor(type){ return ({routes:'Route', recipes:'Recipe', library:'Plugin', fix:'Fix'})[type] || 'Item'; }

function routeCard(item){
  return rowCard(item, 'i-route', item.tags, item.accent, `Use: ${item.use}`);
}
function recipeCard(item){
  return rowCard(item, 'i-recipe', item.tags, item.accent, `Solve: ${item.solve}`);
}
function pluginCard(item){
  return `
    <article class="row-card" data-id="${item.id}">
      <div class="row-badge" style="background:${item.color}">${item.short}</div>
      <div>
        <div class="chips"><span class="chip ${item.accent}">${item.type}</span><span class="chip ${item.accent}">${item.vendor}</span></div>
        <div class="row-title" style="margin-top:8px">${item.title}</div>
        <div class="row-copy">${item.summary}</div>
      </div>
      <div class="row-actions">
        <button class="star-btn ${state.favorites.includes(item.id)?'active':''}" data-id="${item.id}" aria-label="Favorite"><svg class="icon"><use href="#i-star"></use></svg></button>
      </div>
    </article>`;
}
function fixCard(item){
  return rowCard(item, 'i-fix', item.tags, item.accent, item.copy);
}
function rowCard(item, icon, tags, accent, copy){
  return `
    <article class="row-card" data-id="${item.id}">
      <div class="row-badge" style="background:${badgeColor(accent)}"><svg class="icon"><use href="#${icon}"></use></svg></div>
      <div>
        <div class="chips">${tags.map(t=>`<span class="chip ${accent}">${t}</span>`).join('')}</div>
        <div class="row-title" style="margin-top:8px">${item.title}</div>
        <div class="row-copy">${copy}</div>
      </div>
      <div class="row-actions">
        <button class="star-btn ${state.favorites.includes(item.id)?'active':''}" data-id="${item.id}" aria-label="Favorite"><svg class="icon"><use href="#i-star"></use></svg></button>
      </div>
    </article>`;
}

function badgeColor(accent){
  return ({blue:'#4f7cff',teal:'#3ed0c4',amber:'#f5b454',green:'#64d38a',rose:'#f57aa8',violet:'#a78bfa'})[accent] || '#4f7cff';
}

function openById(type,id){
  state.page = type;
  render();
  setTimeout(() => {
    const selector = `.row-card[data-id="${id}"]`;
    const el = document.querySelector(selector);
    if(el){ el.click(); el.scrollIntoView({block:'center', behavior:'smooth'}); }
    if(type==='mix') renderMix();
  }, 50);
}

function selectDetail(item, label){
  state.selected = item;
  inspectorKicker.textContent = label;
  inspectorTitle.textContent = item.title;
  inspectorBody.innerHTML = detailMarkup(item, label);
  inspector.classList.add('open');
}

function detailMarkup(item, label){
  if(label==='Route') return `
    <div class="detail-block"><h4>Use when</h4><p>${item.use}</p></div>
    <div class="detail-block"><h4>Step order</h4><ul>${item.steps.map(s=>`<li>${s}</li>`).join('')}</ul></div>
    <div class="detail-block"><h4>Checks</h4><ul>${item.checks.map(s=>`<li>${s}</li>`).join('')}</ul></div>
    <div class="detail-block"><h4>Avoid</h4><p>${item.avoid}</p></div>
    <div class="detail-block"><h4>Stop rule</h4><p>${item.stop}</p></div>`;
  if(label==='Recipe') return `
    <div class="detail-block"><h4>Solves</h4><p>${item.solve}</p></div>
    <div class="detail-block"><h4>Stack</h4><ul>${item.steps.map(s=>`<li>${s}</li>`).join('')}</ul></div>
    <div class="detail-block"><h4>Touch first</h4><p>${item.first}</p></div>
    <div class="detail-block"><h4>Avoid</h4><p>${item.avoid}</p></div>
    <div class="detail-block"><h4>Stop rule</h4><p>${item.stop}</p></div>`;
  if(label==='Plugin') return `
    <div class="detail-block"><h4>Role</h4><p>${item.summary}</p></div>
    <div class="detail-block"><h4>Use when</h4><p>${item.use}</p></div>
    <div class="detail-block"><h4>Touch first</h4><p>${item.first}</p></div>
    <div class="detail-block"><h4>Avoid</h4><p>${item.avoid}</p></div>
    <div class="detail-block"><h4>Pairs well with</h4><p>${item.pair}</p></div>
    <div class="detail-block"><h4>Path</h4><p>${item.path}</p></div>
    <div class="detail-block"><h4>Stop rule</h4><p>${item.stop}</p></div>`;
  if(label==='Fix') return `
    <div class="detail-block"><h4>Symptom</h4><p>${item.copy}</p></div>
    <div class="detail-block"><h4>First moves</h4><ul>${item.steps.map(s=>`<li>${s}</li>`).join('')}</ul></div>`;
  return `<div class="detail-note">Select an item from the left.</div>`;
}

function renderFinish(){
  stage.innerHTML = `
    <section class="section-header"><div><h2 class="section-title">Finish checklist</h2><p class="section-copy">Commit mode. No new plugins. No new rabbit holes.</p></div></section>
    <section class="grid-2">
      <div class="surface">
        <div class="surface-head"><div><h3>Pre-export checks</h3><p>Tick only if the answer is genuinely yes.</p></div></div>
        <div class="checklist">
          ${FINISH.map((item,i)=>`
            <label class="checklist-item">
              <input type="checkbox" data-check="${item.id}" ${state.checks.includes(item.id)?'checked':''}>
              <div><strong>${item.title}</strong><div class="muted small">${item.text}</div></div>
            </label>`).join('')}
        </div>
      </div>
      <div class="surface">
        <div class="surface-head"><div><h3>Two hard rules</h3><p>What keeps the session moving.</p></div></div>
        <div class="detail-grid">
          <div class="detail-note">If a problem survives in mono, fix the source or arrangement before adding polish.</div>
          <div class="detail-note">If the track only works loud, your balance is not finished yet.</div>
          <div class="detail-note">Export a rough pass tonight. Distance reveals more than another hour of tweaking.</div>
        </div>
      </div>
    </section>
  `;
  [...stage.querySelectorAll('[data-check]')].forEach(el => el.addEventListener('change', () => {
    const id = el.dataset.check;
    state.checks = el.checked ? [...new Set([...state.checks, id])] : state.checks.filter(x=>x!==id);
    localStorage.setItem('kapmanChecks', JSON.stringify(state.checks));
  }));
}

function renderSession(){
  const favItems = [...ROUTES, ...RECIPES, ...LIBRARY, ...FIXES].filter(x => state.favorites.includes(x.id));
  stage.innerHTML = `
    <section class="section-header"><div><h2 class="section-title">My Session</h2><p class="section-copy">Your short list. Keep only what you actually reach for.</p></div></section>
    <section class="grid-2">
      <div class="surface">
        <div class="surface-head"><div><h3>Favorites</h3><p>${favItems.length ? favItems.length + ' saved items' : 'No favorites yet'}</p></div></div>
        <div class="list-scroll">${favItems.length ? favItems.map(item => simpleSessionCard(item)).join('') : '<div class="detail-note">Star routes, recipes, plugins or fixes to keep them here.</div>'}</div>
      </div>
      <div class="surface">
        <div class="surface-head"><div><h3>Session notes</h3><p>Saved in your browser only.</p></div></div>
        <textarea id="sessionNotes" style="width:100%;min-height:320px;border-radius:18px;background:rgba(255,255,255,.03);border:1px solid var(--line2);padding:16px;color:var(--tx);resize:vertical" placeholder="Example: Bass still masks the kick at low level. Check release before EQ.">${localStorage.getItem('kapmanNotes')||''}</textarea>
      </div>
    </section>
  `;
  const notes = document.getElementById('sessionNotes');
  if(notes) notes.addEventListener('input', e => localStorage.setItem('kapmanNotes', e.target.value));
  [...stage.querySelectorAll('.session-open')].forEach(btn => btn.onclick = () => {
    const id = btn.dataset.id;
    const item = favItems.find(x=>x.id===id); selectDetail(item, inferLabel(item));
  });
}

function simpleSessionCard(item){
  return `<button class="quick-card session-open" data-id="${item.id}"><h4>${item.title}</h4><p>${item.copy || item.summary || item.solve}</p></button>`;
}
function inferLabel(item){
  if(item.steps && item.checks) return 'Route';
  if(item.solve) return 'Recipe';
  if(item.vendor) return 'Plugin';
  return 'Fix';
}

function toggleFavorite(id){
  state.favorites = state.favorites.includes(id) ? state.favorites.filter(x=>x!==id) : [...state.favorites, id];
  localStorage.setItem('kapmanFavorites', JSON.stringify(state.favorites));
  flash(state.favorites.includes(id) ? 'Added to favorites' : 'Removed from favorites');
}

function flash(msg){
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(flash.t);
  flash.t = setTimeout(()=> toast.classList.remove('show'), 1600);
}

function renderMix(){
  stage.innerHTML = `
    <section class="section-header"><div><h2 class="section-title">Mix Check</h2><p class="section-copy">Local analysis only. It reports measured signals, not fake taste judgments.</p></div></section>
    <section class="mix-layout">
      <div class="surface meter-stage">
        <div class="upload-box">
          <div><strong>Upload WAV or AIFF</strong><div class="muted small">Runs in your browser. No server.</div></div>
          <label class="primary-btn" for="audioFile"><svg class="icon"><use href="#i-upload"></use></svg><span>Select file</span></label>
          <input id="audioFile" type="file" accept="audio/wav,audio/x-wav,audio/aiff,audio/aif,audio/mp3,audio/mpeg">
        </div>
        <div class="wave-wrap">
          <canvas id="waveCanvas" class="wave-canvas" width="1100" height="250"></canvas>
          <canvas id="spectrumCanvas" class="spectrum-canvas" width="1100" height="170"></canvas>
        </div>
      </div>
      <div class="metric-stack">
        <div class="metric-grid">
          <div class="metric"><div class="metric-label">Peak</div><div class="metric-value" id="mPeak">—</div><div class="metric-note">Highest sample peak</div></div>
          <div class="metric"><div class="metric-label">RMS</div><div class="metric-value" id="mRms">—</div><div class="metric-note">Average energy</div></div>
          <div class="metric"><div class="metric-label">Crest</div><div class="metric-value" id="mCrest">—</div><div class="metric-note">Transient contrast</div></div>
          <div class="metric"><div class="metric-label">Stereo</div><div class="metric-value" id="mStereo">—</div><div class="metric-note">Average correlation</div></div>
        </div>
        <div class="surface">
          <div class="surface-head"><div><h3>Triggered actions</h3><p>Shown only when a measured threshold trips.</p></div></div>
          <div id="issueList" class="issue-list"><div class="detail-note">Upload a file to get measurable observations.</div></div>
        </div>
      </div>
    </section>
  `;
  const fileInput = document.getElementById('audioFile');
  fileInput.addEventListener('change', e => {
    const file = e.target.files?.[0];
    if(file) analyzeFile(file);
  });
  if(state.audio) paintMix(state.audio);
}

async function analyzeFile(file){
  const arr = await file.arrayBuffer();
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const audioBuffer = await ctx.decodeAudioData(arr.slice(0));
  const left = audioBuffer.getChannelData(0);
  const right = audioBuffer.numberOfChannels > 1 ? audioBuffer.getChannelData(1) : left;
  const mono = new Float32Array(left.length);
  let peak=0, sum=0, corrNum=0, corrDL=0, corrDR=0, lowMid=0, lowSide=0;
  for(let i=0;i<left.length;i++){
    const l = left[i], r = right[i];
    const m = (l+r)*0.5, s=(l-r)*0.5;
    mono[i]=m;
    const a = Math.max(Math.abs(l), Math.abs(r));
    if(a>peak) peak=a;
    sum += m*m;
    corrNum += l*r; corrDL += l*l; corrDR += r*r;
    if(i>2 && i % 10===0){
      lowMid += m*m;
      lowSide += s*s;
    }
  }
  const rms = Math.sqrt(sum/mono.length);
  const peakDb = db(peak);
  const rmsDb = db(rms);
  const crest = (peakDb - rmsDb);
  const corr = corrNum / Math.sqrt((corrDL*corrDR) || 1);
  const spectrum = computeSpectrum(mono, audioBuffer.sampleRate);
  const lowShare = spectrum.low;
  const midShare = spectrum.mid;
  const highShare = spectrum.high;
  const lowSideRatio = lowSide / Math.max(lowMid, 1e-9);

  state.audio = {
    fileName:file.name,
    sampleRate:audioBuffer.sampleRate,
    duration:audioBuffer.duration,
    mono,
    peakDb, rmsDb, crest, corr, lowShare, midShare, highShare, lowSideRatio, spectrumBars:spectrum.bars
  };
  state.issues = buildIssues(state.audio);
  paintMix(state.audio);
  ctx.close();
}

function computeSpectrum(data, sampleRate){
  const size = 2048;
  const step = Math.floor(data.length / 18);
  const bars = [];
  let low=0, mid=0, high=0;
  for(let p=0; p<18; p++){
    const start = p*step;
    const frame = data.slice(start, start+size);
    const mags = dft(frame, 96);
    const barVals = mags.map((mag, i) => ({freq:(i+1)*sampleRate/size, mag}));
    barVals.forEach(b => {
      if(b.freq < 120) low += b.mag;
      else if(b.freq < 4000) mid += b.mag;
      else high += b.mag;
    });
    bars.push(barVals.reduce((a,b)=>a+b.mag,0));
  }
  const total = low+mid+high || 1;
  return {low: low/total, mid: mid/total, high: high/total, bars};
}

function dft(frame, bins){
  const N = frame.length;
  const out = [];
  for(let k=1; k<=bins; k++){
    let re=0, im=0;
    for(let n=0;n<N;n+=4){
      const ph = (2*Math.PI*k*n)/N;
      re += frame[n]*Math.cos(ph);
      im -= frame[n]*Math.sin(ph);
    }
    out.push(Math.sqrt(re*re + im*im));
  }
  return normalize(out);
}

function normalize(arr){
  const max = Math.max(...arr, 1e-9);
  return arr.map(v => v/max);
}

function db(v){ return (20*Math.log10(Math.max(v,1e-9))).toFixed(1); }

function buildIssues(a){
  const issues = [];
  if(parseFloat(a.peakDb) > -0.8) issues.push({title:'Peak is very close to full scale', why:`Peak at ${a.peakDb} dBFS.`, action:'Pull the loudest bus or master trim before more processing.', accent:'amber'});
  if(parseFloat(a.crest) < 7.5) issues.push({title:'Dynamics look compressed', why:`Crest factor at ${a.crest} dB.`, action:'Recheck bus compression, clipping, and over-dense parallel chains.', accent:'rose'});
  if(a.lowSideRatio > 0.14) issues.push({title:'Low end is probably too wide', why:`Low side ratio at ${(a.lowSideRatio*100).toFixed(1)}%.`, action:'Tighten the side content under roughly 120 Hz.', accent:'blue'});
  if(a.lowShare > 0.48) issues.push({title:'Sub/low energy dominates', why:`Low band share at ${(a.lowShare*100).toFixed(0)}%.`, action:'Recheck kick-bass balance and trim unnecessary sub extension.', accent:'blue'});
  if(a.highShare > 0.24) issues.push({title:'Top end may be aggressive', why:`High band share at ${(a.highShare*100).toFixed(0)}%.`, action:'Check 3–6 kHz sources before broad high-shelf moves.', accent:'amber'});
  if(a.corr < 0.18) issues.push({title:'Stereo field may be unstable', why:`Correlation around ${a.corr.toFixed(2)}.`, action:'Keep a stronger mono spine for hook, kick, bass and snare body.', accent:'violet'});
  if(!issues.length) issues.push({title:'No major red flags detected', why:'Current thresholds stayed in a reasonable zone.', action:'Do a mono check, low-volume pass, and reference A/B before exporting.', accent:'green'});
  return issues;
}

function paintMix(a){
  document.getElementById('mPeak').textContent = `${a.peakDb} dBFS`;
  document.getElementById('mRms').textContent = `${a.rmsDb} dB`;
  document.getElementById('mCrest').textContent = `${a.crest} dB`;
  document.getElementById('mStereo').textContent = `${a.corr.toFixed(2)}`;
  const issueList = document.getElementById('issueList');
  issueList.innerHTML = state.issues.map(it => `
    <article class="issue-card">
      <div class="issue-head"><h4>${it.title}</h4><span class="chip ${it.accent}">${it.accent}</span></div>
      <p>${it.why}</p>
      <p style="margin-top:8px"><strong>Try:</strong> ${it.action}</p>
    </article>
  `).join('');
  drawWave(document.getElementById('waveCanvas'), a.mono);
  drawSpectrum(document.getElementById('spectrumCanvas'), a.spectrumBars, a.lowShare, a.midShare, a.highShare);
}

function drawWave(canvas, data){
  const ctx = canvas.getContext('2d');
  const {width, height} = canvas;
  ctx.clearRect(0,0,width,height);
  const grad = ctx.createLinearGradient(0,0,width,0);
  grad.addColorStop(0, '#3ed0c4');
  grad.addColorStop(.5, '#78a6ff');
  grad.addColorStop(1, '#a78bfa');
  ctx.fillStyle = 'rgba(255,255,255,.03)';
  ctx.fillRect(0,0,width,height);
  ctx.strokeStyle = 'rgba(255,255,255,.05)';
  ctx.lineWidth = 1;
  for(let i=1;i<4;i++){ const y = i*height/4; ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(width,y); ctx.stroke(); }
  ctx.strokeStyle = grad;
  ctx.lineWidth = 2;
  ctx.beginPath();
  const step = Math.ceil(data.length / width);
  for(let x=0; x<width; x++){
    let min=1,max=-1;
    for(let i=0;i<step;i++){
      const v = data[(x*step)+i] || 0;
      if(v<min) min=v;
      if(v>max) max=v;
    }
    const y1 = (1+min)*0.5*height;
    const y2 = (1+max)*0.5*height;
    ctx.moveTo(x,y1); ctx.lineTo(x,y2);
  }
  ctx.stroke();
}

function drawSpectrum(canvas, bars, low, mid, high){
  const ctx = canvas.getContext('2d');
  const {width, height} = canvas;
  ctx.clearRect(0,0,width,height);
  ctx.fillStyle = 'rgba(255,255,255,.03)';
  ctx.fillRect(0,0,width,height);
  const max = Math.max(...bars, 1e-9);
  const gap = 6;
  const bw = (width - gap*(bars.length+1))/bars.length;
  bars.forEach((v,i)=>{
    const h = (v/max)*(height-30);
    const x = gap + i*(bw+gap);
    const y = height - h - 10;
    const color = i < bars.length*0.25 ? '#78a6ff' : i < bars.length*0.78 ? '#3ed0c4' : '#f5b454';
    ctx.fillStyle = color;
    roundRect(ctx, x, y, bw, h, 8); ctx.fill();
  });
  ctx.fillStyle = '#94a3b8';
  ctx.font = '12px Inter, sans-serif';
  ctx.fillText(`Low ${(low*100).toFixed(0)}%`, 14, 18);
  ctx.fillText(`Mid ${(mid*100).toFixed(0)}%`, width/2 - 26, 18);
  ctx.fillText(`High ${(high*100).toFixed(0)}%`, width - 78, 18);
}

function roundRect(ctx,x,y,w,h,r){
  ctx.beginPath();
  ctx.moveTo(x+r,y); ctx.arcTo(x+w,y,x+w,y+h,r); ctx.arcTo(x+w,y+h,x,y+h,r); ctx.arcTo(x,y+h,x,y,r); ctx.arcTo(x,y,x+w,y,r); ctx.closePath();
}
