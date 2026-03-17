const PASSWORD = "kapman";

const i18n = {
  en: {
    gateBadge: "Private preview",
    gateTitle: "Kapman Studio",
    gateBody: "Enter password to open the toolkit.",
    gatePlaceholder: "Password",
    gateEnter: "Enter",
    gateHint: "Tip: you can change the password in app.js later.",
    topEyebrow: "Production decision system",
    navHome: "Home",
    navLibrary: "Library",
    navSound: "Sound Design",
    navMix: "Mix Check",
    navFinish: "Finish",
    kpiPlugins: "plugins",
    kpiRecipes: "recipes",
    searchPlaceholder: "Search plug-ins, recipes, roles...",
    themeToggle: "Light",
    focusToggle: "Focus",
    heroEyebrow: "Private workflow cockpit",
    heroTitle: "Choose faster. Design deeper. Finish cleaner.",
    heroSub: "A lean production app for plug-in choice, sound design moves and pre-master checks.",
    heroBtnLibrary: "Open Library",
    heroBtnSound: "Open Sound Design",
    heroBtnMix: "Run Mix Check",
    heroStat1: "Selected stack",
    heroJump: "Jump in",
    microCard1Title: "Fast lane",
    microCard1Value: "Dark bass stack",
    microCard2Title: "Check now",
    microCard2Value: "Low-end mono",
    microCard3Title: "Sound focus",
    microCard3Value: "Movement + tension",
    vendorsTitle: "Vendor rail",
    vendorsSub: "Fast entry points",
    homeCard1Label: "Library",
    homeCard1Title: "Browse by role, not by brand noise",
    homeCard1Body: "Open one grid. Pick a role. Use the inspector.",
    homeCard2Label: "Sound design",
    homeCard2Title: "Get stacks for bass, leads, motion and texture",
    homeCard2Body: "Recipes stay short. Details stay contextual.",
    homeCard3Label: "Mix check",
    homeCard3Title: "See measured signals, not fake guru talk",
    homeCard3Body: "Waveform, balance, stereo and triggered actions.",
    libraryEyebrow: "Expanded plug-in coverage",
    libraryTitle: "Library",
    inspectorEyebrow: "Inspector",
    inspectorTitle: "Pick one item",
    inspectorBody: "You get details here so the grid stays clean.",
    soundEyebrow: "Creative moves",
    soundTitle: "Sound Design",
    routeBandTitle: "Quick routes",
    routeBandSub: "One problem, one direction",
    recipesTitle: "Recipes",
    recipesSub: "Short stacks with a stop rule",
    mixEyebrow: "Measured only",
    mixTitle: "Mix Check",
    uploadEyebrow: "Drop audio",
    uploadTitle: "WAV / AIFF / MP3",
    uploadBody: "Client-side analysis only. Nothing leaves your browser.",
    uploadBtn: "Choose file",
    metricPeak: "Peak",
    metricRms: "RMS",
    metricCrest: "Crest",
    metricStereo: "Stereo",
    finishEyebrow: "End game",
    finishTitle: "Finish",
    finishCard1: "Before export",
    finishCard2: "Reference pass",
    finishCard3: "Sound design sanity",
    pageHome: "Home",
    pageLibrary: "Library",
    pageSound: "Sound Design",
    pageMix: "Mix Check",
    pageFinish: "Finish",
    themeLightLabel: "Light",
    themeDarkLabel: "Dark",
    focusOnLabel: "Focus on",
    focusOffLabel: "Focus off",
    issueNone: "No triggered issues from the current measurement.",
    issueNeedFile: "Load a file to get measured results.",
    uploadDone: "Audio loaded",
    wrongPassword: "Wrong password",
    bandsLow: "Low",
    bandsLowMid: "Low mids",
    bandsHighMid: "High mids",
    bandsHigh: "High",
    mixActionTitle: "Try",
    filterAll: "All",
    filterMix: "Mix",
    filterSound: "Sound",
    filterDynamics: "Dynamics",
    filterSpace: "Space",
    filterTone: "Tone",
    filterMotion: "Motion",
    filterInstrument: "Instrument",
    inspectorUse: "Best for",
    inspectorTouch: "Touch first",
    inspectorAvoid: "Avoid when",
    inspectorRole: "Role",
    inspectorMode: "Mode",
    inspectorRecipe: "Related recipe",
    vendorJump: "Open",
    stopRuleLabel: "Stop rule",
    routeUse: "Use when",
    recipeUses: "Uses",
    finishA1: "Peak margin still below about -1 dBFS before mastering.",
    finishA2: "Kick and bass still read clearly at low volume.",
    finishA3: "No single FX throw steals the whole section.",
    finishA4: "Transitions still feel intentional with drums muted.",
    finishB1: "Compare against one reference, not five random tracks.",
    finishB2: "Check laptop speakers and mono after studio speakers.",
    finishB3: "Only correct what repeats as a problem twice.",
    finishB4: "If the top end feels impressive only when loud, re-check it.",
    finishC1: "Mute decorative layers one by one. Keep only what moves the track.",
    finishC2: "If one patch needs too much fixing, swap the source sooner.",
    finishC3: "Automate one macro hard, not six tiny moves everywhere.",
    finishC4: "Leave one signature texture per section, not three competing ones.",
    pageFixit: "Fix-It",
    navFixit: "Fix-It",
    fixitEyebrow: "Symptom to solution",
    fixitTitle: "Fix-It"
  },
  fr: {
    gateBadge: "Aperçu privé",
    gateTitle: "Kapman Studio",
    gateBody: "Entre le mot de passe pour ouvrir le toolkit.",
    gatePlaceholder: "Mot de passe",
    gateEnter: "Entrer",
    gateHint: "Astuce : tu peux changer le mot de passe plus tard dans app.js.",
    topEyebrow: "Système de décision production",
    navHome: "Accueil",
    navLibrary: "Bibliothèque",
    navSound: "Sound design",
    navMix: "Mix Check",
    navFinish: "Finalisation",
    kpiPlugins: "plugins",
    kpiRecipes: "recettes",
    searchPlaceholder: "Chercher plugins, recettes, rôles...",
    themeToggle: "Clair",
    focusToggle: "Focus",
    heroEyebrow: "Cockpit de workflow privé",
    heroTitle: "Choisir plus vite. Designer plus profond. Finir plus propre.",
    heroSub: "Une app de prod légère pour choisir tes plugins, tes moves de sound design et checker le pré-master.",
    heroBtnLibrary: "Ouvrir la bibliothèque",
    heroBtnSound: "Ouvrir le sound design",
    heroBtnMix: "Lancer Mix Check",
    heroStat1: "Stack sélectionné",
    heroJump: "Ouvrir",
    microCard1Title: "Fast lane",
    microCard1Value: "Stack bass dark",
    microCard2Title: "À checker",
    microCard2Value: "Mono du low-end",
    microCard3Title: "Focus son",
    microCard3Value: "Mouvement + tension",
    vendorsTitle: "Rail vendors",
    vendorsSub: "Entrées rapides",
    homeCard1Label: "Bibliothèque",
    homeCard1Title: "Navigue par rôle, pas par bruit de marque",
    homeCard1Body: "Une grille. Un rôle. Les détails dans l’inspector.",
    homeCard2Label: "Sound design",
    homeCard2Title: "Des stacks pour basses, leads, mouvement et texture",
    homeCard2Body: "Les recettes restent courtes. Les détails restent contextuels.",
    homeCard3Label: "Mix check",
    homeCard3Title: "Des mesures visibles, pas du pseudo guru talk",
    homeCard3Body: "Waveform, balance, stéréo et actions déclenchées.",
    libraryEyebrow: "Couverture plugin élargie",
    libraryTitle: "Bibliothèque",
    inspectorEyebrow: "Inspector",
    inspectorTitle: "Choisis un item",
    inspectorBody: "Les détails arrivent ici pour garder la grille propre.",
    soundEyebrow: "Moves créatifs",
    soundTitle: "Sound Design",
    routeBandTitle: "Routes rapides",
    routeBandSub: "Un problème, une direction",
    recipesTitle: "Recettes",
    recipesSub: "Stacks courts avec règle d’arrêt",
    mixEyebrow: "Mesures seulement",
    mixTitle: "Mix Check",
    uploadEyebrow: "Glisse ton audio",
    uploadTitle: "WAV / AIFF / MP3",
    uploadBody: "Analyse côté navigateur uniquement. Rien n’est envoyé.",
    uploadBtn: "Choisir un fichier",
    metricPeak: "Peak",
    metricRms: "RMS",
    metricCrest: "Crest",
    metricStereo: "Stéréo",
    finishEyebrow: "Dernière ligne droite",
    finishTitle: "Finalisation",
    finishCard1: "Avant export",
    finishCard2: "Passage référence",
    finishCard3: "Sanity check sound design",
    pageHome: "Accueil",
    pageLibrary: "Bibliothèque",
    pageSound: "Sound Design",
    pageMix: "Mix Check",
    pageFinish: "Finalisation",
    themeLightLabel: "Clair",
    themeDarkLabel: "Sombre",
    focusOnLabel: "Focus on",
    focusOffLabel: "Focus off",
    issueNone: "Aucune alerte déclenchée avec la mesure actuelle.",
    issueNeedFile: "Charge un fichier pour obtenir des résultats.",
    uploadDone: "Audio chargé",
    wrongPassword: "Mauvais mot de passe",
    bandsLow: "Grave",
    bandsLowMid: "Bas médiums",
    bandsHighMid: "Hauts médiums",
    bandsHigh: "Aigu",
    mixActionTitle: "Tester",
    filterAll: "Tout",
    filterMix: "Mix",
    filterSound: "Sound",
    filterDynamics: "Dynamique",
    filterSpace: "Espace",
    filterTone: "Tonalité",
    filterMotion: "Mouvement",
    filterInstrument: "Instrument",
    inspectorUse: "Idéal pour",
    inspectorTouch: "À toucher d’abord",
    inspectorAvoid: "À éviter quand",
    inspectorRole: "Rôle",
    inspectorMode: "Mode",
    inspectorRecipe: "Recette liée",
    vendorJump: "Ouvrir",
    stopRuleLabel: "Règle d’arrêt",
    routeUse: "À utiliser quand",
    recipeUses: "Utilise",
    finishA1: "La marge peak reste environ sous -1 dBFS avant le master.",
    finishA2: "Kick et basse restent lisibles à bas volume.",
    finishA3: "Aucun FX throw ne vole toute la section.",
    finishA4: "Les transitions restent intentionnelles même sans les drums.",
    finishB1: "Compare à une seule référence, pas cinq morceaux au hasard.",
    finishB2: "Check laptop et mono après les enceintes studio.",
    finishB3: "Ne corrige que ce qui revient deux fois comme problème.",
    finishB4: "Si l’aigu impressionne seulement fort, recheck-le.",
    finishC1: "Mute les couches décoratives une par une. Garde seulement ce qui pousse le morceau.",
    finishC2: "Si un patch demande trop de chirurgie, change de source plus tôt.",
    finishC3: "Automatise un macro fort, pas six micro moves partout.",
    finishC4: "Garde une texture signature par section, pas trois qui se battent.",
    pageFixit: "Fix-It",
    navFixit: "Fix-It",
    fixitEyebrow: "Symptome vers solution",
    fixitTitle: "Fix-It"
  }
};

