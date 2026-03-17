const PASSWORD = "kapman";
// ↑ SINGLE source of truth. localStorage key: 'kapman-gate' → 'ok'

/* ═══════════════════════════════════════════
   i18n
   ═══════════════════════════════════════════ */
const i18n = {
  en: {
    gateTitle:"Studio",gateBody:"Private production toolkit. Enter your access code.",gatePlaceholder:"Access code",gateEnter:"→",gateHint:"Password is set in app.js line 1.",
    navHome:"Home",navLibrary:"Library",navSound:"Sound Design",navMix:"Mix Check",navFinish:"Finish",navFixit:"Fix-It",
    kpiPlugins:"plugins",kpiRecipes:"recipes",searchPlaceholder:"Search plugins, recipes…",
    heroEyebrow:"Private workflow cockpit",heroTitle:"Choose faster.<br/>Design deeper.<br/>Finish cleaner.",heroSub:"Plugin selection, sound design stacks, mix checks and finishing workflows — in one private toolkit.",heroBtnLibrary:"Open Library",heroBtnSound:"Sound Design",heroBtnMix:"Mix Check",heroStat1:"Selected stack",
    vendorsTitle:"Your vendors",vendorsSub:"Jump to a vendor's plugins",
    homeCard1Title:"Browse by role, not by brand",homeCard1Body:"One grid. Pick a role. Inspect details.",homeCard2Title:"Sound design stacks and recipes",homeCard2Body:"Short chains with stop rules.",homeCard3Title:"Measured signals, not guru talk",homeCard3Body:"Waveform, balance, stereo — client-side.",
    libraryEyebrow:"Plugin coverage",libraryTitle:"Library",inspectorEyebrow:"Inspector",inspectorTitle:"Select a plugin",inspectorBody:"Details appear here so the grid stays clean.",
    soundEyebrow:"Creative moves",soundTitle:"Sound Design",routeBandTitle:"All routes",routeBandSub:"One problem → one direction",recipesTitle:"All recipes",recipesSub:"Short stacks with a stop rule",
    sbGoalLabel:"Goal",sbConstraintLabel:"Constraint",sbNextBtn:"Next suggestion",sbRoute:"Route",sbRecipe:"Recipe",sbFirstMove:"First move",sbWhy:"Why it works",sbMistake:"Common mistake",sbStop:"Stop rule",sbNext:"Next experiment",
    mixEyebrow:"Measured only",mixTitle:"Mix Check",uploadTitle:"Drop audio — WAV / AIFF / MP3",uploadBody:"Client-side analysis. Nothing leaves your browser.",uploadBtn:"Choose file",
    metricPeak:"Peak",metricRms:"RMS",metricCrest:"Crest",metricLufs:"LUFS est.",metricCorr:"Correlation",
    finishEyebrow:"End game",finishTitle:"Finish",finishCard1:"Before export",finishCard2:"Reference pass",finishCard3:"Sound design sanity",
    pageHome:"Home",pageLibrary:"Library",pageSound:"Sound Design",pageMix:"Mix Check",pageFinish:"Finish",pageFixit:"Fix-It",
    wrongPassword:"Wrong password",
    bandsLow:"Low",bandsLowMid:"Low mids",bandsHighMid:"High mids",bandsHigh:"High",
    filterAll:"All",filterMix:"Mix",filterSound:"Sound",filterDynamics:"Dynamics",filterSpace:"Space",filterTone:"Tone",filterMotion:"Motion",filterInstrument:"Instrument",
    inspectorUse:"Best for",inspectorTouch:"Touch first",inspectorAvoid:"Avoid when",inspectorRole:"Role",inspectorMode:"Mode",inspectorRecipe:"Related recipe",vendorJump:"Open",stopRuleLabel:"Stop rule",
    finishA1:"Peak margin still below about -1 dBFS before mastering.",finishA2:"Kick and bass still read clearly at low volume.",finishA3:"No single FX throw steals the whole section.",finishA4:"Transitions still feel intentional with drums muted.",
    finishB1:"Compare against one reference, not five random tracks.",finishB2:"Check laptop speakers and mono after studio speakers.",finishB3:"Only correct what repeats as a problem twice.",finishB4:"If the top end feels impressive only when loud, re-check it.",
    finishC1:"Mute decorative layers one by one. Keep only what moves the track.",finishC2:"If one patch needs too much fixing, swap the source sooner.",finishC3:"Automate one macro hard, not six tiny moves everywhere.",finishC4:"Leave one signature texture per section, not three competing ones.",
    fixitEyebrow:"Symptom → solution",fixitTitle:"Fix-It Playbook",
    issueNone:"No triggered issues — metrics look reasonable.",issueNeedFile:"Load a file to get measured results.",uploadDone:"Audio loaded",
    insightWhy:"Why it matters",insightFix:"First move",insightStop:"Stop when",
    fixitCheck:"Check",fixitMoves:"Moves",fixitStopLabel:"Stop",fixitWhyLabel:"Why this happens",fixitOverdoLabel:"People often overdo",
    relatedFixits:"Related Fix-It cards",
    goalBass:"Bass",goalLead:"Lead",goalPad:"Pad",goalDrums:"Drums",goalTexture:"Texture",goalTransition:"Transition",
    conClean:"Clean",conGrit:"Grit",conMono:"Mono-safe",conWide:"Wide",conMoving:"Moving",conMinimal:"Minimal"
  },
  fr: {
    gateTitle:"Studio",gateBody:"Toolkit de production privé. Entre ton code d'accès.",gatePlaceholder:"Code d'accès",gateEnter:"→",gateHint:"Le mot de passe est défini dans app.js ligne 1.",
    navHome:"Accueil",navLibrary:"Bibliothèque",navSound:"Sound Design",navMix:"Mix Check",navFinish:"Finalisation",navFixit:"Fix-It",
    kpiPlugins:"plugins",kpiRecipes:"recettes",searchPlaceholder:"Chercher plugins, recettes…",
    heroEyebrow:"Cockpit de workflow privé",heroTitle:"Choisir plus vite.<br/>Designer plus profond.<br/>Finir plus propre.",heroSub:"Sélection de plugins, stacks de sound design, mix checks et workflows de finalisation — dans un seul toolkit privé.",heroBtnLibrary:"Ouvrir la bibliothèque",heroBtnSound:"Sound Design",heroBtnMix:"Mix Check",heroStat1:"Stack sélectionné",
    vendorsTitle:"Tes vendors",vendorsSub:"Accède vite aux plugins d'un vendor",
    homeCard1Title:"Navigue par rôle, pas par marque",homeCard1Body:"Une grille. Un rôle. Les détails dans l'inspecteur.",homeCard2Title:"Stacks de sound design et recettes",homeCard2Body:"Chaînes courtes avec règles d'arrêt.",homeCard3Title:"Des mesures, pas du guru talk",homeCard3Body:"Waveform, balance, stéréo — côté navigateur.",
    libraryEyebrow:"Couverture plugin",libraryTitle:"Bibliothèque",inspectorEyebrow:"Inspecteur",inspectorTitle:"Sélectionne un plugin",inspectorBody:"Les détails arrivent ici pour garder la grille propre.",
    soundEyebrow:"Moves créatifs",soundTitle:"Sound Design",routeBandTitle:"Toutes les routes",routeBandSub:"Un problème → une direction",recipesTitle:"Toutes les recettes",recipesSub:"Stacks courts avec règle d'arrêt",
    sbGoalLabel:"Objectif",sbConstraintLabel:"Contrainte",sbNextBtn:"Autre suggestion",sbRoute:"Route",sbRecipe:"Recette",sbFirstMove:"Premier geste",sbWhy:"Pourquoi ça marche",sbMistake:"Erreur fréquente",sbStop:"Règle d'arrêt",sbNext:"Prochain essai",
    mixEyebrow:"Mesures seulement",mixTitle:"Mix Check",uploadTitle:"Glisse ton audio — WAV / AIFF / MP3",uploadBody:"Analyse côté navigateur. Rien n'est envoyé.",uploadBtn:"Choisir un fichier",
    metricPeak:"Peak",metricRms:"RMS",metricCrest:"Crest",metricLufs:"LUFS est.",metricCorr:"Corrélation",
    finishEyebrow:"Dernière ligne droite",finishTitle:"Finalisation",finishCard1:"Avant export",finishCard2:"Passage référence",finishCard3:"Sanity check sound design",
    pageHome:"Accueil",pageLibrary:"Bibliothèque",pageSound:"Sound Design",pageMix:"Mix Check",pageFinish:"Finalisation",pageFixit:"Fix-It",
    wrongPassword:"Mauvais mot de passe",
    bandsLow:"Grave",bandsLowMid:"Bas médiums",bandsHighMid:"Hauts médiums",bandsHigh:"Aigu",
    filterAll:"Tout",filterMix:"Mix",filterSound:"Sound",filterDynamics:"Dynamique",filterSpace:"Espace",filterTone:"Tonalité",filterMotion:"Mouvement",filterInstrument:"Instrument",
    inspectorUse:"Idéal pour",inspectorTouch:"À toucher d'abord",inspectorAvoid:"À éviter quand",inspectorRole:"Rôle",inspectorMode:"Mode",inspectorRecipe:"Recette liée",vendorJump:"Ouvrir",stopRuleLabel:"Règle d'arrêt",
    finishA1:"La marge peak reste environ sous -1 dBFS avant le master.",finishA2:"Kick et basse restent lisibles à bas volume.",finishA3:"Aucun FX throw ne vole toute la section.",finishA4:"Les transitions restent intentionnelles même sans les drums.",
    finishB1:"Compare à une seule référence, pas cinq morceaux au hasard.",finishB2:"Check laptop et mono après les enceintes studio.",finishB3:"Ne corrige que ce qui revient deux fois comme problème.",finishB4:"Si l'aigu impressionne seulement fort, recheck-le.",
    finishC1:"Mute les couches décoratives une par une. Garde seulement ce qui pousse le morceau.",finishC2:"Si un patch demande trop de chirurgie, change de source plus tôt.",finishC3:"Automatise un macro fort, pas six micro moves partout.",finishC4:"Garde une texture signature par section, pas trois qui se battent.",
    fixitEyebrow:"Symptôme → solution",fixitTitle:"Fix-It Playbook",
    issueNone:"Aucune alerte — les métriques semblent raisonnables.",issueNeedFile:"Charge un fichier pour obtenir des résultats.",uploadDone:"Audio chargé",
    insightWhy:"Pourquoi c'est important",insightFix:"Premier geste",insightStop:"Stop quand",
    fixitCheck:"Vérifier",fixitMoves:"Gestes",fixitStopLabel:"Stop",fixitWhyLabel:"Pourquoi ça arrive",fixitOverdoLabel:"Ce qu'on fait trop souvent",
    relatedFixits:"Fiches Fix-It liées",
    goalBass:"Basse",goalLead:"Lead",goalPad:"Pad",goalDrums:"Drums",goalTexture:"Texture",goalTransition:"Transition",
    conClean:"Clean",conGrit:"Grit",conMono:"Mono-safe",conWide:"Wide",conMoving:"Moving",conMinimal:"Minimal"
  }
};

/* ═══ VENDORS ═══ */
const vendors = [
  {id:'fabfilter',mark:'FF',name:'FabFilter',color:'#7ea7ff'},
  {id:'d16',mark:'D16',name:'D16 Group',color:'#ff8b6e'},
  {id:'eventide',mark:'EV',name:'Eventide',color:'#8d83ff'},
  {id:'xfer',mark:'XF',name:'Xfer Records',color:'#76f2c6'},
  {id:'baby-audio',mark:'BA',name:'Baby Audio',color:'#ff7fb7'},
  {id:'uhe',mark:'UH',name:'u-he',color:'#b695e6'},
  {id:'arturia',mark:'AR',name:'Arturia',color:'#5cc5e6'},
  {id:'valhalla',mark:'VL',name:'Valhalla DSP',color:'#6dd69e'},
  {id:'izotope',mark:'IZ',name:'iZotope',color:'#5ce6a5'},
  {id:'cableguys',mark:'CG',name:'Cableguys',color:'#5c9ee6'},
  {id:'devious',mark:'DM',name:'Devious Machines',color:'#e65c5c'},
  {id:'korg',mark:'KG',name:'KORG',color:'#ccc65c'}
];

