# Sito web per songwriter

Sito statico responsive, pronto per GitHub Pages.

## Modifica dati artista
Apri `index.html` e sostituisci:
- `Nome Artista`
- biografia nella sezione hero
- email e link social
- URL canonical e metadati SEO

## Aggiungi o modifica canzoni
Apri `songs.js`. Ogni canzone ha questa struttura:

```js
{
  title: "Titolo canzone",
  cover: "assets/covers/nome-copertina.jpg",
  comment: "Commento descrittivo del brano.",
  payoffs: ["Payoff 1", "Payoff 2", "... fino a 12"],
  youtube: "https://www.youtube.com/watch?v=VIDEO_ID"
}
```

Il catalogo mostra automaticamente 10 canzoni per pagina.

## Pubblicazione su GitHub Pages
1. Crea un repository GitHub.
2. Carica tutti i file di questa cartella.
3. Vai su Settings > Pages.
4. Source: Deploy from branch.
5. Branch: `main`, cartella `/root`.
6. Salva e attendi la pubblicazione.


## Catalogo: genere, anno, ricerca e filtri

Ogni canzone in `songs.js` può ora includere anche:

```js
genre: "Pop d'autore",
year: 2026,
```

I filtri per genere e anno vengono generati automaticamente dai valori presenti in `songs.js`.
La ricerca live controlla titolo, commento, genere, anno e payoff.


## Sostituire la foto nella hero

Il riquadro a destra della hero ora usa:

```html
assets/artist-photo.svg
```

Per usare una foto reale:
1. inserisci la tua immagine in `assets/`, per esempio `artist-photo.jpg`;
2. apri `index.html`;
3. sostituisci `assets/artist-photo.svg` con `assets/artist-photo.jpg`.