const vendors = [
  { id: 'fabfilter', mark: 'FF', name: 'FabFilter', pitchEn: 'Precision and visual workflow', pitchFr: 'Précision et workflow visuel', glow: '#7ea7ff' },
  { id: 'd16', mark: 'D16', name: 'D16', pitchEn: 'Machine energy and edge', pitchFr: 'Énergie machine et mordant', glow: '#ff8b6e' },
  { id: 'eventide', mark: 'EV', name: 'Eventide', pitchEn: 'Space, pitch and weirdness', pitchFr: 'Espace, pitch et étrangeté', glow: '#8d83ff' },
  { id: 'xfer', mark: 'XF', name: 'Xfer', pitchEn: 'Modern synth control', pitchFr: 'Contrôle synth moderne', glow: '#76f2c6' },
  { id: 'baby-audio', mark: 'BA', name: 'Baby Audio', pitchEn: 'Creative polish fast', pitchFr: 'Polish créatif rapide', glow: '#ff7fb7' },
  { id: 'uhe', mark: 'UH', name: 'u-he', pitchEn: 'Analog soul in code', pitchFr: 'Âme analogique en code', glow: '#b695e6' },
  { id: 'arturia', mark: 'AR', name: 'Arturia', pitchEn: 'Classic synths reborn', pitchFr: 'Classiques ressuscités', glow: '#5cc5e6' },
  { id: 'valhalla', mark: 'VL', name: 'Valhalla', pitchEn: 'Reverb and space mastery', pitchFr: 'Maîtrise reverb et espace', glow: '#6dd69e' },
  { id: 'izotope', mark: 'IZ', name: 'iZotope', pitchEn: 'Intelligent mixing and mastering', pitchFr: 'Mix et master intelligent', glow: '#5ce6a5' },
  { id: 'cableguys', mark: 'CG', name: 'Cableguys', pitchEn: 'Modulation and volume shaping', pitchFr: 'Modulation et shaping de volume', glow: '#5c9ee6' },
  { id: 'devious', mark: 'DM', name: 'Devious Machines', pitchEn: 'Creative multi-FX chaos', pitchFr: 'Chaos multi-FX créatif', glow: '#e65c5c' },
  { id: 'korg', mark: 'KG', name: 'KORG', pitchEn: 'Iconic polysynth character', pitchFr: 'Caractère polysynth iconique', glow: '#ccc65c' }
];
const plugins = [
  {id:'ff-proq4', vendor:'fabfilter', name:'Pro-Q 4', roleEn:'surgical EQ', roleFr:'EQ chirurgical', mode:'mix', tags:['tone','mix'], useEn:'cut mud, shape harshness, dynamic control', useFr:'couper la boue, calmer la dureté, contrôle dynamique', touchEn:'250–400 Hz, 2–5 kHz, dynamic bands', touchFr:'250–400 Hz, 2–5 kHz, bandes dynamiques', avoidEn:'you still do not know what the source should be', avoidFr:'tu ne sais pas encore ce que la source doit être', recipe:'Dark Bass Cleanup', glow:'#7ea7ff'},
  {id:'ff-proc3', vendor:'fabfilter', name:'Pro-C 3', roleEn:'compressor', roleFr:'compresseur', mode:'mix', tags:['dynamics','mix'], useEn:'tight buses, add punch, level control', useFr:'resserrer les bus, ajouter du punch, contrôler le niveau', touchEn:'style, attack, release, lookahead', touchFr:'style, attaque, release, lookahead', avoidEn:'you only want louder, not tighter', avoidFr:'tu veux juste plus fort, pas plus tight', recipe:'Drum Weight Bus', glow:'#7ea7ff'},
  {id:'ff-prol2', vendor:'fabfilter', name:'Pro-L 2', roleEn:'limiter', roleFr:'limiteur', mode:'mix', tags:['dynamics','mix'], useEn:'preview loudness before mastering, catch peaks', useFr:'prévisualiser le niveau avant mastering, attraper les pics', touchEn:'style, attack, lookahead, true peak', touchFr:'style, attaque, lookahead, true peak', avoidEn:'you are still changing the arrangement', avoidFr:'tu changes encore l’arrangement', recipe:'Pre-master Sanity', glow:'#7ea7ff'},
  {id:'ff-pror2', vendor:'fabfilter', name:'Pro-R 2', roleEn:'reverb', roleFr:'reverb', mode:'sound', tags:['space','sound'], useEn:'clean modern space, controlled width', useFr:'espace moderne propre, largeur contrôlée', touchEn:'distance, brightness, ducking', touchFr:'distance, brightness, ducking', avoidEn:'you want a very dirty vintage tail', avoidFr:'tu veux une queue très sale et vintage', recipe:'Clean Modern Space', glow:'#7ea7ff'},
  {id:'ff-saturn2', vendor:'fabfilter', name:'Saturn 2', roleEn:'saturation and movement', roleFr:'saturation et mouvement', mode:'sound', tags:['tone','motion','sound'], useEn:'growl, grit, harmonic lift, macro movement', useFr:'growl, grit, lift harmonique, mouvement macro', touchEn:'band split, drive tone, dynamics, modulation', touchFr:'split bands, tone du drive, dynamique, modulation', avoidEn:'the sound is already too busy in the mids', avoidFr:'le son est déjà trop chargé dans les mids', recipe:'Indie Drive Lead', glow:'#7ea7ff'},
  {id:'ff-timeless3', vendor:'fabfilter', name:'Timeless 3', roleEn:'modulated delay', roleFr:'delay modulé', mode:'sound', tags:['space','motion','sound'], useEn:'throws, movement, evolving repeats', useFr:'throws, mouvement, répétitions évolutives', touchEn:'filter, feedback, diffusion, modulation sources', touchFr:'filtre, feedback, diffusion, sources de modulation', avoidEn:'the groove is already too smeared', avoidFr:'le groove est déjà trop flou', recipe:'Break Tension Throw', glow:'#7ea7ff'},
  {id:'ff-volcano3', vendor:'fabfilter', name:'Volcano 3', roleEn:'filter motion', roleFr:'filtre en mouvement', mode:'sound', tags:['motion','sound'], useEn:'animated filter design and sweeps', useFr:'design filtré animé et sweeps', touchEn:'XLFO, envelope, drive, stereo', touchFr:'XLFO, envelope, drive, stéréo', avoidEn:'you just need static cleanup EQ', avoidFr:'tu as juste besoin d’un EQ fixe', recipe:'Movement Filter Lane', glow:'#7ea7ff'},
  {id:'ff-prods', vendor:'fabfilter', name:'Pro-DS', roleEn:'de-esser', roleFr:'de-esser', mode:'mix', tags:['tone','mix'], useEn:'calm sharp hats, vocals, bright synth edges', useFr:'calmer hats agressifs, voix, bords de synth brillants', touchEn:'wide band, threshold, range', touchFr:'wide band, threshold, range', avoidEn:'the issue is broad harshness, not sibilance', avoidFr:'le problème est une dureté large, pas de la sibilance', recipe:'Top-End Taming', glow:'#7ea7ff'},
  {id:'ff-promb', vendor:'fabfilter', name:'Pro-MB', roleEn:'multiband dynamics', roleFr:'dynamique multibande', mode:'mix', tags:['dynamics','mix'], useEn:'contain low mids, tame resonant ranges', useFr:'tenir les bas médiums, calmer les zones résonantes', touchEn:'range, attack, release, knee', touchFr:'range, attaque, release, knee', avoidEn:'you do not know the trouble band yet', avoidFr:'tu n’as pas encore identifié la bande problème', recipe:'Muddy Mix Rescue', glow:'#7ea7ff'},
  {id:'ff-prog', vendor:'fabfilter', name:'Pro-G', roleEn:'gate/expander', roleFr:'gate/expander', mode:'mix', tags:['dynamics','mix'], useEn:'tighten noise, sharper drum tails', useFr:'nettoyer le bruit, queues de drums plus nettes', touchEn:'range, hysteresis, sidechain', touchFr:'range, hysteresis, sidechain', avoidEn:'the source needs room, not chopping', avoidFr:'la source a besoin d’air, pas d’être coupée', recipe:'Tight Drum Tail', glow:'#7ea7ff'},
  {id:'ff-twin3', vendor:'fabfilter', name:'Twin 3', roleEn:'modular synth', roleFr:'synth modulable', mode:'sound', tags:['instrument','sound'], useEn:'clean modern synths with deep modulation', useFr:'synths modernes propres avec modulation profonde', touchEn:'filter shape, env amount, XLFO lanes', touchFr:'forme du filtre, amount d’env, lanes XLFO', avoidEn:'you want instant nostalgic color', avoidFr:'tu veux une couleur nostalgique immédiate', recipe:'Glass Motion Keys', glow:'#7ea7ff'},
  {id:'ff-one', vendor:'fabfilter', name:'One', roleEn:'simple mono synth', roleFr:'synth mono simple', mode:'sound', tags:['instrument','sound'], useEn:'fast basses, utility tones, minimal hooks', useFr:'basses rapides, tons utilitaires, hooks minimaux', touchEn:'filter, drive, env amount', touchFr:'filtre, drive, env amount', avoidEn:'you need massive wavetable movement', avoidFr:'tu as besoin d’un gros mouvement wavetable', recipe:'Minimal Mono Hook', glow:'#7ea7ff'},

  {id:'d16-drumazon2', vendor:'d16', name:'Drumazon 2', roleEn:'909 drum machine', roleFr:'boîte à rythmes 909', mode:'sound', tags:['instrument','sound'], useEn:'punchy club drums, machine grooves', useFr:'drums club punchy, groove machine', touchEn:'decay, tuning, groove, bus drive', touchFr:'decay, tuning, groove, drive de bus', avoidEn:'you need organic human drums', avoidFr:'tu veux des drums organiques humaines', recipe:'909 Pressure Loop', glow:'#ff8b6e'},
  {id:'d16-nepheton2', vendor:'d16', name:'Nepheton 2', roleEn:'808 drum machine', roleFr:'boîte à rythmes 808', mode:'sound', tags:['instrument','sound'], useEn:'boomy kicks and classic machine percussion', useFr:'kicks ronds et percussions machine classiques', touchEn:'tone, snappy, sub length', touchFr:'tone, snappy, longueur du sub', avoidEn:'you want modern click-heavy kicks only', avoidFr:'tu veux seulement des kicks modernes très clickés', recipe:'808 Foundation', glow:'#ff8b6e'},
  {id:'d16-nithonat2', vendor:'d16', name:'Nithonat 2', roleEn:'606 drum machine', roleFr:'boîte à rythmes 606', mode:'sound', tags:['instrument','sound'], useEn:'lighter hats and agile percs', useFr:'hats plus légers et percs agiles', touchEn:'accent, tuning, decay', touchFr:'accent, tuning, decay', avoidEn:'you need oversized festival drums', avoidFr:'tu veux des drums énormes type festival', recipe:'Minimal Perc Frame', glow:'#ff8b6e'},
  {id:'d16-phoscyon2', vendor:'d16', name:'Phoscyon 2', roleEn:'303 acid line', roleFr:'ligne acid 303', mode:'sound', tags:['instrument','sound'], useEn:'acid hooks and squelchy movement', useFr:'hooks acid et mouvement squelchy', touchEn:'accent, slide, distortion, env mod', touchFr:'accent, slide, distortion, env mod', avoidEn:'you need a wide lush lead', avoidFr:'tu veux un lead large et lush', recipe:'Acid Motion Lead', glow:'#ff8b6e'},
  {id:'d16-punchbox', vendor:'d16', name:'PunchBox', roleEn:'kick designer', roleFr:'designer de kick', mode:'sound', tags:['instrument','sound'], useEn:'layered club kicks fast', useFr:'kicks club layerés rapidement', touchEn:'click, body, sub, limiter', touchFr:'click, body, sub, limiteur', avoidEn:'you already have a perfect kick sample', avoidFr:'tu as déjà un sample de kick parfait', recipe:'Kick Build Fast', glow:'#ff8b6e'},
  {id:'d16-decimort2', vendor:'d16', name:'Decimort 2', roleEn:'bit crusher', roleFr:'bit crusher', mode:'sound', tags:['tone','sound'], useEn:'digital grit and old sampler edge', useFr:'grit digital et edge vieux sampler', touchEn:'jitter, resample, anti-alias', touchFr:'jitter, resample, anti-alias', avoidEn:'the source is already brittle', avoidFr:'la source est déjà cassante', recipe:'Lo-Fi Spark', glow:'#ff8b6e'},
  {id:'d16-redoptor2', vendor:'d16', name:'Redoptor 2', roleEn:'tube distortion', roleFr:'distorsion lampes', mode:'sound', tags:['tone','sound'], useEn:'rich harmonic aggression on basses and drums', useFr:'agressivité harmonique riche sur basses et drums', touchEn:'preamp, EQ, dynamics', touchFr:'preamp, EQ, dynamique', avoidEn:'you only need subtle glue', avoidFr:'tu veux juste une colle subtile', recipe:'Dirty Bass Pressure', glow:'#ff8b6e'},
  {id:'d16-sigmund2', vendor:'d16', name:'Sigmund 2', roleEn:'creative delay workstation', roleFr:'delay créatif', mode:'sound', tags:['space','motion','sound'], useEn:'rhythmic space, modulation chaos, reverse moments', useFr:'espace rythmique, chaos modulé, reverse', touchEn:'multi-tap timing, filter, modulation matrix', touchFr:'timing multi-tap, filtre, matrice de modulation', avoidEn:'you need a one-knob utility echo', avoidFr:'tu veux un simple écho utilitaire', recipe:'Wide Delay Maze', glow:'#ff8b6e'},
  {id:'d16-repeater', vendor:'d16', name:'Repeater', roleEn:'modeled delay', roleFr:'delay modélisé', mode:'sound', tags:['space','sound'], useEn:'vintage delay flavor with flexible stereo', useFr:'flaveur delay vintage avec stéréo flexible', touchEn:'delay model, tone, spread', touchFr:'modèle, tone, spread', avoidEn:'you need shimmer or huge modulation', avoidFr:'tu as besoin de shimmer ou grosse modulation', recipe:'Vintage Throw Lane', glow:'#ff8b6e'},
  {id:'d16-toraverb2', vendor:'d16', name:'Toraverb 2', roleEn:'algorithmic reverb', roleFr:'reverb algorithmique', mode:'sound', tags:['space','sound'], useEn:'lush synthetic rooms for dark material', useFr:'pièces synthétiques lush pour matière dark', touchEn:'mod depth, diffusion, EQ', touchFr:'profondeur de mod, diffusion, EQ', avoidEn:'you need a super clean modern room', avoidFr:'tu veux une room moderne ultra propre', recipe:'Dark Hall Tail', glow:'#ff8b6e'},
  {id:'d16-fazortan2', vendor:'d16', name:'Fazortan 2', roleEn:'phaser', roleFr:'phaser', mode:'sound', tags:['motion','sound'], useEn:'moving midrange and animated width', useFr:'mids mouvants et largeur animée', touchEn:'rate, feedback, spread', touchFr:'rate, feedback, spread', avoidEn:'the part already masks the vocal band', avoidFr:'la partie masque déjà la zone voix', recipe:'Moving Texture Lane', glow:'#ff8b6e'},
  {id:'d16-frontier', vendor:'d16', name:'Frontier', roleEn:'limiter/compressor', roleFr:'limiteur/compresseur', mode:'mix', tags:['dynamics','mix'], useEn:'fast peak catch on buses', useFr:'attraper vite les pics sur les bus', touchEn:'thump, release, output', touchFr:'thump, release, output', avoidEn:'you need transparent mastering only', avoidFr:'tu veux seulement de la transparence mastering', recipe:'Bus Safety', glow:'#ff8b6e'},
  {id:'d16-godfazer', vendor:'d16', name:'Godfazer', roleEn:'multi-FX motion', roleFr:'multi-FX mouvement', mode:'sound', tags:['motion','sound'], useEn:'filter, modulation and shimmer on one lane', useFr:'filtre, modulation et shimmer sur une seule lane', touchEn:'sequencer, drive, modulation routing', touchFr:'séquenceur, drive, routage modulation', avoidEn:'you only want one static effect', avoidFr:'tu veux un seul effet statique', recipe:'FX Motion Strip', glow:'#ff8b6e'},

  {id:'ev-blackhole', vendor:'eventide', name:'Blackhole', roleEn:'huge reverb', roleFr:'reverb immense', mode:'sound', tags:['space','sound'], useEn:'epic non-natural tails, void atmospheres', useFr:'queues épiques non naturelles, atmosphères abyssales', touchEn:'gravity, size, feedback', touchFr:'gravity, size, feedback', avoidEn:'you need a small realistic room', avoidFr:'tu as besoin d’une petite room réaliste', recipe:'Void Atmos Tail', glow:'#8d83ff'},
  {id:'ev-micropitch', vendor:'eventide', name:'MicroPitch', roleEn:'micro shift width', roleFr:'largeur micro shift', mode:'sound', tags:['space','sound'], useEn:'instant wideners, detuned gloss, vocal spread', useFr:'élargir vite, gloss désaccordé, spread vocal', touchEn:'detune, delay, mix', touchFr:'detune, delay, mix', avoidEn:'the part already collapses badly in mono', avoidFr:'la partie s’écroule déjà mal en mono', recipe:'Wide Lead Edge', glow:'#8d83ff'},
  {id:'ev-h3000', vendor:'eventide', name:'H3000 Factory Mk II', roleEn:'multi-FX pitch machine', roleFr:'machine pitch multi-FX', mode:'sound', tags:['motion','sound'], useEn:'wild pitch motion, vintage digital weirdness', useFr:'mouvement pitch sauvage, étrangeté digitale vintage', touchEn:'micro pitch, delays, modulation', touchFr:'micro pitch, delays, modulation', avoidEn:'you want a fast clean utility effect', avoidFr:'tu veux un effet utilitaire propre et rapide', recipe:'Hook Mutation', glow:'#8d83ff'},
  {id:'ev-crystals', vendor:'eventide', name:'Crystals', roleEn:'pitch-shift delay', roleFr:'delay pitch-shift', mode:'sound', tags:['space','sound'], useEn:'angelic rises, glassy throws, reverse-ish bloom', useFr:'montées angéliques, throws brillants, bloom', touchEn:'pitch interval, reverse, feedback', touchFr:'intervalle de pitch, reverse, feedback', avoidEn:'the section already has too much top shine', avoidFr:'la section a déjà trop de brillance', recipe:'Dream Throw', glow:'#8d83ff'},
  {id:'ev-ultratap', vendor:'eventide', name:'UltraTap', roleEn:'multi-tap designer', roleFr:'designer multi-tap', mode:'sound', tags:['space','motion','sound'], useEn:'rhythmic splashes and swelling echoes', useFr:'échos rythmiques et splashes en swell', touchEn:'spread, slurm, taps', touchFr:'spread, slurm, taps', avoidEn:'you just need one clean slap', avoidFr:'tu veux juste un slap clean', recipe:'Swarm Throw', glow:'#8d83ff'},
  {id:'ev-spliteq', vendor:'eventide', name:'SplitEQ', roleEn:'transient/tonal EQ', roleFr:'EQ transient/tonal', mode:'mix', tags:['tone','mix'], useEn:'separate attack and body for cleaner moves', useFr:'séparer attaque et corps pour des moves plus propres', touchEn:'transient split, dynamic bands', touchFr:'split transient, bandes dynamiques', avoidEn:'you need a fast broad EQ only', avoidFr:'tu as juste besoin d’un EQ large rapide', recipe:'Attack Body Separation', glow:'#8d83ff'},
  {id:'ev-physion', vendor:'eventide', name:'Physion Mk II', roleEn:'structural split FX', roleFr:'FX à séparation structurelle', mode:'sound', tags:['motion','sound'], useEn:'treat attack and sustain differently for movement', useFr:'traiter différemment attaque et sustain pour le mouvement', touchEn:'split sensitivity, delay on sustain, drive on transient', touchFr:'sensibilité split, delay sur sustain, drive sur transient', avoidEn:'the source is already too unstable', avoidFr:'la source est déjà trop instable', recipe:'Transient Motion FX', glow:'#8d83ff'},
  {id:'ev-sp2016', vendor:'eventide', name:'SP2016 Reverb', roleEn:'classic reverb', roleFr:'reverb classique', mode:'sound', tags:['space','sound'], useEn:'bigger but still familiar classic spaces', useFr:'espaces plus grands mais familiers', touchEn:'room type, decay, pre-delay', touchFr:'type de room, decay, pre-delay', avoidEn:'you want a futuristic synthetic wash', avoidFr:'tu veux un wash synthétique futuriste', recipe:'Classic Hall Weight', glow:'#8d83ff'},
  {id:'ev-omnipressor', vendor:'eventide', name:'Omnipressor', roleEn:'character dynamics', roleFr:'dynamique de caractère', mode:'mix', tags:['dynamics','mix'], useEn:'aggressive pump, flatten, exaggerate', useFr:'pump agressif, aplatir, exagérer', touchEn:'function, attack, release', touchFr:'function, attaque, release', avoidEn:'you need transparent control', avoidFr:'tu veux du contrôle transparent', recipe:'Violent Drum Clamp', glow:'#8d83ff'},
  {id:'ev-tverb', vendor:'eventide', name:'Tverb', roleEn:'room reverb with mic positioning', roleFr:'reverb room avec placement micros', mode:'sound', tags:['space','sound'], useEn:'depth that still feels directional', useFr:'profondeur qui reste directionnelle', touchEn:'mics, damping, decay', touchFr:'micros, damping, decay', avoidEn:'you want abstract tail design', avoidFr:'tu veux du design de queue abstrait', recipe:'Room Depth Placement', glow:'#8d83ff'},
  {id:'ev-echannel', vendor:'eventide', name:'EChannel', roleEn:'channel strip', roleFr:'channel strip', mode:'mix', tags:['tone','mix'], useEn:'quick console-like shaping', useFr:'shaping rapide façon console', touchEn:'filters, EQ, compressor', touchFr:'filtres, EQ, compresseur', avoidEn:'you need deep surgical correction', avoidFr:'tu as besoin de correction chirurgicale profonde', recipe:'Fast Channel Strip', glow:'#8d83ff'},
  {id:'ev-shimmerverb', vendor:'eventide', name:'ShimmerVerb', roleEn:'shimmer reverb', roleFr:'shimmer reverb', mode:'sound', tags:['space','sound'], useEn:'airy lifted tails and harmonic bloom', useFr:'queues aériennes et bloom harmonique', touchEn:'shimmer, diffusion, EQ', touchFr:'shimmer, diffusion, EQ', avoidEn:'the arrangement already has too much brightness', avoidFr:'l’arrangement a déjà trop de brillant', recipe:'Lifted Dream Tail', glow:'#8d83ff'},

  {id:'xf-serum', vendor:'xfer', name:'Serum', roleEn:'wavetable synth', roleFr:'synth wavetable', mode:'sound', tags:['instrument','sound'], useEn:'modern basses, plucks, precise modulation', useFr:'basses modernes, plucks, modulation précise', touchEn:'wavetable position, filter drive, macros', touchFr:'position de wavetable, drive du filtre, macros', avoidEn:'you need instant analog nostalgia', avoidFr:'tu veux de la nostalgie analogique immédiate', recipe:'Modern Bass Engine', glow:'#76f2c6'},
  {id:'xf-serumfx', vendor:'xfer', name:'Serum FX', roleEn:'multi-FX rack', roleFr:'rack multi-FX', mode:'sound', tags:['motion','sound'], useEn:'post-synth movement, OTT-style FX chains', useFr:'mouvement post-synth, chaînes FX façon OTT', touchEn:'hyper, dimension, filter, compressor', touchFr:'hyper, dimension, filtre, compresseur', avoidEn:'the source needs cleaner correction first', avoidFr:'la source demande d’abord une correction plus propre', recipe:'Hyper Width Lane', glow:'#76f2c6'},

  {id:'ba-crystalline', vendor:'baby-audio', name:'Crystalline', roleEn:'clean algorithmic reverb', roleFr:'reverb algorithmique propre', mode:'sound', tags:['space','sound'], useEn:'shiny modern space with control', useFr:'espace moderne brillant avec contrôle', touchEn:'ducking, sides, smoothing', touchFr:'ducking, sides, smoothing', avoidEn:'you want grime and vintage blur', avoidFr:'tu veux de la crasse et du flou vintage', recipe:'Modern Air Space', glow:'#ff7fb7'},
  {id:'ba-smooth', vendor:'baby-audio', name:'Smooth Operator', roleEn:'spectral balancer', roleFr:'équilibreur spectral', mode:'mix', tags:['tone','mix'], useEn:'fast cleanup of resonant harshness', useFr:'nettoyage rapide des résonances agressives', touchEn:'focus, threshold, sidechain', touchFr:'focus, threshold, sidechain', avoidEn:'the source is dull, not harsh', avoidFr:'la source est terne, pas agressive', recipe:'Harshness Fast Fix', glow:'#ff7fb7'},
  {id:'ba-comeback', vendor:'baby-audio', name:'Comeback Kid', roleEn:'character delay', roleFr:'delay à caractère', mode:'sound', tags:['space','sound'], useEn:'musical delay with quick vibe', useFr:'delay musical avec vibe rapide', touchEn:'drive, duck, width', touchFr:'drive, duck, largeur', avoidEn:'you need deep modulation routing', avoidFr:'tu veux un routage de modulation profond', recipe:'Simple Throw Fast', glow:'#ff7fb7'},
  {id:'ba-taip', vendor:'baby-audio', name:'TAIP', roleEn:'tape saturator', roleFr:'saturation bande', mode:'sound', tags:['tone','sound'], useEn:'soften transients and add vintage push', useFr:'adoucir les transients et ajouter un push vintage', touchEn:'presence, glue, noise', touchFr:'presence, glue, bruit', avoidEn:'you already lost too much clarity', avoidFr:'tu as déjà perdu trop de clarté', recipe:'Tape Heat Layer', glow:'#ff7fb7'},
  {id:'ba-transit2', vendor:'baby-audio', name:'Transit 2', roleEn:'transition designer', roleFr:'designer de transition', mode:'sound', tags:['motion','sound'], useEn:'macro transitions without ten separate automations', useFr:'transitions macro sans dix automations séparées', touchEn:'multi-effect chain, macro curve', touchFr:'chaîne multi-effets, courbe macro', avoidEn:'the section already has enough movement', avoidFr:'la section a déjà assez de mouvement', recipe:'Break Builder Fast', glow:'#ff7fb7'},
  {id:'ba-grainferno', vendor:'baby-audio', name:'Grainferno', roleEn:'granular instrument', roleFr:'instrument granulaire', mode:'sound', tags:['instrument','sound'], useEn:'textures, risers, tuned grains, evolving beds', useFr:'textures, risers, grains accordés, beds évolutifs', touchEn:'grain rate, pitch mode, density', touchFr:'rate des grains, mode de pitch, densité', avoidEn:'you need immediate clean mono leads', avoidFr:'tu veux des leads mono propres immédiats', recipe:'Granular Bed Maker', glow:'#ff7fb7'},
  {id:'ba-tekno', vendor:'baby-audio', name:'Tekno', roleEn:'drum synth', roleFr:'drum synth', mode:'sound', tags:['instrument','sound'], useEn:'synthetic drums without samples', useFr:'drums synthétiques sans samples', touchEn:'engine choice, transient, sequencer', touchFr:'choix d’engine, transient, séquenceur', avoidEn:'you already have a strong sample-based kit', avoidFr:'tu as déjà un kit sample fort', recipe:'Synth Drum Sketch', glow:'#ff7fb7'}
  // ─── u-he ───
  ,{id:'uh-diva', vendor:'uhe', name:'Diva', roleEn:'analog polysynth', roleFr:'polysynth analogique', mode:'sound', tags:['instrument','sound'], useEn:'basses, leads, pads — five oscillator models, five ZDF filters (Ladder, Cascade, Multimode, Bite, Uhbie)', useFr:'basses, leads, pads — cinq oscillateurs, cinq filtres ZDF', touchEn:'oscillator model, filter model, cutoff, env2 amount, voice drift, accuracy', touchFr:'modèle osc, filtre, cutoff, env2, drift, accuracy', avoidEn:'you need a wavetable engine or FM', avoidFr:'tu as besoin de wavetable ou FM', recipe:'Dark Sub Architect', glow:'#b695e6'}
  ,{id:'ar-cs80', vendor:'arturia', name:'CS-80 V4', roleEn:'expressive polysynth', roleFr:'polysynth expressif', mode:'sound', tags:['instrument','sound'], useEn:'dramatic pads, expressive leads with aftertouch', useFr:'pads dramatiques, leads expressifs avec aftertouch', touchEn:'brilliance, ring mod off, aftertouch to cutoff, dual layers', touchFr:'brilliance, ring mod off, aftertouch vers cutoff', avoidEn:'you need a simple mono bass', avoidFr:'tu veux une basse mono simple', recipe:'Blade Runner Wash', glow:'#5cc5e6'}
  ,{id:'ar-jup8', vendor:'arturia', name:'Jup-8 V4', roleEn:'lush polysynth', roleFr:'polysynth lush', mode:'sound', tags:['instrument','sound'], useEn:'warm pads, sync leads, bright arps — built-in chorus signature', useFr:'pads chauds, leads sync, arps — chorus signature', touchEn:'oscillator sync, pulse width, chorus mode, HPF', touchFr:'sync osc, pulse width, chorus mode, HPF', avoidEn:'you want a dark aggressive timbre', avoidFr:'tu veux un timbre dark agressif', recipe:'Silk Pad', glow:'#5cc5e6'}
  ,{id:'ar-miniv3', vendor:'arturia', name:'Mini V3', roleEn:'mono bass king', roleFr:'roi de la basse mono', mode:'sound', tags:['instrument','sound'], useEn:'fat mono basses, 3 oscillators, built-in overdrive', useFr:'basses mono grasses, 3 oscillateurs, overdrive', touchEn:'osc mix, filter cutoff, emphasis, contour, glide', touchFr:'mix osc, cutoff, emphasis, contour, glide', avoidEn:'you need polyphony', avoidFr:'tu as besoin de polyphonie', recipe:'Mono Beast Bass', glow:'#5cc5e6'}
  ,{id:'ar-pigments', vendor:'arturia', name:'Pigments', roleEn:'hybrid synth', roleFr:'synth hybride', mode:'sound', tags:['instrument','sound'], useEn:'granular textures, wavetable + VA, deep mod matrix', useFr:'textures granulaires, wavetable + VA, matrice de mod', touchEn:'engine per osc, granular position, mod matrix', touchFr:'engine par osc, position granulaire, matrice de mod', avoidEn:'you need instant vintage analog color', avoidFr:'tu veux du vintage analog immédiat', recipe:'Granular Texture Bed', glow:'#5cc5e6'}
  ,{id:'ar-minifreak', vendor:'arturia', name:'MiniFreak V', roleEn:'hybrid lead', roleFr:'lead hybride', mode:'sound', tags:['instrument','sound'], useEn:'textured leads with digital osc and analog filter', useFr:'leads texturés: osc digital + filtre analog', touchEn:'osc engine, filter, FX section, mod matrix', touchFr:'engine osc, filtre, FX, matrice de mod', avoidEn:'you want clean classic analog only', avoidFr:'tu veux uniquement de l analog classique', recipe:'Freak Texture Lead', glow:'#5cc5e6'}
  ,{id:'ar-dx7', vendor:'arturia', name:'DX7 V', roleEn:'FM synth', roleFr:'synth FM', mode:'sound', tags:['instrument','sound'], useEn:'electric basses, bells, metallic textures via FM synthesis', useFr:'basses electriques, cloches, textures metalliques en FM', touchEn:'algorithm, operator ratios, mod index, velocity', touchFr:'algorithme, ratios, index de mod, velocity', avoidEn:'you need warm subtractive analog', avoidFr:'tu veux du soustractif analog chaud', recipe:'FM Electric Bass', glow:'#5cc5e6'}
  ,{id:'ar-prophet5', vendor:'arturia', name:'Prophet-5 V', roleEn:'classic polysynth', roleFr:'polysynth classique', mode:'sound', tags:['instrument','sound'], useEn:'thick pads, 80s textures, poly-mod animation', useFr:'pads epais, textures 80s, animation poly-mod', touchEn:'poly-mod, filter env, pulse width', touchFr:'poly-mod, filter env, pulse width', avoidEn:'you need more than 5 voices', avoidFr:'tu as besoin de plus de 5 voix', recipe:'Prophet Atmosphere', glow:'#5cc5e6'}
  ,{id:'ar-sem', vendor:'arturia', name:'SEM V2', roleEn:'multimode filter bass', roleFr:'basse filtre multimode', mode:'sound', tags:['instrument','sound'], useEn:'growling basses with Oberheim multimode LP to Notch blend', useFr:'basses grognantes avec multimode Oberheim LP vers Notch', touchEn:'filter mode blend, cutoff, resonance, env', touchFr:'blend mode filtre, cutoff, resonance, env', avoidEn:'you need bright crystal leads', avoidFr:'tu veux des leads cristallins', recipe:'SEM Growl Bass', glow:'#5cc5e6'}
  ,{id:'ar-fet76', vendor:'arturia', name:'Comp FET-76', roleEn:'FET compressor', roleFr:'compresseur FET', mode:'mix', tags:['dynamics','mix'], useEn:'fast peak catching, punchy character compression', useFr:'attrape les pics, compression punchy', touchEn:'input for GR, attack 3, release 7, ratio 4:1', touchFr:'input pour le GR, attack 3, release 7, ratio 4:1', avoidEn:'you need transparent leveling', avoidFr:'tu veux du leveling transparent', recipe:'Vocal Sample Chain', glow:'#5cc5e6'}
  ,{id:'ar-mellofi', vendor:'arturia', name:'Tape MELLO-FI', roleEn:'tape color', roleFr:'couleur tape', mode:'sound', tags:['tone','sound'], useEn:'subtle tape wow, flutter and saturation at micro-dose', useFr:'wow, flutter et saturation tape en micro-dose', touchEn:'wow 8%, flutter 6%, saturation 12%, noise OFF', touchFr:'wow 8%, flutter 6%, saturation 12%, bruit OFF', avoidEn:'the source is already warm enough', avoidFr:'la source est assez chaude', recipe:'Tape Warmth Layer', glow:'#5cc5e6'}
  ,{id:'ar-dimensiond', vendor:'arturia', name:'Chorus DIMENSION-D', roleEn:'vintage chorus', roleFr:'chorus vintage', mode:'sound', tags:['motion','sound'], useEn:'instant Juno-style width and warmth in 4 modes', useFr:'largeur et chaleur Juno instantanee en 4 modes', touchEn:'mode I to IV, mix', touchFr:'mode I a IV, mix', avoidEn:'mono compatibility is critical', avoidFr:'la compatibilite mono est critique', recipe:'Silk Pad', glow:'#5cc5e6'}
  ,{id:'ar-refract', vendor:'arturia', name:'Efx REFRACT', roleEn:'granular FX', roleFr:'FX granulaire', mode:'sound', tags:['motion','sound'], useEn:'real-time granular for transitions and textures', useFr:'granulaire temps reel pour transitions et textures', touchEn:'grain size 50-100ms, density, pitch, spray, mix', touchFr:'taille grain, densite, pitch, spray, mix', avoidEn:'you need a clean utility effect', avoidFr:'tu veux un effet utilitaire propre', recipe:'Granular Transition', glow:'#5cc5e6'}
  ,{id:'vl-vintageverb', vendor:'valhalla', name:'VintageVerb', roleEn:'vintage algorithmic reverb', roleFr:'reverb algorithmique vintage', mode:'sound', tags:['space','sound'], useEn:'22 algorithms, 3 color eras (70s/80s/Now) — Concert Hall, Smooth Plate, Dirty Hall, Cathedral, Palace', useFr:'22 algorithmes, 3 eres (70s/80s/Now)', touchEn:'mode, color, decay, size, mod depth, diffusion', touchFr:'mode, color, decay, size, mod depth, diffusion', avoidEn:'you need surgical room emulation', avoidFr:'tu veux une emulation de room chirurgicale', recipe:'Long Verb Return', glow:'#6dd69e'}
  ,{id:'vl-room', vendor:'valhalla', name:'ValhallaRoom', roleEn:'natural room reverb', roleFr:'reverb room naturelle', mode:'sound', tags:['space','sound'], useEn:'always-on room ambience with early/late blend', useFr:'ambiance room permanente, blend early/late', touchEn:'decay 0.4s, depth, early size, late size, high cut', touchFr:'decay 0.4s, depth, tailles early/late, high cut', avoidEn:'you want a huge tail or shimmer', avoidFr:'tu veux une grande queue ou du shimmer', recipe:'Room Return Standard', glow:'#6dd69e'}
  ,{id:'vl-plate', vendor:'valhalla', name:'ValhallaPlate', roleEn:'plate reverb', roleFr:'reverb plate', mode:'sound', tags:['space','sound'], useEn:'dense plate for snare moments, wide and lush', useFr:'plate dense pour moments snare, large et lush', touchEn:'decay 3s, width, damping, mod depth', touchFr:'decay 3s, width, damping, mod depth', avoidEn:'you need a tight controlled room', avoidFr:'tu veux une room serree et controlee', recipe:'Snare Plate Moment', glow:'#6dd69e'}
  ,{id:'vl-delay', vendor:'valhalla', name:'ValhallaDelay', roleEn:'tape delay', roleFr:'delay tape', mode:'sound', tags:['space','motion','sound'], useEn:'throw delays, tape degradation, sync rhythmic echoes', useFr:'throw delays, degradation tape, echos rythmiques', touchEn:'mode Tape, sync 1/4 dot, feedback 35%, age, HP/LP', touchFr:'mode Tape, sync 1/4 dot, feedback 35%, age, HP/LP', avoidEn:'you want a clean digital echo', avoidFr:'tu veux un echo digital propre', recipe:'Throw Delay Moment', glow:'#6dd69e'}
  ,{id:'vl-supermassive', vendor:'valhalla', name:'Supermassive', roleEn:'massive space FX', roleFr:'FX espace massif', mode:'sound', tags:['space','sound'], useEn:'huge washes, drones, texture beds', useFr:'nappes immenses, drones, lits de texture', touchEn:'mode (Gemini, Hydra, Warp), warp, feedback, mix', touchFr:'mode, warp, feedback, mix', avoidEn:'you need a clean short room', avoidFr:'tu veux une room courte et propre', recipe:'Void Texture Bed', glow:'#6dd69e'}
  ,{id:'vl-shimmer', vendor:'valhalla', name:'ValhallaShimmer', roleEn:'shimmer reverb', roleFr:'reverb shimmer', mode:'sound', tags:['space','sound'], useEn:'pitched reverb tails for breakdowns and transitions', useFr:'queues pitchees pour breakdowns et transitions', touchEn:'pitch shift, decay, diffusion, color', touchFr:'pitch shift, decay, diffusion, color', avoidEn:'you are in the main groove section', avoidFr:'tu es dans le groove principal', recipe:'Shimmer Breakdown', glow:'#6dd69e'}
  ,{id:'iz-ozone', vendor:'izotope', name:'Ozone 12', roleEn:'mastering suite', roleFr:'suite mastering', mode:'mix', tags:['dynamics','mix'], useEn:'Maximizer, Imager, EQ, Vintage Tape for master chain', useFr:'Maximizer, Imager, EQ, Vintage Tape pour master', touchEn:'Maximizer IRC IV -1dBTP, Imager mono below 120Hz', touchFr:'Maximizer IRC IV -1dBTP, Imager mono sous 120Hz', avoidEn:'the mix still has problems to fix', avoidFr:'le mix a encore des problemes', recipe:'Master Bus Chain', glow:'#5ce6a5'}
  ,{id:'iz-neutron', vendor:'izotope', name:'Neutron 5', roleEn:'channel strip', roleFr:'channel strip', mode:'mix', tags:['dynamics','tone','mix'], useEn:'Transient Shaper, Compressor, EQ, Clipper modules', useFr:'Transient Shaper, Compresseur, EQ, Clipper', touchEn:'TS attack +15% sustain -5%, Clipper soft -1 to -3dB', touchFr:'TS attack +15% sustain -5%, Clipper soft -1 a -3dB', avoidEn:'you have not gain-staged yet', avoidFr:'pas encore de gain staging', recipe:'Drum Bus Punch', glow:'#5ce6a5'}
  ,{id:'cg-shaperbox', vendor:'cableguys', name:'ShaperBox 3', roleEn:'volume/filter shaper', roleFr:'shaper volume/filtre', mode:'sound', tags:['motion','dynamics','sound'], useEn:'precise sidechain, gate patterns, filter curves synced to BPM', useFr:'sidechain precis, patterns gate, courbes filtre synced BPM', touchEn:'Volume module, draw curve, trigger Audio/MIDI, smooth', touchFr:'module Volume, courbe, trigger Audio/MIDI, smooth', avoidEn:'a simple compressor sidechain is enough', avoidFr:'un sidechain compresseur suffit', recipe:'Precision Sidechain', glow:'#5c9ee6'}
  ,{id:'dm-infiltrator', vendor:'devious', name:'Infiltrator', roleEn:'creative multi-FX', roleFr:'multi-FX creatif', mode:'sound', tags:['motion','sound'], useEn:'sound design transitions with XY pad, modular FX chain', useFr:'transitions sound design, XY pad, chaine FX modulaire', touchEn:'browse presets, automate Mix macro 0 to 100%', touchFr:'browse presets, automate Mix macro 0 a 100%', avoidEn:'you need a clean utility effect', avoidFr:'tu veux un effet utilitaire propre', recipe:'Wild Transition FX', glow:'#e65c5c'}
  ,{id:'kg-polysix', vendor:'korg', name:'Polysix', roleEn:'warm polysynth', roleFr:'polysynth chaud', mode:'sound', tags:['instrument','sound'], useEn:'simple warm pads and arps with signature built-in chorus', useFr:'pads et arps chauds avec chorus integre signature', touchEn:'VCO wave, VCF cutoff/reso/EG, chorus mode, arpeggiator', touchFr:'VCO wave, VCF cutoff/reso/EG, chorus mode, arpeggiateur', avoidEn:'you need complex modulation or FM', avoidFr:'tu as besoin de mod complexe ou FM', recipe:'Poly Warm Pad', glow:'#ccc65c'}
];
const routes = [
  { titleEn:'Dark bass with movement', titleFr:'Basse dark avec mouvement', bodyEn:'Start from Serum or Twin. Add Saturn 2 or TAIP. Control low mids with Pro-Q / Pro-MB.', bodyFr:'Pars de Serum ou Twin. Ajoute Saturn 2 ou TAIP. Contrôle les bas médiums avec Pro-Q / Pro-MB.', tags:['bass','movement','sound'] },
  { titleEn:'Minimal groove without deadness', titleFr:'Groove minimal sans mollesse', bodyEn:'Keep fewer drum layers. Use Drumazon / Nithonat. Add one moving hat lane, not five.', bodyFr:'Garde moins de couches de drums. Utilise Drumazon / Nithonat. Ajoute une lane de hats vivante, pas cinq.', tags:['drums','minimal','sound'] },
  { titleEn:'Lead that cuts without pain', titleFr:'Lead qui perce sans douleur', bodyEn:'Use MicroPitch or Crystalline for width, then calm the 3–5 kHz band with Pro-Q or Smooth Operator.', bodyFr:'Utilise MicroPitch ou Crystalline pour la largeur, puis calme la zone 3–5 kHz avec Pro-Q ou Smooth Operator.', tags:['lead','tone','mix'] },
  { titleEn:'Break tension builder', titleFr:'Construction de tension en break', bodyEn:'Transit 2, Timeless 3, Crystals or UltraTap. One macro, one destination, one clear stop point.', bodyFr:'Transit 2, Timeless 3, Crystals ou UltraTap. Un macro, une destination, un stop point clair.', tags:['break','fx','sound'] },
  { titleEn:'Muddy mix rescue', titleFr:'Sauvetage mix boueux', bodyEn:'Find the overlap first. Then try Pro-Q, Pro-MB, SplitEQ and simplify the arrangement.', bodyFr:'Trouve d’abord le chevauchement. Ensuite essaye Pro-Q, Pro-MB, SplitEQ et simplifie l’arrangement.', tags:['mix','cleanup','tone'] },
  { titleEn:'Huge space without washing the groove', titleFr:'Grand espace sans laver le groove', bodyEn:'Use ducked reverb and keep low-end mono. Pro-R 2 / Crystalline for control, Blackhole for only one spotlight moment.', bodyFr:'Utilise une reverb duckée et garde le bas en mono. Pro-R 2 / Crystalline pour le contrôle, Blackhole pour un seul vrai moment spotlight.', tags:['space','mix','sound'] }
  ,{ titleEn:'Diva sub bass foundation', titleFr:'Fondation sub bass Diva', bodyEn:'Triple VCO sine sub, Ladder 24dB LP, cutoff 32%. Saturn 2 Subtle Tube on 50-150Hz, Pro-Q mono bass below 120Hz.', bodyFr:'Triple VCO sine sub, Ladder 24dB LP, cutoff 32%. Saturn 2 Subtle Tube 50-150Hz, Pro-Q mono bass sous 120Hz.', tags:['bass','sound'] }
  ,{ titleEn:'Pad from scratch with Jup-8', titleFr:'Pad from scratch avec Jup-8', bodyEn:'Two detuned saws, LPF 48%, built-in chorus Mode I. DIMENSION-D for width. ValhallaPlate 2.5s, mix 18%.', bodyFr:'Deux saws detunees, LPF 48%, chorus Mode I. DIMENSION-D pour largeur. ValhallaPlate 2.5s, mix 18%.', tags:['pad','sound'] }
  ,{ titleEn:'Throw delay for transitions', titleFr:'Throw delay pour transitions', bodyEn:'ValhallaDelay Tape mode, 1/4 dot, feedback 35%, LP 4kHz. Send = 0 by default, automate only at the exact moment.', bodyFr:'ValhallaDelay mode Tape, 1/4 dot, feedback 35%, LP 4kHz. Send = 0, automate uniquement au moment exact.', tags:['fx','transition','sound'] }
  ,{ titleEn:'Analog warmth on anything', titleFr:'Chaleur analogique sur tout', bodyEn:'Decimort 2 at 24bit/33kHz, then Tape MELLO-FI wow 8%, flutter 6%, sat 12%. Never on kick or sub.', bodyFr:'Decimort 2 24bit/33kHz, puis Tape MELLO-FI wow 8%, flutter 6%, sat 12%. Jamais sur kick/sub.', tags:['tone','sound'] }
  ,{ titleEn:'Master bus chain', titleFr:'Chaine master', bodyEn:'Pro-Q 4 HP 22Hz → Pro-C 2 Bus 1.5:1 mix 70% → Ozone Imager mono<120Hz → Ozone Maximizer -14 LUFS.', bodyFr:'Pro-Q 4 HP 22Hz → Pro-C 2 Bus 1.5:1 mix 70% → Ozone Imager mono<120Hz → Ozone Maximizer -14 LUFS.', tags:['mix','dynamics'] }
  ,{ titleEn:'Shimmer for breakdowns only', titleFr:'Shimmer breakdowns uniquement', bodyEn:'ValhallaShimmer +12st at 15%. Send=0 default. Automate UP during breakdown only. Cut before drop.', bodyFr:'ValhallaShimmer +12st 15%. Send=0. Automate UP pendant breakdown uniquement. Coupe avant le drop.', tags:['space','transition','sound'] }
];