/* ═══ PLUGINS ═══ */
const plugins = [
  // FabFilter
  {id:'ff-proq4',vendor:'fabfilter',name:'Pro-Q 4',roleEn:'surgical EQ',roleFr:'EQ chirurgical',mode:'mix',tags:['tone','mix'],useEn:'cut mud, shape harshness, dynamic control',useFr:'couper la boue, calmer la dureté, contrôle dynamique',touchEn:'250–400 Hz, 2–5 kHz, dynamic bands',touchFr:'250–400 Hz, 2–5 kHz, bandes dynamiques',avoidEn:'you still do not know what the source should be',avoidFr:'tu ne sais pas encore ce que la source doit être',recipe:'Dark Bass Cleanup',glow:'#7ea7ff'},
  {id:'ff-proc3',vendor:'fabfilter',name:'Pro-C 3',roleEn:'compressor',roleFr:'compresseur',mode:'mix',tags:['dynamics','mix'],useEn:'tight buses, add punch, level control',useFr:'resserrer les bus, ajouter du punch',touchEn:'style, attack, release, lookahead',touchFr:'style, attaque, release, lookahead',avoidEn:'you only want louder, not tighter',avoidFr:'tu veux juste plus fort, pas plus tight',recipe:'Drum Weight Bus',glow:'#7ea7ff'},
  {id:'ff-prol2',vendor:'fabfilter',name:'Pro-L 2',roleEn:'limiter',roleFr:'limiteur',mode:'mix',tags:['dynamics','mix'],useEn:'preview loudness, catch peaks',useFr:'prévisualiser le niveau, attraper les pics',touchEn:'style, attack, lookahead, true peak',touchFr:'style, attaque, lookahead, true peak',avoidEn:'you are still changing the arrangement',avoidFr:'tu changes encore l\'arrangement',recipe:'Pre-master Sanity',glow:'#7ea7ff'},
  {id:'ff-pror2',vendor:'fabfilter',name:'Pro-R 2',roleEn:'reverb',roleFr:'reverb',mode:'sound',tags:['space','sound'],useEn:'clean modern space, controlled width',useFr:'espace moderne propre, largeur contrôlée',touchEn:'distance, brightness, ducking',touchFr:'distance, brightness, ducking',avoidEn:'you want a very dirty vintage tail',avoidFr:'tu veux une queue sale et vintage',recipe:'Clean Modern Space',glow:'#7ea7ff'},
  {id:'ff-saturn2',vendor:'fabfilter',name:'Saturn 2',roleEn:'saturation & movement',roleFr:'saturation & mouvement',mode:'sound',tags:['tone','motion','sound'],useEn:'growl, grit, harmonic lift, macro movement',useFr:'growl, grit, lift harmonique, mouvement macro',touchEn:'band split, drive tone, dynamics, modulation',touchFr:'split bands, tone du drive, dynamique, modulation',avoidEn:'the sound is already too busy in the mids',avoidFr:'le son est déjà trop chargé dans les mids',recipe:'Indie Drive Lead',glow:'#7ea7ff'},
  {id:'ff-timeless3',vendor:'fabfilter',name:'Timeless 3',roleEn:'modulated delay',roleFr:'delay modulé',mode:'sound',tags:['space','motion','sound'],useEn:'throws, movement, evolving repeats',useFr:'throws, mouvement, répétitions évolutives',touchEn:'filter, feedback, diffusion, modulation',touchFr:'filtre, feedback, diffusion, modulation',avoidEn:'the groove is already too smeared',avoidFr:'le groove est déjà trop flou',recipe:'Break Tension Throw',glow:'#7ea7ff'},
  {id:'ff-volcano3',vendor:'fabfilter',name:'Volcano 3',roleEn:'filter motion',roleFr:'filtre en mouvement',mode:'sound',tags:['motion','sound'],useEn:'animated filter design and sweeps',useFr:'design filtré animé et sweeps',touchEn:'XLFO, envelope, drive, stereo',touchFr:'XLFO, envelope, drive, stéréo',avoidEn:'you just need static cleanup EQ',avoidFr:'tu as juste besoin d\'un EQ fixe',recipe:'Movement Filter Lane',glow:'#7ea7ff'},
  {id:'ff-prods',vendor:'fabfilter',name:'Pro-DS',roleEn:'de-esser',roleFr:'de-esser',mode:'mix',tags:['tone','mix'],useEn:'calm sharp hats, vocals, bright synth edges',useFr:'calmer hats agressifs, voix, bords brillants',touchEn:'wide band, threshold, range',touchFr:'wide band, threshold, range',avoidEn:'the issue is broad harshness',avoidFr:'le problème est une dureté large',recipe:'Top-End Taming',glow:'#7ea7ff'},
  {id:'ff-promb',vendor:'fabfilter',name:'Pro-MB',roleEn:'multiband dynamics',roleFr:'dynamique multibande',mode:'mix',tags:['dynamics','mix'],useEn:'contain low mids, tame resonant ranges',useFr:'tenir les bas médiums, calmer les zones résonantes',touchEn:'range, attack, release, knee',touchFr:'range, attaque, release, knee',avoidEn:'you do not know the trouble band yet',avoidFr:'tu n\'as pas identifié la bande problème',recipe:'Muddy Mix Rescue',glow:'#7ea7ff'},
  {id:'ff-prog',vendor:'fabfilter',name:'Pro-G',roleEn:'gate/expander',roleFr:'gate/expander',mode:'mix',tags:['dynamics','mix'],useEn:'tighten noise, sharper drum tails',useFr:'nettoyer le bruit, queues de drums plus nettes',touchEn:'range, hysteresis, sidechain',touchFr:'range, hysteresis, sidechain',avoidEn:'the source needs room, not chopping',avoidFr:'la source a besoin d\'air',recipe:'Tight Drum Tail',glow:'#7ea7ff'},
  {id:'ff-twin3',vendor:'fabfilter',name:'Twin 3',roleEn:'modular synth',roleFr:'synth modulable',mode:'sound',tags:['instrument','sound'],useEn:'clean modern synths with deep modulation',useFr:'synths modernes propres avec modulation profonde',touchEn:'filter shape, env amount, XLFO',touchFr:'forme du filtre, amount d\'env, lanes XLFO',avoidEn:'you want instant nostalgic color',avoidFr:'tu veux une couleur nostalgique immédiate',recipe:'Glass Motion Keys',glow:'#7ea7ff'},
  {id:'ff-one',vendor:'fabfilter',name:'One',roleEn:'simple mono synth',roleFr:'synth mono simple',mode:'sound',tags:['instrument','sound'],useEn:'fast basses, utility tones, minimal hooks',useFr:'basses rapides, tons utilitaires, hooks minimaux',touchEn:'filter, drive, env amount',touchFr:'filtre, drive, env amount',avoidEn:'you need massive wavetable movement',avoidFr:'tu as besoin d\'un gros mouvement wavetable',recipe:'Minimal Mono Hook',glow:'#7ea7ff'},
  // D16
  {id:'d16-drumazon2',vendor:'d16',name:'Drumazon 2',roleEn:'909 drum machine',roleFr:'boîte à rythmes 909',mode:'sound',tags:['instrument','sound'],useEn:'punchy club drums, machine grooves',useFr:'drums club punchy, groove machine',touchEn:'decay, tuning, groove, bus drive',touchFr:'decay, tuning, groove, drive de bus',avoidEn:'you need organic human drums',avoidFr:'tu veux des drums organiques',recipe:'909 Pressure Loop',glow:'#ff8b6e'},
  {id:'d16-nepheton2',vendor:'d16',name:'Nepheton 2',roleEn:'808 drum machine',roleFr:'boîte à rythmes 808',mode:'sound',tags:['instrument','sound'],useEn:'boomy kicks and classic machine percussion',useFr:'kicks ronds et percussions machine',touchEn:'tone, snappy, sub length',touchFr:'tone, snappy, longueur du sub',avoidEn:'you want modern click-heavy kicks only',avoidFr:'tu veux seulement des kicks modernes clickés',recipe:'808 Foundation',glow:'#ff8b6e'},
  {id:'d16-nithonat2',vendor:'d16',name:'Nithonat 2',roleEn:'606 drum machine',roleFr:'boîte à rythmes 606',mode:'sound',tags:['instrument','sound'],useEn:'lighter hats and agile percs',useFr:'hats plus légers et percs agiles',touchEn:'accent, tuning, decay',touchFr:'accent, tuning, decay',avoidEn:'you need oversized festival drums',avoidFr:'tu veux des drums énormes festival',recipe:'Minimal Perc Frame',glow:'#ff8b6e'},
  {id:'d16-phoscyon2',vendor:'d16',name:'Phoscyon 2',roleEn:'303 acid line',roleFr:'ligne acid 303',mode:'sound',tags:['instrument','sound'],useEn:'acid hooks and squelchy movement',useFr:'hooks acid et mouvement squelchy',touchEn:'accent, slide, distortion, env mod',touchFr:'accent, slide, distortion, env mod',avoidEn:'you need a wide lush lead',avoidFr:'tu veux un lead large et lush',recipe:'Acid Motion Lead',glow:'#ff8b6e'},
  {id:'d16-punchbox',vendor:'d16',name:'PunchBox',roleEn:'kick designer',roleFr:'designer de kick',mode:'sound',tags:['instrument','sound'],useEn:'layered club kicks fast',useFr:'kicks club layerés rapidement',touchEn:'click, body, sub, limiter',touchFr:'click, body, sub, limiteur',avoidEn:'you already have a perfect kick sample',avoidFr:'tu as déjà un sample parfait',recipe:'Kick Build Fast',glow:'#ff8b6e'},
  {id:'d16-decimort2',vendor:'d16',name:'Decimort 2',roleEn:'bit crusher',roleFr:'bit crusher',mode:'sound',tags:['tone','sound'],useEn:'digital grit and old sampler edge',useFr:'grit digital et edge vieux sampler',touchEn:'jitter, resample, anti-alias',touchFr:'jitter, resample, anti-alias',avoidEn:'the source is already brittle',avoidFr:'la source est déjà cassante',recipe:'Lo-Fi Spark',glow:'#ff8b6e'},
  {id:'d16-redoptor2',vendor:'d16',name:'Redoptor 2',roleEn:'tube distortion',roleFr:'distorsion lampes',mode:'sound',tags:['tone','sound'],useEn:'rich harmonic aggression on basses and drums',useFr:'agressivité harmonique riche sur basses et drums',touchEn:'preamp, EQ, dynamics',touchFr:'preamp, EQ, dynamique',avoidEn:'you only need subtle glue',avoidFr:'tu veux juste une colle subtile',recipe:'Dirty Bass Pressure',glow:'#ff8b6e'},
  {id:'d16-sigmund2',vendor:'d16',name:'Sigmund 2',roleEn:'creative delay',roleFr:'delay créatif',mode:'sound',tags:['space','motion','sound'],useEn:'rhythmic space, modulation chaos, reverse',useFr:'espace rythmique, chaos modulé, reverse',touchEn:'multi-tap timing, filter, mod matrix',touchFr:'timing multi-tap, filtre, matrice de mod',avoidEn:'you need a one-knob utility echo',avoidFr:'tu veux un simple écho utilitaire',recipe:'Wide Delay Maze',glow:'#ff8b6e'},
  {id:'d16-repeater',vendor:'d16',name:'Repeater',roleEn:'modeled delay',roleFr:'delay modélisé',mode:'sound',tags:['space','sound'],useEn:'vintage delay flavor with flexible stereo',useFr:'flaveur delay vintage avec stéréo flexible',touchEn:'delay model, tone, spread',touchFr:'modèle, tone, spread',avoidEn:'you need shimmer or huge modulation',avoidFr:'tu as besoin de shimmer ou grosse mod',recipe:'Vintage Throw Lane',glow:'#ff8b6e'},
  {id:'d16-toraverb2',vendor:'d16',name:'Toraverb 2',roleEn:'algorithmic reverb',roleFr:'reverb algorithmique',mode:'sound',tags:['space','sound'],useEn:'lush synthetic rooms for dark material',useFr:'pièces synthétiques lush pour matière dark',touchEn:'mod depth, diffusion, EQ',touchFr:'profondeur de mod, diffusion, EQ',avoidEn:'you need a super clean modern room',avoidFr:'tu veux une room moderne ultra propre',recipe:'Dark Hall Tail',glow:'#ff8b6e'},
  {id:'d16-fazortan2',vendor:'d16',name:'Fazortan 2',roleEn:'phaser',roleFr:'phaser',mode:'sound',tags:['motion','sound'],useEn:'moving midrange and animated width',useFr:'mids mouvants et largeur animée',touchEn:'rate, feedback, spread',touchFr:'rate, feedback, spread',avoidEn:'the part already masks the vocal band',avoidFr:'la partie masque déjà la zone voix',recipe:'Moving Texture Lane',glow:'#ff8b6e'},
  {id:'d16-frontier',vendor:'d16',name:'Frontier',roleEn:'limiter/compressor',roleFr:'limiteur/compresseur',mode:'mix',tags:['dynamics','mix'],useEn:'fast peak catch on buses',useFr:'attraper vite les pics sur les bus',touchEn:'thump, release, output',touchFr:'thump, release, output',avoidEn:'you need transparent mastering only',avoidFr:'tu veux de la transparence mastering',recipe:'Bus Safety',glow:'#ff8b6e'},
  {id:'d16-godfazer',vendor:'d16',name:'Godfazer',roleEn:'multi-FX motion',roleFr:'multi-FX mouvement',mode:'sound',tags:['motion','sound'],useEn:'filter, modulation and shimmer on one lane',useFr:'filtre, modulation et shimmer sur une lane',touchEn:'sequencer, drive, mod routing',touchFr:'séquenceur, drive, routage mod',avoidEn:'you only want one static effect',avoidFr:'tu veux un seul effet statique',recipe:'FX Motion Strip',glow:'#ff8b6e'},
  // Eventide
  {id:'ev-blackhole',vendor:'eventide',name:'Blackhole',roleEn:'huge reverb',roleFr:'reverb immense',mode:'sound',tags:['space','sound'],useEn:'epic non-natural tails, void atmospheres',useFr:'queues épiques, atmosphères abyssales',touchEn:'gravity, size, feedback',touchFr:'gravity, size, feedback',avoidEn:'you need a small realistic room',avoidFr:'tu as besoin d\'une petite room réaliste',recipe:'Void Atmos Tail',glow:'#8d83ff'},
  {id:'ev-micropitch',vendor:'eventide',name:'MicroPitch',roleEn:'micro shift width',roleFr:'largeur micro shift',mode:'sound',tags:['space','sound'],useEn:'instant wideners, detuned gloss',useFr:'élargir vite, gloss désaccordé',touchEn:'detune, delay, mix',touchFr:'detune, delay, mix',avoidEn:'the part collapses badly in mono',avoidFr:'la partie s\'écroule mal en mono',recipe:'Wide Lead Edge',glow:'#8d83ff'},
  {id:'ev-h3000',vendor:'eventide',name:'H3000 Factory Mk II',roleEn:'multi-FX pitch machine',roleFr:'machine pitch multi-FX',mode:'sound',tags:['motion','sound'],useEn:'wild pitch motion, vintage digital weirdness',useFr:'mouvement pitch sauvage, étrangeté digitale',touchEn:'micro pitch, delays, modulation',touchFr:'micro pitch, delays, modulation',avoidEn:'you want a fast clean utility',avoidFr:'tu veux un effet utilitaire propre',recipe:'Hook Mutation',glow:'#8d83ff'},
  {id:'ev-crystals',vendor:'eventide',name:'Crystals',roleEn:'pitch-shift delay',roleFr:'delay pitch-shift',mode:'sound',tags:['space','sound'],useEn:'angelic rises, glassy throws',useFr:'montées angéliques, throws brillants',touchEn:'pitch interval, reverse, feedback',touchFr:'intervalle, reverse, feedback',avoidEn:'the section has too much top shine',avoidFr:'la section a trop de brillance',recipe:'Dream Throw',glow:'#8d83ff'},
  {id:'ev-ultratap',vendor:'eventide',name:'UltraTap',roleEn:'multi-tap designer',roleFr:'designer multi-tap',mode:'sound',tags:['space','motion','sound'],useEn:'rhythmic splashes and swelling echoes',useFr:'échos rythmiques et splashes',touchEn:'spread, slurm, taps',touchFr:'spread, slurm, taps',avoidEn:'you just need one clean slap',avoidFr:'tu veux juste un slap clean',recipe:'Swarm Throw',glow:'#8d83ff'},
  {id:'ev-spliteq',vendor:'eventide',name:'SplitEQ',roleEn:'transient/tonal EQ',roleFr:'EQ transient/tonal',mode:'mix',tags:['tone','mix'],useEn:'separate attack and body',useFr:'séparer attaque et corps',touchEn:'transient split, dynamic bands',touchFr:'split transient, bandes dynamiques',avoidEn:'you need a fast broad EQ only',avoidFr:'tu as juste besoin d\'un EQ large',recipe:'Attack Body Separation',glow:'#8d83ff'},
  {id:'ev-physion',vendor:'eventide',name:'Physion Mk II',roleEn:'structural split FX',roleFr:'FX séparation structurelle',mode:'sound',tags:['motion','sound'],useEn:'treat attack and sustain differently',useFr:'traiter attaque et sustain différemment',touchEn:'split sensitivity, delay sustain, drive transient',touchFr:'sensibilité split, delay sustain, drive transient',avoidEn:'the source is already too unstable',avoidFr:'la source est déjà trop instable',recipe:'Transient Motion FX',glow:'#8d83ff'},
  {id:'ev-sp2016',vendor:'eventide',name:'SP2016 Reverb',roleEn:'classic reverb',roleFr:'reverb classique',mode:'sound',tags:['space','sound'],useEn:'bigger but familiar classic spaces',useFr:'espaces plus grands mais familiers',touchEn:'room type, decay, pre-delay',touchFr:'type de room, decay, pre-delay',avoidEn:'you want a futuristic synthetic wash',avoidFr:'tu veux un wash synthétique futuriste',recipe:'Classic Hall Weight',glow:'#8d83ff'},
  {id:'ev-omnipressor',vendor:'eventide',name:'Omnipressor',roleEn:'character dynamics',roleFr:'dynamique de caractère',mode:'mix',tags:['dynamics','mix'],useEn:'aggressive pump, flatten, exaggerate',useFr:'pump agressif, aplatir, exagérer',touchEn:'function, attack, release',touchFr:'function, attaque, release',avoidEn:'you need transparent control',avoidFr:'tu veux du contrôle transparent',recipe:'Violent Drum Clamp',glow:'#8d83ff'},
  {id:'ev-shimmerverb',vendor:'eventide',name:'ShimmerVerb',roleEn:'shimmer reverb',roleFr:'shimmer reverb',mode:'sound',tags:['space','sound'],useEn:'airy lifted tails and harmonic bloom',useFr:'queues aériennes et bloom harmonique',touchEn:'shimmer, diffusion, EQ',touchFr:'shimmer, diffusion, EQ',avoidEn:'too much brightness already',avoidFr:'l\'arrangement a déjà trop de brillant',recipe:'Lifted Dream Tail',glow:'#8d83ff'},
  // Xfer
  {id:'xf-serum',vendor:'xfer',name:'Serum',roleEn:'wavetable synth',roleFr:'synth wavetable',mode:'sound',tags:['instrument','sound'],useEn:'modern basses, plucks, precise modulation',useFr:'basses modernes, plucks, modulation précise',touchEn:'wavetable position, filter drive, macros',touchFr:'position wavetable, drive filtre, macros',avoidEn:'you need instant analog nostalgia',avoidFr:'tu veux de la nostalgie analog immédiate',recipe:'Modern Bass Engine',glow:'#76f2c6'},
  {id:'xf-serumfx',vendor:'xfer',name:'Serum FX',roleEn:'multi-FX rack',roleFr:'rack multi-FX',mode:'sound',tags:['motion','sound'],useEn:'post-synth movement, OTT-style FX chains',useFr:'mouvement post-synth, chaînes FX façon OTT',touchEn:'hyper, dimension, filter, compressor',touchFr:'hyper, dimension, filtre, compresseur',avoidEn:'the source needs cleaner correction first',avoidFr:'la source demande une correction plus propre',recipe:'Hyper Width Lane',glow:'#76f2c6'},
  // Baby Audio — COMPLETE (4 new + existing)
  {id:'ba-ba1',vendor:'baby-audio',name:'BA-1',roleEn:'analog-modeled synth',roleFr:'synth analog-modélisé',mode:'sound',tags:['instrument','sound','tone'],useEn:'fast retro-leaning patches; Re-Gen for musically tuned variations; onboard color/FX section',useFr:'patches rétro rapides; Re-Gen pour variations musicales; section couleur/FX intégrée',touchEn:'Re-Gen for direction, then filter/tone, subtle drive/speaker color',touchFr:'Re-Gen pour direction, puis filtre/tonalité, drive/speaker subtil',avoidEn:'you need an ultra-clean modern clinical synth',avoidFr:'tu veux un synth ultra-clean moderne et clinique',recipe:'BA-1 Hook Builder',glow:'#ff7fb7'},
  {id:'ba-ba1fx',vendor:'baby-audio',name:'BA-1 FX Strip',roleEn:'retro FX strip (80s character)',roleFr:'FX strip rétro (caractère 80s)',mode:'sound',tags:['tone','sound','motion'],useEn:'compact retro FX chain: drive/filter/color moves without long chains',useFr:'chaîne FX rétro compacte: drive/filtre/couleur sans grosse chaîne',touchEn:'drive first (subtle), then resonant LP for contour; chorus/delay with care',touchFr:'drive d\'abord (subtil), puis LP résonant pour forme; chorus/delay avec prudence',avoidEn:'stacking on already heavily colored buses',avoidFr:'empiler sur des bus déjà très colorés',recipe:'BA-1 FX Strip Drum Dirt',glow:'#ff7fb7'},
  {id:'ba-crystalline',vendor:'baby-audio',name:'Crystalline',roleEn:'modern algorithmic reverb',roleFr:'reverb algorithmique moderne',mode:'sound',tags:['space','sound','motion'],useEn:'clean lush space with tempo-sync; ducking/filters/imaging + freeze/shimmer/reverse',useFr:'espace clean et lush, calé tempo; ducking/filtres/imaging + freeze/shimmer/reverse',touchEn:'sync pre-delay/decay to tempo; enable ducking; tame low-end on return',touchFr:'cale pre-delay/decay au tempo; active ducking; tame le bas sur le return',avoidEn:'you need purely natural room realism',avoidFr:'tu veux du réalisme room naturel pur',recipe:'Crystalline Tempo Space',glow:'#ff7fb7'},
  {id:'ba-supervhs',vendor:'baby-audio',name:'Super VHS',roleEn:'lo-fi retro color multi-FX',roleFr:'multi-FX couleur lo-fi rétro',mode:'sound',tags:['tone','sound','motion'],useEn:'six one-knob modules: Static/Heat/Shape/Magic/Drift/Wash. Best for transitions and textures.',useFr:'six modules one-knob: Static/Heat/Shape/Magic/Drift/Wash. Idéal transitions et textures.',touchEn:'pick ONE main module first (Heat OR Drift); add second only if it clearly helps',touchFr:'choisis UN module d\'abord (Heat OU Drift); ajoute un second seulement si clair bénéfice',avoidEn:'on sub/bass fundamentals unless intentionally destroying',avoidFr:'sur fondamentales sub/bass sauf destruction volontaire',recipe:'Super VHS Transition Fill',glow:'#ff7fb7'},
  {id:'ba-smooth',vendor:'baby-audio',name:'Smooth Operator',roleEn:'spectral balancer',roleFr:'équilibreur spectral',mode:'mix',tags:['tone','mix'],useEn:'fast cleanup of resonant harshness',useFr:'nettoyage rapide des résonances agressives',touchEn:'focus, threshold, sidechain',touchFr:'focus, threshold, sidechain',avoidEn:'the source is dull, not harsh',avoidFr:'la source est terne, pas agressive',recipe:'Harshness Fast Fix',glow:'#ff7fb7'},
  {id:'ba-comeback',vendor:'baby-audio',name:'Comeback Kid',roleEn:'character delay',roleFr:'delay à caractère',mode:'sound',tags:['space','sound'],useEn:'musical delay with quick vibe',useFr:'delay musical avec vibe rapide',touchEn:'drive, duck, width',touchFr:'drive, duck, largeur',avoidEn:'you need deep modulation routing',avoidFr:'tu veux un routage de mod profond',recipe:'Simple Throw Fast',glow:'#ff7fb7'},
  {id:'ba-taip',vendor:'baby-audio',name:'TAIP',roleEn:'tape saturator',roleFr:'saturation bande',mode:'sound',tags:['tone','sound'],useEn:'soften transients and add vintage push',useFr:'adoucir les transients, push vintage',touchEn:'presence, glue, noise',touchFr:'presence, glue, bruit',avoidEn:'you already lost too much clarity',avoidFr:'tu as perdu trop de clarté',recipe:'Tape Heat Layer',glow:'#ff7fb7'},
  {id:'ba-transit2',vendor:'baby-audio',name:'Transit 2',roleEn:'transition designer',roleFr:'designer de transition',mode:'sound',tags:['motion','sound'],useEn:'macro transitions without ten automations',useFr:'transitions macro sans dix automations',touchEn:'multi-effect chain, macro curve',touchFr:'chaîne multi-effets, courbe macro',avoidEn:'the section already has enough movement',avoidFr:'la section a déjà assez de mouvement',recipe:'Break Builder Fast',glow:'#ff7fb7'},
  {id:'ba-grainferno',vendor:'baby-audio',name:'Grainferno',roleEn:'granular instrument',roleFr:'instrument granulaire',mode:'sound',tags:['instrument','sound'],useEn:'textures, risers, tuned grains, evolving beds',useFr:'textures, risers, grains accordés, beds évolutifs',touchEn:'grain rate, pitch mode, density',touchFr:'rate des grains, mode de pitch, densité',avoidEn:'you need immediate clean mono leads',avoidFr:'tu veux des leads mono propres immédiats',recipe:'Granular Bed Maker',glow:'#ff7fb7'},
  {id:'ba-tekno',vendor:'baby-audio',name:'Tekno',roleEn:'drum synth',roleFr:'drum synth',mode:'sound',tags:['instrument','sound'],useEn:'synthetic drums without samples',useFr:'drums synthétiques sans samples',touchEn:'engine choice, transient, sequencer',touchFr:'choix d\'engine, transient, séquenceur',avoidEn:'you already have a strong sample-based kit',avoidFr:'tu as déjà un kit sample fort',recipe:'Synth Drum Sketch',glow:'#ff7fb7'},
  // u-he
  {id:'uh-diva',vendor:'uhe',name:'Diva',roleEn:'analog polysynth',roleFr:'polysynth analogique',mode:'sound',tags:['instrument','sound'],useEn:'basses, leads, pads — five osc models, five ZDF filters',useFr:'basses, leads, pads — cinq osc, cinq filtres ZDF',touchEn:'osc model, filter model, cutoff, env2, drift, accuracy',touchFr:'modèle osc, filtre, cutoff, env2, drift, accuracy',avoidEn:'you need wavetable or FM',avoidFr:'tu as besoin de wavetable ou FM',recipe:'Dark Sub Architect',glow:'#b695e6'},
  // Arturia
  {id:'ar-cs80',vendor:'arturia',name:'CS-80 V4',roleEn:'expressive polysynth',roleFr:'polysynth expressif',mode:'sound',tags:['instrument','sound'],useEn:'dramatic pads, expressive leads with aftertouch',useFr:'pads dramatiques, leads expressifs',touchEn:'brilliance, ring mod off, aftertouch→cutoff',touchFr:'brilliance, ring mod off, aftertouch→cutoff',avoidEn:'you need a simple mono bass',avoidFr:'tu veux une basse mono simple',recipe:'Blade Runner Wash',glow:'#5cc5e6'},
  {id:'ar-jup8',vendor:'arturia',name:'Jup-8 V4',roleEn:'lush polysynth',roleFr:'polysynth lush',mode:'sound',tags:['instrument','sound'],useEn:'warm pads, sync leads, built-in chorus signature',useFr:'pads chauds, leads sync, chorus signature',touchEn:'osc sync, pulse width, chorus mode, HPF',touchFr:'sync osc, pulse width, chorus mode, HPF',avoidEn:'you want a dark aggressive timbre',avoidFr:'tu veux un timbre dark agressif',recipe:'Silk Pad',glow:'#5cc5e6'},
  {id:'ar-miniv3',vendor:'arturia',name:'Mini V3',roleEn:'mono bass king',roleFr:'roi de la basse mono',mode:'sound',tags:['instrument','sound'],useEn:'fat mono basses, 3 osc, built-in overdrive',useFr:'basses mono grasses, 3 osc, overdrive',touchEn:'osc mix, cutoff, emphasis, contour, glide',touchFr:'mix osc, cutoff, emphasis, contour, glide',avoidEn:'you need polyphony',avoidFr:'tu as besoin de polyphonie',recipe:'Mono Beast Bass',glow:'#5cc5e6'},
  {id:'ar-pigments',vendor:'arturia',name:'Pigments',roleEn:'hybrid synth',roleFr:'synth hybride',mode:'sound',tags:['instrument','sound'],useEn:'granular textures, wavetable+VA, deep mod matrix',useFr:'textures granulaires, wavetable+VA, matrice de mod',touchEn:'engine per osc, granular position, mod matrix',touchFr:'engine par osc, position granulaire, matrice de mod',avoidEn:'you need instant vintage analog',avoidFr:'tu veux du vintage analog immédiat',recipe:'Granular Texture Bed',glow:'#5cc5e6'},
  {id:'ar-minifreak',vendor:'arturia',name:'MiniFreak V',roleEn:'hybrid lead',roleFr:'lead hybride',mode:'sound',tags:['instrument','sound'],useEn:'textured leads: digital osc + analog filter',useFr:'leads texturés: osc digital + filtre analog',touchEn:'osc engine, filter, FX, mod matrix',touchFr:'engine osc, filtre, FX, matrice de mod',avoidEn:'you want clean classic analog only',avoidFr:'tu veux uniquement de l\'analog classique',recipe:'Freak Texture Lead',glow:'#5cc5e6'},
  {id:'ar-dx7',vendor:'arturia',name:'DX7 V',roleEn:'FM synth',roleFr:'synth FM',mode:'sound',tags:['instrument','sound'],useEn:'electric basses, bells, metallic textures via FM',useFr:'basses electriques, cloches, textures FM',touchEn:'algorithm, operator ratios, mod index',touchFr:'algorithme, ratios, index de mod',avoidEn:'you need warm subtractive analog',avoidFr:'tu veux du soustractif analog chaud',recipe:'FM Electric Bass',glow:'#5cc5e6'},
  {id:'ar-prophet5',vendor:'arturia',name:'Prophet-5 V',roleEn:'classic polysynth',roleFr:'polysynth classique',mode:'sound',tags:['instrument','sound'],useEn:'thick pads, 80s textures, poly-mod animation',useFr:'pads épais, textures 80s, animation poly-mod',touchEn:'poly-mod, filter env, pulse width',touchFr:'poly-mod, filter env, pulse width',avoidEn:'you need more than 5 voices',avoidFr:'tu as besoin de plus de 5 voix',recipe:'Prophet Atmosphere',glow:'#5cc5e6'},
  {id:'ar-sem',vendor:'arturia',name:'SEM V2',roleEn:'multimode filter bass',roleFr:'basse filtre multimode',mode:'sound',tags:['instrument','sound'],useEn:'growling basses with Oberheim multimode',useFr:'basses grognantes avec multimode Oberheim',touchEn:'filter mode blend, cutoff, reso, env',touchFr:'blend mode filtre, cutoff, reso, env',avoidEn:'you need bright crystal leads',avoidFr:'tu veux des leads cristallins',recipe:'SEM Growl Bass',glow:'#5cc5e6'},
  {id:'ar-fet76',vendor:'arturia',name:'Comp FET-76',roleEn:'FET compressor',roleFr:'compresseur FET',mode:'mix',tags:['dynamics','mix'],useEn:'fast peak catching, punchy character',useFr:'attrape les pics, compression punchy',touchEn:'input for GR, attack 3, release 7, ratio 4:1',touchFr:'input pour GR, attack 3, release 7, ratio 4:1',avoidEn:'you need transparent leveling',avoidFr:'tu veux du leveling transparent',recipe:'Vocal Sample Chain',glow:'#5cc5e6'},
  {id:'ar-mellofi',vendor:'arturia',name:'Tape MELLO-FI',roleEn:'tape color',roleFr:'couleur tape',mode:'sound',tags:['tone','sound'],useEn:'subtle tape wow, flutter, saturation micro-dose',useFr:'wow, flutter et saturation tape en micro-dose',touchEn:'wow 8%, flutter 6%, sat 12%, noise OFF',touchFr:'wow 8%, flutter 6%, sat 12%, bruit OFF',avoidEn:'the source is already warm enough',avoidFr:'la source est assez chaude',recipe:'Tape Warmth Layer',glow:'#5cc5e6'},
  {id:'ar-dimensiond',vendor:'arturia',name:'Chorus DIMENSION-D',roleEn:'vintage chorus',roleFr:'chorus vintage',mode:'sound',tags:['motion','sound'],useEn:'instant Juno-style width in 4 modes',useFr:'largeur et chaleur Juno en 4 modes',touchEn:'mode I to IV, mix',touchFr:'mode I à IV, mix',avoidEn:'mono compatibility is critical',avoidFr:'la compatibilité mono est critique',recipe:'Silk Pad',glow:'#5cc5e6'},
  {id:'ar-refract',vendor:'arturia',name:'Efx REFRACT',roleEn:'granular FX',roleFr:'FX granulaire',mode:'sound',tags:['motion','sound'],useEn:'real-time granular for transitions and textures',useFr:'granulaire temps réel pour transitions',touchEn:'grain size 50-100ms, density, pitch, spray',touchFr:'taille grain, densité, pitch, spray',avoidEn:'you need a clean utility effect',avoidFr:'tu veux un effet utilitaire propre',recipe:'Granular Transition',glow:'#5cc5e6'},
  // Valhalla
  {id:'vl-vintageverb',vendor:'valhalla',name:'VintageVerb',roleEn:'vintage algorithmic reverb',roleFr:'reverb algorithmique vintage',mode:'sound',tags:['space','sound'],useEn:'22 algorithms, 3 color eras (70s/80s/Now)',useFr:'22 algorithmes, 3 ères (70s/80s/Now)',touchEn:'mode, color, decay, size, mod depth',touchFr:'mode, color, decay, size, mod depth',avoidEn:'you need surgical room emulation',avoidFr:'tu veux une émulation room chirurgicale',recipe:'Long Verb Return',glow:'#6dd69e'},
  {id:'vl-room',vendor:'valhalla',name:'ValhallaRoom',roleEn:'natural room reverb',roleFr:'reverb room naturelle',mode:'sound',tags:['space','sound'],useEn:'always-on room ambience',useFr:'ambiance room permanente',touchEn:'decay 0.4s, depth, early/late size',touchFr:'decay 0.4s, depth, tailles early/late',avoidEn:'you want a huge tail or shimmer',avoidFr:'tu veux une grande queue ou shimmer',recipe:'Room Return Standard',glow:'#6dd69e'},
  {id:'vl-plate',vendor:'valhalla',name:'ValhallaPlate',roleEn:'plate reverb',roleFr:'reverb plate',mode:'sound',tags:['space','sound'],useEn:'dense plate for snare moments',useFr:'plate dense pour moments snare',touchEn:'decay 3s, width, damping, mod depth',touchFr:'decay 3s, width, damping, mod depth',avoidEn:'you need a tight controlled room',avoidFr:'tu veux une room serrée',recipe:'Snare Plate Moment',glow:'#6dd69e'},
  {id:'vl-delay',vendor:'valhalla',name:'ValhallaDelay',roleEn:'tape delay',roleFr:'delay tape',mode:'sound',tags:['space','motion','sound'],useEn:'throw delays, tape degradation, sync echoes',useFr:'throw delays, dégradation tape, échos sync',touchEn:'Tape mode, 1/4 dot, feedback 35%, age',touchFr:'mode Tape, 1/4 dot, feedback 35%, age',avoidEn:'you want a clean digital echo',avoidFr:'tu veux un écho digital propre',recipe:'Throw Delay Moment',glow:'#6dd69e'},
  {id:'vl-supermassive',vendor:'valhalla',name:'Supermassive',roleEn:'massive space FX',roleFr:'FX espace massif',mode:'sound',tags:['space','sound'],useEn:'huge washes, drones, texture beds',useFr:'nappes immenses, drones',touchEn:'mode (Gemini/Hydra/Warp), warp, feedback',touchFr:'mode, warp, feedback',avoidEn:'you need a clean short room',avoidFr:'tu veux une room courte',recipe:'Void Texture Bed',glow:'#6dd69e'},
  {id:'vl-shimmer',vendor:'valhalla',name:'ValhallaShimmer',roleEn:'shimmer reverb',roleFr:'reverb shimmer',mode:'sound',tags:['space','sound'],useEn:'pitched tails for breakdowns/transitions',useFr:'queues pitchées pour breakdowns',touchEn:'pitch shift, decay, diffusion',touchFr:'pitch shift, decay, diffusion',avoidEn:'you are in the main groove section',avoidFr:'tu es dans le groove principal',recipe:'Shimmer Breakdown',glow:'#6dd69e'},
  // iZotope
  {id:'iz-ozone',vendor:'izotope',name:'Ozone 12',roleEn:'mastering suite',roleFr:'suite mastering',mode:'mix',tags:['dynamics','mix'],useEn:'Maximizer, Imager, EQ, Vintage Tape',useFr:'Maximizer, Imager, EQ, Vintage Tape',touchEn:'Maximizer IRC IV -1dBTP, Imager mono <120Hz',touchFr:'Maximizer IRC IV -1dBTP, Imager mono <120Hz',avoidEn:'the mix still has problems to fix',avoidFr:'le mix a encore des problèmes',recipe:'Master Bus Chain',glow:'#5ce6a5'},
  {id:'iz-neutron',vendor:'izotope',name:'Neutron 5',roleEn:'channel strip',roleFr:'channel strip',mode:'mix',tags:['dynamics','tone','mix'],useEn:'Transient Shaper, Compressor, EQ, Clipper',useFr:'Transient Shaper, Compresseur, EQ, Clipper',touchEn:'TS attack +15% sustain -5%, Clipper soft -1 to -3dB',touchFr:'TS attack +15% sustain -5%, Clipper -1 à -3dB',avoidEn:'you have not gain-staged yet',avoidFr:'pas encore de gain staging',recipe:'Drum Bus Punch',glow:'#5ce6a5'},
  // Cableguys / Devious / KORG
  {id:'cg-shaperbox',vendor:'cableguys',name:'ShaperBox 3',roleEn:'volume/filter shaper',roleFr:'shaper volume/filtre',mode:'sound',tags:['motion','dynamics','sound'],useEn:'precise sidechain, gate patterns, filter curves',useFr:'sidechain précis, patterns gate, courbes filtre',touchEn:'Volume module, draw curve, trigger Audio/MIDI',touchFr:'module Volume, courbe, trigger Audio/MIDI',avoidEn:'a simple compressor sidechain is enough',avoidFr:'un sidechain compresseur suffit',recipe:'Precision Sidechain',glow:'#5c9ee6'},
  {id:'dm-infiltrator',vendor:'devious',name:'Infiltrator',roleEn:'creative multi-FX',roleFr:'multi-FX créatif',mode:'sound',tags:['motion','sound'],useEn:'sound design transitions with XY pad',useFr:'transitions sound design, XY pad',touchEn:'browse presets, automate Mix macro 0→100%',touchFr:'browse presets, automate Mix macro 0→100%',avoidEn:'you need a clean utility effect',avoidFr:'tu veux un effet utilitaire propre',recipe:'Wild Transition FX',glow:'#e65c5c'},
  {id:'kg-polysix',vendor:'korg',name:'Polysix',roleEn:'warm polysynth',roleFr:'polysynth chaud',mode:'sound',tags:['instrument','sound'],useEn:'simple warm pads and arps with chorus',useFr:'pads et arps chauds avec chorus',touchEn:'VCO wave, VCF cutoff/reso, chorus mode',touchFr:'VCO wave, VCF cutoff/reso, chorus mode',avoidEn:'you need complex modulation or FM',avoidFr:'tu as besoin de mod complexe ou FM',recipe:'Poly Warm Pad',glow:'#ccc65c'}
];

