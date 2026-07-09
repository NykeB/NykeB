// Per aggiungere una canzone: copia un blocco, cambia titolo, genere, anno, commento, 12 payoff, copertina e link YouTube.
const songs = [
  {
    title: "BELLE",
    cover: "assets/covers/001-Belle.svg",
    comment: "Istinto e desiderio nei pensieri di ogni uomo.",
    genre: "Dance 80'",
    year: 2025,
    payoffs: [
	"Leggera, ironica e irresistibilmente sincera.", 
	"Una canzone che scherza… ma dice la verità che nessuno ammette.",
	"Tra ironia e desiderio, il cuore parla senza filtri.",
	"Perché certe cose fanno battere il cuore… inutile negarlo.",
	"Un sorriso, un ritmo travolgente e pensieri che tutti hanno avuto almeno una volta.",
	"Provocante quanto basta, divertente al punto giusto.",
	"Dietro l’ironia, c’è sempre un po’ di verità.",
	"Una canzone leggera che gioca con i pensieri proibiti di ogni uomo.",
	"Tra battiti accelerati e sorrisi maliziosi.",
	"Non chiamarla superficialità… chiamala sincerità.",
	"Quando il desiderio incontra la tenerezza.",
	"A volte il cuore parla nei modi più imprevedibili."
    ],
    youtube: "https://www.youtube.com/watch?v=QQXzVfJexg0&list=RDQQXzVfJexg0&start_radio=1"
  },
  {
    title: "BELLAS",
    cover: "assets/covers/002-Bellas.svg",
    comment: "Deseo seductor, romántico y juguetón",
    genre: "Dance 80'",
    year: 2025,
    payoffs: [
	"Ligera, atrevida y terriblemente sincera.",
	"Una canción que juega con el deseo… y con la verdad que nadie dice.",
	"Entre ironía, pasión y sonrisas prohibidas.",
	"Porque hay cosas imposibles de ignorar.",
	"Un ritmo caliente, una mirada… y el corazón pierde el control.",
	"Provocadora, divertida y peligrosamente pegadiza.",
	"Detrás de cada broma siempre se esconde un deseo real.",
	"No es superficialidad… es simplemente humanidad.",
	"Cuando el cuerpo habla más fuerte que las palabras.",
	"Sensual, irónica y sin miedo a decir lo que todos piensan.",
	"Entre latidos rápidos y pensamientos imposibles de esconder.",
	"Porque algunas bellezas no se miran… se sienten."
    ],
    youtube: "https://www.youtube.com/watch?v=_hLfcht6iYg&list=RD_hLfcht6iYg&start_radio=1"
  },
  {
    title: "MIRACOLO IN STRADA",
    cover: "assets/covers/003-MiracoloInStrada.svg",
    comment: "Quando ti accorgi di non essere solo",
    genre: "Pop ballade",
    year: 2025,
    payoffs: [
      	"A volte il miracolo arriva quando tutto sembra finire.", 
	"Tra il buio e la paura, una luce può salvarti l’anima.", 
	"Ci sono cadute che ti insegnano a credere ancora.",
	"Quando la vita si spezza, la fede può rimetterti in piedi.",
	"Non tutti i miracoli fanno rumore.",
	"Nel momento più buio, qualcuno ti sussurra ancora: ‘Resta qui.’",
	"Sopravvivere cambia il cuore per sempre.",
	"A volte basta un attimo per capire quanto vale la vita.",
	"Tra paura e silenzio, nasce la forza di ricominciare.",
	"Ci sono mani invisibili che ci tengono in vita.",
	"Quando tutto cade, la speranza trova ancora una strada.",
	"Il vero miracolo è tornare a credere dopo aver visto il buio."
    ],
    youtube: "https://www.youtube.com/watch?v=g6dSF5zioPU&list=RDg6dSF5zioPU&start_radio=1"
  },
  {
    title: "VIA SANTELLONE",
    cover: "assets/covers/004-ViaSantellone.svg",
    comment: "Ogni luogo racconta le storie di chi ci vive ",
    genre: "Electric pop",
    year: 2025,
    payoffs: [
	"Via Santellone non è una strada… è un mondo che respira.",
	"Dove ogni angolo racconta una storia.",
	"Tra sogni, voci e luci: il cuore batte in Via Santellone.",
	"Una via, mille anime, infinite emozioni.",
	"C’è un posto dove la vita non smette mai di parlare.",
	"Via Santellone: caos, poesia e verità.",
	"Ogni pietra custodisce un ricordo.",
	"Nel cuore della città vive un universo chiamato Via Santellone.",
	"Qui i sogni camminano tra la gente.",
	"Non è solo una strada: è casa, memoria e tempesta.",
	"Tra musica, sorrisi e segreti… nasce la magia di Via Santellone.",
	"Ci sono luoghi che non si dimenticano mai."
    ],
    youtube: "https://www.youtube.com/watch?v=7tTDYyS1lfg&list=RD7tTDYyS1lfg&start_radio=1"
  },
  {
    title: "DIMMI PERCHE'",
    cover: "assets/covers/005-DimmiPerche.svg",
    comment: "Basta guerre, la felicità è qualcosa di molto più semplice.",
    genre: "Rock",
    year: 2026,
    payoffs: [
	"La guerra nasce dall’avidità. La pace nasce dall’umanità.",
	"Ci distruggiamo per il potere, dimenticando quanto poco serva per essere felici.", 
	"La felicità non ha prezzo: vive nelle cose semplici.",
	"Nessuna gloria vale il silenzio di un bambino.",
	"Mentre il mondo combatte, il cuore cerca solo pace.",
	"I confini dividono le terre, non le anime.",
	"La pace non si compra. Si vive.",
	"Abbiamo imparato a fare la guerra… ma non ancora ad ascoltarci.",
	"La vera ricchezza è avere qualcuno da stringere quando il mondo cade a pezzi.",
	"Dietro ogni guerra c’è un cuore che ha smesso di sentire.",
	"Forse la salvezza del mondo è nascosta nelle cose più semplici.",
	"La guerra è fuori. La pace comincia dentro di noi."
     ],
    youtube: "https://www.youtube.com/watch?v=9MRS7n7X_Do&list=RD9MRS7n7X_Do&start_radio=1"
  },
  {
    title: "TELL ME WHY",
    cover: "assets/covers/006-TellMeWhy.svg",
    comment: "No more wars, happiness is something much easier.",
    genre: "Rock",
    year: 2026,
    payoffs: [
	"Peace begins where greed ends.",
	"We keep chasing power while happiness lives in the simplest moments.",
	"No flag is worth more than a human life.",
	"Wars are made by power… peace is made by people.",
	"The world breaks apart when we forget how to feel.",
	"Peace can’t be bought. It has to be lived.",
	"Behind every war there’s someone who forgot what it means to be human.",
	"We have everything to be happy… yet we still destroy each other.",
	"The strongest revolution is choosing humanity over hate.",
	"Maybe happiness was hidden in the simple things we stopped seeing.", 
	"While the world fights for glory, the soul only searches for peace.",
	"The war is outside. The peace begins inside you."
    ],
    youtube: "https://www.youtube.com/watch?v=LJ3BY5BFWUU&list=RDLJ3BY5BFWUU&start_radio=1"
  },
  {
    title: "TRA SILENZI E NOSTALGIA",
    cover: "assets/covers/007-TraSilenziENostalgia.svg",
    comment: "Il dramma della solitudine degli anziani. Domani toccherà a noi.",
    genre: "Pop rock",
    year: 2026,
    payoffs: [
	"La solitudine degli anziani non fa rumore… ed è questo che la rende così crudele.",  
	"Un giorno cercheremo la stessa carezza che oggi stiamo negando.",
	"Chi ci ha insegnato ad amare non dovrebbe mai sentirsi dimenticato.",
	"Ci sono silenzi che gridano più forte delle parole.",
	"La cosa più triste non è invecchiare… ma farlo da soli.",
	"Dietro ogni porta chiusa c’è qualcuno che aspetta soltanto amore.",
	"Non aspettare che sia troppo tardi per esserci.",
	"L’abbandono non lascia lividi… ma ferite invisibili.",
	"Ogni anziano solo è una storia che nessuno sta più ascoltando.",
	"Prima di diventare nostalgia, qualcuno era tutto il nostro mondo."
    ],
    youtube: "https://www.youtube.com/watch?v=cKFYB7Eyyjg&list=RDcKFYB7Eyyjg&start_radio=1"
  },
  {
    title: "PAROLE NON DETTE",
    cover: "assets/covers/008-ParoleNonDette.svg",
    comment: "Le parole più semplici sembrano impossibili da pronunciare.",
    genre: "Pop melodico",
    year: 2026,
    payoffs: [

	"In un mondo pieno di messaggi, stiamo dimenticando come parlarci davvero.",
	"Le parole più importanti sono spesso quelle che non troviamo il coraggio di dire.", 
	"Siamo sempre connessi… ma mai davvero vicini.",
	"A volte basta uno sguardo sincero per dire tutto ciò che le parole non riescono.",
	"Abbiamo imparato a scrivere ovunque, ma non più a guardarci negli occhi.",
	"Il silenzio tra due persone può fare più rumore di mille notifiche.",
	"Le emozioni vere non hanno bisogno di uno schermo.",
	"Ci perdiamo nei messaggi… mentre il cuore aspetta ancora una voce.",
	"Dire ‘ti amo’ oggi sembra difficile quanto sentirlo davvero.",
	"Spegni il telefono. Riaccendi le emozioni."
    ],
    youtube: "https://www.youtube.com/watch?v=LbCPBfWTPLY&list=RDLbCPBfWTPLY&start_radio=1"
  },
  {
    title: "STORIES IN THE SKY",
    cover: "assets/covers/009-StoriesInTheSky.svg",
    comment: "Every journey gives us something more.",
    genre: "American blues groove",
    year: 2026,
    payoffs: [
	"Thousands of miles apart… yet one conversation can change you forever.",
	"Every stranger carries a story waiting to be heard.",
	"Some people stay in your life for years. Others only for one flight.",
	"Above the clouds, we’re all just humans looking for connection.",
	"A midnight flight. A hundred strangers. A thousand untold stories.",
	"Sometimes the people you barely know leave the deepest mark.",
	"Different destinations. Same human heart.",
	"Every seat on a plane hides a life, a memory, a goodbye.",
	"We arrive in new cities… but carry pieces of each other home.",
	"In the sky, strangers become mirrors of our own journey."
    ],
    youtube: "https://www.youtube.com/watch?v=ISdikwGM8gk&list=RDISdikwGM8gk&start_radio=1"
  },
  {
    title: "TRA LE NUVOLE",
    cover: "assets/covers/010-TraLeNuvole.svg",
    comment: "Ogni volo aggiunge una nuova pagina nel nostro diario.",
    genre: "Pop folk",
    year: 2026,
    payoffs: [
	"Ogni volo è fatto di destinazioni… ma soprattutto di persone.",
	"Tra le nuvole scopriamo quanto siamo tutti incredibilmente umani.",
	"Ci sono viaggi che non finiscono quando l’aereo atterra.",
	"Ogni sconosciuto porta con sé una storia capace di cambiarti.",
	"A volte basta un viaggio per sentirsi meno soli nel mondo.",
	"Tra partenze e incontri, impariamo chi siamo davvero.",
	"Le emozioni più vere spesso nascono accanto a perfetti sconosciuti.",
	"Il mondo è immenso… ma i cuori si riconoscono sempre.",
	"Ogni volto incontrato tra le nuvole lascia una traccia dentro di noi.",
	"Viaggiare non significa solo partire… ma imparare ad ascoltare le storie degli altri."
    ],
    youtube: "https://www.youtube.com/watch?v=DF8EPLLviKM&list=RDDF8EPLLviKM&start_radio=1"
  },
  {
    title: "THE FARINOLIO WAY",
    cover: "assets/covers/011-Farinolio.svg",
    comment: "Storia di 2 amici.",
    genre: "American blues groove",
    year: 2026,
    payoffs: [
	"Farinolio: the authentic taste of Italy conquering America.",
	"From Tuscany to the USA, every bite is a journey of happiness.",
	"Love is baked the Italian way.",
	"It’s not just food… it’s a piece of Italy meant to be shared.",
	"Italian tradition, American spirit, unforgettable flavor.", 
	"Every bite tells a story of family, passion, and flavor.",
	"When Italy meets America… Farinolio is born.", 
	"The aroma of Italy, the rhythm of New York.",
	"One bite and you instantly feel at home.",
	"Farinolio: where every day tastes like an Italian holiday."
    ],
    youtube: "https://www.youtube.com/watch?v=b7VNZ9-wr-M&list=RDb7VNZ9-wr-M&start_radio=1"
  },
  {
    title: "SOTTO LO STESSO CIELO",
    cover: "assets/covers/012-SottoLoStessoCielo.svg",
    comment: "Nasciamo tutti uguali nella dignità, diversi solo nelle nostre storie.",
    genre: "Pop rock",
    year: 2026,
    payoffs: [

	"Un solo cielo, un solo cuore.",
	"Le differenze dividono solo chi ha paura.",
	"Siamo colori diversi nella stessa luce.",
	"L’umanità non ha confini né colori.",
	"Guardami negli occhi, siamo uguali.",
	"Più ponti, meno muri.",
	"Ogni pelle racconta la stessa anima.",
	"La diversità è la musica del mondo.",
	"Sotto lo stesso cielo nessuno è straniero.",
	"L’amore parla tutte le lingue."
    ],
    youtube: "https://www.youtube.com/watch?v=I_P9VFlZan0&list=RDI_P9VFlZan0&start_radio=1"
},
  {
    title: "UN BANCO PER SOGNARE",
    cover: "assets/covers/013-UnBancoPerSognare.svg",
    comment: "L'istruzione è l'arma più potente contro l'ignoranza e la povertà.",
    genre: "Pop rock",
    year: 2026,
    payoffs: [
	"Ogni bambino merita il diritto di sognare.",
	"La conoscenza è la chiave della libertà.",
	"Un libro può cambiare il mondo.",
	"Dove nasce il sapere, cresce il futuro.",
	"L’istruzione accende luci che nessuno può spegnere.",
	"Un banco oggi, un domani migliore.",
	"La scuola costruisce ali, non confini.",
	"Ogni mente libera è una rivoluzione.",
	"Studiare è dare voce ai sogni.",
	"Il sapere rende tutti più uguali."
    ],
    youtube: "https://www.youtube.com/watch?v=XAQmjsYVUNw&list=RDXAQmjsYVUNw&start_radio=1"
},
  {
    title: "LIBERTA' DI DIRE",
    cover: "assets/covers/014-LibertaDiDire.svg",
    comment: "Le parole libere costruiscono ponti, il silenzio imposto costruisce muri.",
    genre: "Edm",
    year: 2026,
    payoffs: [
	"La libertà vive solo se la difendi.",
	"Una voce libera può cambiare il mondo.",
	"La verità non ha padrone.",
	"Il silenzio è il primo nemico della democrazia.",
	"Pensare libero è il più grande atto di coraggio.",
	"Ogni parola vera accende una rivoluzione.",
	"La democrazia muore quando smettiamo di parlare.",
	"Nessun muro può fermare un’idea.",
	"La libertà non si compra: si conquista ogni giorno.",
	"Difendere la verità significa difendere noi stessi.",
    ],
    youtube: "https://www.youtube.com/watch?v=f5GJ4IuTQl0&list=RDf5GJ4IuTQl0&start_radio=1"
},
  {
    title: "ACQUA PER TUTTI",
    cover: "assets/covers/015-AcquaPerTutti.svg",
    comment: "C'è chi apre un rubinetto senza pensarci e chi percorre chilometri per una sola goccia.",
    genre: "Edm",
    year: 2026,
    payoffs: [
	"L’acqua è vita, non privilegio.",
	"Ogni goccia negata è un futuro rubato.",
	"Senza acqua non esiste libertà.",
	"Difendere l’acqua significa difendere la vita.",
	"La sete non può aspettare.",
	"L’acqua appartiene al mondo, non al profitto.",
	"Un diritto universale scorre in ogni goccia.",
	"Dove manca l’acqua, manca il domani.",
	"Non sprecare ciò che per qualcuno è sopravvivenza.",
	"Siamo tutti uguali davanti alla sete."
    ],
    youtube: "https://www.youtube.com/watch?v=4zpQd0jq0aI&list=RD4zpQd0jq0aI&start_radio=1"
},
  {
    title: "STANZE VUOTE",
    cover: "assets/covers/016-StanzeVuote.svg",
    comment: "La solitudine più dolorosa non è stare da soli, ma sentirsi soli in mezzo agli altri.",
    genre: "Pop rock",
    year: 2026,
    payoffs: [
	"La solitudine fa più rumore del silenzio.",
	"Anche nei cuori più freddi vive il bisogno d’amore.",
	"Nessuno è nato per sentirsi invisibile.",
	"Dietro ogni sorriso può nascondersi una tempesta.",
	"A volte basta una voce per salvare un’anima.",
	"Siamo tutti pianeti in cerca di calore.",
	"La distanza più grande è sentirsi soli tra la gente.",
	"Ogni abbraccio sincero è una luce nel buio.",
	"Ci si salva insieme, mai da soli.",
	"Quando due cuori si incontrano, il silenzio smette di fare paura."
    ],
    youtube: "https://www.youtube.com/watch?v=pjUu48mQTPA&list=RDpjUu48mQTPA&start_radio=1"
},
  {
    title: "SCROLLANDO VIA LA VITA",
    cover: "assets/covers/017-ScrollandoViaLaVita.svg",
    comment: "I social ti fanno sentire connesso al mondo, ma spesso ti allontanano da chi hai accanto.",
    genre: "Pop rock",
    year: 2026,
    payoffs: [
	"Scrolliamo la vita invece di viverla.",
	"Più connessi online, più lontani davvero.",
	"Nessun like vale un abbraccio vero.",
	"I social riempiono lo schermo, non il cuore.",
	"La vita reale non ha filtro.",
	"Ci perdiamo il presente rincorrendo notifiche.",
	"Dietro ogni schermo può nascondersi la solitudine.",
	"Spegni il telefono, riaccendi le emozioni.",
	"Un follower non sostituirà mai una presenza vera.",
	"Alza gli occhi: la vita ti sta aspettando."
    ],
    youtube: "https://www.youtube.com/watch?v=E0TD_HMa6Ho&list=RDE0TD_HMa6Ho&start_radio=1"
},
  {
    title: "CINQUANTAPERCENTO",
    cover: "assets/covers/018-CinquantaPercento.svg",
    comment: "Hai il 50% di possibilità di riuscire e il 50% di imparare qualcosa. In entrambi i casi, vinci.",
    genre: "Pop blues",
    year: 2026,
    payoffs: [
	"Il vero fallimento è non provarci mai.",
	"Chi rischia può perdere, chi non rischia ha già perso.",
	"Ogni sogno inizia con un passo nel vuoto.",
	"La paura ferma, il coraggio cambia la vita.",
	"Se ci provi hai una possibilità, se ti fermi hai solo rimpianti.",
	"Le cadute insegnano più della paura.",
	"Il coraggio non è non avere paura, ma andare avanti lo stesso.",
	"Ogni grande storia nasce da un tentativo.",
	"Meglio un errore vissuto che un sogno mai provato.",
	"La vita premia chi osa credere in sé stesso."
    ],
    youtube: "https://www.youtube.com/watch?v=80EmxPmBFb0&list=RD80EmxPmBFb0&start_radio=1"
},
  {
    title: "RUBANO L’INNOCENZA",
    cover: "assets/covers/019-RubanoLinnocenza.svg",
    comment: "L'innocenza di un bambino è un bene prezioso che va difeso senza esitazione.",
    genre: "R&B Pop",
    year: 2026,
    payoffs: [
	"Proteggere un bambino significa proteggere il futuro.",
	"L’innocenza non si tocca.",
	"Ogni silenzio spezzato è un bambino salvato.",
	"Chi ferisce un bambino distrugge l’umanità.",
	"I bambini devono crescere con amore, non con paura.",
	"Nessuna ombra deve nascondere la verità.",
	"Difendere i più fragili è il dovere più grande.",
	"L’infanzia va protetta, mai spezzata.",
	"Ascoltare una voce ferita può cambiare una vita.",
	"Ogni bambino merita solo sogni, libertà e dignità."
    ],
    youtube: "https://www.youtube.com/watch?v=NXlrY3DZ1sM&list=RDNXlrY3DZ1sM&start_radio=1"
},
  {
    title: "POLVERE VELOCE",
    cover: "assets/covers/020-PolvereVeloce.svg",
    comment: "La droga promette di farti volare, ma spesso ti lascia senza ali.",
    genre: "R&B Pop",
    year: 2026,
    payoffs: [
	"La droga promette il cielo e ti lascia nel vuoto.",
	"Ogni dose ruba un pezzo di futuro.",
	"La vera libertà è restare sé stessi.",
	"Dietro lo sballo spesso si nasconde il dolore.",
	"Nessuna fuga vale il prezzo della tua vita.",
	"La droga spegne sogni prima ancora che nascano.",
	"Chi ti ama vuole vederti vivere, non sopravvivere.",
	"Le illusioni passano, le ferite restano.",
	"Non lasciare che una notte distrugga il tuo domani.",
	"Vale di più un futuro vero che uno sballo momentaneo."
    ],
    youtube: "https://www.youtube.com/watch?v=3Ue9zIZyr3I&list=RD3Ue9zIZyr3I&start_radio=1"
},
  {
    title: "UNO SGUARDO DI TROPPO",
    cover: "assets/covers/021-UnoSguardoDiTroppo.svg",
    comment: "Un attimo di violenza può cancellare anni di futuro.",
    genre: "R&B Pop",
    year: 2026,
    payoffs: [
	"Nessuno dovrebbe morire per uno sguardo.",
	"La rabbia distrugge, il dialogo salva.",
	"Le parole valgono più delle armi.",
	"Dietro ogni violenza c’è un dolore mai ascoltato.",
	"Il rispetto non si conquista con la paura.",
	"Un attimo di odio può rubare un’intera vita.",
	"I ragazzi hanno bisogno di futuro, non di violenza.",
	"Chi semina odio raccoglie silenzio e lacrime.",
	"La forza vera è saper fermare la rabbia.",
	"Nati per vivere, non per sparare."
    ],
    youtube: "https://www.youtube.com/watch?v=2U3mQHO2KWI&list=RD2U3mQHO2KWI&start_radio=1"
},
  {
    title: "MAI PIU' SILENZIO",
    cover: "assets/covers/022-MaiPiuSilenzio.svg",
    comment: "Ogni donna merita rispetto, sicurezza e libertà, ogni giorno.",
    genre: "R&B Pop",
    year: 2026,
    payoffs: [
	"L’amore non lascia lividi.",
	"Il silenzio protegge la violenza, la voce salva vite.",
	"Nessuna donna deve avere paura di amare.",
	"Chi ama davvero non ferisce mai.",
	"Ogni donna merita rispetto, non controllo.",
	"Rompere il silenzio è il primo passo verso la libertà.",
	"La violenza non è amore, è paura travestita.",
	"Dietro ogni ferita c’è una voce che chiede aiuto.",
	"Il coraggio di parlare può cambiare un destino.",
	"Mai più paura, mai più silenzio."
    ],
    youtube: "https://www.youtube.com/watch?v=lpgQ4Hl6mJU&list=RDlpgQ4Hl6mJU&start_radio=1"
},
  {
    title: "FAKE OR REAL",
    cover: "assets/covers/023-FakeOrReal.svg",
    comment: "Fake o real? Nel rumore delle apparenze, l'autenticità è diventata un atto di coraggio",
    genre: "Dance pop",
    year: 2026,
    payoffs: [
	"Tra fake e realtà, non perdere te stesso.",
	"In un mondo di rumore, cerca la tua verità.",
	"Non tutto ciò che è virale è reale.",
	"La libertà è pensare con la propria testa.",
	"Tra mille versioni, resta autentico.",
	"I dubbi passano, la musica resta.",
	"Fake o real? L’importante è non smettere di cercare.",
	"La verità non urla: si scopre.",
	"Sotto le luci dei social, non perdere la realtà.",
	"Balliamo tra illusioni, cercando qualcosa di vero."
    ],
    youtube: "https://www.youtube.com/channel/UCSSirPs9uyMDEBYx-gUSScw"
},
  {
    title: "FAKE OR REAL, TELL ME WHAT IT IS",
    cover: "assets/covers/024-FakeOrRealTellMeWhatItIs.svg",
    comment: "The truth is hard to find.",
    genre: "Dance pop",
    year: 2026,
    payoffs: [
	"In a world full of noise, stay real.",
	"Not everything viral is true.",
	"Between fake and real, don’t lose yourself.",
	"The loudest voices aren’t always right.",
	"Truth doesn’t need filters.",
	"Dance through the chaos, think with your own mind.",
	"Reality gets blurry when everyone talks.",
	"Stay awake, but stay free.",
	"Too many stories, one search for truth.",
	"When truth is hard to find, music keeps us alive."
    ],
    youtube: "https://www.youtube.com/watch?v=kiwO2HcF1Mc&list=RDkiwO2HcF1Mc&start_radio=1"
},
  {
    title: "NOTTI SENZA FRENI",
    cover: "assets/covers/025-NottiSenzaFreni.svg",
    comment: "Chi cerca la libertà nell'alcol rischia di diventare prigioniero delle sue catene.",
    genre: "R&B Pop",
    year: 2026,
    payoffs: [
	"Una notte può cambiarti la vita per sempre.",
	"L’alcol non rende forti, rende fragili.",
	"Divertirsi non significa distruggersi.",
	"Chi guida ubriaco spegne più di un motore.",
	"La vera forza è sapere dire no.",
	"Un attimo di follia può diventare un’eternità di dolore.",
	"Le notti senza controllo lasciano cicatrici vere.",
	"Nessuno è invincibile davanti alle conseguenze.",
	"La libertà non è perdere sé stessi.",
	"Vivi la notte, ma non perdere il domani."
    ],
    youtube: "https://www.youtube.com/watch?v=3PIlt7CsBdE&list=RD3PIlt7CsBdE&start_radio=1"
},
  {
    title: "DENTRO IL SOLE",
    cover: "assets/covers/026-DentroIlSole.svg",
    comment: "Il sole è vita che si rinnova, alba dopo alba.",
    genre: "Country",
    year: 2026,
    payoffs: [
	"Dentro il sole: l’energia che ti riporta vivo.",
	"Una canzone che brucia sulla pelle e nell’anima.",
	"Come il sole dentro me, impossibile da spegnere.",
	"Tra adrenalina, calore e libertà.",
	"Il battito caldo di un’emozione senza limiti.",
	"Quando la musica diventa luce.",
	"Un’onda di calore che attraversa il cuore.",
	"La forza invisibile che accende la vita.",
	"Dentro il sole: dove il desiderio incontra l’anima.",
	"Più forte della notte, più vivo che mai."
    ],
    youtube: "https://www.youtube.com/watch?v=1tIl5Aypqwg&list=RD1tIl5Aypqwg&start_radio=1"
},
  {
    title: "APRILE SA DI TE",
    cover: "assets/covers/027-AprileSaDiTe.svg",
    comment: "La giovinezza non dura per sempre, ma le emozioni che ci regala possono accompagnarci per tutta la vita.",
    genre: "Pop rock",
    year: 2026,
    payoffs: [
	"Aprile sa di te: il profumo eterno dei ricordi.",
	"Dove finisce il tempo, inizia Aprile.",
	"Una canzone che profuma di casa e nostalgia.",
	"Aprile: il ricordo più dolce che resta dentro.",
	"Tra cielo blu e sogni d’infanzia.",
	"La voce dei ricordi che non smettono mai di fiorire.",
	"Ogni aprile riporta il cuore a casa.",
	"Un viaggio nei profumi e nei colori dell’infanzia.",
	"Quando un ricordo diventa musica.",
	"Aprile sei tu, per sempre dentro me."
    ],
    youtube: "https://www.youtube.com/watch?v=IEgisN1TXjI&list=RDIEgisN1TXjI&start_radio=1"
},
  {
    title: "IL CIELO DI TEO",
    cover: "assets/covers/028-IlCieloDiTeo.svg",
    comment: "Quando il cielo diventa un gigantesco puzzle.",
    genre: "Pop rock",
    year: 2026,
    payoffs: [
	"Ogni scia racconta una storia... almeno per Teo.",
	"Tra nuvole e sospetti, la fantasia prende quota.",
	"C'è chi guarda le stelle. Teo guarda le scie.",
	"Un volo di linea, mille teorie.",
	"Il mistero è sempre sopra le nostre teste.",
	"Dove gli altri vedono nuvole, Teo vede indizi.",
	"La fantasia decolla prima degli aerei.",
	"Occhi puntati al cielo, convinzioni incrollabili.",
	"Un investigatore del blu... senza ferie.",
	"Per Teo, ogni linea nel cielo nasconde un segreto."
    ],
    youtube: "https://www.youtube.com/channel/UCSSirPs9uyMDEBYx-gUSScw"
},
  {
    title: "VOGLIA DI VACANZE",
    cover: "assets/covers/029-VogliaDiVacanze.svg",
    comment: "Sole, mare e libertà: il resto può aspettare.",
    genre: "Pop rock",
    year: 2026,
    payoffs: [
	"L'estate inizia quando parte questa canzone.",
	"Ogni estate merita la sua colonna sonora.",
	"La voglia di partire non va mai in vacanza.",
	"Più volume, meno pensieri.",
	"Tra tramonti, risate e sogni da vivere.",
	"Il mare chiama... e noi rispondiamo cantando.",
	"Le vacanze sono uno stato d'animo.",
	"Un pieno di sole, musica e felicità.",
	"Le estati migliori iniziano con un ritornello.",
	"Accendi la musica e lascia partire l'estate."
    ],
    youtube: "https://www.youtube.com/channel/UCSSirPs9uyMDEBYx-gUSScw"
];
