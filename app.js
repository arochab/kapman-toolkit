/* ============================================================
   KAPMAN STUDIO — app.js v4.1
   Hardened: delegation, scoped pendingOpen, fast DFT, state fixes
   ============================================================ */
const GATE_PASS = 'EscapeMusic2026!';

const TASKS = {
  design: [
    { label: { en: 'Build a bass', fr: 'Construire une basse' }, hint: { en: 'Mono, warm, club-ready', fr: 'Mono, chaude, club-ready' }, goto: 'routes', open: 0 },
    { label: { en: 'Shape drums', fr: 'Sculpter les drums' }, hint: { en: 'Kick, clap, hats, percs', fr: 'Kick, clap, hats, percs' }, goto: 'recipes', open: 0 },
    { label: { en: 'Design a pad', fr: 'Designer une nappe' }, hint: { en: 'Textures & atmosphere', fr: 'Textures & atmosphère' }, goto: 'routes', open: 2 },
    { label: { en: 'Add movement', fr: 'Ajouter du mouvement' }, hint: { en: 'Modulation, FX, glitch', fr: 'Modulation, FX, glitch' }, goto: 'fx-palette' },
    { label: { en: 'Make a lead', fr: 'Créer un lead' }, hint: { en: 'Melodic elements', fr: 'Éléments mélodiques' }, goto: 'routes', open: 6 },
    { label: { en: 'Build tension', fr: 'Créer de la tension' }, hint: { en: 'Risers, drones, FX', fr: 'Risers, drones, FX' }, goto: 'routes', open: 8 },
  ],
  mix: [
    { label: { en: 'Check my mix', fr: 'Checker mon mix' }, hint: { en: 'Upload & analyze audio', fr: 'Upload & analyse audio' }, goto: 'audiocheck' },
    { label: { en: 'Clean mud', fr: 'Nettoyer la boue' }, hint: { en: 'Low-mid buildup', fr: 'Accumulation bas-médiums' }, goto: 'fixit', open: 0 },
    { label: { en: 'Hit harder', fr: 'Frapper plus fort' }, hint: { en: 'Punch & impact', fr: 'Punch & impact' }, goto: 'fixit', open: 4 },
    { label: { en: 'Widen safely', fr: 'Élargir sans risque' }, hint: { en: 'Stereo + mono check', fr: 'Stéréo + check mono' }, goto: 'fixit', open: 3 },
    { label: { en: 'Polish master', fr: 'Polir le master' }, hint: { en: 'Limiter, EQ, imaging', fr: 'Limiteur, EQ, imaging' }, goto: 'chains', open: 5 },
    { label: { en: 'Finish it', fr: 'Finir le morceau' }, hint: { en: 'Pre-release checklist', fr: 'Checklist pré-sortie' }, goto: 'finish' },
  ]
};

const I18N = {
  en: {
    'gate-sub':'studio','gate-placeholder':'password','gate-error':'wrong password',
    'hero-for':'For Ableton Live 12 producers',
    'hero-tagline':'Finish tracks faster.',
    'hero-sub':'Sound design routes, mixdown playbooks, and a real audio check — built around your plugins.',
    'hs-design':'SOUND DESIGN','hs-mix':'MIXDOWN',
    'hero-explore-design':'All sound design →','hero-explore-mix':'All mixdown →',
    'hu-plugins':'Plugin Inventory','hu-refs':'Quick References',
    'btn-plugins':'⚙ Plugins','mode-design':'DESIGN','mode-mix':'MIX',
    'design-synths':'Synths','design-routes':'Routes','design-recipes':'Recipes','design-fx':'FX Palette',
    'synths-title':'Sound Sources','synths-desc':'Your synthesis engines — pick a starting point',
    'tier-primary':'PRIMARY','tier-classic':'CLASSIC ANALOG','tier-digital':'DIGITAL / FM / WAVETABLE','tier-experimental':'EXPERIMENTAL / MODULAR','tier-drums':'DRUM MACHINES',
    'routes-title':'Sound Design Routes','routes-desc':'Signal paths for specific sonic goals',
    'recipes-title':'Recipes','recipes-desc':'Step-by-step sound design procedures',
    'fx-title':'FX Palette','fx-desc':'Creative effects — texture, movement, space, destruction',
    'mix-audiocheck':'Audio Check','mix-check':'Zones','mix-chains':'Chains','mix-fixit':'Fix-It','mix-finish':'Finish',
    'ac-title':'Audio Check','ac-desc':'Drop a bounce — get instant mix diagnostics',
    'ac-drop':'Drop audio file or click to upload','ac-hint':'WAV, MP3, FLAC — browser-side only, nothing uploaded','ac-clear':'✕ Clear',
    'mixcheck-title':'Mix Check Zones','mixcheck-desc':'Systematic listening pass — diagnose before you touch anything',
    'chains-title':'Mix Chains','chains-desc':'Channel strip templates — EQ, compression, dynamics, stereo',
    'finish-title':'Finish Checklist','finish-desc':'Pre-master verification — nothing left unchecked',
    'fixit-title':'Fix-It Playbook','fixit-desc':'Problem → diagnosis → solution with your plugins',
    'tools-inventory':'Inventory','tools-refs':'References',
    'inventory-search-placeholder':'search plugins...','inventory-plugins':'plugins',
  },
  fr: {
    'gate-sub':'studio','gate-placeholder':'mot de passe','gate-error':'mauvais mot de passe',
    'hero-for':'Pour les producteurs Ableton Live 12',
    'hero-tagline':'Finis tes morceaux plus vite.',
    'hero-sub':'Routes de sound design, playbooks de mixdown et un vrai audio check — construit autour de tes plugins.',
    'hs-design':'SOUND DESIGN','hs-mix':'MIXDOWN',
    'hero-explore-design':'Tout le sound design →','hero-explore-mix':'Tout le mixdown →',
    'hu-plugins':'Inventaire plugins','hu-refs':'Références rapides',
    'btn-plugins':'⚙ Plugins','mode-design':'DESIGN','mode-mix':'MIX',
    'design-synths':'Synthés','design-routes':'Routes','design-recipes':'Recettes','design-fx':'Palette FX',
    'synths-title':'Sources sonores','synths-desc':'Tes moteurs de synthèse — choisis un point de départ',
    'tier-primary':'PRIORITAIRES','tier-classic':'ANALOGIQUE CLASSIQUE','tier-digital':'DIGITAL / FM / WAVETABLE','tier-experimental':'EXPÉRIMENTAL / MODULAIRE','tier-drums':'BOÎTES À RYTHMES',
    'routes-title':'Routes de sound design','routes-desc':'Chemins de signal pour des objectifs sonores précis',
    'recipes-title':'Recettes','recipes-desc':'Procédures de sound design étape par étape',
    'fx-title':'Palette FX','fx-desc':'Effets créatifs — texture, mouvement, espace, destruction',
    'mix-audiocheck':'Audio Check','mix-check':'Zones','mix-chains':'Chaînes','mix-fixit':'Fix-It','mix-finish':'Finition',
    'ac-title':'Audio Check','ac-desc':'Dépose un bounce — diagnostic mix instantané',
    'ac-drop':'Dépose un fichier audio ou clique pour uploader','ac-hint':'WAV, MP3, FLAC — analyse côté navigateur, rien n\'est uploadé','ac-clear':'✕ Effacer',
    'mixcheck-title':'Zones du Mix Check','mixcheck-desc':'Écoute systématique — diagnostique avant de toucher quoi que ce soit',
    'chains-title':'Chaînes de mix','chains-desc':'Templates de channel strip — EQ, compression, dynamique, stéréo',
    'finish-title':'Checklist de finition','finish-desc':'Vérification pré-master — rien ne passe entre les mailles',
    'fixit-title':'Playbook Fix-It','fixit-desc':'Problème → diagnostic → solution avec tes plugins',
    'tools-inventory':'Inventaire','tools-refs':'Références',
    'inventory-search-placeholder':'chercher un plugin...','inventory-plugins':'plugins',
  }
};

/* ============================================================
   ALL DATA — identical to v4
   ============================================================ */
