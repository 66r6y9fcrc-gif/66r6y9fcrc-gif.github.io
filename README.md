# Digitales Gehirn

Ein wachsendes „Gehirn" im Weltraum-Look: Jeder Gedanke, jede Idee wird ein leuchtender
Knotenpunkt (Stern) und verbindet sich über feine Fäden mit dem Rest. Je mehr Ideen, desto
größer wird das Netz.

Live: <https://66r6y9fcrc-gif.github.io/>

## ⚔ Pixel-Abenteuer (Fantasy-RPG)

Ein eigenständiges Handy-Rollenspiel auf derselben Seite – spielbar unter
<https://66r6y9fcrc-gif.github.io/rpg/>:

- **3 Klassen**: Krieger, Magier, Schurke – mit eigenen Werten, Levelaufstiegs-Boni und
  Skills (z. B. Kampfschrei-Buff, Blitzsturm, Giftklinge, Schattenschritt)
- **Ritter-Helden nach eigenem Artwork** (v5): Die Spielfigur ist eine voll animierte
  Skelett-Figur im Stil der eingesandten Ritter-Artworks – wählbar beim Spielstart
  zwischen **Flammenaxt-Ritter** (Hörner-Vollhelm mit Glutaugen, roter Umhang,
  brennende Doppelaxt mit Runenglut) und **Totenkopf-Ritter** (Schädelmaske,
  roter Fellkragen, gezacktes Glutschwert, Totenkopf-Schild) – mit echtem
  Laufzyklus in 4 Blickrichtungen, Axtschwung, Zaubergeste, Treffer-Reaktion
  und wehendem Umhang; komplett prozedural gezeichnet, keine Bilddateien
- **Animierte Chibi-Figuren** (v3.5): Dorfbewohner sind keine Pixel-Sprites mehr,
  sondern Figuren im Chibi-Game-Art-Stil – großer Kopf, große Augen, dicke Umrisslinien,
  wuchtige Waffen, Helm mit Federbusch, Riesenzauberhut, Kapuze mit Maske – mit flüssigen
  Skelett-Animationen: Atmen, Blinzeln, Laufzyklus, Schwerthieb, Zaubergeste und
  Treffer-Reaktion; im Kampf steht der Held sichtbar dem Gegner gegenüber, und die
  Klassenwahl zeigt lebendige Figuren-Vorschauen
- **Loot-System**: Monster lassen prozedural generierte Ausrüstung fallen – in 4
  Raritätsstufen (Gewöhnlich/Selten/Episch/Legendär) mit zufälligen Affixen
  (ATK, DEF, HP, MP, Krit, Ausweichen); der Endboss droppt garantiert Legendäres
- **Inventar**: 4 Ausrüstungs-Slots (Waffe, Rüstung, Helm, Amulett), 24 Beutel-Plätze,
  Detailansicht mit grün/rotem Stat-Vergleich zum angelegten Gegenstand
- Oberwelt-Erkundung im Pixel-Look (Dorf, Finsterwald, Schattenhöhle, Drachenhort)
- Touch-Steuerkreuz + A- und 🎒-Knopf (am PC: Pfeiltasten/WASD + Leertaste)
- Rundenbasierte Kämpfe mit Statuseffekten (Gift, Buffs, Ausweichen, kritische Treffer)
- Shop mit wechselndem Gear-Angebot und Verkaufen-Tab, Gasthaus, Endboss Drache Varganor
- Speicherung automatisch in `localStorage`, komplett offline-fähig, eine Datei: `rpg/index.html`

## Funktionen (v1.0)

- 🧠 **Die Mini-KI lernt aus deinen Entscheidungen**: Jedes bestätigte (oder in der
  Detailkarte korrigierte) Thema merkt sie sich als „diese Stichwörter → dieses Thema".
  Beim nächsten Mal schlägt sie es direkt vor – mehrdeutige Fälle wie „ein Buch schreiben"
  fragt sie also nur so lange, bis du ihr deine Vorliebe gezeigt hast. Das Gelernte liegt
  lokal auf dem Gerät.

