# NykeB Songwriter Website

Sito web React/Vite ottimizzato SEO per songwriter, pronto da caricare su GitHub.

## Contenuto

- Home page con brand NykeB
- Biografia aggiornabile
- Sezione canzoni compatta
- Copertina quadrata con angoli arrotondati
- Player anteprima brani
- 3 frasi visibili per canzone + pulsante "Mostra di più"
- Social link
- SEO meta tag + dati strutturati Schema.org
- Fondo blu notte

## Come avviare in locale

```bash
npm install
npm run dev
```

## Come creare la versione pubblicabile

```bash
npm run build
```

La cartella finale sarà `dist`.

## Dove modificare i contenuti

Apri `src/App.jsx` e modifica:

- `SITE_CONFIG` per nome artista, logo, SEO, email e social
- `BIO_PARAGRAPHS` per la biografia
- `SONGS` per aggiungere o modificare canzoni

## Logo

Il logo usato dal sito si trova in:

```txt
public/assets/logo/logo-nykeb.svg
```

Per sostituirlo con il logo definitivo, carica il file nella stessa cartella e aggiorna questa riga in `src/App.jsx`:

```js
logoImage: "/assets/logo/logo-nykeb.svg"
```

Esempio:

```js
logoImage: "/assets/logo/logo-nykeb.png"
```

## Audio e copertine

Puoi usare URL esterni oppure salvare file locali qui:

```txt
public/assets/audio/
public/assets/covers/
```

Esempio canzone con file locali:

```js
cover: "/assets/covers/titolo-canzone.jpg",
audioPreview: "/assets/audio/titolo-canzone.mp3"
```

## Pubblicazione GitHub Pages

1. Crea un nuovo repository su GitHub.
2. Carica tutti i file di questa cartella.
3. Installa le dipendenze con `npm install`.
4. Esegui `npm run build`.
5. Pubblica la cartella `dist` sul tuo hosting oppure configura GitHub Pages con una GitHub Action per Vite.