const recipes = [
  { titleEn:'Dark Bass Cleanup', titleFr:'Nettoyage basse dark', bodyEn:'Serum bass → Saturn 2 multiband → Pro-Q 4 dynamic dip at 280 Hz → Pro-C 3 bus glue.', bodyFr:'Basse Serum → Saturn 2 multibande → Pro-Q 4 avec dip dynamique à 280 Hz → glue bus Pro-C 3.', stopEn:'Stop when the bass still feels big at low volume.', stopFr:'Stop quand la basse reste grande à bas volume.', uses:['Serum','Saturn 2','Pro-Q 4','Pro-C 3'] },
  { titleEn:'Indie Drive Lead', titleFr:'Lead drive indie', bodyEn:'Twin 3 or Serum lead → MicroPitch for width → Saturn 2 for color → Pro-DS if top edge bites.', bodyFr:'Lead Twin 3 ou Serum → MicroPitch pour la largeur → Saturn 2 pour la couleur → Pro-DS si l’aigu mord.', stopEn:'Stop when the hook reads in mono and stereo.', stopFr:'Stop quand le hook se lit en mono et en stéréo.', uses:['Twin 3','Serum','MicroPitch','Saturn 2','Pro-DS'] },
  { titleEn:'Void Atmos Tail', titleFr:'Queue d’atmosphère abyssale', bodyEn:'Eventide Blackhole on a send, then Pro-Q on the return to cut low mud and tame 2.5 kHz glare.', bodyFr:'Eventide Blackhole sur un send, puis Pro-Q sur le retour pour couper la boue du bas et calmer 2,5 kHz.', stopEn:'Stop when the tail feels cinematic without blurring the kick.', stopFr:'Stop quand la queue paraît cinématographique sans flouter le kick.', uses:['Blackhole','Pro-Q 4'] },
  { titleEn:'Drum Weight Bus', titleFr:'Bus de poids drums', bodyEn:'Drumazon / Nepheton core drums → Redoptor 2 or Invigorate for edge → Pro-C 3 for shape.', bodyFr:'Core drums Drumazon / Nepheton → Redoptor 2 ou Invigorate pour l’edge → Pro-C 3 pour la forme.', stopEn:'Stop when the drums feel denser, not just louder.', stopFr:'Stop quand les drums paraissent plus denses, pas juste plus fortes.', uses:['Drumazon 2','Nepheton 2','Redoptor 2','Pro-C 3'] },
  { titleEn:'Granular Bed Maker', titleFr:'Fabrique de lit granulaire', bodyEn:'Grainferno texture → Crystalline long space → Volcano or Godfazer for slow movement.', bodyFr:'Texture Grainferno → grand espace Crystalline → Volcano ou Godfazer pour un mouvement lent.', stopEn:'Stop when one bed adds emotion without masking the hook.', stopFr:'Stop quand un seul bed ajoute de l’émotion sans masquer le hook.', uses:['Grainferno','Crystalline','Volcano 3','Godfazer'] },
  { titleEn:'Break Builder Fast', titleFr:'Constructeur de break rapide', bodyEn:'Transit 2 macro → Timeless 3 throw → Crystals rise → limiter safety on FX bus.', bodyFr:'Macro Transit 2 → throw Timeless 3 → montée Crystals → limiteur de sécurité sur le bus FX.', stopEn:'Stop at one hero transition, not a chain of fireworks.', stopFr:'Stop à une transition héroïque, pas une chaîne de feux d’artifice.', uses:['Transit 2','Timeless 3','Crystals','Pro-L 2'] }
  ,{ titleEn:'Dark Sub Architect', titleFr:'Architecte de sub dark', bodyEn:'Diva Triple VCO sine → Saturn 2 Subtle Tube 50-150Hz drive 12% → Pro-C 2 Opto 3:1 → Pro-Q 4 mono bass M/S below 120Hz.', bodyFr:'Diva Triple VCO sine → Saturn 2 Subtle Tube 50-150Hz drive 12% → Pro-C 2 Opto 3:1 → Pro-Q 4 mono bass M/S sous 120Hz.', stopEn:'Stop when the sub is felt, not heard above 150Hz.', stopFr:'Stop quand le sub se ressent, pas au-dessus de 150Hz.', uses:['Diva','Saturn 2','Pro-C 2','Pro-Q 4'] }
  ,{ titleEn:'Mono Beast Bass', titleFr:'Basse mono beast', bodyEn:'Mini V3 3-osc saw+square+saw32, overdrive ON → Devastor 2 pre-filter preamp +12dB → Pro-Q 4 HP 30Hz, cut 300Hz → Pro-C 2 Punch 4:1.', bodyFr:'Mini V3 3 osc, overdrive ON → Devastor 2 pre-filter preamp +12dB → Pro-Q 4 HP 30Hz, cut 300Hz → Pro-C 2 Punch 4:1.', stopEn:'Stop when it grooves with the kick at low volume.', stopFr:'Stop quand ca groove avec le kick a bas volume.', uses:['Mini V3','Devastor 2','Pro-Q 4','Pro-C 2'] }
  ,{ titleEn:'Blade Runner Wash', titleFr:'Nappe Blade Runner', bodyEn:'CS-80 V4 dual layer saws, slow attack 1s, release 4s → ShimmerVerb +12st@8% → Pro-Q 4 HP 150Hz, shelf -2dB@6kHz.', bodyFr:'CS-80 V4 dual layer saws, attack lent 1s, release 4s → ShimmerVerb +12st@8% → Pro-Q 4 HP 150Hz, shelf -2dB@6kHz.', stopEn:'Stop when the pad sits behind everything without grabbing attention.', stopFr:'Stop quand le pad reste derriere tout sans attirer l attention.', uses:['CS-80 V4','ShimmerVerb','Pro-Q 4'] }
  ,{ titleEn:'Silk Pad', titleFr:'Pad soyeux', bodyEn:'Jup-8 V4 dual saw ±6ct, LPF 48%, chorus Mode I → DIMENSION-D Mode II → ValhallaPlate 2.5s mix 18% → Pro-Q 4 HP 100Hz.', bodyFr:'Jup-8 V4 dual saw ±6ct, LPF 48%, chorus Mode I → DIMENSION-D Mode II → ValhallaPlate 2.5s mix 18% → Pro-Q 4 HP 100Hz.', stopEn:'Stop when it feels warm without dominating the mix.', stopFr:'Stop quand c est chaud sans dominer le mix.', uses:['Jup-8 V4','Chorus DIMENSION-D','ValhallaPlate','Pro-Q 4'] }
  ,{ titleEn:'Drum Bus Punch', titleFr:'Bus drums punch', bodyEn:'Pro-Q 4 HP 30Hz → Pro-C 2 Bus 2:1 attack 10ms mix 80% → Saturn 2 Warm Tube 10% → Neutron 5 TS attack +15% sustain -5%.', bodyFr:'Pro-Q 4 HP 30Hz → Pro-C 2 Bus 2:1 attack 10ms mix 80% → Saturn 2 Warm Tube 10% → Neutron 5 TS attack +15% sustain -5%.', stopEn:'Stop at -4dB gain reduction maximum.', stopFr:'Stop a -4dB de reduction de gain max.', uses:['Pro-Q 4','Pro-C 2','Saturn 2','Neutron 5'] }
  ,{ titleEn:'Snare Plate Moment', titleFr:'Moment plate snare', bodyEn:'ValhallaPlate 3s → Pro-Q 4 HP 300Hz LP 6kHz → sidechain from snare (Pro-C 2 4:1, fast). Automate send: full at drop, off elsewhere.', bodyFr:'ValhallaPlate 3s → Pro-Q 4 HP 300Hz LP 6kHz → sidechain snare (Pro-C 2 4:1, fast). Automate send: full au drop, off ailleurs.', stopEn:'Stop when the plate swells after the hit without muddying the groove.', stopFr:'Stop quand la plate swell apres le hit sans salir le groove.', uses:['ValhallaPlate','Pro-Q 4','Pro-C 2'] }
  ,{ titleEn:'Tape Warmth Layer', titleFr:'Couche warmth tape', bodyEn:'Decimort 2 24bit/33kHz → Tape MELLO-FI wow 8%, flutter 6%, sat 12%, noise OFF. On pads and leads only, never kick/sub.', bodyFr:'Decimort 2 24bit/33kHz → Tape MELLO-FI wow 8%, flutter 6%, sat 12%, bruit OFF. Sur pads et leads, jamais kick/sub.', stopEn:'Stop if you hear any noise or pitch wobble consciously.', stopFr:'Stop si tu entends du bruit ou du wobble de pitch consciemment.', uses:['Decimort 2','Tape MELLO-FI'] }
  ,{ titleEn:'Master Bus Chain', titleFr:'Chaine master bus', bodyEn:'Pro-Q 4 HP 22Hz safety → Pro-C 2 Bus 1.5:1 mix 70% -2dB GR → Ozone Imager mono<120Hz → Ozone Maximizer IRC IV -1dBTP -14LUFS.', bodyFr:'Pro-Q 4 HP 22Hz → Pro-C 2 Bus 1.5:1 mix 70% -2dB GR → Ozone Imager mono<120Hz → Ozone Maximizer IRC IV -1dBTP -14LUFS.', stopEn:'Stop when GR never exceeds -2dB. If it does, fix the mix.', stopFr:'Stop quand le GR ne depasse jamais -2dB. Sinon, corrige le mix.', uses:['Pro-Q 4','Pro-C 2','Ozone 12'] }
  ,{ titleEn:'Long Verb Return', titleFr:'Return verb longue', bodyEn:'VintageVerb Concert Hall, Color 80s, decay 2.5s, pre-delay 30ms, size 65%. HP return at 250Hz. Sidechain to kick.', bodyFr:'VintageVerb Concert Hall, Color 80s, decay 2.5s, pre-delay 30ms, size 65%. HP return 250Hz. Sidechain au kick.', stopEn:'Stop when the verb adds depth without smearing the groove.', stopFr:'Stop quand la verb ajoute de la profondeur sans salir le groove.', uses:['VintageVerb'] }
  ,{ titleEn:'Precision Sidechain', titleFr:'Sidechain precis', bodyEn:'ShaperBox 3 Volume module, audio trigger from kick. Draw fast duck 5ms, smooth return 50ms. More precise than compressor SC.', bodyFr:'ShaperBox 3 module Volume, trigger audio du kick. Duck rapide 5ms, return smooth 50ms. Plus precis qu un compresseur SC.', stopEn:'Stop when the duck is invisible but the bass breathes with the kick.', stopFr:'Stop quand le duck est invisible mais la basse respire avec le kick.', uses:['ShaperBox 3'] }
  ,{ titleEn:'SEM Growl Bass', titleFr:'Basse growl SEM', bodyEn:'SEM V2 saw+pulse, multimode filter blend LP→Notch → Saturn 2 Warm Tube 100-500Hz drive 18% → Pro-C 2 Punch 4:1.', bodyFr:'SEM V2 saw+pulse, multimode blend LP→Notch → Saturn 2 Warm Tube 100-500Hz drive 18% → Pro-C 2 Punch 4:1.', stopEn:'Stop when the growl adds character without masking the kick.', stopFr:'Stop quand le growl ajoute du caractere sans masquer le kick.', uses:['SEM V2','Saturn 2','Pro-C 2'] }
];