const SYNTHS={primary:[{name:'Diva',vendor:'u-he',priority:true},{name:'Serum 2',vendor:'Xfer',priority:true},{name:'Pigments',vendor:'Arturia',priority:true},{name:'Mini V3',vendor:'Arturia',priority:true},{name:'BA-1',vendor:'Baby Audio',priority:true},{name:'MiniFreak V',vendor:'Arturia',priority:true},{name:'Trilian',vendor:'Spectrasonics',priority:true}],classic:[{name:'CS-80 V4',vendor:'Arturia'},{name:'Jup-8 V4',vendor:'Arturia'},{name:'Prophet-5 V',vendor:'Arturia'},{name:'SEM V2',vendor:'Arturia'},{name:'Jun-6 V',vendor:'Arturia'},{name:'OP-Xa V',vendor:'Arturia'},{name:'Matrix-12 V2',vendor:'Arturia'},{name:'ARP 2600 V3',vendor:'Arturia'},{name:'Polysix',vendor:'KORG'},{name:'KORG MS-20 V',vendor:'Arturia'}],digital:[{name:'DX7 V',vendor:'Arturia'},{name:'CZ V',vendor:'Arturia'},{name:'SQ80 V',vendor:'Arturia'},{name:'Prophet-VS V',vendor:'Arturia'},{name:'Synclavier V',vendor:'Arturia'},{name:'CMI V',vendor:'Arturia'},{name:'Emulator II V',vendor:'Arturia'}],experimental:[{name:'Buchla Easel V',vendor:'Arturia'},{name:'Synthi V',vendor:'Arturia'},{name:'Modular V3',vendor:'Arturia'},{name:'Vocoder V',vendor:'Arturia'}],drums:[{name:'Drumazon 2',vendor:'D16'},{name:'Nepheton 2',vendor:'D16'},{name:'Nithonat 2',vendor:'D16'},{name:'PunchBox',vendor:'D16'},{name:'Phoscyon 2',vendor:'D16'}]};
const ROUTES=[{name:{en:'Deep Sub Bass',fr:'Sub bass profonde'},role:{en:'Foundation — below 80 Hz',fr:'Fondation — sous 80 Hz'},chain:['Diva / Serum 2','Saturn 2','Pro-Q 3','Pro-C 2','Pro-L 2'],notes:{en:'<strong>Diva</strong> or <strong>Serum 2</strong> — single saw/sine oscillator, no unison. <strong>Saturn 2</strong> on Warm Tube, Drive 10–15%, Mix 40%. <strong>Pro-Q 3</strong> high-pass at 25 Hz 24 dB/oct, low-pass at 120 Hz gentle. <strong>Pro-C 2</strong> in Clean mode, Ratio 3:1, Attack 10 ms, Release 80 ms. <strong>Pro-L 2</strong> as safety limiter at −1 dB.',fr:'<strong>Diva</strong> ou <strong>Serum 2</strong> — oscillateur simple saw/sine, pas d\'unisson. <strong>Saturn 2</strong> sur Warm Tube, Drive 10–15%, Mix 40%. <strong>Pro-Q 3</strong> passe-haut à 25 Hz 24 dB/oct, passe-bas à 120 Hz doux. <strong>Pro-C 2</strong> en mode Clean, Ratio 3:1, Attack 10 ms, Release 80 ms. <strong>Pro-L 2</strong> en limiteur de sécurité à −1 dB.'}},{name:{en:'Acid Line',fr:'Ligne acid'},role:{en:'Squelchy mono lead / bass',fr:'Lead / basse mono squelchy'},chain:['Phoscyon 2 / Diva','Devastor 2','Decimort 2','Pro-Q 3','ValhallaDelay'],notes:{en:'<strong>Phoscyon 2</strong> for authentic 303. Or <strong>Diva</strong> single osc + ladder filter, Reso 60–80%. <strong>Devastor 2</strong> light asymmetric saturation. <strong>Decimort 2</strong> at 22 kHz, subtle bit reduction for grit. <strong>Pro-Q 3</strong> notch at 300 Hz if muddy. <strong>ValhallaDelay</strong> dotted 1/8, Mix 15%, feedback 30%.',fr:'<strong>Phoscyon 2</strong> pour un 303 authentique. Ou <strong>Diva</strong> osc simple + filtre ladder, Reso 60–80%. <strong>Devastor 2</strong> saturation asymétrique légère. <strong>Decimort 2</strong> à 22 kHz, réduction de bit subtile pour le grain. <strong>Pro-Q 3</strong> notch à 300 Hz si boueux. <strong>ValhallaDelay</strong> pointé 1/8, Mix 15%, feedback 30%.'}},{name:{en:'Lo-fi Pad',fr:'Nappe lo-fi'},role:{en:'Textured atmosphere',fr:'Atmosphère texturée'},chain:['CS-80 V4 / Jup-8 V4','Tape MELLO-FI','Super VHS','Chorus DIMENSION-D','ValhallaVintageVerb'],notes:{en:'<strong>CS-80 V4</strong> or <strong>Jup-8 V4</strong> — warm detuned pad preset. <strong>Tape MELLO-FI</strong> for tape wobble and hiss. <strong>Super VHS</strong> with Age at 50–60%. <strong>Chorus DIMENSION-D</strong> mode II or III. <strong>ValhallaVintageVerb</strong> 1980s mode, Decay 3–5 s, Mix 35%.',fr:'<strong>CS-80 V4</strong> ou <strong>Jup-8 V4</strong> — preset nappe chaude désaccordée. <strong>Tape MELLO-FI</strong> pour le wobble et le souffle de bande. <strong>Super VHS</strong> avec Age à 50–60%. <strong>Chorus DIMENSION-D</strong> mode II ou III. <strong>ValhallaVintageVerb</strong> mode 1980s, Decay 3–5 s, Mix 35%.'}},{name:{en:'Metallic Stab',fr:'Stab métallique'},role:{en:'Short, bright percussive hit',fr:'Hit percussif court et brillant'},chain:['DX7 V / Serum 2','Dist COLDFIRE','ShaperBox 3','Crystalline','Pro-Q 3'],notes:{en:'<strong>DX7 V</strong> metallic bell preset or <strong>Serum 2</strong> FM mode. <strong>Dist COLDFIRE</strong> for harmonic density, Drive 20%. <strong>ShaperBox 3</strong> VolumeShaper for tight amplitude envelope. <strong>Crystalline</strong> short plate, 0.5 s, Mix 20%. <strong>Pro-Q 3</strong> cut below 200 Hz, gentle 8 kHz shelf boost.',fr:'<strong>DX7 V</strong> preset cloche métallique ou <strong>Serum 2</strong> en mode FM. <strong>Dist COLDFIRE</strong> pour la densité harmonique, Drive 20%. <strong>ShaperBox 3</strong> VolumeShaper pour une enveloppe d\'amplitude serrée. <strong>Crystalline</strong> plate courte, 0.5 s, Mix 20%. <strong>Pro-Q 3</strong> coupe sous 200 Hz, shelf doux à 8 kHz.'}},{name:{en:'Ghostly Vocal Texture',fr:'Texture vocale fantôme'},role:{en:'Ethereal processed vocal layer',fr:'Couche vocale traitée éthérée'},chain:['Vocoder V / Sample','Efx REFRACT','Phaser BI-TRON','ValhallaShimmer','Pro-Q 3'],notes:{en:'Start with <strong>Vocoder V</strong> or a vocal sample via Moises AI. <strong>Efx REFRACT</strong> for granular scatter. <strong>Phaser BI-TRON</strong> slow rate, moderate depth. <strong>ValhallaShimmer</strong> pitch +12, Decay 4 s, Mix 40%. <strong>Pro-Q 3</strong> high-pass at 300 Hz to keep it floating above the mix.',fr:'Commence avec <strong>Vocoder V</strong> ou un sample vocal via Moises AI. <strong>Efx REFRACT</strong> pour un scatter granulaire. <strong>Phaser BI-TRON</strong> rate lent, profondeur modérée. <strong>ValhallaShimmer</strong> pitch +12, Decay 4 s, Mix 40%. <strong>Pro-Q 3</strong> passe-haut à 300 Hz pour que ça flotte au-dessus du mix.'}},{name:{en:'Distorted Drum Bus',fr:'Bus drums distordu'},role:{en:'Parallel crush for drum group',fr:'Crush parallèle pour groupe drums'},chain:['Devastor 2','Decimort 2','Pro-C 2','Pro-Q 3'],notes:{en:'On a parallel send from your drum bus. <strong>Devastor 2</strong> asymmetric, Drive 40–60%. <strong>Decimort 2</strong> bit depth 10–12, sample rate 18 kHz. <strong>Pro-C 2</strong> Opto mode, heavy compression 8:1, slow attack. <strong>Pro-Q 3</strong> high-pass at 100 Hz, tame any harsh peaks around 3 kHz. Blend to taste (−10 to −6 dB below dry bus).',fr:'Sur un envoi parallèle de ton bus drums. <strong>Devastor 2</strong> asymétrique, Drive 40–60%. <strong>Decimort 2</strong> profondeur 10–12 bits, sample rate 18 kHz. <strong>Pro-C 2</strong> mode Opto, compression lourde 8:1, attaque lente. <strong>Pro-Q 3</strong> passe-haut à 100 Hz, dompte les pics durs vers 3 kHz. Blend au goût (−10 à −6 dB sous le bus sec).'}},{name:{en:'Lush Stereo Lead',fr:'Lead stéréo lush'},role:{en:'Wide melodic element',fr:'Élément mélodique large'},chain:['Pigments / MiniFreak V','Chorus JUN-6','Delay ETERNITY','ValhallaRoom','Pro-Q 3'],notes:{en:'<strong>Pigments</strong> or <strong>MiniFreak V</strong> — 2 osc with slight detune. <strong>Chorus JUN-6</strong> for classic Juno width. <strong>Delay ETERNITY</strong> ping-pong, 1/8, Mix 20%. <strong>ValhallaRoom</strong> medium room, Decay 1.5 s, Mix 20%. <strong>Pro-Q 3</strong> mid-side mode — cut low end in sides below 200 Hz.',fr:'<strong>Pigments</strong> ou <strong>MiniFreak V</strong> — 2 osc avec léger désaccord. <strong>Chorus JUN-6</strong> pour la largeur Juno classique. <strong>Delay ETERNITY</strong> ping-pong, 1/8, Mix 20%. <strong>ValhallaRoom</strong> room moyenne, Decay 1.5 s, Mix 20%. <strong>Pro-Q 3</strong> mode mid-side — coupe le bas dans les sides sous 200 Hz.'}},{name:{en:'Broken Beat Perc',fr:'Perc beat cassé'},role:{en:'Textured rhythmic layer',fr:'Couche rythmique texturée'},chain:['Sample / PunchBox','Infiltrator','ShaperBox 3','Toraverb 2'],notes:{en:'Start with a percussion sample or <strong>PunchBox</strong> layer. <strong>Infiltrator</strong> — pick a multi-fx preset, reduce Mix to 30–50%. <strong>ShaperBox 3</strong> TimeShaper for rhythmic glitch. <strong>Toraverb 2</strong> short diffuse verb, Decay 0.8 s, Mix 15%.',fr:'Commence avec un sample percussion ou un layer <strong>PunchBox</strong>. <strong>Infiltrator</strong> — choisis un preset multi-fx, réduis Mix à 30–50%. <strong>ShaperBox 3</strong> TimeShaper pour du glitch rythmique. <strong>Toraverb 2</strong> reverb diffuse courte, Decay 0.8 s, Mix 15%.'}},{name:{en:'Dark Ambient Drone',fr:'Drone ambiant dark'},role:{en:'Background tension layer',fr:'Couche de tension en arrière-plan'},chain:['Synthi V / Buchla Easel V','Efx FRAGMENTS','ValhallaSupermassive','Tape MELLO-FI'],notes:{en:'<strong>Synthi V</strong> or <strong>Buchla Easel V</strong> — generative patch, slow LFOs on filter and pitch. <strong>Efx FRAGMENTS</strong> for granular processing. <strong>ValhallaSupermassive</strong> Gemini mode, long feedback. <strong>Tape MELLO-FI</strong> for warmth and drift.',fr:'<strong>Synthi V</strong> ou <strong>Buchla Easel V</strong> — patch génératif, LFOs lents sur filtre et pitch. <strong>Efx FRAGMENTS</strong> pour traitement granulaire. <strong>ValhallaSupermassive</strong> mode Gemini, feedback long. <strong>Tape MELLO-FI</strong> pour chaleur et dérive.'}},{name:{en:'EBM Bass Sequence',fr:'Séquence basse EBM'},role:{en:'Aggressive pulsing bassline',fr:'Ligne de basse agressive et pulsée'},chain:['Mini V3 / Diva','Comp FET-76','Devastor 2','Pro-Q 3','Delay TAPE-201'],notes:{en:'<strong>Mini V3</strong> or <strong>Diva</strong> — mono, single saw, filter mod from envelope. Fast staccato sequence. <strong>Comp FET-76</strong> all-buttons mode for aggressive limiting. <strong>Devastor 2</strong> symmetric, Drive 25%. <strong>Pro-Q 3</strong> boost 80 Hz +2 dB, cut 250 Hz −3 dB. <strong>Delay TAPE-201</strong> very short slapback, Mix 10%.',fr:'<strong>Mini V3</strong> ou <strong>Diva</strong> — mono, saw simple, modulation filtre par enveloppe. Séquence staccato rapide. <strong>Comp FET-76</strong> mode all-buttons pour une limitation agressive. <strong>Devastor 2</strong> symétrique, Drive 25%. <strong>Pro-Q 3</strong> boost 80 Hz +2 dB, cut 250 Hz −3 dB. <strong>Delay TAPE-201</strong> slapback très court, Mix 10%.'}},{name:{en:'Pitched Noise Riser',fr:'Riser noise pitched'},role:{en:'Transition / build element',fr:'Élément de transition / montée'},chain:['Serum 2','Filter SEM','Efx MOTIONS','ValhallaDelay'],notes:{en:'<strong>Serum 2</strong> noise oscillator + slow pitch bend automation. <strong>Filter SEM</strong> band-pass sweep up over 4–8 bars. <strong>Efx MOTIONS</strong> for rhythmic modulation. <strong>ValhallaDelay</strong> feedback rising to 60–80% at the peak.',fr:'<strong>Serum 2</strong> oscillateur noise + automation de pitch bend lente. <strong>Filter SEM</strong> sweep band-pass montant sur 4–8 mesures. <strong>Efx MOTIONS</strong> pour modulation rythmique. <strong>ValhallaDelay</strong> feedback montant à 60–80% au pic.'}},{name:{en:'Mangled Reverb Pad',fr:'Nappe reverb mangled'},role:{en:'Abstract spatial texture',fr:'Texture spatiale abstraite'},chain:['Any synth source','MangledVerb','Blackhole','Pro-Q 3','Pro-L 2'],notes:{en:'Feed any short synth sound into <strong>MangledVerb</strong> — Overdrive 40%, Mix 80%. Layer <strong>Blackhole</strong> in parallel, Gravity inverted, Size max. <strong>Pro-Q 3</strong> aggressive high-pass at 200 Hz to prevent mud. <strong>Pro-L 2</strong> safety limiter.',fr:'Envoie n\'importe quel son synthé court dans <strong>MangledVerb</strong> — Overdrive 40%, Mix 80%. Layer <strong>Blackhole</strong> en parallèle, Gravity inversé, Size max. <strong>Pro-Q 3</strong> passe-haut agressif à 200 Hz pour éviter la boue. <strong>Pro-L 2</strong> limiteur de sécurité.'}},{name:{en:'Harmonic Shimmer Key',fr:'Clavier shimmer harmonique'},role:{en:'Sparkling melodic texture',fr:'Texture mélodique scintillante'},chain:['DX7 V / Pigments','Crystals','Crystalline','Chorus DIMENSION-D'],notes:{en:'<strong>DX7 V</strong> electric piano or <strong>Pigments</strong> wavetable bell. <strong>Crystals</strong> pitch +12, Feedback 30%, Mix 25%. <strong>Crystalline</strong> plate, Sparkle high, Decay 2 s, Mix 25%. <strong>Chorus DIMENSION-D</strong> mode I for subtle width.',fr:'<strong>DX7 V</strong> piano électrique ou <strong>Pigments</strong> cloche wavetable. <strong>Crystals</strong> pitch +12, Feedback 30%, Mix 25%. <strong>Crystalline</strong> plate, Sparkle élevé, Decay 2 s, Mix 25%. <strong>Chorus DIMENSION-D</strong> mode I pour une largeur subtile.'}},{name:{en:'Industrial Perc Hit',fr:'Perc industrielle'},role:{en:'Hard metallic one-shot',fr:'One-shot métallique dur'},chain:['PunchBox / Sample','Redoptor 2','Decimort 2','SP2016 Reverb'],notes:{en:'<strong>PunchBox</strong> or a metallic sample. <strong>Redoptor 2</strong> for harsh tube saturation. <strong>Decimort 2</strong> aggressive — bit depth 8, sample rate 12 kHz. <strong>SP2016 Reverb</strong> Room preset, Decay 0.5 s, Mix 20%. Keep it mono, short, impactful.',fr:'<strong>PunchBox</strong> ou un sample métallique. <strong>Redoptor 2</strong> pour saturation tube dure. <strong>Decimort 2</strong> agressif — profondeur 8 bits, sample rate 12 kHz. <strong>SP2016 Reverb</strong> preset Room, Decay 0.5 s, Mix 20%. Garde-le mono, court, impactant.'}}];
const RECIPES=[{name:{en:'Kapman Signature Kick',fr:'Kick signature Kapman'},tags:['kick','low-end'],steps:{en:['<strong>PunchBox</strong> — Start with a sine sub layer tuned to your track key. Body from Noise layer, Attack from Click layer.','<strong>Pro-Q 3</strong> — High-pass at 28 Hz (24 dB/oct). Surgical cut at 300 Hz (−3 dB, narrow Q) to clear mud.','<strong>Saturn 2</strong> — Warm Tape band on 60–200 Hz, Drive 15%. Adds controlled harmonic weight.','<strong>Pro-C 2</strong> — Punch mode. Ratio 4:1, Attack 5 ms, Release 50 ms. Gain reduction 3–4 dB.','<strong>Pro-L 2</strong> — Modern style, ceiling −0.3 dB. Just catching peaks.','Level-match and A/B against reference kick at every step.'],fr:['<strong>PunchBox</strong> — Commence avec un layer sub sinus accordé sur la tonalité du morceau.','<strong>Pro-Q 3</strong> — Passe-haut à 28 Hz (24 dB/oct). Coupe chirurgicale à 300 Hz.','<strong>Saturn 2</strong> — Warm Tape sur 60–200 Hz, Drive 15%.','<strong>Pro-C 2</strong> — Mode Punch. Ratio 4:1, Attack 5 ms, Release 50 ms.','<strong>Pro-L 2</strong> — Style Modern, ceiling −0.3 dB.','Level-match et A/B contre un kick de référence.']}},{name:{en:'Vintage Analog Pad',fr:'Nappe analogique vintage'},tags:['pad','texture'],steps:{en:['<strong>Jup-8 V4</strong> — Two oscillators, slight detune (5–8 cents). Low-pass filter at 2 kHz, Resonance 20%.','<strong>Tape MELLO-FI</strong> — Tape Speed slow, Wow & Flutter 30%, Noise 15%.','<strong>Super VHS</strong> — Age 50%, Boost off.','<strong>Chorus DIMENSION-D</strong> — Mode III for maximum width.','<strong>ValhallaVintageVerb</strong> — 1980s algorithm, Decay 4 s, Mix 30%.','<strong>Pro-Q 3</strong> — High-pass at 150 Hz. Gentle 10 kHz shelf −2 dB.'],fr:['<strong>Jup-8 V4</strong> — Deux oscillateurs, désaccord 5–8 cents. Passe-bas 2 kHz, Résonance 20%.','<strong>Tape MELLO-FI</strong> — Vitesse lente, Wow & Flutter 30%, Noise 15%.','<strong>Super VHS</strong> — Age 50%, Boost off.','<strong>Chorus DIMENSION-D</strong> — Mode III.','<strong>ValhallaVintageVerb</strong> — Algo 1980s, Decay 4 s, Mix 30%.','<strong>Pro-Q 3</strong> — Passe-haut 150 Hz. Shelf 10 kHz −2 dB.']}},{name:{en:'Tight Electro Clap',fr:'Clap électro serré'},tags:['drums','clap'],steps:{en:['Start with a layered clap sample — short, punchy, minimal room.','<strong>Devastor 2</strong> — Symmetric mode, Drive 20%.','<strong>Pro-Q 3</strong> — Cut below 200 Hz. Boost 1.5 kHz (+2 dB, wide Q).','<strong>Pro-C 2</strong> — Classic mode. Ratio 3:1, Attack 1 ms, Release 40 ms.','<strong>ValhallaPlate</strong> — Decay 0.8 s, Damping high, Mix 15%.','Keep it centered, mono-compatible.'],fr:['Sample clap layeré — court, punchy, minimal room.','<strong>Devastor 2</strong> — Mode symétrique, Drive 20%.','<strong>Pro-Q 3</strong> — Coupe sous 200 Hz. Boost 1.5 kHz (+2 dB).','<strong>Pro-C 2</strong> — Mode Classic. Ratio 3:1, Attack 1 ms, Release 40 ms.','<strong>ValhallaPlate</strong> — Decay 0.8 s, Damping élevé, Mix 15%.','Centré, compatible mono.']}},{name:{en:'Rhythmic Sidechain Pump',fr:'Pump sidechain rythmique'},tags:['dynamics','groove'],steps:{en:['<strong>ShaperBox 3</strong> — VolumeShaper. Pump curve synced to 1/4.','Attack: fast drop (5–10 ms). Release: medium recovery (80–120 ms).','Apply to pads, basses, mid-range synths — NOT drums or leads.','Alternative: Ableton Compressor with sidechain from kick, Ratio 4:1, Attack 0.1 ms, Release 100 ms.','Level-match. Pump should feel rhythmic, not broken.'],fr:['<strong>ShaperBox 3</strong> — VolumeShaper. Courbe pump sync 1/4.','Attack: chute rapide (5–10 ms). Release: récupération (80–120 ms).','Sur nappes, basses, synthés mid — PAS drums ni leads.','Alternative : Compressor Ableton, sidechain du kick, 4:1, Attack 0.1 ms, Release 100 ms.','Level-match. Le pump doit être rythmique.']}},{name:{en:'Gritty Hi-Hat Processing',fr:'Traitement hi-hat gritty'},tags:['drums','hi-hat'],steps:{en:['Crisp closed hi-hat sample. Layer open hat on offbeats.','<strong>Pro-Q 3</strong> — HP at 400 Hz. Boost 8–10 kHz (+2 dB shelf).','<strong>Decimort 2</strong> — Sample rate 28 kHz, bit depth 14.','<strong>Comp FET-76</strong> — Fast attack, fast release, ratio 2:1.','Pan 5–15% off-center. Keep velocity variations.'],fr:['Sample hi-hat fermé net. Open hat sur contretemps.','<strong>Pro-Q 3</strong> — HP à 400 Hz. Boost 8–10 kHz (+2 dB shelf).','<strong>Decimort 2</strong> — Sample rate 28 kHz, profondeur 14 bits.','<strong>Comp FET-76</strong> — Attack rapide, release rapide, ratio 2:1.','Pan 5–15% décentré. Garde les variations de vélocité.']}},{name:{en:'Tape-Saturated Bus Glue',fr:'Glue bus saturé bande'},tags:['bus','mix'],steps:{en:['On your 2-bus:','<strong>Comp VCA-65</strong> — 2:1, Attack 30 ms, Release auto. 1–2 dB GR max.','<strong>Saturn 2</strong> — Warm Tape, full range, Drive 8–12%, Mix 50%.','<strong>Pro-Q 3</strong> — Tilt EQ: +1 dB at 10 kHz, −1 dB at 100 Hz.','Level-match. Should feel "better" not "different".'],fr:['Sur ton bus 2-bus :','<strong>Comp VCA-65</strong> — 2:1, Attack 30 ms, Release auto. 1–2 dB GR max.','<strong>Saturn 2</strong> — Warm Tape, full range, Drive 8–12%, Mix 50%.','<strong>Pro-Q 3</strong> — Tilt EQ : +1 dB à 10 kHz, −1 dB à 100 Hz.','Level-match. Doit sonner "mieux" pas "différent".']}},{name:{en:'Detuned Supersaw Lead',fr:'Lead supersaw désaccordé'},tags:['lead','synth'],steps:{en:['<strong>Serum 2</strong> — Osc A: Saw, 7 voices, Detune 20%. Osc B: Saw, 3 voices, −7 semi.','Filter: LP 24 dB, Cutoff 3 kHz, Reso 15%. Env 2 → cutoff, Amount 40%.','<strong>Chorus JUN-6</strong> — Subtle width.','<strong>Pro-Q 3</strong> — HP 150 Hz. Tame 2–4 kHz.','<strong>ValhallaRoom</strong> — Small room, Decay 1 s, Mix 15%.','Mono below 200 Hz (Pro-Q 3 mid-side).'],fr:['<strong>Serum 2</strong> — Osc A : Saw, 7 voix, Detune 20%. Osc B : Saw, 3 voix, −7 demi-tons.','Filtre : LP 24 dB, Cutoff 3 kHz, Reso 15%. Env 2 → cutoff, Amount 40%.','<strong>Chorus JUN-6</strong> — Largeur subtile.','<strong>Pro-Q 3</strong> — HP 150 Hz. Dompte 2–4 kHz.','<strong>ValhallaRoom</strong> — Petite room, Decay 1 s, Mix 15%.','Mono sous 200 Hz (Pro-Q 3 mid-side).']}},{name:{en:'Filtered Noise Sweep',fr:'Sweep de bruit filtré'},tags:['fx','transition'],steps:{en:['<strong>Serum 2</strong> — Noise osc, white noise.','<strong>Filter SEM</strong> — Band-pass. Automate cutoff 200 Hz → 8 kHz over 4–8 bars.','<strong>Efx MOTIONS</strong> — Sync 1/16, subtle rhythmic modulation.','<strong>ValhallaDelay</strong> — Stereo, 1/16, Mix 20%, Feedback 10% → 50%.','<strong>Pro-L 2</strong> — Safety limiter.','Automate volume: fade in to −12 dB. Cut at drop.'],fr:['<strong>Serum 2</strong> — Osc noise, bruit blanc.','<strong>Filter SEM</strong> — Band-pass. Automatise cutoff 200 Hz → 8 kHz sur 4–8 mesures.','<strong>Efx MOTIONS</strong> — Sync 1/16, modulation rythmique subtile.','<strong>ValhallaDelay</strong> — Stéréo, 1/16, Mix 20%, Feedback 10% → 50%.','<strong>Pro-L 2</strong> — Limiteur de sécurité.','Automatise volume : fade in à −12 dB. Coupe au drop.']}},{name:{en:'Electro Perc Loop Treatment',fr:'Traitement loop perc électro'},tags:['perc','loop'],steps:{en:['Import percussion loop. Warp in Beats mode.','<strong>Infiltrator</strong> — Rhythmic multi-fx preset. Mix 25–40%.','<strong>Pro-Q 3</strong> — HP 250 Hz.','<strong>Decimort 2</strong> — 14 bits, 24 kHz.','<strong>ShaperBox 3</strong> — PanShaper synced 1/8.','Level-match. Add texture, not volume.'],fr:['Importe un loop perc. Warp Beats.','<strong>Infiltrator</strong> — Preset multi-fx rythmique. Mix 25–40%.','<strong>Pro-Q 3</strong> — HP 250 Hz.','<strong>Decimort 2</strong> — 14 bits, 24 kHz.','<strong>ShaperBox 3</strong> — PanShaper sync 1/8.','Level-match. Texture, pas volume.']}},{name:{en:'Cinematic Impact Hit',fr:'Impact cinématique'},tags:['fx','impact'],steps:{en:['Layer: low boom (50 Hz sine), metallic crash, noise burst.','<strong>Blackhole</strong> — Size 50%, Mix 30%.','<strong>Dist COLDFIRE</strong> — Parallel: Drive 50%, Mix 20%.','<strong>Pro-Q 3</strong> — LP 12 kHz. Boost 60–80 Hz (+3 dB).','<strong>Pro-L 2</strong> — Aggressive limiting. Ceiling −0.5 dB.','Render in place. Use as one-shot at transitions.'],fr:['Layer : boom (sinus 50 Hz), crash métallique, burst noise.','<strong>Blackhole</strong> — Size 50%, Mix 30%.','<strong>Dist COLDFIRE</strong> — Parallèle : Drive 50%, Mix 20%.','<strong>Pro-Q 3</strong> — LP 12 kHz. Boost 60–80 Hz (+3 dB).','<strong>Pro-L 2</strong> — Limitation agressive. Ceiling −0.5 dB.','Render in place. One-shot aux transitions.']}},{name:{en:'Warm Mono Bass',fr:'Basse mono chaude'},tags:['bass','low-end'],steps:{en:['<strong>Diva</strong> — Mono. Single saw. Ladder filter, Cutoff 800 Hz, Reso 10%.','<strong>Saturn 2</strong> — Warm Tube 80–400 Hz, Drive 20%.','<strong>Pro-Q 3</strong> — HP 30 Hz. Cut 200–300 Hz (−2 dB).','<strong>Pro-C 2</strong> — Clean, 4:1, Attack 8 ms, Release 60 ms.','<strong>Pro-MB</strong> — Upward compression 60–100 Hz, +2 dB.','A/B against reference. Simple, solid, mono.'],fr:['<strong>Diva</strong> — Mono. Saw unique. Filtre Ladder, Cutoff 800 Hz, Reso 10%.','<strong>Saturn 2</strong> — Warm Tube 80–400 Hz, Drive 20%.','<strong>Pro-Q 3</strong> — HP 30 Hz. Cut 200–300 Hz (−2 dB).','<strong>Pro-C 2</strong> — Clean, 4:1, Attack 8 ms, Release 60 ms.','<strong>Pro-MB</strong> — Compression upward 60–100 Hz, +2 dB.','A/B contre référence. Simple, solide, mono.']}},{name:{en:'Granular Texture Layer',fr:'Couche texture granulaire'},tags:['texture','experimental'],steps:{en:['Source: any synth one-shot, vocal snippet, or field recording.','<strong>Efx FRAGMENTS</strong> — Grain 30–80 ms, Scatter 50%, Pitch random ±5 semi, Mix 70%.','<strong>Phaser BI-TRON</strong> — Rate 0.1 Hz, Depth 60%.','<strong>ValhallaShimmer</strong> — Pitch +12, Decay 5 s, Mix 35%.','<strong>Pro-Q 3</strong> — Band-pass: HP 300 Hz, LP 8 kHz.','Automate FRAGMENTS for evolution. Render 8–16 bars, chop best parts.'],fr:['Source : one-shot, extrait vocal, ou field recording.','<strong>Efx FRAGMENTS</strong> — Grain 30–80 ms, Scatter 50%, Pitch ±5 demi-tons, Mix 70%.','<strong>Phaser BI-TRON</strong> — Rate 0.1 Hz, Depth 60%.','<strong>ValhallaShimmer</strong> — Pitch +12, Decay 5 s, Mix 35%.','<strong>Pro-Q 3</strong> — Band-pass : HP 300 Hz, LP 8 kHz.','Automatise FRAGMENTS. Render 8–16 mesures, découpe.']}},{name:{en:'Stereo Widening Stack',fr:'Stack d\'élargissement stéréo'},tags:['stereo','mix'],steps:{en:['For midrange (synths, pads, FX) — NOT bass or kick:','<strong>Chorus JUN-6</strong> — Mode I/II. First in chain.','<strong>MicroPitch</strong> — Detune ±10 cents, Delay 15–20 ms, Mix 40%.','<strong>Pro-Q 3</strong> — M/S: boost sides 3–8 kHz (+1.5 dB). Cut sides <200 Hz.','Check mono: Utility collapse. If thin/phasey, reduce MicroPitch Mix.','Width should enhance, not destroy.'],fr:['Pour mid-range (synthés, nappes, FX) — PAS basse ou kick :','<strong>Chorus JUN-6</strong> — Mode I/II. Premier dans la chaîne.','<strong>MicroPitch</strong> — Detune ±10 cents, Delay 15–20 ms, Mix 40%.','<strong>Pro-Q 3</strong> — M/S : boost sides 3–8 kHz (+1.5 dB). Cut sides <200 Hz.','Check mono : Utility collapse. Si fin/phaseux, réduis MicroPitch Mix.','La largeur doit améliorer, pas détruire.']}},{name:{en:'Master Bus Polish',fr:'Polish bus master'},tags:['master','finish'],steps:{en:['Final chain (apply LAST):','<strong>Neutron 5 Equalizer</strong> — Surgical cleanup.','<strong>Ozone 12 Dynamic EQ</strong> — Tame 200–400 Hz dynamically.','<strong>Ozone 12 Exciter</strong> — Tape on lows (5%), Retro on highs (8%).','<strong>Ozone 12 Imager</strong> — Narrow <100 Hz, widen 2–8 kHz.','<strong>Ozone 12 Maximizer</strong> — IRC IV, Ceiling −1.0 dB. Target −14 LUFS.','A/B the whole chain. Each module should be subtle.'],fr:['Chaîne finale (applique EN DERNIER) :','<strong>Neutron 5 Equalizer</strong> — Nettoyage chirurgical.','<strong>Ozone 12 Dynamic EQ</strong> — Dompte 200–400 Hz dynamiquement.','<strong>Ozone 12 Exciter</strong> — Tape graves (5%), Retro aigus (8%).','<strong>Ozone 12 Imager</strong> — Rétrécis <100 Hz, élargis 2–8 kHz.','<strong>Ozone 12 Maximizer</strong> — IRC IV, Ceiling −1.0 dB. Cible −14 LUFS.','A/B toute la chaîne. Chaque module doit être subtil.']}}];
const FX_PALETTE=[{category:{en:'SATURATION / DISTORTION',fr:'SATURATION / DISTORTION'},items:[{name:'Saturn 2',vendor:'FabFilter'},{name:'Devastor 2',vendor:'D16'},{name:'Redoptor 2',vendor:'D16'},{name:'Dist COLDFIRE',vendor:'Arturia'},{name:'Dist OPAMP-21',vendor:'Arturia'},{name:'Dist TUBE-CULTURE',vendor:'Arturia'},{name:'CrushStation',vendor:'Eventide'}]},{category:{en:'REVERB',fr:'RÉVERB'},items:[{name:'ValhallaVintageVerb',vendor:'Valhalla'},{name:'ValhallaRoom',vendor:'Valhalla'},{name:'ValhallaPlate',vendor:'Valhalla'},{name:'ValhallaShimmer',vendor:'Valhalla'},{name:'ValhallaSupermassive',vendor:'Valhalla'},{name:'Crystalline',vendor:'Baby Audio'},{name:'SP2016 Reverb',vendor:'Eventide'},{name:'MangledVerb',vendor:'Eventide'},{name:'Blackhole',vendor:'Eventide'},{name:'ShimmerVerb',vendor:'Eventide'},{name:'Pro-R 2',vendor:'FabFilter'},{name:'Toraverb 2',vendor:'D16'}]},{category:{en:'DELAY',fr:'DELAY'},items:[{name:'ValhallaDelay',vendor:'Valhalla'},{name:'Timeless 3',vendor:'FabFilter'},{name:'Delay TAPE-201',vendor:'Arturia'},{name:'Delay ETERNITY',vendor:'Arturia'},{name:'Delay BRIGADE',vendor:'Arturia'},{name:'Tekturon',vendor:'D16'},{name:'Repeater',vendor:'D16'},{name:'UltraTap',vendor:'Eventide'},{name:'H3000 Band Delays Mk II',vendor:'Eventide'}]},{category:{en:'MODULATION',fr:'MODULATION'},items:[{name:'Chorus DIMENSION-D',vendor:'Arturia'},{name:'Chorus JUN-6',vendor:'Arturia'},{name:'Phaser BI-TRON',vendor:'Arturia'},{name:'Flanger BL-20',vendor:'Arturia'},{name:'TriceraChorus',vendor:'Eventide'},{name:'Instant Phaser Mk II',vendor:'Eventide'},{name:'Instant Flanger Mk II',vendor:'Eventide'},{name:'MicroPitch',vendor:'Eventide'},{name:'Lush 2',vendor:'D16'},{name:'Syntorus 2',vendor:'D16'},{name:'Fazortan 2',vendor:'D16'}]},{category:{en:'DEGRADATION / LOFI',fr:'DÉGRADATION / LOFI'},items:[{name:'Decimort 2',vendor:'D16'},{name:'Super VHS',vendor:'Baby Audio'},{name:'Tape MELLO-FI',vendor:'Arturia'}]},{category:{en:'MULTI-FX / CREATIVE',fr:'MULTI-FX / CRÉATIF'},items:[{name:'ShaperBox 3',vendor:'Cableguys'},{name:'Infiltrator',vendor:'Devious Machines'},{name:'Efx FRAGMENTS',vendor:'Arturia'},{name:'Efx MOTIONS',vendor:'Arturia'},{name:'Efx REFRACT',vendor:'Arturia'},{name:'Crystals',vendor:'Eventide'},{name:'Undulator',vendor:'Eventide'},{name:'H3000 Factory Mk II',vendor:'Eventide'}]},{category:{en:'FILTER',fr:'FILTRE'},items:[{name:'Filter Mini',vendor:'Arturia'},{name:'Filter M12',vendor:'Arturia'},{name:'Filter MS-20',vendor:'Arturia'},{name:'Filter SEM',vendor:'Arturia'},{name:'Volcano 3',vendor:'FabFilter'},{name:'Simplon',vendor:'FabFilter'},{name:'Godfazer',vendor:'D16'}]},{category:{en:'HARMONIZER / PITCH',fr:'HARMONISEUR / PITCH'},items:[{name:'Octavox',vendor:'Eventide'},{name:'Quadravox',vendor:'Eventide'},{name:'H910 Harmonizer',vendor:'Eventide'},{name:'H949 Harmonizer',vendor:'Eventide'},{name:'Crystals',vendor:'Eventide'},{name:'ValhallaFreqEcho',vendor:'Valhalla'},{name:'ValhallaUberMod',vendor:'Valhalla'}]}];
const MIXCHECK_ZONES=[{freq:'20–60 Hz',name:{en:'Sub',fr:'Sub'},listen:{en:'<strong>Listen for:</strong> Sub present and controlled? Unwanted rumble? Kick/bass phase aligned?',fr:'<strong>Écoute :</strong> Sub présent et contrôlé ? Rumble ? Kick/basse en phase ?'},tools:['Pro-Q 3 (analyzer)','Ozone 12 Low End Focus','Neutron 5 Phase']},{freq:'60–200 Hz',name:{en:'Bass Body',fr:'Corps de basse'},listen:{en:'<strong>Listen for:</strong> Kick and bass together or fighting? Boomy/muddy 100–200 Hz?',fr:'<strong>Écoute :</strong> Kick et basse ensemble ou en conflit ? Boomy/boueux 100–200 Hz ?'},tools:['Pro-Q 3','Pro-C 2 (sidechain)','ShaperBox 3']},{freq:'200–500 Hz',name:{en:'Low Mids',fr:'Bas médiums'},listen:{en:'<strong>Listen for:</strong> Mud, boxiness, buildup. Most common problem zone.',fr:'<strong>Écoute :</strong> Boue, boxiness, accumulation. Zone la plus problématique.'},tools:['Pro-Q 3','Ozone 12 Dynamic EQ','Neutron 5 Equalizer']},{freq:'500 Hz–2 kHz',name:{en:'Midrange',fr:'Médiums'},listen:{en:'<strong>Listen for:</strong> Honky/nasal quality. Leads cutting through? Body without masking?',fr:'<strong>Écoute :</strong> Qualité honky/nasale. Les leads percent ? Corps sans masquage ?'},tools:['Pro-Q 3','Neutron 5 Sculptor','SplitEQ']},{freq:'2–6 kHz',name:{en:'Presence',fr:'Présence'},listen:{en:'<strong>Listen for:</strong> Harshness, sibilance, ear fatigue. Energetic, not painful.',fr:'<strong>Écoute :</strong> Agressivité, sibilance, fatigue. Énergique, pas douloureux.'},tools:['Pro-Q 3 (dynamic)','Pro-DS','Ozone 12 Spectral Shaper']},{freq:'6–20 kHz',name:{en:'Air / Brilliance',fr:'Air / Brillance'},listen:{en:'<strong>Listen for:</strong> Sizzle on hats. Bright enough or dull? Check reference.',fr:'<strong>Écoute :</strong> Sizzle sur hats. Assez brillant ? Compare avec référence.'},tools:['Pro-Q 3','Ozone 12 Exciter','Ozone 12 Equalizer']},{freq:'STEREO',name:{en:'Stereo Field',fr:'Champ stéréo'},listen:{en:'<strong>Listen for:</strong> Center solid? Sides interesting? Mono check: anything disappears?',fr:'<strong>Écoute :</strong> Centre solide ? Côtés intéressants ? Check mono : disparitions ?'},tools:['Ozone 12 Imager','Pro-Q 3 (M/S)','Neutron 5 Visual Mixer']},{freq:'DYNAMICS',name:{en:'Overall Dynamics',fr:'Dynamique globale'},listen:{en:'<strong>Listen for:</strong> Track breathes? Transients preserved? Crest factor 8–12 dB.',fr:'<strong>Écoute :</strong> Le morceau respire ? Transitoires préservés ? Crest factor 8–12 dB.'},tools:['Pro-L 2 (metering)','Ozone 12 Maximizer','Ozone 12 Dynamics']}];
const MIX_CHAINS=[{name:{en:'Kick Channel',fr:'Channel Kick'},purpose:{en:'Clean, punchy, mono',fr:'Propre, punchy, mono'},slots:[{plugin:'Pro-Q 3',setting:{en:'HP 25 Hz 24dB/oct. Cut 300 Hz −3 dB. Boost 60 Hz +1.5 dB.',fr:'HP 25 Hz 24dB/oct. Cut 300 Hz −3 dB. Boost 60 Hz +1.5 dB.'}},{plugin:'Pro-C 2',setting:{en:'Punch mode. 4:1, Attack 5 ms, Release 50 ms. GR: 3–4 dB.',fr:'Mode Punch. 4:1, Attack 5 ms, Release 50 ms. GR : 3–4 dB.'}},{plugin:'Saturn 2',setting:{en:'Warm Tape on 60–200 Hz. Drive 10%. Mix 40%.',fr:'Warm Tape sur 60–200 Hz. Drive 10%. Mix 40%.'}},{plugin:'Pro-L 2',setting:{en:'Modern. Ceiling −0.3 dB.',fr:'Modern. Ceiling −0.3 dB.'}}]},{name:{en:'Bass Channel',fr:'Channel Basse'},purpose:{en:'Tight, warm, controlled',fr:'Serré, chaud, contrôlé'},slots:[{plugin:'Pro-Q 3',setting:{en:'HP 28 Hz. Cut 200–300 Hz −2 dB. Mono <80 Hz.',fr:'HP 28 Hz. Cut 200–300 Hz −2 dB. Mono <80 Hz.'}},{plugin:'Pro-C 2',setting:{en:'Clean. 4:1, Attack 8 ms, Release 60 ms.',fr:'Clean. 4:1, Attack 8 ms, Release 60 ms.'}},{plugin:'Saturn 2',setting:{en:'Warm Tube 80–400 Hz. Drive 15%. Mix 50%.',fr:'Warm Tube 80–400 Hz. Drive 15%. Mix 50%.'}},{plugin:'ShaperBox 3',setting:{en:'VolumeShaper SC from kick. 1/4. Depth 40–60%.',fr:'VolumeShaper SC du kick. 1/4. Depth 40–60%.'}}]},{name:{en:'Drums Bus',fr:'Bus Drums'},purpose:{en:'Glue, punch, cohesion',fr:'Glue, punch, cohésion'},slots:[{plugin:'Pro-Q 3',setting:{en:'Surgical cleanup.',fr:'Nettoyage chirurgical.'}},{plugin:'Comp VCA-65',setting:{en:'2:1, Attack 15 ms, Release auto. GR: 2–3 dB.',fr:'2:1, Attack 15 ms, Release auto. GR : 2–3 dB.'}},{plugin:'Saturn 2',setting:{en:'Warm Tape, full range, Drive 8%. Mix 40%.',fr:'Warm Tape, full range, Drive 8%. Mix 40%.'}},{plugin:'Pro-L 2',setting:{en:'Safety. Ceiling −0.5 dB.',fr:'Sécurité. Ceiling −0.5 dB.'}}]},{name:{en:'Synth / Mid Bus',fr:'Bus Synthé / Mid'},purpose:{en:'Clarity, width, separation',fr:'Clarté, largeur, séparation'},slots:[{plugin:'Pro-Q 3',setting:{en:'HP 100–200 Hz. Dynamic EQ 2–4 kHz (−2 dB).',fr:'HP 100–200 Hz. EQ dynamique 2–4 kHz (−2 dB).'}},{plugin:'Pro-C 2',setting:{en:'Vocal mode. 3:1, Attack 10 ms, Release 100 ms.',fr:'Mode Vocal. 3:1, Attack 10 ms, Release 100 ms.'}},{plugin:'MicroPitch',setting:{en:'±8 cents. Delay 12 ms. Mix 30%.',fr:'±8 cents. Delay 12 ms. Mix 30%.'}},{plugin:'Pro-R 2',setting:{en:'Small room, Decay 0.8 s. Mix 10–15%.',fr:'Petite room, Decay 0.8 s. Mix 10–15%.'}}]},{name:{en:'FX Return',fr:'Retour FX'},purpose:{en:'Space without mud',fr:'Espace sans boue'},slots:[{plugin:'Pro-Q 3',setting:{en:'HP 200–400 Hz (pre-verb).',fr:'HP 200–400 Hz (pré-verb).'}},{plugin:'ValhallaVintageVerb',setting:{en:'1980s. Decay 2–4 s. 100% wet.',fr:'1980s. Decay 2–4 s. 100% wet.'}},{plugin:'Pro-C 2',setting:{en:'SC from drums. Ratio 3:1.',fr:'SC des drums. Ratio 3:1.'}}]},{name:{en:'Master Bus',fr:'Bus Master'},purpose:{en:'Final polish — subtle',fr:'Polish final — subtil'},slots:[{plugin:'Neutron 5 Equalizer',setting:{en:'Surgical fixes only.',fr:'Corrections chirurgicales.'}},{plugin:'Ozone 12 Dynamic EQ',setting:{en:'Tame 200–400 Hz.',fr:'Dompte 200–400 Hz.'}},{plugin:'Ozone 12 Imager',setting:{en:'Narrow <100 Hz. Widen 2–8 kHz.',fr:'Rétrécis <100 Hz. Élargis 2–8 kHz.'}},{plugin:'Ozone 12 Maximizer',setting:{en:'IRC IV. −1.0 dB. −14 LUFS.',fr:'IRC IV. −1.0 dB. −14 LUFS.'}}]}];
const FINISH_GROUPS=[{name:{en:'LOW END',fr:'BAS DU SPECTRE'},items:[{en:'Kick and bass phase-aligned',fr:'Kick et basse en phase'},{en:'Sub mono below 80 Hz',fr:'Sub mono sous 80 Hz'},{en:'No rumble below 25 Hz',fr:'Pas de rumble sous 25 Hz'},{en:'Sidechain pump feels musical',fr:'Pump sidechain musical'},{en:'Low end translates on laptop',fr:'Bas traduit sur laptop'}]},{name:{en:'MIDRANGE / BALANCE',fr:'MÉDIUMS / ÉQUILIBRE'},items:[{en:'No mud at 200–400 Hz',fr:'Pas de boue 200–400 Hz'},{en:'Lead clearly audible',fr:'Lead clairement audible'},{en:'No harshness 2–5 kHz',fr:'Pas d\'agressivité 2–5 kHz'},{en:'Frequency separation',fr:'Séparation fréquentielle'}]},{name:{en:'STEREO / SPACE',fr:'STÉRÉO / ESPACE'},items:[{en:'Mono compatibility checked',fr:'Compatibilité mono vérifiée'},{en:'Width for club system',fr:'Largeur pour système club'},{en:'Center image solid',fr:'Image centre solide'},{en:'Reverb tails clean',fr:'Queues reverb propres'},{en:'No side energy <200 Hz',fr:'Pas d\'énergie latérale <200 Hz'}]},{name:{en:'DYNAMICS / LOUDNESS',fr:'DYNAMIQUE / LOUDNESS'},items:[{en:'−14 LUFS integrated',fr:'−14 LUFS intégré'},{en:'True peak < −1 dBTP',fr:'True peak < −1 dBTP'},{en:'Transients preserved',fr:'Transitoires préservés'},{en:'Dynamic contrast',fr:'Contraste dynamique'},{en:'Crest factor 8–12 dB',fr:'Crest factor 8–12 dB'}]},{name:{en:'FINAL CHECKS',fr:'VÉRIFICATIONS FINALES'},items:[{en:'Listened on headphones',fr:'Écouté au casque'},{en:'Listened on phone/laptop',fr:'Écouté sur téléphone/laptop'},{en:'Listened at low volume',fr:'Écouté volume bas'},{en:'Compared 2–3 references',fr:'Comparé 2–3 références'},{en:'No clicks/pops/artifacts',fr:'Pas de clics/pops/artefacts'}]}];
const FIXIT_CARDS=[{problem:{en:'Mix sounds muddy',fr:'Mix boueux'},diagnosis:{en:'Buildup 200–400 Hz.',fr:'Accumulation 200–400 Hz.'},solution:{en:'<strong class="fixit-plugin-ref">Pro-Q 3</strong> — Solo each element. Cut 200–400 Hz (−2 to −4 dB) on non-essentials. HP pads/FX higher. <strong class="fixit-plugin-ref">Ozone 12 Dynamic EQ</strong> on master.',fr:'<strong class="fixit-plugin-ref">Pro-Q 3</strong> — Solo chaque élément. Coupe 200–400 Hz (−2 à −4 dB). HP plus élevé sur nappes/FX. <strong class="fixit-plugin-ref">Ozone 12 Dynamic EQ</strong> sur master.'}},{problem:{en:'Kick disappears under bass',fr:'Kick disparaît sous la basse'},diagnosis:{en:'Frequency overlap + phase.',fr:'Chevauchement + phase.'},solution:{en:'<strong class="fixit-plugin-ref">Neutron 5 Phase</strong> — Fix alignment. <strong class="fixit-plugin-ref">Pro-Q 3</strong> — Complementary EQ: boost kick 60 Hz, cut bass 60 Hz. <strong class="fixit-plugin-ref">ShaperBox 3</strong> — VolumeShaper on bass SC from kick.',fr:'<strong class="fixit-plugin-ref">Neutron 5 Phase</strong> — Corrige la phase. <strong class="fixit-plugin-ref">Pro-Q 3</strong> — EQ complémentaire : boost kick 60 Hz, cut basse 60 Hz. <strong class="fixit-plugin-ref">ShaperBox 3</strong> — VolumeShaper sur basse SC du kick.'}},{problem:{en:'Harsh / fatiguing highs',fr:'Aigus agressifs'},diagnosis:{en:'Peaks 2–6 kHz.',fr:'Pics 2–6 kHz.'},solution:{en:'<strong class="fixit-plugin-ref">Pro-Q 3</strong> — Dynamic EQ 3–5 kHz, −3 dB. <strong class="fixit-plugin-ref">Pro-DS</strong> — Broadband. <strong class="fixit-plugin-ref">Ozone 12 Spectral Shaper</strong> on master.',fr:'<strong class="fixit-plugin-ref">Pro-Q 3</strong> — EQ dynamique 3–5 kHz, −3 dB. <strong class="fixit-plugin-ref">Pro-DS</strong> — Broadband. <strong class="fixit-plugin-ref">Ozone 12 Spectral Shaper</strong> sur master.'}},{problem:{en:'Mix lacks width',fr:'Mix manque de largeur'},diagnosis:{en:'Too many mono elements.',fr:'Trop d\'éléments mono.'},solution:{en:'<strong class="fixit-plugin-ref">MicroPitch</strong> — ±8 cents, 12 ms, Mix 30%. <strong class="fixit-plugin-ref">Chorus JUN-6</strong> on pads. <strong class="fixit-plugin-ref">Ozone 12 Imager</strong> — Widen 2–8 kHz. Check mono.',fr:'<strong class="fixit-plugin-ref">MicroPitch</strong> — ±8 cents, 12 ms, Mix 30%. <strong class="fixit-plugin-ref">Chorus JUN-6</strong> sur nappes. <strong class="fixit-plugin-ref">Ozone 12 Imager</strong> — Élargis 2–8 kHz. Check mono.'}},{problem:{en:'Drums lack punch',fr:'Drums manquent de punch'},diagnosis:{en:'Transients eaten.',fr:'Transitoires mangés.'},solution:{en:'<strong class="fixit-plugin-ref">Neutron 5 Transient Shaper</strong> — Attack +20–30%. <strong class="fixit-plugin-ref">Pro-C 2</strong> — Punch mode, slower attack. <strong class="fixit-plugin-ref">Devastor 2</strong> — Reduce drive on drum bus.',fr:'<strong class="fixit-plugin-ref">Neutron 5 Transient Shaper</strong> — Attack +20–30%. <strong class="fixit-plugin-ref">Pro-C 2</strong> — Mode Punch, attack plus lent. <strong class="fixit-plugin-ref">Devastor 2</strong> — Réduis drive sur bus drums.'}},{problem:{en:'Bass sounds thin',fr:'Basse fine'},diagnosis:{en:'Missing harmonics 80–200 Hz.',fr:'Harmoniques manquantes 80–200 Hz.'},solution:{en:'<strong class="fixit-plugin-ref">Saturn 2</strong> — Warm Tube 80–400 Hz, Drive 15–25%. <strong class="fixit-plugin-ref">Pro-MB</strong> — Upward 60–150 Hz. <strong class="fixit-plugin-ref">Pro-Q 3</strong> — Lower HP to 25 Hz.',fr:'<strong class="fixit-plugin-ref">Saturn 2</strong> — Warm Tube 80–400 Hz, Drive 15–25%. <strong class="fixit-plugin-ref">Pro-MB</strong> — Upward 60–150 Hz. <strong class="fixit-plugin-ref">Pro-Q 3</strong> — Baisse HP à 25 Hz.'}},{problem:{en:'Doesn\'t translate',fr:'Ne traduit pas'},diagnosis:{en:'Single monitoring.',fr:'Mono-écoute.'},solution:{en:'Test headphones, laptop, car, phone. <strong class="fixit-plugin-ref">Ozone 12 Match EQ</strong> — Compare reference. <strong class="fixit-plugin-ref">Pro-Q 3</strong> analyzer.',fr:'Teste casque, laptop, voiture, téléphone. <strong class="fixit-plugin-ref">Ozone 12 Match EQ</strong> — Compare référence. <strong class="fixit-plugin-ref">Pro-Q 3</strong> analyseur.'}},{problem:{en:'Too loud, squashed',fr:'Trop fort, écrasé'},diagnosis:{en:'Over-limiting.',fr:'Sur-limitation.'},solution:{en:'<strong class="fixit-plugin-ref">Ozone 12 Maximizer</strong> — Input −2–3 dB. Gain stage to −6 dBFS. <strong class="fixit-plugin-ref">Pro-L 2</strong> Modern. Target −14 LUFS.',fr:'<strong class="fixit-plugin-ref">Ozone 12 Maximizer</strong> — Input −2–3 dB. Gain stage à −6 dBFS. <strong class="fixit-plugin-ref">Pro-L 2</strong> Modern. Cible −14 LUFS.'}},{problem:{en:'Reverb = mud',fr:'Reverb = boue'},diagnosis:{en:'No pre-filtering.',fr:'Pas de pré-filtrage.'},solution:{en:'<strong class="fixit-plugin-ref">Pro-Q 3</strong> — Before reverb: HP 200–400, LP 8–10k. <strong class="fixit-plugin-ref">Pro-C 2</strong> — After: SC drums. Decay 0.5–2.5 s.',fr:'<strong class="fixit-plugin-ref">Pro-Q 3</strong> — Avant reverb : HP 200–400, LP 8–10k. <strong class="fixit-plugin-ref">Pro-C 2</strong> — Après : SC drums. Decay 0.5–2.5 s.'}},{problem:{en:'Snare/clap boxy',fr:'Snare/clap boxy'},diagnosis:{en:'Resonance 200–500 Hz.',fr:'Résonance 200–500 Hz.'},solution:{en:'<strong class="fixit-plugin-ref">Pro-Q 3</strong> — Sweep, cut 3–5 dB. <strong class="fixit-plugin-ref">Devastor 2</strong> — Light saturation.',fr:'<strong class="fixit-plugin-ref">Pro-Q 3</strong> — Sweep, coupe 3–5 dB. <strong class="fixit-plugin-ref">Devastor 2</strong> — Saturation légère.'}},{problem:{en:'Lacks energy',fr:'Manque d\'énergie'},diagnosis:{en:'Static, no movement.',fr:'Statique, pas de mouvement.'},solution:{en:'<strong class="fixit-plugin-ref">ShaperBox 3</strong> — Volume/filter auto. <strong class="fixit-plugin-ref">Ozone 12 Exciter</strong> — Drive 5–10%. <strong class="fixit-plugin-ref">Efx MOTIONS</strong> — Rhythmic mod.',fr:'<strong class="fixit-plugin-ref">ShaperBox 3</strong> — Auto volume/filtre. <strong class="fixit-plugin-ref">Ozone 12 Exciter</strong> — Drive 5–10%. <strong class="fixit-plugin-ref">Efx MOTIONS</strong> — Mod rythmique.'}},{problem:{en:'Phase issues',fr:'Phase'},diagnosis:{en:'Layer misalignment.',fr:'Décalage layers.'},solution:{en:'<strong class="fixit-plugin-ref">Neutron 5 Phase</strong> — Auto-align. <strong class="fixit-plugin-ref">Precision Time Align</strong>. Try polarity flip.',fr:'<strong class="fixit-plugin-ref">Neutron 5 Phase</strong> — Auto-aligne. <strong class="fixit-plugin-ref">Precision Time Align</strong>. Essaie inversion polarité.'}},{problem:{en:'Sidechain unnatural',fr:'Sidechain pas naturel'},diagnosis:{en:'Wrong curve.',fr:'Mauvaise courbe.'},solution:{en:'<strong class="fixit-plugin-ref">ShaperBox 3</strong> — VolumeShaper custom curve. Attack 5 ms, recovery 80–150 ms.',fr:'<strong class="fixit-plugin-ref">ShaperBox 3</strong> — VolumeShaper courbe custom. Attack 5 ms, récupération 80–150 ms.'}}];
const REFERENCES=[{title:{en:'FREQUENCY MAP',fr:'CARTE FRÉQUENCES'},rows:[{key:'Sub Bass',val:'20–60 Hz'},{key:'Bass Body',val:'60–200 Hz'},{key:'Low Mids',val:'200–500 Hz'},{key:'Midrange',val:'500–2k Hz'},{key:'Presence',val:'2–6 kHz'},{key:'Air',val:'6–20 kHz'}]},{title:{en:'GAIN STAGING',fr:'GAIN STAGING'},rows:[{key:{en:'Tracks',fr:'Pistes'},val:'−12 to −6 dBFS'},{key:'Bus',val:'−8 to −4 dBFS'},{key:{en:'Pre-limiter',fr:'Pré-limiteur'},val:'−6 to −3 dBFS'},{key:'Ceiling',val:'−1.0 dBTP'},{key:'Streaming',val:'−14 LUFS'}]},{title:'SIDECHAIN',rows:[{key:{en:'Kick→Bass',fr:'Kick→Basse'},val:'4:1, 0.1ms, 80–120ms'},{key:{en:'Kick→Pads',fr:'Kick→Nappes'},val:'3:1, 0.5ms, 100–150ms'},{key:'VolumeShaper',val:'40–70%'},{key:'Sync',val:'1/4'}]},{title:{en:'REVERB',fr:'RÉVERB'},rows:[{key:{en:'Pre-filter',fr:'Pré-filtre'},val:'HP 200–400, LP 8–10k'},{key:{en:'Club decay',fr:'Decay club'},val:'0.5–2.5 s'},{key:{en:'Return',fr:'Retour'},val:{en:'Cut lows, tame 2–4k',fr:'Coupe graves, dompte 2–4k'}},{key:'SC',val:'Pro-C 2, 3:1'}]},{title:'COMPRESSION',rows:[{key:'Kick',val:'4:1, 5ms, 50ms'},{key:{en:'Bass',fr:'Basse'},val:'4:1, 8ms, 60ms'},{key:{en:'Drums bus',fr:'Bus drums'},val:'2:1, 15ms, auto'},{key:{en:'Synth bus',fr:'Bus synthé'},val:'3:1, 10ms, 100ms'},{key:'Master',val:'1.5:1, 30ms, auto'}]}];
const INVENTORY={'Arturia':['ARP 2600 V3','Buchla Easel V','Bus EXCITER-104','Bus FORCE','Bus PEAK','Chorus DIMENSION-D','Chorus JUN-6','CMI V','Comp DIODE-609','Comp FET-76','Comp TUBE-STA','Comp VCA-65','CS-80 V4','CZ V','Delay BRIGADE','Delay ETERNITY','Delay TAPE-201','Dist COLDFIRE','Dist OPAMP-21','Dist TUBE-CULTURE','DX7 V','Efx FRAGMENTS','Efx MOTIONS','Efx REFRACT','Emulator II V','EQ SITRAL-295','Filter Mini','Filter M12','Filter MS-20','Filter SEM','Flanger BL-20','Jun-6 V','Jup-8 V4','KORG MS-20 V','Matrix-12 V2','Mini V3','MiniFreak V','Modular V3','OP-Xa V','Phaser BI-TRON','Pigments','Pre 1973','Pre TridA','Pre V76','Prophet-5 V','Prophet-VS V','Rev INTENSITY','Rev LX-24','Rev PLATE-140','Rev SPRING-636','Rotary CLS-222','SEM V2','SQ80 V','Synclavier V','Synthi V','Tape MELLO-FI','Vocoder V'],'Baby Audio':['BA-1','BA-1 FX Strip','Crystalline','Super VHS'],'Cableguys':['ShaperBox 3'],'D16':['Antresol','Decimort 2','Devastor 2','Drumazon 2','Fazortan 2','Frontier','Godfazer','Lush 2','Nepheton 2','Nithonat 2','Phoscyon 2','PunchBox','Redoptor 2','Repeater','Sigmund 2','Spacerek','Syntorus 2','Tekturon','Toraverb 2'],'Devious Machines':['Infiltrator'],'Eventide':['Blackhole','Blackhole Immersive','CrushStation','Crystals','DeBoom','EChannel','EQ45','EQ65','H910 Dual Harmonizer','H910 Harmonizer','H949 Dual Harmonizer','H949 Harmonizer','H3000 Band Delays Mk II','H3000 Factory Mk II','Instant Flanger Mk II','Instant Phaser Mk II','MangledVerb','MicroPitch','MicroPitch Immersive','Octavox','Omnipressor','Physion Mk II','Precision Time Align','Quadravox','Rotary Mod','Sheen Machine','ShimmerVerb','SP2016 Reverb','SplitEQ','Spring','Temperance Lite','Temperance Pro','TriceraChorus','Tverb','UltraChannel','UltraReverb','UltraTap','Undulator'],'FabFilter':['FabFilter Pro-C','FabFilter Pro-Q','Micro','One','Pro-C 2','Pro-DS','Pro-G','Pro-L','Pro-L 2','Pro-MB','Pro-Q 2','Pro-Q 3','Pro-Q 4','Pro-R','Pro-R 2','Saturn','Saturn 2','Simplon','Timeless 2','Timeless 3','Twin 2','Twin 3','Volcano 2','Volcano 3'],'iZotope':['Neutron 5','Neutron 5 Clipper','Neutron 5 Compressor','Neutron 5 Density','Neutron 5 Equalizer','Neutron 5 Exciter','Neutron 5 Gate','Neutron 5 Phase','Neutron 5 Sculptor','Neutron 5 Transient Shaper','Neutron 5 Unmask','Neutron 5 Visual Mixer','Ozone 12','Ozone 12 Bass Control','Ozone 12 Clarity','Ozone 12 Dynamic EQ','Ozone 12 Dynamics','Ozone 12 Equalizer','Ozone 12 Exciter','Ozone 12 Imager','Ozone 12 Impact','Ozone 12 Low End Focus','Ozone 12 Master Rebalance','Ozone 12 Match EQ','Ozone 12 Maximizer','Ozone 12 Spectral Shaper','Ozone 12 Stabilizer','Ozone 12 Stem EQ','Ozone 12 Unlimiter','Ozone 12 Vintage Compressor','Ozone 12 Vintage EQ','Ozone 12 Vintage Limiter','Ozone 12 Vintage Tape'],'KORG':['Polysix'],'Spectrasonics':['Trilian'],'u-he':['Diva'],'Valhalla DSP':['ValhallaDelay','ValhallaFreqEcho','ValhallaPlate','ValhallaRoom','ValhallaShimmer','ValhallaSpaceModulator','ValhallaSupermassive','ValhallaUberMod','ValhallaVintageVerb'],'Xfer Records':['Serum 2','Serum 2 FX']};
const PRIORITY_PLUGINS=new Set(['Diva','Serum 2','Serum 2 FX','Pigments','Mini V3','MiniFreak V','BA-1','BA-1 FX Strip','Super VHS','Crystalline','Pro-Q 3','Pro-Q 4','Pro-C 2','Pro-L 2','Pro-MB','Saturn 2','Pro-R 2','Pro-DS','Timeless 3','Devastor 2','Decimort 2','Drumazon 2','PunchBox','Toraverb 2','ShaperBox 3','Infiltrator','Trilian','ValhallaVintageVerb','ValhallaRoom','ValhallaPlate','ValhallaDelay','ValhallaShimmer','ValhallaSupermassive','Neutron 5','Ozone 12','Ozone 12 Maximizer','Ozone 12 Imager','Ozone 12 Dynamic EQ','Ozone 12 Exciter','SP2016 Reverb','MangledVerb','Blackhole','MicroPitch','Comp FET-76','Comp VCA-65','Tape MELLO-FI','Chorus DIMENSION-D','Chorus JUN-6','Phaser BI-TRON','Efx FRAGMENTS','Efx MOTIONS','Efx REFRACT','Dist COLDFIRE','CS-80 V4','Jup-8 V4','DX7 V','Prophet-5 V']);

