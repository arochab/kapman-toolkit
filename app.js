/* ============================================================
   KAPMAN STUDIO — app.js  v2
   Aggressive iteration: hero launcher, unified expandable,
   mode-colored accents, better beginner flow
   ============================================================ */
const GATE_PASS = 'EscapeMusic2026!';

/* ============================================================
   i18n — expanded for hero + new UI
   ============================================================ */
const I18N = {
  en: {
    'gate-sub': 'studio',
    'gate-placeholder': 'password',
    'gate-error': 'wrong password',
    'hero-title': 'What are you working on?',
    'hero-design-label': 'Sound Design',
    'hero-design-desc': 'Synthesis · texture · tone · movement · creative FX',
    'hero-mix-label': 'Mixdown',
    'hero-mix-desc': 'Balance · EQ · dynamics · diagnosis · finish',
    'hero-badge-creative': 'CREATIVE',
    'hero-badge-technical': 'TECHNICAL',
    'hca-synths': 'Synths', 'hca-routes': 'Routes', 'hca-recipes': 'Recipes', 'hca-fx': 'FX Palette',
    'hca-mixcheck': 'Mix Check', 'hca-chains': 'Chains', 'hca-finish': 'Finish', 'hca-fixit': 'Fix-It',
    'qs-plugins': 'Plugin Inventory', 'qs-refs': 'Quick References',
    'mode-design': 'DESIGN', 'mode-mix': 'MIX', 'mode-tools': 'TOOLS',
    'design-synths': 'Synths', 'design-routes': 'Routes', 'design-recipes': 'Recipes', 'design-fx': 'FX Palette',
    'synths-title': 'Sound Sources', 'synths-desc': 'Your synthesis engines — pick a starting point',
    'tier-primary': 'PRIMARY', 'tier-classic': 'CLASSIC ANALOG',
    'tier-digital': 'DIGITAL / FM / WAVETABLE', 'tier-experimental': 'EXPERIMENTAL / MODULAR',
    'tier-drums': 'DRUM MACHINES',
    'routes-title': 'Sound Design Routes', 'routes-desc': 'Signal paths for specific sonic goals',
    'recipes-title': 'Recipes', 'recipes-desc': 'Step-by-step sound design procedures',
    'fx-title': 'FX Palette', 'fx-desc': 'Creative effects — texture, movement, space, destruction',
    'mix-check': 'Mix Check', 'mix-chains': 'Chains', 'mix-finish': 'Finish', 'mix-fixit': 'Fix-It',
    'mixcheck-title': 'Mix Check', 'mixcheck-desc': 'Systematic listening pass — diagnose before you touch anything',
    'chains-title': 'Mix Chains', 'chains-desc': 'Channel strip templates — EQ, compression, dynamics, stereo',
    'finish-title': 'Finish Checklist', 'finish-desc': 'Pre-master verification — nothing left unchecked',
    'fixit-title': 'Fix-It Playbook', 'fixit-desc': 'Problem → diagnosis → solution with your plugins',
    'tools-inventory': 'Inventory', 'tools-refs': 'References',
    'inventory-title': 'Plugin Inventory', 'inventory-desc': 'Everything you own — searchable',
    'inventory-search-placeholder': 'search plugins...', 'inventory-plugins': 'plugins',
    'refs-title': 'Quick References', 'refs-desc': 'Frequency ranges, gain staging, sidechain settings',
  },
  fr: {
    'gate-sub': 'studio',
    'gate-placeholder': 'mot de passe',
    'gate-error': 'mauvais mot de passe',
    'hero-title': 'Tu travailles sur quoi ?',
    'hero-design-label': 'Sound Design',
    'hero-design-desc': 'Synthèse · texture · ton · mouvement · FX créatifs',
    'hero-mix-label': 'Mixdown',
    'hero-mix-desc': 'Équilibre · EQ · dynamique · diagnostic · finition',
    'hero-badge-creative': 'CRÉATIF',
    'hero-badge-technical': 'TECHNIQUE',
    'hca-synths': 'Synthés', 'hca-routes': 'Routes', 'hca-recipes': 'Recettes', 'hca-fx': 'Palette FX',
    'hca-mixcheck': 'Mix Check', 'hca-chains': 'Chaînes', 'hca-finish': 'Finition', 'hca-fixit': 'Fix-It',
    'qs-plugins': 'Inventaire plugins', 'qs-refs': 'Références rapides',
    'mode-design': 'DESIGN', 'mode-mix': 'MIX', 'mode-tools': 'OUTILS',
    'design-synths': 'Synthés', 'design-routes': 'Routes', 'design-recipes': 'Recettes', 'design-fx': 'Palette FX',
    'synths-title': 'Sources sonores', 'synths-desc': 'Tes moteurs de synthèse — choisis un point de départ',
    'tier-primary': 'PRIORITAIRES', 'tier-classic': 'ANALOGIQUE CLASSIQUE',
    'tier-digital': 'DIGITAL / FM / WAVETABLE', 'tier-experimental': 'EXPÉRIMENTAL / MODULAIRE',
    'tier-drums': 'BOÎTES À RYTHMES',
    'routes-title': 'Routes de sound design', 'routes-desc': 'Chemins de signal pour des objectifs sonores précis',
    'recipes-title': 'Recettes', 'recipes-desc': 'Procédures de sound design étape par étape',
    'fx-title': 'Palette FX', 'fx-desc': 'Effets créatifs — texture, mouvement, espace, destruction',
    'mix-check': 'Mix Check', 'mix-chains': 'Chaînes', 'mix-finish': 'Finition', 'mix-fixit': 'Fix-It',
    'mixcheck-title': 'Mix Check', 'mixcheck-desc': 'Écoute systématique — diagnostique avant de toucher quoi que ce soit',
    'chains-title': 'Chaînes de mix', 'chains-desc': 'Templates de channel strip — EQ, compression, dynamique, stéréo',
    'finish-title': 'Checklist de finition', 'finish-desc': 'Vérification pré-master — rien ne passe entre les mailles',
    'fixit-title': 'Playbook Fix-It', 'fixit-desc': 'Problème → diagnostic → solution avec tes plugins',
    'tools-inventory': 'Inventaire', 'tools-refs': 'Références',
    'inventory-title': 'Inventaire plugins', 'inventory-desc': 'Tout ce que tu possèdes — recherche rapide',
    'inventory-search-placeholder': 'chercher un plugin...', 'inventory-plugins': 'plugins',
    'refs-title': 'Références rapides', 'refs-desc': 'Plages de fréquences, gain staging, réglages sidechain',
  }
};

/* ============================================================
   DATA — SYNTHS
   ============================================================ */
const SYNTHS = {
  primary: [
    { name: 'Diva', vendor: 'u-he', priority: true },
    { name: 'Serum 2', vendor: 'Xfer', priority: true },
    { name: 'Pigments', vendor: 'Arturia', priority: true },
    { name: 'Mini V3', vendor: 'Arturia', priority: true },
    { name: 'BA-1', vendor: 'Baby Audio', priority: true },
    { name: 'MiniFreak V', vendor: 'Arturia', priority: true },
    { name: 'Trilian', vendor: 'Spectrasonics', priority: true },
  ],
  classic: [
    { name: 'CS-80 V4', vendor: 'Arturia' }, { name: 'Jup-8 V4', vendor: 'Arturia' },
    { name: 'Prophet-5 V', vendor: 'Arturia' }, { name: 'SEM V2', vendor: 'Arturia' },
    { name: 'Jun-6 V', vendor: 'Arturia' }, { name: 'OP-Xa V', vendor: 'Arturia' },
    { name: 'Matrix-12 V2', vendor: 'Arturia' }, { name: 'ARP 2600 V3', vendor: 'Arturia' },
    { name: 'Polysix', vendor: 'KORG' }, { name: 'KORG MS-20 V', vendor: 'Arturia' },
  ],
  digital: [
    { name: 'DX7 V', vendor: 'Arturia' }, { name: 'CZ V', vendor: 'Arturia' },
    { name: 'SQ80 V', vendor: 'Arturia' }, { name: 'Prophet-VS V', vendor: 'Arturia' },
    { name: 'Synclavier V', vendor: 'Arturia' }, { name: 'CMI V', vendor: 'Arturia' },
    { name: 'Emulator II V', vendor: 'Arturia' },
  ],
  experimental: [
    { name: 'Buchla Easel V', vendor: 'Arturia' }, { name: 'Synthi V', vendor: 'Arturia' },
    { name: 'Modular V3', vendor: 'Arturia' }, { name: 'Vocoder V', vendor: 'Arturia' },
  ],
  drums: [
    { name: 'Drumazon 2', vendor: 'D16' }, { name: 'Nepheton 2', vendor: 'D16' },
    { name: 'Nithonat 2', vendor: 'D16' }, { name: 'PunchBox', vendor: 'D16' },
    { name: 'Phoscyon 2', vendor: 'D16' },
  ]
};

/* ============================================================
   DATA — ROUTES (preserved exactly)
   ============================================================ */