/* ═══ ROUTES — with learning fields ═══ */
const routes = [
  {titleEn:'Dark bass with movement',titleFr:'Basse dark avec mouvement',bodyEn:'Start from Serum or Diva. Add Saturn 2 or TAIP. Control low mids with Pro-Q / Pro-MB.',bodyFr:'Pars de Serum ou Diva. Ajoute Saturn 2 ou TAIP. Contrôle les bas médiums avec Pro-Q / Pro-MB.',tags:['bass','movement','sound'],whyEn:'Saturation adds harmonic weight without volume; multiband control keeps the kick space clear.',whyFr:'La saturation ajoute du poids harmonique sans volume; le multibande garde l\'espace du kick.',mistakeEn:'Adding too much Saturn drive globally — use band-split to target 100–400 Hz only.',mistakeFr:'Trop de drive Saturn global — utilise le band-split pour cibler 100–400 Hz.',nextEn:'Try parallel Saturn on a send at 30% mix for width without mud.',nextFr:'Essaye Saturn en parallel sur un send à 30% mix pour de la largeur sans boue.'},
  {titleEn:'Minimal groove without deadness',titleFr:'Groove minimal sans mollesse',bodyEn:'Keep fewer drum layers. Use Drumazon / Nithonat. Add one moving hat lane, not five.',bodyFr:'Garde moins de couches de drums. Utilise Drumazon / Nithonat. Une lane de hats, pas cinq.',tags:['drums','minimal','sound'],whyEn:'Fewer layers = each hit has its own pocket. Movement comes from one evolving element.',whyFr:'Moins de couches = chaque hit a son espace. Le mouvement vient d\'un seul élément évolutif.',mistakeEn:'Adding more hats/percs to "fill" silence — the silence IS the groove.',mistakeFr:'Ajouter des hats/percs pour "remplir" le silence — le silence EST le groove.',nextEn:'Automate one hat\'s pitch or decay over 4 bars for micro-evolution.',nextFr:'Automate le pitch ou decay d\'un hat sur 4 mesures pour micro-évolution.'},
  {titleEn:'Lead that cuts without pain',titleFr:'Lead qui perce sans douleur',bodyEn:'MicroPitch or Crystalline for width, then calm 3–5 kHz with Pro-Q or Smooth Operator.',bodyFr:'MicroPitch ou Crystalline pour largeur, puis calme 3–5 kHz avec Pro-Q ou Smooth Operator.',tags:['lead','tone','mix'],whyEn:'Width makes the lead feel big; taming 3–5 kHz removes the "ice pick" without killing presence.',whyFr:'La largeur rend le lead imposant; calmer 3–5 kHz retire le "pic à glace" sans tuer la présence.',mistakeEn:'Boosting high-end to "cut through" — that\'s the opposite of cutting without pain.',mistakeFr:'Booster l\'aigu pour "percer" — c\'est l\'inverse de percer sans douleur.',nextEn:'Try dynamic EQ at 4 kHz instead of static cut — only dips when energy hits.',nextFr:'Essaye un EQ dynamique à 4 kHz au lieu d\'un cut statique.'},
  {titleEn:'Break tension builder',titleFr:'Construction de tension en break',bodyEn:'Transit 2, Timeless 3, Crystals or UltraTap. One macro, one destination, one clear stop point.',bodyFr:'Transit 2, Timeless 3, Crystals ou UltraTap. Un macro, une destination, un stop point clair.',tags:['break','fx','sound'],whyEn:'One strong gesture reads better than stacking five subtle ones.',whyFr:'Un geste fort se lit mieux que cinq gestes subtils empilés.',mistakeEn:'Automating everything at once — pick one parameter and commit.',mistakeFr:'Automatiser tout en même temps — choisis un paramètre et engage-toi.',nextEn:'Try reverse Crystals into the drop — automate send from 0→full over 2 bars.',nextFr:'Essaye Crystals en reverse avant le drop — automate send de 0→full sur 2 mesures.'},
  {titleEn:'Muddy mix rescue',titleFr:'Sauvetage mix boueux',bodyEn:'Find the overlap first. Then Pro-Q, Pro-MB, SplitEQ. Simplify the arrangement.',bodyFr:'Trouve le chevauchement d\'abord. Puis Pro-Q, Pro-MB, SplitEQ. Simplifie l\'arrangement.',tags:['mix','cleanup','tone'],whyEn:'Mud is usually 200–450 Hz overlap between multiple sources, not a single track problem.',whyFr:'La boue est souvent un overlap 200–450 Hz entre plusieurs sources, pas un problème mono-piste.',mistakeEn:'Cutting 300 Hz on every track — find which ONE track is the worst offender first.',mistakeFr:'Couper 300 Hz sur chaque piste — trouve d\'abord LA piste qui pose le plus de problèmes.',nextEn:'Solo each track at low volume — the muddiest one reveals itself fastest.',nextFr:'Solo chaque piste à bas volume — la plus boueuse se révèle vite.'},
  {titleEn:'Huge space without washing the groove',titleFr:'Grand espace sans laver le groove',bodyEn:'Ducked reverb + low-end mono. Pro-R 2 / Crystalline for control, Blackhole for one spotlight.',bodyFr:'Reverb duckée + bas en mono. Pro-R 2 / Crystalline pour contrôle, Blackhole pour un spotlight.',tags:['space','mix','sound'],whyEn:'Ducking lets the reverb bloom between hits. Mono low-end prevents stereo blur on subs.',whyFr:'Le ducking laisse la reverb s\'ouvrir entre les hits. Mono en bas évite le flou stéréo.',mistakeEn:'Making every track wet — save big reverb for ONE special moment.',mistakeFr:'Mettre tout en wet — garde la grosse reverb pour UN moment spécial.',nextEn:'Automate Crystalline send to open during breakdowns, close before drops.',nextFr:'Automate le send Crystalline: ouvert en breakdown, fermé avant le drop.'},
  {titleEn:'Diva sub bass foundation',titleFr:'Fondation sub bass Diva',bodyEn:'Triple VCO sine, Ladder 24dB LP, cutoff 32%. Saturn 2 Subtle Tube 50-150Hz. Pro-Q mono <120Hz.',bodyFr:'Triple VCO sine, Ladder 24dB LP, cutoff 32%. Saturn 2 Subtle Tube 50-150Hz. Pro-Q mono <120Hz.',tags:['bass','sound'],whyEn:'Sine sub from Diva has analog drift that sits better than a pure oscillator.',whyFr:'Le sub sine de Diva a un drift analog qui s\'intègre mieux qu\'un oscillateur pur.',mistakeEn:'Adding harmonics above 150 Hz — the sub should be felt, not heard.',mistakeFr:'Ajouter des harmoniques au-dessus de 150 Hz — le sub se ressent, il ne s\'entend pas.',nextEn:'Layer a second Diva instance for the "click" above 200 Hz, keep sub clean below.',nextFr:'Layer une seconde instance Diva pour le "click" au-dessus de 200 Hz.'},
  {titleEn:'Pad from scratch with Jup-8',titleFr:'Pad from scratch avec Jup-8',bodyEn:'Two detuned saws, LPF 48%, chorus Mode I. DIMENSION-D for width. ValhallaPlate 2.5s, 18%.',bodyFr:'Deux saws détunées, LPF 48%, chorus Mode I. DIMENSION-D pour largeur. ValhallaPlate 2.5s, 18%.',tags:['pad','sound'],whyEn:'Jup-8 chorus Mode I adds warmth without smearing. ValhallaPlate gives lush density.',whyFr:'Chorus Jup-8 Mode I ajoute de la chaleur sans flouter. ValhallaPlate donne de la densité.',mistakeEn:'Making the pad too wide — check mono. If it disappears, reduce DIMENSION-D.',mistakeFr:'Pad trop large — check mono. S\'il disparaît, réduis DIMENSION-D.',nextEn:'Automate LPF cutoff slowly over 8 bars for gentle movement.',nextFr:'Automate le cutoff LPF lentement sur 8 mesures.'},
  {titleEn:'Throw delay for transitions',titleFr:'Throw delay pour transitions',bodyEn:'ValhallaDelay Tape, 1/4 dot, feedback 35%, LP 4kHz. Send=0 default, automate at the moment.',bodyFr:'ValhallaDelay Tape, 1/4 dot, feedback 35%, LP 4kHz. Send=0, automate au moment.',tags:['fx','transition','sound'],whyEn:'Tape degradation makes the throw feel organic. LP filter prevents high-end buildup.',whyFr:'La dégradation tape rend le throw organique. Le LP évite l\'accumulation dans l\'aigu.',mistakeEn:'Leaving the send up after the throw — automate it back to 0 immediately.',mistakeFr:'Laisser le send ouvert après le throw — automate le retour à 0 immédiatement.',nextEn:'Add a very short plate (ValhallaPlate 0.8s) on the delay return for extra tail.',nextFr:'Ajoute une plate courte (ValhallaPlate 0.8s) sur le return delay pour extra tail.'},
  {titleEn:'Analog warmth on anything',titleFr:'Chaleur analogique sur tout',bodyEn:'Decimort 2 24bit/33kHz → Tape MELLO-FI wow 8%, flutter 6%, sat 12%. Never on kick/sub.',bodyFr:'Decimort 2 24bit/33kHz → Tape MELLO-FI wow 8%, flutter 6%, sat 12%. Jamais sur kick/sub.',tags:['tone','sound'],whyEn:'Subtle bit-reduction + tape flutter adds "age" without obvious degradation.',whyFr:'Bit-reduction subtile + flutter tape ajoute du "vécu" sans dégradation évidente.',mistakeEn:'Using it on kick/sub — it destabilizes the low-end foundation.',mistakeFr:'L\'utiliser sur kick/sub — ça déstabilise la fondation grave.',nextEn:'A/B with bypass at matched volume — if you can\'t hear it, it\'s working.',nextFr:'A/B avec bypass au même volume — si tu ne l\'entends pas, ça marche.'},
  {titleEn:'Master bus chain',titleFr:'Chaîne master',bodyEn:'Pro-Q 4 HP 22Hz → Pro-C 2 Bus 1.5:1 mix 70% → Ozone Imager mono<120Hz → Maximizer -14 LUFS.',bodyFr:'Pro-Q 4 HP 22Hz → Pro-C 2 Bus 1.5:1 mix 70% → Ozone Imager mono<120Hz → Maximizer -14 LUFS.',tags:['mix','dynamics'],whyEn:'HP removes sub rumble. Gentle bus comp adds glue. Imager prevents stereo mud. Maximizer for loudness preview.',whyFr:'HP retire le rumble sub. Bus comp léger donne de la colle. Imager évite la boue stéréo.',mistakeEn:'Pushing Maximizer past -2dB GR — if you need more, fix the mix first.',mistakeFr:'Pousser Maximizer au-delà de -2dB GR — si tu en veux plus, corrige le mix d\'abord.',nextEn:'Try Ozone Vintage Tape at the end with very subtle settings for final sheen.',nextFr:'Essaye Ozone Vintage Tape à la fin avec des settings très subtils.'},
  {titleEn:'Shimmer for breakdowns only',titleFr:'Shimmer breakdowns uniquement',bodyEn:'ValhallaShimmer +12st 15%. Send=0 default. Automate UP during breakdown. Cut before drop.',bodyFr:'ValhallaShimmer +12st 15%. Send=0. Automate UP pendant breakdown. Coupe avant le drop.',tags:['space','transition','sound'],whyEn:'Shimmer adds drama at low mix — the pitched tails fill the space vocals/drums leave.',whyFr:'Le shimmer ajoute du drame à bas volume — les queues pitchées remplissent l\'espace.',mistakeEn:'Using shimmer in the groove section — it smears rhythmic clarity.',mistakeFr:'Utiliser le shimmer dans le groove — ça floute la clarté rythmique.',nextEn:'Combine with a high-pass sidechain from the kick to keep breakdowns clean.',nextFr:'Combine avec un sidechain HP du kick pour garder les breakdowns propres.'},
  // Baby Audio routes
  {titleEn:'BA-1 fast patch lane',titleFr:'Lane BA-1 patch rapide',bodyEn:'BA-1 Re-Gen for direction. Keep one strong patch. Finalize with minimal EQ/level. No extra layers.',bodyFr:'Re-Gen BA-1 pour direction. Garde un patch fort. Finalise avec EQ/niveau minimal.',tags:['lead','sound','motion'],whyEn:'Re-Gen prevents overthinking — you get a musically tuned starting point fast.',whyFr:'Re-Gen évite de trop réfléchir — tu as un point de départ musicalement calé vite.',mistakeEn:'Layering 3 BA-1 patches on top of each other — one strong patch > three weak ones.',mistakeFr:'Empiler 3 patches BA-1 — un patch fort > trois faibles.',nextEn:'Export 3 Re-Gen variations, pick the best at low volume.',nextFr:'Exporte 3 variations Re-Gen, choisis la meilleure à bas volume.'},
  {titleEn:'VHS-style texture for breaks',titleFr:'Texture VHS pour breaks',bodyEn:'Super VHS on a return for break only. ONE module first (Heat or Drift). Automate in/out.',bodyFr:'Super VHS sur un return pour break uniquement. UN module d\'abord (Heat ou Drift). Automate in/out.',tags:['break','transition','sound'],whyEn:'Controlled degradation adds analog character to digital breaks without permanent damage.',whyFr:'La dégradation contrôlée ajoute du caractère analog aux breaks digitaux sans dommage permanent.',mistakeEn:'Leaving Super VHS on during the groove — it smears transients and clarity.',mistakeFr:'Laisser Super VHS pendant le groove — ça floute les transients.',nextEn:'Combine Heat (low) + Wash (high) on different return buses.',nextFr:'Combine Heat (bas) + Wash (haut) sur des bus return séparés.'}
];