/* ============================================================
   STATE
   ============================================================ */
let lang=localStorage.getItem('kapman-lang')||'en';
let theme=localStorage.getItem('kapman-theme')||'dark';
let finishState=JSON.parse(localStorage.getItem('kapman-finish')||'{}');
let activeVendorFilter=null;
let pendingOpen=null;
let audioCtx=null;
let dropResetTimer=null;

const $=s=>document.getElementById(s);
const T=obj=>typeof obj==='string'?obj:(obj[lang]||obj.en||'');

/* ============================================================
   GATE
   ============================================================ */
function initGate(){
  const gate=$('gate'),input=$('gate-input'),error=$('gate-error'),app=$('app');
  if(localStorage.getItem('kapman-gate')==='ok'){gate.classList.add('dismissed');app.classList.remove('hidden');return;}
  input.addEventListener('keydown',e=>{
    if(e.key==='Enter'){
      if(input.value===GATE_PASS){localStorage.setItem('kapman-gate','ok');gate.classList.add('dismissed');app.classList.remove('hidden');}
      else{error.classList.add('visible');input.value='';setTimeout(()=>error.classList.remove('visible'),2000);}
    }
  });
  setTimeout(()=>input.focus(),300);
}

/* ============================================================
   THEME & LANG
   ============================================================ */