const ROUTES = [
  { name: { en: 'Deep Sub Bass', fr: 'Sub bass profonde' }, role: { en: 'Foundation — below 80 Hz', fr: 'Fondation — sous 80 Hz' }, chain: ['Diva / Serum 2', 'Saturn 2', 'Pro-Q 3', 'Pro-C 2', 'Pro-L 2'], notes: { en: '<strong>Diva</strong> or <strong>Serum 2</strong> — single saw/sine oscillator, no unison. <strong>Saturn 2</strong> on Warm Tube, Drive 10–15%, Mix 40%. <strong>Pro-Q 3</strong> high-pass at 25 Hz 24 dB/oct, low-pass at 120 Hz gentle. <strong>Pro-C 2</strong> in Clean mode, Ratio 3:1, Attack 10 ms, Release 80 ms. <strong>Pro-L 2</strong> as safety limiter at −1 dB.', fr: '<strong>Diva</strong> ou <strong>Serum 2</strong> — oscillateur simple saw/sine, pas d\'unisson. <strong>Saturn 2</strong> sur Warm Tube, Drive 10–15%, Mix 40%. <strong>Pro-Q 3</strong> passe-haut à 25 Hz 24 dB/oct, passe-bas à 120 Hz doux. <strong>Pro-C 2</strong> en mode Clean, Ratio 3:1, Attack 10 ms, Release 80 ms. <strong>Pro-L 2</strong> en limiteur de sécurité à −1 dB.' } },
  { name: { en: 'Acid Line', fr: 'Ligne acid' }, role: { en: 'Squelchy mono lead / bass', fr: 'Lead / basse mono squelchy' }, chain: ['Phoscyon 2 / Diva', 'Devastor 2', 'Decimort 2', 'Pro-Q 3', 'ValhallaDelay'], notes: { en: '<strong>Phoscyon 2</strong> for authentic 303. Or <strong>Diva</strong> single osc + ladder filter, Reso 60–80%. <strong>Devastor 2</strong> light asymmetric saturation. <strong>Decimort 2</strong> at 22 kHz, subtle bit reduction for grit. <strong>Pro-Q 3</strong> notch at 300 Hz if muddy. <strong>ValhallaDelay</strong> dotted 1/8, Mix 15%, feedback 30%.', fr: '<strong>Phoscyon 2</strong> pour un 303 authentique. Ou <strong>Diva</strong> osc simple + filtre ladder, Reso 60–80%. <strong>Devastor 2</strong> saturation asymétrique légère. <strong>Decimort 2</strong> à 22 kHz, réduction de bit subtile pour le grain. <strong>Pro-Q 3</strong> notch à 300 Hz si boueux. <strong>ValhallaDelay</strong> pointé 1/8, Mix 15%, feedback 30%.' } },
  { name: { en: 'Lo-fi Pad', fr: 'Nappe lo-fi' }, role: { en: 'Textured atmosphere', fr: 'Atmosphère texturée' }, chain: ['CS-80 V4 / Jup-8 V4', 'Tape MELLO-FI', 'Super VHS', 'Chorus DIMENSION-D', 'ValhallaVintageVerb'], notes: { en: '<strong>CS-80 V4</strong> or <strong>Jup-8 V4</strong> — warm detuned pad preset. <strong>Tape MELLO-FI</strong> for tape wobble and hiss. <strong>Super VHS</strong> with Age at 50–60%. <strong>Chorus DIMENSION-D</strong> mode II or III. <strong>ValhallaVintageVerb</strong> 1980s mode, Decay 3–5 s, Mix 35%.', fr: '<strong>CS-80 V4</strong> ou <strong>Jup-8 V4</strong> — preset nappe chaude désaccordée. <strong>Tape MELLO-FI</strong> pour le wobble et le souffle de bande. <strong>Super VHS</strong> avec Age à 50–60%. <strong>Chorus DIMENSION-D</strong> mode II ou III. <strong>ValhallaVintageVerb</strong> mode 1980s, Decay 3–5 s, Mix 35%.' } },
  { name: { en: 'Metallic Stab', fr: 'Stab métallique' }, role: { en: 'Short, bright percussive hit', fr: 'Hit percussif court et brillant' }, chain: ['DX7 V / Serum 2', 'Dist COLDFIRE', 'ShaperBox 3', 'Crystalline', 'Pro-Q 3'], notes: { en: '<strong>DX7 V</strong> metallic bell preset or <strong>Serum 2</strong> FM mode. <strong>Dist COLDFIRE</strong> for harmonic density, Drive 20%. <strong>ShaperBox 3</strong> VolumeShaper for tight amplitude envelope. <strong>Crystalline</strong> short plate, 0.5 s, Mix 20%. <strong>Pro-Q 3</strong> cut below 200 Hz, gentle 8 kHz shelf boost.', fr: '<strong>DX7 V</strong> preset cloche métallique ou <strong>Serum 2</strong> en mode FM. <strong>Dist COLDFIRE</strong> pour la densité harmonique, Drive 20%. <strong>ShaperBox 3</strong> VolumeShaper pour une enveloppe d\'amplitude serrée. <strong>Crystalline</strong> plate courte, 0.5 s, Mix 20%. <strong>Pro-Q 3</strong> coupe sous 200 Hz, shelf doux à 8 kHz.' } },
  { name: { en: 'Ghostly Vocal Texture', fr: 'Texture vocale fantôme' }, role: { en: 'Ethereal processed vocal layer', fr: 'Couche vocale traitée éthérée' }, chain: ['Vocoder V / Sample', 'Efx REFRACT', 'Phaser BI-TRON', 'ValhallaShimmer', 'Pro-Q 3'], notes: { en: 'Start with <strong>Vocoder V</strong> or a vocal sample via Moises AI. <strong>Efx REFRACT</strong> for granular scatter. <strong>Phaser BI-TRON</strong> slow rate, moderate depth. <strong>ValhallaShimmer</strong> pitch +12, Decay 4 s, Mix 40%. <strong>Pro-Q 3</strong> high-pass at 300 Hz to keep it floating above the mix.', fr: 'Commence avec <strong>Vocoder V</strong> ou un sample vocal via Moises AI. <strong>Efx REFRACT</strong> pour un scatter granulaire. <strong>Phaser BI-TRON</strong> rate lent, profondeur modérée. <strong>ValhallaShimmer</strong> pitch +12, Decay 4 s, Mix 40%. <strong>Pro-Q 3</strong> passe-haut à 300 Hz pour que ça flotte au-dessus du mix.' } },
  { name: { en: 'Distorted Drum Bus', fr: 'Bus drums distordu' }, role: { en: 'Parallel crush for drum group', fr: 'Crush parallèle pour groupe drums' }, chain: ['Devastor 2', 'Decimort 2', 'Pro-C 2', 'Pro-Q 3'], notes: { en: 'On a parallel send from your drum bus. <strong>Devastor 2</strong> asymmetric, Drive 40–60%. <strong>Decimort 2</strong> bit depth 10–12, sample rate 18 kHz. <strong>Pro-C 2</strong> Opto mode, heavy compression 8:1, slow attack. <strong>Pro-Q 3</strong> high-pass at 100 Hz, tame any harsh peaks around 3 kHz. Blend to taste (−10 to −6 dB below dry bus).', fr: 'Sur un envoi parallèle de ton bus drums. <strong>Devastor 2</strong> asymétrique, Drive 40–60%. <strong>Decimort 2</strong> profondeur 10–12 bits, sample rate 18 kHz. <strong>Pro-C 2</strong> mode Opto, compression lourde 8:1, attaque lente. <strong>Pro-Q 3</strong> passe-haut à 100 Hz, dompte les pics durs vers 3 kHz. Blend au goût (−10 à −6 dB sous le bus sec).' } },
  { name: { en: 'Lush Stereo Lead', fr: 'Lead stéréo lush' }, role: { en: 'Wide melodic element', fr: 'Élément mélodique large' }, chain: ['Pigments / MiniFreak V', 'Chorus JUN-6', 'Delay ETERNITY', 'ValhallaRoom', 'Pro-Q 3'], notes: { en: '<strong>Pigments</strong> or <strong>MiniFreak V</strong> — 2 osc with slight detune. <strong>Chorus JUN-6</strong> for classic Juno width. <strong>Delay ETERNITY</strong> ping-pong, 1/8, Mix 20%. <strong>ValhallaRoom</strong> medium room, Decay 1.5 s, Mix 20%. <strong>Pro-Q 3</strong> mid-side mode — cut low end in sides below 200 Hz.', fr: '<strong>Pigments</strong> ou <strong>MiniFreak V</strong> — 2 osc avec léger désaccord. <strong>Chorus JUN-6</strong> pour la largeur Juno classique. <strong>Delay ETERNITY</strong> ping-pong, 1/8, Mix 20%. <strong>ValhallaRoom</strong> room moyenne, Decay 1.5 s, Mix 20%. <strong>Pro-Q 3</strong> mode mid-side — coupe le bas dans les sides sous 200 Hz.' } },
  { name: { en: 'Broken Beat Perc', fr: 'Perc beat cassé' }, role: { en: 'Textured rhythmic layer', fr: 'Couche rythmique texturée' }, chain: ['Sample / PunchBox', 'Infiltrator', 'ShaperBox 3', 'Toraverb 2'], notes: { en: 'Start with a percussion sample or <strong>PunchBox</strong> layer. <strong>Infiltrator</strong> — pick a multi-fx preset, reduce Mix to 30–50%. <strong>ShaperBox 3</strong> TimeShaper for rhythmic glitch. <strong>Toraverb 2</strong> short diffuse verb, Decay 0.8 s, Mix 15%.', fr: 'Commence avec un sample percussion ou un layer <strong>PunchBox</strong>. <strong>Infiltrator</strong> — choisis un preset multi-fx, réduis Mix à 30–50%. <strong>ShaperBox 3</strong> TimeShaper pour du glitch rythmique. <strong>Toraverb 2</strong> reverb diffuse courte, Decay 0.8 s, Mix 15%.' } },
  { name: { en: 'Dark Ambient Drone', fr: 'Drone ambiant dark' }, role: { en: 'Background tension layer', fr: 'Couche de tension en arrière-plan' }, chain: ['Synthi V / Buchla Easel V', 'Efx FRAGMENTS', 'ValhallaSupermassive', 'Tape MELLO-FI'], notes: { en: '<strong>Synthi V</strong> or <strong>Buchla Easel V</strong> — generative patch, slow LFOs on filter and pitch. <strong>Efx FRAGMENTS</strong> for granular processing. <strong>ValhallaSupermassive</strong> Gemini mode, long feedback. <strong>Tape MELLO-FI</strong> for warmth and drift.', fr: '<strong>Synthi V</strong> ou <strong>Buchla Easel V</strong> — patch génératif, LFOs lents sur filtre et pitch. <strong>Efx FRAGMENTS</strong> pour traitement granulaire. <strong>ValhallaSupermassive</strong> mode Gemini, feedback long. <strong>Tape MELLO-FI</strong> pour chaleur et dérive.' } },
  { name: { en: 'EBM Bass Sequence', fr: 'Séquence basse EBM' }, role: { en: 'Aggressive pulsing bassline', fr: 'Ligne de basse agressive et pulsée' }, chain: ['Mini V3 / Diva', 'Comp FET-76', 'Devastor 2', 'Pro-Q 3', 'Delay TAPE-201'], notes: { en: '<strong>Mini V3</strong> or <strong>Diva</strong> — mono, single saw, filter mod from envelope. Fast staccato sequence. <strong>Comp FET-76</strong> all-buttons mode for aggressive limiting. <strong>Devastor 2</strong> symmetric, Drive 25%. <strong>Pro-Q 3</strong> boost 80 Hz +2 dB, cut 250 Hz −3 dB. <strong>Delay TAPE-201</strong> very short slapback, Mix 10%.', fr: '<strong>Mini V3</strong> ou <strong>Diva</strong> — mono, saw simple, modulation filtre par enveloppe. Séquence staccato rapide. <strong>Comp FET-76</strong> mode all-buttons pour une limitation agressive. <strong>Devastor 2</strong> symétrique, Drive 25%. <strong>Pro-Q 3</strong> boost 80 Hz +2 dB, cut 250 Hz −3 dB. <strong>Delay TAPE-201</strong> slapback très court, Mix 10%.' } },
  { name: { en: 'Pitched Noise Riser', fr: 'Riser noise pitched' }, role: { en: 'Transition / build element', fr: 'Élément de transition / montée' }, chain: ['Serum 2', 'Filter SEM', 'Efx MOTIONS', 'ValhallaDelay'], notes: { en: '<strong>Serum 2</strong> noise oscillator + slow pitch bend automation. <strong>Filter SEM</strong> band-pass sweep up over 4–8 bars. <strong>Efx MOTIONS</strong> for rhythmic modulation. <strong>ValhallaDelay</strong> feedback rising to 60–80% at the peak.', fr: '<strong>Serum 2</strong> oscillateur noise + automation de pitch bend lente. <strong>Filter SEM</strong> sweep band-pass montant sur 4–8 mesures. <strong>Efx MOTIONS</strong> pour modulation rythmique. <strong>ValhallaDelay</strong> feedback montant à 60–80% au pic.' } },
  { name: { en: 'Mangled Reverb Pad', fr: 'Nappe reverb mangled' }, role: { en: 'Abstract spatial texture', fr: 'Texture spatiale abstraite' }, chain: ['Any synth source', 'MangledVerb', 'Blackhole', 'Pro-Q 3', 'Pro-L 2'], notes: { en: 'Feed any short synth sound into <strong>MangledVerb</strong> — Overdrive 40%, Mix 80%. Layer <strong>Blackhole</strong> in parallel, Gravity inverted, Size max. <strong>Pro-Q 3</strong> aggressive high-pass at 200 Hz to prevent mud. <strong>Pro-L 2</strong> safety limiter.', fr: 'Envoie n\'importe quel son synthé court dans <strong>MangledVerb</strong> — Overdrive 40%, Mix 80%. Layer <strong>Blackhole</strong> en parallèle, Gravity inversé, Size max. <strong>Pro-Q 3</strong> passe-haut agressif à 200 Hz pour éviter la boue. <strong>Pro-L 2</strong> limiteur de sécurité.' } },
  { name: { en: 'Harmonic Shimmer Key', fr: 'Clavier shimmer harmonique' }, role: { en: 'Sparkling melodic texture', fr: 'Texture mélodique scintillante' }, chain: ['DX7 V / Pigments', 'Crystals', 'Crystalline', 'Chorus DIMENSION-D'], notes: { en: '<strong>DX7 V</strong> electric piano or <strong>Pigments</strong> wavetable bell. <strong>Crystals</strong> pitch +12, Feedback 30%, Mix 25%. <strong>Crystalline</strong> plate, Sparkle high, Decay 2 s, Mix 25%. <strong>Chorus DIMENSION-D</strong> mode I for subtle width.', fr: '<strong>DX7 V</strong> piano électrique ou <strong>Pigments</strong> cloche wavetable. <strong>Crystals</strong> pitch +12, Feedback 30%, Mix 25%. <strong>Crystalline</strong> plate, Sparkle élevé, Decay 2 s, Mix 25%. <strong>Chorus DIMENSION-D</strong> mode I pour une largeur subtile.' } },
  { name: { en: 'Industrial Perc Hit', fr: 'Perc industrielle' }, role: { en: 'Hard metallic one-shot', fr: 'One-shot métallique dur' }, chain: ['PunchBox / Sample', 'Redoptor 2', 'Decimort 2', 'SP2016 Reverb'], notes: { en: '<strong>PunchBox</strong> or a metallic sample. <strong>Redoptor 2</strong> for harsh tube saturation. <strong>Decimort 2</strong> aggressive — bit depth 8, sample rate 12 kHz. <strong>SP2016 Reverb</strong> Room preset, Decay 0.5 s, Mix 20%. Keep it mono, short, impactful.', fr: '<strong>PunchBox</strong> ou un sample métallique. <strong>Redoptor 2</strong> pour saturation tube dure. <strong>Decimort 2</strong> agressif — profondeur 8 bits, sample rate 12 kHz. <strong>SP2016 Reverb</strong> preset Room, Decay 0.5 s, Mix 20%. Garde-le mono, court, impactant.' } }
];

/* ============================================================
   DATA — RECIPES (preserved exactly)
   ============================================================ */