## Funktionen (v0.9)

- ✨ **Mini-KI Feintuning**: erkennt mehrdeutige „Vorhaben" (z. B. „ein Buch schreiben",
  „eine App entwickeln") und sagt ehrlich *„unsicher – bitte wählen"*, statt sich auf eine
  Kategorie festzulegen. Dann stehen **Idee / Projekt / Aufgabe** gleichberechtigt zur Wahl.
  Klare Fälle (Frage, zu erledigen, Traum) werden weiterhin direkt vorgeschlagen.

## Funktionen (v0.8)

- ✨ **Mini-KI für Kategorien** (komplett offline im Browser, keine fremden Server):
  Beim Hinzufügen eines Gedankens schlägt die App das am besten passende Thema vor
  (anhand der Wörter deiner bisherigen Gedanken + Typ-Erkennung für Frage/Aufgabe/…).
  Passt kein Thema, wird ein **neues vorgeschlagen**, benannt nach dem wichtigsten Wort.
  Du **bestätigst** mit einem Tippen oder wählst ein anderes Thema. Per ✨-Knopf abschaltbar.

## Funktionen (v0.7)

- 🎤 **Diktieren statt Tippen**: Mikrofon in der Eingabeleiste und im Notizfeld.
  Antippen, sprechen (Deutsch) – der Text erscheint automatisch. Funktioniert am besten
  in Google Chrome (Android/Desktop); nutzt die browser­eigene Spracherkennung, keine
  fremden Server.

## Funktionen (v0.6)

- Verbindungen entstehen **nur innerhalb eines Themas** – jedes Thema bildet eine eigene Insel
- Themen-Inseln stoßen sich **deutlich voneinander ab** und halten intern zusammen
- 🔗 **Verbindungen neu nach Thema ordnen** (räumt bestehende Gehirne auf)
- 🪢 **Brücken-Modus**: manuell zwei beliebige Sterne (auch über Themen hinweg) verbinden –
  Brücken werden als gestrichelte Linie dargestellt und bleiben beim Neuordnen erhalten

## Frühere Funktionen (v0.5)

- Ideen unten eintippen → erscheinen als leuchtende Sterne, automatisch mit den nächsten
  Knoten verbunden
- Kraftbasiertes Layout: die Knoten ordnen sich selbst an und „schweben"
- Farben & Kategorien (Idee, Frage, Projekt, Aufgabe, Traum + eigene Kategorien)
- Filter: nur eine Kategorie hervorheben
- **Suche**: Gedanken und Notizen finden, Treffer hervorgehoben, Enter springt durch
- **Notizen pro Knoten** + editierbarer Titel (in der Detailkarte)
- Verschieben (Ziehen), Zoomen (Mausrad / Pinch), Zentrieren
- Knoten antippen → Detailkarte mit Kategorie ändern, Notiz und Löschen
- Speicherung lokal im Browser (`localStorage`) – kein Server nötig
- **Backup**: Export/Import als `.json` gegen Datenverlust
- **Cloud-Sync** (optional, via Supabase): automatischer Abgleich zwischen Geräten
- **Installierbar als App (PWA)**: „Zum Home-Bildschirm hinzufügen", funktioniert offline

## Cloud-Sync einrichten (optional)

Im ☁-Menü der App stehen die Schritte. Kurz:

1. Kostenloses Projekt auf [supabase.com](https://supabase.com) anlegen.
2. Im SQL Editor ausführen:
   ```sql
   create table if not exists brains (
     id text primary key,
     data jsonb,
     updated_at timestamptz default now()
   );
   alter table brains enable row level security;
   create policy "zugriff per schluessel"
     on brains for all using (true) with check (true);
   ```
3. In der App unter ☁ die **Project URL** und den **anon public** Key (Project Settings → API)
   eintragen, einen geheimen **Gehirn-Schlüssel** wählen (auf allen Geräten gleich) und
   „Automatisch synchronisieren" aktivieren.

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