function applyTheme(){document.documentElement.setAttribute('data-theme',theme);}
function toggleTheme(){theme=theme==='dark'?'light':'dark';localStorage.setItem('kapman-theme',theme);applyTheme();}
function applyLang(){
  const d=I18N[lang]||I18N.en;
  document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.getAttribute('data-i18n');if(d[k])el.textContent=d[k];});
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{const k=el.getAttribute('data-i18n-placeholder');if(d[k])el.placeholder=d[k];});
  $('btn-lang').textContent=lang==='en'?'FR':'EN';
  document.documentElement.lang=lang;
}
function toggleLang(){lang=lang==='en'?'fr':'en';localStorage.setItem('kapman-lang',lang);applyLang();renderAll();}

/* ============================================================
   NAVIGATION — FIX #1: all dynamic elements use event delegation
   ============================================================ */
function showView(mode,subTab,openIdx){
  const hero=$('hero'),tabs=$('mode-tabs'),plugBtn=$('btn-plugins');
  document.querySelectorAll('.mode-panel').forEach(p=>p.classList.remove('active'));
  if(mode==='hero'){hero.classList.remove('hidden');tabs.classList.add('hidden');plugBtn.classList.add('hidden');return;}
  hero.classList.add('hidden');tabs.classList.remove('hidden');plugBtn.classList.remove('hidden');
  document.querySelectorAll('.mode-tab').forEach(t=>t.classList.toggle('active',t.dataset.mode===mode));
  const panel=$('mode-'+mode);
  if(!panel)return;
  panel.classList.add('active');
  if(subTab){const btn=panel.querySelector(`.sub-btn[data-sub="${subTab}"]`);if(btn)btn.click();}
  /* FIX #2: scope pendingOpen to the ACTIVE sub-panel only */
  if(typeof openIdx==='number'){
    pendingOpen={index:openIdx};
    requestAnimationFrame(()=>requestAnimationFrame(()=>{
      if(!pendingOpen)return;
      const activeSub=panel.querySelector('.sub-panel.active');
      if(!activeSub){pendingOpen=null;return;}
      const items=activeSub.querySelectorAll('.expandable');
      if(items[pendingOpen.index]){
        items[pendingOpen.index].classList.add('expanded');
        items[pendingOpen.index].scrollIntoView({behavior:'smooth',block:'center'});
      }
      pendingOpen=null;
    }));
  }
}