const RECIPES = [
  { name: { en: 'Kapman Signature Kick', fr: 'Kick signature Kapman' }, tags: ['kick', 'low-end'], steps: { en: ['<strong>PunchBox</strong> — Start with a sine sub layer tuned to your track key. Body from Noise layer, Attack from Click layer.','<strong>Pro-Q 3</strong> — High-pass at 28 Hz (24 dB/oct). Surgical cut at 300 Hz (−3 dB, narrow Q) to clear mud.','<strong>Saturn 2</strong> — Warm Tape band on 60–200 Hz, Drive 15%. Adds controlled harmonic weight.','<strong>Pro-C 2</strong> — Punch mode. Ratio 4:1, Attack 5 ms, Release 50 ms. Gain reduction 3–4 dB.','<strong>Pro-L 2</strong> — Modern style, ceiling −0.3 dB. Just catching peaks.','Level-match and A/B against reference kick at every step.'], fr: ['<strong>PunchBox</strong> — Commence avec un layer sub sinus accordé sur la tonalité du morceau. Body depuis le layer Noise, Attack depuis le layer Click.','<strong>Pro-Q 3</strong> — Passe-haut à 28 Hz (24 dB/oct). Coupe chirurgicale à 300 Hz (−3 dB, Q étroit) pour clarifier.','<strong>Saturn 2</strong> — Warm Tape sur la bande 60–200 Hz, Drive 15%. Ajoute du poids harmonique contrôlé.','<strong>Pro-C 2</strong> — Mode Punch. Ratio 4:1, Attack 5 ms, Release 50 ms. Réduction de gain 3–4 dB.','<strong>Pro-L 2</strong> — Style Modern, ceiling −0.3 dB. Juste attraper les crêtes.','Level-match et A/B contre un kick de référence à chaque étape.'] } },
  { name: { en: 'Vintage Analog Pad', fr: 'Nappe analogique vintage' }, tags: ['pad', 'texture'], steps: { en: ['<strong>Jup-8 V4</strong> — Two oscillators, slight detune (5–8 cents). Low-pass filter at 2 kHz, Resonance 20%.','<strong>Tape MELLO-FI</strong> — Tape Speed slow, Wow & Flutter 30%, Noise 15%.','<strong>Super VHS</strong> — Age 50%, Boost off. Lo-fi character without losing definition.','<strong>Chorus DIMENSION-D</strong> — Mode III for maximum width.','<strong>ValhallaVintageVerb</strong> — 1980s algorithm, Decay 4 s, ModDepth 30%, Mix 30%.','<strong>Pro-Q 3</strong> — High-pass at 150 Hz. Gentle 10 kHz shelf −2 dB to keep it smooth.'], fr: ['<strong>Jup-8 V4</strong> — Deux oscillateurs, léger désaccord (5–8 cents). Filtre passe-bas à 2 kHz, Résonance 20%.','<strong>Tape MELLO-FI</strong> — Vitesse bande lente, Wow & Flutter 30%, Noise 15%.','<strong>Super VHS</strong> — Age 50%, Boost off. Caractère lo-fi sans perdre la définition.','<strong>Chorus DIMENSION-D</strong> — Mode III pour largeur maximale.','<strong>ValhallaVintageVerb</strong> — Algo 1980s, Decay 4 s, ModDepth 30%, Mix 30%.','<strong>Pro-Q 3</strong> — Passe-haut à 150 Hz. Shelf doux 10 kHz −2 dB pour garder la douceur.'] } },
  { name: { en: 'Tight Electro Clap', fr: 'Clap électro serré' }, tags: ['drums', 'clap'], steps: { en: ['Start with a layered clap sample — short, punchy, minimal room.','<strong>Devastor 2</strong> — Symmetric mode, Drive 20%. Adds edge without harshness.','<strong>Pro-Q 3</strong> — Cut below 200 Hz. Boost 1.5 kHz (+2 dB, wide Q) for presence. Notch any ringy frequency.','<strong>Pro-C 2</strong> — Classic mode. Ratio 3:1, Attack 1 ms, Release 40 ms. Fast and controlled.','<strong>ValhallaPlate</strong> — Decay 0.8 s, Damping high, Mix 15%. Just enough space, not washy.','Keep it centered, mono-compatible.'], fr: ['Commence avec un sample clap layeré — court, punchy, minimal room.','<strong>Devastor 2</strong> — Mode symétrique, Drive 20%. Ajoute du tranchant sans agressivité.','<strong>Pro-Q 3</strong> — Coupe sous 200 Hz. Boost 1.5 kHz (+2 dB, Q large) pour la présence. Notch sur toute fréquence qui sonne.','<strong>Pro-C 2</strong> — Mode Classic. Ratio 3:1, Attack 1 ms, Release 40 ms. Rapide et contrôlé.','<strong>ValhallaPlate</strong> — Decay 0.8 s, Damping élevé, Mix 15%. Juste assez d\'espace, pas délavé.','Garde-le centré, compatible mono.'] } },
  { name: { en: 'Rhythmic Sidechain Pump', fr: 'Pump sidechain rythmique' }, tags: ['dynamics', 'groove'], steps: { en: ['<strong>ShaperBox 3</strong> — VolumeShaper. Draw a pump curve synced to 1/4.','Attack shape: fast drop (5–10 ms). Release shape: medium recovery (80–120 ms). Adjust to track groove.','Apply to pads, basses, and mid-range synths — NOT to drums or leads.','Alternative: Ableton\'s native Compressor with sidechain from kick, Ratio 4:1, Attack 0.1 ms, Release 100 ms.','Level-match before/after. The pump should feel rhythmic, not like a broken compressor.'], fr: ['<strong>ShaperBox 3</strong> — VolumeShaper. Dessine une courbe de pump sync en 1/4.','Forme d\'attaque : chute rapide (5–10 ms). Forme de release : récupération moyenne (80–120 ms). Ajuste au groove du morceau.','Applique sur les nappes, basses et synthés mid-range — PAS sur les drums ni les leads.','Alternative : Compressor natif d\'Ableton avec sidechain du kick, Ratio 4:1, Attack 0.1 ms, Release 100 ms.','Level-match avant/après. Le pump doit sembler rythmique, pas comme un compresseur cassé.'] } },
  { name: { en: 'Gritty Hi-Hat Processing', fr: 'Traitement hi-hat gritty' }, tags: ['drums', 'hi-hat'], steps: { en: ['Choose a crisp closed hi-hat sample. Layer an open hat on offbeats if needed.','<strong>Pro-Q 3</strong> — High-pass at 400 Hz aggressively. Boost 8–10 kHz (+2 dB shelf) for sizzle.','<strong>Decimort 2</strong> — Subtle: sample rate 28 kHz, bit depth 14. Adds analog texture to digital hats.','<strong>Comp FET-76</strong> — Fast attack, fast release, light ratio (2:1). Tames peaks, adds consistent level.','Pan 5–15% off-center for width. Keep velocity variations for groove.'], fr: ['Choisis un sample de hi-hat fermé net. Layer un open hat sur les contretemps si besoin.','<strong>Pro-Q 3</strong> — Passe-haut à 400 Hz agressif. Boost 8–10 kHz (+2 dB shelf) pour le sizzle.','<strong>Decimort 2</strong> — Subtil : sample rate 28 kHz, profondeur 14 bits. Ajoute une texture analogique aux hats numériques.','<strong>Comp FET-76</strong> — Attack rapide, release rapide, ratio léger (2:1). Dompte les crêtes, niveau constant.','Pan 5–15% décentré pour la largeur. Garde les variations de vélocité pour le groove.'] } },
  { name: { en: 'Tape-Saturated Bus Glue', fr: 'Glue bus saturé bande' }, tags: ['bus', 'mix'], steps: { en: ['On your 2-bus or instrument bus:','<strong>Comp VCA-65</strong> — Gentle 2:1, Attack 30 ms, Release auto. 1–2 dB gain reduction max.','<strong>Saturn 2</strong> — Warm Tape, single band full range, Drive 8–12%, Mix 50%. Adds cohesion.','<strong>Pro-Q 3</strong> — Subtle tilt EQ: +1 dB at 10 kHz shelf, −1 dB at 100 Hz shelf. Brings air.','Level-match meticulously. This should feel like "better" not "different".'], fr: ['Sur ton bus 2-bus ou bus d\'instruments :','<strong>Comp VCA-65</strong> — Doux 2:1, Attack 30 ms, Release auto. 1–2 dB de réduction de gain max.','<strong>Saturn 2</strong> — Warm Tape, bande unique full range, Drive 8–12%, Mix 50%. Ajoute de la cohésion.','<strong>Pro-Q 3</strong> — Tilt EQ subtil : +1 dB shelf à 10 kHz, −1 dB shelf à 100 Hz. Apporte de l\'air.','Level-match méticuleusement. Ça doit paraître "meilleur" pas "différent".'] } },
  { name: { en: 'Detuned Supersaw Lead', fr: 'Lead supersaw désaccordé' }, tags: ['lead', 'synth'], steps: { en: ['<strong>Serum 2</strong> — Init patch. Osc A: Saw, 7 voices unison, Detune 20%. Osc B: Saw, 3 voices, Detune 10%, −7 semitones.','<strong>Filter</strong> in Serum: LP 24 dB, Cutoff 3 kHz, Reso 15%. Env 2 modulating cutoff, Amount 40%.','<strong>Chorus JUN-6</strong> — Subtle width after Serum.','<strong>Pro-Q 3</strong> — High-pass at 150 Hz. Tame 2–4 kHz if harsh.','<strong>ValhallaRoom</strong> — Small room, Decay 1 s, Mix 15%. Keep it focused, not washed out.','Use mono below 200 Hz (Pro-Q 3 mid-side mode, cut sides below 200 Hz).'], fr: ['<strong>Serum 2</strong> — Patch Init. Osc A : Saw, 7 voix unison, Detune 20%. Osc B : Saw, 3 voix, Detune 10%, −7 demi-tons.','<strong>Filtre</strong> dans Serum : LP 24 dB, Cutoff 3 kHz, Reso 15%. Env 2 modulant le cutoff, Amount 40%.','<strong>Chorus JUN-6</strong> — Largeur subtile après Serum.','<strong>Pro-Q 3</strong> — Passe-haut à 150 Hz. Dompte 2–4 kHz si agressif.','<strong>ValhallaRoom</strong> — Petite room, Decay 1 s, Mix 15%. Garde le focus, pas délavé.','Utilise le mono sous 200 Hz (Pro-Q 3 mode mid-side, coupe les sides sous 200 Hz).'] } },
  { name: { en: 'Filtered Noise Sweep', fr: 'Sweep de bruit filtré' }, tags: ['fx', 'transition'], steps: { en: ['<strong>Serum 2</strong> — Noise oscillator, white noise. No pitch tracking.','<strong>Filter SEM</strong> — Band-pass mode. Automate cutoff from 200 Hz to 8 kHz over 4–8 bars.','<strong>Efx MOTIONS</strong> — Sync to 1/16, subtle rhythmic modulation on filter.','<strong>ValhallaDelay</strong> — Stereo, 1/16, Mix 20%, Feedback rising from 10% to 50%.','<strong>Pro-L 2</strong> — Safety limiter. The feedback can get wild.','Automate volume: fade in from silence to −12 dB. Cut abruptly at the drop.'], fr: ['<strong>Serum 2</strong> — Oscillateur noise, bruit blanc. Pas de pitch tracking.','<strong>Filter SEM</strong> — Mode band-pass. Automatise le cutoff de 200 Hz à 8 kHz sur 4–8 mesures.','<strong>Efx MOTIONS</strong> — Sync en 1/16, modulation rythmique subtile sur le filtre.','<strong>ValhallaDelay</strong> — Stéréo, 1/16, Mix 20%, Feedback montant de 10% à 50%.','<strong>Pro-L 2</strong> — Limiteur de sécurité. Le feedback peut devenir sauvage.','Automatise le volume : fade in depuis le silence jusqu\'à −12 dB. Coupe net au drop.'] } },
  { name: { en: 'Electro Perc Loop Treatment', fr: 'Traitement loop perc électro' }, tags: ['perc', 'loop'], steps: { en: ['Import percussion loop (e.g. Sample Market Co UK). Warp in Beats mode.','<strong>Infiltrator</strong> — Choose a rhythmic multi-fx preset. Reduce Mix to 25–40%.','<strong>Pro-Q 3</strong> — High-pass at 250 Hz. Remove anything competing with kick/bass.','<strong>Decimort 2</strong> — Light bit-crush: 14 bits, 24 kHz. Adds analog grit.','<strong>ShaperBox 3</strong> — PanShaper for stereo movement synced to 1/8.','Level-match. The loop should add texture, not volume.'], fr: ['Importe un loop de percussion (ex. Sample Market Co UK). Warp en mode Beats.','<strong>Infiltrator</strong> — Choisis un preset multi-fx rythmique. Réduis Mix à 25–40%.','<strong>Pro-Q 3</strong> — Passe-haut à 250 Hz. Supprime tout ce qui entre en conflit avec kick/bass.','<strong>Decimort 2</strong> — Léger bit-crush : 14 bits, 24 kHz. Ajoute du grain analogique.','<strong>ShaperBox 3</strong> — PanShaper pour du mouvement stéréo sync en 1/8.','Level-match. Le loop doit ajouter de la texture, pas du volume.'] } },
  { name: { en: 'Cinematic Impact Hit', fr: 'Impact cinématique' }, tags: ['fx', 'impact'], steps: { en: ['Layer: low boom (sine at 50 Hz, fast decay), metallic crash sample, noise burst.','<strong>Blackhole</strong> — Size 50%, Gravity normal, Mix 30%. Creates the tail.','<strong>Dist COLDFIRE</strong> — Parallel: Drive 50%, Mix 20%. Adds aggression to the initial transient.','<strong>Pro-Q 3</strong> — Low-pass at 12 kHz to remove fizz. Boost 60–80 Hz (+3 dB) for weight.','<strong>Pro-L 2</strong> — Aggressive limiting to flatten the peak. Ceiling −0.5 dB.','Render in place. Use as a one-shot in your arrangement at key transition points.'], fr: ['Layer : boom grave (sinus à 50 Hz, decay rapide), sample crash métallique, burst de bruit.','<strong>Blackhole</strong> — Size 50%, Gravity normal, Mix 30%. Crée la traîne.','<strong>Dist COLDFIRE</strong> — Parallèle : Drive 50%, Mix 20%. Ajoute de l\'agressivité au transitoire initial.','<strong>Pro-Q 3</strong> — Passe-bas à 12 kHz pour enlever le fizz. Boost 60–80 Hz (+3 dB) pour le poids.','<strong>Pro-L 2</strong> — Limitation agressive pour aplatir le pic. Ceiling −0.5 dB.','Render in place. Utilise comme one-shot dans ton arrangement aux points de transition clés.'] } },
  { name: { en: 'Warm Mono Bass', fr: 'Basse mono chaude' }, tags: ['bass', 'low-end'], steps: { en: ['<strong>Diva</strong> — Mono mode. Single saw oscillator. Filter: Ladder, Cutoff 800 Hz, Reso 10%. Env mod 30%.','<strong>Saturn 2</strong> — Warm Tube on 80–400 Hz band, Drive 20%. Adds harmonic body.','<strong>Pro-Q 3</strong> — High-pass at 30 Hz. Cut 200–300 Hz (−2 dB) to reduce boxy mud.','<strong>Pro-C 2</strong> — Clean mode, Ratio 4:1, Attack 8 ms, Release 60 ms. Tighten dynamics.','<strong>Pro-MB</strong> — Optional: upward compression on 60–100 Hz band, +2 dB. Lifts sub presence.','A/B against reference. Keep it simple, solid, mono.'], fr: ['<strong>Diva</strong> — Mode mono. Oscillateur saw unique. Filtre : Ladder, Cutoff 800 Hz, Reso 10%. Env mod 30%.','<strong>Saturn 2</strong> — Warm Tube sur la bande 80–400 Hz, Drive 20%. Ajoute du corps harmonique.','<strong>Pro-Q 3</strong> — Passe-haut à 30 Hz. Cut 200–300 Hz (−2 dB) pour réduire la boîte.','<strong>Pro-C 2</strong> — Mode Clean, Ratio 4:1, Attack 8 ms, Release 60 ms. Resserre la dynamique.','<strong>Pro-MB</strong> — Optionnel : compression upward sur bande 60–100 Hz, +2 dB. Relève la présence sub.','A/B contre référence. Garde ça simple, solide, mono.'] } },
  { name: { en: 'Granular Texture Layer', fr: 'Couche texture granulaire' }, tags: ['texture', 'experimental'], steps: { en: ['Source: any synth one-shot, vocal snippet, or field recording.','<strong>Efx FRAGMENTS</strong> — Grain size 30–80 ms, Scatter 50%, Pitch random ±5 semitones, Mix 70%.','<strong>Phaser BI-TRON</strong> — Rate 0.1 Hz, Depth 60%. Slow evolving movement.','<strong>ValhallaShimmer</strong> — Pitch +12, Size large, Decay 5 s, Mix 35%.','<strong>Pro-Q 3</strong> — Band-pass: high-pass 300 Hz, low-pass 8 kHz. Keep it in its frequency lane.','Automate Efx FRAGMENTS parameters for organic evolution. Render 8–16 bars, chop the best parts.'], fr: ['Source : n\'importe quel one-shot synthé, extrait vocal, ou field recording.','<strong>Efx FRAGMENTS</strong> — Taille grain 30–80 ms, Scatter 50%, Pitch aléatoire ±5 demi-tons, Mix 70%.','<strong>Phaser BI-TRON</strong> — Rate 0.1 Hz, Depth 60%. Mouvement évolutif lent.','<strong>ValhallaShimmer</strong> — Pitch +12, Size large, Decay 5 s, Mix 35%.','<strong>Pro-Q 3</strong> — Band-pass : passe-haut 300 Hz, passe-bas 8 kHz. Reste dans sa plage de fréquences.','Automatise les paramètres d\'Efx FRAGMENTS pour une évolution organique. Render 8–16 mesures, découpe les meilleurs passages.'] } },
  { name: { en: 'Stereo Widening Stack', fr: 'Stack d\'élargissement stéréo' }, tags: ['stereo', 'mix'], steps: { en: ['For midrange elements (synths, pads, FX) — NOT bass or kick:','<strong>Chorus JUN-6</strong> — Mode I for subtle, Mode II for wider. First in chain.','<strong>MicroPitch</strong> — Detune ±10 cents, Delay 15–20 ms, Mix 40%. Adds dimension.','<strong>Pro-Q 3</strong> — Mid-side mode: boost sides at 3–8 kHz (+1.5 dB). Cut sides below 200 Hz.','Check mono compatibility: collapse to mono in Utility. If it sounds thin or phasey, reduce MicroPitch Mix.','Reference against your track\'s mono fold. Width should enhance, not destroy.'], fr: ['Pour les éléments mid-range (synthés, nappes, FX) — PAS basse ou kick :','<strong>Chorus JUN-6</strong> — Mode I pour subtil, Mode II pour plus large. Premier dans la chaîne.','<strong>MicroPitch</strong> — Detune ±10 cents, Delay 15–20 ms, Mix 40%. Ajoute de la dimension.','<strong>Pro-Q 3</strong> — Mode mid-side : boost sides à 3–8 kHz (+1.5 dB). Cut sides sous 200 Hz.','Vérifie la compatibilité mono : collapse en mono dans Utility. Si ça sonne fin ou phaseux, réduis le Mix MicroPitch.','Compare avec le fold mono de ton morceau. La largeur doit améliorer, pas détruire.'] } },
  { name: { en: 'Master Bus Polish', fr: 'Polish bus master' }, tags: ['master', 'finish'], steps: { en: ['Final chain on your master bus (apply LAST, after mix is balanced):','<strong>Neutron 5 Equalizer</strong> — Gentle surgical cleanup. Fix any mix-wide resonances.','<strong>Ozone 12 Dynamic EQ</strong> — Tame 200–400 Hz buildup dynamically. Only acts when needed.','<strong>Ozone 12 Exciter</strong> — Tape mode on lows (Drive 5%), Retro mode on highs (Drive 8%).','<strong>Ozone 12 Imager</strong> — Narrow below 100 Hz, widen 2–8 kHz slightly.','<strong>Ozone 12 Maximizer</strong> — IRC IV, Ceiling −1.0 dB (for streaming). Target −14 LUFS integrated.','A/B with and without the entire chain. Each module should be subtle. If you can obviously hear a single module working, it\'s too much.'], fr: ['Chaîne finale sur ton bus master (applique EN DERNIER, après que le mix est équilibré) :','<strong>Neutron 5 Equalizer</strong> — Nettoyage chirurgical doux. Corrige les résonances globales du mix.','<strong>Ozone 12 Dynamic EQ</strong> — Dompte l\'accumulation 200–400 Hz dynamiquement. N\'agit que quand nécessaire.','<strong>Ozone 12 Exciter</strong> — Mode Tape sur les graves (Drive 5%), mode Retro sur les aigus (Drive 8%).','<strong>Ozone 12 Imager</strong> — Rétrécis sous 100 Hz, élargis 2–8 kHz légèrement.','<strong>Ozone 12 Maximizer</strong> — IRC IV, Ceiling −1.0 dB (pour streaming). Cible −14 LUFS intégré.','A/B avec et sans toute la chaîne. Chaque module doit être subtil. Si tu entends clairement un module travailler, c\'est trop.'] } }
];