/* ═══ RECIPES — with learning fields ═══ */
const recipes = [
  {titleEn:'Dark Bass Cleanup',titleFr:'Nettoyage basse dark',bodyEn:'Serum bass → Saturn 2 multiband → Pro-Q 4 dynamic dip 280 Hz → Pro-C 3 bus glue.',bodyFr:'Basse Serum → Saturn 2 multibande → Pro-Q 4 dip dynamique 280 Hz → glue bus Pro-C 3.',stopEn:'Stop when bass feels big at low volume.',stopFr:'Stop quand la basse reste grande à bas volume.',uses:['Serum','Saturn 2','Pro-Q 4','Pro-C 3'],whyEn:'Multiband saturation adds weight only where needed. Dynamic EQ dips on demand, not always.',whyFr:'La saturation multibande ajoute du poids là où il faut. L\'EQ dynamique n\'agit que quand c\'est nécessaire.',mistakeEn:'Bypassing the dynamic mode — a static cut at 280 Hz will thin the bass permanently.',mistakeFr:'Oublier le mode dynamique — un cut statique à 280 Hz amincit la basse en permanence.'},
  {titleEn:'Drum Weight Bus',titleFr:'Bus de poids drums',bodyEn:'Drumazon / Nepheton → Redoptor 2 for edge → Pro-C 3 for shape.',bodyFr:'Drumazon / Nepheton → Redoptor 2 pour l\'edge → Pro-C 3 pour la forme.',stopEn:'Stop when drums feel denser, not just louder.',stopFr:'Stop quand les drums paraissent plus denses, pas juste plus fortes.',uses:['Drumazon 2','Redoptor 2','Pro-C 3'],whyEn:'Tube dist adds harmonics that make drums feel physically bigger. Bus comp glues the kit.',whyFr:'La dist tube ajoute des harmoniques qui rendent les drums physiquement plus gros.',mistakeEn:'Crushing with Pro-C 3 past -6dB GR — you lose the transient snap that makes them punchy.',mistakeFr:'Écraser avec Pro-C 3 au-delà de -6dB GR — tu perds le snap des transients.'},
  {titleEn:'Dark Sub Architect',titleFr:'Architecte de sub dark',bodyEn:'Diva Triple VCO sine → Saturn 2 Subtle Tube 50-150Hz 12% → Pro-C 2 Opto 3:1 → Pro-Q 4 mono M/S <120Hz.',bodyFr:'Diva Triple VCO sine → Saturn 2 Subtle Tube 50-150Hz 12% → Pro-C 2 Opto 3:1 → Pro-Q 4 mono M/S <120Hz.',stopEn:'Stop when the sub is felt, not heard above 150Hz.',stopFr:'Stop quand le sub se ressent, pas au-dessus de 150Hz.',uses:['Diva','Saturn 2','Pro-C 2','Pro-Q 4'],whyEn:'Opto compression on sub is slow and musical — it levels without pumping.',whyFr:'La compression Opto sur le sub est lente et musicale — elle nivelle sans pomper.',mistakeEn:'Using a fast attack on the sub compressor — it kills the body of each note.',mistakeFr:'Utiliser une attack rapide sur le compresseur sub — ça tue le corps de chaque note.'},
  {titleEn:'Silk Pad',titleFr:'Pad soyeux',bodyEn:'Jup-8 V4 dual saw ±6ct, LPF 48%, chorus Mode I → DIMENSION-D → ValhallaPlate 2.5s 18% → Pro-Q 4 HP 100Hz.',bodyFr:'Jup-8 V4 dual saw ±6ct, LPF 48%, chorus Mode I → DIMENSION-D → ValhallaPlate 2.5s 18% → Pro-Q 4 HP 100Hz.',stopEn:'Stop when it feels warm without dominating the mix.',stopFr:'Stop quand c\'est chaud sans dominer le mix.',uses:['Jup-8 V4','Chorus DIMENSION-D','ValhallaPlate','Pro-Q 4'],whyEn:'Double chorus (built-in + DIMENSION-D) creates dense stereo without needing extra layers.',whyFr:'Le double chorus (intégré + DIMENSION-D) crée un stéréo dense sans couches extra.',mistakeEn:'Skipping the HP filter — pad rumble below 100 Hz fights the kick and sub.',mistakeFr:'Oublier le HP — le rumble du pad sous 100 Hz combat le kick et le sub.'},
  {titleEn:'Drum Bus Punch',titleFr:'Bus drums punch',bodyEn:'Pro-Q 4 HP 30Hz → Pro-C 2 Bus 2:1 attack 10ms mix 80% → Saturn 2 Warm Tube 10% → Neutron 5 TS attack +15% sustain -5%.',bodyFr:'Pro-Q 4 HP 30Hz → Pro-C 2 Bus 2:1 attack 10ms mix 80% → Saturn 2 Warm Tube 10% → Neutron 5 TS attack +15% sustain -5%.',stopEn:'Stop at -4dB gain reduction maximum.',stopFr:'Stop à -4dB de réduction de gain max.',uses:['Pro-Q 4','Pro-C 2','Saturn 2','Neutron 5'],whyEn:'Parallel bus compression (80% mix) keeps the original transient while adding density.',whyFr:'La compression bus parallèle (80% mix) garde le transient original en ajoutant de la densité.',mistakeEn:'Setting Pro-C 2 to 100% mix — you lose the dry transient and get a flat drum bus.',mistakeFr:'Mettre Pro-C 2 à 100% mix — tu perds le transient sec et tu obtiens un bus plat.'},
  {titleEn:'Master Bus Chain',titleFr:'Chaîne master bus',bodyEn:'Pro-Q 4 HP 22Hz → Pro-C 2 Bus 1.5:1 mix 70% -2dB GR → Ozone Imager mono<120Hz → Maximizer IRC IV -1dBTP -14LUFS.',bodyFr:'Pro-Q 4 HP 22Hz → Pro-C 2 Bus 1.5:1 mix 70% -2dB GR → Ozone Imager mono<120Hz → Maximizer IRC IV -1dBTP -14LUFS.',stopEn:'Stop when GR never exceeds -2dB.',stopFr:'Stop quand le GR ne dépasse jamais -2dB.',uses:['Pro-Q 4','Pro-C 2','Ozone 12'],whyEn:'Light master bus processing adds final cohesion. Heavier moves should happen in the mix.',whyFr:'Un traitement master léger ajoute de la cohésion finale. Les gros moves se font dans le mix.',mistakeEn:'Fixing mix problems on the master bus — go back to the source track.',mistakeFr:'Corriger les problèmes du mix sur le master bus — retourne à la piste source.'},
  {titleEn:'Precision Sidechain',titleFr:'Sidechain précis',bodyEn:'ShaperBox 3 Volume, audio trigger from kick. Duck 5ms, smooth return 50ms.',bodyFr:'ShaperBox 3 Volume, trigger audio kick. Duck 5ms, return smooth 50ms.',stopEn:'Stop when duck is invisible but bass breathes with kick.',stopFr:'Stop quand le duck est invisible mais la basse respire avec le kick.',uses:['ShaperBox 3'],whyEn:'Drawn curves are more precise than compressor sidechain — exact shape control.',whyFr:'Les courbes dessinées sont plus précises qu\'un sidechain compresseur.',mistakeEn:'Making the duck too deep or too slow — it should be invisible at first listen.',mistakeFr:'Duck trop profond ou trop lent — il doit être invisible à la première écoute.'},
  // Baby Audio recipes
  {titleEn:'BA-1 Hook Builder',titleFr:'Hook BA-1',bodyEn:'BA-1: Re-Gen for direction → refine filter/tone → optional subtle drive/speaker color → mono-check.',bodyFr:'BA-1: Re-Gen pour direction → affine filtre/tonalité → optionnel drive/speaker → check mono.',stopEn:'Stop when hook is memorable at low volume, no extra layers.',stopFr:'Stop quand le hook reste mémorable à bas volume.',uses:['BA-1'],whyEn:'Re-Gen gives musically tuned variations — faster than browsing 500 presets manually.',whyFr:'Re-Gen donne des variations musicalement calées — plus rapide que parcourir 500 presets.',mistakeEn:'Adding layers "just in case" — if the BA-1 patch is strong, it stands alone.',mistakeFr:'Ajouter des couches "au cas où" — si le patch BA-1 est fort, il tient seul.'},
  {titleEn:'BA-1 FX Strip Drum Dirt',titleFr:'Saleté drums BA-1 FX Strip',bodyEn:'Hats/percs bus: BA-1 FX Strip → subtle Drive → LP filter contour → micro chorus if needed.',bodyFr:'Bus hats/percs: BA-1 FX Strip → Drive léger → LP forme → micro chorus si besoin.',stopEn:'Stop when it adds character without smearing transients.',stopFr:'Stop quand ça ajoute du caractère sans flouter les transients.',uses:['BA-1 FX Strip'],whyEn:'Retro drive on hats adds physical character that clean digital hats lack.',whyFr:'Le drive rétro sur les hats ajoute un caractère physique que les hats digitaux clean n\'ont pas.',mistakeEn:'Using all modules at once — stick to Drive + one other max.',mistakeFr:'Utiliser tous les modules en même temps — tiens-toi à Drive + un autre max.'},
  {titleEn:'Crystalline Tempo Space',titleFr:'Espace tempo Crystalline',bodyEn:'Crystalline send: tempo-sync pre-delay/decay → ducking to protect groove → tame low-end return.',bodyFr:'Crystalline send: cale pre-delay/decay tempo → ducking pour protéger le groove → tame le bas.',stopEn:'Stop when space feels big but kick/bass stays clear.',stopFr:'Stop quand l\'espace est grand mais kick/bass restent nets.',uses:['Crystalline'],whyEn:'Tempo-synced reverb timing prevents the tail from fighting the groove.',whyFr:'Le timing reverb calé tempo empêche la queue de combattre le groove.',mistakeEn:'Skipping the ducking — unducked reverb muddies every transient.',mistakeFr:'Oublier le ducking — la reverb non-duckée salit chaque transient.'},
  {titleEn:'Super VHS Transition Fill',titleFr:'Fill transition Super VHS',bodyEn:'Super VHS on return for transition only: one module (Heat OR Drift) → automate mix in/out.',bodyFr:'Super VHS sur return de transition: un module (Heat OU Drift) → automate mix in/out.',stopEn:'Stop when it reads as a moment, not a constant texture.',stopFr:'Stop quand ça se lit comme un moment, pas une texture permanente.',uses:['Super VHS'],whyEn:'Controlled degradation signals "something is changing" to the listener — powerful for transitions.',whyFr:'La dégradation contrôlée signale "quelque chose change" à l\'auditeur — puissant pour les transitions.',mistakeEn:'Leaving VHS on for the entire track — it loses its impact and muddies everything.',mistakeFr:'Laisser VHS sur tout le morceau — ça perd son impact et salit tout.'},
  {titleEn:'Tape Warmth Layer',titleFr:'Couche warmth tape',bodyEn:'Decimort 2 24bit/33kHz → Tape MELLO-FI wow 8%, flutter 6%, sat 12%, noise OFF. Pads/leads only.',bodyFr:'Decimort 2 24bit/33kHz → Tape MELLO-FI wow 8%, flutter 6%, sat 12%, bruit OFF. Pads/leads.',stopEn:'Stop if you hear noise or pitch wobble consciously.',stopFr:'Stop si tu entends du bruit ou du wobble consciemment.',uses:['Decimort 2','Tape MELLO-FI'],whyEn:'Stacking subtle bit-reduction with tape flutter creates "age" without obvious artifacts.',whyFr:'Empiler bit-reduction subtile + flutter tape crée du "vécu" sans artefacts évidents.',mistakeEn:'Using it on kick or sub — the low-end becomes unstable.',mistakeFr:'L\'utiliser sur kick/sub — le bas devient instable.'},
  {titleEn:'Long Verb Return',titleFr:'Return verb longue',bodyEn:'VintageVerb Concert Hall, Color 80s, decay 2.5s, pre-delay 30ms, size 65%. HP return 250Hz. SC kick.',bodyFr:'VintageVerb Concert Hall, Color 80s, decay 2.5s, pre-delay 30ms, size 65%. HP return 250Hz. SC kick.',stopEn:'Stop when verb adds depth without smearing the groove.',stopFr:'Stop quand la verb ajoute de la profondeur sans salir le groove.',uses:['VintageVerb'],whyEn:'80s color adds warmth to the tail. Sidechain from kick lets the verb duck on every hit.',whyFr:'La couleur 80s ajoute de la chaleur à la queue. SC du kick fait ducker la verb à chaque hit.',mistakeEn:'Not HP filtering the return — low-end reverb mud is the #1 beginner mistake.',mistakeFr:'Pas de HP sur le return — la boue reverb dans le grave est l\'erreur n°1.'},
  {titleEn:'Snare Plate Moment',titleFr:'Moment plate snare',bodyEn:'ValhallaPlate 3s → Pro-Q 4 HP 300Hz LP 6kHz → SC from snare (Pro-C 2 4:1). Automate send.',bodyFr:'ValhallaPlate 3s → Pro-Q 4 HP 300Hz LP 6kHz → SC snare (Pro-C 2 4:1). Automate send.',stopEn:'Stop when plate swells after hit without muddying groove.',stopFr:'Stop quand la plate swell après le hit sans salir le groove.',uses:['ValhallaPlate','Pro-Q 4','Pro-C 2'],whyEn:'Band-limited plate (300Hz–6kHz) stays out of the kick and hi-hat frequency ranges.',whyFr:'La plate band-limitée (300Hz–6kHz) reste hors des fréquences du kick et des hats.',mistakeEn:'Full-range plate on snare — it bleeds into everything.',mistakeFr:'Plate full-range sur snare — ça bave partout.'}
];

