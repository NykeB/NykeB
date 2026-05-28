import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Music, Play, Pause, Music2, Mail, Sparkles, Search, Menu, X } from "lucide-react";

const SITE_CONFIG = {
  artistName: "NykeB",
  tagline: "Songwriter pop-urban con parole vere, ritornelli luminosi e storie da cantare a mezzanotte.",
  logoText: "NB",
  logoImage: "/assets/logo/logo-nykeb.svg",
  seoTitle: "NykeB | Songwriter Pop Urban | Canzoni, Biografia e Anteprime",
  seoDescription:
    "Sito ufficiale di NykeB, songwriter pop-urban. Scopri biografia, nuove canzoni, copertine, commenti d'autore, anteprime audio e social ufficiali.",
  seoKeywords:
    "NykeB, songwriter, cantautore, pop urban, nuove canzoni, musica emergente, testi canzoni, artista giovane, anteprime musicali",
  contactEmail: "booking@nykeb.example",
  socials: {
    instagram: "https://instagram.com/",
    youtube: "https://youtube.com/",
    spotify: "https://spotify.com/",
  },
};

const BIO_PARAGRAPHS = [
  "NykeB è un songwriter nato tra melodie pop, beat urban e quaderni pieni di frasi sottolineate. Scrive canzoni che parlano di crescita, amicizie complicate, amori intermittenti e della voglia di trovare un posto nel mondo.",
  "Il suo stile mescola immagini cinematografiche, ritornelli immediati e una voce autoriale pensata per una generazione che vive tra cuffie, chat aperte e notti troppo lunghe.",
  "Ogni brano nasce da un dettaglio: una strada bagnata, una nota vocale mai inviata, una foto rimasta in galleria. Da lì prende forma un universo sonoro diretto, giovane e riconoscibile.",
];

const SONGS = [
  {
    id: "neon-cuore",
    title: "Neon nel Cuore",
    year: "2026",
    mood: "Pop notturno",
    cover:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
    audioPreview:
      "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    comment: [
      "Questa canzone nasce da una sera in cui la città sembrava parlare con le luci dei negozi chiusi.",
      "Il neon diventa il simbolo di un'emozione che non si spegne anche quando tutto intorno rallenta.",
      "Nel testo c'è il contrasto tra il desiderio di fuggire e la paura di lasciare indietro qualcosa di importante.",
      "Il ritornello è pensato per essere cantato in macchina, con il finestrino abbassato e il volume alto.",
      "La produzione usa sintetizzatori luminosi e una batteria asciutta per creare movimento senza perdere intimità.",
      "Ogni strofa racconta un piccolo frammento di una relazione sospesa tra presenza e distanza.",
      "La voce resta molto vicina, quasi confidenziale, perché il brano vuole sembrare un messaggio privato.",
      "Il cuore del pezzo è la sensazione di sentirsi fragili ma comunque accesi.",
      "La parola neon è stata scelta perché contiene freddezza e calore nello stesso tempo.",
      "È una canzone per chi ha imparato a sorridere anche quando non ha tutte le risposte.",
      "Nel bridge arriva il momento più sincero, quello in cui l'orgoglio lascia spazio alla verità.",
      "Il brano chiude con l'idea che certe luci non indicano una fine, ma una nuova direzione.",
    ],
  },
  {
    id: "offline",
    title: "Offline",
    year: "2026",
    mood: "Indie pop",
    cover:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    audioPreview:
      "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    comment: [
      "Offline parla del bisogno di sparire per qualche ora senza dover spiegare tutto a tutti.",
      "Il brano nasce da una riflessione sul rumore continuo delle notifiche e delle aspettative digitali.",
      "Nel testo la disconnessione non è fuga, ma un modo per tornare a respirare davvero.",
      "Le chitarre leggere danno un sapore indie, mentre il basso mantiene una spinta moderna e ballabile.",
      "La canzone immagina una giornata senza filtri, senza stories e senza bisogno di dimostrare qualcosa.",
      "Il ritornello è semplice e diretto perché vuole diventare una piccola dichiarazione di libertà.",
      "Ogni frase cerca di raccontare la stanchezza emotiva di chi è sempre raggiungibile.",
      "Il mood resta positivo, perché il silenzio qui non è tristezza ma recupero di energia.",
      "Nel secondo verso compare l'immagine di una città che continua a correre anche quando tu decidi di fermarti.",
      "La scrittura usa parole quotidiane per restare vicina all'esperienza di chi ascolta.",
      "Il finale lascia aperta la porta al ritorno, ma solo quando si è pronti.",
      "Offline è un promemoria gentile: ogni tanto spegnersi serve per riaccendersi meglio.",
    ],
  },
  {
    id: "polaroid",
    title: "Polaroid d'Estate",
    year: "2025",
    mood: "Fresh pop",
    cover:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    audioPreview:
      "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    comment: [
      "Polaroid d'Estate è una canzone colorata che conserva il sapore delle giornate finite troppo presto.",
      "Il titolo richiama le foto istantanee, quelle imperfette ma capaci di trattenere un'emozione precisa.",
      "Il brano racconta un amore leggero, nato tra amici, spiaggia, motorini e promesse dette ridendo.",
      "La produzione è solare, con percussioni morbide e melodie che cercano subito la memoria dell'ascoltatore.",
      "Nel testo l'estate non è solo una stagione, ma un luogo mentale in cui tornare quando manca il coraggio.",
      "Il ritornello funziona come una fotografia: pochi dettagli, ma abbastanza nitidi da restare impressi.",
      "Le strofe alternano nostalgia e spensieratezza senza diventare malinconiche.",
      "L'immagine centrale è una foto tenuta nel portafoglio come piccolo portafortuna emotivo.",
      "La voce è più aperta e luminosa rispetto ai brani notturni, per seguire l'energia della storia.",
      "C'è dentro il ricordo di quelle estati in cui tutto sembrava possibile anche senza grandi piani.",
      "Il bridge porta una sfumatura più adulta, perché ogni ricordo bello contiene anche la consapevolezza che passa.",
      "Il messaggio finale è semplice: alcune persone diventano canzoni anche quando restano solo fotografie.",
    ],
  },
];