let state = {
  lang: localStorage.getItem('kapman-lang') || 'en',
  theme: localStorage.getItem('kapman-theme') || 'dark',
  focus: localStorage.getItem('kapman-focus') || 'off',
  page: 'home',
  modeFilter: 'all',
  vendorFilter: 'all',
  search: '',
  selectedId: null
};

const $ = (s, ctx=document) => ctx.querySelector(s);
const $$ = (s, ctx=document) => Array.from(ctx.querySelectorAll(s));


const fixIt = [
  {sEn:'Kick and bass fight',sFr:'Kick et basse se battent',fEn:'Sidechain bass to kick (ShaperBox 3 or Ableton Compressor). Check phase with Pro-Q 4 analyzer.',fFr:'Sidechain bass au kick (ShaperBox 3 ou Ableton Compressor). Check phase avec Pro-Q 4 analyzer.'},
  {sEn:'Muddy mix',sFr:'Mix boueux',fEn:'Pro-Q 4 on every track: cut 200-400Hz boxiness. HP everything except kick/bass at 100Hz+.',fFr:'Pro-Q 4 sur chaque piste: coupe 200-400Hz. HP tout sauf kick/bass a 100Hz+.'},
  {sEn:'Flat drums',sFr:'Drums plats',fEn:'Drums bus glue (Pro-C 2 Bus 2:1 mix 80%) + Saturn 2 Warm Tube 10% + Neutron TS attack +15%.',fFr:'Bus drums (Pro-C 2 Bus 2:1 mix 80%) + Saturn 2 Warm Tube 10% + Neutron TS attack +15%.'},
  {sEn:'Mix too narrow',sFr:'Mix trop etroit',fEn:'MicroPitch on mids/highs (±8ct, 10-12ms). Check Pro-Q 4 M/S: side HP 150Hz. Verify mono.',fFr:'MicroPitch sur mids/highs (±8ct, 10-12ms). Pro-Q 4 M/S: side HP 150Hz. Verifier mono.'},
  {sEn:'Reverb muddies low-end',sFr:'Reverb salit le low-end',fEn:'HP ALL returns at 200Hz minimum. Sidechain returns to kick. Reduce sends.',fFr:'HP TOUS les returns a 200Hz minimum. Sidechain returns au kick. Reduis les sends.'},
  {sEn:'Snare disappears',sFr:'Snare disparait',fEn:'Neutron TS attack +18% on snare. Add snare plate return (ValhallaPlate 3s, HP 300Hz, SC from snare).',fFr:'Neutron TS attack +18% sur snare. Ajoute return plate snare (ValhallaPlate 3s, HP 300Hz, SC snare).'},
  {sEn:'Master too loud / distorts',sFr:'Master trop fort / distortion',fEn:'Lower ALL faders by -3dB. Gain stage to -12dBFS peaks. Pro-L 2 max -2dB GR.',fFr:'Baisse TOUT de -3dB. Gain staging -12dBFS peaks. Pro-L 2 max -2dB GR.'},
  {sEn:'Sound too digital / cold',sFr:'Son trop digital / froid',fEn:'Decimort 2 (24bit/33kHz) + Tape MELLO-FI (wow 8%, flutter 6%, sat 12%). Saturn 2 Subtle Tube micro-dose.',fFr:'Decimort 2 (24bit/33kHz) + Tape MELLO-FI (wow 8%, flutter 6%, sat 12%). Saturn 2 Subtle Tube micro-dose.'},
  {sEn:'Bass too boomy',sFr:'Basse trop boomy',fEn:'Pro-MB band 60-120Hz 3:1 slow attack. Check room acoustics. Mono below 120Hz.',fFr:'Pro-MB bande 60-120Hz 3:1 attack lent. Check acoustique. Mono sous 120Hz.'},
  {sEn:'Boring transitions',sFr:'Transitions ennuyeuses',fEn:'Throw delay automation (ValhallaDelay). Snare plate moment. Serum noise risers. ShaperBox filter sweep.',fFr:'Throw delay automation (ValhallaDelay). Moment plate snare. Risers Serum. Sweep filtre ShaperBox.'},
  {sEn:'Thin amateur mix',sFr:'Mix amateur / thin',fEn:'Gain staging -12dBFS per track. Drums bus chain. Master bus chain. Level-match everything.',fFr:'Gain staging -12dBFS par piste. Bus drums. Bus master. Level-match tout.'},
  {sEn:'Too many elements clash',sFr:'Trop d elements qui clash',fEn:'MUTE all. Rebuild: Kick, Bass, Drums, Hook, Pads. One by one.',fFr:'MUTE tout. Rebuild: Kick, Bass, Drums, Hook, Pads. Un par un.'},
  {sEn:'Hi-hats too harsh',sFr:'Hi-hats trop harsh',fEn:'HP strict at 4kHz+. Decimort 2 subtle (24bit/30kHz). Pro-C 2 Opto for peaks.',fFr:'HP strict a 4kHz+. Decimort 2 subtil (24bit/30kHz). Pro-C 2 Opto pour les pics.'},
  {sEn:'Not enough punch',sFr:'Pas assez de punch',fEn:'Neutron TS attack +15-25%. Neutron Clipper soft -1 to -3dB. Parallel crush on return.',fFr:'Neutron TS attack +15-25%. Neutron Clipper soft -1 a -3dB. Parallel crush en return.'},
  {sEn:'Stereo image broken',sFr:'Image stereo bancale',fEn:'Ozone Imager check. Mono below 120Hz. Pro-Q 4 M/S Polish. Utility mono check.',fFr:'Ozone Imager check. Mono sous 120Hz. Pro-Q 4 M/S. Utility mono check.'},
  {sEn:'CPU overload',sFr:'CPU overload',fEn:'Freeze finalized tracks. Bounce heavy instruments. Reduce Diva accuracy to FAST.',fFr:'Freeze les pistes finalisees. Bounce les instruments lourds. Diva accuracy en FAST.'}
];
function setTheme(theme){
  state.theme = theme;
  document.body.dataset.theme = theme;
  localStorage.setItem('kapman-theme', theme);
  $('#themeBtn').textContent = state.lang === 'fr'
    ? (theme === 'dark' ? i18n.fr.themeLightLabel : i18n.fr.themeDarkLabel)
    : (theme === 'dark' ? i18n.en.themeLightLabel : i18n.en.themeDarkLabel);
}

