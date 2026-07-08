# Minimalistisches Kiosk-Präsentationssystem

Anzeige- und Präsentationssystem für Info-Monitore, Ausstellungen und Veranstaltungen.

## 🚀 Aktuellste Version & Live-Demo
Die neueste Version, den Quellcode und alle Aktualisierungen findest du immer direkt im offiziellen GitHub-Repository:
👉 **[GitHub-Repository](https://github.com/TumbDesk/simple-kiosk-presentation)**

*Möchtest du das System direkt in Aktion sehen?* Hier geht es zur [Live-Demo via GitHub Pages](https://tumbdesk.github.io/simple-kiosk-presentation/).

## Warum dieses Projekt?
Dieses Tool wurde entwickelt, um eine schlanke und wartungsarme Alternative zu komplexer Kiosk-Software zu bieten. Es ermöglicht eine schnelle und unkomplizierte Pflege von Inhalten (Texten und Bildern), ohne dass dafür eine Server-Infrastruktur, Content-Management-Systeme (CMS) oder Programmierkenntnisse erforderlich sind. Das System ist auf maximale Barrierefreiheit in der Handhabung ausgelegt.

## Hauptmerkmale
- **100% Offline-fähig:** Keine Internetverbindung oder externen Server-Anfragen nötig – ideal für autarke Präsentations-PCs.
- **Einfache Konfiguration:** Die Pflege von Texten und Bildern erfolgt zentral über eine einzige, übersichtliche Konfigurationsdatei (`config.js`).
- **Zero Installation:** Läuft direkt per Doppelklick lokal in jedem modernen Webbrowser.
- **Smart Stacking:** Dynamisches, zeitgesteuertes Aufdecken von Bildstapeln für lebendige Präsentationen.
- **Flexible Layouts:** Optionales `"layout": "center"` für Projekte ohne Vorher/Nachher-Erzählung — alle Bilder werden zentriert im Stapel aufgedeckt.
- **Intelligente Bildanpassung:** Automatische Erkennung von Hoch- und Querformaten für eine verzerrungsfreie und optimale Darstellung auf dem Kiosk-Monitor.

## Projekt-Konfiguration

Jedes Projekt in `config.js` hat `title`, `description` und ein `images`-Array. Bei Folien mit mehreren Bildern wird standardmäßig das erste Bild links angezeigt, während die restlichen rechts im Stapel aufgedeckt werden (Vorher/Nachher-Ansicht).

Um stattdessen alle Bilder zentriert im Stapel anzuzeigen — z. B. bei Schritt-für-Schritt-Projekten ohne klares Vorher-Foto — fügen Sie das optionale Feld hinzu:

```js
"layout": "center",
```

Ein Beispiel finden Sie im Projekt „Die neue Leinwand“ in `config.js`. Einzelbild-Folien sind davon nicht betroffen.