function initNav(){
  /* FIX #1: Task buttons — event delegation on document.
     Buttons are created dynamically by renderTasks(), so direct
     querySelectorAll binding at init time finds nothing.
     Delegation works for all current and future task buttons. */
  document.addEventListener('click',e=>{
    const taskBtn=e.target.closest('.task-btn');
    if(taskBtn){
      const mode=taskBtn.classList.contains('td')?'design':'mix';
      const sub=taskBtn.dataset.sub;
      const idx=taskBtn.dataset.open!==undefined?parseInt(taskBtn.dataset.open):undefined;
      showView(mode,sub,idx);
      return;
    }
    /* Hero explore buttons (static HTML, but delegate for consistency) */
    const explore=e.target.closest('.hero-explore');
    if(explore){showView(explore.dataset.goto);return;}
    /* Sub-nav buttons (already delegated in v4, kept here) */
    const subBtn=e.target.closest('.sub-btn');
    if(subBtn){
      const nav=subBtn.closest('.sub-nav');
      if(!nav)return;
      nav.querySelectorAll('.sub-btn').forEach(b=>b.classList.remove('active'));
      subBtn.classList.add('active');
      const panel=subBtn.closest('.mode-panel');
      if(!panel)return;
      panel.querySelectorAll('.sub-panel').forEach(p=>p.classList.remove('active'));
      const target=panel.querySelector('#sub-'+subBtn.dataset.sub);
      if(target)target.classList.add('active');
      return;
    }
    /* Diagnosis → Fix-It links (delegated for audio check results) */
    const diagLink=e.target.closest('.ar-diag-link');
    if(diagLink){
      e.stopPropagation();
      showView('mix','fixit',parseInt(diagLink.dataset.fix));
      return;
    }
  });
  /* Mode tabs — static HTML elements, safe to bind directly */
  document.querySelectorAll('.mode-tab').forEach(tab=>{
    tab.addEventListener('click',()=>showView(tab.dataset.mode));
  });
  /* Home button */
  $('btn-home').addEventListener('click',()=>showView('hero'));
}

