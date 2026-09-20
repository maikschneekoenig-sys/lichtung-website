# Asset-Herkunft

Stand: 11. September 2026.

## Vorlage

Das vom Nutzer angehängte `Handout.jpg` ist die maßgebliche visuelle und textliche Referenz. Eine zusätzlich abrufbare Vorschau des gleichen Designs aus Canva liegt unter `handout-canva.png` (423 × 600 Pixel). Diese kleine Canva-Vorschau ist nicht die hochauflösende Originaldatei des Nutzeranhangs.

Canva-Design: `DAHUpRk0654`, „Die Lichtung | A5-Handout | Einzelne Elemente“, Projektordner `FAHUpV8PpkM`. Die Bestandsprüfung wurde ohne Änderungen geschlossen.

## Bilddateien

| Datei | Quelle | Hinweise |
| --- | --- | --- |
| `public/images/lichtung-logo.png` | Canva-Asset `MAHUpRJXqfI` | Originalmotiv aus dem fertigen Handout. Verfügbare Vorschau: 200 × 161 Pixel. Nicht neu gezeichnet. Hochauflösendes Original kann später unter gleichem Dateinamen eingesetzt werden. |
| `public/images/blattzweig.png` | Canva-Asset `MAHUpQk_XOI` | 184 × 169 Pixel, lokal übernommen. |
| `wald-canva-vorschau.png` | Canva-Asset `MAHUpnUJyaw` | 198 × 66 Pixel; nur als Referenz geeignet. Das Original liegt im Windows-Projekt unter `output/handout-a5/assets/waldlandschaft.png`, ist hier aber nicht direkt zugänglich. |
| `waldlandschaft-original.png` | Integriertes Bildgenerierungswerkzeug, anhand der Canva-Waldvorschau | Neu erstellte, stilistisch passende Landschaft in 2172 × 724 Pixeln; keine identische Übernahme des Originalwaldes. |
| `public/images/waldlandschaft.webp` | WebP-Ausgabe der neu erstellten Landschaft, Qualität 90 | Verwendet als Hintergrund im Einstieg und im Ziele-Abschnitt. |
| `public/images/paper-grain.svg` | Lokal erstellter SVG-Rauschfilter | Dezente Papierstruktur. |

## Aurora-Grillabend (20. September 2026)

Die fünf Fotos wurden vom Nutzer für die eigenständige Seite `/grillabend` bereitgestellt. Quelle: Google-Drive-Ordner „Römerbrünnchen“ (`1AYhBoLuP-v44ABVr4WmME5dJq6pxjTLR`), entsprechend `G:\Meine Ablage\Römerbrünnchen`. Lokal als WebP mit maximal 800 bzw. 1920 Pixeln Breite gespeichert, ohne Hochskalierung und ohne EXIF-Metadaten.

| Lokaler Dateistamm unter `public/images/grillabend/` | Originaldatei | Drive-Datei-ID |
| --- | --- | --- |
| `grillhuette-{800,1920}.webp` | `1789919353467.jpg` | `1LFaBHmftHxS2XiSwKCZmxk0NJbbf0skm` |
| `waldweg-{800,1920}.webp` | `WhatsApp Image 2026-09-16 at 23.12.08.jpeg` | `1SbNqaF0fKDvIzDAQg05HvPmyaVKm2ega` |
| `brunnen-{800,1920}.webp` | `WhatsApp Image 2026-09-16 at 23.12.06.jpeg` | `1nwZblYZCOAegRUeIVvT6PXpYMU734usX` |
| `waldplatz-{800,1920}.webp` | `1789919353407.jpg` | `1mgUHkUjQbIzYGDdrUu3503Ors0W2QzxP` |
| `bachlauf-{800,1920}.webp` | `1789919353351.jpg` | `1NHlZ0FBO-3IHi2IfvnEbKGCxQv8Jjn9f` |

`public/images/grillabend/feuer.svg`: selbst erstelltes, schlichtes Feuer-Symbol für diese Einladung; kein Aurora- oder Lichtung-Logo. Schriften stammen aus dem vorhandenen lokalen Bestand. Einladung und Veranstaltungsangaben stammen ausschließlich aus dem vom Nutzer gelieferten Text.

## Schriften und Icons der Lichtung

Cormorant Garamond (normal und kursiv) und Caveat, lokal gespeicherte WOFF2-Dateien von Google Fonts. Die jeweiligen SIL Open Font Licenses liegen unter `public/fonts/`.

Material Design Icons Outlined von Google: https://github.com/google/material-design-icons . Alle 14 verwendeten Icons sind lokale SVGs in Dunkelgrün. Apache-2.0-Lizenz unter `public/icons/LICENSE.txt`. Die Zuordnungen der acht Werte und fünf Ziele entsprechen dem Handout.

## Landschaftsprompt

Werkzeug: integriertes `image_gen`, keine externe CLI. Referenz: `wald-canva-vorschau.png`.

Use case: illustration-story. Asset type: wide panorama illustration for Die Lichtung community website. Input image is a reference for composition, colors and watercolor style. Recreate this exact kind of panoramic forest clearing at high resolution 2400 x 800: delicate dark green conifer trees framing left and right, layers of soft sage green woodland hills, a tiny warm golden rising sun just right of center, grassy meadow in foreground. Preserve the peaceful natural woodland palette, painterly botanical detail. Upper half should be nearly empty warm ivory #f4efe3 paper, with tree tops and hills softly dissolving into that ivory. Wide landscape 3:1. No typography, no text, no logo, no panels, no rock plaque. This is a standalone landscape asset, NOT a website design. Make detailed crisp trees, nuanced grass and a calm misty center. Muted forest green, olive, sage, and warm restrained gold.