/* ============================================================
   DATA — FX PALETTE, MIX CHECK, CHAINS, FINISH, FIXIT, REFERENCES, INVENTORY
   (All preserved exactly from v1)
   ============================================================ */
const FX_PALETTE=[{category:{en:'SATURATION / DISTORTION',fr:'SATURATION / DISTORTION'},items:[{name:'Saturn 2',vendor:'FabFilter'},{name:'Devastor 2',vendor:'D16'},{name:'Redoptor 2',vendor:'D16'},{name:'Dist COLDFIRE',vendor:'Arturia'},{name:'Dist OPAMP-21',vendor:'Arturia'},{name:'Dist TUBE-CULTURE',vendor:'Arturia'},{name:'CrushStation',vendor:'Eventide'}]},{category:{en:'REVERB',fr:'RÉVERB'},items:[{name:'ValhallaVintageVerb',vendor:'Valhalla'},{name:'ValhallaRoom',vendor:'Valhalla'},{name:'ValhallaPlate',vendor:'Valhalla'},{name:'ValhallaShimmer',vendor:'Valhalla'},{name:'ValhallaSupermassive',vendor:'Valhalla'},{name:'Crystalline',vendor:'Baby Audio'},{name:'SP2016 Reverb',vendor:'Eventide'},{name:'MangledVerb',vendor:'Eventide'},{name:'Blackhole',vendor:'Eventide'},{name:'ShimmerVerb',vendor:'Eventide'},{name:'Pro-R 2',vendor:'FabFilter'},{name:'Toraverb 2',vendor:'D16'}]},{category:{en:'DELAY',fr:'DELAY'},items:[{name:'ValhallaDelay',vendor:'Valhalla'},{name:'Timeless 3',vendor:'FabFilter'},{name:'Delay TAPE-201',vendor:'Arturia'},{name:'Delay ETERNITY',vendor:'Arturia'},{name:'Delay BRIGADE',vendor:'Arturia'},{name:'Tekturon',vendor:'D16'},{name:'Repeater',vendor:'D16'},{name:'UltraTap',vendor:'Eventide'},{name:'H3000 Band Delays Mk II',vendor:'Eventide'}]},{category:{en:'MODULATION',fr:'MODULATION'},items:[{name:'Chorus DIMENSION-D',vendor:'Arturia'},{name:'Chorus JUN-6',vendor:'Arturia'},{name:'Phaser BI-TRON',vendor:'Arturia'},{name:'Flanger BL-20',vendor:'Arturia'},{name:'TriceraChorus',vendor:'Eventide'},{name:'Instant Phaser Mk II',vendor:'Eventide'},{name:'Instant Flanger Mk II',vendor:'Eventide'},{name:'MicroPitch',vendor:'Eventide'},{name:'Lush 2',vendor:'D16'},{name:'Syntorus 2',vendor:'D16'},{name:'Fazortan 2',vendor:'D16'}]},{category:{en:'DEGRADATION / LOFI',fr:'DÉGRADATION / LOFI'},items:[{name:'Decimort 2',vendor:'D16'},{name:'Super VHS',vendor:'Baby Audio'},{name:'Tape MELLO-FI',vendor:'Arturia'}]},{category:{en:'MULTI-FX / CREATIVE',fr:'MULTI-FX / CRÉATIF'},items:[{name:'ShaperBox 3',vendor:'Cableguys'},{name:'Infiltrator',vendor:'Devious Machines'},{name:'Efx FRAGMENTS',vendor:'Arturia'},{name:'Efx MOTIONS',vendor:'Arturia'},{name:'Efx REFRACT',vendor:'Arturia'},{name:'Crystals',vendor:'Eventide'},{name:'Undulator',vendor:'Eventide'},{name:'H3000 Factory Mk II',vendor:'Eventide'}]},{category:{en:'FILTER',fr:'FILTRE'},items:[{name:'Filter Mini',vendor:'Arturia'},{name:'Filter M12',vendor:'Arturia'},{name:'Filter MS-20',vendor:'Arturia'},{name:'Filter SEM',vendor:'Arturia'},{name:'Volcano 3',vendor:'FabFilter'},{name:'Simplon',vendor:'FabFilter'},{name:'Godfazer',vendor:'D16'}]},{category:{en:'HARMONIZER / PITCH',fr:'HARMONISEUR / PITCH'},items:[{name:'Octavox',vendor:'Eventide'},{name:'Quadravox',vendor:'Eventide'},{name:'H910 Harmonizer',vendor:'Eventide'},{name:'H949 Harmonizer',vendor:'Eventide'},{name:'Crystals',vendor:'Eventide'},{name:'ValhallaFreqEcho',vendor:'Valhalla'},{name:'ValhallaUberMod',vendor:'Valhalla'}]}];
const MIXCHECK_ZONES=[{freq:'20–60 Hz',name:{en:'Sub',fr:'Sub'},listen:{en:'<strong>Listen for:</strong> Is the sub present and controlled? Any unwanted rumble? Does it translate on small speakers (it shouldn\'t — but check with a reference)? Is kick/bass phase aligned?',fr:'<strong>Écoute :</strong> Le sub est-il présent et contrôlé ? Du rumble indésirable ? Est-ce que ça traduit sur petites enceintes (ça ne devrait pas — mais vérifie avec une référence) ? Kick/basse en phase ?'},tools:['Pro-Q 3 (analyzer)','Ozone 12 Low End Focus','Neutron 5 Phase']},{freq:'60–200 Hz',name:{en:'Bass Body',fr:'Corps de basse'},listen:{en:'<strong>Listen for:</strong> Kick and bass working together or fighting? Boominess or mud around 100–200 Hz? Is the low end tight and punchy or flabby?',fr:'<strong>Écoute :</strong> Kick et basse travaillent ensemble ou se battent ? Du boomy ou de la boue vers 100–200 Hz ? Le bas est serré et punchy ou mou ?'},tools:['Pro-Q 3','Pro-C 2 (sidechain)','ShaperBox 3']},{freq:'200–500 Hz',name:{en:'Low Mids',fr:'Bas médiums'},listen:{en:'<strong>Listen for:</strong> Mud, boxiness, or buildup. Multiple elements stacking in this range. This is the most common problem zone. Cut surgically, don\'t boost.',fr:'<strong>Écoute :</strong> Boue, boxiness, ou accumulation. Plusieurs éléments qui s\'empilent dans cette zone. C\'est la zone à problèmes la plus courante. Coupe chirurgicalement, ne booste pas.'},tools:['Pro-Q 3','Ozone 12 Dynamic EQ','Neutron 5 Equalizer']},{freq:'500 Hz–2 kHz',name:{en:'Midrange',fr:'Médiums'},listen:{en:'<strong>Listen for:</strong> Honky or nasal quality. Clarity of melodic elements. Are leads cutting through? Is there enough body without masking?',fr:'<strong>Écoute :</strong> Qualité honky ou nasale. Clarté des éléments mélodiques. Les leads percent-ils ? Y a-t-il assez de corps sans masquage ?'},tools:['Pro-Q 3','Neutron 5 Sculptor','SplitEQ']},{freq:'2–6 kHz',name:{en:'Presence',fr:'Présence'},listen:{en:'<strong>Listen for:</strong> Harshness, sibilance, or ear fatigue. Is the track too aggressive in this range? Presence should feel energetic, not painful. Compare at lower volume.',fr:'<strong>Écoute :</strong> Agressivité, sibilance, ou fatigue d\'oreille. Le morceau est-il trop agressif dans cette zone ? La présence doit être énergique, pas douloureuse. Compare à volume bas.'},tools:['Pro-Q 3 (dynamic EQ)','Pro-DS','Ozone 12 Spectral Shaper']},{freq:'6–20 kHz',name:{en:'Air / Brilliance',fr:'Air / Brillance'},listen:{en:'<strong>Listen for:</strong> Sizzle on hats and cymbals. Is the top end bright enough or dull? Overly bright = fatiguing. Too dull = lifeless. Check against reference.',fr:'<strong>Écoute :</strong> Sizzle sur les hats et cymbales. Le haut est assez brillant ou terne ? Trop brillant = fatiguant. Trop terne = sans vie. Compare avec la référence.'},tools:['Pro-Q 3','Ozone 12 Exciter','Ozone 12 Equalizer']},{freq:'STEREO',name:{en:'Stereo Field',fr:'Champ stéréo'},listen:{en:'<strong>Listen for:</strong> Width balance. Is the center solid (kick, bass, lead)? Are sides interesting without being empty or cluttered? Mono compatibility check: does anything disappear?',fr:'<strong>Écoute :</strong> Équilibre de largeur. Le centre est solide (kick, basse, lead) ? Les côtés sont intéressants sans être vides ou encombrés ? Check compatibilité mono : quelque chose disparaît ?'},tools:['Ozone 12 Imager','Pro-Q 3 (mid-side)','Neutron 5 Visual Mixer']},{freq:'DYNAMICS',name:{en:'Overall Dynamics',fr:'Dynamique globale'},listen:{en:'<strong>Listen for:</strong> Does the track breathe? Are transients preserved or squashed? Is there dynamic contrast between sections? Crest factor should be 8–12 dB for club music.',fr:'<strong>Écoute :</strong> Le morceau respire-t-il ? Les transitoires sont préservés ou écrasés ? Y a-t-il du contraste dynamique entre les sections ? Le crest factor devrait être 8–12 dB pour la musique club.'},tools:['Pro-L 2 (metering)','Ozone 12 Maximizer','Ozone 12 Dynamics']}];
const MIX_CHAINS=[{name:{en:'Kick Channel',fr:'Channel Kick'},purpose:{en:'Clean, punchy, mono',fr:'Propre, punchy, mono'},slots:[{plugin:'Pro-Q 3',setting:{en:'HP 25 Hz 24dB/oct. Cut 300 Hz −3 dB (Q 2.0). Boost 60 Hz +1.5 dB (wide).',fr:'HP 25 Hz 24dB/oct. Cut 300 Hz −3 dB (Q 2.0). Boost 60 Hz +1.5 dB (large).'}},{plugin:'Pro-C 2',setting:{en:'Punch mode. Ratio 4:1, Attack 5 ms, Release 50 ms. GR: 3–4 dB.',fr:'Mode Punch. Ratio 4:1, Attack 5 ms, Release 50 ms. GR : 3–4 dB.'}},{plugin:'Saturn 2',setting:{en:'Warm Tape on 60–200 Hz. Drive 10%. Mix 40%.',fr:'Warm Tape sur 60–200 Hz. Drive 10%. Mix 40%.'}},{plugin:'Pro-L 2',setting:{en:'Modern. Ceiling −0.3 dB. Safety only.',fr:'Modern. Ceiling −0.3 dB. Sécurité uniquement.'}}]},{name:{en:'Bass Channel',fr:'Channel Basse'},purpose:{en:'Tight, warm, controlled',fr:'Serré, chaud, contrôlé'},slots:[{plugin:'Pro-Q 3',setting:{en:'HP 28 Hz. Cut 200–300 Hz −2 dB. Mono below 80 Hz (mid-side).',fr:'HP 28 Hz. Cut 200–300 Hz −2 dB. Mono sous 80 Hz (mid-side).'}},{plugin:'Pro-C 2',setting:{en:'Clean mode. Ratio 4:1, Attack 8 ms, Release 60 ms. GR: 3–5 dB.',fr:'Mode Clean. Ratio 4:1, Attack 8 ms, Release 60 ms. GR : 3–5 dB.'}},{plugin:'Saturn 2',setting:{en:'Warm Tube on 80–400 Hz. Drive 15%. Mix 50%.',fr:'Warm Tube sur 80–400 Hz. Drive 15%. Mix 50%.'}},{plugin:'ShaperBox 3',setting:{en:'VolumeShaper sidechain from kick. 1/4 sync. Depth 40–60%.',fr:'VolumeShaper sidechain du kick. Sync 1/4. Depth 40–60%.'}}]},{name:{en:'Drums Bus',fr:'Bus Drums'},purpose:{en:'Glue, punch, cohesion',fr:'Glue, punch, cohésion'},slots:[{plugin:'Pro-Q 3',setting:{en:'Surgical cleanup only. Fix any resonances across the bus.',fr:'Nettoyage chirurgical uniquement. Corrige les résonances du bus.'}},{plugin:'Comp VCA-65',setting:{en:'Ratio 2:1, Attack 15 ms, Release auto. GR: 2–3 dB. Glue.',fr:'Ratio 2:1, Attack 15 ms, Release auto. GR : 2–3 dB. Glue.'}},{plugin:'Saturn 2',setting:{en:'Warm Tape, full range, Drive 8%. Mix 40%. Subtle warmth.',fr:'Warm Tape, full range, Drive 8%. Mix 40%. Chaleur subtile.'}},{plugin:'Pro-L 2',setting:{en:'Safety limiter. Ceiling −0.5 dB.',fr:'Limiteur de sécurité. Ceiling −0.5 dB.'}}]},{name:{en:'Synth / Mid Bus',fr:'Bus Synthé / Mid'},purpose:{en:'Clarity, width, separation',fr:'Clarté, largeur, séparation'},slots:[{plugin:'Pro-Q 3',setting:{en:'HP 100–200 Hz (varies by source). Dynamic EQ at 2–4 kHz (−2 dB) to tame harshness.',fr:'HP 100–200 Hz (varie selon la source). EQ dynamique à 2–4 kHz (−2 dB) pour dompter l\'agressivité.'}},{plugin:'Pro-C 2',setting:{en:'Vocal mode. Ratio 3:1, Attack 10 ms, Release 100 ms. Gentle.',fr:'Mode Vocal. Ratio 3:1, Attack 10 ms, Release 100 ms. Doux.'}},{plugin:'MicroPitch',setting:{en:'Detune ±8 cents. Delay 12 ms. Mix 30%. Stereo width.',fr:'Detune ±8 cents. Delay 12 ms. Mix 30%. Largeur stéréo.'}},{plugin:'Pro-R 2',setting:{en:'Small room, Decay 0.8 s, Brightness 60%. Mix 10–15%.',fr:'Petite room, Decay 0.8 s, Brightness 60%. Mix 10–15%.'}}]},{name:{en:'FX Return',fr:'Retour FX'},purpose:{en:'Space without mud',fr:'Espace sans boue'},slots:[{plugin:'Pro-Q 3',setting:{en:'HP 200–400 Hz (pre-verb). Cuts mud from reverb/delay tails.',fr:'HP 200–400 Hz (pré-verb). Coupe la boue des queues de reverb/delay.'}},{plugin:'ValhallaVintageVerb',setting:{en:'1980s algo. Decay 2–4 s. ModDepth 20%. 100% wet on return.',fr:'Algo 1980s. Decay 2–4 s. ModDepth 20%. 100% wet sur le retour.'}},{plugin:'Pro-C 2',setting:{en:'Sidechain from drums bus. Ducks verb during hits. Ratio 3:1.',fr:'Sidechain du bus drums. Duck la verb pendant les hits. Ratio 3:1.'}}]},{name:{en:'Master Bus',fr:'Bus Master'},purpose:{en:'Final polish — subtle',fr:'Polish final — subtil'},slots:[{plugin:'Neutron 5 Equalizer',setting:{en:'Surgical fixes only. No creative EQ here.',fr:'Corrections chirurgicales uniquement. Pas d\'EQ créatif ici.'}},{plugin:'Ozone 12 Dynamic EQ',setting:{en:'Tame 200–400 Hz buildup. Dynamic, gentle.',fr:'Dompte l\'accumulation 200–400 Hz. Dynamique, doux.'}},{plugin:'Ozone 12 Imager',setting:{en:'Narrow <100 Hz. Widen 2–8 kHz (+10–15%).',fr:'Rétrécis <100 Hz. Élargis 2–8 kHz (+10–15%).'}},{plugin:'Ozone 12 Maximizer',setting:{en:'IRC IV. Ceiling −1.0 dB. Target −14 LUFS.',fr:'IRC IV. Ceiling −1.0 dB. Cible −14 LUFS.'}}]}];
const FINISH_GROUPS=[{name:{en:'LOW END',fr:'BAS DU SPECTRE'},items:[{en:'Kick and bass phase-aligned',fr:'Kick et basse alignés en phase'},{en:'Sub mono below 80 Hz',fr:'Sub mono sous 80 Hz'},{en:'No rumble below 25 Hz',fr:'Pas de rumble sous 25 Hz'},{en:'Sidechain pump feels musical',fr:'Le pump sidechain sonne musical'},{en:'Low end translates on laptop speakers',fr:'Le bas traduit sur haut-parleurs laptop'}]},{name:{en:'MIDRANGE / BALANCE',fr:'MÉDIUMS / ÉQUILIBRE'},items:[{en:'No mud at 200–400 Hz',fr:'Pas de boue à 200–400 Hz'},{en:'Lead / main element clearly audible',fr:'Lead / élément principal clairement audible'},{en:'No harshness at 2–5 kHz',fr:'Pas d\'agressivité à 2–5 kHz'},{en:'Frequency separation between elements',fr:'Séparation fréquentielle entre les éléments'}]},{name:{en:'STEREO / SPACE',fr:'STÉRÉO / ESPACE'},items:[{en:'Mono compatibility checked',fr:'Compatibilité mono vérifiée'},{en:'Width appropriate for club system',fr:'Largeur appropriée pour système club'},{en:'Center image solid (kick, bass, lead)',fr:'Image centre solide (kick, basse, lead)'},{en:'Reverb tails not muddy',fr:'Queues de reverb pas boueuses'},{en:'No excessive side energy below 200 Hz',fr:'Pas d\'énergie latérale excessive sous 200 Hz'}]},{name:{en:'DYNAMICS / LOUDNESS',fr:'DYNAMIQUE / LOUDNESS'},items:[{en:'Target loudness reached (−14 LUFS streaming)',fr:'Loudness cible atteint (−14 LUFS streaming)'},{en:'True peak below −1 dBTP',fr:'True peak sous −1 dBTP'},{en:'Transients preserved (not over-limited)',fr:'Transitoires préservés (pas sur-limités)'},{en:'Dynamic contrast between sections',fr:'Contraste dynamique entre les sections'},{en:'Crest factor 8–12 dB',fr:'Crest factor 8–12 dB'}]},{name:{en:'FINAL CHECKS',fr:'VÉRIFICATIONS FINALES'},items:[{en:'Listened on headphones',fr:'Écouté au casque'},{en:'Listened on phone/laptop speaker',fr:'Écouté sur haut-parleur téléphone/laptop'},{en:'Listened at low volume',fr:'Écouté à volume bas'},{en:'Compared against 2–3 references',fr:'Comparé avec 2–3 références'},{en:'No clicks, pops, or artifacts',fr:'Pas de clics, pops, ou artefacts'}]}];
const FIXIT_CARDS=[{problem:{en:'Mix sounds muddy',fr:'Le mix sonne boueux'},diagnosis:{en:'Buildup in 200–400 Hz range. Multiple elements competing.',fr:'Accumulation dans la zone 200–400 Hz. Plusieurs éléments en conflit.'},solution:{en:'<strong class="fixit-plugin-ref">Pro-Q 3</strong> — Solo each element. Cut 200–400 Hz (−2 to −4 dB, Q 1.0–2.0) on non-essential elements. High-pass pads/FX higher (200+ Hz). <strong class="fixit-plugin-ref">Ozone 12 Dynamic EQ</strong> on master for remaining buildup.',fr:'<strong class="fixit-plugin-ref">Pro-Q 3</strong> — Solo chaque élément. Coupe 200–400 Hz (−2 à −4 dB, Q 1.0–2.0) sur les éléments non essentiels. Passe-haut plus élevé sur nappes/FX (200+ Hz). <strong class="fixit-plugin-ref">Ozone 12 Dynamic EQ</strong> sur le master pour le reste.'}},{problem:{en:'Kick disappears under bass',fr:'Le kick disparaît sous la basse'},diagnosis:{en:'Frequency overlap + phase issues in low end.',fr:'Chevauchement de fréquences + problèmes de phase dans le bas.'},solution:{en:'<strong class="fixit-plugin-ref">Neutron 5 Phase</strong> — Check and fix phase alignment. <strong class="fixit-plugin-ref">Pro-Q 3</strong> — Carve complementary EQ: boost kick at 60 Hz, cut bass at 60 Hz (and vice versa at 100 Hz). <strong class="fixit-plugin-ref">ShaperBox 3</strong> — VolumeShaper on bass sidechained from kick.',fr:'<strong class="fixit-plugin-ref">Neutron 5 Phase</strong> — Vérifie et corrige l\'alignement de phase. <strong class="fixit-plugin-ref">Pro-Q 3</strong> — EQ complémentaire : boost kick à 60 Hz, cut basse à 60 Hz (et inversement à 100 Hz). <strong class="fixit-plugin-ref">ShaperBox 3</strong> — VolumeShaper sur la basse sidechainé du kick.'}},{problem:{en:'Harsh / fatiguing highs',fr:'Aigus agressifs / fatigants'},diagnosis:{en:'Resonant peaks in 2–6 kHz range. Over-saturated or over-excited.',fr:'Pics résonants dans la zone 2–6 kHz. Sur-saturé ou sur-excité.'},solution:{en:'<strong class="fixit-plugin-ref">Pro-Q 3</strong> — Dynamic EQ band at 3–5 kHz, −3 dB, threshold set to catch only peaks. <strong class="fixit-plugin-ref">Pro-DS</strong> — Broadband mode if the harshness is sibilance-like. <strong class="fixit-plugin-ref">Ozone 12 Spectral Shaper</strong> on master for overall taming.',fr:'<strong class="fixit-plugin-ref">Pro-Q 3</strong> — Bande EQ dynamique à 3–5 kHz, −3 dB, seuil réglé pour n\'attraper que les pics. <strong class="fixit-plugin-ref">Pro-DS</strong> — Mode broadband si l\'agressivité ressemble à de la sibilance. <strong class="fixit-plugin-ref">Ozone 12 Spectral Shaper</strong> sur le master pour dompter globalement.'}},{problem:{en:'Mix lacks width',fr:'Le mix manque de largeur'},diagnosis:{en:'Too many mono elements. Lack of stereo processing on mid-range.',fr:'Trop d\'éléments mono. Manque de traitement stéréo sur le mid-range.'},solution:{en:'<strong class="fixit-plugin-ref">MicroPitch</strong> — On synth bus: Detune ±8 cents, Delay 12 ms, Mix 30%. <strong class="fixit-plugin-ref">Chorus JUN-6</strong> on pads. <strong class="fixit-plugin-ref">Ozone 12 Imager</strong> — Widen 2–8 kHz. Always check mono compatibility.',fr:'<strong class="fixit-plugin-ref">MicroPitch</strong> — Sur bus synthé : Detune ±8 cents, Delay 12 ms, Mix 30%. <strong class="fixit-plugin-ref">Chorus JUN-6</strong> sur les nappes. <strong class="fixit-plugin-ref">Ozone 12 Imager</strong> — Élargis 2–8 kHz. Toujours vérifier la compatibilité mono.'}},{problem:{en:'Drums lack punch',fr:'Les drums manquent de punch'},diagnosis:{en:'Transients being eaten by compression or saturation.',fr:'Les transitoires sont mangés par la compression ou la saturation.'},solution:{en:'<strong class="fixit-plugin-ref">Neutron 5 Transient Shaper</strong> — Increase Attack on kick (+20–30%). <strong class="fixit-plugin-ref">Pro-C 2</strong> — Switch to Punch mode, increase attack time to let transients through. <strong class="fixit-plugin-ref">Devastor 2</strong> — Reduce drive if on drum bus. Check parallel crush levels.',fr:'<strong class="fixit-plugin-ref">Neutron 5 Transient Shaper</strong> — Augmente Attack sur kick (+20–30%). <strong class="fixit-plugin-ref">Pro-C 2</strong> — Passe en mode Punch, augmente le temps d\'attaque pour laisser passer les transitoires. <strong class="fixit-plugin-ref">Devastor 2</strong> — Réduis le drive si sur le bus drums. Vérifie les niveaux de crush parallèle.'}},{problem:{en:'Bass sounds thin',fr:'La basse sonne fine'},diagnosis:{en:'Missing harmonics in 80–200 Hz range. Or high-passed too aggressively.',fr:'Harmoniques manquantes dans la zone 80–200 Hz. Ou passe-haut trop agressif.'},solution:{en:'<strong class="fixit-plugin-ref">Saturn 2</strong> — Warm Tube on 80–400 Hz band, Drive 15–25%. Generates harmonics that add weight. <strong class="fixit-plugin-ref">Pro-MB</strong> — Upward compression on 60–150 Hz, +2–3 dB. Lifts quiet moments. <strong class="fixit-plugin-ref">Pro-Q 3</strong> — Check your HP filter — try lowering to 25 Hz.',fr:'<strong class="fixit-plugin-ref">Saturn 2</strong> — Warm Tube sur bande 80–400 Hz, Drive 15–25%. Génère des harmoniques qui ajoutent du poids. <strong class="fixit-plugin-ref">Pro-MB</strong> — Compression upward sur 60–150 Hz, +2–3 dB. Relève les moments calmes. <strong class="fixit-plugin-ref">Pro-Q 3</strong> — Vérifie ton filtre HP — essaie de baisser à 25 Hz.'}},{problem:{en:'Mix doesn\'t translate',fr:'Le mix ne traduit pas'},diagnosis:{en:'Over-reliance on one monitoring setup. Resonance issues.',fr:'Trop de dépendance à un seul système d\'écoute. Problèmes de résonance.'},solution:{en:'Test on headphones, laptop speaker, car, phone. <strong class="fixit-plugin-ref">Ozone 12 Match EQ</strong> — Compare your spectrum against a reference track. <strong class="fixit-plugin-ref">Pro-Q 3</strong> — Use the spectrum analyzer to find and fix problem frequencies.',fr:'Teste au casque, HP laptop, voiture, téléphone. <strong class="fixit-plugin-ref">Ozone 12 Match EQ</strong> — Compare ton spectre avec un morceau de référence. <strong class="fixit-plugin-ref">Pro-Q 3</strong> — Utilise l\'analyseur de spectre pour trouver et corriger les fréquences.'}},{problem:{en:'Too loud but sounds squashed',fr:'Trop fort mais sonne écrasé'},diagnosis:{en:'Over-limiting on master. No headroom left.',fr:'Sur-limitation sur le master. Plus de headroom.'},solution:{en:'Turn down <strong class="fixit-plugin-ref">Ozone 12 Maximizer</strong> input by 2–3 dB. Check gain staging — aim for peaks at −6 dBFS before the master chain. <strong class="fixit-plugin-ref">Pro-L 2</strong> — Switch to Modern style. Target −14 LUFS for streaming.',fr:'Baisse l\'input de <strong class="fixit-plugin-ref">Ozone 12 Maximizer</strong> de 2–3 dB. Vérifie le gain staging — vise des crêtes à −6 dBFS avant la chaîne master. <strong class="fixit-plugin-ref">Pro-L 2</strong> — Passe en style Modern. Cible −14 LUFS pour le streaming.'}},{problem:{en:'Reverb tails creating mud',fr:'Les queues de reverb créent de la boue'},diagnosis:{en:'Reverb fed with too much low-end. No pre-filtering.',fr:'Reverb alimentée avec trop de bas. Pas de pré-filtrage.'},solution:{en:'<strong class="fixit-plugin-ref">Pro-Q 3</strong> — BEFORE the reverb: HP at 200–400 Hz. LP at 8–10 kHz. <strong class="fixit-plugin-ref">Pro-C 2</strong> — AFTER the reverb: sidechain from drums bus. Shorten decay: club-ready verbs are 0.5–2.5 s.',fr:'<strong class="fixit-plugin-ref">Pro-Q 3</strong> — AVANT la reverb : HP à 200–400 Hz. LP à 8–10 kHz. <strong class="fixit-plugin-ref">Pro-C 2</strong> — APRÈS la reverb : sidechain du bus drums. Raccourcis le decay : verbs club-ready 0.5–2.5 s.'}},{problem:{en:'Snare / clap sounds boxy',fr:'Le snare / clap sonne boxy'},diagnosis:{en:'Resonance at 200–500 Hz.',fr:'Résonance à 200–500 Hz.'},solution:{en:'<strong class="fixit-plugin-ref">Pro-Q 3</strong> — Sweep 200–500 Hz with a narrow boost to find it. Cut by 3–5 dB. <strong class="fixit-plugin-ref">Devastor 2</strong> — Light saturation to add upper harmonics. Consider layering a different sample.',fr:'<strong class="fixit-plugin-ref">Pro-Q 3</strong> — Sweep 200–500 Hz avec un boost étroit. Coupe de 3–5 dB. <strong class="fixit-plugin-ref">Devastor 2</strong> — Saturation légère pour ajouter des harmoniques hautes. Envisage un autre sample.'}},{problem:{en:'Track lacks energy',fr:'Le morceau manque d\'énergie'},diagnosis:{en:'No dynamic movement. Static sounds.',fr:'Pas de mouvement dynamique. Sons statiques.'},solution:{en:'<strong class="fixit-plugin-ref">ShaperBox 3</strong> — Add subtle volume/filter automation to pads and synths. <strong class="fixit-plugin-ref">Ozone 12 Exciter</strong> — Tape on lows, Retro on mids, Warm on highs. Drive 5–10%. <strong class="fixit-plugin-ref">Efx MOTIONS</strong> — On a synth layer for rhythmic modulation.',fr:'<strong class="fixit-plugin-ref">ShaperBox 3</strong> — Automation subtile volume/filtre sur nappes et synthés. <strong class="fixit-plugin-ref">Ozone 12 Exciter</strong> — Tape sur graves, Retro sur médiums, Warm sur aigus. Drive 5–10%. <strong class="fixit-plugin-ref">Efx MOTIONS</strong> — Sur un layer synthé pour modulation rythmique.'}},{problem:{en:'Phase issues on layers',fr:'Problèmes de phase sur layers'},diagnosis:{en:'Layered samples with timing or phase misalignment.',fr:'Samples layerés avec décalage de timing ou de phase.'},solution:{en:'<strong class="fixit-plugin-ref">Neutron 5 Phase</strong> — Auto-align layers. <strong class="fixit-plugin-ref">Precision Time Align</strong> — Surgical sample alignment. Zoom in on waveforms. Try polarity flip on one layer.',fr:'<strong class="fixit-plugin-ref">Neutron 5 Phase</strong> — Aligne automatiquement les layers. <strong class="fixit-plugin-ref">Precision Time Align</strong> — Alignement chirurgical. Zoome sur les waveforms. Essaie une inversion de polarité.'}},{problem:{en:'Sidechain sounds unnatural',fr:'Le sidechain sonne pas naturel'},diagnosis:{en:'Release too fast or too slow. Wrong curve shape.',fr:'Release trop rapide ou trop lent. Mauvaise forme de courbe.'},solution:{en:'<strong class="fixit-plugin-ref">ShaperBox 3</strong> — Switch to VolumeShaper. Draw custom curve: fast attack (5 ms), smooth recovery (80–150 ms). The release should end just before the next hit.',fr:'<strong class="fixit-plugin-ref">ShaperBox 3</strong> — Passe au VolumeShaper. Courbe custom : attaque rapide (5 ms), récupération douce (80–150 ms). Le release doit finir juste avant le prochain hit.'}}];
const REFERENCES=[{title:{en:'FREQUENCY MAP',fr:'CARTE DES FRÉQUENCES'},rows:[{key:'Sub Bass',val:'20–60 Hz'},{key:'Bass Body',val:'60–200 Hz'},{key:'Low Mids (mud zone)',val:'200–500 Hz'},{key:'Midrange',val:'500 Hz–2 kHz'},{key:'Presence',val:'2–6 kHz'},{key:'Brilliance / Air',val:'6–20 kHz'}]},{title:{en:'GAIN STAGING',fr:'GAIN STAGING'},rows:[{key:{en:'Individual tracks peak',fr:'Crête pistes individuelles'},val:'−12 to −6 dBFS'},{key:{en:'Bus/group peak',fr:'Crête bus/groupes'},val:'−8 to −4 dBFS'},{key:{en:'Master pre-limiter',fr:'Master pré-limiteur'},val:'−6 to −3 dBFS'},{key:{en:'Final output ceiling',fr:'Ceiling sortie finale'},val:'−1.0 dBTP'},{key:{en:'Streaming target',fr:'Cible streaming'},val:'−14 LUFS integrated'}]},{title:{en:'SIDECHAIN BASICS',fr:'BASES DU SIDECHAIN'},rows:[{key:{en:'Kick → Bass',fr:'Kick → Basse'},val:'4:1, Atk 0.1 ms, Rel 80–120 ms'},{key:{en:'Kick → Pads',fr:'Kick → Nappes'},val:'3:1, Atk 0.5 ms, Rel 100–150 ms'},{key:{en:'VolumeShaper depth',fr:'Profondeur VolumeShaper'},val:'40–70%'},{key:{en:'Sync to tempo',fr:'Sync au tempo'},val:'1/4 note'}]},{title:{en:'REVERB RULES',fr:'RÈGLES DE RÉVERB'},rows:[{key:{en:'Always pre-filter',fr:'Toujours pré-filtrer'},val:'HP 200–400, LP 8–10k'},{key:{en:'Club-ready decay',fr:'Decay club-ready'},val:'0.5–2.5 s'},{key:{en:'Return channel',fr:'Canal de retour'},val:{en:'Cut lows, tame 2–4 kHz',fr:'Coupe graves, dompte 2–4 kHz'}},{key:{en:'Duck with SC',fr:'Duck avec SC'},val:'Pro-C 2, 3:1'}]},{title:{en:'COMPRESSION CHEAT SHEET',fr:'AIDE-MÉMOIRE COMPRESSION'},rows:[{key:{en:'Kick (punch)',fr:'Kick (punch)'},val:'4:1, Atk 5, Rel 50'},{key:{en:'Bass (control)',fr:'Basse (contrôle)'},val:'4:1, Atk 8, Rel 60'},{key:{en:'Drums bus (glue)',fr:'Bus drums (glue)'},val:'2:1, Atk 15, Rel auto'},{key:{en:'Synth bus',fr:'Bus synthé'},val:'3:1, Atk 10, Rel 100'},{key:{en:'Master',fr:'Master'},val:'1.5:1, Atk 30, Rel auto'}]}];
const INVENTORY={'Arturia':['ARP 2600 V3','Buchla Easel V','Bus EXCITER-104','Bus FORCE','Bus PEAK','Chorus DIMENSION-D','Chorus JUN-6','CMI V','Comp DIODE-609','Comp FET-76','Comp TUBE-STA','Comp VCA-65','CS-80 V4','CZ V','Delay BRIGADE','Delay ETERNITY','Delay TAPE-201','Dist COLDFIRE','Dist OPAMP-21','Dist TUBE-CULTURE','DX7 V','Efx FRAGMENTS','Efx MOTIONS','Efx REFRACT','Emulator II V','EQ SITRAL-295','Filter Mini','Filter M12','Filter MS-20','Filter SEM','Flanger BL-20','Jun-6 V','Jup-8 V4','KORG MS-20 V','Matrix-12 V2','Mini V3','MiniFreak V','Modular V3','OP-Xa V','Phaser BI-TRON','Pigments','Pre 1973','Pre TridA','Pre V76','Prophet-5 V','Prophet-VS V','Rev INTENSITY','Rev LX-24','Rev PLATE-140','Rev SPRING-636','Rotary CLS-222','SEM V2','SQ80 V','Synclavier V','Synthi V','Tape MELLO-FI','Vocoder V'],'Baby Audio':['BA-1','BA-1 FX Strip','Crystalline','Super VHS'],'Cableguys':['ShaperBox 3'],'D16':['Antresol','Decimort 2','Devastor 2','Drumazon 2','Fazortan 2','Frontier','Godfazer','Lush 2','Nepheton 2','Nithonat 2','Phoscyon 2','PunchBox','Redoptor 2','Repeater','Sigmund 2','Spacerek','Syntorus 2','Tekturon','Toraverb 2'],'Devious Machines':['Infiltrator'],'Eventide':['Blackhole','Blackhole Immersive','CrushStation','Crystals','DeBoom','EChannel','EQ45','EQ65','H910 Dual Harmonizer','H910 Harmonizer','H949 Dual Harmonizer','H949 Harmonizer','H3000 Band Delays Mk II','H3000 Factory Mk II','Instant Flanger Mk II','Instant Phaser Mk II','MangledVerb','MicroPitch','MicroPitch Immersive','Octavox','Omnipressor','Physion Mk II','Precision Time Align','Quadravox','Rotary Mod','Sheen Machine','ShimmerVerb','SP2016 Reverb','SplitEQ','Spring','Temperance Lite','Temperance Pro','TriceraChorus','Tverb','UltraChannel','UltraReverb','UltraTap','Undulator'],'FabFilter':['FabFilter Pro-C','FabFilter Pro-Q','Micro','One','Pro-C 2','Pro-DS','Pro-G','Pro-L','Pro-L 2','Pro-MB','Pro-Q 2','Pro-Q 3','Pro-Q 4','Pro-R','Pro-R 2','Saturn','Saturn 2','Simplon','Timeless 2','Timeless 3','Twin 2','Twin 3','Volcano 2','Volcano 3'],'iZotope':['Neutron 5','Neutron 5 Clipper','Neutron 5 Compressor','Neutron 5 Density','Neutron 5 Equalizer','Neutron 5 Exciter','Neutron 5 Gate','Neutron 5 Phase','Neutron 5 Sculptor','Neutron 5 Transient Shaper','Neutron 5 Unmask','Neutron 5 Visual Mixer','Ozone 12','Ozone 12 Bass Control','Ozone 12 Clarity','Ozone 12 Dynamic EQ','Ozone 12 Dynamics','Ozone 12 Equalizer','Ozone 12 Exciter','Ozone 12 Imager','Ozone 12 Impact','Ozone 12 Low End Focus','Ozone 12 Master Rebalance','Ozone 12 Match EQ','Ozone 12 Maximizer','Ozone 12 Spectral Shaper','Ozone 12 Stabilizer','Ozone 12 Stem EQ','Ozone 12 Unlimiter','Ozone 12 Vintage Compressor','Ozone 12 Vintage EQ','Ozone 12 Vintage Limiter','Ozone 12 Vintage Tape'],'KORG':['Polysix'],'Spectrasonics':['Trilian'],'u-he':['Diva'],'Valhalla DSP':['ValhallaDelay','ValhallaFreqEcho','ValhallaPlate','ValhallaRoom','ValhallaShimmer','ValhallaSpaceModulator','ValhallaSupermassive','ValhallaUberMod','ValhallaVintageVerb'],'Xfer Records':['Serum 2','Serum 2 FX']};
const PRIORITY_PLUGINS=new Set(['Diva','Serum 2','Serum 2 FX','Pigments','Mini V3','MiniFreak V','BA-1','BA-1 FX Strip','Super VHS','Crystalline','Pro-Q 3','Pro-Q 4','Pro-C 2','Pro-L 2','Pro-MB','Saturn 2','Pro-R 2','Pro-DS','Timeless 3','Devastor 2','Decimort 2','Drumazon 2','PunchBox','Toraverb 2','ShaperBox 3','Infiltrator','Trilian','ValhallaVintageVerb','ValhallaRoom','ValhallaPlate','ValhallaDelay','ValhallaShimmer','ValhallaSupermassive','Neutron 5','Ozone 12','Ozone 12 Maximizer','Ozone 12 Imager','Ozone 12 Dynamic EQ','Ozone 12 Exciter','SP2016 Reverb','MangledVerb','Blackhole','MicroPitch','Comp FET-76','Comp VCA-65','Tape MELLO-FI','Chorus DIMENSION-D','Chorus JUN-6','Phaser BI-TRON','Efx FRAGMENTS','Efx MOTIONS','Efx REFRACT','Dist COLDFIRE','CS-80 V4','Jup-8 V4','DX7 V','Prophet-5 V']);

