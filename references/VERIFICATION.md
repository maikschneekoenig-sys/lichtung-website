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