function setFocus(mode){
  state.focus = mode;
  document.body.dataset.focus = mode === 'on' ? 'on' : 'off';
  localStorage.setItem('kapman-focus', mode);
  $('#focusBtn').textContent = (state.lang === 'fr')
    ? (mode === 'on' ? i18n.fr.focusOffLabel : i18n.fr.focusOnLabel)
    : (mode === 'on' ? i18n.en.focusOffLabel : i18n.en.focusOnLabel);
}

function setLang(lang){
  state.lang = lang;
  localStorage.setItem('kapman-lang', lang);
  $$('.seg-btn').forEach(b => b.classList.toggle('is-active', b.id === (lang === 'en' ? 'langEN' : 'langFR')));
  $$('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (i18n[lang][key]) el.textContent = i18n[lang][key];
  });
  $$('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (i18n[lang][key]) el.setAttribute('placeholder', i18n[lang][key]);
  });
  setTheme(state.theme);
  setFocus(state.focus);
  renderVendorRail();
  renderFilters();
  renderPlugins();
  renderRoutes();
  renderRecipes();
  renderChecklists();
  renderFixIt();
  updatePageTitle();
  if (state.selectedId) openInspector(state.selectedId);
  if (!$('#audioFile').files?.length) showMixPlaceholder();
}