/* ============================================================
   DRAWER
   ============================================================ */
function openDrawer(tab){
  const d=$('tools-drawer');
  d.classList.remove('hidden');
  requestAnimationFrame(()=>d.classList.add('open'));
  if(tab){
    d.querySelectorAll('.drawer-tab').forEach(t=>t.classList.toggle('active',t.dataset.dtab===tab));
    d.querySelectorAll('.dtab-panel').forEach(p=>p.classList.toggle('active',p.id==='dtab-'+tab));
  }
}
function closeDrawer(){
  const d=$('tools-drawer');
  d.classList.remove('open');
  setTimeout(()=>d.classList.add('hidden'),400);
}
function initDrawer(){
  $('hero-plugins-btn').addEventListener('click',()=>openDrawer('inventory'));
  $('hero-refs-btn').addEventListener('click',()=>openDrawer('references'));
  $('btn-plugins').addEventListener('click',()=>openDrawer('inventory'));
  $('drawer-close').addEventListener('click',closeDrawer);
  $('drawer-overlay').addEventListener('click',closeDrawer);
  document.querySelectorAll('.drawer-tab').forEach(tab=>{
    tab.addEventListener('click',()=>{
      document.querySelectorAll('.drawer-tab').forEach(t=>t.classList.remove('active'));
      tab.classList.add('active');
      document.querySelectorAll('.dtab-panel').forEach(p=>p.classList.toggle('active',p.id==='dtab-'+tab.dataset.dtab));
    });
  });
}

