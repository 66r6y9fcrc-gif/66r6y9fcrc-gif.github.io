# GitHub Pages Setup – Nachtragsretter Demo

Diese Version ist so vorbereitet, dass du sie direkt als statische Website über **GitHub Pages** veröffentlichen kannst.

## Wichtig vorab

GitHub Pages ist gut für eine Landingpage und Demo. Es verarbeitet aber keine echten Zahlungen, keine echten Kontaktformulare und keinen automatischen Downloadversand. Für echten Verkauf solltest du den Kaufen-Button später mit einem Zahlungsanbieter verbinden, zum Beispiel elopage, CopeCart, Stripe Payment Link, Shopify oder WooCommerce.

## Variante A: Ohne Programmieren direkt im Browser hochladen

1. Auf GitHub einloggen.
2. Neues Repository erstellen, z. B. `nachtragsretter`.
3. Für GitHub Free: Repository öffentlich machen, wenn GitHub Pages kostenlos genutzt werden soll.
4. ZIP entpacken.
5. Alle Dateien aus diesem Ordner direkt ins Repository hochladen.
   - Wichtig: `index.html` muss direkt im Hauptordner liegen, nicht in einem Unterordner.
6. Commit erstellen, z. B. `Initial website upload`.
7. In GitHub öffnen: `Settings` → `Pages`.
8. Bei `Build and deployment` wählen:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
9. Speichern.
10. GitHub zeigt dir danach die öffentliche URL an, ungefähr:
   - `https://DEINNAME.github.io/nachtragsretter/`

## Variante B: Mit Git lokal hochladen

```bash
git init
git add .
git commit -m "Initial Nachtragsretter website"
git branch -M main
git remote add origin https://github.com/DEINNAME/nachtragsretter.git
git push -u origin main
```

Danach in GitHub: `Settings` → `Pages` → `Deploy from a branch` → `main` → `/ (root)`.

## Was du vor Livebetrieb ersetzen musst

- Impressum: echter Name, Anschrift, E-Mail, ggf. Telefonnummer
- Datenschutz: eingesetzte Tools eintragen
- AGB/Widerruf: anwaltlich oder über Rechtstextanbieter prüfen lassen
- Preis und Steuerhinweis korrekt anpassen
- `kontakt@deine-domain.de` ersetzen
- `deine-domain.de` in `robots.txt` und `sitemap.xml` ersetzen
- Kaufen-Button mit echtem Zahlungsanbieter verbinden
- Downloadversand / Bestellbestätigung einrichten
- Widerrufsfunktion technisch mit E-Mail-Eingangsbestätigung verbinden

## Eigene Domain optional

Wenn du eine eigene Domain nutzt, kannst du `CNAME.example` in `CNAME` umbenennen und dort deine Domain eintragen, z. B. `www.deine-domain.de`. Zusätzlich musst du die DNS-Einstellungen bei deinem Domainanbieter setzen.
