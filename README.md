# Die Lichtung

Responsive Nuxt-4-Webseite nach dem fertigen Lichtung-Handout. Alle verwendeten Bilder, Icons und Schriften liegen im Projekt. Die Seite ruft zur Laufzeit keine externen Asset-Dienste auf.

## Starten

Node.js ab 22.12 und npm verwenden.

```sh
npm ci
npm run dev
```

Die Entwicklungsvorschau läuft auf http://localhost:3000. Mit `npm run dev -- --port 3001` lässt sich ein anderer Port wählen.

```sh
npm run typecheck
npm run build
node .output/server/index.mjs
```

Alternativ erzeugt `npm run generate` eine statische Website in `.output/public`.

## Aufbau und Bearbeitung

- `app/app.vue`: Einstieg mit Nuxt-Seitenrouting.
- `app/pages/index.vue`: Lichtung-Startseite mit Navigation, Werten, Zielen und Kontakt.
- `app/pages/grillabend.vue`: eigenständige Einladung zum privaten Aurora-Grillabend unter `/grillabend`, ohne Verlinkung auf der Startseite und mit eigenen Metadaten.
- `app/assets/css/main.css`: Gestaltung, Farben und responsive Layouts.
- `app/components/`: Symbolkomponente und Blatt-Trennlinie.
- `public/images/`: lokal eingebundene Bildgrafiken.
- `public/images/grillabend/`: lokale Fotos vom Römerbrünnchen in zwei WebP-Größen und Feuer-Symbol.
- `public/icons/`: Material Design Icons mit Apache-2.0-Lizenz.
- `public/fonts/`: Cormorant Garamond und Caveat mit OFL-Lizenzen.
- `references/`: Handout-Vorschau, Herkunftsnachweis und Landschaftsoriginal.

Der Kontakt öffnet das E-Mail-Programm mit `ankommen@lichtung.be`. Der Kopierbutton meldet Erfolg erst nach erfolgreichem Clipboard-Zugriff; bei fehlender Berechtigung erscheint die Adresse zum manuellen Kopieren. Es gibt kein Formular-Backend, Tracking oder externe Einbettungen.

Die Website wird über die Git-Integration auf Vercel veröffentlicht. Der Produktionszweig ist `main`; die Domain ist https://www.lichtung.be. Inhalte für Impressum und Datenschutz wurden nicht mitgeliefert und sind nicht erfunden worden.

Die Grillabend-Seite ist unabhängig vom Lichtung-Projekt. Rückmeldungen erfolgen per WhatsApp an Maik, damit genügend Wasser mitgebracht werden kann. Grillzeug, Softdrinks, ausreichend warme Kleidung und Decken zum Sitzen bringen die Gäste selbst mit. Der Hinweis auf das nicht barrierefreie Gelände steht direkt beim Treffpunkt. Die Foto-Slideshow lässt sich pausieren und manuell bedienen; bei reduzierter Bewegung startet sie nicht automatisch. Die Seite ist mit `noindex, nofollow` gekennzeichnet, bleibt aber für alle mit dem Link öffentlich erreichbar. Beide Seiten werden beim Build vorgerendert.

## Gestaltung und Quellen

Grundlage ist das fertige Handout des Nutzers und das Canva-Design `DAHUpRk0654` aus dem Projekt „Die Lichtung 2“. Das Windows-Quellprojekt ist von dieser Linux-Arbeitsumgebung nicht direkt zugänglich. Die abrufbaren Canva-Assets wurden deshalb lokal übernommen; siehe `references/ASSETS.md` für die genaue Herkunft und Auflösungsgrenzen.

Nuxt-Dokumentation: https://nuxt.com/docs/4.x/getting-started/deployment
