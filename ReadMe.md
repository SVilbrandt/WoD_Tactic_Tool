# WOD Taktik Tool

Ermöglicht es Taktikern bequem Taktiken zu erstellen, basierend auf den Helden der Gruppe.
Hinterlegt einfach die Klassen und Völker (und später den Gabenstrang) euer Gruppenmitglieder und schon steht euch im Tool für jeden Helden eine Dropdownliste mit allen Fertigkeiten für das vorgegebene Level zur Verfügung :)

## Vorgehensweise:

1. Den Ordner `src` ignorieren. Da gibt es für euch nichts anzupassen ;)
2. Im Ordner `gruppen` das `_default` aus der `gruppe_default.js` entfernen
    - Siehe Hinweise für das `T(r)aktieren von mehreren Gruppen` und `Update-Fähigkeit`
3. Die Datei in einem Text-Editor öffnen
4. Kommentar-Bereich beachten und die Variable `Spieler` entsprechend euer Gruppe anpassen
5. `gruppe_default.html` umbenennen, parallel zu der `gruppe_default.js`
6. In einem Texteditor öffnen
7. Den Eintrag `<script src="gruppen/gruppe_default.js"></script>` an den geänderten Namen anpassen
8. Die HTML-Datei in einem Browser öffnen
9. Taktiken erstellen, yeah! ;)

## Das Spiel ändert bestehende Fähigkeiten / entfernt oder fügt neue hinzu

Im `fertigkeiten` Ordner findet ihr bereit die kompletten Fertigkeit-Listen für V30 (Algerion) und V31 (Cartegon Reset Oktober 2023) mit allen bis jetzt (August 2023) angekündigten Änderungen.
In euer jeweiligen `gruppe_*.html` Datei könnt ihr über `<script src="fertigkeiten/fertigkeiten_v*.js"></script>` die jeweils benötigte Version einbinden.
Zukünftige Updates werden hoffentlich von mir selbst bereitgestellt :P

**Nur aktive Fertigkeiten, abzüglich Initiative- und Heilung-Skills, sind in den Listen gepflegt!**<br />
Ihr werdet also nur die Fertigkeiten in den Listen vorfinden, die man dann im Taktik Tool auch auswählen kann.

### fertigkeiten_kuerzel_default.js

Wenn ihr bereits einen Blick in den `fertigkeiten` Ordner geworfen habt, sollte euch die `fertigkeiten_kuerzel_default.js` aufgefallen seien.
In dieser Datei sind für bereits 100 Fertigkeiten die normalerweise verwendeten Abkürzungen gepflegt, die in der Taktik anstatt des vollen Fertigkeitsnamen dann angezeigt werden.
Wenn ihr hier zusätzliche Kürzel hinzufügen oder bereits bestehende ändern wollt, kein Problem! Entfernt einfach das `_default` aus den Namen (siehe `Update-Fähigkeit`).
Vergessen dürft ihr natürlich nicht, den `<script src="fertigkeiten/fertigkeiten_kuerzel_default.js"></script>`-Block in der/den `gruppe_*.html` Datei(en) anzupassen!<br >
**Shoutout an Achilleus für das Bereitstellen der Kürzel!**

## Zusätzliche Möglichkeiten

Die Adleraugen unter euch werden inzwischen auch schon gesehen haben, dass es einen bisher nicht erwähnten `items` und `options` Ordner gibt.
Auch in diesen beiden Ordnern werdet ihr jeweils eine `_default.js` vorfinden, die ihr bei Bedarf bearbeiten könnt.
Aber auch hier gilt wieder: Bennent die Dateien um, wenn ihr sie bearbeitet. Siehe `Updatefähigkeit`.

### options

Hier gibt es verschiedene Einstellungsmöglichkeiten, um das Taktik-Tool mehr an euren Vorlieben anzupassen.
Aktuell gibt es Optionen, welches Gruppenlevel vorausgewählt sein und wie die BBC-Tabelle dargestellt werden soll.
Weiterhin sind noch einige Optionen verfügbar bzgl. der Darstellung der Skills in der fertigen Taktik.

### items

Bei manchen Fertigkeiten wollt ihr ja nicht nur den Fertigkeitennamen angeben, sondern auch, mit welchem Item es verwendet werden soll.
Berühmte Beispiele dürften hierfür z.B. `Hoch die Tassen!` und `Mittagspause` sein.
In der `items_default.js` könnt ihr entsprechende Items hinterlegen, sei es, weil ihr diese immer wieder in euer Taktik verwendet oder aber auch als Gedankenstütze, welche Optionen ihr überhaupt habt.

