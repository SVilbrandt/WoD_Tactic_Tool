/**
 * @description Heldenlevel der Gruppe. Wird verwendet, um nur die für das Level verfügbaren Skills anzuzeigen.
 *
 * Optionen: 1 bis 40
 * @type {number}
 */
const GruppenStufe = 15;

/**
 * @description Zum Steuern, ob reine Eigenbuffs, wie Antäuschen, Erst mal was essen!, Amulett der Stärkung etc angezeigt werden sollen.
 *
 * Optionen: true, false
 * @type {boolean}
 */
const ZeigeSelbstSkills = true;

/**
 * @description Zeige bei Fertigkeiten mit Item-Auswahl in der fertigen Tabelle anstatt der Fertigkeit das vorgegebene Item an.
 * Wirkt nur, wenn auch ein Item bei der Fertigkeit mit vorgegeben wurde
 *
 * Optionen: true, false
 * @type {boolean}
 */
const ZeigeItemAnstattSkill = false;

/**
 * @description Identisch zu ZeigeItemAnstattSkill, aber auf bestimmte Itemklassen beschränkt.
 * @see SpecialItemKlassen
 *
 * Optionen: true, false
 * @type {boolean}
 */
const ZeigeItemAnstattSkillSpecial = true;

/**
 * @description Auswahl der Itemklassen, bei denen der Gegenstand anstatt die Fertigkeit angezeigt werden soll.
 * Kommt nur zum Einsatz, wenn ZeigeItemAnstattSkillSpecial auf true gesetzt ist.
 * @example ["Bannfedern", "Proviant"]
 * @see ZeigeItemAnstattSkillSpecial
 * @type Array
 */
const SpecialItemKlassen = ["Bannfedern"]

/**
 * @description Gestaltungsoptionen für die erzeugte Tabelle
 *
 * "align" = Horizontale Ausrichtung, mögliche Werte: left, right, center
 * "valign" = Vertikale Ausrichtung, mögliche Werte: top, bottom, middle
 * "text" = Anzuzeigender Text. Nur verfügbar für den Kopfbereich
 *
 * "head" = Tabellenkopf
 * "body" = Nicht-Tabellenkopf
 *
 * "player" = Spalte "Spieler"
 * "vorrunde" = Spalte "Vorrunde"
 * "hauptrunde" = Spalte "Hauptrunde"
 *
 * @type Object
 */
const TabellenOptionen = {
    "table": {
        "border": 2
    },
    "head": {
        "player": {
            "align": "center",
            "valign": "middle",
            "text": "[b]--- Spieler ---[/b]",
        },
        "vorrunde": {
            "align": "left",
            "valign": "middle",
            "text": "[b]Vorrunde[/b]",
        },
        "hauptrunde": {
            "align": "left",
            "valign": "middle",
            "text": "[b]Hauptrunde[/b]"
        }
    },
    "body": {
        "player": {
            "align": "left",
            "valign": "middle"
        },
        "vorrunde": {
            "align": "left",
            "valign": "middle"
        },
        "hauptrunde": {
            "align": "left",
            "valign": "middle"
        }
    }
}