/* ═══ FIX-IT PLAYBOOK ═══ */
const fixIt = [
  {sEn:'Kick and bass fight',sFr:'Kick et basse se battent',checkEn:'Solo kick+bass together. Listen for phasing or volume pumping.',checkFr:'Solo kick+bass ensemble. Écoute le phasing ou le pompage de volume.',moves:[{en:'ShaperBox 3 sidechain on bass, triggered by kick. Duck 5ms, return 50ms.',fr:'ShaperBox 3 sidechain sur basse, trigger kick. Duck 5ms, return 50ms.'},{en:'Pro-Q 4 analyzer: check phase correlation between kick and bass.',fr:'Pro-Q 4 analyzer: check la corrélation de phase kick/basse.'},{en:'HP the bass at 30Hz to leave sub space for the kick.',fr:'HP la basse à 30Hz pour laisser l\'espace sub au kick.'}],stopEn:'Stop when kick and bass feel like one unit, not two fights.',stopFr:'Stop quand kick et basse ne font plus qu\'un.',whyEn:'Most kick/bass problems come from frequency overlap in 60–120 Hz, not volume.',whyFr:'La plupart des problèmes kick/basse viennent d\'un overlap 60–120 Hz, pas du volume.',overdoEn:'Over-sidechaining — if you hear the duck, it\'s too much.',overdoFr:'Trop de sidechain — si tu entends le duck, c\'est trop.',trigger:'lowSideRatio'},
  {sEn:'Muddy mix',sFr:'Mix boueux',checkEn:'Solo tracks one by one at low volume. The muddiest will reveal itself.',checkFr:'Solo chaque piste à bas volume. La plus boueuse se révèle vite.',moves:[{en:'Pro-Q 4: cut 200–400Hz boxiness on the worst offender first.',fr:'Pro-Q 4: coupe la boîte 200–400Hz sur la piste la plus boueuse.'},{en:'HP everything except kick/bass at 80–120Hz.',fr:'HP tout sauf kick/basse à 80–120Hz.'},{en:'Pro-MB: compress 200–400Hz range 3:1 on the drum bus.',fr:'Pro-MB: compresse la zone 200–400Hz 3:1 sur le bus drums.'}],stopEn:'Stop when each track sounds thin solo but full in context.',stopFr:'Stop quand chaque piste semble thin en solo mais pleine en contexte.',whyEn:'Mud is cumulative — 10 tracks each with mild 300Hz buildup = massive mud.',whyFr:'La boue est cumulative — 10 pistes avec un peu de 300Hz chacune = boue massive.',overdoEn:'Cutting 300Hz on every single track blindly — some tracks need that body.',overdoFr:'Couper 300Hz sur chaque piste aveuglément — certaines pistes ont besoin de ce corps.',trigger:'lowMidHeavy'},
  {sEn:'Flat drums',sFr:'Drums plats',checkEn:'Check if drum bus has processing. Compare bypassed vs processed.',checkFr:'Vérifie si le bus drums a du traitement. Compare bypass vs traité.',moves:[{en:'Pro-C 2 Bus 2:1, attack 10ms, mix 80% (parallel).',fr:'Pro-C 2 Bus 2:1, attack 10ms, mix 80% (parallel).'},{en:'Saturn 2 Warm Tube at 10% drive on the drum bus.',fr:'Saturn 2 Warm Tube à 10% drive sur le bus drums.'},{en:'Neutron 5 TS: attack +15%, sustain -5%.',fr:'Neutron 5 TS: attack +15%, sustain -5%.'}],stopEn:'Stop at -4dB GR max on Pro-C 2.',stopFr:'Stop à -4dB GR max sur Pro-C 2.',whyEn:'Unprocessed drum buses sound lifeless — parallel compression adds density while keeping transients.',whyFr:'Les bus drums non-traités sonnent sans vie — la compression parallèle ajoute de la densité.',overdoEn:'Slamming the compressor past -6dB GR — drums lose punch and become a wall.',overdoFr:'Écraser le compresseur au-delà de -6dB GR — les drums perdent le punch.',trigger:'crestLow'},
  {sEn:'Mix too narrow',sFr:'Mix trop étroit',checkEn:'Check Pro-Q 4 M/S display. Look at side energy below 200Hz.',checkFr:'Check l\'affichage M/S de Pro-Q 4. Regarde l\'énergie side sous 200Hz.',moves:[{en:'MicroPitch on mids/highs: ±8ct, 10-12ms delay.',fr:'MicroPitch sur mids/highs: ±8ct, 10-12ms delay.'},{en:'Pro-Q 4 M/S: HP the side at 150Hz.',fr:'Pro-Q 4 M/S: HP le side à 150Hz.'},{en:'Verify mono compatibility with Utility.',fr:'Vérifie la compatibilité mono avec Utility.'}],stopEn:'Stop when it sounds wide but survives mono.',stopFr:'Stop quand c\'est large mais que ça tient en mono.',whyEn:'Width without mono-checking is a trap — many club systems sum to mono.',whyFr:'La largeur sans check mono est un piège — beaucoup de systèmes club somment en mono.',overdoEn:'Making everything wide — keep kick, bass, and vocals center.',overdoFr:'Élargir tout — garde kick, basse et voix au centre.'},
  {sEn:'Reverb muddies low-end',sFr:'Reverb salit le low-end',checkEn:'Solo your reverb returns. Check for low-end energy with Pro-Q 4.',checkFr:'Solo tes returns de reverb. Check l\'énergie grave avec Pro-Q 4.',moves:[{en:'HP ALL reverb returns at minimum 200Hz.',fr:'HP TOUS les returns de reverb à minimum 200Hz.'},{en:'Sidechain reverb returns to the kick.',fr:'Sidechain les returns reverb au kick.'},{en:'Reduce send levels by 3dB and re-evaluate.',fr:'Réduis les sends de 3dB et réévalue.'}],stopEn:'Stop when reverb adds depth without clouding the kick/bass range.',stopFr:'Stop quand la reverb ajoute de la profondeur sans voiler le kick/bass.',whyEn:'Reverb algorithms generate low-end energy even from high-frequency inputs.',whyFr:'Les algorithmes de reverb génèrent de l\'énergie grave même à partir d\'entrées aiguës.',overdoEn:'HP filtering returns at 400Hz+ — you lose the body and warmth of the reverb.',overdoFr:'HP les returns à 400Hz+ — tu perds le corps et la chaleur de la reverb.'},
  {sEn:'Snare disappears',sFr:'Snare disparaît',checkEn:'Check snare level against kick at low volume. Check for masking.',checkFr:'Check le niveau snare vs kick à bas volume. Check le masquage.',moves:[{en:'Neutron 5 TS: attack +18% on snare.',fr:'Neutron 5 TS: attack +18% sur snare.'},{en:'Add snare plate return: ValhallaPlate 3s, HP 300Hz.',fr:'Ajoute plate return: ValhallaPlate 3s, HP 300Hz.'},{en:'Boost snare 2-4kHz shelf by 1-2dB with Pro-Q 4.',fr:'Boost snare 2-4kHz shelf de 1-2dB avec Pro-Q 4.'}],stopEn:'Stop when snare sits clearly without being louder than the kick.',stopFr:'Stop quand la snare est claire sans être plus forte que le kick.',whyEn:'Snares need transient emphasis and spectral space — not just volume.',whyFr:'Les snares ont besoin d\'emphase de transient et d\'espace spectral — pas juste de volume.',overdoEn:'Boosting snare volume instead of shaping it — it clashes with everything else.',overdoFr:'Monter le volume snare au lieu de la shaper — ça clash avec tout.'},
  {sEn:'Master too loud / distorts',sFr:'Master trop fort / distortion',checkEn:'Check master peak meter. Check Pro-L 2 GR meter.',checkFr:'Check le peak meter master. Check le GR meter de Pro-L 2.',moves:[{en:'Lower ALL faders by -3dB as a first step.',fr:'Baisse TOUT de -3dB comme premier geste.'},{en:'Gain stage individual tracks to peak around -12dBFS.',fr:'Gain stage chaque piste pour peak autour de -12dBFS.'},{en:'Pro-L 2: max -2dB GR. If more is needed, fix the mix.',fr:'Pro-L 2: max -2dB GR. Si plus est nécessaire, corrige le mix.'}],stopEn:'Stop when peaks sit around -1dBFS with no more than -2dB GR on Pro-L 2.',stopFr:'Stop quand les peaks sont autour de -1dBFS avec max -2dB GR sur Pro-L 2.',whyEn:'Loudness from limiting = distortion. Loudness from gain staging = clean headroom.',whyFr:'Le volume par limiting = distortion. Le volume par gain staging = headroom propre.',overdoEn:'Pushing Pro-L 2 past -3dB GR "to compete" — your track will sound worse, not louder.',overdoFr:'Pousser Pro-L 2 au-delà de -3dB GR "pour la compétition" — ton morceau sonnera pire.',trigger:'peakHot'},
  {sEn:'Sound too digital / cold',sFr:'Son trop digital / froid',checkEn:'A/B your track with a reference you like. Focus on warmth, not brightness.',checkFr:'A/B ton morceau avec une référence que tu aimes. Focus sur la chaleur.',moves:[{en:'Decimort 2: 24bit/33kHz on pads and leads.',fr:'Decimort 2: 24bit/33kHz sur pads et leads.'},{en:'Tape MELLO-FI: wow 8%, flutter 6%, sat 12%, noise OFF.',fr:'Tape MELLO-FI: wow 8%, flutter 6%, sat 12%, bruit OFF.'},{en:'Saturn 2 Subtle Tube: micro-dose on the mix bus.',fr:'Saturn 2 Subtle Tube: micro-dose sur le bus mix.'}],stopEn:'Stop when A/B at matched volume shows improvement without artifacts.',stopFr:'Stop quand l\'A/B au même volume montre une amélioration sans artefacts.',whyEn:'Digital coldness comes from too-clean processing — subtle analog character warms it.',whyFr:'La froideur digitale vient d\'un traitement trop propre — un caractère analog subtil réchauffe.',overdoEn:'Over-saturating everything — one or two stages of subtle warmth, not five.',overdoFr:'Trop saturer tout — un ou deux étages de warmth subtile, pas cinq.'},
  {sEn:'Bass too boomy',sFr:'Basse trop boomy',checkEn:'Check with Pro-MB — is 60-120Hz bouncing more than ±3dB?',checkFr:'Check avec Pro-MB — est-ce que 60-120Hz rebondit de plus de ±3dB?',moves:[{en:'Pro-MB: band 60-120Hz, ratio 3:1, slow attack.',fr:'Pro-MB: bande 60-120Hz, ratio 3:1, attack lent.'},{en:'Mono below 120Hz with Ozone Imager or Pro-Q 4 M/S.',fr:'Mono sous 120Hz avec Ozone Imager ou Pro-Q 4 M/S.'},{en:'Check room acoustics — stand up while mixing, avoid corners.',fr:'Check acoustique — lève-toi en mixant, évite les coins.'}],stopEn:'Stop when bass feels controlled but not thin.',stopFr:'Stop quand la basse est contrôlée mais pas thin.',whyEn:'Boominess is usually a room problem + uncontrolled sub resonance.',whyFr:'Le côté boomy vient souvent d\'un problème de room + résonance sub non contrôlée.',overdoEn:'Multiband-compressing the entire low end — target the resonant peak, not the whole range.',overdoFr:'Comprimer tout le bas en multibande — cible le pic résonant, pas toute la zone.'},
  {sEn:'Boring transitions',sFr:'Transitions ennuyeuses',checkEn:'Listen to the last 4 bars before each drop. Is there a clear gesture?',checkFr:'Écoute les 4 dernières mesures avant chaque drop. Y a-t-il un geste clair?',moves:[{en:'ValhallaDelay: throw delay automation (send 0→full→0).',fr:'ValhallaDelay: automation throw delay (send 0→full→0).'},{en:'Transit 2: one macro sweep for the entire transition.',fr:'Transit 2: un sweep macro pour toute la transition.'},{en:'Snare plate moment: automate ValhallaPlate send at the drop.',fr:'Moment plate snare: automate le send ValhallaPlate au drop.'}],stopEn:'Stop when one gesture is clear and memorable.',stopFr:'Stop quand un geste est clair et mémorable.',whyEn:'Good transitions need one strong gesture — not five subtle ones.',whyFr:'Les bonnes transitions ont besoin d\'un geste fort — pas cinq subtils.',overdoEn:'Stacking riser + sweep + delay + filter + noise all at once.',overdoFr:'Empiler riser + sweep + delay + filtre + noise tout en même temps.'},
  {sEn:'Hi-hats too harsh',sFr:'Hi-hats trop harsh',checkEn:'Solo hats. Check 4-10kHz on Pro-Q 4 analyzer.',checkFr:'Solo hats. Check 4-10kHz sur l\'analyzer Pro-Q 4.',moves:[{en:'HP strict at 4kHz+ only if the hat has no body you need.',fr:'HP strict à 4kHz+ seulement si le hat n\'a pas de corps utile.'},{en:'Decimort 2 subtle: 24bit/30kHz to soften the digital edge.',fr:'Decimort 2 subtil: 24bit/30kHz pour adoucir le tranchant digital.'},{en:'Pro-C 2 Opto: tame the loudest peaks gently.',fr:'Pro-C 2 Opto: calme les pics les plus forts doucement.'}],stopEn:'Stop when hats sit in the mix without making you wince.',stopFr:'Stop quand les hats sont dans le mix sans te faire grimacer.',whyEn:'Harshness is usually 4-8kHz resonance, not overall level.',whyFr:'La dureté est généralement une résonance 4-8kHz, pas le niveau global.',overdoEn:'Cutting all high-end — hats need brightness, just not resonant peaks.',overdoFr:'Couper tout l\'aigu — les hats ont besoin de brillance, juste pas de pics résonants.',trigger:'highSharp'},
  {sEn:'Not enough punch',sFr:'Pas assez de punch',checkEn:'Compare with reference at same volume. Focus on the transient snap.',checkFr:'Compare avec référence au même volume. Focus sur le snap du transient.',moves:[{en:'Neutron 5 TS: attack +15-25% on the drum bus.',fr:'Neutron 5 TS: attack +15-25% sur le bus drums.'},{en:'Neutron 5 Clipper: soft, -1 to -3dB.',fr:'Neutron 5 Clipper: soft, -1 à -3dB.'},{en:'Parallel crush: send to a return with heavy compression, blend at 15-25%.',fr:'Parallel crush: send vers un return avec compression forte, blend à 15-25%.'}],stopEn:'Stop when transients pop without the mix feeling aggressive.',stopFr:'Stop quand les transients pop sans que le mix soit agressif.',whyEn:'Punch = fast transient attack, not volume. Transient shapers add snap without level.',whyFr:'Punch = transient attack rapide, pas volume. Les transient shapers ajoutent du snap sans niveau.',overdoEn:'Over-clipping — past -3dB on the clipper, you get distortion not punch.',overdoFr:'Trop de clipping — au-delà de -3dB sur le clipper, c\'est de la distortion pas du punch.'},
  {sEn:'Stereo image broken',sFr:'Image stéréo bancale',checkEn:'Check correlation meter. Check Ozone Imager for phase issues.',checkFr:'Check le correlation meter. Check Ozone Imager pour les problèmes de phase.',moves:[{en:'Ozone Imager: mono everything below 120Hz.',fr:'Ozone Imager: mono tout sous 120Hz.'},{en:'Pro-Q 4 M/S: check for rogue side energy in low-mids.',fr:'Pro-Q 4 M/S: check l\'énergie side parasite dans les bas-mids.'},{en:'Utility: mono check — fix anything that disappears.',fr:'Utility: check mono — corrige tout ce qui disparaît.'}],stopEn:'Stop when correlation stays above 0.3 and the mix survives mono.',stopFr:'Stop quand la corrélation reste au-dessus de 0.3 et que le mix tient en mono.',whyEn:'Club systems and phone speakers sum to mono — broken stereo = lost energy.',whyFr:'Les systèmes club et les hauts-parleurs téléphone somment en mono — stéréo cassée = énergie perdue.',overdoEn:'Making everything mono "to be safe" — keep deliberate width on pads and FX.',overdoFr:'Tout mettre en mono "pour être safe" — garde de la largeur volontaire sur pads et FX.',trigger:'stereoWeak'},
  {sEn:'CPU overload',sFr:'CPU overload',checkEn:'Check Ableton CPU meter. Identify the heaviest tracks.',checkFr:'Check le CPU meter Ableton. Identifie les pistes les plus lourdes.',moves:[{en:'Freeze finalized tracks (Cmd/Ctrl+click, Freeze).',fr:'Freeze les pistes finalisées (Cmd/Ctrl+clic, Freeze).'},{en:'Bounce heavy instruments to audio.',fr:'Bounce les instruments lourds en audio.'},{en:'Reduce Diva accuracy to FAST mode.',fr:'Réduis Diva accuracy en mode FAST.'}],stopEn:'Stop when CPU stays below 60% with headroom for live tweaks.',stopFr:'Stop quand le CPU reste sous 60% avec de la marge.',whyEn:'Heavy synths like Diva in HQ mode eat CPU. Freezing preserves the sound at zero cost.',whyFr:'Les synths lourds comme Diva en HQ mangent du CPU. Le freeze préserve le son à coût zéro.',overdoEn:'Bouncing everything before the arrangement is done — you lose editability.',overdoFr:'Tout bouncer avant que l\'arrangement soit fini — tu perds l\'édition.'}
];

