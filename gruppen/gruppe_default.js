/**
 * @description Liste der Helden der Gruppe
 *
 * @example
 * "Heldenhafter Held!": {
 *     "Held": "Der Held",
 *     "Klasse": "Abenteuer",
 *     "Volk": "Ausgestorbenes Volk",
 *     "Fertigkeiten": {
 *         "zeigeNur": {
 *              "vorrunde": ["Ruhm und Ehre!"],
 *              "hauptrunde": [],
 *         }
 *         "zeigeNicht": {
 *              "vorrunde": [],
 *              "hauptrunde": ["Fluch aus Kampf"],
 *         }
 *     },
 *     "Gabenstrang": "Der Eingebildete"
 * },
 *
 * @example2 für die alten Hasen, die den Flammensegen-Priester noch kennen
 * "Flammensegen-Priester": {
 *     "Held": "Der Flammensegner",
 *     "Klasse" "Priester",
 *     "Volk": "Halbling",
 *     "Fertigkeiten": {
 *         "zeigeNur": {
 *             "vorrunde": ["Flammensegen"],
 *             "hauptrunde": ["Flammensegen", "Mittagspause"],
 *         },
 *         "zeigeNicht": {
 *             "vorrunde": [],
 *             "hauptrunde": []
 *         }
 *     }
 * },
 *
 * "Heldenhafter Held!" = Name, der in der Taktik angezeigt wird. Muss einmalig sein!
 * Held: Name, der zum Verlinken der angezeigten Helden verwendet wird ([hero: Held:Heldenhafter Held!])
 * Klasse/Volk: Klassen- und Volkangabe zur Ermittelung der verfügbaren Fertigkeiten
 * Fertigkeiten.zeigeNur: Zeige nur diese Fertigkeiten in der Auswahlliste an und keine anderen
 * Fertigkeiten.zeigeNicht: Zeige diese Fertigkeiten nicht an
 * zeigeNur überschreibt zeigeNicht
 * Gabenstrang: die gewählte Ausrichtung der Klasse ab Level 20, notwendig für die Anzeige der dazugehörigen Gaben
 *
 * Alle Felder müssen vorhanden sein!
 * Es müssen aber keine Fertigkeiten bei zeigeNur oder zeigeNicht angegeben werden, ein leeres [] reicht aus
 * Vorrunde und Hauptrunde werden getrennt voneinander behandelt.
 *
 * @type Object
 */
const Spieler = {
    "Ritter (Blocker)": {
        "Held": "Achilleus",
        "Klasse": "Ritter",
        "Volk": "Halbling",
        "Fertigkeiten": {
            "zeigeNur": {
                "vorrunde": [],
                "hauptrunde": [],
            },
            "zeigeNicht": {
                "vorrunde": [],
                "hauptrunde": [],
            },
        },
        "Gabenstrang": ""
    },
    "Gaukler": {
        "Held": "skaarjwarr",
        "Klasse": "Gaukler",
        "Volk": "Kerasi",
        "Fertigkeiten": {
            "zeigeNur": {
                "vorrunde": [],
                "hauptrunde": [],
            },
            "zeigeNicht": {
                "vorrunde": [],
                "hauptrunde": [],
            },
        },
        "Gabenstrang": ""
    },
    "Gestaltwandler": {
        "Held": "Papalagi",
        "Klasse": "Gestaltwandler",
        "Volk": "Gnom",
        "Fertigkeiten": {
            "zeigeNur": {
                "vorrunde": [],
                "hauptrunde": [],
            },
            "zeigeNicht": {
                "vorrunde": [],
                "hauptrunde": [],
            },
        },
        "Gabenstrang": ""
    },
    "Jäger": {
        "Held": "Darkztar",
        "Klasse": "Jäger",
        "Volk": "Mag-Mor-Elf",
        "Fertigkeiten": {
            "zeigeNur": {
                "vorrunde": [],
                "hauptrunde": [],
            },
            "zeigeNicht": {
                "vorrunde": [],
                "hauptrunde": [],
            },
        },
        "Gabenstrang": ""
    },
    "Paladin": {
        "Held": "killtec_",
        "Klasse": "Paladin",
        "Volk": "Rashani",
        "Fertigkeiten": {
            "zeigeNur": {
                "vorrunde": [],
                "hauptrunde": [],
            },
            "zeigeNicht": {
                "vorrunde": [],
                "hauptrunde": [],
            },
        },
        "Gabenstrang": ""
    },
    "Barde": {
        "Held": "Fernohl",
        "Klasse": "Barde",
        "Volk": "Grenzländer",
        "Fertigkeiten": {
            "zeigeNur": {
                "vorrunde": [],
                "hauptrunde": [],
            },
            "zeigeNicht": {
                "vorrunde": [],
                "hauptrunde": [],
            },
        },
        "Gabenstrang": ""
    },
    "Priester": {
        "Held": "Mortilla",
        "Klasse": "Priester",
        "Volk": "Gnom",
        "Fertigkeiten": {
            "zeigeNur": {
                "vorrunde": [],
                "hauptrunde": [],
            },
            "zeigeNicht": {
                "vorrunde": [],
                "hauptrunde": [],
            },
        },
        "Gabenstrang": ""
    },
    "Gelehrter": {
        "Held": "Phoe",
        "Klasse": "Gelehrter",
        "Volk": "Tirem-Ag-Elf",
        "Fertigkeiten": {
            "zeigeNur": {
                "vorrunde": [],
                "hauptrunde": [],
            },
            "zeigeNicht": {
                "vorrunde": [],
                "hauptrunde": [],
            },
        },
        "Gabenstrang": ""
    },
    "Magier": {
        "Held": "Kristallranke",
        "Klasse": "Magier",
        "Volk": "Bergzwerg",
        "Fertigkeiten": {
            "zeigeNur": {
                "vorrunde": [],
                "hauptrunde": [],
            },
            "zeigeNicht": {
                "vorrunde": [],
                "hauptrunde": [],
            },
        },
        "Gabenstrang": ""
    },
    "Klingenmagier": {
        "Held": "DunkleKlinge",
        "Klasse": "Klingenmagier",
        "Volk": "Gnom",
        "Fertigkeiten": {
            "zeigeNur": {
                "vorrunde": [],
                "hauptrunde": [],
            },
            "zeigeNicht": {
                "vorrunde": [
                    Fertigkeiten.Elementarschleier.Name,
                ],
                "hauptrunde": [
                    Fertigkeiten["Fauler Zauber"].Name,
                    Fertigkeiten.Angriffszauber.Name,
                    Fertigkeiten["Segnung des Feuers"].Name,
                    Fertigkeiten["Artefakt der Schwächung anwenden"].Name,
                ],
            },
        },
        "Gabenstrang": "Illusionist"
    },
    "Schamane": {
        "Held": "Pankraz",
        "Klasse": "Schamane",
        "Volk": "Hügelzwerg",
        "Fertigkeiten": {
            "zeigeNur": {
                "vorrunde": [],
                "hauptrunde": [],
            },
            "zeigeNicht": {
                "vorrunde": [],
                "hauptrunde": [],
            },
        },
        "Gabenstrang": ""
    },
    "Quacksalber": {
        "Held": "Stewer",
        "Klasse": "Quacksalber",
        "Volk": "Gnerk",
        "Fertigkeiten": {
            "zeigeNur": {
                "vorrunde": [],
                "hauptrunde": [],
            },
            "zeigeNicht": {
                "vorrunde": [],
                "hauptrunde": [],
            },
        },
        "Gabenstrang": ""
    }
};