/* ============================================================
   AUDIO ANALYZER — FIX #3: 1024-pt DFT, FIX #4: state cleanup
   ============================================================ */
function initAudioCheck(){
  const drop=$('audio-drop'),fileInput=$('audio-file'),results=$('audio-results'),clearBtn=$('ar-clear');
  if(!drop||!fileInput||!results||!clearBtn)return;
  drop.addEventListener('click',e=>{if(e.target.closest('#ar-clear'))return;fileInput.click();});
  drop.addEventListener('dragover',e=>{e.preventDefault();drop.classList.add('dragover');});
  drop.addEventListener('dragleave',()=>drop.classList.remove('dragover'));
  drop.addEventListener('drop',e=>{e.preventDefault();drop.classList.remove('dragover');if(e.dataTransfer.files.length)analyzeFile(e.dataTransfer.files[0]);});
  fileInput.addEventListener('change',()=>{if(fileInput.files.length)analyzeFile(fileInput.files[0]);});
  clearBtn.addEventListener('click',e=>{
    e.stopPropagation();
    results.classList.add('hidden');
    drop.style.display='';
    fileInput.value='';
  });
}

function setDropText(txt){
  const el=$('audio-drop-inner');
  if(el){const t=el.querySelector('.audio-drop-text');if(t)t.textContent=txt;}
}
function resetDropText(){
  setDropText(I18N[lang]?.['ac-drop']||'Drop audio file or click to upload');
}

async function analyzeFile(file){
  const drop=$('audio-drop'),results=$('audio-results');
  if(!drop||!results)return;
  if(dropResetTimer){clearTimeout(dropResetTimer);dropResetTimer=null;}
  drop.classList.add('processing');
  setDropText(lang==='fr'?'Analyse en cours…':'Analyzing…');
  try{
    if(!audioCtx)audioCtx=new(window.AudioContext||window.webkitAudioContext)();
    const arrayBuf=await file.arrayBuffer();
    const audioBuf=await audioCtx.decodeAudioData(arrayBuf);
    const metrics=computeMetrics(audioBuf);
    drawWaveform(audioBuf);
    renderMetrics(metrics);
    renderDiagnosis(metrics);
    $('ar-filename').textContent=file.name;
    drop.style.display='none';
    drop.classList.remove('processing');
    results.classList.remove('hidden');
  }catch(err){
    console.error('Audio analysis error:',err);
    setDropText(lang==='fr'?'Erreur — format non supporté':'Error — unsupported format');
    drop.classList.remove('processing');
    dropResetTimer=setTimeout(resetDropText,3000);
  }
}

function computeMetrics(buf){
  const ch0=buf.getChannelData(0);
  const ch1=buf.numberOfChannels>1?buf.getChannelData(1):ch0;
  const len=ch0.length,sr=buf.sampleRate;
  let peak=0,sumSq=0,correlation=0,sumL=0,sumR=0;
  for(let i=0;i<len;i++){
    const l=ch0[i],r=ch1[i];
    const mono=(l+r)/2;
    const absMono=Math.abs(mono);
    if(absMono>peak)peak=absMono;
    sumSq+=mono*mono;
    correlation+=l*r;
    sumL+=l*l;sumR+=r*r;
  }
  const rms=Math.sqrt(sumSq/len);
  const peakDb=20*Math.log10(Math.max(peak,1e-10));
  const rmsDb=20*Math.log10(Math.max(rms,1e-10));
  const crest=peakDb-rmsDb;
  const lufsEstimate=rmsDb-0.691;
  const corrDenom=Math.sqrt(sumL*sumR);
  const stereoCorr=corrDenom>0?correlation/corrDenom:1;

  /* FIX #3: 1024-point DFT instead of 4096 — ~262K ops vs ~8M */
  const fftSize=1024;
  const halfN=fftSize/2;
  const chunkStart=Math.floor(len*0.3);
  const chunk=new Float32Array(fftSize);
  for(let i=0;i<fftSize&&(chunkStart+i)<len;i++) chunk[i]=(ch0[chunkStart+i]+(ch1[chunkStart+i]||0))/2;
  for(let i=0;i<fftSize;i++) chunk[i]*=0.5*(1-Math.cos(2*Math.PI*i/fftSize));
  const bands={sub:0,low:0,mid:0,high:0,air:0};
  const binHz=sr/fftSize;
  let totalE=0;
  for(let k=1;k<halfN;k++){
    let re=0,im=0;
    for(let n=0;n<fftSize;n++){const a=2*Math.PI*k*n/fftSize;re+=chunk[n]*Math.cos(a);im-=chunk[n]*Math.sin(a);}
    const e=re*re+im*im;totalE+=e;
    const f=k*binHz;
    if(f<60)bands.sub+=e;else if(f<200)bands.low+=e;else if(f<2000)bands.mid+=e;else if(f<6000)bands.high+=e;else bands.air+=e;
  }
  if(totalE>0){bands.sub/=totalE;bands.low/=totalE;bands.mid/=totalE;bands.high/=totalE;bands.air/=totalE;}

  return{peak:peakDb,rms:rmsDb,lufs:lufsEstimate,crest,stereoCorr,bands,duration:buf.duration,sampleRate:sr,channels:buf.numberOfChannels};
}

function drawWaveform(buf){
  const canvas=$('ar-waveform');if(!canvas)return;
  const ctx=canvas.getContext('2d');
  const dpr=window.devicePixelRatio||1;
  const w=canvas.clientWidth;
  canvas.width=w*dpr;canvas.height=80*dpr;
  ctx.scale(dpr,dpr);
  ctx.clearRect(0,0,w,80);
  const data=buf.getChannelData(0);
  const step=Math.ceil(data.length/w);
  const mid=40;
  const cs=getComputedStyle(document.documentElement);
  ctx.strokeStyle=cs.getPropertyValue('--accent-mix').trim()||'#3B82F6';
  ctx.lineWidth=1;
  ctx.beginPath();
  for(let i=0;i<w;i++){
    let min=1,max=-1;
    for(let j=0;j<step;j++){const d=data[i*step+j];if(d!==undefined){if(d<min)min=d;if(d>max)max=d;}}
    ctx.moveTo(i,mid+min*mid*0.9);
    ctx.lineTo(i,mid+max*mid*0.9);
  }
  ctx.stroke();
}

function renderMetrics(m){
  const c=$('ar-metrics');if(!c)return;c.innerHTML='';
  const items=[
    {label:'PEAK',value:m.peak.toFixed(1)+' dB',status:m.peak>-0.3?'bad':m.peak>-1?'warn':'good',note:m.peak>-0.3?(lang==='fr'?'Clipping probable':'Likely clipping'):m.peak>-1?(lang==='fr'?'Headroom serré':'Tight headroom'):(lang==='fr'?'Bon headroom':'Good headroom')},
    {label:'LUFS EST.',value:m.lufs.toFixed(1)+' LUFS',status:m.lufs>-10?'bad':m.lufs>-12?'warn':m.lufs<-18?'warn':'good',note:m.lufs>-10?(lang==='fr'?'Trop fort':'Too loud'):m.lufs>-12?'Loud':m.lufs<-18?'Quiet':'OK'},
    {label:'CREST',value:m.crest.toFixed(1)+' dB',status:m.crest<6?'bad':m.crest<8?'warn':m.crest>14?'warn':'good',note:m.crest<6?(lang==='fr'?'Très écrasé':'Very crushed'):m.crest<8?(lang==='fr'?'Écrasé':'Crushed'):m.crest>14?(lang==='fr'?'Très dynamique':'Very dynamic'):(lang==='fr'?'Bon pour le club':'Good for club')},
    {label:lang==='fr'?'STÉRÉO':'STEREO',value:(m.stereoCorr*100).toFixed(0)+'%',status:m.stereoCorr<0.3?'bad':m.stereoCorr<0.5?'warn':'good',note:m.stereoCorr<0.3?(lang==='fr'?'Phase suspecte':'Phase suspect'):m.stereoCorr<0.5?(lang==='fr'?'Largeur extrême':'Extreme width'):(lang==='fr'?'Corrélation saine':'Healthy correlation')},
    {label:lang==='fr'?'DURÉE':'LENGTH',value:fmtTime(m.duration),status:'good',note:m.sampleRate/1000+'kHz · '+(m.channels===2?'Stereo':'Mono')},
  ];
  items.forEach(it=>{const d=document.createElement('div');d.className='ar-metric '+it.status;d.innerHTML=`<div class="ar-metric-label">${it.label}</div><div class="ar-metric-value">${it.value}</div><div class="ar-metric-note">${it.note}</div>`;c.appendChild(d);});
}