/* ═══ SOUND BUILDER CONFIG ═══ */
const sbGoals = ['bass','lead','pad','drums','texture','transition'];
const sbConstraints = ['clean','grit','mono','wide','moving','minimal'];
const goalI18n = {bass:'goalBass',lead:'goalLead',pad:'goalPad',drums:'goalDrums',texture:'goalTexture',transition:'goalTransition'};
const conI18n = {clean:'conClean',grit:'conGrit',mono:'conMono',wide:'conWide',moving:'conMoving',minimal:'conMinimal'};

// Tag mapping for builder matching
const goalTags = {bass:['bass'],lead:['lead'],pad:['pad'],drums:['drums','minimal'],texture:['tone','sound'],transition:['transition','break','fx']};
const conTags = {clean:['mix','tone'],grit:['tone'],mono:['bass'],wide:['space'],moving:['motion','movement'],minimal:['minimal']};

/* ═══ STATE ═══ */
let state = {
  lang: localStorage.getItem('kapman-lang')||'en',
  theme: localStorage.getItem('kapman-theme')||'dark',
  page:'home', modeFilter:'all', vendorFilter:'all', search:'', selectedId:null,
  sbGoal:null, sbConstraint:null, sbIndex:0
};
const $ = (s,c=document) => c.querySelector(s);
const $$ = (s,c=document) => Array.from(c.querySelectorAll(s));
function vendorById(id){return vendors.find(v=>v.id===id);}