Auch hier wieder der Hinweis auf `Update-Fähigkeit` aka: Benennt die Datei um, wenn ihr Änderungen an ihr durchführt!

## T(r)aktieren von mehreren Gruppen

Wenn ihr die Taktiken für mehrere Gruppen erstellt könnt ihr euch mit folgenden Schritten das Leben erleichtern:

1. Benennt die `gruppe_default.js` im Ordner `gruppen` in `gruppe_[Name/Kürzel euer ersten Gruppe].js` (z.B. `gruppe_1.js` für die ganz Faulen ;)) um
2. Benennt die `gruppe_default.html` in `gruppe_[Name/Kürzel euer ersten Gruppe].html` (z.B. `gruppe_1.html`) um
3. Ändert den Eintrag `<script src="gruppen/gruppe_default.js"></script>` zu `<script src="gruppen/gruppe_1.js"></script>`
4. Kopiert beide Dateien in ihrem entsprechenden Ordner und wiederholt die Schritte 1 bis 3 für jede eurer Gruppen
5. Öffnet die `gruppe_*.html` Datei von der Gruppe, für die ihr eine Taktik erstellen/anpassen wollt, im Browser

So wie die `.js` Dateien aus dem `gruppen` Ordner könnt ihr auch die Dateien in den `fertigkeiten`, `items` und `options` Ordner anpassen, falls ihr da Unterschiede zwischen den Gruppen wünscht.  

## Speichern/Laden von Taktiken:

Über die `Taktik lokal speichern` und `lokale Taktik laden` Buttons kann man jetzt Taktiken auch speichern/laden.
Beim Speichern wird eine JSON-Datei erstellt und heruntergeladen, deren Name `Taktik-Name` entspricht. Genau jene JSON-Dateien kann man
dann verwenden, um eine Taktik wieder zu laden und alle Felder mit den gespeicherten Werten zu überschreiben.

[s]Im Verzeichnis "taktiken" befindet sich eine DEMO.json, die mit den Basis-Daten der Spieler-Variable kompatibel sind.[/s] todo: neue demo erstellen

## Hinweise:

- in der magic.js findet die ganze Logik statt. Eine Anpassung hier sollte nicht notwendig sein und ist nicht vorgesehen
- Alle Variablen in der `.html`-Datei sowie den `.js`-Dateien sollten aussagekräftige Beschreibungen haben, wofür sie dienen und wie man sie ändern kann (wenn nicht, stups mich in WoD-Discord mit @Darkflint an)
- tbc

## Update-Fähigkeit

Alle Dateien mit einem `_default` im Namen (wie die `gruppe_default.html`) sollten umbenannt werden, damit eventuelle Anpassungen von euch nicht durch ein Update überschrieben werden.
In den meisten Fällen sollte das Löschen von `_default` im Namen ausreichend sein. Siehe `Vorgehensweise` und `T(r)aktivieren von mehreren Gruppen`.

### Hintergrund

Da es sich bei diesem Projekt diesmal nicht um ein Skript, sondern ein lokales Tool handelt, ist der ganze Update-Komplex diesmal ein wenig komplizierter.
"Update" bedeutet diesmal, dass ein neuer Download-Link für das komplette Projekt zur Verfügung gestellt wird (Github).
In dem werden selbstverständlich wieder alle `_default.*` Dateien vorhanden sein. Überschreibt ihr euer bestehendes Tool nun mit dem Neuen, würden alle eure Änderungen in den `_default.*` Dateien wieder überschrieben werden.

Die meisten Updates sollten sich vermutlich auf den `src` Ordner und ggfl. die `gruppen_default.html` beziehen.
Bei Änderungen an Ersteres muss nach einem Update von euch nichts getan werden und ihr könnt einfach eure eigenen `.html` Dateien weiterverwenden.
Gibt es Änderungen an der `gruppe_default.html` Datei, müsst ihr eure selbst erstellen `.html`-Datei(en) löschen und die Schritte 5. bis 7. aus `Vorgehensweise` wiederholen.
Bei mehreren Gruppen, und damit `.html`-Dateien natürlich entsprechend auch `T(r)aktieren von mehreren Gruppen`.

In der `Changelog` wird es eine Notiz dazu geben, ob Anpassungen euerseits notwendig sind oder ihr die neuen `_default.*` Dateien einfach ignorieren könnt.

**Ich schwöre, das liest sich komplexer als es wirklich ist! Und es ist deutlich einfacher, als wenn ich die `Spieler`-Variable immer noch direkt in der `.html`-Datei hätte!**
