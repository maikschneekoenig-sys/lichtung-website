# Prüfung vom 11. September 2026

- `npm run typecheck`: erfolgreich.
- `npm run build`: erfolgreich, Startseite vorgerendert.
- Browserprüfung mit Chromium: 1440, 768, 390 und 320 Pixel Breite, kein horizontaler Seitenüberlauf.
- Desktop und Smartphone visuell geprüft; Screenshots unter `previews/`.
- Alle Bilder geladen; keine HTTP-Fehler bei den Ressourcen.
- Keine JavaScript-Laufzeitfehler.
- Bilder, Icons und Schriften werden ausschließlich vom eigenen Server geladen.
- Mobiles Menü öffnet und schließt; Escape schließt und führt den Tastaturfokus zum Menübutton zurück.
- Menü-Sprunglink zu „Unsere Werte“ navigiert zum richtigen Abschnitt und schließt das Menü.
- E-Mail-Kopieren erfolgreich; Inhalt der Zwischenablage geprüft.
- Kontaktbutton verweist auf `mailto:ankommen@lichtung.be`.

Die visuelle Erstprüfung lief mit agent-browser. Wegen eines anschließenden CDP-Timeouts wurden die vollständigen Funktionsprüfungen mit Playwright und einem frischen Chromium-Prozess durchgeführt.

Keine E-Mail versendet und keine Veröffentlichung vorgenommen.

# Aurora-Grillabend: Prüfung vom 20. September 2026

- `npm run typecheck` und `npm run build`: erfolgreich; `/` und `/grillabend` vorgerendert.
- Produktionsbuild mit agent-browser/Chromium bei 390 und 1440 Pixeln visuell geprüft, ohne horizontalen Überlauf. Aktuelle Screenshots: `previews/grillabend-mobile.png` und `previews/grillabend-desktop.png`.
- Alle fünf lokalen Fotos laden; keine extern geladenen Assets. Die abgerundete Ecke ist auf Desktop und Mobilgeräten vorhanden.
- Automatischer Bildwechsel, Vor-/Zurück-Bedienung und Pfeiltasten geprüft. Manuelle Auswahl pausiert die Slideshow.
- Bei `prefers-reduced-motion: reduce` kein automatischer Wechsel; Pause-/Start-Schaltfläche ausgeblendet, manuelle Navigation weiterhin verfügbar.
- Wann, Wo und Wie stehen direkt im Hero. Keine externen Links im Seiteninhalt; Adresse als Text.
- Inhalte gemäß Nutzerkorrekturen: Stefanie und Maik kannten sich vor Aurora; gemeinsame bewusste Kursentscheidung. Steingrill, warme Kleidung und Sitzdecken sowie Hinweis auf das nicht barrierefreie Gelände berücksichtigt.
- Rückmeldung an Maik per Telegram zur Planung der Wassermenge. Grillzeug und Softdrinks bringen die Gäste mit; Feuerholz und Wasser organisieren die Gastgeber.
- Eigenständige Seitenbeschreibung, Titel, Vorschaubild und Favicon geprüft. `noindex, nofollow` gesetzt.
- Axe-Prüfung der vereinfachten Fassung bei 390 Pixeln: 0 erkannte Verstöße. Keine JavaScript-Laufzeitfehler.
- Lichtung-Seite bei 390 und 1440 Pixeln visuell geprüft; vorhandenes Template und Verhalten unverändert übernommen. Kein Link auf `/grillabend` auf der Hauptseite.