function renderDiagnosis(m){
  const c=$('ar-diagnosis');if(!c)return;c.innerHTML='';
  const findings=[];
  if(m.peak>-0.3)findings.push({s:'r',t:{en:'<strong>Peak clipping</strong> — your mix is hitting 0 dBFS. Pull down your master fader or reduce limiter input.',fr:'<strong>Peak clipping</strong> — ton mix tape à 0 dBFS. Baisse le fader master ou réduis l\'input du limiteur.'},fix:7});
  if(m.lufs>-10)findings.push({s:'r',t:{en:'<strong>Too loud</strong> — over −10 LUFS. Streaming platforms will turn this down. Target −14 LUFS.',fr:'<strong>Trop fort</strong> — au-dessus de −10 LUFS. Les plateformes vont baisser. Cible −14 LUFS.'},fix:7});
  if(m.crest<7)findings.push({s:'y',t:{en:'<strong>Low crest factor</strong> ('+m.crest.toFixed(1)+' dB) — transients may be over-compressed. Check your limiter settings.',fr:'<strong>Crest factor bas</strong> ('+m.crest.toFixed(1)+' dB) — transitoires peut-être sur-compressés. Vérifie ton limiteur.'},fix:7});
  if(m.stereoCorr<0.3)findings.push({s:'r',t:{en:'<strong>Low stereo correlation</strong> — potential phase issues. Check mono compatibility.',fr:'<strong>Corrélation stéréo basse</strong> — problèmes de phase possibles. Vérifie la compatibilité mono.'},fix:11});
  else if(m.stereoCorr<0.5)findings.push({s:'y',t:{en:'<strong>Wide stereo image</strong> — check mono fold for cancellation.',fr:'<strong>Image stéréo large</strong> — vérifie le fold mono pour les annulations.'},fix:3});
  if(m.bands.sub>0.35)findings.push({s:'y',t:{en:'<strong>Heavy sub energy</strong> — may sound boomy on large systems. Check HP filters.',fr:'<strong>Énergie sub élevée</strong> — peut sonner boomy sur grands systèmes. Vérifie les HP filters.'},fix:1});
  if(m.bands.mid>0.55)findings.push({s:'y',t:{en:'<strong>Dense midrange</strong> — risk of masking. Check frequency separation.',fr:'<strong>Médiums denses</strong> — risque de masquage. Vérifie la séparation fréquentielle.'},fix:0});
  if(m.bands.air<0.02)findings.push({s:'y',t:{en:'<strong>Low air/brilliance</strong> — top end may sound dull. Consider subtle Exciter or shelf boost.',fr:'<strong>Peu d\'air/brillance</strong> — les aigus peuvent sonner ternes. Envisage un Exciter ou shelf boost subtil.'},fix:10});
  if(findings.length===0)findings.push({s:'g',t:{en:'<strong>Looking good</strong> — no critical issues detected. Trust your ears and check on multiple systems.',fr:'<strong>Ça semble bon</strong> — pas de problèmes critiques détectés. Fais confiance à tes oreilles et teste sur plusieurs systèmes.'}});

  let html=`<div class="ar-diag-title">${lang==='fr'?'DIAGNOSTIC':'DIAGNOSIS'}</div>`;
  findings.forEach(f=>{
    const dotClass=f.s==='r'?'dot-r':f.s==='y'?'dot-y':'dot-g';
    /* FIX: diagnosis links use delegation via initNav, no inline binding needed */
    const linkHtml=f.fix!==undefined?` <span class="ar-diag-link" data-fix="${f.fix}">${lang==='fr'?'→ Fix-It':'→ Fix-It'}</span>`:'';
    html+=`<div class="ar-diag-item"><span class="ar-diag-dot ${dotClass}"></span><div class="ar-diag-text">${T(f.t)}${linkHtml}</div></div>`;
  });
  c.innerHTML=html;
  /* No manual event binding needed — .ar-diag-link clicks handled by delegation in initNav */
}

function fmtTime(s){const m=Math.floor(s/60);const sec=Math.floor(s%60);return m+':'+String(sec).padStart(2,'0');}

/* ============================================================
   EXPANDABLE HELPER + ALL RENDER FUNCTIONS
   ============================================================ */
function makeExpandable(container,items,renderHeader,renderBody){
  container.innerHTML='';
  items.forEach((item,i)=>{
    const el=document.createElement('div');
    el.className='expandable';
    el.innerHTML=`<div class="exp-header"><span class="exp-chevron">▸</span>${renderHeader(item,i)}</div><div class="exp-body">${renderBody(item,i)}</div>`;
    el.addEventListener('click',e=>{if(e.target.closest('.exp-body'))return;el.classList.toggle('expanded');});
    container.appendChild(el);
  });
}

function renderTasks(){
  try{
    ['design','mix'].forEach(mode=>{
      const grid=$('tasks-'+mode);if(!grid)return;grid.innerHTML='';
      TASKS[mode].forEach(t=>{
        const btn=document.createElement('button');
        btn.className='task-btn '+(mode==='design'?'td':'tm');
        btn.dataset.sub=t.goto;
        if(t.open!==undefined)btn.dataset.open=t.open;
        btn.innerHTML=`<div class="task-label">${T(t.label)}</div><div class="task-hint">${T(t.hint)}</div><span class="task-arrow">→</span>`;
        grid.appendChild(btn);
      });
    });
  }catch(e){console.error('renderTasks:',e);}
}
function renderSynths(){try{const tiers={primary:'grid-primary',classic:'grid-classic',digital:'grid-digital',experimental:'grid-experimental',drums:'grid-drums'};for(const[key,gridId] of Object.entries(tiers)){const grid=$(gridId);if(!grid)continue;grid.innerHTML='';(SYNTHS[key]||[]).forEach(s=>{const chip=document.createElement('div');chip.className='synth-chip'+(s.priority?' priority':'');chip.innerHTML=`${s.name}<span class="chip-vendor">${s.vendor}</span>`;grid.appendChild(chip);});}}catch(e){console.error('renderSynths:',e);}}
function renderRoutes(){try{const c=$('routes-list');if(!c)return;makeExpandable(c,ROUTES,r=>`<div style="flex:1"><div class="exp-title">${T(r.name)}</div></div><span class="exp-meta">${T(r.role)}</span>`,r=>{const chain=r.chain.map(s=>`<span class="chain-step">${s}</span>`).join('<span class="chain-arrow">→</span>');return`<div class="route-chain">${chain}</div><div class="route-notes">${T(r.notes)}</div>`;});}catch(e){console.error('renderRoutes:',e);}}
function renderRecipes(){try{const c=$('recipes-list');if(!c)return;makeExpandable(c,RECIPES,r=>{const tags=r.tags.map(t=>`<span class="recipe-tag">${t}</span>`).join('');return`<div style="flex:1"><div class="exp-title">${T(r.name)}</div></div><div class="recipe-tags">${tags}</div>`;},r=>{const steps=T(r.steps);return steps.map((s,i)=>`<div class="recipe-step"><span class="step-num">${i+1}</span><div class="step-text">${s}</div></div>`).join('');});}catch(e){console.error('renderRecipes:',e);}}
function renderFX(){try{const c=$('fx-categories');if(!c)return;c.innerHTML='';FX_PALETTE.forEach(cat=>{const card=document.createElement('div');card.className='fx-category';card.innerHTML=`<div class="fx-cat-name">${T(cat.category)}</div><div class="fx-list">${cat.items.map(it=>`<div class="fx-item"><span class="fx-item-name">${it.name}</span><span class="fx-item-vendor">${it.vendor}</span></div>`).join('')}</div>`;c.appendChild(card);});}catch(e){console.error('renderFX:',e);}}
function renderMixCheck(){try{const c=$('mixcheck-zones');if(!c)return;makeExpandable(c,MIXCHECK_ZONES,z=>`<span class="mc-zone-freq">${z.freq}</span><div class="exp-title">${T(z.name)}</div>`,z=>`<div class="mc-listen-for">${T(z.listen)}</div><div class="mc-tools">${z.tools.map(t=>`<span class="mc-tool">${t}</span>`).join('')}</div>`);}catch(e){console.error('renderMixCheck:',e);}}
function renderChains(){try{const c=$('chains-list');if(!c)return;makeExpandable(c,MIX_CHAINS,ch=>`<div style="flex:1"><div class="exp-title">${T(ch.name)}</div></div><span class="exp-meta">${T(ch.purpose)}</span>`,ch=>ch.slots.map((s,i)=>`<div class="chain-slot"><span class="slot-num">${i+1}</span><span class="slot-plugin">${s.plugin}</span><span class="slot-setting">${T(s.setting)}</span></div>`).join(''));}catch(e){console.error('renderChains:',e);}}
function renderFinish(){try{const c=$('finish-groups');if(!c)return;c.innerHTML='';let total=0,checked=0;FINISH_GROUPS.forEach((g,gi)=>{const group=document.createElement('div');group.className='finish-group';let items='';g.items.forEach((item,ii)=>{const key=`${gi}-${ii}`,ch=finishState[key]||false;total++;if(ch)checked++;items+=`<div class="finish-item${ch?' checked':''}" data-key="${key}"><div class="finish-check">${ch?'✓':''}</div><span class="finish-label">${T(item)}</span></div>`;});group.innerHTML=`<div class="finish-group-name">${T(g.name)}</div>${items}`;c.appendChild(group);});c.querySelectorAll('.finish-item').forEach(item=>{item.addEventListener('click',()=>{const k=item.dataset.key;finishState[k]=!finishState[k];localStorage.setItem('kapman-finish',JSON.stringify(finishState));renderFinish();});});const pct=total>0?Math.round((checked/total)*100):0;const bar=$('finish-bar'),label=$('finish-pct');if(bar)bar.style.width=pct+'%';if(label)label.textContent=pct+'%';}catch(e){console.error('renderFinish:',e);}}
function renderFixIt(){try{const c=$('fixit-list');if(!c)return;makeExpandable(c,FIXIT_CARDS,f=>`<div class="exp-title fixit-problem">${T(f.problem)}</div>`,f=>`<div class="fixit-diagnosis">${T(f.diagnosis)}</div><div class="fixit-solution">${T(f.solution)}</div>`);}catch(e){console.error('renderFixIt:',e);}}
function renderInventory(){try{const c=$('inventory-grid'),countEl=$('inv-count'),filtersEl=$('vendor-filters');if(!c)return;if(filtersEl){filtersEl.innerHTML='';const allBtn=document.createElement('span');allBtn.className='vendor-filter'+(!activeVendorFilter?' active':'');allBtn.textContent=lang==='fr'?'Tous':'All';allBtn.addEventListener('click',()=>{activeVendorFilter=null;renderInventory();});filtersEl.appendChild(allBtn);Object.keys(INVENTORY).forEach(v=>{const btn=document.createElement('span');btn.className='vendor-filter'+(activeVendorFilter===v?' active':'');btn.textContent=v;btn.addEventListener('click',()=>{activeVendorFilter=activeVendorFilter===v?null:v;renderInventory();});filtersEl.appendChild(btn);});}const sv=($('inventory-search')?.value||'').toLowerCase();c.innerHTML='';let count=0;const vendors=activeVendorFilter?{[activeVendorFilter]:INVENTORY[activeVendorFilter]}:INVENTORY;for(const[vendor,plugins] of Object.entries(vendors)){const filtered=plugins.filter(p=>!sv||p.toLowerCase().includes(sv)||vendor.toLowerCase().includes(sv));if(!filtered.length)continue;const label=document.createElement('div');label.className='inv-vendor-name';label.textContent=vendor.toUpperCase();c.appendChild(label);filtered.forEach(p=>{const el=document.createElement('div');el.className='inv-plugin'+(PRIORITY_PLUGINS.has(p)?' priority-plugin':'');el.textContent=p;c.appendChild(el);count++;});}if(countEl)countEl.textContent=count;}catch(e){console.error('renderInventory:',e);}}
function renderRefs(){try{const c=$('refs-content');if(!c)return;c.innerHTML='';REFERENCES.forEach(ref=>{const card=document.createElement('div');card.className='ref-card';card.innerHTML=`<div class="ref-card-title">${T(ref.title)}</div>${ref.rows.map(r=>`<div class="ref-row"><span class="ref-key">${T(r.key)}</span><span class="ref-val">${T(r.val)}</span></div>`).join('')}`;c.appendChild(card);});}catch(e){console.error('renderRefs:',e);}}

function renderAll(){[renderTasks,renderSynths,renderRoutes,renderRecipes,renderFX,renderMixCheck,renderChains,renderFinish,renderFixIt,renderInventory,renderRefs].forEach(fn=>{try{fn();}catch(e){console.error(e);}});}

/* ============================================================
   INIT
   ============================================================ */
function init(){
  applyTheme();applyLang();initGate();initNav();initDrawer();initAudioCheck();renderAll();
  $('btn-lang').addEventListener('click',toggleLang);
  $('btn-theme').addEventListener('click',toggleTheme);
  const si=$('inventory-search');if(si)si.addEventListener('input',()=>renderInventory());
  const rb=$('finish-reset-btn');if(rb)rb.addEventListener('click',e=>{e.stopPropagation();finishState={};localStorage.setItem('kapman-finish','{}');renderFinish();});
}
document.addEventListener('DOMContentLoaded',init);
