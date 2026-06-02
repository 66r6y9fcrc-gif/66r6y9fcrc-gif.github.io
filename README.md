# Digitales Gehirn

Ein wachsendes „Gehirn" im Weltraum-Look: Jeder Gedanke, jede Idee wird ein leuchtender
Knotenpunkt (Stern) und verbindet sich über feine Fäden mit dem Rest. Je mehr Ideen, desto
größer wird das Netz.

Live: <https://66r6y9fcrc-gif.github.io/>

## Funktionen (v0.2)

- Ideen unten eintippen → erscheinen als leuchtende Sterne, automatisch mit den nächsten
  Knoten verbunden
- Kraftbasiertes Layout: die Knoten ordnen sich selbst an und „schweben"
- Farben & Kategorien (Idee, Frage, Projekt, Aufgabe, Traum + eigene Kategorien)
- Filter: nur eine Kategorie hervorheben
- Verschieben (Ziehen), Zoomen (Mausrad / Pinch), Zentrieren
- Knoten antippen → Detailkarte mit Kategorie ändern und Löschen
- Speicherung lokal im Browser (`localStorage`) – kein Server nötig

## Technik

Komplett statisch, eine einzige selbständige Datei:

- `index.html` – die gesamte App (HTML, CSS und JavaScript inline, Canvas-Rendering)
- `404.html` – Fehlerseite
- `robots.txt`, `sitemap.xml`

Gehostet über GitHub Pages aus dem `main`-Branch.