/* ============================================================
   STATE
   ============================================================ */
let lang = localStorage.getItem('kapman-lang') || 'en';
let theme = localStorage.getItem('kapman-theme') || 'dark';
let finishState = JSON.parse(localStorage.getItem('kapman-finish') || '{}');
let activeVendorFilter = null;
let currentView = 'hero'; // 'hero' | 'design' | 'mix' | 'tools'

/* ============================================================
   HELPERS
   ============================================================ */
const $ = s => document.getElementById(s);
const T = (obj) => (typeof obj === 'string') ? obj : (obj[lang] || obj.en || '');

/* ============================================================
   GATE
   ============================================================ */
function initGate() {
  const gate = $('gate'), input = $('gate-input'), error = $('gate-error'), app = $('app');
  if (localStorage.getItem('kapman-gate') === 'ok') { gate.classList.add('dismissed'); app.classList.remove('hidden'); return; }
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      if (input.value === GATE_PASS) { localStorage.setItem('kapman-gate', 'ok'); gate.classList.add('dismissed'); app.classList.remove('hidden'); }
      else { error.classList.add('visible'); input.value = ''; setTimeout(() => error.classList.remove('visible'), 2000); }
    }
  });
  setTimeout(() => input.focus(), 300);
}

/* ============================================================
   THEME & LANG
   ============================================================ */
