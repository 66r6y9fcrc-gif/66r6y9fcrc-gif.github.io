# Digitales Gehirn

Ein wachsendes „Gehirn" im Weltraum-Look: Jeder Gedanke, jede Idee wird ein leuchtender
Knotenpunkt (Stern) und verbindet sich über feine Fäden mit dem Rest. Je mehr Ideen, desto
größer wird das Netz.

Live: <https://66r6y9fcrc-gif.github.io/>

## Funktionen (v0.3)

- Ideen unten eintippen → erscheinen als leuchtende Sterne, automatisch mit den nächsten
  Knoten verbunden
- Kraftbasiertes Layout: die Knoten ordnen sich selbst an und „schweben"
- Farben & Kategorien (Idee, Frage, Projekt, Aufgabe, Traum + eigene Kategorien)
- Filter: nur eine Kategorie hervorheben
- **Suche**: Gedanken finden, Treffer werden hervorgehoben, Enter springt durch
- Verschieben (Ziehen), Zoomen (Mausrad / Pinch), Zentrieren
- Knoten antippen → Detailkarte mit Kategorie ändern und Löschen
- Speicherung lokal im Browser (`localStorage`) – kein Server nötig
- **Backup**: Export/Import als `.json` gegen Datenverlust und für den Wechsel zwischen Geräten
- **Installierbar als App (PWA)**: „Zum Home-Bildschirm hinzufügen", funktioniert offline

## Technik

Komplett statisch, ohne Build-Schritt:

- `index.html` – die gesamte App (HTML, CSS und JavaScript inline, Canvas-Rendering)
- `manifest.json` – Web-App-Manifest (installierbar)
- `sw.js` – Service Worker (Offline-Fähigkeit; Daten bleiben in `localStorage`)
- `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` – App-Icons
- `generate_icons.js` – erzeugt die Icons neu (`node generate_icons.js`)
- `404.html` – Fehlerseite
- `robots.txt`, `sitemap.xml`

Gehostet über GitHub Pages aus dem `main`-Branch.