function updatePageTitle(){
  const map = {
    home: i18n[state.lang].pageHome,
    library: i18n[state.lang].pageLibrary,
    sound: i18n[state.lang].pageSound,
    mix: i18n[state.lang].pageMix,
    finish: i18n[state.lang].pageFinish,
    fixit: i18n[state.lang].pageFixit
  };
  $('#pageTitle').textContent = map[state.page];
}

function renderVendorRail(){
  const rail = $('#vendorRail');
  rail.innerHTML = vendors.map(v => `
    <button class="vendor-card" style="--cardGlow:${v.glow}" data-vendor="${v.id}">
      <div class="vendor-head">
        <span class="vendor-mark">${v.mark}</span>
        <span class="mini-chip">${i18n[state.lang].vendorJump}</span>
      </div>
      <strong>${v.name}</strong>
      <p>${state.lang === 'fr' ? v.pitchFr : v.pitchEn}</p>
    </button>
  `).join('');
  $$('.vendor-card', rail).forEach(btn => btn.addEventListener('click', () => {
    state.page = 'library';
    state.vendorFilter = btn.dataset.vendor;
    state.modeFilter = 'all';
    switchPage('library');
    renderFilters();
    renderPlugins();
  }));
}

function renderFilters(){
  const modeDefs = [
    ['all', i18n[state.lang].filterAll],
    ['mix', i18n[state.lang].filterMix],
    ['sound', i18n[state.lang].filterSound],
    ['dynamics', i18n[state.lang].filterDynamics],
    ['space', i18n[state.lang].filterSpace],
    ['tone', i18n[state.lang].filterTone],
    ['motion', i18n[state.lang].filterMotion],
    ['instrument', i18n[state.lang].filterInstrument]
  ];
  $('#modeChips').innerHTML = modeDefs.map(([id,label]) => `<button class="chip ${state.modeFilter===id?'is-active':''}" data-mode="${id}">${label}</button>`).join('');
  $('#vendorChips').innerHTML = [`<button class="chip ${state.vendorFilter==='all'?'is-active':''}" data-vendor="all">${i18n[state.lang].filterAll}</button>`]
    .concat(vendors.map(v => `<button class="chip ${state.vendorFilter===v.id?'is-active':''}" data-vendor="${v.id}">${v.name}</button>`))
    .join('');

  $$('#modeChips .chip').forEach(b => b.onclick = () => { state.modeFilter = b.dataset.mode; renderFilters(); renderPlugins(); });
  $$('#vendorChips .chip').forEach(b => b.onclick = () => { state.vendorFilter = b.dataset.vendor; renderFilters(); renderPlugins(); });
}