function applyTheme() { document.documentElement.setAttribute('data-theme', theme); }
function toggleTheme() { theme = theme === 'dark' ? 'light' : 'dark'; localStorage.setItem('kapman-theme', theme); applyTheme(); }
function applyLang() {
  const dict = I18N[lang] || I18N.en;
  document.querySelectorAll('[data-i18n]').forEach(el => { const k = el.getAttribute('data-i18n'); if (dict[k]) el.textContent = dict[k]; });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { const k = el.getAttribute('data-i18n-placeholder'); if (dict[k]) el.placeholder = dict[k]; });
  $('btn-lang').textContent = lang === 'en' ? 'FR' : 'EN';
  document.documentElement.lang = lang;
}
function toggleLang() { lang = lang === 'en' ? 'fr' : 'en'; localStorage.setItem('kapman-lang', lang); applyLang(); renderAll(); }

/* ============================================================
   NAVIGATION — Hero / Mode system
   ============================================================ */
function showView(view, subTab) {
  currentView = view;
  const hero = $('hero'), tabs = $('mode-tabs');
  const panels = document.querySelectorAll('.mode-panel');
  panels.forEach(p => p.classList.remove('active'));

  if (view === 'hero') {
    hero.classList.remove('hidden');
    tabs.classList.add('hidden');
    return;
  }

  hero.classList.add('hidden');
  tabs.classList.remove('hidden');

  // Activate mode tab
  document.querySelectorAll('.mode-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.mode === view);
  });

  // Activate mode panel
  const panel = $('mode-' + view);
  if (panel) {
    panel.classList.add('active');
    // If subTab specified, click that sub-btn
    if (subTab) {
      const btn = panel.querySelector(`.sub-btn[data-sub="${subTab}"]`);
      if (btn) btn.click();
    }
  }
}