function useDocumentSeo() {
  React.useEffect(() => {
    document.title = SITE_CONFIG.seoTitle;

    const ensureMeta = (name, content, attr = "name") => {
      let tag = document.querySelector(`meta[${attr}="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    ensureMeta("description", SITE_CONFIG.seoDescription);
    ensureMeta("keywords", SITE_CONFIG.seoKeywords);
    ensureMeta("og:title", SITE_CONFIG.seoTitle, "property");
    ensureMeta("og:description", SITE_CONFIG.seoDescription, "property");
    ensureMeta("og:type", "website", "property");
    ensureMeta("twitter:card", "summary_large_image");

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "MusicGroup",
      name: SITE_CONFIG.artistName,
      description: SITE_CONFIG.seoDescription,
      genre: ["Pop", "Urban", "Indie Pop"],
      sameAs: Object.values(SITE_CONFIG.socials),
      track: SONGS.map((song) => ({
        "@type": "MusicRecording",
        name: song.title,
        datePublished: song.year,
        byArtist: SITE_CONFIG.artistName,
      })),
    };

    let script = document.querySelector("script[data-songwriter-schema]");
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-songwriter-schema", "true");
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);
  }, []);
}

function ArtistLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-12 w-12 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400 text-lg font-black text-white shadow-lg shadow-fuchsia-500/25">
        {SITE_CONFIG.logoImage ? (
          <img src={SITE_CONFIG.logoImage} alt={`Logo ${SITE_CONFIG.artistName}`} className="h-full w-full object-cover" />
        ) : (
          SITE_CONFIG.logoText
        )}
      </div>
      <div>
        <p className="text-lg font-black tracking-tight text-white">{SITE_CONFIG.artistName}</p>
        <p className="text-xs uppercase tracking-[0.25em] text-cyan-200">Official songwriter</p>
      </div>
    </div>
  );
}

function SocialMark({ label }) {
  return (
    <span className="mb-5 grid h-10 w-10 place-items-center rounded-2xl bg-[#102044] text-sm font-black text-white">
      {label}
    </span>
  );
}

function Player({ src, title, activeId, setActiveId, id }) {
  const audioRef = React.useRef(null);
  const isActive = activeId === id;

  React.useEffect(() => {
    if (!isActive && audioRef.current) audioRef.current.pause();
  }, [isActive]);

  const toggle = () => {
    if (!audioRef.current) return;
    if (isActive) {
      audioRef.current.pause();
      setActiveId(null);
    } else {
      setActiveId(id);
      setTimeout(() => audioRef.current?.play(), 0);
    }
  };

  return (
    <div className="rounded-xl border border-cyan-200/10 bg-[#1a2b4d]/80 p-1.5 backdrop-blur">
      <button
        onClick={toggle}
        className="flex w-full items-center justify-between gap-3 rounded-xl bg-white px-3 py-1.5 text-left text-xs font-bold text-[#102044] transition hover:scale-[1.01] hover:bg-cyan-100"
        aria-label={`${isActive ? "Metti in pausa" : "Riproduci anteprima"} ${title}`}
      >
        <span className="flex items-center gap-3">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-[#102044] text-white">
            {isActive ? <Pause size={15} /> : <Play size={15} />}
          </span>
          Anteprima brano
        </span>
        <span className="text-[10px] uppercase tracking-wider text-slate-500">30 sec</span>
      </button>
      <audio ref={audioRef} src={src} onEnded={() => setActiveId(null)} preload="none" />
    </div>
  );
}

function SongCard({ song, activeId, setActiveId }) {
  const [expanded, setExpanded] = useState(false);
  const visibleComment = expanded ? song.comment : song.comment.slice(0, 3);

  return (
    <motion.article
      layout
      className="overflow-hidden rounded-[1.5rem] border border-cyan-200/10 bg-[#172a4d]/85 shadow-lg shadow-cyan-950/20 backdrop-blur-xl"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      itemScope
      itemType="https://schema.org/MusicRecording"
    >
      <div className="grid gap-3 p-3 lg:grid-cols-[150px_1fr] lg:items-start">
        <div className="relative aspect-square w-full overflow-hidden rounded-[1.35rem] lg:w-[150px]">
          <img src={song.cover} alt={`Copertina del singolo ${song.title}`} className="absolute inset-0 h-full w-full object-cover" itemProp="image" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#102044]/85 via-[#102044]/10 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3">
            <div className="mb-1.5 inline-flex rounded-full bg-white/15 px-2 py-0.5 text-[8px] font-bold uppercase tracking-widest text-white backdrop-blur">
              {song.mood} · {song.year}
            </div>
            <h3 className="text-lg font-black tracking-tight text-white lg:text-xl" itemProp="name">{song.title}</h3>
          </div>
        </div>
        <div className="space-y-2 p-0">
          <Player src={song.audioPreview} title={song.title} activeId={activeId} setActiveId={setActiveId} id={song.id} />
          <div className="grid gap-1 text-xs leading-5 text-slate-200" itemProp="description">
            {visibleComment.map((sentence, index) => (
              <p key={index} className="rounded-xl bg-[#0f2347]/65 p-2">{sentence}</p>
            ))}
          </div>
          {song.comment.length > 3 && (
            <button
              onClick={() => setExpanded((value) => !value)}
              className="rounded-full border border-cyan-300/40 px-3.5 py-1.5 text-xs font-bold text-cyan-100 transition hover:bg-cyan-300 hover:text-[#102044]"
            >
              {expanded ? "Mostra meno" : "Mostra di più"}
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function App() {
  useDocumentSeo();
  const [activeId, setActiveId] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = useMemo(
    () => [
      ["Biografia", "#biografia"],
      ["Canzoni", "#canzoni"],
      ["Social", "#social"],
      ["Contatti", "#contatti"],
    ],
    []
  );

  return (
    <main className="min-h-screen bg-[#14213d] text-white selection:bg-fuchsia-400 selection:text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(217,70,239,.22),transparent_30%),radial-gradient(circle_at_top_right,rgba(34,211,238,.22),transparent_30%),linear-gradient(180deg,#172554,#1e3a5f)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#14213d]/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#home" aria-label="Vai alla home"><ArtistLogo /></a>
          <div className="hidden items-center gap-2 md:flex">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className="rounded-full px-4 py-2 text-sm font-bold text-slate-200 transition hover:bg-white/10 hover:text-white">
                {label}
              </a>
            ))}
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="rounded-xl bg-white/10 p-3 md:hidden" aria-label="Apri menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>
        {menuOpen && (
          <div className="grid gap-2 border-t border-white/10 px-5 py-4 md:hidden">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} className="rounded-2xl bg-white/10 px-4 py-3 font-bold">
                {label}
              </a>
            ))}
          </div>
        )}
      </header>

      <section id="home" className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col justify-center">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-fuchsia-300/30 bg-fuchsia-400/10 px-4 py-2 text-sm font-bold text-fuchsia-100">
            <Sparkles size={16} /> Nuova era pop-urban
          </div>
          <h1 className="max-w-4xl text-5xl font-black tracking-tight sm:text-7xl lg:text-8xl">
            Canzoni scritte per chi vive tutto <span className="bg-gradient-to-r from-fuchsia-300 via-cyan-200 to-violet-300 bg-clip-text text-transparent">a volume alto.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{SITE_CONFIG.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#canzoni" className="rounded-full bg-white px-6 py-4 font-black text-[#102044] shadow-xl shadow-cyan-500/20 transition hover:scale-105">
              Ascolta le anteprime
            </a>
            <a href="#biografia" className="rounded-full border border-white/20 px-6 py-4 font-black text-white transition hover:bg-white/10">
              Scopri la storia
            </a>
          </div>
          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3 text-center">
            {["3 singoli", "12 frasi per brano", "SEO ready"].map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <p className="text-sm font-black uppercase tracking-wide text-cyan-100">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative">
          <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-br from-fuchsia-500/30 to-cyan-500/30 blur-2xl" />
          <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
            <img
              src="https://images.unsplash.com/photo-1526218626217-dc65a29bb444?auto=format&fit=crop&w=1200&q=80"
              alt={`Ritratto promozionale di ${SITE_CONFIG.artistName}`}
              className="h-[560px] w-full rounded-[2.4rem] object-cover"
            />
            <div className="absolute bottom-8 left-8 right-8 rounded-[2rem] border border-white/15 bg-[#14213d]/75 p-5 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <Music className="text-cyan-200" />
                <div>
                  <p className="font-black">Ultimo singolo</p>
                  <p className="text-sm text-slate-300">Neon nel Cuore · anteprima disponibile</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="biografia" className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-cyan-200">Biografia</p>
            <h2 className="text-4xl font-black tracking-tight sm:text-6xl">Una penna giovane, una voce riconoscibile.</h2>
          </div>
          <div className="grid gap-5 text-lg leading-9 text-slate-300">
            {BIO_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph} className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur">{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="canzoni" className="mx-auto max-w-7xl px-5 py-16">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 flex items-center gap-2 text-sm font-black uppercase tracking-[0.3em] text-fuchsia-200"><Music2 size={18} /> Canzoni</p>
            <h2 className="text-4xl font-black tracking-tight sm:text-6xl">Copertine, commenti e player.</h2>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/10 p-4 text-sm text-slate-300">
            <Search className="mb-2 text-cyan-200" /> Ogni scheda è strutturata per contenuti SEO: titolo, immagine, descrizione e dati musicali.
          </div>
        </div>
        <div className="grid gap-4">
          {SONGS.map((song) => (
            <SongCard key={song.id} song={song} activeId={activeId} setActiveId={setActiveId} />
          ))}
        </div>
      </section>

      <section id="social" className="mx-auto max-w-7xl px-5 py-16">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-fuchsia-500/20 via-violet-500/10 to-cyan-500/20 p-8 backdrop-blur-xl lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-cyan-200">Social</p>
              <h2 className="text-4xl font-black tracking-tight sm:text-6xl">Segui il viaggio creativo.</h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
                Backstage, demo, bozze di testo, live session e aggiornamenti sulle nuove uscite.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <a href={SITE_CONFIG.socials.instagram} className="rounded-[2rem] bg-white p-6 text-[#102044] transition hover:scale-105" rel="noreferrer" target="_blank">
                <SocialMark label="IG" /> <strong>Instagram</strong><p className="mt-2 text-sm text-slate-500">Reel, foto e backstage</p>
              </a>
              <a href={SITE_CONFIG.socials.youtube} className="rounded-[2rem] bg-white p-6 text-[#102044] transition hover:scale-105" rel="noreferrer" target="_blank">
                <SocialMark label="YT" /> <strong>YouTube</strong><p className="mt-2 text-sm text-slate-500">Video, lyrics e live</p>
              </a>
              <a href={SITE_CONFIG.socials.spotify} className="rounded-[2rem] bg-white p-6 text-[#102044] transition hover:scale-105" rel="noreferrer" target="_blank">
                <Music className="mb-5" /> <strong>Spotify</strong><p className="mt-2 text-sm text-slate-500">Singoli e playlist</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer id="contatti" className="border-t border-white/10 px-5 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
          <ArtistLogo />
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
            <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-3 hover:bg-white/10">
              <Mail size={16} /> {SITE_CONFIG.contactEmail}
            </a>
            <span>© 2026 {SITE_CONFIG.artistName}. Tutti i diritti riservati.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