function matchesPlugin(plugin){
  const q = state.search.trim().toLowerCase();
  const text = [plugin.name, plugin.vendor, plugin.roleEn, plugin.roleFr, plugin.useEn, plugin.useFr, plugin.tags.join(' ')].join(' ').toLowerCase();
  const searchOk = !q || text.includes(q);
  const vendorOk = state.vendorFilter === 'all' || plugin.vendor === state.vendorFilter;
  let modeOk = true;
  if (['mix','sound'].includes(state.modeFilter)) modeOk = plugin.mode === state.modeFilter;
  else if (state.modeFilter !== 'all') modeOk = plugin.tags.includes(state.modeFilter);
  return searchOk && vendorOk && modeOk;
}

function vendorById(id){ return vendors.find(v => v.id === id); }

function renderPlugins(){
  const grid = $('#pluginGrid');
  const list = plugins.filter(matchesPlugin);
  grid.innerHTML = list.map(p => {
    const vendor = vendorById(p.vendor);
    const role = state.lang === 'fr' ? p.roleFr : p.roleEn;
    const glow = p.glow || vendor.glow;
    return `
      <button class="plugin-card" style="--cardGlow:${glow}" data-id="${p.id}">
        <div class="plugin-top">
          <span class="plugin-vendor">${vendor.mark} ${vendor.name}</span>
          <span class="plugin-badge">${p.mode.toUpperCase()}</span>
        </div>
        <h3>${p.name}</h3>
        <p class="plugin-role">${role}</p>
        <div class="tag-row">
          ${p.tags.slice(0,3).map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </button>
    `;
  }).join('');
  $$('.plugin-card', grid).forEach(card => card.onclick = () => openInspector(card.dataset.id));
  $('#kpiPlugins').textContent = plugins.length;
  $('#kpiRecipes').textContent = recipes.length;
}

function openInspector(id){
  state.selectedId = id;
  const p = plugins.find(x => x.id === id);
  if (!p) return;
  const recipe = recipes.find(r => r.titleEn === p.recipe || r.titleFr === p.recipe || r.titleEn === p.recipe);
  const vendor = vendorById(p.vendor);
  $('#inspectorEmpty').classList.add('hidden');
  const role = state.lang === 'fr' ? p.roleFr : p.roleEn;
  const use = state.lang === 'fr' ? p.useFr : p.useEn;
  const touch = state.lang === 'fr' ? p.touchFr : p.touchEn;
  const avoid = state.lang === 'fr' ? p.avoidFr : p.avoidEn;
  $('#inspectorBody').classList.remove('hidden');
  $('#inspectorBody').innerHTML = `
    <p class="eyebrow">${vendor.name}</p>
    <h2>${p.name}</h2>
    <p class="muted">${role}</p>
    <div class="tag-row">${p.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
    <div class="inspector-grid">
      <div class="info-box"><span>${i18n[state.lang].inspectorUse}</span><strong>${use}</strong></div>
      <div class="info-box"><span>${i18n[state.lang].inspectorTouch}</span><strong>${touch}</strong></div>
      <div class="info-box"><span>${i18n[state.lang].inspectorAvoid}</span><strong>${avoid}</strong></div>
      <div class="info-box"><span>${i18n[state.lang].inspectorMode}</span><strong>${p.mode.toUpperCase()}</strong></div>
      ${recipe ? `<div class="info-box"><span>${i18n[state.lang].inspectorRecipe}</span><strong>${state.lang === 'fr' ? recipe.titleFr : recipe.titleEn}</strong></div>` : ''}
    </div>
  `;
}

function renderRoutes(){
  $('#routeGrid').innerHTML = routes.map(r => `
    <article class="route-card">
      <h3>${state.lang === 'fr' ? r.titleFr : r.titleEn}</h3>
      <p>${state.lang === 'fr' ? r.bodyFr : r.bodyEn}</p>
      <div class="route-meta">${r.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
    </article>
  `).join('');
}

function renderRecipes(){
  $('#recipeGrid').innerHTML = recipes.map(r => `
    <article class="recipe-card">
      <h3>${state.lang === 'fr' ? r.titleFr : r.titleEn}</h3>
      <p>${state.lang === 'fr' ? r.bodyFr : r.bodyEn}</p>
      <div class="recipe-meta">${r.uses.map(u => `<span class="tag">${u}</span>`).join('')}</div>
      <div class="stop-rule"><strong>${i18n[state.lang].stopRuleLabel}:</strong> ${state.lang === 'fr' ? r.stopFr : r.stopEn}</div>
    </article>
  `).join('');
}

function renderChecklists(){
  const A = [i18n[state.lang].finishA1, i18n[state.lang].finishA2, i18n[state.lang].finishA3, i18n[state.lang].finishA4];
  const B = [i18n[state.lang].finishB1, i18n[state.lang].finishB2, i18n[state.lang].finishB3, i18n[state.lang].finishB4];
  const C = [i18n[state.lang].finishC1, i18n[state.lang].finishC2, i18n[state.lang].finishC3, i18n[state.lang].finishC4];
  $('#checklistA').innerHTML = A.map(text => `<li><input type="checkbox"><span>${text}</span></li>`).join('');
  $('#checklistB').innerHTML = B.map(text => `<li><input type="checkbox"><span>${text}</span></li>`).join('');
  $('#checklistC').innerHTML = C.map(text => `<li><input type="checkbox"><span>${text}</span></li>`).join('');
}

function switchPage(page){
  state.page = page;
  $$('.page').forEach(p => p.classList.toggle('is-active', p.dataset.page === page));
  $$('.nav-item').forEach(p => p.classList.toggle('is-active', p.dataset.page === page));
  updatePageTitle();
}

function showToast(text){
  const toast = $('#toast');
  toast.textContent = text;
  toast.classList.add('is-open');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.remove('is-open'), 2200);
}