function initNav() {
  // Hero cards
  document.querySelectorAll('.hero-card').forEach(card => {
    card.addEventListener('click', () => showView(card.dataset.goto));
  });
  // Hero shortcuts
  document.querySelectorAll('.hero-shortcut').forEach(btn => {
    btn.addEventListener('click', () => showView(btn.dataset.goto, btn.dataset.sub));
  });
  // Mode tabs
  document.querySelectorAll('.mode-tab').forEach(tab => {
    tab.addEventListener('click', () => showView(tab.dataset.mode));
  });
  // Home button
  $('btn-home').addEventListener('click', () => showView('hero'));

  // Sub nav (delegate)
  document.addEventListener('click', e => {
    const subBtn = e.target.closest('.sub-btn');
    if (!subBtn) return;
    const nav = subBtn.closest('.sub-nav');
    nav.querySelectorAll('.sub-btn').forEach(b => b.classList.remove('active'));
    subBtn.classList.add('active');
    const panel = subBtn.closest('.mode-panel');
    panel.querySelectorAll('.sub-panel').forEach(p => p.classList.remove('active'));
    const target = panel.querySelector('#sub-' + subBtn.dataset.sub);
    if (target) target.classList.add('active');
  });
}

/* ============================================================
   UNIFIED EXPANDABLE HELPER
   ============================================================ */