/* ═══ THEME / LANG ═══ */
function setTheme(t){state.theme=t;document.body.dataset.theme=t;localStorage.setItem('kapman-theme',t);}
function setLang(lang){
  state.lang=lang;localStorage.setItem('kapman-lang',lang);
  $$('.seg').forEach(b=>b.classList.toggle('is-active',b.id===(lang==='en'?'langEN':'langFR')));
  $$('[data-i18n]').forEach(el=>{const k=el.dataset.i18n;if(i18n[lang][k])el.innerHTML=i18n[lang][k];});
  $$('[data-i18n-placeholder]').forEach(el=>{const k=el.dataset.i18nPlaceholder;if(i18n[lang][k])el.setAttribute('placeholder',i18n[lang][k]);});
  renderAll();updatePageTitle();
}
function updatePageTitle(){const m={home:'pageHome',library:'pageLibrary',sound:'pageSound',mix:'pageMix',finish:'pageFinish',fixit:'pageFixit'};$('#pageTitle').textContent=i18n[state.lang][m[state.page]]||state.page;}

/* ═══ NAV ═══ */
function switchPage(p){state.page=p;$$('.page').forEach(pg=>pg.classList.toggle('is-active',pg.dataset.page===p));$$('.sidebar-link').forEach(l=>l.classList.toggle('is-active',l.dataset.page===p));updatePageTitle();$('#sidebar').classList.remove('is-open');$('#overlay').classList.remove('is-open');}

/* ═══ RENDERS ═══ */
function renderAll(){renderVendorRail();renderFilters();renderPlugins();renderSoundBuilder();renderRoutes();renderRecipes();renderChecklists();renderFixIt();showMixPlaceholder();}

function renderVendorRail(){
  const el=$('#vendorRail');
  el.innerHTML=vendors.map(v=>`<button class="vendor-chip" data-vendor="${v.id}"><div class="vendor-mono" style="background:${v.color}">${v.mark}</div><div><strong>${v.name}</strong></div></button>`).join('');
  $$('.vendor-chip',el).forEach(b=>b.addEventListener('click',()=>{state.vendorFilter=b.dataset.vendor;state.modeFilter='all';switchPage('library');renderFilters();renderPlugins();}));
}

function renderFilters(){
  const L=state.lang;const mds=[['all','filterAll'],['mix','filterMix'],['sound','filterSound'],['dynamics','filterDynamics'],['space','filterSpace'],['tone','filterTone'],['motion','filterMotion'],['instrument','filterInstrument']];
  $('#modeChips').innerHTML=mds.map(([id,k])=>`<button class="chip ${state.modeFilter===id?'is-active':''}" data-mode="${id}">${i18n[L][k]}</button>`).join('');
  $('#vendorChips').innerHTML=[`<button class="chip ${state.vendorFilter==='all'?'is-active':''}" data-vendor="all">${i18n[L].filterAll}</button>`].concat(vendors.map(v=>`<button class="chip ${state.vendorFilter===v.id?'is-active':''}" data-vendor="${v.id}">${v.name}</button>`)).join('');
  $$('#modeChips .chip').forEach(b=>b.onclick=()=>{state.modeFilter=b.dataset.mode;renderFilters();renderPlugins();});
  $$('#vendorChips .chip').forEach(b=>b.onclick=()=>{state.vendorFilter=b.dataset.vendor;renderFilters();renderPlugins();});
}
function matchesPlugin(p){const q=state.search.trim().toLowerCase();const txt=[p.name,p.vendor,p.roleEn,p.roleFr,p.useEn,p.useFr,p.tags.join(' ')].join(' ').toLowerCase();const sOk=!q||txt.includes(q);const vOk=state.vendorFilter==='all'||p.vendor===state.vendorFilter;let mOk=true;if(['mix','sound'].includes(state.modeFilter))mOk=p.mode===state.modeFilter;else if(state.modeFilter!=='all')mOk=p.tags.includes(state.modeFilter);return sOk&&vOk&&mOk;}

function renderPlugins(){
  const grid=$('#pluginGrid');const list=plugins.filter(matchesPlugin);
  grid.innerHTML=list.map(p=>{const v=vendorById(p.vendor);return`<button class="plugin-card" style="--cardGlow:${p.glow||v.color}" data-id="${p.id}"><div class="plugin-top"><span class="plugin-vendor">${v.name}</span><span class="plugin-badge">${p.mode.toUpperCase()}</span></div><h3>${p.name}</h3><p class="plugin-role">${state.lang==='fr'?p.roleFr:p.roleEn}</p><div class="tag-row">${p.tags.slice(0,3).map(t=>`<span class="tag">${t}</span>`).join('')}</div></button>`;}).join('');
  $$('.plugin-card',grid).forEach(c=>c.onclick=()=>openInspector(c.dataset.id));
  $('#kpiPlugins').textContent=plugins.length;$('#kpiRecipes').textContent=recipes.length;
}
function openInspector(id){
  state.selectedId=id;const p=plugins.find(x=>x.id===id);if(!p)return;const v=vendorById(p.vendor);const rec=recipes.find(r=>r.titleEn===p.recipe);const L=state.lang;const t=k=>i18n[L][k];
  $('#inspectorEmpty').classList.add('hidden');const b=$('#inspectorBody');b.classList.remove('hidden');
  b.innerHTML=`<p class="label">${v.name}</p><h2 style="font-size:28px;margin:4px 0 6px">${p.name}</h2><p class="muted">${L==='fr'?p.roleFr:p.roleEn}</p><div class="tag-row" style="margin:12px 0">${p.tags.map(tg=>`<span class="tag">${tg}</span>`).join('')}</div><div class="inspector-grid"><div class="info-box"><span>${t('inspectorUse')}</span><strong>${L==='fr'?p.useFr:p.useEn}</strong></div><div class="info-box"><span>${t('inspectorTouch')}</span><strong>${L==='fr'?p.touchFr:p.touchEn}</strong></div><div class="info-box"><span>${t('inspectorAvoid')}</span><strong>${L==='fr'?p.avoidFr:p.avoidEn}</strong></div><div class="info-box"><span>${t('inspectorMode')}</span><strong>${p.mode.toUpperCase()}</strong></div>${rec?`<div class="info-box"><span>${t('inspectorRecipe')}</span><strong>${L==='fr'?rec.titleFr:rec.titleEn}</strong></div>`:''}</div>`;
}

/* ═══ SOUND BUILDER ═══ */
function renderSoundBuilder(){
  const L=state.lang;const t=k=>i18n[L][k];
  $('#sbGoals').innerHTML=sbGoals.map(g=>`<button class="chip ${state.sbGoal===g?'is-active':''}" data-goal="${g}">${t(goalI18n[g])}</button>`).join('');
  $('#sbConstraints').innerHTML=sbConstraints.map(c=>`<button class="chip ${state.sbConstraint===c?'is-active':''}" data-con="${c}">${t(conI18n[c])}</button>`).join('');
  $$('#sbGoals .chip').forEach(b=>b.onclick=()=>{state.sbGoal=b.dataset.goal;state.sbIndex=0;renderSoundBuilder();});
  $$('#sbConstraints .chip').forEach(b=>b.onclick=()=>{state.sbConstraint=b.dataset.con;state.sbIndex=0;renderSoundBuilder();});
  // Generate output
  const out=$('#sbOutput');
  if(!state.sbGoal){out.innerHTML='';return;}
  const gTags=goalTags[state.sbGoal]||[];
  const cTags=state.sbConstraint?conTags[state.sbConstraint]||[]:[];
  const matchRoute=routes.filter(r=>r.tags.some(t=>gTags.includes(t)));
  const matchRecipe=recipes.filter(r=>{const allTags=r.uses.join(' ').toLowerCase();return gTags.some(g=>r.titleEn.toLowerCase().includes(g)||allTags.includes(g));});
  if(!matchRoute.length&&!matchRecipe.length){out.innerHTML=`<p class="muted">${L==='fr'?'Aucun résultat pour cette combinaison.':'No results for this combination.'}</p>`;return;}
  const rIdx=state.sbIndex%Math.max(1,matchRoute.length);
  const recIdx=state.sbIndex%Math.max(1,matchRecipe.length);
  const route=matchRoute[rIdx];
  const recipe=matchRecipe[recIdx];
  let html='';
  if(route){
    html+=`<div class="sb-result"><div class="sb-result-head"><span class="label">${t('sbRoute')}</span></div><h4>${L==='fr'?route.titleFr:route.titleEn}</h4><p>${L==='fr'?route.bodyFr:route.bodyEn}</p>`;
    if(route.whyEn){
      html+=`<div class="sb-learn"><p><strong>${t('sbWhy')}:</strong> ${L==='fr'?route.whyFr:route.whyEn}</p><p><strong>${t('sbMistake')}:</strong> ${L==='fr'?route.mistakeFr:route.mistakeEn}</p><p><strong>${t('sbStop')}:</strong> ${L==='fr'?(route.stopFr||'—'):(route.stopEn||'—')}</p>${route.nextEn?`<p><strong>${t('sbNext')}:</strong> ${L==='fr'?route.nextFr:route.nextEn}</p>`:''}</div>`;
    }
    html+=`</div>`;
  }
  if(recipe){
    html+=`<div class="sb-result"><div class="sb-result-head"><span class="label">${t('sbRecipe')}</span></div><h4>${L==='fr'?recipe.titleFr:recipe.titleEn}</h4><p>${L==='fr'?recipe.bodyFr:recipe.bodyEn}</p><div class="tag-row" style="margin:8px 0">${recipe.uses.map(u=>`<span class="tag">${u}</span>`).join('')}</div>`;
    html+=`<div class="sb-learn"><p><strong>${t('sbStop')}:</strong> ${L==='fr'?recipe.stopFr:recipe.stopEn}</p>${recipe.whyEn?`<p><strong>${t('sbWhy')}:</strong> ${L==='fr'?recipe.whyFr:recipe.whyEn}</p>`:''}</div></div>`;
  }
  html+=`<button class="sb-next-btn" id="sbNextBtn">${t('sbNextBtn')} →</button>`;
  out.innerHTML=html;
  const nb=$('#sbNextBtn');if(nb)nb.onclick=()=>{state.sbIndex++;renderSoundBuilder();};
}

function renderRoutes(){
  const L=state.lang;
  $('#routeGrid').innerHTML=routes.map(r=>{
    let learn='';
    if(r.whyEn)learn=`<details class="route-learn"><summary>${L==='fr'?'Apprendre plus':'Learn more'}</summary><div class="sb-learn"><p><strong>${i18n[L].sbWhy}:</strong> ${L==='fr'?r.whyFr:r.whyEn}</p><p><strong>${i18n[L].sbMistake}:</strong> ${L==='fr'?r.mistakeFr:r.mistakeEn}</p>${r.nextEn?`<p><strong>${i18n[L].sbNext}:</strong> ${L==='fr'?r.nextFr:r.nextEn}</p>`:''}</div></details>`;
    return`<article class="route-card"><h3>${L==='fr'?r.titleFr:r.titleEn}</h3><p>${L==='fr'?r.bodyFr:r.bodyEn}</p><div class="route-meta">${r.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>${learn}</article>`;
  }).join('');
}
function renderRecipes(){
  const L=state.lang;
  $('#recipeGrid').innerHTML=recipes.map(r=>{
    let learn='';
    if(r.whyEn)learn=`<details class="route-learn"><summary>${L==='fr'?'Apprendre plus':'Learn more'}</summary><div class="sb-learn"><p><strong>${i18n[L].sbWhy}:</strong> ${L==='fr'?r.whyFr:r.whyEn}</p><p><strong>${i18n[L].sbMistake}:</strong> ${L==='fr'?r.mistakeFr:r.mistakeEn}</p></div></details>`;
    return`<article class="recipe-card"><h3>${L==='fr'?r.titleFr:r.titleEn}</h3><p>${L==='fr'?r.bodyFr:r.bodyEn}</p><div class="recipe-meta">${r.uses.map(u=>`<span class="tag">${u}</span>`).join('')}</div><div class="stop-rule"><strong>${i18n[L].stopRuleLabel}:</strong> ${L==='fr'?r.stopFr:r.stopEn}</div>${learn}</article>`;
  }).join('');
}
function renderChecklists(){
  const L=state.lang;const t=k=>i18n[L][k];
  const mk=(items,el)=>{el.innerHTML=items.map(tx=>`<li><input type="checkbox"><span>${tx}</span></li>`).join('');};
  mk([t('finishA1'),t('finishA2'),t('finishA3'),t('finishA4')],$('#checklistA'));
  mk([t('finishB1'),t('finishB2'),t('finishB3'),t('finishB4')],$('#checklistB'));
  mk([t('finishC1'),t('finishC2'),t('finishC3'),t('finishC4')],$('#checklistC'));
}

/* ═══ FIX-IT ═══ */
function renderFixIt(){
  const L=state.lang;const t=k=>i18n[L][k];
  $('#fixitGrid').innerHTML=fixIt.map(f=>{
    const sym=L==='fr'?f.sFr:f.sEn;
    const chk=L==='fr'?f.checkFr:f.checkEn;
    const mvs=f.moves.map((m,i)=>`<div class="fixit-move"><span class="fixit-move-num">${i+1}</span><span>${L==='fr'?m.fr:m.en}</span></div>`).join('');
    const stp=L==='fr'?f.stopFr:f.stopEn;
    const why=L==='fr'?f.whyFr:f.whyEn;
    const ovr=L==='fr'?f.overdoFr:f.overdoEn;
    return`<article class="fixit-card"><div class="fixit-symptom"><span class="fixit-dot"></span>${sym}</div><div class="fixit-check"><strong>${t('fixitCheck')}:</strong> ${chk}</div><div class="fixit-moves">${mvs}</div><div class="fixit-stop"><strong>${t('fixitStopLabel')}:</strong> ${stp}</div><div class="fixit-learn"><p><strong>${t('fixitWhyLabel')}:</strong> ${why}</p><p><strong>${t('fixitOverdoLabel')}:</strong> ${ovr}</p></div></article>`;
  }).join('');
}

/* ═══ MIX CHECK ═══ */
function showMixPlaceholder(){
  $('#metricPeak').textContent='—';$('#metricRms').textContent='—';$('#metricCrest').textContent='—';$('#metricLufs').textContent='—';$('#metricCorr').textContent='—';
  const L=state.lang;
  $('#bandBar').innerHTML=['bandsLow','bandsLowMid','bandsHighMid','bandsHigh'].map(k=>`<div class="band-pill"><span>${i18n[L][k]}</span><strong>—</strong></div>`).join('');
  $('#mixInsights').innerHTML=`<div class="insight-card ok"><div class="insight-body">${i18n[L].issueNeedFile}</div></div>`;
  $('#mixFixits').innerHTML='';
  drawPlaceholderWave();
}