function showMixPlaceholder(){
  $('#metricPeak').textContent = '—';
  $('#metricRms').textContent = '—';
  $('#metricCrest').textContent = '—';
  $('#metricStereo').textContent = '—';
  $('#bandBar').innerHTML = ['low','lowMid','highMid','high'].map(key => `
    <div class="band-pill"><span>${i18n[state.lang]['bands'+key.charAt(0).toUpperCase()+key.slice(1)] || key}</span><strong>—</strong></div>
  `).join('');
  $('#mixIssues').innerHTML = `<span class="issue-chip">${i18n[state.lang].issueNeedFile}</span>`;
  $('#mixActions').innerHTML = '';
  drawPlaceholderWave();
}

function drawPlaceholderWave(){
  const canvas = $('#waveform');
  const ctx = canvas.getContext('2d');
  resizeCanvas(canvas);
  ctx.clearRect(0,0,canvas.width,canvas.height);
  const grad = ctx.createLinearGradient(0,0,canvas.width,0);
  grad.addColorStop(0, 'rgba(126,167,255,.7)');
  grad.addColorStop(1, 'rgba(118,242,198,.7)');
  ctx.strokeStyle = grad;
  ctx.lineWidth = 2;
  ctx.beginPath();
  for(let x=0;x<canvas.width;x++){
    const t = x / canvas.width;
    const y = canvas.height/2 + Math.sin(t*12)*24*Math.sin(t*2.5);
    x===0 ? ctx.moveTo(x,y) : ctx.lineTo(x,y);
  }
  ctx.stroke();
}

function resizeCanvas(canvas){
  const ratio = window.devicePixelRatio || 1;
  const w = canvas.clientWidth || 900;
  const h = canvas.clientHeight || 280;
  canvas.width = Math.floor(w * ratio);
  canvas.height = Math.floor(h * ratio);
  const ctx = canvas.getContext('2d');
  ctx.setTransform(ratio,0,0,ratio,0,0);
}

function analyzeAudioBuffer(buffer){
  const sr = buffer.sampleRate;
  const len = buffer.length;
  const ch0 = buffer.getChannelData(0);
  const ch1 = buffer.numberOfChannels > 1 ? buffer.getChannelData(1) : ch0;
  let peak = 0, sumSq = 0, corrSum = 0, sideLow = 0, midLow = 0;
  let low = 0, lowMid = 0, highMid = 0, high = 0;
  const step = Math.max(1, Math.floor(len / 24000));

  let prevL = 0, prevR = 0;
  const alphaLow = Math.exp(-2*Math.PI*120/sr);
  let lpL = 0, lpR = 0;

  for(let i=0;i<len;i+=step){
    const l = ch0[i];
    const r = ch1[i];
    const m = (l+r)*0.5;
    const s = (l-r)*0.5;
    peak = Math.max(peak, Math.abs(l), Math.abs(r));
    sumSq += (l*l + r*r)*0.5;
    corrSum += l*r;

    lpL = (1-alphaLow)*l + alphaLow*lpL;
    lpR = (1-alphaLow)*r + alphaLow*lpR;
    const lowM = (lpL+lpR)*0.5;
    const lowS = (lpL-lpR)*0.5;
    midLow += Math.abs(lowM);
    sideLow += Math.abs(lowS);

    const dL = Math.abs(l - prevL);
    const dR = Math.abs(r - prevR);
    const hf = (dL + dR) * 0.5;
    const absM = Math.abs(m);
    low += Math.abs((lpL+lpR)*0.5);
    lowMid += Math.max(0, absM - Math.abs(lowM)) * 0.65;
    highMid += hf * 0.85;
    high += hf * 0.35;
    prevL = l; prevR = r;
  }

  const rms = Math.sqrt(sumSq / Math.ceil(len / step));
  const peakDb = db(peak);
  const rmsDb = db(rms);
  const crest = peakDb - rmsDb;
  const corr = corrSum / Math.max(1, Math.ceil(len / step));
  const lowSideRatio = sideLow / Math.max(1e-9, midLow);
  const bandSum = low + lowMid + highMid + high + 1e-9;

  return {
    peakDb, rmsDb, crest, corr, lowSideRatio,
    bands: {
      low: low / bandSum,
      lowMid: lowMid / bandSum,
      highMid: highMid / bandSum,
      high: high / bandSum
    },
    mono: Float32Array.from({length: len}, (_,i) => buffer.numberOfChannels > 1 ? (ch0[i]+ch1[i])*0.5 : ch0[i])
  };
}

function db(v){
  return 20 * Math.log10(Math.max(v, 1e-9));
}

function prettyDb(v){
  return `${v.toFixed(1)} dB`;
}

function drawWaveform(samples){
  const canvas = $('#waveform');
  const ctx = canvas.getContext('2d');
  resizeCanvas(canvas);
  const w = canvas.clientWidth || 900;
  const h = canvas.clientHeight || 280;
  ctx.clearRect(0,0,w,h);
  const grad = ctx.createLinearGradient(0,0,w,0);
  grad.addColorStop(0,'rgba(126,167,255,.95)');
  grad.addColorStop(.5,'rgba(118,242,198,.95)');
  grad.addColorStop(1,'rgba(255,127,183,.95)');
  ctx.strokeStyle = grad;
  ctx.lineWidth = 2;
  ctx.beginPath();
  const bucket = Math.max(1, Math.floor(samples.length / w));
  for(let x=0;x<w;x++){
    let max = 0;
    const start = x * bucket;
    const end = Math.min(samples.length, start + bucket);
    for(let i=start;i<end;i++) max = Math.max(max, Math.abs(samples[i]));
    const y = h/2;
    const amp = max * (h * .42);
    ctx.moveTo(x, y - amp);
    ctx.lineTo(x, y + amp);
  }
  ctx.stroke();
  ctx.fillStyle = 'rgba(255,255,255,.06)';
  ctx.fillRect(0,h/2,w,1);
}

function renderMixResults(res){
  $('#metricPeak').textContent = prettyDb(res.peakDb);
  $('#metricRms').textContent = prettyDb(res.rmsDb);
  $('#metricCrest').textContent = `${res.crest.toFixed(1)} dB`;
  $('#metricStereo').textContent = `${res.corr.toFixed(2)}`;

  const b = res.bands;
  $('#bandBar').innerHTML = [
    ['bandsLow', b.low],
    ['bandsLowMid', b.lowMid],
    ['bandsHighMid', b.highMid],
    ['bandsHigh', b.high]
  ].map(([label,val]) => `
    <div class="band-pill"><span>${i18n[state.lang][label]}</span><strong>${Math.round(val*100)}%</strong></div>
  `).join('');

  const issues = [];
  const actions = [];
  if (res.peakDb > -0.8) {
    issues.push({kind:'bad', text:`Peak ${prettyDb(res.peakDb)}`});
    actions.push({title:'Output trim', body: state.lang==='fr' ? 'Baisse le niveau général ou relâche un bus qui clippe avant le pre-master.' : 'Lower output or relax the bus that is hitting too hard before pre-master.'});
  }
  if (res.crest < 8) {
    issues.push({kind:'warn', text:`Crest ${res.crest.toFixed(1)} dB`});
    actions.push({title:'Dynamics', body: state.lang==='fr' ? 'Le mix paraît tassé. Recheck ton drum bus, clipper et limiteur de preview.' : 'The mix looks flattened. Recheck drum bus compression, clipping and preview limiting.'});
  }
  if (res.lowSideRatio > 0.28) {
    issues.push({kind:'warn', text: state.lang==='fr' ? 'Grave trop large' : 'Low-end too wide'});
    actions.push({title:'Low-end mono', body: state.lang==='fr' ? 'Resserre les sides sous environ 120 Hz et vérifie les effets stéréo sur la basse.' : 'Collapse more side information below roughly 120 Hz and inspect stereo FX on bass layers.'});
  }
  if (b.lowMid > 0.38) {
    issues.push({kind:'warn', text: state.lang==='fr' ? 'Bas médiums lourds' : 'Low mids heavy'});
    actions.push({title:'Low-mid cleanup', body: state.lang==='fr' ? 'Cherche le chevauchement 200–450 Hz entre kick, basses, synths et reverbs.' : 'Check 200–450 Hz overlap between kick, bass, synth bodies and reverbs.'});
  }
  if (b.high > 0.22) {
    issues.push({kind:'warn', text: state.lang==='fr' ? 'Aigu agressif possible' : 'High-end may be sharp'});
    actions.push({title:'Top-end trim', body: state.lang==='fr' ? 'Vérifie hats, claps, noise risers et exciteurs autour de 4–10 kHz.' : 'Inspect hats, claps, noise risers and exciters around 4–10 kHz.'});
  }
  if (res.corr < 0.1) {
    issues.push({kind:'warn', text: state.lang==='fr' ? 'Stéréo fragile' : 'Stereo fragile'});
    actions.push({title:'Mono check', body: state.lang==='fr' ? 'La corrélation est basse. Recheck width, pitch widening et reverbs décoratives.' : 'Correlation is low. Recheck width tricks, pitch widening and decorative reverbs.'});
  }

  if (!issues.length) {
    $('#mixIssues').innerHTML = `<span class="issue-chip">${i18n[state.lang].issueNone}</span>`;
    $('#mixActions').innerHTML = '';
  } else {
    $('#mixIssues').innerHTML = issues.map(i => `<span class="issue-chip ${i.kind}">${i.text}</span>`).join('');
    $('#mixActions').innerHTML = actions.map(a => `
      <article class="action-card">
        <strong>${i18n[state.lang].mixActionTitle}: ${a.title}</strong>
        <p>${a.body}</p>
      </article>
    `).join('');
  }
}

function initAudio(){
  $('#audioFile').addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const arrayBuffer = await file.arrayBuffer();
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioCtx();
    const buffer = await ctx.decodeAudioData(arrayBuffer.slice(0));
    const res = analyzeAudioBuffer(buffer);
    drawWaveform(res.mono);
    renderMixResults(res);
    showToast(i18n[state.lang].uploadDone);
  });
}

function initGate(){
  const saved = localStorage.getItem('kapman-gate');
  if (saved === 'ok') {
    $('#gate').classList.remove('is-open');
    return;
  }
  $('#enterBtn').onclick = () => {
    if ($('#passwordInput').value === PASSWORD) {
      localStorage.setItem('kapman-gate', 'ok');
      $('#gate').classList.remove('is-open');
      $('#gateError').textContent = '';
    } else {
      $('#gateError').textContent = i18n[state.lang].wrongPassword;
    }
  };
  $('#passwordInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') $('#enterBtn').click();
  });
}

function initUi(){
  document.body.dataset.rail = 'open';
  $('#railToggle').onclick = () => {
    document.body.dataset.rail = document.body.dataset.rail === 'open' ? 'closed' : 'open';
  };

  $$('.nav-item').forEach(btn => btn.onclick = () => switchPage(btn.dataset.page));
  $$('.quick-nav').forEach(btn => btn.onclick = () => switchPage(btn.dataset.target));
  $('#langEN').onclick = () => setLang('en');
  $('#langFR').onclick = () => setLang('fr');
  $('#themeBtn').onclick = () => setTheme(state.theme === 'dark' ? 'light' : 'dark');
  $('#focusBtn').onclick = () => setFocus(state.focus === 'on' ? 'off' : 'on');
  $('#globalSearch').addEventListener('input', (e) => {
    state.search = e.target.value;
    if (state.page !== 'library') switchPage('library');
    renderPlugins();
  });

  window.addEventListener('resize', drawPlaceholderWave);
}

function renderFixIt(){
  const el = $('#fixitGrid');
  if(!el) return;
  el.innerHTML = fixIt.map(f => {
    const s = state.lang==='fr' ? f.sFr : f.sEn;
    const fix = state.lang==='fr' ? f.fFr : f.fEn;
    return `<article class="fixit-card glass-panel"><div class="fixit-symptom"><span class="fixit-dot"></span>${s}</div><p class="fixit-fix">${fix}</p></article>`;
  }).join('');
}

function boot(){
  initUi();
  setTheme(state.theme);
  setFocus(state.focus);
  setLang(state.lang);
  renderVendorRail();
  renderFilters();
  renderPlugins();
  renderRoutes();
  renderRecipes();
  renderChecklists();
  renderFixIt();
  showMixPlaceholder();
  initAudio();
  initGate();
}

boot();