function makeExpandable(container, items, renderHeader, renderBody) {
  container.innerHTML = '';
  items.forEach((item, i) => {
    const el = document.createElement('div');
    el.className = 'expandable';
    el.innerHTML = `<div class="exp-header"><span class="exp-chevron">▸</span>${renderHeader(item, i)}</div><div class="exp-body">${renderBody(item, i)}</div>`;
    el.addEventListener('click', e => {
      if (e.target.closest('.exp-body')) return; // don't collapse when clicking body content
      el.classList.toggle('expanded');
    });
    container.appendChild(el);
  });
}

/* ============================================================
   RENDER — SYNTHS
   ============================================================ */
function renderSynths() {
  try {
    const tiers = { primary: 'grid-primary', classic: 'grid-classic', digital: 'grid-digital', experimental: 'grid-experimental', drums: 'grid-drums' };
    for (const [key, gridId] of Object.entries(tiers)) {
      const grid = $(gridId); if (!grid) continue; grid.innerHTML = '';
      (SYNTHS[key] || []).forEach(s => {
        const chip = document.createElement('div');
        chip.className = 'synth-chip' + (s.priority ? ' priority' : '');
        chip.innerHTML = `${s.name}<span class="chip-vendor">${s.vendor}</span>`;
        grid.appendChild(chip);
      });
    }
  } catch (e) { console.error('renderSynths:', e); }
}

/* ============================================================
   RENDER — ROUTES (unified expandable)
   ============================================================ */
function renderRoutes() {
  try {
    const c = $('routes-list'); if (!c) return;
    makeExpandable(c, ROUTES,
      (r) => `<div style="flex:1"><div class="exp-title">${T(r.name)}</div></div><span class="exp-meta">${T(r.role)}</span>`,
      (r) => {
        const chain = r.chain.map(s => `<span class="chain-step">${s}</span>`).join('<span class="chain-arrow">→</span>');
        return `<div class="route-chain">${chain}</div><div class="route-notes">${T(r.notes)}</div>`;
      }
    );
  } catch (e) { console.error('renderRoutes:', e); }
}

/* ============================================================
   RENDER — RECIPES (unified expandable)
   ============================================================ */
function renderRecipes() {
  try {
    const c = $('recipes-list'); if (!c) return;
    makeExpandable(c, RECIPES,
      (r) => {
        const tags = r.tags.map(t => `<span class="recipe-tag">${t}</span>`).join('');
        return `<div style="flex:1"><div class="exp-title">${T(r.name)}</div></div><div class="recipe-tags">${tags}</div>`;
      },
      (r) => {
        const steps = T(r.steps);
        return steps.map((s, i) => `<div class="recipe-step"><span class="step-num">${i + 1}</span><div class="step-text">${s}</div></div>`).join('');
      }
    );
  } catch (e) { console.error('renderRecipes:', e); }
}

/* ============================================================
   RENDER — FX PALETTE
   ============================================================ */
function renderFX() {
  try {
    const c = $('fx-categories'); if (!c) return; c.innerHTML = '';
    FX_PALETTE.forEach(cat => {
      const card = document.createElement('div'); card.className = 'fx-category';
      card.innerHTML = `<div class="fx-cat-name">${T(cat.category)}</div><div class="fx-list">${cat.items.map(it => `<div class="fx-item"><span class="fx-item-name">${it.name}</span><span class="fx-item-vendor">${it.vendor}</span></div>`).join('')}</div>`;
      c.appendChild(card);
    });
  } catch (e) { console.error('renderFX:', e); }
}

/* ============================================================
   RENDER — MIX CHECK (unified expandable)
   ============================================================ */
function renderMixCheck() {
  try {
    const c = $('mixcheck-zones'); if (!c) return;
    makeExpandable(c, MIXCHECK_ZONES,
      (z) => `<span class="mc-zone-freq">${z.freq}</span><div class="exp-title">${T(z.name)}</div>`,
      (z) => `<div class="mc-listen-for">${T(z.listen)}</div><div class="mc-tools">${z.tools.map(t => `<span class="mc-tool">${t}</span>`).join('')}</div>`
    );
  } catch (e) { console.error('renderMixCheck:', e); }
}

/* ============================================================
   RENDER — CHAINS (unified expandable)
   ============================================================ */
function renderChains() {
  try {
    const c = $('chains-list'); if (!c) return;
    makeExpandable(c, MIX_CHAINS,
      (ch) => `<div style="flex:1"><div class="exp-title">${T(ch.name)}</div></div><span class="exp-meta">${T(ch.purpose)}</span>`,
      (ch) => ch.slots.map((s, i) => `<div class="chain-slot"><span class="slot-num">${i + 1}</span><span class="slot-plugin">${s.plugin}</span><span class="slot-setting">${T(s.setting)}</span></div>`).join('')
    );
  } catch (e) { console.error('renderChains:', e); }
}

/* ============================================================
   RENDER — FINISH (with reset)
   ============================================================ */
function renderFinish() {
  try {
    const c = $('finish-groups'); if (!c) return; c.innerHTML = '';
    let total = 0, checked = 0;
    FINISH_GROUPS.forEach((g, gi) => {
      const group = document.createElement('div'); group.className = 'finish-group';
      let items = '';
      g.items.forEach((item, ii) => {
        const key = `${gi}-${ii}`, ch = finishState[key] || false;
        total++; if (ch) checked++;
        items += `<div class="finish-item${ch ? ' checked' : ''}" data-key="${key}"><div class="finish-check">${ch ? '✓' : ''}</div><span class="finish-label">${T(item)}</span></div>`;
      });
      group.innerHTML = `<div class="finish-group-name">${T(g.name)}</div>${items}`;
      c.appendChild(group);
    });
    c.querySelectorAll('.finish-item').forEach(item => {
      item.addEventListener('click', () => { const k = item.dataset.key; finishState[k] = !finishState[k]; localStorage.setItem('kapman-finish', JSON.stringify(finishState)); renderFinish(); });
    });
    const pct = total > 0 ? Math.round((checked / total) * 100) : 0;
    const bar = $('finish-bar'), label = $('finish-pct');
    if (bar) bar.style.width = pct + '%';
    if (label) label.textContent = pct + '%';
  } catch (e) { console.error('renderFinish:', e); }
}

/* ============================================================
   RENDER — FIX-IT (unified expandable)
   ============================================================ */
function renderFixIt() {
  try {
    const c = $('fixit-list'); if (!c) return;
    makeExpandable(c, FIXIT_CARDS,
      (f) => `<div class="exp-title fixit-problem">${T(f.problem)}</div>`,
      (f) => `<div class="fixit-diagnosis">${T(f.diagnosis)}</div><div class="fixit-solution">${T(f.solution)}</div>`
    );
  } catch (e) { console.error('renderFixIt:', e); }
}

/* ============================================================
   RENDER — INVENTORY
   ============================================================ */
function renderInventory() {
  try {
    const c = $('inventory-grid'), countEl = $('inv-count'), filtersEl = $('vendor-filters');
    if (!c) return;
    if (filtersEl) {
      filtersEl.innerHTML = '';
      const allBtn = document.createElement('span');
      allBtn.className = 'vendor-filter' + (!activeVendorFilter ? ' active' : '');
      allBtn.textContent = lang === 'fr' ? 'Tous' : 'All';
      allBtn.addEventListener('click', () => { activeVendorFilter = null; renderInventory(); });
      filtersEl.appendChild(allBtn);
      Object.keys(INVENTORY).forEach(v => {
        const btn = document.createElement('span');
        btn.className = 'vendor-filter' + (activeVendorFilter === v ? ' active' : '');
        btn.textContent = v;
        btn.addEventListener('click', () => { activeVendorFilter = activeVendorFilter === v ? null : v; renderInventory(); });
        filtersEl.appendChild(btn);
      });
    }
    const sv = ($('inventory-search')?.value || '').toLowerCase();
    c.innerHTML = ''; let count = 0;
    const vendors = activeVendorFilter ? { [activeVendorFilter]: INVENTORY[activeVendorFilter] } : INVENTORY;
    for (const [vendor, plugins] of Object.entries(vendors)) {
      const filtered = plugins.filter(p => !sv || p.toLowerCase().includes(sv) || vendor.toLowerCase().includes(sv));
      if (!filtered.length) continue;
      const label = document.createElement('div'); label.className = 'inv-vendor-name'; label.textContent = vendor.toUpperCase();
      c.appendChild(label);
      filtered.forEach(p => { const el = document.createElement('div'); el.className = 'inv-plugin' + (PRIORITY_PLUGINS.has(p) ? ' priority-plugin' : ''); el.textContent = p; c.appendChild(el); count++; });
    }
    if (countEl) countEl.textContent = count;
  } catch (e) { console.error('renderInventory:', e); }
}

/* ============================================================
   RENDER — REFERENCES
   ============================================================ */
function renderRefs() {
  try {
    const c = $('refs-content'); if (!c) return; c.innerHTML = '';
    REFERENCES.forEach(ref => {
      const card = document.createElement('div'); card.className = 'ref-card';
      card.innerHTML = `<div class="ref-card-title">${T(ref.title)}</div>${ref.rows.map(r => `<div class="ref-row"><span class="ref-key">${T(r.key)}</span><span class="ref-val">${T(r.val)}</span></div>`).join('')}`;
      c.appendChild(card);
    });
  } catch (e) { console.error('renderRefs:', e); }
}

/* ============================================================
   RENDER ALL
   ============================================================ */
function renderAll() {
  [renderSynths, renderRoutes, renderRecipes, renderFX, renderMixCheck, renderChains, renderFinish, renderFixIt, renderInventory, renderRefs].forEach(fn => { try { fn(); } catch(e) { console.error(e); } });
}

/* ============================================================
   INIT
   ============================================================ */
function init() {
  applyTheme(); applyLang(); initGate(); initNav(); renderAll();
  $('btn-lang').addEventListener('click', toggleLang);
  $('btn-theme').addEventListener('click', toggleTheme);
  const si = $('inventory-search'); if (si) si.addEventListener('input', () => renderInventory());
  // Finish reset
  const rb = $('finish-reset-btn');
  if (rb) rb.addEventListener('click', e => { e.stopPropagation(); finishState = {}; localStorage.setItem('kapman-finish', '{}'); renderFinish(); });
}

document.addEventListener('DOMContentLoaded', init);
