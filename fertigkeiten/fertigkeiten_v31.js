/**
 *
 * @description Liste aller aktiver Fertigkeiten.
 * Neue Fertigkeiten können manuell hinzugefügt werden
 *
 * @since 08.08.2023
 * @type Object
 */
const Fertigkeiten = {
    "Abbild auflösen": {
        "Name": "Abbild auflösen",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+100%",
        "Mana-Kosten": "-",
        "Gegenstand": "-",
        "Verfuegbar": {"Mönch": {"level": 24, "rang": "Basisfertigkeit"}}
    },
    "Adlerauge": {
        "Name": "Adlerauge",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "4 (5)",
        "Gegenstand": "Sehhilfen",
        "Verfuegbar": {
            "Dieb": {"level": 19, "rang": "Klassenfremde Fertigkeit"},
            "Gaukler": {"level": 22, "rang": "Klassenfremde Fertigkeit"},
            "Gelehrter": {"level": 24, "rang": "Klassenfremde Fertigkeit"},
            "Gestaltwandler": {"level": 18, "rang": "Klassenfremde Fertigkeit"},
            "Hasardeur": {"level": 21, "rang": "Klassenfremde Fertigkeit"},
            "Jäger": {"level": 19, "rang": "Klassenfremde Fertigkeit"},
            "Magier": {"level": 22, "rang": "Klassenfremde Fertigkeit"},
            "Schamane": {"level": 19, "rang": "Klassenfremde Fertigkeit"},
            "Schütze": {"level": 17, "rang": "Klassenfremde Fertigkeit"}
        }
    },
    "Akrobatik": {
        "Name": "Akrobatik",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "0 (1)",
        "Gegenstand": "-",
        "Verfuegbar": {
            "Barbar": {"level": 11, "rang": "Klassenfremde Fertigkeit"},
            "Barde": {"level": 22, "rang": "Klassenfremde Fertigkeit"},
            "Dieb": {"level": 8, "rang": "Basisfertigkeit"},
            "Gaukler": {"level": 6, "rang": "Basisfertigkeit"},
            "Gladiator": {"level": 14, "rang": "Klassenfremde Fertigkeit"},
            "Hasardeur": {"level": 20, "rang": "Klassenfremde Fertigkeit"},
            "Mönch": {"level": 10, "rang": "Basisfertigkeit"},
            "Schütze": {"level": 19, "rang": "Klassenfremde Fertigkeit"}
        }
    },
    "Alchemistische Manarestauration": {
        "Name": "Alchemistische Manarestauration",
        "Typ": "Verbesserung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+1 +7% der Heldenstufe",
        "Mana-Kosten": "2 (3)",
        "Gegenstand": "Manatrank",
        "Verfuegbar": {"Quacksalber": {"level": 16, "rang": "Nebenfertigkeit"}}
    },
    "Alternative Medizin": {
        "Name": "Alternative Medizin",
        "Typ": "Verbesserung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "Kräutersude",
        "Verfuegbar": {"Schamane": {"level": 5, "rang": "Nebenfertigkeit"}}
    },
    "Angriffszauber": {
        "Name": "Angriffszauber",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+2 +10% der Heldenstufe",
        "Mana-Kosten": "6 (7)",
        "Gegenstand": "Spruchrollen (offensiv)",
        "Angriffstyp": "Zauber",
        "Angriff": "Ch,In (+0)",
        "Schaden": "In,Ch (-65%)",
        "Verfuegbar": {
            "Klingenmagier": {"level": 11, "rang": "Nebenfertigkeit"},
            "Magier": {"level": 10, "rang": "Basisfertigkeit"}
        }
    },
    "Anrufung der Alten": {
        "Name": "Anrufung der Alten",
        "Typ": "Ruft Helfer",
        "Verwendbar": "- / in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "13 (15)",
        "Gegenstand": "Arkane Artefakte (Dunkle Kunst)",
        "Verfuegbar": {
            "Bergzwerg": {"level": 30, "rang": "Nebenfertigkeit"},
            "Dinturan": {"level": 30, "rang": "Nebenfertigkeit"},
            "Gnerk": {"level": 30, "rang": "Nebenfertigkeit"},
            "Gnom": {"level": 30, "rang": "Nebenfertigkeit"},
            "Grenzländer": {"level": 30, "rang": "Nebenfertigkeit"},
            "Halbling": {"level": 30, "rang": "Nebenfertigkeit"},
            "Hügelzwerg": {"level": 30, "rang": "Nebenfertigkeit"},
            "Kerasi": {"level": 30, "rang": "Nebenfertigkeit"},
            "Mag-Mor-Elf": {"level": 30, "rang": "Nebenfertigkeit"},
            "Rashani": {"level": 30, "rang": "Nebenfertigkeit"},
            "Tirem-Ag-Elf": {"level": 30, "rang": "Nebenfertigkeit"},
            "Waldmensch": {"level": 30, "rang": "Nebenfertigkeit"}
        }
    },
    "Anrufung der Naturgeister": {
        "Name": "Anrufung der Naturgeister",
        "Typ": "Verbesserung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Mitstreiter auf einer Position",
        "Max. betroffene Helden": "+1",
        "Mana-Kosten": "5 (6)",
        "Gegenstand": "Materialien der Natur",
        "Verfuegbar": {"Schamane": {"level": 15, "rang": "Nebenfertigkeit"}}
    },
    "Antäuschen": {
        "Name": "Antäuschen",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "0 (1)",
        "Gegenstand": "-",
        "Verfuegbar": {
            "Dieb": {"level": 4, "rang": "Basisfertigkeit"},
            "Gestaltwandler": {"level": 5, "rang": "Nebenfertigkeit"},
            "Hasardeur": {"level": 5, "rang": "Nebenfertigkeit"},
            "Ritter": {"level": 7, "rang": "Nebenfertigkeit"},
            "Schütze": {"level": 7, "rang": "Nebenfertigkeit"}
        }
    },
    "Appell": {
        "Name": "Appell",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Selbst",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "Fechtkunst",
        "Verfuegbar": {"Hasardeur": {"level": 6, "rang": "Nebenfertigkeit"}}
    },
    "Arkanwirbel": {
        "Name": "Arkanwirbel",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner einer Position",
        "Max. betroffene Gegner": "+1 +8% der Heldenstufe",
        "Mana-Kosten": "19 (8)",
        "Gegenstand": "-",
        "Angriffstyp": "Zauber",
        "Angriff": "In,Ge (+0)",
        "Schaden": "Wi,Wa (-20%)",
        "Verfuegbar": {"Klingenmagier": {"level": 8, "rang": "Klassenfremde Fertigkeit"}}
    },
    "Armbrust schießen": {
        "Name": "Armbrust schießen",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+1",
        "Mana-Kosten": "-",
        "Gegenstand": "Armbrust",
        "Angriffstyp": "Fernkampf",
        "Angriff": "Ge,Wa",
        "Schaden": "St,Ko",
        "Verfuegbar": {
            "Barde": {"level": 5, "rang": "Nebenfertigkeit"},
            "Paladin": {"level": 4, "rang": "Basisfertigkeit"},
            "Ritter": {"level": 17, "rang": "Nebenfertigkeit"},
            "Schütze": {"level": 2, "rang": "Basisfertigkeit"}
        }
    },
    "Artefakt der Schwächung anwenden": {
        "Name": "Artefakt der Schwächung anwenden",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+1",
        "Mana-Kosten": "0 (1)",
        "Gegenstand": "Artefakt der Schwächung",
        "Angriffstyp": "Zauber",
        "Angriff": "In,Wa",
        "Verfuegbar": {
            "Barbar": {"level": 21, "rang": "Klassenfremde Fertigkeit"},
            "Barde": {"level": 18, "rang": "Klassenfremde Fertigkeit"},
            "Dieb": {"level": 5, "rang": "Basisfertigkeit"},
            "Gaukler": {"level": 14, "rang": "Klassenfremde Fertigkeit"},
            "Gelehrter": {"level": 15, "rang": "Nebenfertigkeit"},
            "Gestaltwandler": {"level": 19, "rang": "Nebenfertigkeit"},
            "Gladiator": {"level": 18, "rang": "Klassenfremde Fertigkeit"},
            "Hasardeur": {"level": 9, "rang": "Klassenfremde Fertigkeit"},
            "Jäger": {"level": 12, "rang": "Nebenfertigkeit"},
            "Klingenmagier": {"level": 10, "rang": "Klassenfremde Fertigkeit"},
            "Magier": {"level": 8, "rang": "Klassenfremde Fertigkeit"},
            "Mönch": {"level": 10, "rang": "Klassenfremde Fertigkeit"},
            "Paladin": {"level": 5, "rang": "Klassenfremde Fertigkeit"},
            "Priester": {"level": 17, "rang": "Nebenfertigkeit"},
            "Quacksalber": {"level": 7, "rang": "Nebenfertigkeit"},
            "Ritter": {"level": 19, "rang": "Klassenfremde Fertigkeit"},
            "Schamane": {"level": 19, "rang": "Klassenfremde Fertigkeit"},
            "Schütze": {"level": 14, "rang": "Klassenfremde Fertigkeit"}
        }
    },
    "Artefakt der Schwächung auf Gegnergruppe anwenden": {
        "Name": "Artefakt der Schwächung auf Gegnergruppe anwenden",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner einer Position",
        "Max. betroffene Gegner": "+75% der Heldenstufe",
        "Mana-Kosten": "5 (6)",
        "Gegenstand": "Artefakt der Schwächung",
        "Angriffstyp": "Zauber",
        "Angriff": "In,Wa",
        "Verfuegbar": {
            "Dieb": {"level": 9, "rang": "Nebenfertigkeit"},
            "Gelehrter": {"level": 17, "rang": "Nebenfertigkeit"},
            "Magier": {"level": 9, "rang": "Klassenfremde Fertigkeit"},
            "Mönch": {"level": 21, "rang": "Klassenfremde Fertigkeit"},
            "Paladin": {"level": 9, "rang": "Klassenfremde Fertigkeit"},
            "Priester": {"level": 20, "rang": "Klassenfremde Fertigkeit"},
            "Quacksalber": {"level": 10, "rang": "Klassenfremde Fertigkeit"}
        }
    },
    "Artefakt der Stärkung anwenden": {
        "Name": "Artefakt der Stärkung anwenden",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "0 (1)",
        "Gegenstand": "Artefakt der Stärkung (Selbst)",
        "Verfuegbar": {
            "Barbar": {"level": 14, "rang": "Klassenfremde Fertigkeit"},
            "Barde": {"level": 10, "rang": "Klassenfremde Fertigkeit"},
            "Dieb": {"level": 6, "rang": "Basisfertigkeit"},
            "Gaukler": {"level": 8, "rang": "Klassenfremde Fertigkeit"},
            "Gelehrter": {"level": 9, "rang": "Nebenfertigkeit"},
            "Gestaltwandler": {"level": 9, "rang": "Nebenfertigkeit"},
            "Gladiator": {"level": 13, "rang": "Klassenfremde Fertigkeit"},
            "Hasardeur": {"level": 10, "rang": "Klassenfremde Fertigkeit"},
            "Jäger": {"level": 9, "rang": "Nebenfertigkeit"},
            "Klingenmagier": {"level": 14, "rang": "Klassenfremde Fertigkeit"},
            "Magier": {"level": 11, "rang": "Klassenfremde Fertigkeit"},
            "Mönch": {"level": 7, "rang": "Nebenfertigkeit"},
            "Paladin": {"level": 3, "rang": "Nebenfertigkeit"},
            "Priester": {"level": 9, "rang": "Nebenfertigkeit"},
            "Quacksalber": {"level": 6, "rang": "Nebenfertigkeit"},
            "Ritter": {"level": 14, "rang": "Klassenfremde Fertigkeit"},
            "Schamane": {"level": 11, "rang": "Klassenfremde Fertigkeit"},
            "Schütze": {"level": 3, "rang": "Klassenfremde Fertigkeit"}
        }
    },
    "Artefakt der Stärkung auf Gruppe anwenden": {
        "Name": "Artefakt der Stärkung auf Gruppe anwenden",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+50% der Heldenstufe",
        "Mana-Kosten": "5 (6)",
        "Gegenstand": "Artefakt der Stärkung (Gruppe)",
        "Verfuegbar": {
            "Barde": {"level": 17, "rang": "Klassenfremde Fertigkeit"},
            "Dieb": {"level": 10, "rang": "Nebenfertigkeit"},
            "Gaukler": {"level": 16, "rang": "Klassenfremde Fertigkeit"},
            "Gelehrter": {"level": 11, "rang": "Nebenfertigkeit"},
            "Gestaltwandler": {"level": 15, "rang": "Klassenfremde Fertigkeit"},
            "Klingenmagier": {"level": 20, "rang": "Klassenfremde Fertigkeit"},
            "Magier": {"level": 13, "rang": "Nebenfertigkeit"},
            "Mönch": {"level": 11, "rang": "Nebenfertigkeit"},
            "Paladin": {"level": 7, "rang": "Nebenfertigkeit"},
            "Priester": {"level": 13, "rang": "Nebenfertigkeit"},
            "Quacksalber": {"level": 9, "rang": "Nebenfertigkeit"},
            "Schamane": {"level": 15, "rang": "Klassenfremde Fertigkeit"}
        }
    },
    "Askese": {
        "Name": "Askese",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Selbst",
        "Mana-Kosten": "-",
        "Gegenstand": "-",
        "Verfuegbar": {
            "Magier": {"level": 4, "rang": "Nebenfertigkeit"},
            "Mönch": {"level": 4, "rang": "Basisfertigkeit"},
            "Priester": {"level": 10, "rang": "Nebenfertigkeit"},
            "Schamane": {"level": 17, "rang": "Nebenfertigkeit"}
        }
    },
    "Athletik": {
        "Name": "Athletik",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "4 (5)",
        "Gegenstand": "-",
        "Verfuegbar": {
            "Dieb": {"level": 22, "rang": "Klassenfremde Fertigkeit"},
            "Priester": {"level": 21, "rang": "Klassenfremde Fertigkeit"},
            "Ritter": {"level": 16, "rang": "Klassenfremde Fertigkeit"}
        }
    },
    "Aura des Paladins": {
        "Name": "Aura des Paladins",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "-",
        "Gegenstand": "Heiliges Symbol",
        "Verfuegbar": {"Paladin": {"level": 1, "rang": "Basisfertigkeit"}}
    },
    "Auskundschaften": {
        "Name": "Auskundschaften",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ -",
        "Ziel": "Selbst",
        "Mana-Kosten": "2 (3)",
        "Gegenstand": "-",
        "Fertigkeitenklasse": "Führung",
        "Verfuegbar": {
            "Jäger": {"level": 12, "rang": "Basisfertigkeit"},
        }
    },
    "Autorität": {
        "Name": "Autorität",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "4 (5)",
        "Gegenstand": "Utensilien der Reinheit",
        "Verfuegbar": {
            "Priester": {"level": 22, "rang": "Klassenfremde Fertigkeit"},
            "Schamane": {"level": 22, "rang": "Klassenfremde Fertigkeit"}
        }
    },
    "Axtkampf": {
        "Name": "Axtkampf",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Ein Gegner",
        "Mana-Kosten": "-",
        "Gegenstand": "Axt",
        "Angriffstyp": "Nahkampf",
        "Angriff": "Ge,St",
        "Parade": "Ge,St",
        "Schaden": "St,Wa",
        "Verfuegbar": {
            "Barbar": {"level": 1, "rang": "Basisfertigkeit"},
            "Gladiator": {"level": 2, "rang": "Nebenfertigkeit"},
            "Ritter": {"level": 15, "rang": "Nebenfertigkeit"}
        }
    },
    "Bannerträger": {
        "Name": "Bannerträger",
        "Typ": "Verbesserung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+3 +34% der Heldenstufe",
        "Mana-Kosten": "6 (7)",
        "Gegenstand": "Banner",
        "Verfuegbar": {"Grenzländer": {"level": 13, "rang": "Nebenfertigkeit"}}
    },
    "Battuta": {
        "Name": "Battuta",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Selbst",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "Fechtkunst",
        "Verfuegbar": {"Hasardeur": {"level": 6, "rang": "Nebenfertigkeit"}}
    },
    "Beeindruckende Erscheinung": {
        "Name": "Beeindruckende Erscheinung",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner einer Position",
        "Max. betroffene Gegner": "+1 +10% der Heldenstufe",
        "Mana-Kosten": "2 (3)",
        "Gegenstand": "-",
        "Angriffstyp": "Sozial",
        "Angriff": "Ch,Ko",
        "Verfuegbar": {"Ritter": {"level": 24, "rang": "Nebenfertigkeit"}}
    },
    "Berserkerwut": {
        "Name": "Berserkerwut",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Selbst",
        "Mana-Kosten": "2 (3)",
        "Gegenstand": "Kultgegenstand des Berserkers",
        "Verfuegbar": {"Dinturan": {"level": 15, "rang": "Nebenfertigkeit"}}
    },
    "Beutelschneiden": {
        "Name": "Beutelschneiden",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+2 +34% der Heldenstufe",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "Messer",
        "Angriffstyp": "Hinterhalt",
        "Angriff": "Sn,Ge",
        "Verfuegbar": {"Dieb": {"level": 6, "rang": "Nebenfertigkeit"}}
    },
    "Blasrohr (Mehrfachschuss)": {
        "Name": "Blasrohr (Mehrfachschuss)",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+1 +20% der Heldenstufe",
        "Mana-Kosten": "-",
        "Gegenstand": "Pfeile für Blasrohr",
        "Angriffstyp": "Fernkampf",
        "Angriff": "Wa,Sn",
        "Verfuegbar": {"Schamane": {"level": 13, "rang": "Basisfertigkeit"}}
    },
    "Blasrohr schießen": {
        "Name": "Blasrohr schießen",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+2",
        "Mana-Kosten": "-",
        "Gegenstand": "Pfeile für Blasrohr",
        "Angriffstyp": "Fernkampf",
        "Angriff": "Wa,Ge",
        "Verfuegbar": {"Schamane": {"level": 2, "rang": "Basisfertigkeit"}}
    },
    "Blatt im Wind": {
        "Name": "Blatt im Wind",
        "Typ": "Verbesserung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "4 (5)",
        "Gegenstand": "Utensilien des rituellen Kampfes",
        "Verfuegbar": {"Mönch": {"level": 15, "rang": "Klassenfremde Fertigkeit"}}
    },
    "Blick der Kobra": {
        "Name": "Blick der Kobra",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+2 +17% der Heldenstufe",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "-",
        "Angriffstyp": "Sozial",
        "Angriff": "In,Ch",
        "Verfuegbar": {"Schamane": {"level": 9, "rang": "Nebenfertigkeit"}}
    },
    "Blutwahn": {
        "Name": "Blutwahn",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+2 +5% der Heldenstufe",
        "Mana-Kosten": "2 (3)",
        "Gegenstand": "Kultgegenstand des Berserkers",
        "Verfuegbar": {"Dinturan": {"level": 33, "rang": "Nebenfertigkeit"}}
    },
    "Bogen schießen": {
        "Name": "Bogen schießen",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+1",
        "Mana-Kosten": "-",
        "Gegenstand": "Bogen",
        "Angriffstyp": "Fernkampf",
        "Angriff": "Ge,Sn",
        "Schaden": "Wa,St",
        "Verfuegbar": {
            "Jäger": {"level": 1, "rang": "Basisfertigkeit"},
            "Ritter": {"level": 3, "rang": "Basisfertigkeit"},
            "Schütze": {"level": 1, "rang": "Basisfertigkeit"}
        }
    },
    "Brandpfeil": {
        "Name": "Brandpfeil",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "Bogen",
        "Verfuegbar": {
            "Jäger": {"level": 17, "rang": "Basisfertigkeit"},
            "Schütze": {"level": 5, "rang": "Basisfertigkeit"}
        }
    },
    "Bändiger der Winde": {
        "Name": "Bändiger der Winde",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Alle Mitstreiter auf einer Position",
        "Max. betroffene Helden": "+100%",
        "Mana-Kosten": "7 (8)",
        "Gegenstand": "-",
        "Verfuegbar": {"Gnom": {"level": 33, "rang": "Nebenfertigkeit"}}
    },
    "Böse Geister bannen": {
        "Name": "Böse Geister bannen",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+1 +13% der Heldenstufe",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "-",
        "Angriffstyp": "Zauber",
        "Angriff": "Wa,In",
        "Schaden": "Ko,Wa",
        "Verfuegbar": {"Rashani": {"level": 9, "rang": "Nebenfertigkeit"}}
    },
    "Bücher lesen": {
        "Name": "Bücher lesen",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "0 (1)",
        "Gegenstand": "Buch",
        "Verfuegbar": {
            "Barde": {"level": 2, "rang": "Nebenfertigkeit"},
            "Gelehrter": {"level": 1, "rang": "Basisfertigkeit"},
            "Hasardeur": {"level": 16, "rang": "Klassenfremde Fertigkeit"},
            "Klingenmagier": {"level": 2, "rang": "Klassenfremde Fertigkeit"},
            "Magier": {"level": 2, "rang": "Nebenfertigkeit"},
            "Mönch": {"level": 8, "rang": "Klassenfremde Fertigkeit"},
            "Paladin": {"level": 10, "rang": "Klassenfremde Fertigkeit"},
            "Priester": {"level": 3, "rang": "Nebenfertigkeit"},
            "Quacksalber": {"level": 2, "rang": "Nebenfertigkeit"},
            "Ritter": {"level": 18, "rang": "Klassenfremde Fertigkeit"}
        }
    },
    "Bühnenmagie": {
        "Name": "Bühnenmagie",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+2 +25% der Heldenstufe",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "Spruchrollen (offensiv)",
        "Angriffstyp": "Zauber",
        "Angriff": "Ch,In (+0)",
        "Verfuegbar": {"Barde": {"level": 14, "rang": "Nebenfertigkeit"}}
    },
    "Charismatischer Anführer": {
        "Name": "Charismatischer Anführer",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Alle Mitstreiter auf einer Position",
        "Max. betroffene Helden": "+1 +20% der Heldenstufe",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "-",
        "Verfuegbar": {"Hasardeur": {"level": 12, "rang": "Klassenfremde Fertigkeit"}}
    },
    "Charmeur": {
        "Name": "Charmeur",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "4 (5)",
        "Gegenstand": "Utensilien der Reinheit",
        "Verfuegbar": {
            "Barde": {"level": 15, "rang": "Klassenfremde Fertigkeit"},
            "Gaukler": {"level": 19, "rang": "Klassenfremde Fertigkeit"},
            "Gladiator": {"level": 22, "rang": "Klassenfremde Fertigkeit"},
            "Hasardeur": {"level": 22, "rang": "Klassenfremde Fertigkeit"},
            "Paladin": {"level": 20, "rang": "Klassenfremde Fertigkeit"},
            "Quacksalber": {"level": 22, "rang": "Klassenfremde Fertigkeit"},
            "Ritter": {"level": 20, "rang": "Klassenfremde Fertigkeit"}
        }
    },
    "Das zweite Gesicht": {
        "Name": "Das zweite Gesicht",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Selbst",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "-",
        "Verfuegbar": {"Gaukler": {"level": 24, "rang": "Nebenfertigkeit"}}
    },
    "Degentanz": {
        "Name": "Degentanz",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner einer Position",
        "Max. betroffene Gegner": "+1 +9% der Heldenstufe",
        "Mana-Kosten": "0 (1)",
        "Gegenstand": "Massenangriffswaffen",
        "Angriffstyp": "Nahkampf",
        "Angriff": "Ge,Sn (+0)",
        "Schaden": "St,Sn (+0)",
        "Finaler Wirkbonus:": "-10%",
        "Verfuegbar": {"Hasardeur": {"level": 14, "rang": "Nebenfertigkeit"}}
    },
    "Der perfekte Moment": {
        "Name": "Der perfekte Moment",
        "Typ": "Ruft Helfer",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Selbst",
        "Mana-Kosten": "-",
        "Gegenstand": "-",
        "Verfuegbar": {"Mönch": {"level": 24, "rang": "Nebenfertigkeit"}}
    },
    "Dickkopf": {
        "Name": "Dickkopf",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "2 (3)",
        "Gegenstand": "-",
        "Verfuegbar": {"Gnom": {"level": 16, "rang": "Nebenfertigkeit"}}
    },
    "Die Geister der Natur": {
        "Name": "Die Geister der Natur",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "Materialien der Natur",
        "Verfuegbar": {
            "Jäger": {"level": 24, "rang": "Nebenfertigkeit"},
            "Schamane": {"level": 5, "rang": "Nebenfertigkeit"}
        }
    },
    "Dimensionssprung": {
        "Name": "Dimensionssprung",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Selbst",
        "Mana-Kosten": "7 (6)",
        "Gegenstand": "-",
        "Verfuegbar": {
            "Klingenmagier": {"level": 3, "rang": "Nebenfertigkeit"},
            "Magier": {"level": 7, "rang": "Nebenfertigkeit"}
        }
    },
    "Donnerbüchse": {
        "Name": "Donnerbüchse",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner einer Position",
        "Max. betroffene Gegner": "+4 +11% der Heldenstufe",
        "Mana-Kosten": "-",
        "Gegenstand": "Schwere Pulverwaffen",
        "Angriffstyp": "Fernkampf",
        "Angriff": "Wa,St (+0)",
        "Schaden": "In,Wa (+0)",
        "Finaler Wirkbonus:": "-30%",
        "Verfuegbar": {
            "Quacksalber": {"level": 16, "rang": "Klassenfremde Fertigkeit"},
            "Schütze": {"level": 3, "rang": "Basisfertigkeit"}
        }
    },
    "Doppelschlag": {
        "Name": "Doppelschlag",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner einer Position",
        "Mana-Kosten": "1 (1)",
        "Gegenstand": "Massenangriffswaffen",
        "Angriffstyp": "Nahkampf",
        "Angriff": "Ge,Sn (+0)",
        "Schaden": "St,Sn (+0)",
        "Finaler Wirkbonus:": "-5%",
        "Verfuegbar": {
            "Barbar": {"level": 8, "rang": "Basisfertigkeit"},
            "Gladiator": {"level": 8, "rang": "Basisfertigkeit"},
            "Klingenmagier": {"level": 12, "rang": "Basisfertigkeit"},
            "Paladin": {"level": 13, "rang": "Basisfertigkeit"},
            "Ritter": {"level": 11, "rang": "Basisfertigkeit"}
        }
    },
    "Doppelschuss": {
        "Name": "Doppelschuss",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "Leichte Fernkampfwaffen",
        "Angriffstyp": "Fernkampf",
        "Angriff": "Ge,Wa (+0)",
        "Schaden": "Wa,St (+0)",
        "Finaler Wirkbonus:": "-10%",
        "Verfuegbar": {
            "Jäger": {"level": 8, "rang": "Basisfertigkeit"},
            "Paladin": {"level": 13, "rang": "Basisfertigkeit"},
            "Schütze": {"level": 7, "rang": "Basisfertigkeit"}
        }
    },
    "Durchschuss": {
        "Name": "Durchschuss",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+3 +7% der Heldenstufe",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "Schwere Fernkampfwaffen",
        "Angriffstyp": "Fernkampf",
        "Angriff": "Ge,Ko (+0)",
        "Schaden": "Wa,In (+0)",
        "Finaler Wirkbonus:": "-30%",
        "Verfuegbar": {"Schütze": {"level": 10, "rang": "Basisfertigkeit"}}
    },
    "Echo der Elemente": {
        "Name": "Echo der Elemente",
        "Typ": "Verbesserung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+3 +5% der Heldenstufe",
        "Mana-Kosten": "-",
        "Gegenstand": "-",
        "Verfuegbar": {"Schamane": {"level": 8, "rang": "Nebenfertigkeit"}}
    },
    "Echo der Freiheit": {
        "Name": "Echo der Freiheit",
        "Typ": "Verbesserung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+3 +5% der Heldenstufe",
        "Mana-Kosten": "-",
        "Gegenstand": "-",
        "Verfuegbar": {"Schamane": {"level": 8, "rang": "Nebenfertigkeit"}}
    },
    "Echo der Wut": {
        "Name": "Echo der Wut",
        "Typ": "Verbesserung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+3 +5% der Heldenstufe",
        "Mana-Kosten": "-",
        "Gegenstand": "-",
        "Verfuegbar": {"Schamane": {"level": 8, "rang": "Nebenfertigkeit"}}
    },
    "Eigene Waffe vergiften": {
        "Name": "Eigene Waffe vergiften",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "2 (3)",
        "Gegenstand": "Waffengift",
        "Verfuegbar": {"Jäger": {"level": 3, "rang": "Basisfertigkeit"}}
    },
    "Einschüchtern": {
        "Name": "Einschüchtern",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner einer Position",
        "Max. betroffene Gegner": "+2 +13% der Heldenstufe",
        "Mana-Kosten": "2 (3)",
        "Gegenstand": "Statussymbol",
        "Angriffstyp": "Sozial",
        "Angriff": "Ko,Ch",
        "Verfuegbar": {"Hasardeur": {"level": 8, "rang": "Basisfertigkeit"}}
    },
    "Einzelschuss": {
        "Name": "Einzelschuss",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+1",
        "Mana-Kosten": "-",
        "Gegenstand": "Pulverwaffe",
        "Angriffstyp": "Fernkampf",
        "Angriff": "Wa,Ge",
        "Schaden": "In,Ge",
        "Verfuegbar": {
            "Barde": {"level": 9, "rang": "Nebenfertigkeit"},
            "Hasardeur": {"level": 1, "rang": "Basisfertigkeit"},
            "Schütze": {"level": 15, "rang": "Nebenfertigkeit"}
        }
    },
    "Eisbolzen": {
        "Name": "Eisbolzen",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "Armbrust",
        "Verfuegbar": {"Schütze": {"level": 5, "rang": "Basisfertigkeit"}}
    },
    "Eiserne Faust": {
        "Name": "Eiserne Faust",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "0 (1)",
        "Gegenstand": "-",
        "Verfuegbar": {"Gladiator": {"level": 4, "rang": "Nebenfertigkeit"}}
    },
    "Eisernes Training": {
        "Name": "Eisernes Training",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "0 (1)",
        "Gegenstand": "-",
        "Verfuegbar": {"Ritter": {"level": 6, "rang": "Nebenfertigkeit"}}
    },
    "Eisgeschoss": {
        "Name": "Eisgeschoss",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+1",
        "Mana-Kosten": "7 (8)",
        "Gegenstand": "Eiskristalle",
        "Angriffstyp": "Zauber",
        "Angriff": "In,Wa",
        "Schaden": "Wi,Ko",
        "Verfuegbar": {"Magier": {"level": 3, "rang": "Basisfertigkeit"}}
    },
    "Eisregen": {
        "Name": "Eisregen",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+4 +13% der Heldenstufe",
        "Mana-Kosten": "15 (17)",
        "Gegenstand": "Eiskristalle",
        "Angriffstyp": "Zauber",
        "Angriff": "In,Wa (+0)",
        "Schaden": "Wi,Ko (-40%)",
        "Verfuegbar": {"Magier": {"level": 21, "rang": "Nebenfertigkeit"}}
    },
    "Eiswasser": {
        "Name": "Eiswasser",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+1",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "Eiskristalle",
        "Angriffstyp": "Zauber",
        "Angriff": "Wi,In (+0)",
        "Schaden": "Ch,Sn (-10%)",
        "Verfuegbar": {"Schamane": {"level": 5, "rang": "Nebenfertigkeit"}}
    },
    "Eiswolke": {
        "Name": "Eiswolke",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner einer Position",
        "Max. betroffene Gegner": "+3 +11% der Heldenstufe",
        "Mana-Kosten": "11 (13)",
        "Gegenstand": "Eiskristalle",
        "Angriffstyp": "Zauber",
        "Angriff": "In,Wa (+0)",
        "Schaden": "Wi,Ko (-30%)",
        "Verfuegbar": {"Magier": {"level": 12, "rang": "Basisfertigkeit"}}
    },
    "Elementarschleier": {
        "Name": "Elementarschleier",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+2 +25% der Heldenstufe",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "Pudersand",
        "Verfuegbar": {"Klingenmagier": {"level": 7, "rang": "Nebenfertigkeit"}}
    },
    "Elementarschmied": {
        "Name": "Elementarschmied",
        "Typ": "Verbesserung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "5 (6)",
        "Gegenstand": "Amboss",
        "Verfuegbar": {"Hügelzwerg": {"level": 33, "rang": "Nebenfertigkeit"}}
    },
    "Energieblitz": {
        "Name": "Energieblitz",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+1",
        "Mana-Kosten": "6 (7)",
        "Gegenstand": "-",
        "Angriffstyp": "Zauber",
        "Angriff": "Wa,In",
        "Schaden": "Wi,Ko",
        "Verfuegbar": {"Magier": {"level": 1, "rang": "Basisfertigkeit"}}
    },
    "Energiegewitter": {
        "Name": "Energiegewitter",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner einer Position",
        "Max. betroffene Gegner": "+3 +12% der Heldenstufe",
        "Mana-Kosten": "10 (12)",
        "Gegenstand": "-",
        "Angriffstyp": "Zauber",
        "Angriff": "Wa,In (+0)",
        "Schaden": "Wi,St (-25%)",
        "Verfuegbar": {"Magier": {"level": 11, "rang": "Basisfertigkeit"}}
    },
    "Energiesturm": {
        "Name": "Energiesturm",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+5 +12% der Heldenstufe",
        "Mana-Kosten": "13 (15)",
        "Gegenstand": "-",
        "Angriffstyp": "Zauber",
        "Angriff": "Wa,In (+0)",
        "Schaden": "Wi,St (-35%)",
        "Verfuegbar": {"Magier": {"level": 20, "rang": "Nebenfertigkeit"}}
    },
    "Entwaffnender Hieb": {
        "Name": "Entwaffnender Hieb",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Ein Gegner",
        "Mana-Kosten": "0 (1)",
        "Gegenstand": "Fechtwaffen",
        "Angriffstyp": "Nahkampf",
        "Angriff": "Ge,In",
        "Verfuegbar": {"Hasardeur": {"level": 8, "rang": "Nebenfertigkeit"}}
    },
    "Erddolch": {
        "Name": "Erddolch",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner einer Position",
        "Max. betroffene Gegner": "+1 +8% der Heldenstufe",
        "Mana-Kosten": "4 (5)",
        "Gegenstand": "-",
        "Angriffstyp": "Naturgewalt",
        "Angriff": "Wi,Wa (+0)",
        "Schaden": "In,Ch (+0)",
        "Verfuegbar": {"Waldmensch": {"level": 13, "rang": "Nebenfertigkeit"}}
    },
    "Erdschild": {
        "Name": "Erdschild",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+3",
        "Mana-Kosten": "5 (6)",
        "Gegenstand": "Kultgegenstand der Erdverbundenheit",
        "Verfuegbar": {"Waldmensch": {"level": 33, "rang": "Nebenfertigkeit"}}
    },
    "Erquickung des Geistes": {
        "Name": "Erquickung des Geistes",
        "Typ": "Verbesserung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+1 +17% der Heldenstufe",
        "Mana-Kosten": "-",
        "Gegenstand": "-",
        "Verfuegbar": {"Schamane": {"level": 16, "rang": "Klassenfremde Fertigkeit"}}
    },
    "Erst mal was essen!": {
        "Name": "Erst mal was essen!",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Selbst",
        "Mana-Kosten": "-",
        "Gegenstand": "Proviant (Imbiss)",
        "Verfuegbar": {
            "Bergzwerg": {"level": 2, "rang": "Nebenfertigkeit"},
            "Dinturan": {"level": 2, "rang": "Nebenfertigkeit"},
            "Gnerk": {"level": 2, "rang": "Nebenfertigkeit"},
            "Gnom": {"level": 2, "rang": "Nebenfertigkeit"},
            "Grenzländer": {"level": 2, "rang": "Nebenfertigkeit"},
            "Halbling": {"level": 2, "rang": "Basisfertigkeit"},
            "Hügelzwerg": {"level": 2, "rang": "Nebenfertigkeit"},
            "Kerasi": {"level": 2, "rang": "Nebenfertigkeit"},
            "Mag-Mor-Elf": {"level": 2, "rang": "Nebenfertigkeit"},
            "Rashani": {"level": 2, "rang": "Nebenfertigkeit"},
            "Tirem-Ag-Elf": {"level": 2, "rang": "Nebenfertigkeit"},
            "Waldmensch": {"level": 2, "rang": "Nebenfertigkeit"}
        }
    },
    "Etikette": {
        "Name": "Etikette",
        "Typ": "Verbesserung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+1 +20% des Fertigkeitenrangs",
        "Mana-Kosten": "7 (8)",
        "Gegenstand": "-",
        "Verfuegbar": {"Grenzländer": {"level": 33, "rang": "Nebenfertigkeit"}}
    },
    "Exorzismus": {
        "Name": "Exorzismus",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner einer Position",
        "Max. betroffene Gegner": "+1 +13% der Heldenstufe",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "Heilige Utensilien der Vergeltung",
        "Angriffstyp": "Zauber",
        "Angriff": "Wa,Wi",
        "Schaden": "Wi,Ch",
        "Verfuegbar": {"Priester": {"level": 2, "rang": "Basisfertigkeit"}}
    },
    "Experimentelle Stärkung": {
        "Name": "Experimentelle Stärkung",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+2 +13% der Heldenstufe",
        "Mana-Kosten": "2 (3)",
        "Gegenstand": "Gebräue der Gesundheit",
        "Verfuegbar": {"Quacksalber": {"level": 5, "rang": "Basisfertigkeit"}}
    },
    "Experimenteller Manaschub": {
        "Name": "Experimenteller Manaschub",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+1 +34% der Heldenstufe",
        "Mana-Kosten": "4 (5)",
        "Gegenstand": "Manatrank",
        "Verfuegbar": {"Quacksalber": {"level": 6, "rang": "Basisfertigkeit"}}
    },
    "Fallen entdecken": {
        "Name": "Fallen entdecken",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Alle Mitstreiter auf einer Position",
        "Max. betroffene Helden": "+1 +34% der Heldenstufe",
        "Mana-Kosten": "0 (1)",
        "Gegenstand": "-",
        "Verfuegbar": {
            "Dieb": {"level": 3, "rang": "Basisfertigkeit"},
            "Gaukler": {"level": 4, "rang": "Klassenfremde Fertigkeit"},
            "Gelehrter": {"level": 7, "rang": "Klassenfremde Fertigkeit"},
            "Jäger": {"level": 3, "rang": "Basisfertigkeit"},
            "Schütze": {"level": 4, "rang": "Nebenfertigkeit"}
        }
    },
    "Fallen entschärfen": {
        "Name": "Fallen entschärfen",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+1",
        "Mana-Kosten": "-",
        "Gegenstand": "-",
        "Angriffstyp": "Falle entschärfen",
        "Angriff": "Wa,Ge",
        "Schaden": "In,Sn",
        "Verfuegbar": {
            "Dieb": {"level": 5, "rang": "Basisfertigkeit"},
            "Gaukler": {"level": 8, "rang": "Nebenfertigkeit"},
            "Gelehrter": {"level": 8, "rang": "Klassenfremde Fertigkeit"},
            "Jäger": {"level": 4, "rang": "Nebenfertigkeit"},
            "Schütze": {"level": 6, "rang": "Nebenfertigkeit"}
        }
    },
    "Fauler Zauber": {
        "Name": "Fauler Zauber",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+100%",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "-",
        "Angriffstyp": "Sozial",
        "Angriff": "Ch,Wi",
        "Verfuegbar": {
            "Gelehrter": {"level": 6, "rang": "Nebenfertigkeit"},
            "Klingenmagier": {"level": 7, "rang": "Basisfertigkeit"},
            "Magier": {"level": 5, "rang": "Nebenfertigkeit"}
        }
    },
    "Faxen machen": {
        "Name": "Faxen machen",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner einer Position",
        "Max. betroffene Gegner": "+1 +25% der Heldenstufe",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "Utensilien der Ablenkung",
        "Angriffstyp": "Sozial",
        "Angriff": "Ch,Wa",
        "Verfuegbar": {"Gaukler": {"level": 10, "rang": "Nebenfertigkeit"}}
    },
    "Fechtwaffen": {
        "Name": "Fechtwaffen",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Ein Gegner",
        "Mana-Kosten": "-",
        "Gegenstand": "Fechtwaffen",
        "Angriffstyp": "Nahkampf",
        "Angriff": "Sn,Ge",
        "Parade": "Sn,Ge",
        "Schaden": "St,Ge",
        "Verfuegbar": {
            "Barde": {"level": 1, "rang": "Nebenfertigkeit"},
            "Gelehrter": {"level": 4, "rang": "Klassenfremde Fertigkeit"},
            "Hasardeur": {"level": 1, "rang": "Nebenfertigkeit"}
        }
    },
    "Feldmarschall": {
        "Name": "Feldmarschall",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+2 +20% der Heldenstufe",
        "Mana-Kosten": "5 (6)",
        "Gegenstand": "-",
        "Verfuegbar": {"Ritter": {"level": 12, "rang": "Nebenfertigkeit"}}
    },
    "Felsen werfen": {
        "Name": "Felsen werfen",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner einer Position",
        "Max. betroffene Gegner": "+3 +7% der Heldenstufe",
        "Mana-Kosten": "2 (3)",
        "Gegenstand": "-",
        "Angriffstyp": "Fernkampf",
        "Angriff": "Ge,Sn (+0)",
        "Schaden": "St,Ko (+0)",
        "Finaler Wirkbonus:": "-20%",
        "Verfuegbar": {"Gestaltwandler": {"level": 14, "rang": "Klassenfremde Fertigkeit"}}
    },
    "Feuer frei!": {
        "Name": "Feuer frei!",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Alle Mitstreiter auf einer Position",
        "Max. betroffene Helden": "+2 +17% der Heldenstufe",
        "Mana-Kosten": "4 (5)",
        "Gegenstand": "Pulverwaffe",
        "Verfuegbar": {"Hasardeur": {"level": 12, "rang": "Klassenfremde Fertigkeit"}}
    },
    "Feuerball": {
        "Name": "Feuerball",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner einer Position",
        "Max. betroffene Gegner": "+2 +12% der Heldenstufe",
        "Mana-Kosten": "11 (13)",
        "Gegenstand": "Schwefel",
        "Angriffstyp": "Zauber",
        "Angriff": "In,Wa (+0)",
        "Schaden": "Wi,In (-20%)",
        "Verfuegbar": {"Magier": {"level": 12, "rang": "Basisfertigkeit"}}
    },
    "Feuerpfeil": {
        "Name": "Feuerpfeil",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+1",
        "Mana-Kosten": "7 (8)",
        "Gegenstand": "Schwefel",
        "Angriffstyp": "Zauber",
        "Angriff": "In,Wa",
        "Schaden": "Sn,Ko",
        "Verfuegbar": {"Magier": {"level": 3, "rang": "Basisfertigkeit"}}
    },
    "Feuerregen": {
        "Name": "Feuerregen",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+3 +12% der Heldenstufe",
        "Mana-Kosten": "15 (17)",
        "Gegenstand": "Schwefel",
        "Angriffstyp": "Zauber",
        "Angriff": "Wa,In (+0)",
        "Schaden": "Wi,Ko (-30%)",
        "Verfuegbar": {"Magier": {"level": 21, "rang": "Nebenfertigkeit"}}
    },
    "Feuerstoß": {
        "Name": "Feuerstoß",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "Pulverwaffe",
        "Verfuegbar": {
            "Hasardeur": {"level": 7, "rang": "Basisfertigkeit"},
            "Schütze": {"level": 7, "rang": "Basisfertigkeit"}
        }
    },
    "Fingerfertigkeit": {
        "Name": "Fingerfertigkeit",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "4 (5)",
        "Gegenstand": "-",
        "Verfuegbar": {
            "Barde": {"level": 17, "rang": "Klassenfremde Fertigkeit"},
            "Dieb": {"level": 18, "rang": "Klassenfremde Fertigkeit"},
            "Gaukler": {"level": 21, "rang": "Klassenfremde Fertigkeit"},
            "Gelehrter": {"level": 22, "rang": "Klassenfremde Fertigkeit"},
            "Hasardeur": {"level": 17, "rang": "Klassenfremde Fertigkeit"},
            "Jäger": {"level": 16, "rang": "Klassenfremde Fertigkeit"},
            "Mönch": {"level": 18, "rang": "Klassenfremde Fertigkeit"},
            "Quacksalber": {"level": 19, "rang": "Klassenfremde Fertigkeit"},
            "Schütze": {"level": 20, "rang": "Klassenfremde Fertigkeit"}
        }
    },
    "Finte": {
        "Name": "Finte",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "1 (1)",
        "Gegenstand": "-",
        "Verfuegbar": {
            "Barbar": {"level": 10, "rang": "Klassenfremde Fertigkeit"},
            "Dieb": {"level": 4, "rang": "Basisfertigkeit"},
            "Gestaltwandler": {"level": 5, "rang": "Nebenfertigkeit"},
            "Gladiator": {"level": 16, "rang": "Nebenfertigkeit"},
            "Hasardeur": {"level": 4, "rang": "Nebenfertigkeit"},
            "Klingenmagier": {"level": 5, "rang": "Nebenfertigkeit"},
            "Ritter": {"level": 5, "rang": "Nebenfertigkeit"}
        }
    },
    "Flammenspeer": {
        "Name": "Flammenspeer",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner einer Position",
        "Max. betroffene Gegner": "+1 +8% der Heldenstufe",
        "Mana-Kosten": "9 (8)",
        "Gegenstand": "Schwefel",
        "Angriffstyp": "Zauber",
        "Angriff": "In,Ge (+0)",
        "Schaden": "St,Ko (-20%)",
        "Verfuegbar": {"Klingenmagier": {"level": 8, "rang": "Klassenfremde Fertigkeit"}}
    },
    "Flatterer": {
        "Name": "Flatterer",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner einer Position",
        "Max. betroffene Gegner": "+2 +20% der Heldenstufe",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "Wurfwaffe",
        "Angriffstyp": "Fernkampf",
        "Angriff": "Sn,Ge",
        "Verfuegbar": {"Gaukler": {"level": 9, "rang": "Nebenfertigkeit"}}
    },
    "Fleche": {
        "Name": "Fleche",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "-",
        "Verfuegbar": {"Hasardeur": {"level": 18, "rang": "Basisfertigkeit"}}
    },
    "Fliegende Fäuste": {
        "Name": "Fliegende Fäuste",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+3 +8% der Heldenstufe",
        "Mana-Kosten": "0 (1)",
        "Gegenstand": "Waffenlos",
        "Angriffstyp": "Nahkampf",
        "Angriff": "Sn,St (+0)",
        "Schaden": "Ko,Ge (+0)",
        "Finaler Wirkbonus:": "-8%",
        "Verfuegbar": {"Gladiator": {"level": 15, "rang": "Basisfertigkeit"}}
    },
    "Fokussieren": {
        "Name": "Fokussieren",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Selbst",
        "Mana-Kosten": "1 (1)",
        "Gegenstand": "-",
        "Verfuegbar": {"Klingenmagier": {"level": 9, "rang": "Nebenfertigkeit"}}
    },
    "Gabe: Akbeths Güte": {
        "Name": "Gabe: Akbeths Güte",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "AlEigene Gruppe",
        "Max. betroffene Helden": "Alle",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "-",
        "Verfuegbar": {"Priester/ Heiliger Diener": {"level": "26", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Akbeths treuer Diener": {
        "Name": "Gabe: Akbeths treuer Diener",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "0 (1)",
        "Gegenstand": "-",
        "Verfuegbar": {"Priester/Geweihter des Akbeth": {"level": "23", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Alternative Anwendung von Schießpulver": {
        "Name": "Gabe: Alternative Anwendung von Schießpulver",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner einer Position",
        "Max. betroffene Gegner": "+5",
        "Mana-Kosten": "-",
        "Gegenstand": "Schießpulver",
        "Angriffstyp": "Explosion",
        "Angriff": "Wa,In",
        "Schaden": "In,Ge",
        "Verfuegbar": {
            "Hasardeur/Meister der ruhigen Hand": {"level": "26", "rang": "Basisfertigkeit"},
            "Schütze/Herr über das Schießpulver": {"level": "26", "rang": "Basisfertigkeit"}
        }
    },
    "Gabe: Aufbrausend": {
        "Name": "Gabe: Aufbrausend",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "0 (1)",
        "Gegenstand": "-",
        "Verfuegbar": {
            "Hasardeur/Genie der Fechtkunst": {"level": "26", "rang": "Basisfertigkeit"},
            "Priester/ Zelot": {"level": "29", "rang": "Basisfertigkeit"}
        }
    },
    "Gabe: Aufmerksamkeit fesseln": {
        "Name": "Gabe: Aufmerksamkeit fesseln",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+2 +13% der Heldenstufe",
        "Mana-Kosten": "2 (3)",
        "Gegenstand": "Utensilien der Ablenkung",
        "Angriffstyp": "Sozial",
        "Angriff": "Ch,Ge",
        "Verfuegbar": {"Gaukler/Schelm": {"level": "29", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Aufopferung": {
        "Name": "Gabe: Aufopferung",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Selbst",
        "Mana-Kosten": "-",
        "Gegenstand": "-",
        "Verfuegbar": {"Priester/Geweihter des Rashon": {"level": "26", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Aufrechter Kämpe": {
        "Name": "Gabe: Aufrechter Kämpe",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "-",
        "Verfuegbar": {"Paladin/Verteidiger des Glaubens": {"level": "26", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Aura des Auserwählten": {
        "Name": "Gabe: Aura des Auserwählten",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+100%",
        "Mana-Kosten": "9 (10)",
        "Gegenstand": "-",
        "Verfuegbar": {"Paladin/Auserwählter der Götter": {"level": "29", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Aus ganz besonderem Holz geschnitzt": {
        "Name": "Gabe: Aus ganz besonderem Holz geschnitzt",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "-",
        "Verfuegbar": {"Ritter/Unbeugsamer Krieger": {"level": "29", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Befreiungsschlag": {
        "Name": "Gabe: Befreiungsschlag",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner einer Position",
        "Mana-Kosten": "2 (3)",
        "Gegenstand": "Massenangriffswaffen",
        "Angriffstyp": "Nahkampf",
        "Angriff": "Ge,St (+0)",
        "Schaden": "St,Sn (+0)",
        "Finaler Wirkbonus:": "-15%",
        "Verfuegbar": {
            "Gladiator/Herr der Klingen": {"level": "26", "rang": "Basisfertigkeit"},
            "Ritter/Unbeugsamer Krieger": {"level": "23", "rang": "Basisfertigkeit"}
        }
    },
    "Gabe: Begnadeter Duellschütze": {
        "Name": "Gabe: Begnadeter Duellschütze",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "4 (5)",
        "Gegenstand": "-",
        "Verfuegbar": {"Hasardeur/Meister der ruhigen Hand": {"level": "23", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Begnadeter Schütze": {
        "Name": "Gabe: Begnadeter Schütze",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "Leichte Fernkampfwaffen",
        "Verfuegbar": {
            "Schütze/Meister der Präzision": {"level": "23", "rang": "Basisfertigkeit"},
            "Ritter/Husar": {"level": "23", "rang": "Basisfertigkeit"}
        }
    },
    "Gabe: Beherrscher der Klinge": {
        "Name": "Gabe: Beherrscher der Klinge",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "-",
        "Gegenstand": "-",
        "Verfuegbar": {"Klingenmagier/Klingenmeister": {"level": "29", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Beseelte Bolzen": {
        "Name": "Gabe: Beseelte Bolzen",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "-",
        "Verfuegbar": {"Schütze/Spezialist für große Kaliber": {"level": "23", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Der Pfad der Freiheit": {
        "Name": "Gabe: Der Pfad der Freiheit",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "-",
        "Verfuegbar": {"Mönch/Ordensbruder": {"level": "26", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Dornenhagel": {
        "Name": "Gabe: Dornenhagel",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+4",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "-",
        "Angriffstyp": "Fernkampf",
        "Angriff": "Wa,Wi (+0)",
        "Schaden": "In,Wi (+0)",
        "Finaler Wirkbonus:": "-25%",
        "Verfuegbar": {"Schamane/Erkunder des Unbekannten": {"level": "26", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Duellant": {
        "Name": "Gabe: Duellant",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "2 (3)",
        "Gegenstand": "-",
        "Verfuegbar": {"Hasardeur/Genie der Fechtkunst": {"level": "23", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Durchblick im Dickicht": {
        "Name": "Gabe: Durchblick im Dickicht",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "-",
        "Fertigkeitenklasse": "-",
        "Verfuegbar": {
            "Jäger/Wächter des Waldes": {"level": 23, "rang": "Basisfertigkeit"},
        }
    },
    "Gabe: Eid des Medikus": {
        "Name": "Gabe: Eid des Medikus",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "Messer",
        "Angriffstyp": "Nahkampf",
        "Angriff": "Sn,Ge (+0)",
        "Schaden": "Ge,In (+0)",
        "Finaler Wirkbonus:": "-8%",
        "Verfuegbar": {"Quacksalber/Wundarzt": {"level": "26", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Eins mit den Manaströmen": {
        "Name": "Gabe: Eins mit den Manaströmen",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+100%",
        "Mana-Kosten": "9 (11)",
        "Gegenstand": "-",
        "Verfuegbar": {
            "Dieb/Energiedieb": {"level": "29", "rang": "Basisfertigkeit"},
            "Magier/Zauberer der Blitze": {"level": "23", "rang": "Basisfertigkeit"}
        }
    },
    "Gabe: Energiekäfig": {
        "Name": "Gabe: Energiekäfig",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner einer Position",
        "Max. betroffene Gegner": "+1 +10% des Fertigkeitenrangs",
        "Mana-Kosten": "15 (17)",
        "Gegenstand": "-",
        "Angriffstyp": "Zauber",
        "Angriff": "Wi,Wa",
        "Verfuegbar": {"Magier/Zauberer der Blitze": {"level": "29", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Erlösung der Verdammten": {
        "Name": "Gabe: Erlösung der Verdammten",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Mana-Kosten": "2 (3)",
        "Gegenstand": "Leichte Fernkampfwaffen",
        "Angriffstyp": "Fernkampf",
        "Angriff": "Wa,Wi (+0)",
        "Schaden": "Ge,Wi (+0)",
        "Finaler Wirkbonus:": "-10%",
        "Verfuegbar": {"Paladin/Jäger der Verdammten": {"level": "23", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Fanatische Hingabe": {
        "Name": "Gabe: Fanatische Hingabe",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ -",
        "Ziel": "Selbst",
        "Verfuegbar": {"Priester/Vollstrecker des Tempels": {"level": "26", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Feinmechaniker": {
        "Name": "Gabe: Feinmechaniker",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "-",
        "Verfuegbar": {"Dieb/König der Einbrecher": {"level": "23", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Fiese Gifte": {
        "Name": "Gabe: Fiese Gifte",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "Nahkampfwaffen",
        "Verfuegbar": {"Gaukler/Harlekin": {"level": "29", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Flammenschild": {
        "Name": "Gabe: Flammenschild",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Alle Mitstreiter auf einer Position",
        "Max. betroffene Helden": "+1 +17% der Heldenstufe",
        "Mana-Kosten": "4 (5)",
        "Gegenstand": "-",
        "Verfuegbar": {"Magier/Zauberer des Feuers": {"level": "23", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Geborener Rudelführer": {
        "Name": "Gabe: Geborener Rudelführer",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+6",
        "Mana-Kosten": "5 (6)",
        "Gegenstand": "-",
        "Verfuegbar": {"Gestaltwandler/König der Tiere": {"level": "23", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Geduldiger Jäger": {
        "Name": "Gabe: Geduldiger Jäger",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Selbst",
        "Mana-Kosten": "2 (3)",
        "Gegenstand": "-",
        "Verfuegbar": {"Schamane/Erkunder des Unbekannten": {"level": "23", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Geflügelte Töne": {
        "Name": "Gabe: Geflügelte Töne",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner einer Position",
        "Max. betroffene Gegner": "+4",
        "Mana-Kosten": "2 (3)",
        "Gegenstand": "Leichte Fernkampfwaffen",
        "Angriffstyp": "Fernkampf",
        "Angriff": "Wa,Ch (+0)",
        "Schaden": "Ge,St (+0)",
        "Finaler Wirkbonus:": "-20%",
        "Verfuegbar": {"Barde/Schlachtensänger": {"level": "26", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Gerechter Aufstand": {
        "Name": "Gabe: Gerechter Aufstand",
        "Typ": "Verbesserung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+100%",
        "Mana-Kosten": "7 (8)",
        "Gegenstand": "-",
        "Verfuegbar": {"Paladin/Jäger der Verdammten": {"level": "29", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Gewinnendes Lächeln": {
        "Name": "Gabe: Gewinnendes Lächeln",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+17% der Heldenstufe",
        "Mana-Kosten": "5 (6)",
        "Gegenstand": "-",
        "Angriffstyp": "Sozial",
        "Angriff": "Ch,Ko",
        "Verfuegbar": {"Ritter/Kommandant": {"level": "29", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Gewittersturm": {
        "Name": "Gabe: Gewittersturm",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Mana-Kosten": "10 (12)",
        "Gegenstand": "-",
        "Angriffstyp": "Naturgewalt",
        "Angriff": "Wi,In (+0)",
        "Schaden": "Ch,Wa (+25%)",
        "Verfuegbar": {"Schamane/Herr der Natur": {"level": "23", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Giftnebel": {
        "Name": "Gabe: Giftnebel",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner einer Position",
        "Max. betroffene Gegner": "+17% der Heldenstufe",
        "Mana-Kosten": "9 (11)",
        "Gegenstand": "-",
        "Angriffstyp": "Zauber",
        "Angriff": "In,Wi",
        "Schaden": "Ch,Ko",
        "Verfuegbar": {"Klingenmagier/Elementalist": {"level": "23", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Göttliche Intuition": {
        "Name": "Gabe: Göttliche Intuition",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "6 (7)",
        "Gegenstand": "-",
        "Verfuegbar": {"Paladin/Beschützer der Schwachen": {"level": "26", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Göttliches Urteil": {
        "Name": "Gabe: Göttliches Urteil",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+7",
        "Mana-Kosten": "4 (5)",
        "Gegenstand": "Aspekt des Urteils",
        "Angriffstyp": "Zauber",
        "Angriff": "Wi,Ch (+0)",
        "Verfuegbar": {"Priester/Göttlicher Richter": {"level": "26", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Göttliche Vergeltung": {
        "Name": "Gabe: Göttliche Vergeltung",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "Massenangriffswaffen",
        "Angriffstyp": "Nahkampf",
        "Angriff": "Ge,Wi (+0)",
        "Schaden": "St,Wi (+0)",
        "Finaler Wirkbonus:": "-8%",
        "Verfuegbar": {"Paladin/Verteidiger des Glaubens": {"level": "23", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Herr der Wildtiere": {
        "Name": "Gabe: Herr der Wildtiere",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+5",
        "Mana-Kosten": "6 (7)",
        "Gegenstand": "-",
        "Angriffstyp": "Verschrecken",
        "Angriff": "Wi,Ch",
        "Schaden": "St,Ch",
        "Verfuegbar": {"Schamane/Fürst der Wildnis": {"level": "29", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Herr des geschmiedeten Stahls": {
        "Name": "Gabe: Herr des geschmiedeten Stahls",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "2 (3)",
        "Gegenstand": "Schild",
        "Verfuegbar": {
            "Gladiator/Liebling der Massen": {"level": "23", "rang": "Basisfertigkeit"},
            "Paladin/Beschützer der Schwachen": {"level": "23", "rang": "Basisfertigkeit"},
            "Ritter/Sturmbrecher": {"level": "23", "rang": "Basisfertigkeit"}
        }
    },
    "Gabe: Innere Einkehr": {
        "Name": "Gabe: Innere Einkehr",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ -",
        "Ziel": "Selbst",
        "Mana-Kosten": "-",
        "Gegenstand": "-",
        "Verfuegbar": {"Priester/Göttlicher Richter": {"level": "29", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Innere Ruhe": {
        "Name": "Gabe: Innere Ruhe",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Alle Mitstreiter auf einer Position",
        "Max. betroffene Helden": "+100%",
        "Mana-Kosten": "6 (7)",
        "Gegenstand": "-",
        "Verfuegbar": {"Ritter/Kommandant": {"level": "23", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Jongleur": {
        "Name": "Gabe: Jongleur",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Alle Mitstreiter auf einer Position",
        "Max. betroffene Helden": "+100%",
        "Mana-Kosten": "-",
        "Gegenstand": "-",
        "Verfuegbar": {"Gaukler/Messerwerfer": {"level": "29", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Klauen des Tigers": {
        "Name": "Gabe: Klauen des Tigers",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "-",
        "Verfuegbar": {"Schamane/Fürst der Wildnis": {"level": "23", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Klingensang": {
        "Name": "Gabe: Klingensang",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner einer Position",
        "Max. betroffene Gegner": "+4",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "Massenangriffswaffen",
        "Angriffstyp": "Nahkampf",
        "Angriff": "Sn,Ch (+0)",
        "Schaden": "Ge,St (+0)",
        "Finaler Wirkbonus:": "-10%",
        "Verfuegbar": {"Barde/Schlachtensänger": {"level": "26", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Konzentrierte Entladung": {
        "Name": "Gabe: Konzentrierte Entladung",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Mana-Kosten": "6 (7)",
        "Gegenstand": "Spruchrollen (offensiv)",
        "Angriffstyp": "Zauber",
        "Angriff": "In,Ch (+0)",
        "Schaden": "Wi,Ch (+0)",
        "Finaler Wirkbonus:": "+100%",
        "Verfuegbar": {
            "Klingenmagier/Illusionist": {"level": "26", "rang": "Basisfertigkeit"},
            "Magier/Arkanist": {"level": "29", "rang": "Basisfertigkeit"}
        }
    },
    "Gabe: Krähenfüße": {
        "Name": "Gabe: Krähenfüße",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Alle Mitstreiter auf einer Position",
        "Max. betroffene Helden": "+100%",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "-",
        "Verfuegbar": {"Dieb/Meister der Flucht": {"level": "26", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Lebende Zielscheibe": {
        "Name": "Gabe: Lebende Zielscheibe",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "-",
        "Verfuegbar": {"Gaukler/Messerwerfer": {"level": "26", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Magische Einheitstheorie": {
        "Name": "Gabe: Magische Einheitstheorie",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+1 +20% der Heldenstufe",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "-",
        "Verfuegbar": {"Gelehrter/Meister des magischen Flusses": {"level": "23", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Manabombe": {
        "Name": "Gabe: Manabombe",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner einer Position",
        "Max. betroffene Gegner": "+5",
        "Mana-Kosten": "-",
        "Gegenstand": "Manatrank",
        "Angriffstyp": "Explosion",
        "Angriff": "Wa,In",
        "Schaden": "In,Wi",
        "Verfuegbar": {"Dieb/Energiedieb": {"level": "26", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Manaraub": {
        "Name": "Gabe: Manaraub",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+7",
        "Mana-Kosten": "7 (8)",
        "Gegenstand": "-",
        "Angriffstyp": "Zauber",
        "Angriff": "Wa,In (+0)",
        "Schaden": "Wi,Ko (+0)",
        "Verfuegbar": {"Dieb/Energiedieb": {"level": "23", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Meister aller Wurfwaffen": {
        "Name": "Gabe: Meister aller Wurfwaffen",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "-",
        "Verfuegbar": {"Barbar/Axtwerfer": {"level": "26", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Meister der Jagd": {
        "Name": "Gabe: Meister der Jagd",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "2 (3)",
        "Gegenstand": "-",
        "Verfuegbar": {"Jäger/Wildhüter": {"level": "23", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Meister der Stürme": {
        "Name": "Gabe: Meister der Stürme",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "-",
        "Verfuegbar": {"Schamane/Herr der Natur": {"level": "26", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Meister der Technik": {
        "Name": "Gabe: Meister der Technik",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+2 +13% der Heldenstufe",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "-",
        "Verfuegbar": {"Gelehrter/Technikus": {"level": "26", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Meister des Ringkampfes": {
        "Name": "Gabe: Meister des Ringkampfes",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "2 (3)",
        "Gegenstand": "-",
        "Verfuegbar": {"Gladiator/Meister der Arena": {"level": "23", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Meister des Schießpulvers": {
        "Name": "Gabe: Meister des Schießpulvers",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "4 (5)",
        "Gegenstand": "-",
        "Verfuegbar": {"Schütze/Herr über das Schießpulver": {"level": "23", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Meister des geknüpften Strickes": {
        "Name": "Gabe: Meister des geknüpften Strickes",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Selbst",
        "Mana-Kosten": "-",
        "Gegenstand": "-",
        "Verfuegbar": {"Gladiator/Meister der Arena": {"level": "29", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Meisterhafte Tarnung": {
        "Name": "Gabe: Meisterhafte Tarnung",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "2 (3)",
        "Gegenstand": "-",
        "Verfuegbar": {"Dieb/Meister der Flucht": {"level": "29", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Meisterliche Präzision": {
        "Name": "Gabe: Meisterliche Präzision",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Selbst",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "-",
        "Verfuegbar": {"Mönch/Bote des Lichtes": {"level": "26", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Meisterwurf": {
        "Name": "Gabe: Meisterwurf",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "Wurfwaffe",
        "Angriffstyp": "Fernkampf",
        "Angriff": "Ge,Sn (+0)",
        "Schaden": "St,Wa (+0)",
        "Finaler Wirkbonus:": "-25%",
        "Verfuegbar": {
            "Barbar/Axtwerfer": {"level": "23", "rang": "Basisfertigkeit"},
            "Gaukler/Messerwerfer": {"level": "23", "rang": "Basisfertigkeit"}
        }
    },
    "Gabe: Mut zur Lücke": {
        "Name": "Gabe: Mut zur Lücke",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+1 +13% der Heldenstufe",
        "Mana-Kosten": "4 (5)",
        "Gegenstand": "-",
        "Angriffstyp": "Hinterhalt",
        "Angriff": "Ge,Ch",
        "Verfuegbar": {"Barde/Schlachtensänger": {"level": "29", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Nachklingende Verse": {
        "Name": "Gabe: Nachklingende Verse",
        "Typ": "Verbesserung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+100%",
        "Mana-Kosten": "9 (10)",
        "Gegenstand": "Liedtext des Mutes",
        "Verfuegbar": {"Barde/Troubadour": {"level": "29", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Phantasmagorie": {
        "Name": "Gabe: Phantasmagorie",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+7",
        "Mana-Kosten": "4 (5)",
        "Gegenstand": "Utensilien der Ablenkung",
        "Angriffstyp": "Zauber",
        "Angriff": "Wi,Ch (+0)",
        "Schaden": "Ch,In (-50%)",
        "Verfuegbar": {"Barde/Scharlatan": {"level": "26", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Physikalisches Verständnis des Kampfes": {
        "Name": "Gabe: Physikalisches Verständnis des Kampfes",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+2 +20% der Heldenstufe",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "-",
        "Verfuegbar": {"Gelehrter/Studikus": {"level": "29", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Positive Energie": {
        "Name": "Gabe: Positive Energie",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Selbst",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "-",
        "Verfuegbar": {"Mönch/Ordensbruder": {"level": "29", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Primitive Waffen": {
        "Name": "Gabe: Primitive Waffen",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "-",
        "Verfuegbar": {"Gestaltwandler/Schrecken aus dem Kargashmassiv": {"level": "26", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Rachegeist": {
        "Name": "Gabe: Rachegeist",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "-",
        "Verfuegbar": {"Mönch/Stimme der Nacht": {"level": "26", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Rashons Schlummer": {
        "Name": "Gabe: Rashons Schlummer",
        "Typ": "Verbesserung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Mitstreiter auf einer Position",
        "Max. betroffene Helden": "+3",
        "Mana-Kosten": "7 (8)",
        "Gegenstand": "-",
        "Verfuegbar": {"Priester/Heiliger Diener": {"level": "23", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Rauchbombe werfen": {
        "Name": "Gabe: Rauchbombe werfen",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner einer Position",
        "Max. betroffene Gegner": "+100%",
        "Mana-Kosten": "-",
        "Gegenstand": "Schießpulver",
        "Angriffstyp": "Explosion",
        "Angriff": "Wi,Ge",
        "Verfuegbar": {
            "Dieb/Meuchler in den Schatten": {"level": "26", "rang": "Basisfertigkeit"},
            "Mönch/Stimme der Nacht": {"level": "29", "rang": "Basisfertigkeit"}
        }
    },
    "Gabe: Respekteinflößend": {
        "Name": "Gabe: Respekteinflößend",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+34% der Heldenstufe",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "-",
        "Angriffstyp": "Sozial",
        "Angriff": "St,Ko",
        "Verfuegbar": {"Barbar/Streiter des Barbroxu": {"level": "29", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Ritual des Phönix": {
        "Name": "Gabe: Ritual des Phönix",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Alle Mitstreiter auf einer Position",
        "Max. betroffene Helden": "+6",
        "Mana-Kosten": "5 (6)",
        "Gegenstand": "-",
        "Verfuegbar": {"Magier/Zauberer des Feuers": {"level": "29", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Rituale im Mondschein": {
        "Name": "Gabe: Rituale im Mondschein",
        "Typ": "Verbesserung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+100%",
        "Mana-Kosten": "10 (12)",
        "Gegenstand": "-",
        "Verfuegbar": {"Gestaltwandler/Sucher der wahren Form": {"level": "26", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Routinierte Vorbereitung": {
        "Name": "Gabe: Routinierte Vorbereitung",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "7 (8)",
        "Gegenstand": "-",
        "Verfuegbar": {"Jäger/Wächter des Waldes": {"level": "26", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Schall und Rauch": {
        "Name": "Gabe: Schall und Rauch",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner einer Position",
        "Max. betroffene Gegner": "+4",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "-",
        "Angriffstyp": "Explosion",
        "Angriff": "In,Wa",
        "Schaden": "Ge,In",
        "Verfuegbar": {"Gelehrter/Technikus": {"level": "23", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Schaukämpfer": {
        "Name": "Gabe: Schaukämpfer",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+20% der Heldenstufe",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "-",
        "Verfuegbar": {"Gladiator/Liebling der Massen": {"level": "29", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Schild und Schwert": {
        "Name": "Gabe: Schild und Schwert",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "Schwert",
        "Verfuegbar": {"Ritter/Sturmbrecher": {"level": "26", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Schulmeister": {
        "Name": "Gabe: Schulmeister",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+100%",
        "Mana-Kosten": "-",
        "Gegenstand": "-",
        "Verfuegbar": {"Gelehrter/Pädagoge": {"level": "23", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Schuss des Cosinus": {
        "Name": "Gabe: Schuss des Cosinus",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+4",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "Leichte Fernkampfwaffen",
        "Angriffstyp": "Fernkampf",
        "Angriff": "In,Wa (+0)",
        "Schaden": "Ge,In (+0)",
        "Finaler Wirkbonus:": "-10%",
        "Verfuegbar": {"Gelehrter/Studikus": {"level": "26", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Schwarzer Pfeil": {
        "Name": "Gabe: Schwarzer Pfeil",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+1",
        "Mana-Kosten": "2 (3)",
        "Gegenstand": "Leichte Fernkampfwaffen",
        "Angriffstyp": "Fernkampf",
        "Angriff": "Sn,Ge (+0)",
        "Schaden": "Ge,Wi (+0)",
        "Finaler Wirkbonus:": "+15%",
        "Verfuegbar": {"Ritter/Husar": {"level": "29", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Schwerttanz": {
        "Name": "Gabe: Schwerttanz",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "Massenangriffswaffen",
        "Angriffstyp": "Nahkampf",
        "Angriff": "Sn,Wi (+0)",
        "Schaden": "In,St (+0)",
        "Finaler Wirkbonus:": "-8%",
        "Verfuegbar": {"Klingenmagier/Klingenmeister": {"level": "23", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Schrecken der Sünder": {
        "Name": "Gabe: Schrecken der Sünder",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": " Aspekt der Strafe ",
        "Verfuegbar": {"Priester/Vollstrecker des Tempels": {"level": "23", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Segen des Demosan": {
        "Name": "Gabe: Segen des Demosan",
        "Typ": "Verbesserung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Mitstreiter auf einer Position",
        "Max. betroffene Helden": "+1 +17% der Heldenstufe",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "-",
        "Verfuegbar": {
            "Paladin/Verteidiger des Glaubens": {"level": "29", "rang": "Basisfertigkeit"},
            "Priester/ Zelot": {"level": "23", "rang": "Basisfertigkeit"}
        }
    },
    "Gabe: Segen des Noran": {
        "Name": "Gabe: Segen des Noran",
        "Typ": "Verbesserung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Mitstreiter auf einer Position",
        "Max. betroffene Helden": "+1 +17% der Heldenstufe",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "-",
        "Verfuegbar": {
            "Paladin/Beschützer der Schwachen": {"level": "29", "rang": "Basisfertigkeit"},
            "Priester/ Zelot": {"level": "23", "rang": "Basisfertigkeit"},
        }
    },
    "Gabe: Selbstversuche": {
        "Name": "Gabe: Selbstversuche",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "5 (6)",
        "Gegenstand": "Gebräue der Gesundheit",
        "Verfuegbar": {"Quacksalber/Alchemist": {"level": "29", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Sprengstoff": {
        "Name": "Gabe: Sprengstoff",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner einer Position",
        "Max. betroffene Gegner": "+4",
        "Mana-Kosten": "-",
        "Gegenstand": "Instabile Gebräue",
        "Angriffstyp": "Explosion",
        "Angriff": "In,Ge",
        "Schaden": "Ge,Wa",
        "Verfuegbar": {"Quacksalber/Alchemist": {"level": "23", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Standhaftigkeit": {
        "Name": "Gabe: Standhaftigkeit",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "-",
        "Verfuegbar": {
            "Barbar/Hüter der Herden": {"level": "23", "rang": "Basisfertigkeit"},
            "Gladiator/Liebling der Massen": {"level": "26", "rang": "Basisfertigkeit"}
        }
    },
    "Gabe: Standpauke": {
        "Name": "Gabe: Standpauke",
        "Typ": "Verbesserung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Mitstreiter auf einer Position",
        "Max. betroffene Helden": "+100%",
        "Mana-Kosten": "10 (12)",
        "Gegenstand": "Buch",
        "Verfuegbar": {"Gelehrter/Pädagoge": {"level": "29", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Straßenkämpfer": {
        "Name": "Gabe: Straßenkämpfer",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "2 (3)",
        "Gegenstand": "Nahkampfwaffen",
        "Verfuegbar": {"Gaukler/Harlekin": {"level": "23", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Tanz der Nacht": {
        "Name": "Gabe: Tanz der Nacht",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+50% der Heldenstufe",
        "Mana-Kosten": "4 (5)",
        "Gegenstand": "Köpfe für Seilklingen",
        "Angriffstyp": "Naturgewalt",
        "Angriff": "Wi,Sn",
        "Verfuegbar": {"Mönch/Stimme der Nacht": {"level": "23", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Tarnen und Täuschen": {
        "Name": "Gabe: Tarnen und Täuschen",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+2 +50% des Fertigkeitenrangs",
        "Mana-Kosten": "-",
        "Gegenstand": "Schießpulver",
        "Angriffstyp": "Explosion",
        "Angriff": "Ge,Wa (+0)",
        "Schaden": "Ge,Wa (-50%)",
        "Verfuegbar": {
            "Dieb/König der Einbrecher": {"level": "29", "rang": "Basisfertigkeit"},
            "Hasardeur/Meister der Intrige und Tücke": {"level": "23", "rang": "Basisfertigkeit"}
        }
    },
    "Gabe: Teleport": {
        "Name": "Gabe: Teleport",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+100%",
        "Mana-Kosten": "10 (12)",
        "Gegenstand": "-",
        "Angriffstyp": "Hinterhalt",
        "Angriff": "In,Sn",
        "Verfuegbar": {"Klingenmagier/Illusionist": {"level": "23", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Trickschuss": {
        "Name": "Gabe: Trickschuss",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Mana-Kosten": "-",
        "Gegenstand": "Leichte Fernkampfwaffen",
        "Angriffstyp": "Fernkampf",
        "Angriff": "Ge,In",
        "Verfuegbar": {
            "Dieb/Meister der Flucht": {"level": "23", "rang": "Basisfertigkeit"},
            "Schütze/Meister der Präzision": {"level": "26", "rang": "Basisfertigkeit"}
        }
    },
    "Gabe: Tödlicher Eisstrahl": {
        "Name": "Gabe: Tödlicher Eisstrahl",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner einer Position",
        "Mana-Kosten": "13 (15)",
        "Gegenstand": "Eiskristalle",
        "Angriffstyp": "Zauber",
        "Angriff": "In,Wi",
        "Schaden": "Wi,Ko",
        "Verfuegbar": {"Magier/Zauberer des Eises": {"level": "29", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Umfassendes Wissen": {
        "Name": "Gabe: Umfassendes Wissen",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+3 +17% der Heldenstufe",
        "Mana-Kosten": "4 (5)",
        "Gegenstand": "-",
        "Verfuegbar": {"Magier/Arkanist": {"level": "23", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Verkörperung von Tradition": {
        "Name": "Gabe: Verkörperung von Tradition",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+100%",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "-",
        "Angriffstyp": "Sozial",
        "Angriff": "Ch,Wi",
        "Verfuegbar": {"Schamane/Hüter der alten Wege": {"level": "29", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Verlorene Kunst": {
        "Name": "Gabe: Verlorene Kunst",
        "Typ": "Verbesserung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Eigene Gruppe",
        "Mana-Kosten": "9 (10)",
        "Gegenstand": "Kräutersude",
        "Verfuegbar": {"Schamane/Hüter der alten Wege": {"level": "26", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Wegducken": {
        "Name": "Gabe: Wegducken",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "-",
        "Verfuegbar": {
            "Dieb/König der Einbrecher": {"level": "26", "rang": "Basisfertigkeit"},
            "Gaukler/Zirkusartist": {"level": "29", "rang": "Basisfertigkeit"}
        }
    },
    "Gabe: Wilde Jagd": {
        "Name": "Gabe: Wilde Jagd",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "Massenangriffswaffen",
        "Angriffstyp": "Nahkampf",
        "Angriff": "Sn,Ge (+0)",
        "Schaden": "St,Wa (+0)",
        "Finaler Wirkbonus:": "-8%",
        "Verfuegbar": {"Jäger/Wildhüter": {"level": "26", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Zeitfrost": {
        "Name": "Gabe: Zeitfrost",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Alle Mitstreiter auf einer Position",
        "Max. betroffene Helden": "+3 +8% der Heldenstufe",
        "Mana-Kosten": "8 (9)",
        "Gegenstand": "-",
        "Verfuegbar": {"Magier/Zauberer des Eises": {"level": "23", "rang": "Basisfertigkeit"}}
    },
    "Gabe: Überlebenskünstler": {
        "Name": "Gabe: Überlebenskünstler",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+20% der Heldenstufe",
        "Mana-Kosten": "5 (6)",
        "Gegenstand": "-",
        "Verfuegbar": {
            "Gestaltwandler/Schrecken aus dem Kargashmassiv": {"level": "29", "rang": "Basisfertigkeit"},
            "Jäger/Nebelwandler": {"level": "23", "rang": "Basisfertigkeit"},
            "Schamane/Herr der Natur": {"level": "29", "rang": "Basisfertigkeit"}
        }
    },
    "Gabe: Überspannen": {
        "Name": "Gabe: Überspannen",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Selbst",
        "Mana-Kosten": "4 (5)",
        "Gegenstand": "Schwere Fernkampfwaffen",
        "Verfuegbar": {"Schütze/Spezialist für große Kaliber": {"level": "29", "rang": "Basisfertigkeit"}}
    },
    "Gaukelei": {
        "Name": "Gaukelei",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+100%",
        "Mana-Kosten": "4 (5)",
        "Gegenstand": "Utensilien der Unterhaltung",
        "Verfuegbar": {
            "Barde": {"level": 8, "rang": "Nebenfertigkeit"},
            "Gaukler": {"level": 4, "rang": "Basisfertigkeit"}
        }
    },
    "Gebiet sichern": {
        "Name": "Gebiet sichern",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+2 +25% der Heldenstufe",
        "Mana-Kosten": "0 (1)",
        "Gegenstand": "-",
        "Angriffstyp": "Falle entschärfen",
        "Angriff": "Ge,Wa",
        "Schaden": "Sn,Wa",
        "Verfuegbar": {"Dieb": {"level": 11, "rang": "Basisfertigkeit"}}
    },
    "Gedankenschild": {
        "Name": "Gedankenschild",
        "Typ": "Verbesserung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+1 +17% der Heldenstufe",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "Elfensteine (Gedankenschild)",
        "Verfuegbar": {
            "Mag-Mor-Elf": {"level": 13, "rang": "Nebenfertigkeit"},
            "Tirem-Ag-Elf": {"level": 11, "rang": "Nebenfertigkeit"}
        }
    },
    "Gedankenschleier": {
        "Name": "Gedankenschleier",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+1",
        "Mana-Kosten": "2 (3)",
        "Gegenstand": "Utensilien der Ablenkung",
        "Angriffstyp": "Zauber",
        "Angriff": "Ch,Wi",
        "Schaden": "Wi,In",
        "Verfuegbar": {"Barde": {"level": 10, "rang": "Nebenfertigkeit"}}
    },
    "Gefahreninstinkt": {
        "Name": "Gefahreninstinkt",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Selbst",
        "Mana-Kosten": "2 (3)",
        "Gegenstand": "-",
        "Verfuegbar": {"Rashani": {"level": 15, "rang": "Nebenfertigkeit"}}
    },
    "Geist der Meere": {
        "Name": "Geist der Meere",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+2",
        "Mana-Kosten": "8 (9)",
        "Gegenstand": "-",
        "Angriffstyp": "Naturgewalt",
        "Angriff": "Wa,In",
        "Schaden": "Wi,Sn",
        "Verfuegbar": {"Mag-Mor-Elf": {"level": 33, "rang": "Nebenfertigkeit"}}
    },
    "Geisterflug": {
        "Name": "Geisterflug",
        "Typ": "Verbesserung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+1 +17% der Heldenstufe",
        "Mana-Kosten": "-",
        "Gegenstand": "-",
        "Verfuegbar": {"Schamane": {"level": 16, "rang": "Klassenfremde Fertigkeit"}}
    },
    "Geisterhafte Wut": {
        "Name": "Geisterhafte Wut",
        "Typ": "Verbesserung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+1 +17% der Heldenstufe",
        "Mana-Kosten": "-",
        "Gegenstand": "-",
        "Verfuegbar": {"Schamane": {"level": 16, "rang": "Klassenfremde Fertigkeit"}}
    },
    "Gemeinsames Gebet": {
        "Name": "Gemeinsames Gebet",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+5",
        "Mana-Kosten": "-",
        "Gegenstand": "Statuette",
        "Verfuegbar": {"Priester": {"level": 11, "rang": "Nebenfertigkeit"}}
    },
    "Gemeinsames Rauchen": {
        "Name": "Gemeinsames Rauchen",
        "Typ": "Verbesserung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+1 +20% der Heldenstufe",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "Pfeifen",
        "Verfuegbar": {"Rashani": {"level": 11, "rang": "Nebenfertigkeit"}}
    },
    "Gerechter Zorn": {
        "Name": "Gerechter Zorn",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "5 (6)",
        "Gegenstand": "-",
        "Verfuegbar": {
            "Paladin": {"level": 12, "rang": "Nebenfertigkeit"},
            "Priester": {"level": 9, "rang": "Nebenfertigkeit"}
        }
    },
    "Gesang des Mutes": {
        "Name": "Gesang des Mutes",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Alle Mitstreiter auf einer Position",
        "Max. betroffene Helden": "+2 +17% der Heldenstufe",
        "Mana-Kosten": "2 (3)",
        "Gegenstand": "Liedtext des Mutes",
        "Verfuegbar": {"Barde": {"level": 1, "rang": "Basisfertigkeit"}}
    },
    "Gesang des Spotts": {
        "Name": "Gesang des Spotts",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner einer Position",
        "Max. betroffene Gegner": "+2 +20% der Heldenstufe",
        "Mana-Kosten": "2 (3)",
        "Gegenstand": "Liedtext des Spotts",
        "Angriffstyp": "Sozial",
        "Angriff": "Ch,Wi",
        "Verfuegbar": {"Barde": {"level": 6, "rang": "Basisfertigkeit"}}
    },
    "Geschichten erzählen": {
        "Name": "Geschichten erzählen",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Alle Mitstreiter auf einer Position",
        "Max. betroffene Helden": "+100%",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "-",
        "Verfuegbar": {
            "Grenzländer": {"level": 7, "rang": "Nebenfertigkeit"},
            "Halbling": {"level": 8, "rang": "Nebenfertigkeit"}
        }
    },
    "Geschrei des Affen": {
        "Name": "Geschrei des Affen",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner einer Position",
        "Max. betroffene Gegner": "+2 +25% der Heldenstufe",
        "Mana-Kosten": "2 (3)",
        "Gegenstand": "-",
        "Angriffstyp": "Sozial",
        "Angriff": "Ch,Ko",
        "Verfuegbar": {"Gestaltwandler": {"level": 8, "rang": "Klassenfremde Fertigkeit"}}
    },
    "Geschulter Blick": {
        "Name": "Geschulter Blick",
        "Typ": "Verbesserung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "4 (5)",
        "Gegenstand": "Utensilien der Entrückung (Gladiator)",
        "Verfuegbar": {"Gladiator": {"level": 19, "rang": "Klassenfremde Fertigkeit"}}
    },
    "Gesundheitstipps": {
        "Name": "Gesundheitstipps",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+2 +10% der Heldenstufe",
        "Mana-Kosten": "2 (3)",
        "Gegenstand": "-",
        "Verfuegbar": {"Quacksalber": {"level": 9, "rang": "Nebenfertigkeit"}}
    },
    "Giftdrüsen": {
        "Name": "Giftdrüsen",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "-",
        "Verfuegbar": {"Gestaltwandler": {"level": 7, "rang": "Nebenfertigkeit"}}
    },
    "Giftschuss": {
        "Name": "Giftschuss",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "0 (1)",
        "Gegenstand": "-",
        "Verfuegbar": {"Schütze": {"level": 9, "rang": "Basisfertigkeit"}}
    },
    "Gossenkämpfer": {
        "Name": "Gossenkämpfer",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+2 +17% der Heldenstufe",
        "Mana-Kosten": "2 (3)",
        "Gegenstand": "-",
        "Verfuegbar": {"Gladiator": {"level": 14, "rang": "Basisfertigkeit"}}
    },
    "Göttliche Bestrafung": {
        "Name": "Göttliche Bestrafung",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "3 +10% der Heldenstufe",
        "Mana-Kosten": "9 (10)",
        "Gegenstand": "Aspekt der Strafe",
        "Angriffstyp": "Zauber",
        "Angriff": "Ch,Wi (+0)",
        "Schaden": "Wi,In (-45%)",
        "Verfuegbar": {"Priester/Geweihter des Akbeth": {"level": "26", "rang": "Basisfertigkeit"}}
    },
    "Große Runenmagie": {
        "Name": "Große Runenmagie",
        "Typ": "Verbesserung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+1 +25% der Heldenstufe",
        "Mana-Kosten": "4 (5)",
        "Gegenstand": "Runengegenstände",
        "Verfuegbar": {"Bergzwerg": {"level": 16, "rang": "Nebenfertigkeit"}}
    },
    "Große Sphäre der Elemente": {
        "Name": "Große Sphäre der Elemente",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+2 +34% der Heldenstufe",
        "Mana-Kosten": "6 (7)",
        "Gegenstand": "-",
        "Verfuegbar": {"Paladin": {"level": 16, "rang": "Nebenfertigkeit"}}
    },
    "Große Sphäre der Erholung": {
        "Name": "Große Sphäre der Erholung",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+3 +17% der Heldenstufe",
        "Mana-Kosten": "6 (7)",
        "Gegenstand": "-",
        "Verfuegbar": {"Paladin": {"level": 14, "rang": "Nebenfertigkeit"}}
    },
    "Große Sphäre der Heilung": {
        "Name": "Große Sphäre der Heilung",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+6 +25% der Heldenstufe",
        "Mana-Kosten": "6 (7)",
        "Gegenstand": "-",
        "Verfuegbar": {"Paladin": {"level": 13, "rang": "Nebenfertigkeit"}}
    },
    "Große Sphäre der Macht": {
        "Name": "Große Sphäre der Macht",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+1 +25% der Heldenstufe",
        "Mana-Kosten": "6 (7)",
        "Gegenstand": "-",
        "Verfuegbar": {"Paladin": {"level": 15, "rang": "Nebenfertigkeit"}}
    },
    "Große Sphäre der Zuversicht": {
        "Name": "Große Sphäre der Zuversicht",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+3 +34% der Heldenstufe",
        "Mana-Kosten": "6 (7)",
        "Gegenstand": "-",
        "Verfuegbar": {"Paladin": {"level": 12, "rang": "Nebenfertigkeit"}}
    },
    "Große Sphäre des Schutzes": {
        "Name": "Große Sphäre des Schutzes",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+2 +34% der Heldenstufe",
        "Mana-Kosten": "6 (7)",
        "Gegenstand": "-",
        "Verfuegbar": {"Paladin": {"level": 11, "rang": "Nebenfertigkeit"}}
    },
    "Großer Exorzismus": {
        "Name": "Großer Exorzismus",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+5 +11% der Heldenstufe",
        "Mana-Kosten": "4 (5)",
        "Gegenstand": "Heilige Utensilien der Vergeltung",
        "Angriffstyp": "Zauber",
        "Angriff": "Wa,Wi",
        "Schaden": "Wi,Ch",
        "Verfuegbar": {"Priester": {"level": 11, "rang": "Nebenfertigkeit"}}
    },
    "Großer Gesang des Mutes": {
        "Name": "Großer Gesang des Mutes",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+5 +4% der Heldenstufe",
        "Mana-Kosten": "4 (5)",
        "Gegenstand": "Liedtext des Mutes",
        "Verfuegbar": {"Barde": {"level": 16, "rang": "Basisfertigkeit"}}
    },
    "Großer Gesang des Spotts": {
        "Name": "Großer Gesang des Spotts",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+2 +20% der Heldenstufe",
        "Mana-Kosten": "5 (6)",
        "Gegenstand": "Liedtext des Spotts",
        "Angriffstyp": "Sozial",
        "Angriff": "Ch,Wi",
        "Verfuegbar": {"Barde": {"level": 15, "rang": "Basisfertigkeit"}}
    },
    "Großer Prankenhieb": {
        "Name": "Großer Prankenhieb",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner einer Position",
        "Max. betroffene Gegner": "+2 +12% der Heldenstufe",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "-",
        "Angriffstyp": "Nahkampf",
        "Angriff": "Ge,Sn (+0)",
        "Schaden": "St,Ko (+0)",
        "Finaler Wirkbonus:": "-17%",
        "Verfuegbar": {"Gestaltwandler": {"level": 16, "rang": "Klassenfremde Fertigkeit"}}
    },
    "Großer Segen": {
        "Name": "Großer Segen",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+3 +13% der Heldenstufe",
        "Mana-Kosten": "2 (3)",
        "Gegenstand": "Heilige Utensilien der Gnade",
        "Verfuegbar": {"Priester": {"level": 13, "rang": "Nebenfertigkeit"}}
    },
    "Gunst der Sterne": {
        "Name": "Gunst der Sterne",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "2 (3)",
        "Gegenstand": "-",
        "Verfuegbar": {
            "Barde": {"level": 19, "rang": "Klassenfremde Fertigkeit"},
            "Gaukler": {"level": 16, "rang": "Nebenfertigkeit"},
            "Gelehrter": {"level": 18, "rang": "Klassenfremde Fertigkeit"},
            "Gestaltwandler": {"level": 13, "rang": "Nebenfertigkeit"},
            "Jäger": {"level": 20, "rang": "Nebenfertigkeit"},
            "Klingenmagier": {"level": 20, "rang": "Nebenfertigkeit"},
            "Magier": {"level": 19, "rang": "Nebenfertigkeit"},
            "Paladin": {"level": 22, "rang": "Nebenfertigkeit"},
            "Priester": {"level": 19, "rang": "Nebenfertigkeit"},
            "Quacksalber": {"level": 21, "rang": "Klassenfremde Fertigkeit"},
            "Schamane": {"level": 18, "rang": "Basisfertigkeit"},
            "Schütze": {"level": 13, "rang": "Nebenfertigkeit"}
        }
    },
    "Guter Ruf": {
        "Name": "Guter Ruf",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+1 +20% der Heldenstufe",
        "Mana-Kosten": "0 (1)",
        "Gegenstand": "Statussymbol",
        "Angriffstyp": "Sozial",
        "Angriff": "Ch,Ko",
        "Verfuegbar": {"Hasardeur": {"level": 5, "rang": "Basisfertigkeit"}}
    },
    "Göttliche Heilung": {
        "Name": "Göttliche Heilung",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Alle Mitstreiter auf einer Position",
        "Max. betroffene Helden": "+25% der Heldenstufe",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "-",
        "Verfuegbar": {"Priester": {"level": 14, "rang": "Basisfertigkeit"}}
    },
    "Göttliche Stärkung": {
        "Name": "Göttliche Stärkung",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "2 (3)",
        "Gegenstand": "Heilige Utensilien der Gnade",
        "Verfuegbar": {"Priester": {"level": 5, "rang": "Basisfertigkeit"}}
    },
    "Günstige Gelegenheit": {
        "Name": "Günstige Gelegenheit",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Selbst",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "Nahkampfwaffen",
        "Verfuegbar": {"Dieb": {"level": 13, "rang": "Basisfertigkeit"}}
    },
    "Hagelkorn": {
        "Name": "Hagelkorn",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+1",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "Eiskristalle",
        "Angriffstyp": "Naturgewalt",
        "Angriff": "Wi,In",
        "Schaden": "St,Ch",
        "Verfuegbar": {"Schamane": {"level": 3, "rang": "Basisfertigkeit"}}
    },
    "Hagelschlag": {
        "Name": "Hagelschlag",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner einer Position",
        "Max. betroffene Gegner": "+3 +9% der Heldenstufe",
        "Mana-Kosten": "6 (7)",
        "Gegenstand": "Eiskristalle",
        "Angriffstyp": "Naturgewalt",
        "Angriff": "Wi,Ch",
        "Schaden": "Ko,In",
        "Verfuegbar": {"Schamane": {"level": 12, "rang": "Basisfertigkeit"}}
    },
    "Hart wie die Eiche. Biegsam wie der Bambus.": {
        "Name": "Hart wie die Eiche. Biegsam wie der Bambus.",
        "Typ": "Verbesserung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "4 (5)",
        "Gegenstand": "Utensilien des rituellen Kampfes",
        "Verfuegbar": {"Mönch": {"level": 15, "rang": "Klassenfremde Fertigkeit"}}
    },
    "Harte Schale, harter Kern!": {
        "Name": "Harte Schale, harter Kern!",
        "Typ": "Verbesserung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "4 (5)",
        "Gegenstand": "Utensilien des rituellen Kampfes",
        "Verfuegbar": {"Mönch": {"level": 15, "rang": "Klassenfremde Fertigkeit"}}
    },
    "Hauptmann": {
        "Name": "Hauptmann",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Alle Mitstreiter auf einer Position",
        "Max. betroffene Helden": "+2 +13% der Heldenstufe",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "-",
        "Verfuegbar": {"Ritter": {"level": 8, "rang": "Basisfertigkeit"}}
    },
    "Heilkräuter anwenden": {
        "Name": "Heilkräuter anwenden",
        "Typ": "Verbesserung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Mitstreiter auf einer Position",
        "Max. betroffene Helden": "+1 +13% der Heldenstufe",
        "Mana-Kosten": "5 (6)",
        "Gegenstand": "Heilkräuter",
        "Verfuegbar": {
            "Gaukler": {"level": 15, "rang": "Nebenfertigkeit"},
            "Gelehrter": {"level": 20, "rang": "Klassenfremde Fertigkeit"},
            "Jäger": {"level": 11, "rang": "Basisfertigkeit"},
            "Mönch": {"level": 11, "rang": "Nebenfertigkeit"},
            "Quacksalber": {"level": 11, "rang": "Basisfertigkeit"}
        }
    },
    "Heraldik": {
        "Name": "Heraldik",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "0 (1)",
        "Gegenstand": "Wappen",
        "Verfuegbar": {"Grenzländer": {"level": 1, "rang": "Nebenfertigkeit"}}
    },
    "Hiebwaffen": {
        "Name": "Hiebwaffen",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Ein Gegner",
        "Mana-Kosten": "-",
        "Gegenstand": "Hiebwaffen",
        "Angriffstyp": "Nahkampf",
        "Angriff": "Ge,St",
        "Parade": "Ge,St",
        "Schaden": "St,Ko",
        "Verfuegbar": {
            "Barbar": {"level": 5, "rang": "Basisfertigkeit"},
            "Gladiator": {"level": 2, "rang": "Nebenfertigkeit"},
            "Paladin": {"level": 1, "rang": "Basisfertigkeit"},
            "Priester": {"level": 1, "rang": "Basisfertigkeit"},
            "Ritter": {"level": 2, "rang": "Basisfertigkeit"}
        }
    },
    "Himmlische Strafe": {
        "Name": "Himmlische Strafe",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner einer Position",
        "Max. betroffene Gegner": "1 +13% der Heldenstufe",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "Aspekt der Strafe",
        "Angriffstyp": "Zauber",
        "Angriff": "Ch,Wi (+0)",
        "Schaden": "In,Ch (-20%)",
        "Verfuegbar": {"Priester": {"level": 4, "rang": "Basisfertigkeit"}}
    },
    "Hinterhalt entdecken": {
        "Name": "Hinterhalt entdecken",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "0 (1)",
        "Gegenstand": "-",
        "Verfuegbar": {
            "Dieb": {"level": 3, "rang": "Nebenfertigkeit"},
            "Gelehrter": {"level": 13, "rang": "Klassenfremde Fertigkeit"},
            "Hasardeur": {"level": 3, "rang": "Basisfertigkeit"},
            "Jäger": {"level": 3, "rang": "Nebenfertigkeit"},
            "Schamane": {"level": 9, "rang": "Klassenfremde Fertigkeit"},
            "Schütze": {"level": 4, "rang": "Nebenfertigkeit"}
        }
    },
    "Hinterhalt": {
        "Name": "Hinterhalt",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+100%",
        "Mana-Kosten": "-",
        "Gegenstand": "-",
        "Angriffstyp": "Hinterhalt",
        "Angriff": "Wa,Sn",
        "Verfuegbar": {
            "Barde": {"level": 9, "rang": "Klassenfremde Fertigkeit"},
            "Dieb": {"level": 3, "rang": "Nebenfertigkeit"},
            "Gaukler": {"level": 7, "rang": "Klassenfremde Fertigkeit"},
            "Jäger": {"level": 4, "rang": "Nebenfertigkeit"},
            "Schamane": {"level": 11, "rang": "Nebenfertigkeit"},
            "Schütze": {"level": 12, "rang": "Klassenfremde Fertigkeit"}
        }
    },
    "Hinterhalt legen": {
        "Name": "Hinterhalt legen",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "2 +20% der Heldenstufe",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "-",
        "Fertigkeitenklasse": "Führung",
        "Verfuegbar": {
            "Jäger": {"level": 6, "rang": "Basisfertigkeit"},
        }
    },
    "Hinterhältiges Manöver": {
        "Name": "Hinterhältiges Manöver",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+100%",
        "Mana-Kosten": "-",
        "Gegenstand": "Fechtkunst",
        "Angriffstyp": "Hinterhalt",
        "Angriff": "Ge,Sn",
        "Verfuegbar": {"Hasardeur": {"level": 12, "rang": "Klassenfremde Fertigkeit"}}
    },
    "Hitzeresistenz": {
        "Name": "Hitzeresistenz",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Alle Mitstreiter auf einer Position",
        "Max. betroffene Helden": "+2 +17% der Heldenstufe",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "-",
        "Verfuegbar": {"Rashani": {"level": 6, "rang": "Nebenfertigkeit"}}
    },
    "Hoch die Tassen!": {
        "Name": "Hoch die Tassen!",
        "Typ": "Verbesserung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+1 +20% der Heldenstufe",
        "Mana-Kosten": "2 (3)",
        "Gegenstand": "Tränke",
        "Verfuegbar": {"Kerasi": {"level": 11, "rang": "Nebenfertigkeit"}}
    },
    "Illusion aktivieren": {
        "Name": "Illusion aktivieren",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+2 +34% der Heldenstufe",
        "Mana-Kosten": "-",
        "Gegenstand": "-",
        "Verfuegbar": {"Klingenmagier": {"level": 3, "rang": "Nebenfertigkeit"}}
    },
    "Illusion vorbereiten": {
        "Name": "Illusion vorbereiten",
        "Typ": "Ruft Helfer",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "26 (8)",
        "Gegenstand": "Bannfedern",
        "Verfuegbar": {"Klingenmagier": {"level": 3, "rang": "Basisfertigkeit"}}
    },
    "Imposante Gestalt": {
        "Name": "Imposante Gestalt",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner einer Position",
        "Max. betroffene Gegner": "+1 +10% der Heldenstufe",
        "Mana-Kosten": "0 (1)",
        "Gegenstand": "-",
        "Angriffstyp": "Sozial",
        "Angriff": "St,Ch",
        "Verfuegbar": {"Ritter": {"level": 7, "rang": "Basisfertigkeit"}}
    },
    "In sich Ruhend": {
        "Name": "In sich Ruhend",
        "Typ": "Verbesserung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "4 (5)",
        "Gegenstand": "Utensilien der Entrückung (Gladiator)",
        "Verfuegbar": {"Gladiator": {"level": 19, "rang": "Klassenfremde Fertigkeit"}}
    },
    "Innere Stärke finden": {
        "Name": "Innere Stärke finden",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "Konzentrationsübungen",
        "Verfuegbar": {"Mönch": {"level": 4, "rang": "Basisfertigkeit"}}
    },
    "Innere Stärke teilen": {
        "Name": "Innere Stärke teilen",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Alle Mitstreiter auf einer Position",
        "Max. betroffene Helden": "+34% der Heldenstufe",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "Konzentrationsübungen",
        "Verfuegbar": {"Mönch": {"level": 12, "rang": "Basisfertigkeit"}}
    },
    "Inneres Verständnis des Kampfes": {
        "Name": "Inneres Verständnis des Kampfes",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Selbst",
        "Mana-Kosten": "-",
        "Gegenstand": "-",
        "Verfuegbar": {"Gladiator": {"level": 19, "rang": "Nebenfertigkeit"}}
    },
    "Ins Schwarze": {
        "Name": "Ins Schwarze",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "Wurfwaffe",
        "Angriffstyp": "Fernkampf",
        "Angriff": "Sn,Ge",
        "Verfuegbar": {"Gaukler": {"level": 14, "rang": "Basisfertigkeit"}}
    },
    "Jähzorn": {
        "Name": "Jähzorn",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Selbst",
        "Mana-Kosten": "0 (1)",
        "Gegenstand": "-",
        "Verfuegbar": {"Dinturan": {"level": 6, "rang": "Nebenfertigkeit"}}
    },
    "Kalte Wut": {
        "Name": "Kalte Wut",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Selbst",
        "Mana-Kosten": "5 (6)",
        "Gegenstand": "-",
        "Verfuegbar": {"Barbar": {"level": 24, "rang": "Nebenfertigkeit"}}
    },
    "Kampfgebrüll": {
        "Name": "Kampfgebrüll",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner einer Position",
        "Max. betroffene Gegner": "+34% der Heldenstufe",
        "Mana-Kosten": "2 (3)",
        "Gegenstand": "-",
        "Angriffstyp": "Sozial",
        "Angriff": "St,Ch",
        "Verfuegbar": {"Barbar": {"level": 3, "rang": "Basisfertigkeit"}}
    },
    "Kampfritus": {
        "Name": "Kampfritus",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Selbst",
        "Mana-Kosten": "-",
        "Gegenstand": "-",
        "Verfuegbar": {"Mönch": {"level": 15, "rang": "Klassenfremde Fertigkeit"}}
    },
    "Katzensprung": {
        "Name": "Katzensprung",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Ein Gegner",
        "Mana-Kosten": "0 (1)",
        "Gegenstand": "-",
        "Angriffstyp": "Nahkampf",
        "Angriff": "Sn,Wa (+0)",
        "Schaden": "St,Wa (+0)",
        "Finaler Wirkbonus:": "+20%",
        "Verfuegbar": {"Gestaltwandler": {"level": 8, "rang": "Klassenfremde Fertigkeit"}}
    },
    "Kleine Runenmagie": {
        "Name": "Kleine Runenmagie",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "Runengegenstände",
        "Verfuegbar": {
            "Bergzwerg": {"level": 10, "rang": "Nebenfertigkeit"},
            "Hügelzwerg": {"level": 6, "rang": "Nebenfertigkeit"}
        }
    },
    "Kleine Sprengladung": {
        "Name": "Kleine Sprengladung",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Ein Gegner",
        "Mana-Kosten": "-",
        "Gegenstand": "Sprengsatz",
        "Angriffstyp": "Explosion",
        "Angriff": "Ge,In (-95%)",
        "Schaden": "In,Ge (+0)",
        "Finaler Wirkbonus:": "+100%",
        "Verfuegbar": {"Gnerk": {"level": 6, "rang": "Nebenfertigkeit"}}
    },
    "Kleiner Segen": {
        "Name": "Kleiner Segen",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Alle Mitstreiter auf einer Position",
        "Max. betroffene Helden": "+2 +10% der Heldenstufe",
        "Mana-Kosten": "0 (1)",
        "Gegenstand": "Heilige Utensilien der Gnade",
        "Verfuegbar": {"Priester": {"level": 2, "rang": "Basisfertigkeit"}}
    },
    "Klingenwirbel": {
        "Name": "Klingenwirbel",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+2 +25% der Heldenstufe",
        "Mana-Kosten": "0 (1)",
        "Gegenstand": "Köpfe für Seilklingen",
        "Angriffstyp": "Nahkampf",
        "Angriff": "Sn,Wa",
        "Verfuegbar": {"Mönch": {"level": 10, "rang": "Nebenfertigkeit"}}
    },
    "Kluge Ratschläge": {
        "Name": "Kluge Ratschläge",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Alle Mitstreiter auf einer Position",
        "Max. betroffene Helden": "+2 +17% der Heldenstufe",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "Buch",
        "Verfuegbar": {"Gelehrter": {"level": 2, "rang": "Basisfertigkeit"}}
    },
    "Kraft der Entrückung": {
        "Name": "Kraft der Entrückung",
        "Typ": "Verbesserung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+1 +17% der Heldenstufe",
        "Mana-Kosten": "-",
        "Gegenstand": "Utensilien der Entrückung (Schamane)",
        "Verfuegbar": {"Schamane": {"level": 16, "rang": "Klassenfremde Fertigkeit"}}
    },
    "Kraft der Erde": {
        "Name": "Kraft der Erde",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Selbst",
        "Mana-Kosten": "4 (5)",
        "Gegenstand": "Kultgegenstand der Erdverbundenheit",
        "Verfuegbar": {
            "Dinturan": {"level": 9, "rang": "Nebenfertigkeit"},
            "Kerasi": {"level": 7, "rang": "Nebenfertigkeit"},
            "Waldmensch": {"level": 6, "rang": "Nebenfertigkeit"}
        }
    },
    "Kraft des Eises": {
        "Name": "Kraft des Eises",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Selbst",
        "Mana-Kosten": "3 (3)",
        "Gegenstand": "Bergkristall",
        "Verfuegbar": {"Gnom": {"level": 6, "rang": "Nebenfertigkeit"}}
    },
    "Krallenhand": {
        "Name": "Krallenhand",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Ein Gegner",
        "Mana-Kosten": "-",
        "Gegenstand": "-",
        "Angriffstyp": "Nahkampf",
        "Angriff": "Sn,St (+0)",
        "Parade": "Sn,St (+0)",
        "Schaden": "In,Ko (+0)",
        "Verfuegbar": {"Schamane": {"level": 1, "rang": "Basisfertigkeit"}}
    },
    "Krallenwirbel": {
        "Name": "Krallenwirbel",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner einer Position",
        "Max. betroffene Gegner": "+1 +13% der Heldenstufe",
        "Mana-Kosten": "0 (1)",
        "Gegenstand": "-",
        "Angriffstyp": "Nahkampf",
        "Angriff": "Ge,Sn (+0)",
        "Schaden": "In,Sn (+0)",
        "Finaler Wirkbonus:": "-15%",
        "Verfuegbar": {"Schamane": {"level": 12, "rang": "Basisfertigkeit"}}
    },
    "Kriegsbemalung": {
        "Name": "Kriegsbemalung",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "0 (1)",
        "Gegenstand": "Kriegsfarben",
        "Verfuegbar": {"Barbar": {"level": 8, "rang": "Nebenfertigkeit"}}
    },
    "Kriegstanz": {
        "Name": "Kriegstanz",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Alle Mitstreiter auf einer Position",
        "Max. betroffene Helden": "+2 +17% der Heldenstufe",
        "Mana-Kosten": "2 (3)",
        "Gegenstand": "-",
        "Verfuegbar": {"Barbar": {"level": 15, "rang": "Nebenfertigkeit"}}
    },
    "Kräutertee bereiten": {
        "Name": "Kräutertee bereiten",
        "Typ": "Verbesserung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Mitstreiter auf einer Position",
        "Max. betroffene Helden": "+2 +4% der Heldenstufe",
        "Mana-Kosten": "4 (5)",
        "Gegenstand": "Kräutertees",
        "Verfuegbar": {
            "Schamane": {"level": 13, "rang": "Klassenfremde Fertigkeit"},
            "Schütze": {"level": 18, "rang": "Nebenfertigkeit"}
        }
    },
    "Kugel der mentalen Frische": {
        "Name": "Kugel der mentalen Frische",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Selbst",
        "Mana-Kosten": "-",
        "Gegenstand": "-",
        "Verfuegbar": {
            "Klingenmagier": {"level": 24, "rang": "Nebenfertigkeit"},
            "Magier": {"level": 24, "rang": "Nebenfertigkeit"}
        }
    },
    "Kunstwurf": {
        "Name": "Kunstwurf",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "Wurfwaffe",
        "Verfuegbar": {"Gaukler": {"level": 13, "rang": "Nebenfertigkeit"}}
    },
    "Kältepeitsche": {
        "Name": "Kältepeitsche",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner einer Position",
        "Max. betroffene Gegner": "+1 +8% der Heldenstufe",
        "Mana-Kosten": "7 (8)",
        "Gegenstand": "Eiskristalle",
        "Angriffstyp": "Zauber",
        "Angriff": "In,Ge (+0)",
        "Schaden": "Sn,St (-30%)",
        "Verfuegbar": {"Klingenmagier": {"level": 11, "rang": "Klassenfremde Fertigkeit"}}
    },
    "Kälteresistenz": {
        "Name": "Kälteresistenz",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Alle Mitstreiter auf einer Position",
        "Max. betroffene Helden": "+2 +17% der Heldenstufe",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "-",
        "Verfuegbar": {"Kerasi": {"level": 16, "rang": "Nebenfertigkeit"}}
    },
    "Lachen der Hyäne": {
        "Name": "Lachen der Hyäne",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+2 +20% der Heldenstufe",
        "Mana-Kosten": "4 (5)",
        "Gegenstand": "-",
        "Angriffstyp": "Verschrecken",
        "Angriff": "Ch,Ko",
        "Verfuegbar": {"Schamane": {"level": 10, "rang": "Nebenfertigkeit"}}
    },
    "Lauern und Schleichen": {
        "Name": "Lauern und Schleichen",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+100%",
        "Mana-Kosten": "-",
        "Gegenstand": "-",
        "Angriffstyp": "Hinterhalt",
        "Angriff": "Wa,Sn",
        "Verfuegbar": {"Gestaltwandler": {"level": 6, "rang": "Klassenfremde Fertigkeit"}}
    },
    "Lautloser Gang": {
        "Name": "Lautloser Gang",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Selbst",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "-",
        "Verfuegbar": {
            "Mag-Mor-Elf": {"level": 7, "rang": "Nebenfertigkeit"},
            "Waldmensch": {"level": 8, "rang": "Nebenfertigkeit"}
        }
    },
    "Leichte Trance": {
        "Name": "Leichte Trance",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Selbst",
        "Mana-Kosten": "4 (5)",
        "Gegenstand": "Mal der Geister",
        "Verfuegbar": {"Schamane": {"level": 8, "rang": "Basisfertigkeit"}}
    },
    "Lenker des göttlichen Sturmes": {
        "Name": "Lenker des göttlichen Sturmes",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "-",
        "Verfuegbar": {"Priester": {"level": 24, "rang": "Nebenfertigkeit"}}
    },
    "Licht des Neumonds": {
        "Name": "Licht des Neumonds",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+100%",
        "Mana-Kosten": "5 (6)",
        "Gegenstand": "Mondamulett",
        "Verfuegbar": {"Gestaltwandler": {"level": 13, "rang": "Basisfertigkeit"}}
    },
    "Licht des Vollmonds": {
        "Name": "Licht des Vollmonds",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+100%",
        "Mana-Kosten": "5 (6)",
        "Gegenstand": "Mondamulett",
        "Verfuegbar": {"Gestaltwandler": {"level": 11, "rang": "Basisfertigkeit"}}
    },
    "Licht des abnehmenden Mondes": {
        "Name": "Licht des abnehmenden Mondes",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+100%",
        "Mana-Kosten": "5 (6)",
        "Gegenstand": "Mondamulett",
        "Verfuegbar": {"Gestaltwandler": {"level": 8, "rang": "Basisfertigkeit"}}
    },
    "Licht des zunehmenden Mondes": {
        "Name": "Licht des zunehmenden Mondes",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+100%",
        "Mana-Kosten": "5 (6)",
        "Gegenstand": "Mondamulett",
        "Verfuegbar": {"Gestaltwandler": {"level": 7, "rang": "Basisfertigkeit"}}
    },
    "Lockruf der Natur": {
        "Name": "Lockruf der Natur",
        "Typ": "Ruft Helfer",
        "Verwendbar": "- / in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "4 (5)",
        "Gegenstand": "Lockmittel",
        "Verfuegbar": {"Schamane": {"level": 1, "rang": "Klassenfremde Fertigkeit"}}
    },
    "Löwenherz": {
        "Name": "Löwenherz",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Selbst",
        "Mana-Kosten": "7 (8)",
        "Gegenstand": "-",
        "Verfuegbar": {"Ritter": {"level": 8, "rang": "Basisfertigkeit"}}
    },
    "Magische Markierung": {
        "Name": "Magische Markierung",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner einer Position",
        "Max. betroffene Gegner": "+2 +34% der Heldenstufe",
        "Mana-Kosten": "4 (5)",
        "Gegenstand": "-",
        "Angriffstyp": "Zauber",
        "Angriff": "Wa,Ch",
        "Verfuegbar": {
            "Gelehrter": {"level": 12, "rang": "Nebenfertigkeit"},
            "Magier": {"level": 13, "rang": "Nebenfertigkeit"}
        }
    },
    "Magischer Schild": {
        "Name": "Magischer Schild",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "0 (1)",
        "Gegenstand": "-",
        "Verfuegbar": {
            "Gelehrter": {"level": 4, "rang": "Nebenfertigkeit"},
            "Magier": {"level": 2, "rang": "Nebenfertigkeit"}
        }
    },
    "Magischer Schutz": {
        "Name": "Magischer Schutz",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Alle Mitstreiter auf einer Position",
        "Max. betroffene Helden": "+1 +25% der Heldenstufe",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "-",
        "Verfuegbar": {
            "Gelehrter": {"level": 11, "rang": "Nebenfertigkeit"},
            "Klingenmagier": {"level": 13, "rang": "Nebenfertigkeit"},
            "Magier": {"level": 6, "rang": "Nebenfertigkeit"}
        }
    },
    "Manaentzug": {
        "Name": "Manaentzug",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner einer Position",
        "Max. betroffene Gegner": "+1 +20% der Heldenstufe",
        "Mana-Kosten": "8 (4)",
        "Gegenstand": "-",
        "Angriffstyp": "Zauber",
        "Angriff": "Wa,In (+0)",
        "Schaden": "Wi,Ko (+0)",
        "Verfuegbar": {
            "Dieb": {"level": 17, "rang": "Nebenfertigkeit"},
            "Gelehrter": {"level": 16, "rang": "Basisfertigkeit"},
            "Klingenmagier": {"level": 11, "rang": "Klassenfremde Fertigkeit"},
            "Magier": {"level": 17, "rang": "Nebenfertigkeit"},
            "Quacksalber": {"level": 18, "rang": "Klassenfremde Fertigkeit"}
        }
    },
    "Manasauger": {
        "Name": "Manasauger",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+1",
        "Mana-Kosten": "0 (1)",
        "Gegenstand": "-",
        "Angriffstyp": "Zauber",
        "Angriff": "Wa,In",
        "Schaden": "In,Wi",
        "Verfuegbar": {"Dieb": {"level": 3, "rang": "Nebenfertigkeit"}}
    },
    "Manaschild": {
        "Name": "Manaschild",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Selbst",
        "Mana-Kosten": "1 (1)",
        "Gegenstand": "-",
        "Verfuegbar": {"Klingenmagier": {"level": 1, "rang": "Basisfertigkeit"}}
    },
    "Manatransfer": {
        "Name": "Manatransfer",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Alle Mitstreiter auf einer Position",
        "Max. betroffene Helden": "+4 +34% der Heldenstufe",
        "Mana-Kosten": "6 (7)",
        "Gegenstand": "-",
        "Verfuegbar": {
            "Gelehrter": {"level": 10, "rang": "Basisfertigkeit"},
            "Klingenmagier": {"level": 7, "rang": "Klassenfremde Fertigkeit"}
        }
    },
    "Meditation": {
        "Name": "Meditation",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Selbst",
        "Mana-Kosten": "-",
        "Gegenstand": "-",
        "Verfuegbar": {
            "Gelehrter": {"level": 10, "rang": "Basisfertigkeit"},
            "Klingenmagier": {"level": 9, "rang": "Basisfertigkeit"},
            "Magier": {"level": 8, "rang": "Basisfertigkeit"},
            "Priester": {"level": 8, "rang": "Nebenfertigkeit"}
        }
    },
    "Meister der Kampfkunst": {
        "Name": "Meister der Kampfkunst",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Selbst",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "-",
        "Verfuegbar": {"Gladiator": {"level": 6, "rang": "Basisfertigkeit"}}
    },
    "Meister der Selbstbeherrschung": {
        "Name": "Meister der Selbstbeherrschung",
        "Typ": "Verbesserung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "4 (5)",
        "Gegenstand": "Utensilien des rituellen Kampfes",
        "Verfuegbar": {"Mönch": {"level": 15, "rang": "Klassenfremde Fertigkeit"}}
    },
    "Meisterschuss": {
        "Name": "Meisterschuss",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+1 +9% der Heldenstufe",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "Leichte Fernkampfwaffen",
        "Angriffstyp": "Fernkampf",
        "Angriff": "Ge,Wa (+0)",
        "Schaden": "Sn,Wa (+0)",
        "Finaler Wirkbonus:": "-15%",
        "Verfuegbar": {"Hasardeur": {"level": 13, "rang": "Basisfertigkeit"}}
    },
    "Melodie des Windes": {
        "Name": "Melodie des Windes",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "0 (1)",
        "Gegenstand": "-",
        "Verfuegbar": {"Barde": {"level": 8, "rang": "Nebenfertigkeit"}}
    },
    "Messerkampf": {
        "Name": "Messerkampf",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Ein Gegner",
        "Mana-Kosten": "-",
        "Gegenstand": "Messer",
        "Angriffstyp": "Nahkampf",
        "Angriff": "Sn,Wa",
        "Parade": "Sn,Wa",
        "Schaden": "St,Sn",
        "Verfuegbar": {
            "Barde": {"level": 2, "rang": "Nebenfertigkeit"},
            "Dieb": {"level": 2, "rang": "Nebenfertigkeit"},
            "Gaukler": {"level": 1, "rang": "Basisfertigkeit"},
            "Jäger": {"level": 2, "rang": "Basisfertigkeit"},
            "Quacksalber": {"level": 1, "rang": "Nebenfertigkeit"},
            "Schamane": {"level": 2, "rang": "Nebenfertigkeit"},
            "Priester": {"level": 3, "rang": "Nebenfertigkeit"}
        }
    },
    "Mit Überblick gesegnet": {
        "Name": "Mit Überblick gesegnet",
        "Typ": "Verbesserung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "4 (5)",
        "Gegenstand": "Utensilien der Entrückung (Gladiator)",
        "Verfuegbar": {"Gladiator": {"level": 19, "rang": "Klassenfremde Fertigkeit"}}
    },
    "Mittagspause": {
        "Name": "Mittagspause",
        "Typ": "Verbesserung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+1 +25% der Heldenstufe",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "Kochtopf",
        "Verfuegbar": {"Halbling": {"level": 11, "rang": "Nebenfertigkeit"}}
    },
    "Modifikation: Angriff": {
        "Name": "Modifikation: Angriff",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Selbst",
        "Mana-Kosten": "-",
        "Gegenstand": "Suggestionsperlen",
        "Verfuegbar": {"Klingenmagier": {"level": 12, "rang": "Basisfertigkeit"}}
    },
    "Modifikation: Geschwindigkeit": {
        "Name": "Modifikation: Geschwindigkeit",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Selbst",
        "Mana-Kosten": "-",
        "Gegenstand": "Suggestionsperlen",
        "Verfuegbar": {"Klingenmagier": {"level": 21, "rang": "Basisfertigkeit"}}
    },
    "Modifikation: Macht": {
        "Name": "Modifikation: Macht",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Selbst",
        "Mana-Kosten": "-",
        "Gegenstand": "Suggestionsperlen",
        "Verfuegbar": {"Klingenmagier": {"level": 17, "rang": "Basisfertigkeit"}}
    },
    "Modifikation: Schutz": {
        "Name": "Modifikation: Schutz",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Selbst",
        "Mana-Kosten": "-",
        "Gegenstand": "Suggestionsperlen",
        "Verfuegbar": {"Klingenmagier": {"level": 7, "rang": "Basisfertigkeit"}}
    },
    "Netz werfen": {
        "Name": "Netz werfen",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+1",
        "Mana-Kosten": "-",
        "Gegenstand": "Netz",
        "Angriffstyp": "Fernkampf",
        "Angriff": "Ge,Sn",
        "Verfuegbar": {
            "Gladiator": {"level": 1, "rang": "Basisfertigkeit"},
            "Jäger": {"level": 6, "rang": "Nebenfertigkeit"}
        }
    },
    "Niederschlagen": {
        "Name": "Niederschlagen",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+1",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "Waffenlos",
        "Angriffstyp": "Hinterhalt",
        "Angriff": "Ge,St",
        "Verfuegbar": {"Dieb": {"level": 15, "rang": "Nebenfertigkeit"}}
    },
    "Partherschuss": {
        "Name": "Partherschuss",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+1 +8% der Heldenstufe",
        "Mana-Kosten": "2 (3)",
        "Gegenstand": "Leichte Fernkampfwaffen",
        "Angriffstyp": "Fernkampf",
        "Angriff": "Ge,Sn (+0)",
        "Schaden": "Wa,St (+0)",
        "Finaler Wirkbonus:": "-13%",
        "Verfuegbar": {"Ritter": {"level": 14, "rang": "Basisfertigkeit"}}
    },
    "Pfeife rauchen": {
        "Name": "Pfeife rauchen",
        "Typ": "Verbesserung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "-",
        "Gegenstand": "Pfeifen",
        "Verfuegbar": {"Halbling": {"level": 5, "rang": "Nebenfertigkeit"}}
    },
    "Positionswechsel (Zentrum)": {
        "Name": "Positionswechsel (Zentrum)",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Selbst",
        "Mana-Kosten": "2 (3)",
        "Gegenstand": "-",
        "Verfuegbar": {"Gladiator": {"level": 9, "rang": "Klassenfremde Fertigkeit"}}
    },
    "Positionswechsel (hinten)": {
        "Name": "Positionswechsel (hinten)",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Selbst",
        "Mana-Kosten": "2 (3)",
        "Gegenstand": "-",
        "Verfuegbar": {"Gladiator": {"level": 9, "rang": "Klassenfremde Fertigkeit"}}
    },
    "Positionswechsel (links)": {
        "Name": "Positionswechsel (links)",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Selbst",
        "Mana-Kosten": "2 (3)",
        "Gegenstand": "-",
        "Verfuegbar": {"Gladiator": {"level": 9, "rang": "Klassenfremde Fertigkeit"}}
    },
    "Positionswechsel (rechts)": {
        "Name": "Positionswechsel (rechts)",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Selbst",
        "Mana-Kosten": "2 (3)",
        "Gegenstand": "-",
        "Verfuegbar": {"Gladiator": {"level": 9, "rang": "Klassenfremde Fertigkeit"}}
    },
    "Positionswechsel (vorne)": {
        "Name": "Positionswechsel (vorne)",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Selbst",
        "Mana-Kosten": "2 (3)",
        "Gegenstand": "-",
        "Verfuegbar": {"Gladiator": {"level": 9, "rang": "Klassenfremde Fertigkeit"}}
    },
    "Prophezeien": {
        "Name": "Prophezeien",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+34% der Heldenstufe",
        "Mana-Kosten": "2 (3)",
        "Gegenstand": "Prophezeien",
        "Verfuegbar": {
            "Barde": {"level": 9, "rang": "Klassenfremde Fertigkeit"},
            "Gaukler": {"level": 8, "rang": "Basisfertigkeit"},
            "Quacksalber": {"level": 15, "rang": "Klassenfremde Fertigkeit"}
        }
    },
    "Präziser Fechtstreich": {
        "Name": "Präziser Fechtstreich",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Ein Gegner",
        "Mana-Kosten": "0 (1)",
        "Gegenstand": "Fechtwaffen",
        "Angriffstyp": "Nahkampf",
        "Angriff": "Sn,Ge (+0)",
        "Schaden": "Wa,In (+0)",
        "Finaler Wirkbonus:": "+20%",
        "Verfuegbar": {"Hasardeur": {"level": 11, "rang": "Nebenfertigkeit"}}
    },
    "Präziser Schuss": {
        "Name": "Präziser Schuss",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+1",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "Leichte Fernkampfwaffen",
        "Angriffstyp": "Fernkampf",
        "Angriff": "Wa,In (+0)",
        "Schaden": "Ge,Wi (+0)",
        "Finaler Wirkbonus:": "+10%",
        "Verfuegbar": {
            "Dieb": {"level": 7, "rang": "Nebenfertigkeit"},
            "Gelehrter": {"level": 11, "rang": "Nebenfertigkeit"},
            "Hasardeur": {"level": 9, "rang": "Basisfertigkeit"},
            "Jäger": {"level": 13, "rang": "Basisfertigkeit"},
            "Schütze": {"level": 13, "rang": "Basisfertigkeit"}
        }
    },
    "Psyschock": {
        "Name": "Psyschock",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner einer Position",
        "Max. betroffene Gegner": "+1 +8% der Heldenstufe",
        "Mana-Kosten": "16 (8)",
        "Gegenstand": "-",
        "Angriffstyp": "Zauber",
        "Angriff": "In,Ko (+0)",
        "Schaden": "Wi,Ch (-30%)",
        "Verfuegbar": {"Klingenmagier": {"level": 4, "rang": "Klassenfremde Fertigkeit"}}
    },
    "Purzelbaum": {
        "Name": "Purzelbaum",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "-",
        "Verfuegbar": {"Gaukler": {"level": 9, "rang": "Nebenfertigkeit"}}
    },
    "Quell der Heiterkeit": {
        "Name": "Quell der Heiterkeit",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+100%",
        "Mana-Kosten": "9 (10)",
        "Gegenstand": "-",
        "Verfuegbar": {"Halbling": {"level": 33, "rang": "Nebenfertigkeit"}}
    },
    "Raketentechnik": {
        "Name": "Raketentechnik",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "Sprengsatz",
        "Verfuegbar": {"Gnerk": {"level": 33, "rang": "Nebenfertigkeit"}}
    },
    "Rasende Wildsau": {
        "Name": "Rasende Wildsau",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Selbst",
        "Mana-Kosten": "4 (5)",
        "Gegenstand": "-",
        "Verfuegbar": {
            "Barbar": {"level": 6, "rang": "Basisfertigkeit"},
            "Gestaltwandler": {"level": 10, "rang": "Nebenfertigkeit"},
            "Jäger": {"level": 18, "rang": "Klassenfremde Fertigkeit"}
        }
    },
    "Rhythmus des Kampfes": {
        "Name": "Rhythmus des Kampfes",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "0 (1)",
        "Gegenstand": "-",
        "Verfuegbar": {"Barde": {"level": 7, "rang": "Nebenfertigkeit"}}
    },
    "Ringkampf": {
        "Name": "Ringkampf",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "0 (1)",
        "Gegenstand": "-",
        "Verfuegbar": {"Gaukler": {"level": 3, "rang": "Nebenfertigkeit"}}
    },
    "Ritual der tausend Klingen": {
        "Name": "Ritual der tausend Klingen",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Selbst",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "-",
        "Verfuegbar": {"Klingenmagier": {"level": 15, "rang": "Nebenfertigkeit"}}
    },
    "Rudelführer": {
        "Name": "Rudelführer",
        "Typ": "Verbesserung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+2 +25% der Heldenstufe",
        "Mana-Kosten": "4 (5)",
        "Gegenstand": "-",
        "Verfuegbar": {"Gestaltwandler": {"level": 12, "rang": "Klassenfremde Fertigkeit"}}
    },
    "Ruf der Hyäne": {
        "Name": "Ruf der Hyäne",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner einer Position",
        "Max. betroffene Gegner": "+1 +10% der Heldenstufe",
        "Mana-Kosten": "2 (3)",
        "Gegenstand": "-",
        "Angriffstyp": "Verschrecken",
        "Angriff": "Ch,Wi",
        "Verfuegbar": {"Schamane": {"level": 4, "rang": "Nebenfertigkeit"}}
    },
    "Rundumhieb": {
        "Name": "Rundumhieb",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner einer Position",
        "Max. betroffene Gegner": "+3 +14% der Heldenstufe",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "Massenangriffswaffen",
        "Angriffstyp": "Nahkampf",
        "Angriff": "Ge,Sn (+0)",
        "Schaden": "St,Wi (+0)",
        "Finaler Wirkbonus:": "-25%",
        "Verfuegbar": {"Barbar": {"level": 13, "rang": "Basisfertigkeit"}}
    },
    "Scharfe Augen": {
        "Name": "Scharfe Augen",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "-",
        "Verfuegbar": {"Mag-Mor-Elf": {"level": 15, "rang": "Nebenfertigkeit"}}
    },
    "Schildstoß": {
        "Name": "Schildstoß",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner einer Position",
        "Max. betroffene Gegner": "+1 +20% der Heldenstufe",
        "Mana-Kosten": "0 (1)",
        "Gegenstand": "Schild",
        "Angriffstyp": "Nahkampf",
        "Angriff": "St,Ge",
        "Verfuegbar": {"Ritter": {"level": 6, "rang": "Nebenfertigkeit"}}
    },
    "Schlag der Gerechten": {
        "Name": "Schlag der Gerechten",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+1 +13% der Heldenstufe",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "Aspekt der Schlacht",
        "Angriffstyp": "Nahkampf",
        "Angriff": "St,Wi (+0)",
        "Schaden": "Ch,St (+0)",
        "Verfuegbar": {"Priester": {"level": "8", "rang": "Basisfertigkeit"}}
    },
    "Schleuder": {
        "Name": "Schleuder",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+1",
        "Mana-Kosten": "-",
        "Gegenstand": "Schleuder",
        "Angriffstyp": "Fernkampf",
        "Angriff": "Wa,Ge",
        "Schaden": "Ge,St",
        "Verfuegbar": {
            "Dieb": {"level": 2, "rang": "Nebenfertigkeit"},
            "Gelehrter": {"level": 1, "rang": "Basisfertigkeit"},
            "Schütze": {"level": 2, "rang": "Basisfertigkeit"}
        }
    },
    "Schmerzunempfindlich": {
        "Name": "Schmerzunempfindlich",
        "Typ": "Verbesserung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "4 (5)",
        "Gegenstand": "Utensilien der Entrückung (Gladiator)",
        "Verfuegbar": {"Gladiator": {"level": 19, "rang": "Klassenfremde Fertigkeit"}}
    },
    "Schmetterschlag": {
        "Name": "Schmetterschlag",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "Hiebwaffen",
        "Verfuegbar": {
            "Barbar": {"level": 7, "rang": "Nebenfertigkeit"},
            "Gladiator": {"level": 17, "rang": "Nebenfertigkeit"},
            "Paladin": {"level": 17, "rang": "Klassenfremde Fertigkeit"},
            "Priester": {"level": 16, "rang": "Klassenfremde Fertigkeit"},
            "Ritter": {"level": 10, "rang": "Nebenfertigkeit"}
        }
    },
    "Schmiedekunst": {
        "Name": "Schmiedekunst",
        "Typ": "Verbesserung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Mitstreiter auf einer Position",
        "Max. betroffene Helden": "+17% der Heldenstufe",
        "Mana-Kosten": "6 (7)",
        "Gegenstand": "Amboss",
        "Verfuegbar": {"Hügelzwerg": {"level": 16, "rang": "Nebenfertigkeit"}}
    },
    "Schmutzige Tricks": {
        "Name": "Schmutzige Tricks",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Selbst",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "-",
        "Verfuegbar": {"Gladiator": {"level": 24, "rang": "Nebenfertigkeit"}}
    },
    "Schneeregen": {
        "Name": "Schneeregen",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner einer Position",
        "Max. betroffene Gegner": "+3 +9% der Heldenstufe",
        "Mana-Kosten": "6 (7)",
        "Gegenstand": "Eiskristalle",
        "Angriffstyp": "Zauber",
        "Angriff": "Wi,In (+0)",
        "Schaden": "Wa,Ch (-45%)",
        "Verfuegbar": {"Schamane": {"level": 14, "rang": "Nebenfertigkeit"}}
    },
    "Schnelldenker": {
        "Name": "Schnelldenker",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "-",
        "Verfuegbar": {"Tirem-Ag-Elf": {"level": 7, "rang": "Nebenfertigkeit"}}
    },
    "Schnelligkeitsschub": {
        "Name": "Schnelligkeitsschub",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "4 (5)",
        "Gegenstand": "-",
        "Verfuegbar": {
            "Barbar": {"level": 22, "rang": "Klassenfremde Fertigkeit"},
            "Barde": {"level": 21, "rang": "Klassenfremde Fertigkeit"},
            "Dieb": {"level": 21, "rang": "Klassenfremde Fertigkeit"},
            "Gaukler": {"level": 18, "rang": "Klassenfremde Fertigkeit"},
            "Gestaltwandler": {"level": 17, "rang": "Klassenfremde Fertigkeit"},
            "Gladiator": {"level": 15, "rang": "Klassenfremde Fertigkeit"},
            "Hasardeur": {"level": 19, "rang": "Klassenfremde Fertigkeit"},
            "Jäger": {"level": 21, "rang": "Klassenfremde Fertigkeit"},
            "Klingenmagier": {"level": 19, "rang": "Klassenfremde Fertigkeit"},
            "Mönch": {"level": 19, "rang": "Klassenfremde Fertigkeit"},
            "Paladin": {"level": 21, "rang": "Klassenfremde Fertigkeit"},
            "Ritter": {"level": 21, "rang": "Klassenfremde Fertigkeit"},
            "Schütze": {"level": 22, "rang": "Klassenfremde Fertigkeit"}
        }
    },
    "Schutzzauber": {
        "Name": "Schutzzauber",
        "Typ": "Verbesserung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+1 +25% der Heldenstufe",
        "Mana-Kosten": "8 (9)",
        "Gegenstand": "Spruchrollen (Schutzzauber)",
        "Verfuegbar": {
            "Gelehrter": {"level": 9, "rang": "Basisfertigkeit"},
            "Magier": {"level": 7, "rang": "Basisfertigkeit"},
            "Quacksalber": {"level": 13, "rang": "Klassenfremde Fertigkeit"}
        }
    },
    "Schwachstelle erkennen": {
        "Name": "Schwachstelle erkennen",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "-",
        "Verfuegbar": {"Hasardeur": {"level": 13, "rang": "Basisfertigkeit"}}
    },
    "Schwertkampf": {
        "Name": "Schwertkampf",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Ein Gegner",
        "Mana-Kosten": "-",
        "Gegenstand": "Schwert",
        "Angriffstyp": "Nahkampf",
        "Angriff": "Ge,Sn",
        "Parade": "Ge,Sn",
        "Schaden": "St,Ge",
        "Verfuegbar": {
            "Barbar": {"level": 5, "rang": "Nebenfertigkeit"},
            "Barde": {"level": 3, "rang": "Nebenfertigkeit"},
            "Gladiator": {"level": 2, "rang": "Nebenfertigkeit"},
            "Klingenmagier": {"level": 1, "rang": "Basisfertigkeit"},
            "Paladin": {"level": 2, "rang": "Basisfertigkeit"},
            "Ritter": {"level": 1, "rang": "Basisfertigkeit"}
        }
    },
    "Seele stärken": {
        "Name": "Seele stärken",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "Ordensroben",
        "Verfuegbar": {"Mönch": {"level": 5, "rang": "Nebenfertigkeit"}}
    },
    "Segnung des Feuers": {
        "Name": "Segnung des Feuers",
        "Typ": "Verbesserung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+2 +20% der Heldenstufe",
        "Mana-Kosten": "4 (5)",
        "Gegenstand": "Bergkristall",
        "Verfuegbar": {"Gnom": {"level": 12, "rang": "Nebenfertigkeit"}}
    },
    "Seilklingen": {
        "Name": "Seilklingen",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner einer Position",
        "Max. betroffene Gegner": "+3",
        "Mana-Kosten": "-",
        "Gegenstand": "Köpfe für Seilklingen",
        "Angriffstyp": "Nahkampf",
        "Angriff": "Sn,Ge",
        "Verfuegbar": {"Mönch": {"level": 2, "rang": "Basisfertigkeit"}}
    },
    "Sinnesnebel": {
        "Name": "Sinnesnebel",
        "Typ": "Verbesserung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "4 (5)",
        "Gegenstand": "Utensilien des rituellen Kampfes",
        "Verfuegbar": {"Mönch": {"level": 15, "rang": "Klassenfremde Fertigkeit"}}
    },
    "Sitz!": {
        "Name": "Sitz!",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+100%",
        "Mana-Kosten": "-",
        "Gegenstand": "-",
        "Verfuegbar": {"Schamane": {"level": 3, "rang": "Basisfertigkeit"}}
    },
    "Sorgfältiges Zielen": {
        "Name": "Sorgfältiges Zielen",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Selbst",
        "Mana-Kosten": "2 (3)",
        "Gegenstand": "Leichte Fernkampfwaffen",
        "Verfuegbar": {
            "Dieb": {"level": 13, "rang": "Basisfertigkeit"},
            "Hasardeur": {"level": 4, "rang": "Nebenfertigkeit"},
            "Jäger": {"level": 14, "rang": "Basisfertigkeit"},
            "Schütze": {"level": 16, "rang": "Nebenfertigkeit"}
        }
    },
    "Sperrfeuer": {
        "Name": "Sperrfeuer",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+1 +34% der Heldenstufe",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "Schleuder",
        "Angriffstyp": "Hinterhalt",
        "Angriff": "Wa,Sn",
        "Verfuegbar": {"Dieb": {"level": 12, "rang": "Nebenfertigkeit"}}
    },
    "Sphäre der Elemente": {
        "Name": "Sphäre der Elemente",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Alle Mitstreiter auf einer Position",
        "Max. betroffene Helden": "+2 +25% der Heldenstufe",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "-",
        "Verfuegbar": {"Paladin": {"level": 8, "rang": "Basisfertigkeit"}}
    },
    "Sphäre der Erholung": {
        "Name": "Sphäre der Erholung",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Alle Mitstreiter auf einer Position",
        "Max. betroffene Helden": "+2 +20% der Heldenstufe",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "-",
        "Verfuegbar": {"Paladin": {"level": 6, "rang": "Basisfertigkeit"}}
    },
    "Sphäre der Heilung": {
        "Name": "Sphäre der Heilung",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Alle Mitstreiter auf einer Position",
        "Max. betroffene Helden": "+4 +25% der Heldenstufe",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "-",
        "Verfuegbar": {"Paladin": {"level": 5, "rang": "Basisfertigkeit"}}
    },
    "Sphäre der Macht": {
        "Name": "Sphäre der Macht",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Alle Mitstreiter auf einer Position",
        "Max. betroffene Helden": "+2 +17% der Heldenstufe",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "-",
        "Verfuegbar": {"Paladin": {"level": 7, "rang": "Basisfertigkeit"}}
    },
    "Sphäre der Zuversicht": {
        "Name": "Sphäre der Zuversicht",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Alle Mitstreiter auf einer Position",
        "Max. betroffene Helden": "+2 +25% der Heldenstufe",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "-",
        "Verfuegbar": {"Paladin": {"level": 4, "rang": "Basisfertigkeit"}}
    },
    "Sphäre des Schutzes": {
        "Name": "Sphäre des Schutzes",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Alle Mitstreiter auf einer Position",
        "Max. betroffene Helden": "+2 +25% der Heldenstufe",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "-",
        "Verfuegbar": {"Paladin": {"level": 3, "rang": "Basisfertigkeit"}}
    },
    "Sprungangriff": {
        "Name": "Sprungangriff",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Ein Gegner",
        "Mana-Kosten": "0 (1)",
        "Gegenstand": "Nahkampfwaffen",
        "Angriffstyp": "Nahkampf",
        "Angriff": "Sn,Ge (+0)",
        "Schaden": "St,Ge (+0)",
        "Finaler Wirkbonus:": "+20%",
        "Verfuegbar": {
            "Dieb": {"level": 7, "rang": "Nebenfertigkeit"},
            "Gaukler": {"level": 17, "rang": "Nebenfertigkeit"},
            "Gladiator": {"level": 11, "rang": "Basisfertigkeit"}
        }
    },
    "Stabkampf": {
        "Name": "Stabkampf",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Ein Gegner",
        "Mana-Kosten": "-",
        "Gegenstand": "Stab",
        "Angriffstyp": "Nahkampf",
        "Angriff": "Ge,Sn",
        "Parade": "Ge,Sn",
        "Schaden": "St,Ko",
        "Verfuegbar": {
            "Gelehrter": {"level": 3, "rang": "Nebenfertigkeit"},
            "Gestaltwandler": {"level": 2, "rang": "Nebenfertigkeit"},
            "Gladiator": {"level": 2, "rang": "Nebenfertigkeit"},
            "Magier": {"level": 1, "rang": "Nebenfertigkeit"},
            "Mönch": {"level": 1, "rang": "Basisfertigkeit"},
            "Priester": {"level": 2, "rang": "Nebenfertigkeit"},
            "Quacksalber": {"level": 2, "rang": "Nebenfertigkeit"}
        }
    },
    "Stahlfaust": {
        "Name": "Stahlfaust",
        "Typ": "Verbesserung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "4 (5)",
        "Gegenstand": "Utensilien der Entrückung (Gladiator)",
        "Verfuegbar": {"Gladiator": {"level": 19, "rang": "Klassenfremde Fertigkeit"}}
    },
    "Stangenwaffen": {
        "Name": "Stangenwaffen",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Ein Gegner",
        "Mana-Kosten": "-",
        "Gegenstand": "Stangenwaffe",
        "Angriffstyp": "Nahkampf",
        "Angriff": "Ge,Sn",
        "Parade": "Ge,Sn",
        "Schaden": "St,Ko",
        "Verfuegbar": {
            "Barbar": {"level": 13, "rang": "Klassenfremde Fertigkeit"},
            "Gladiator": {"level": 2, "rang": "Nebenfertigkeit"},
            "Jäger": {"level": 2, "rang": "Basisfertigkeit"},
            "Paladin": {"level": 8, "rang": "Nebenfertigkeit"},
            "Ritter": {"level": 2, "rang": "Basisfertigkeit"}
        }
    },
    "Statiknetz": {
        "Name": "Statiknetz",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner einer Position",
        "Max. betroffene Gegner": "+1 +8% der Heldenstufe",
        "Mana-Kosten": "7 (8)",
        "Gegenstand": "-",
        "Angriffstyp": "Zauber",
        "Angriff": "In,Ge (+0)",
        "Schaden": "Wi,St (-30%)",
        "Verfuegbar": {"Klingenmagier": {"level": 4, "rang": "Klassenfremde Fertigkeit"}}
    },
    "Stein des Frumol": {
        "Name": "Stein des Frumol",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+1",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "Schleuder",
        "Angriffstyp": "Fernkampf",
        "Angriff": "Wa,In",
        "Schaden": "St,Ge",
        "Verfuegbar": {
            "Gelehrter": {"level": 18, "rang": "Basisfertigkeit"},
            "Schütze": {"level": 16, "rang": "Basisfertigkeit"}
        }
    },
    "Stein werfen": {
        "Name": "Stein werfen",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Ein Gegner",
        "Mana-Kosten": "-",
        "Gegenstand": "-",
        "Angriffstyp": "Fernkampf",
        "Angriff": "Sn,Ge",
        "Schaden": "St,Ge",
        "Verfuegbar": {"Gestaltwandler": {"level": 3, "rang": "Klassenfremde Fertigkeit"}}
    },
    "Sticheln": {
        "Name": "Sticheln",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner einer Position",
        "Max. betroffene Gegner": "+2 +34% der Heldenstufe",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "-",
        "Angriffstyp": "Sozial",
        "Angriff": "Ch,In",
        "Verfuegbar": {"Barde": {"level": 13, "rang": "Basisfertigkeit"}}
    },
    "Stil des Affen": {
        "Name": "Stil des Affen",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner einer Position",
        "Max. betroffene Gegner": "+2 +11% der Heldenstufe",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "Nahkampfwaffen",
        "Angriffstyp": "Nahkampf",
        "Angriff": "Ge,Wa (+0)",
        "Schaden": "Sn,Ge (+0)",
        "Finaler Wirkbonus:": "-17%",
        "Verfuegbar": {"Mönch": {"level": 13, "rang": "Basisfertigkeit"}}
    },
    "Stimme des Waldes": {
        "Name": "Stimme des Waldes",
        "Typ": "Verschlechterung",
        "Verwendbar": "-/ in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Gegner": "1 +34% der Heldenstufe",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "-",
        "Angriffstyp": "Verschrecken",
        "Anrgiff": "Ge,Ch",
        "Fertigkeitenklasse": "-",
        "Verfuegbar": {
            "Jäger": {"level": 10, "rang": "Nebenfertigkeit"},
        }
    },
    "Stoß der Kobra": {
        "Name": "Stoß der Kobra",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "Fechtkunst",
        "Verfuegbar": {"Hasardeur": {"level": 24, "rang": "Nebenfertigkeit"}}
    },
    "Stoßgebet": {
        "Name": "Stoßgebet",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Selbst",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "-",
        "Verfuegbar": {"Paladin": {"level": 24, "rang": "Nebenfertigkeit"}}
    },
    "Straßenfeger": {
        "Name": "Straßenfeger",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner einer Position",
        "Max. betroffene Gegner": "+2 +12% der Heldenstufe",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "Nahkampfwaffen",
        "Angriffstyp": "Nahkampf",
        "Angriff": "Ge,Wa (+0)",
        "Schaden": "Sn,St (+0)",
        "Finaler Wirkbonus:": "-17%",
        "Verfuegbar": {"Gaukler": {"level": 12, "rang": "Basisfertigkeit"}}
    },
    "Strenger Blick": {
        "Name": "Strenger Blick",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner einer Position",
        "Max. betroffene Gegner": "+1 +7% der Heldenstufe",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "-",
        "Angriffstyp": "Sozial",
        "Angriff": "Ch,Wi",
        "Verfuegbar": {
            "Gelehrter": {"level": 14, "rang": "Klassenfremde Fertigkeit"},
            "Priester": {"level": 12, "rang": "Basisfertigkeit"}
        }
    },
    "Stärke des Bären": {
        "Name": "Stärke des Bären",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "4 (5)",
        "Gegenstand": "-",
        "Verfuegbar": {
            "Barbar": {"level": 16, "rang": "Klassenfremde Fertigkeit"},
            "Gestaltwandler": {"level": 22, "rang": "Klassenfremde Fertigkeit"},
            "Gladiator": {"level": 20, "rang": "Klassenfremde Fertigkeit"},
            "Jäger": {"level": 22, "rang": "Klassenfremde Fertigkeit"}
        }
    },
    "Säurekugel": {
        "Name": "Säurekugel",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "Schleuder",
        "Verfuegbar": {
            "Gelehrter": {"level": 7, "rang": "Basisfertigkeit"},
            "Schütze": {"level": 8, "rang": "Nebenfertigkeit"}
        }
    },
    "Technisches Verständnis": {
        "Name": "Technisches Verständnis",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+2 +20% der Heldenstufe",
        "Mana-Kosten": "6 (7)",
        "Gegenstand": "-",
        "Verfuegbar": {"Gnerk": {"level": 12, "rang": "Nebenfertigkeit"}}
    },
    "Teil der Natur": {
        "Name": "Teil der Natur",
        "Typ": "Verbesserung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "4 (5)",
        "Gegenstand": "Utensilien des rituellen Kampfes",
        "Verfuegbar": {"Mönch": {"level": 15, "rang": "Klassenfremde Fertigkeit"}}
    },
    "Tiefe Trance": {
        "Name": "Tiefe Trance",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Selbst",
        "Mana-Kosten": "10 (12)",
        "Gegenstand": "Mal der Geister",
        "Verfuegbar": {"Schamane": {"level": 16, "rang": "Basisfertigkeit"}}
    },
    "Trinken": {
        "Name": "Trinken",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "-",
        "Gegenstand": "Tränke",
        "Verfuegbar": {
            "Bergzwerg": {"level": 2, "rang": "Nebenfertigkeit"},
            "Dinturan": {"level": 2, "rang": "Nebenfertigkeit"},
            "Gnerk": {"level": 2, "rang": "Nebenfertigkeit"},
            "Gnom": {"level": 2, "rang": "Nebenfertigkeit"},
            "Grenzländer": {"level": 2, "rang": "Nebenfertigkeit"},
            "Halbling": {"level": 2, "rang": "Nebenfertigkeit"},
            "Hügelzwerg": {"level": 2, "rang": "Nebenfertigkeit"},
            "Kerasi": {"level": 2, "rang": "Basisfertigkeit"},
            "Mag-Mor-Elf": {"level": 2, "rang": "Nebenfertigkeit"},
            "Rashani": {"level": 2, "rang": "Nebenfertigkeit"},
            "Tirem-Ag-Elf": {"level": 2, "rang": "Nebenfertigkeit"},
            "Waldmensch": {"level": 2, "rang": "Nebenfertigkeit"}
        }
    },
    "Tänzeln": {
        "Name": "Tänzeln",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Selbst",
        "Mana-Kosten": "-",
        "Gegenstand": "Fechtkunst",
        "Verfuegbar": {"Hasardeur": {"level": 6, "rang": "Nebenfertigkeit"}}
    },
    "Tödliche Präzision (Hiebschaden)": {
        "Name": "Tödliche Präzision (Hiebschaden)",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "-",
        "Verfuegbar": {"Gladiator": {"level": 10, "rang": "Basisfertigkeit"}}
    },
    "Tödliche Präzision (Schneidschaden)": {
        "Name": "Tödliche Präzision (Schneidschaden)",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "-",
        "Verfuegbar": {
            "Gladiator": {"level": 10, "rang": "Basisfertigkeit"},
            "Hasardeur": {"level": 7, "rang": "Nebenfertigkeit"}
        }
    },
    "Tödliche Präzision (Stichschaden)": {
        "Name": "Tödliche Präzision (Stichschaden)",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "-",
        "Verfuegbar": {
            "Gladiator": {"level": 10, "rang": "Basisfertigkeit"},
            "Hasardeur": {"level": 7, "rang": "Nebenfertigkeit"}
        }
    },
    "Unheilvolles Gemurmel": {
        "Name": "Unheilvolles Gemurmel",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+100%",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "-",
        "Angriffstyp": "Zauber",
        "Angriff": "Wi,In",
        "Verfuegbar": {"Priester": {"level": 10, "rang": "Basisfertigkeit"}}
    },
    "Unterstützungszauber": {
        "Name": "Unterstützungszauber",
        "Typ": "Verbesserung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+1 +25% der Heldenstufe",
        "Mana-Kosten": "6 (7)",
        "Gegenstand": "Spruchrollen (Unterstützung)",
        "Verfuegbar": {
            "Gelehrter": {"level": 8, "rang": "Basisfertigkeit"},
            "Magier": {"level": 8, "rang": "Basisfertigkeit"},
            "Quacksalber": {"level": 14, "rang": "Klassenfremde Fertigkeit"}
        }
    },
    "Vasallentreue": {
        "Name": "Vasallentreue",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+25% der Heldenstufe",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "-",
        "Verfuegbar": {"Ritter": {"level": 13, "rang": "Basisfertigkeit"}}
    },
    "Verborgene Pfade": {
        "Name": "Verborgene Pfade",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "3 +34% der Heldenstufe",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "-",
        "Fertigkeitenklasse": "Führung",
        "Verfuegbar": {
            "Jäger": {"level": 10, "rang": "Basisfertigkeit"},
        }
    },
    "Verdammen": {
        "Name": "Verdammen",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+4 +25% der Heldenstufe",
        "Mana-Kosten": "5 (6)",
        "Gegenstand": "Aspekt des Urteils",
        "Angriffstyp": "Sozial",
        "Angriff": "Wi,Ch",
        "Verfuegbar": {"Priester": {"level": 15, "rang": "Nebenfertigkeit"}}
    },
    "Verdeckter Wurf": {
        "Name": "Verdeckter Wurf",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+3 +7% der Heldenstufe",
        "Mana-Kosten": "2 (3)",
        "Gegenstand": "Wurfwaffe",
        "Angriffstyp": "Hinterhalt",
        "Angriff": "Wa,Sn (+0)",
        "Schaden": "Ge,Sn (+0)",
        "Finaler Wirkbonus:": "-30%",
        "Verfuegbar": {"Dieb": {"level": 11, "rang": "Nebenfertigkeit"}}
    },
    "Verfluchen": {
        "Name": "Verfluchen",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner einer Position",
        "Max. betroffene Gegner": "+2 +20% der Heldenstufe",
        "Mana-Kosten": "2 (3)",
        "Gegenstand": "Aspekt des Urteils",
        "Angriffstyp": "Sozial",
        "Angriff": "Wi,In",
        "Verfuegbar": {"Priester": {"level": 5, "rang": "Basisfertigkeit"}}
    },
    "Verschleiern": {
        "Name": "Verschleiern",
        "Typ": "Verbesserung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+2 +25% der Heldenstufe",
        "Mana-Kosten": "-",
        "Gegenstand": "Schießpulver (Verschleiern)",
        "Verfuegbar": {
            "Dieb": {"level": 9, "rang": "Nebenfertigkeit"},
            "Hasardeur": {"level": 3, "rang": "Nebenfertigkeit"},
            "Mönch": {"level": 5, "rang": "Nebenfertigkeit"},
            "Schütze": {"level": 11, "rang": "Nebenfertigkeit"}
        }
    },
    "Verschwinden in Schatten": {
        "Name": "Verschwinden in Schatten",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "-",
        "Verfuegbar": {"Dieb": {"level": 24, "rang": "Nebenfertigkeit"}}
    },
    "Verspotten": {
        "Name": "Verspotten",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+1",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "-",
        "Angriffstyp": "Sozial",
        "Angriff": "Ch,St",
        "Verfuegbar": {
            "Barde": {"level": 4, "rang": "Basisfertigkeit"},
            "Dieb": {"level": 14, "rang": "Klassenfremde Fertigkeit"},
            "Gladiator": {"level": 6, "rang": "Basisfertigkeit"},
            "Schütze": {"level": 8, "rang": "Nebenfertigkeit"}
        }
    },
    "Verwegener Auftritt": {
        "Name": "Verwegener Auftritt",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+1 +20% der Heldenstufe",
        "Mana-Kosten": "0 (1)",
        "Gegenstand": "Statussymbol",
        "Angriffstyp": "Sozial",
        "Angriff": "Ch,Ko",
        "Verfuegbar": {"Hasardeur": {"level": 5, "rang": "Basisfertigkeit"}}
    },
    "Verwirrender Angriff": {
        "Name": "Verwirrender Angriff",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner einer Position",
        "Max. betroffene Gegner": "+1 +34% der Heldenstufe",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "-",
        "Angriffstyp": "Nahkampf",
        "Angriff": "Sn,In",
        "Verfuegbar": {
            "Barde": {"level": 19, "rang": "Nebenfertigkeit"},
            "Dieb": {"level": 8, "rang": "Nebenfertigkeit"},
            "Gaukler": {"level": 11, "rang": "Basisfertigkeit"},
            "Gladiator": {"level": 8, "rang": "Nebenfertigkeit"},
            "Hasardeur": {"level": 14, "rang": "Nebenfertigkeit"},
            "Mönch": {"level": 9, "rang": "Basisfertigkeit"},
            "Ritter": {"level": 9, "rang": "Nebenfertigkeit"}
        }
    },
    "Vitalitätsschub": {
        "Name": "Vitalitätsschub",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Alle Mitstreiter auf einer Position",
        "Max. betroffene Helden": "+100%",
        "Mana-Kosten": "2 (3)",
        "Gegenstand": "Gebräue der Gesundheit",
        "Verfuegbar": {"Quacksalber": {"level": 2, "rang": "Basisfertigkeit"}}
    },
    "Vorbeugende Heilung": {
        "Name": "Vorbeugende Heilung",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+3 +25% der Heldenstufe",
        "Mana-Kosten": "6 (7)",
        "Gegenstand": "Heiltrank",
        "Verfuegbar": {"Quacksalber": {"level": 4, "rang": "Basisfertigkeit"}}
    },
    "Waffengift": {
        "Name": "Waffengift",
        "Typ": "Verbesserung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+1 +20% der Heldenstufe",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "Waffengift",
        "Verfuegbar": {
            "Gaukler": {"level": 6, "rang": "Nebenfertigkeit"},
            "Jäger": {"level": 7, "rang": "Basisfertigkeit"},
            "Mönch": {"level": 11, "rang": "Nebenfertigkeit"}
        }
    },
    "Waffenloser Kampf": {
        "Name": "Waffenloser Kampf",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Ein Gegner",
        "Mana-Kosten": "-",
        "Gegenstand": "Waffenlos",
        "Angriffstyp": "Nahkampf",
        "Angriff": "Ge,Sn",
        "Parade": "Ge,Sn",
        "Schaden": "St,Ko",
        "Verfuegbar": {
            "Barbar": {"level": 2, "rang": "Nebenfertigkeit"},
            "Barde": {"level": 3, "rang": "Nebenfertigkeit"},
            "Dieb": {"level": 1, "rang": "Nebenfertigkeit"},
            "Gaukler": {"level": 2, "rang": "Basisfertigkeit"},
            "Gelehrter": {"level": 2, "rang": "Klassenfremde Fertigkeit"},
            "Gestaltwandler": {"level": 3, "rang": "Nebenfertigkeit"},
            "Gladiator": {"level": 1, "rang": "Basisfertigkeit"},
            "Hasardeur": {"level": 2, "rang": "Nebenfertigkeit"},
            "Jäger": {"level": 2, "rang": "Nebenfertigkeit"},
            "Klingenmagier": {"level": 4, "rang": "Klassenfremde Fertigkeit"},
            "Magier": {"level": 4, "rang": "Klassenfremde Fertigkeit"},
            "Mönch": {"level": 1, "rang": "Basisfertigkeit"},
            "Paladin": {"level": 2, "rang": "Klassenfremde Fertigkeit"},
            "Priester": {"level": 4, "rang": "Nebenfertigkeit"},
            "Quacksalber": {"level": 4, "rang": "Klassenfremde Fertigkeit"},
            "Ritter": {"level": 3, "rang": "Nebenfertigkeit"},
            "Schütze": {"level": 2, "rang": "Klassenfremde Fertigkeit"}
        }
    },
    "Waffenmeister": {
        "Name": "Waffenmeister",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Selbst",
        "Mana-Kosten": "2 (3)",
        "Gegenstand": "-",
        "Verfuegbar": {"Gladiator": {"level": 4, "rang": "Basisfertigkeit"}}
    },
    "Wandlung": {
        "Name": "Wandlung",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde / -",
        "Ziel": "Selbst",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "Elfensteine (Wandlung)",
        "Verfuegbar": {"Tirem-Ag-Elf": {"level": 6, "rang": "Nebenfertigkeit"}}
    },
    "Weisheit": {
        "Name": "Weisheit",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "4 (5)",
        "Gegenstand": "-",
        "Verfuegbar": {
            "Gelehrter": {"level": 19, "rang": "Klassenfremde Fertigkeit"},
            "Klingenmagier": {"level": 18, "rang": "Klassenfremde Fertigkeit"},
            "Magier": {"level": 16, "rang": "Klassenfremde Fertigkeit"},
            "Quacksalber": {"level": 17, "rang": "Klassenfremde Fertigkeit"},
            "Schamane": {"level": 20, "rang": "Klassenfremde Fertigkeit"}
        }
    },
    "Wesen des Gefährten (Gruppe)": {
        "Name": "Wesen des Gefährten (Gruppe)",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+3 +20% der Heldenstufe",
        "Mana-Kosten": "6 (7)",
        "Gegenstand": "Zeichen der Verbundenheit",
        "Verfuegbar": {"Schamane": {"level": 14, "rang": "Nebenfertigkeit"}}
    },
    "Wesen des Gefährten (Mitstreiter)": {
        "Name": "Wesen des Gefährten (Mitstreiter)",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Alle Mitstreiter auf einer Position",
        "Max. betroffene Helden": "+2 +17% der Heldenstufe",
        "Mana-Kosten": "4 (5)",
        "Gegenstand": "Zeichen der Verbundenheit",
        "Verfuegbar": {"Schamane": {"level": 6, "rang": "Nebenfertigkeit"}}
    },
    "Wesen des Gefährten (Selbst)": {
        "Name": "Wesen des Gefährten (Selbst)",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "2 (3)",
        "Gegenstand": "Zeichen der Verbundenheit",
        "Verfuegbar": {"Schamane": {"level": 3, "rang": "Basisfertigkeit"}}
    },
    "Widerstand des Eisens": {
        "Name": "Widerstand des Eisens",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "0 (1)",
        "Gegenstand": "-",
        "Verfuegbar": {
            "Barbar": {"level": 9, "rang": "Basisfertigkeit"},
            "Gestaltwandler": {"level": 6, "rang": "Nebenfertigkeit"}
        }
    },
    "Widerstand des Holzes": {
        "Name": "Widerstand des Holzes",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "0 (1)",
        "Gegenstand": "-",
        "Verfuegbar": {
            "Barbar": {"level": 4, "rang": "Basisfertigkeit"},
            "Gestaltwandler": {"level": 4, "rang": "Nebenfertigkeit"}
        }
    },
    "Widerstand des Steins": {
        "Name": "Widerstand des Steins",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "0 (1)",
        "Gegenstand": "-",
        "Verfuegbar": {
            "Barbar": {"level": 4, "rang": "Basisfertigkeit"},
            "Gestaltwandler": {"level": 5, "rang": "Nebenfertigkeit"}
        }
    },
    "Willensstärke": {
        "Name": "Willensstärke",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "4 (5)",
        "Gegenstand": "-",
        "Verfuegbar": {
            "Barde": {"level": 20, "rang": "Klassenfremde Fertigkeit"},
            "Gelehrter": {"level": 17, "rang": "Klassenfremde Fertigkeit"},
            "Klingenmagier": {"level": 22, "rang": "Klassenfremde Fertigkeit"},
            "Magier": {"level": 20, "rang": "Klassenfremde Fertigkeit"},
            "Mönch": {"level": 17, "rang": "Klassenfremde Fertigkeit"},
            "Paladin": {"level": 18, "rang": "Klassenfremde Fertigkeit"},
            "Priester": {"level": 18, "rang": "Klassenfremde Fertigkeit"},
            "Quacksalber": {"level": 20, "rang": "Klassenfremde Fertigkeit"},
            "Ritter": {"level": 22, "rang": "Klassenfremde Fertigkeit"},
            "Schamane": {"level": 21, "rang": "Klassenfremde Fertigkeit"}
        }
    },
    "Wind der eisigen Steppen": {
        "Name": "Wind der eisigen Steppen",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+100%",
        "Mana-Kosten": "6 (7)",
        "Gegenstand": "-",
        "Angriffstyp": "Naturgewalt",
        "Angriff": "Wi,Wa",
        "Verfuegbar": {"Kerasi": {"level": 33, "rang": "Nebenfertigkeit"}}
    },
    "Wirbelwind": {
        "Name": "Wirbelwind",
        "Typ": "Verbesserung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "4 (5)",
        "Gegenstand": "Utensilien des rituellen Kampfes",
        "Verfuegbar": {"Mönch": {"level": 15, "rang": "Klassenfremde Fertigkeit"}}
    },
    "Wissen der Alten (defensiv)": {
        "Name": "Wissen der Alten (defensiv)",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+20% der Heldenstufe",
        "Mana-Kosten": "6 (7)",
        "Gegenstand": "Arkane Artefakte (defensiv)",
        "Verfuegbar": {
            "Bergzwerg": {"level": 28, "rang": "Nebenfertigkeit"},
            "Dinturan": {"level": 28, "rang": "Nebenfertigkeit"},
            "Gnerk": {"level": 28, "rang": "Nebenfertigkeit"},
            "Gnom": {"level": 28, "rang": "Nebenfertigkeit"},
            "Grenzländer": {"level": 28, "rang": "Nebenfertigkeit"},
            "Halbling": {"level": 28, "rang": "Nebenfertigkeit"},
            "Hügelzwerg": {"level": 28, "rang": "Nebenfertigkeit"},
            "Kerasi": {"level": 28, "rang": "Nebenfertigkeit"},
            "Mag-Mor-Elf": {"level": 28, "rang": "Nebenfertigkeit"},
            "Rashani": {"level": 28, "rang": "Nebenfertigkeit"},
            "Tirem-Ag-Elf": {"level": 28, "rang": "Nebenfertigkeit"},
            "Waldmensch": {"level": 28, "rang": "Nebenfertigkeit"}
        }
    },
    "Wissen der Alten (offensiv)": {
        "Name": "Wissen der Alten (offensiv)",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+25% der Heldenstufe",
        "Mana-Kosten": "6 (7)",
        "Gegenstand": "Arkane Artefakte (offensiv)",
        "Angriffstyp": "Zauber",
        "Angriff": "In,Wi",
        "Verfuegbar": {
            "Bergzwerg": {"level": 28, "rang": "Nebenfertigkeit"},
            "Dinturan": {"level": 28, "rang": "Nebenfertigkeit"},
            "Gnerk": {"level": 28, "rang": "Nebenfertigkeit"},
            "Gnom": {"level": 28, "rang": "Nebenfertigkeit"},
            "Grenzländer": {"level": 28, "rang": "Nebenfertigkeit"},
            "Halbling": {"level": 28, "rang": "Nebenfertigkeit"},
            "Hügelzwerg": {"level": 28, "rang": "Nebenfertigkeit"},
            "Kerasi": {"level": 28, "rang": "Nebenfertigkeit"},
            "Mag-Mor-Elf": {"level": 28, "rang": "Nebenfertigkeit"},
            "Rashani": {"level": 28, "rang": "Nebenfertigkeit"},
            "Tirem-Ag-Elf": {"level": 28, "rang": "Nebenfertigkeit"},
            "Waldmensch": {"level": 28, "rang": "Nebenfertigkeit"}
        }
    },
    "Wissenschaftlicher Vortrag": {
        "Name": "Wissenschaftlicher Vortrag",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Eigene Gruppe",
        "Max. betroffene Helden": "+5 +4% der Heldenstufe",
        "Mana-Kosten": "4 (5)",
        "Gegenstand": "Buch",
        "Verfuegbar": {"Gelehrter": {"level": 15, "rang": "Nebenfertigkeit"}}
    },
    "Worte der Macht": {
        "Name": "Worte der Macht",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+3 +11% der Heldenstufe",
        "Mana-Kosten": "9 (10)",
        "Gegenstand": "Spruchrollen (offensiv)",
        "Angriffstyp": "Zauber",
        "Angriff": "In,Ch (+0)",
        "Schaden": "Wi,Ch (-70%)",
        "Verfuegbar": {"Gelehrter": {"level": 15, "rang": "Basisfertigkeit"}}
    },
    "Wurfwaffen": {
        "Name": "Wurfwaffen",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+1",
        "Mana-Kosten": "-",
        "Gegenstand": "Wurfwaffe",
        "Angriffstyp": "Fernkampf",
        "Angriff": "Sn,Ge",
        "Schaden": "Wa,St",
        "Verfuegbar": {
            "Barbar": {"level": 2, "rang": "Basisfertigkeit"},
            "Barde": {"level": 7, "rang": "Nebenfertigkeit"},
            "Dieb": {"level": 3, "rang": "Nebenfertigkeit"},
            "Gaukler": {"level": 2, "rang": "Basisfertigkeit"},
            "Gladiator": {"level": 5, "rang": "Nebenfertigkeit"},
            "Jäger": {"level": 6, "rang": "Nebenfertigkeit"},
            "Mönch": {"level": 6, "rang": "Nebenfertigkeit"},
            "Quacksalber": {"level": 3, "rang": "Klassenfremde Fertigkeit"},
            "Schütze": {"level": 3, "rang": "Nebenfertigkeit"}
        }
    },
    "Zauberformel sprechen": {
        "Name": "Zauberformel sprechen",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Ein Gegner",
        "Mana-Kosten": "3 (4)",
        "Gegenstand": "Spruchrollen (offensiv)",
        "Angriffstyp": "Zauber",
        "Angriff": "In,Ch (+0)",
        "Schaden": "Wi,Wa (-50%)",
        "Verfuegbar": {"Gelehrter": {"level": 3, "rang": "Basisfertigkeit"}}
    },
    "Zaubertrank anwenden": {
        "Name": "Zaubertrank anwenden",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Alle Mitstreiter auf einer Position",
        "Max. betroffene Helden": "+2 +4% der Heldenstufe",
        "Mana-Kosten": "-",
        "Gegenstand": "Zaubertrank",
        "Verfuegbar": {"Quacksalber": {"level": 15, "rang": "Nebenfertigkeit"}}
    },
    "Ziel markieren": {
        "Name": "Ziel markieren",
        "Typ": "Verschlechterung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner einer Position",
        "Max. betroffene Gegner": "+2 +34% der Heldenstufe",
        "Mana-Kosten": "2 (4)",
        "Gegenstand": "-",
        "Angriffstyp": "Fernkampf",
        "Angriff": "Wa,In",
        "Verfuegbar": {
            "Schamane": {"level": 6, "rang": "Nebenfertigkeit"},
            "Schütze": {"level": 8, "rang": "Nebenfertigkeit"},
            "Jäger": {"level": 7, "rang": "Nebenfertigkeit"}
        }
    },
    "Zwillingswurf": {
        "Name": "Zwillingswurf",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Alle Gegner",
        "Max. betroffene Gegner": "+2",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "Wurfwaffe",
        "Angriffstyp": "Fernkampf",
        "Angriff": "Ge,Wa (+0)",
        "Schaden": "Sn,Wa (+0)",
        "Finaler Wirkbonus:": "-10%",
        "Verfuegbar": {
            "Dieb": {"level": 12, "rang": "Nebenfertigkeit"},
            "Gaukler": {"level": 7, "rang": "Basisfertigkeit"}
        }
    },
    "Zähigkeit des Trolls": {
        "Name": "Zähigkeit des Trolls",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "2 (3)",
        "Gegenstand": "-",
        "Verfuegbar": {
            "Barbar": {"level": 19, "rang": "Klassenfremde Fertigkeit"},
            "Gestaltwandler": {"level": 21, "rang": "Klassenfremde Fertigkeit"}
        }
    },
    "Zähne und Klauen": {
        "Name": "Zähne und Klauen",
        "Typ": "Angriff",
        "Verwendbar": "- / in Runde",
        "Ziel": "Ein Gegner",
        "Mana-Kosten": "-",
        "Gegenstand": "-",
        "Angriffstyp": "Nahkampf",
        "Angriff": "Sn,Ge (+0)",
        "Schaden": "St,Ko (+0)",
        "Verfuegbar": {"Gestaltwandler": {"level": 1, "rang": "Klassenfremde Fertigkeit"}}
    },
    "Übermenschliche Reflexe": {
        "Name": "Übermenschliche Reflexe",
        "Typ": "Verbesserung",
        "Verwendbar": "- / in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "4 (5)",
        "Gegenstand": "Utensilien der Entrückung (Gladiator)",
        "Verfuegbar": {"Gladiator": {"level": 19, "rang": "Klassenfremde Fertigkeit"}}
    },
    "Überragender Fechter": {
        "Name": "Überragender Fechter",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "1 (2)",
        "Gegenstand": "-",
        "Verfuegbar": {"Hasardeur": {"level": 5, "rang": "Basisfertigkeit"}}
    },
    "Überraschender Ausfall": {
        "Name": "Überraschender Ausfall",
        "Typ": "Verbesserung",
        "Verwendbar": "in Vorrunde/ in Runde",
        "Ziel": "Selbst",
        "Mana-Kosten": "2 (3)",
        "Gegenstand": "-",
        "Verfuegbar": {
            "Barbar": {"level": 8, "rang": "Nebenfertigkeit"},
            "Gladiator": {"level": 12, "rang": "Nebenfertigkeit"},
            "Jäger": {"level": 9, "rang": "Nebenfertigkeit"},
            "Mönch": {"level": 7, "rang": "Nebenfertigkeit"},
            "Paladin": {"level": 19, "rang": "Nebenfertigkeit"},
            "Ritter": {"level": 6, "rang": "Nebenfertigkeit"}
        }
    },
    "Abwarten und nichts tun": {
        "Name": "Abwarten und nichts tun",
        "Verwendbar": "in Vorrunde / in Runde",
        "Verfuegbar": {
            "Bergzwerg": {"level": 1, "rang": "Basisfertigkeit"},
            "Dinturan": {"level": 1, "rang": "Basisfertigkeit"},
            "Gnerk": {"level": 1, "rang": "Basisfertigkeit"},
            "Gnom": {"level": 1, "rang": "Basisfertigkeit"},
            "Grenzländer": {"level": 1, "rang": "Basisfertigkeit"},
            "Halbling": {"level": 1, "rang": "Basisfertigkeit"},
            "Hügelzwerg": {"level": 1, "rang": "Basisfertigkeit"},
            "Kerasi": {"level": 1, "rang": "Basisfertigkeit"},
            "Mag-Mor-Elf": {"level": 1, "rang": "Basisfertigkeit"},
            "Rashani": {"level": 1, "rang": "Basisfertigkeit"},
            "Tirem-Ag-Elf": {"level": 1, "rang": "Basisfertigkeit"},
            "Waldmensch": {"level": 1, "rang": "Basisfertigkeit"},
        },
    },
};

// sort array by key [https://stackoverflow.com/questions/5467129/sort-javascript-object-by-key]
// Object.fromEntries(Object.entries(Fertigkeiten).sort())