function drawPlaceholderWave(){const c=$('#waveform');const ctx=c.getContext('2d');resizeCanvas(c);ctx.clearRect(0,0,c.width,c.height);const g=ctx.createLinearGradient(0,0,c.width,0);g.addColorStop(0,'rgba(126,167,255,.6)');g.addColorStop(1,'rgba(118,242,198,.6)');ctx.strokeStyle=g;ctx.lineWidth=2;ctx.beginPath();for(let x=0;x<c.width;x++){const t=x/c.width;const y=c.height/2+Math.sin(t*12)*20*Math.sin(t*2.5);x===0?ctx.moveTo(x,y):ctx.lineTo(x,y);}ctx.stroke();}
function resizeCanvas(c){const r=window.devicePixelRatio||1;const w=c.clientWidth||800;const h=c.clientHeight||220;c.width=Math.floor(w*r);c.height=Math.floor(h*r);c.getContext('2d').setTransform(r,0,0,r,0,0);}

function analyzeAudioBuffer(buf){
  const sr=buf.sampleRate,len=buf.length,ch0=buf.getChannelData(0),ch1=buf.numberOfChannels>1?buf.getChannelData(1):ch0;
  let peak=0,sumSq=0,corrNum=0,corrDenL=0,corrDenR=0,sideLow=0,midLow=0;
  let low=0,lowMid=0,highMid=0,high=0;
  const step=Math.max(1,Math.floor(len/24000));
  let prevL=0,prevR=0;const aLow=Math.exp(-2*Math.PI*120/sr);let lpL=0,lpR=0;
  for(let i=0;i<len;i+=step){
    const l=ch0[i],r=ch1[i],m=(l+r)*.5,s=(l-r)*.5;
    peak=Math.max(peak,Math.abs(l),Math.abs(r));
    sumSq+=(l*l+r*r)*.5;
    corrNum+=l*r;corrDenL+=l*l;corrDenR+=r*r;
    lpL=(1-aLow)*l+aLow*lpL;lpR=(1-aLow)*r+aLow*lpR;
    const lM=(lpL+lpR)*.5,lS=(lpL-lpR)*.5;
    midLow+=Math.abs(lM);sideLow+=Math.abs(lS);
    const dL=Math.abs(l-prevL),dR=Math.abs(r-prevR),hf=(dL+dR)*.5;
    low+=Math.abs((lpL+lpR)*.5);
    lowMid+=Math.max(0,Math.abs(m)-Math.abs(lM))*.65;
    highMid+=hf*.85;high+=hf*.35;
    prevL=l;prevR=r;
  }
  const n=Math.ceil(len/step);
  const rms=Math.sqrt(sumSq/n);
  const peakDb=db(peak),rmsDb=db(rms),crest=peakDb-rmsDb;
  // Normalized correlation: r = sum(L*R) / sqrt(sum(L²)*sum(R²))
  const corr=corrNum/Math.max(1e-9,Math.sqrt(corrDenL*corrDenR));
  const lowSideRatio=sideLow/Math.max(1e-9,midLow);
  const bandSum=low+lowMid+highMid+high+1e-9;
  // Estimated LUFS (rough: RMS - 0.691 offset, not true K-weighted but useful indicator)
  const lufsEst=rmsDb-0.7;
  return{peakDb,rmsDb,crest,corr,lowSideRatio,lufsEst,bands:{low:low/bandSum,lowMid:lowMid/bandSum,highMid:highMid/bandSum,high:high/bandSum},mono:Float32Array.from({length:len},(_,i)=>buf.numberOfChannels>1?(ch0[i]+ch1[i])*.5:ch0[i])};
}
function db(v){return 20*Math.log10(Math.max(v,1e-9));}
function prettyDb(v){return`${v.toFixed(1)} dB`;}

function drawWaveform(samples){const c=$('#waveform');const ctx=c.getContext('2d');resizeCanvas(c);const w=c.clientWidth||800,h=c.clientHeight||220;ctx.clearRect(0,0,w,h);const g=ctx.createLinearGradient(0,0,w,0);g.addColorStop(0,'rgba(126,167,255,.95)');g.addColorStop(.5,'rgba(118,242,198,.95)');g.addColorStop(1,'rgba(255,127,183,.95)');ctx.strokeStyle=g;ctx.lineWidth=2;ctx.beginPath();const bk=Math.max(1,Math.floor(samples.length/w));for(let x=0;x<w;x++){let mx=0;const st=x*bk,en=Math.min(samples.length,st+bk);for(let i=st;i<en;i++)mx=Math.max(mx,Math.abs(samples[i]));const y=h/2,amp=mx*(h*.42);ctx.moveTo(x,y-amp);ctx.lineTo(x,y+amp);}ctx.stroke();}

function renderMixResults(res){
  const L=state.lang;const t=k=>i18n[L][k];
  $('#metricPeak').textContent=prettyDb(res.peakDb);
  $('#metricRms').textContent=prettyDb(res.rmsDb);
  $('#metricCrest').textContent=`${res.crest.toFixed(1)} dB`;
  $('#metricLufs').textContent=`${res.lufsEst.toFixed(1)} LUFS`;
  $('#metricCorr').textContent=res.corr.toFixed(3);
  const b=res.bands;
  $('#bandBar').innerHTML=[['bandsLow',b.low],['bandsLowMid',b.lowMid],['bandsHighMid',b.highMid],['bandsHigh',b.high]].map(([l,v])=>`<div class="band-pill"><span>${i18n[L][l]}</span><strong>${Math.round(v*100)}%</strong></div>`).join('');

  // Evidence-based insights
  const insights=[];
  const triggers=[];

  if(res.peakDb>-0.8){
    insights.push({kind:'bad',title:L==='fr'?'Peak trop haut':'Peak too hot',
      rule:`Peak > -0.8 dBFS (${prettyDb(res.peakDb)})`,
      bodyEn:'Your mix is clipping or very close to 0 dBFS. Mastering needs headroom.',bodyFr:'Ton mix clippe ou frôle le 0 dBFS. Le mastering a besoin de headroom.',
      whyEn:'Clipping introduces harsh distortion. Mastering engineers need at least -1 dBFS headroom.',whyFr:'Le clipping introduit de la distortion. Le mastering a besoin d\'au moins -1 dBFS.',
      fixEn:'Lower the master fader or all track faders by -3dB.',fixFr:'Baisse le fader master ou tous les faders de -3dB.',
      stopEn:'peaks sit below -1 dBFS.',stopFr:'les peaks sont sous -1 dBFS.'});
    triggers.push('peakHot');
  }
  if(res.crest<8){
    insights.push({kind:'warn',title:L==='fr'?'Dynamique écrasée':'Dynamics crushed',
      rule:`Crest < 8 dB (${res.crest.toFixed(1)} dB)`,
      bodyEn:'Low crest factor suggests heavy limiting or compression. The mix may sound flat.',bodyFr:'Faible facteur de crête: le mix semble tassé par du limiting/compression.',
      whyEn:'Crest factor measures the difference between peak and RMS — below 8dB signals over-compression.',whyFr:'Le facteur de crête mesure la différence peak/RMS — sous 8dB = surcompression.',
      fixEn:'Check drum bus and master limiter. Reduce GR to max -2dB.',fixFr:'Check le bus drums et le limiteur master. Réduis le GR à max -2dB.',
      stopEn:'crest is above 10 dB.',stopFr:'le crest est au-dessus de 10 dB.'});
    triggers.push('crestLow');
  }
  if(res.lowSideRatio>0.28){
    insights.push({kind:'warn',title:L==='fr'?'Grave trop large':'Low-end too wide',
      rule:`Side/Mid < 120Hz > 0.28 (${res.lowSideRatio.toFixed(2)})`,
      bodyEn:'Significant stereo energy below 120Hz. This may cause issues on mono club systems.',bodyFr:'Énergie stéréo importante sous 120Hz. Problèmes possibles sur systèmes mono club.',
      whyEn:'Sub frequencies in stereo create phase cancellation on mono systems — energy loss.',whyFr:'Les fréquences sub en stéréo créent de l\'annulation de phase en mono — perte d\'énergie.',
      fixEn:'Use Ozone Imager or Pro-Q 4 M/S to mono everything below 120Hz.',fixFr:'Utilise Ozone Imager ou Pro-Q 4 M/S pour mono sous 120Hz.',
      stopEn:'side energy below 120Hz is minimal.',stopFr:'l\'énergie side sous 120Hz est minimale.'});
    triggers.push('lowSideRatio');
  }
  if(b.lowMid>0.38){
    insights.push({kind:'warn',title:L==='fr'?'Bas médiums lourds':'Low mids heavy',
      rule:`Low-mid share > 38% (${Math.round(b.lowMid*100)}%)`,
      bodyEn:'The 200–450Hz range carries more energy than expected. This often causes muddiness.',bodyFr:'La zone 200–450Hz porte plus d\'énergie que prévu. C\'est souvent la cause de la boue.',
      whyEn:'Low-mid buildup is cumulative — it comes from overlapping kick, bass, synths and reverbs.',whyFr:'L\'accumulation bas-mids est cumulative — overlap entre kick, basse, synths et reverbs.',
      fixEn:'Find the worst offender in 200–400Hz. Cut there first with Pro-Q 4.',fixFr:'Trouve la piste la pire dans 200–400Hz. Coupe là en premier avec Pro-Q 4.',
      stopEn:'the mix sounds clear at low volume.',stopFr:'le mix sonne clair à bas volume.'});
    triggers.push('lowMidHeavy');
  }
  if(b.high>0.22){
    insights.push({kind:'warn',title:L==='fr'?'Aigu agressif possible':'High-end may be sharp',
      rule:`High share > 22% (${Math.round(b.high*100)}%)`,
      bodyEn:'Elevated high-frequency energy. Check hats, claps, risers and exciters around 4–10kHz.',bodyFr:'Énergie haute fréquence élevée. Check hats, claps, risers et exciteurs 4–10kHz.',
      whyEn:'Excessive highs cause listening fatigue. They often sound impressive at first but tire quickly.',whyFr:'L\'excès d\'aigus cause de la fatigue d\'écoute. Ça impressionne d\'abord mais fatigue vite.',
      fixEn:'Pro-DS on the bus, or dynamic EQ at 6kHz on the worst source.',fixFr:'Pro-DS sur le bus, ou EQ dynamique à 6kHz sur la source la pire.',
      stopEn:'highs feel present but not sharp at moderate volume.',stopFr:'les aigus sont présents mais pas agressifs à volume modéré.'});
    triggers.push('highSharp');
  }
  if(res.corr<0.3){
    insights.push({kind:'warn',title:L==='fr'?'Corrélation stéréo basse':'Low stereo correlation',
      rule:`Correlation < 0.3 (${res.corr.toFixed(3)})`,
      bodyEn:'The left and right channels are weakly correlated. Parts of the mix may cancel in mono.',bodyFr:'Les canaux gauche/droit sont faiblement corrélés. Des parties du mix peuvent s\'annuler en mono.',
      whyEn:'Correlation below 0.3 means some elements are almost out of phase — they vanish in mono.',whyFr:'Corrélation sous 0.3 = certains éléments sont presque en opposition de phase — ils disparaissent en mono.',
      fixEn:'Check with Utility in mono. Fix anything that disappears or drops significantly.',fixFr:'Check avec Utility en mono. Corrige tout ce qui disparaît.',
      stopEn:'correlation stays above 0.3 and the mix survives mono.',stopFr:'la corrélation reste au-dessus de 0.3 et le mix tient en mono.'});
    triggers.push('stereoWeak');
  }
  if(res.lufsEst<-20){
    insights.push({kind:'warn',title:L==='fr'?'Niveau global bas':'Overall level low',
      rule:`LUFS est. < -20 (${res.lufsEst.toFixed(1)} LUFS)`,
      bodyEn:'The estimated loudness is low. Check gain staging across your tracks.',bodyFr:'Le volume estimé est bas. Check le gain staging sur tes pistes.',
      whyEn:'Low overall level often means individual tracks are too quiet — gain staging issue.',whyFr:'Un niveau global bas signifie souvent que les pistes individuelles sont trop basses.',
      fixEn:'Gain stage each track to peak around -12dBFS before mixing.',fixFr:'Gain stage chaque piste pour peak autour de -12dBFS.',
      stopEn:'RMS sits around -14 to -10 dBFS before mastering.',stopFr:'le RMS est autour de -14 à -10 dBFS avant mastering.'});
  }

  if(!insights.length){
    $('#mixInsights').innerHTML=`<div class="insight-card ok"><div class="insight-body">${i18n[L].issueNone}</div></div>`;
  } else {
    $('#mixInsights').innerHTML=insights.map(ins=>`
      <div class="insight-card ${ins.kind}">
        <div class="insight-head"><strong>${ins.title}</strong><span class="insight-rule">${ins.rule}</span></div>
        <div class="insight-body">${L==='fr'?ins.bodyFr:ins.bodyEn}</div>
        <div class="insight-learn">
          <p><strong>${t('insightWhy')}:</strong> ${L==='fr'?ins.whyFr:ins.whyEn}</p>
          <p><strong>${t('insightFix')}:</strong> ${L==='fr'?ins.fixFr:ins.fixEn}</p>
          <p><strong>${t('insightStop')}:</strong> ${L==='fr'?ins.stopFr:ins.stopEn}</p>
        </div>
      </div>
    `).join('');
  }

  // Related Fix-Its
  const relatedFix=fixIt.filter(f=>f.trigger&&triggers.includes(f.trigger));
  if(relatedFix.length){
    const L2=state.lang;
    $('#mixFixits').innerHTML=`<p class="mix-fixits-title">${i18n[L2].relatedFixits}</p>`+relatedFix.map(f=>`<div class="fixit-card" style="margin-bottom:10px"><div class="fixit-symptom"><span class="fixit-dot"></span>${L2==='fr'?f.sFr:f.sEn}</div><div class="fixit-check"><strong>${i18n[L2].fixitCheck}:</strong> ${L2==='fr'?f.checkFr:f.checkEn}</div>${f.moves.slice(0,2).map((m,i)=>`<div class="fixit-move"><span class="fixit-move-num">${i+1}</span><span>${L2==='fr'?m.fr:m.en}</span></div>`).join('')}</div>`).join('');
  } else {
    $('#mixFixits').innerHTML='';
  }
}

/* ═══ TOAST ═══ */
function showToast(text){const t=$('#toast');t.textContent=text;t.classList.add('is-open');clearTimeout(showToast._t);showToast._t=setTimeout(()=>t.classList.remove('is-open'),2200);}

/* ═══ BOOT ═══ */
function boot(){
  const gateEl=$('#gate'),shell=$('#appShell');
  if(localStorage.getItem('kapman-gate')==='ok'){gateEl.classList.add('is-hidden');shell.classList.remove('shell--hidden');}
  $('#enterBtn').onclick=()=>{if($('#passwordInput').value===PASSWORD){localStorage.setItem('kapman-gate','ok');gateEl.classList.add('is-hidden');shell.classList.remove('shell--hidden');$('#gateError').textContent='';}else{$('#gateError').textContent=i18n[state.lang].wrongPassword;}};
  $('#passwordInput').addEventListener('keydown',e=>{if(e.key==='Enter')$('#enterBtn').click();});
  setTheme(state.theme);
  $('#themeBtn').onclick=()=>setTheme(state.theme==='dark'?'light':'dark');
  $('#langEN').onclick=()=>setLang('en');$('#langFR').onclick=()=>setLang('fr');
  $$('.sidebar-link').forEach(b=>b.onclick=()=>switchPage(b.dataset.page));
  $$('.quick-nav').forEach(b=>b.onclick=()=>switchPage(b.dataset.target));
  $('#menuToggle').onclick=()=>{$('#sidebar').classList.toggle('is-open');$('#overlay').classList.toggle('is-open');};
  $('#overlay').onclick=()=>{$('#sidebar').classList.remove('is-open');$('#overlay').classList.remove('is-open');};
  $('#globalSearch').addEventListener('input',e=>{state.search=e.target.value;if(state.page!=='library')switchPage('library');renderPlugins();});
  $('#audioFile').addEventListener('change',async e=>{const f=e.target.files[0];if(!f)return;const ab=await f.arrayBuffer();const AC=window.AudioContext||window.webkitAudioContext;const ctx=new AC();const buf=await ctx.decodeAudioData(ab.slice(0));const res=analyzeAudioBuffer(buf);drawWaveform(res.mono);renderMixResults(res);showToast(i18n[state.lang].uploadDone);});
  window.addEventListener('resize',()=>{if(!$('#audioFile').files?.length)drawPlaceholderWave();});
  setLang(state.lang);
}
boot();
