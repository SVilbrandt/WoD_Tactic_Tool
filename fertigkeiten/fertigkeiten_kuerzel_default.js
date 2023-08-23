/**
 *
 * @description Liste aller Kürzel von Fertigkeitsnamen.
 * Neue Einträge können manuell hinzugefügt werden, vorher sollte die Datei zwecks Update-Fähigkeit aber umbenannt werden.
 * Das "_default" im Dateinamen reicht dafür.
 *
 * Shoutout an Achilleus, der diese Kürzel alle zusammen gesuchth at!
 *
 * @since 23.08.2023
 * @type Object
 */

const FertigkeitenKuerzel = {
    "Angriffszauber": "AZ",
    "Artefakt der Schwächung anwenden": "AdS",
    "Artefakt der Schwächung auf Gegnergruppe anwenden": "AdSaGa",
    "Artefakt der Stärkung anwenden": "AdS",
    "Artefakt der Stärkung auf Gruppe anwenden": "AdSaGa",
    "Aura des Paladins": "AdP",
    "Bannerträger": "BT",
    "Charismatischer Anführer": "CA",
    "Die Geister der Natur": "DGdN",
    "Doppelschlag": "DS",
    "Doppelschuss": "DS",
    "Durchschuss": "DS",
    "Echo der Elemente": "Elemente",
    "Echo der Freiheit": "Freiheit",
    "Echo der Wut": "Wut",
    "Eigene Waffe vergiften": "EWv",
    "Einzelschuss": "ES",
    "Erst mal was essen!": "Essen",
    "Experimentelle Stärkung": "Exp ST",
    "Experimenteller Manaschub": "Exp MS",
    "Fauler Zauber": "FZ",
    "Fechtwaffen": "FW",
    "Feldmarschall": "FM",
    "Gemeinsames Gebet": "Gem Gebet",
    "Gemeinsames Rauchen": "Gem Rauchen",
    "Gesang des Mutes": "GdM",
    "Gesang des Spotts": "GdS",
    "Große Runenmagie": "Gr Runenmagie",
    "Große Sphäre der Elemente": "GSdElemente",
    "Große Sphäre der Erholung": "GSdErholung",
    "Große Sphäre der Heilung": "GSdHeilung",
    "Große Sphäre der Macht": "GSdMacht",
    "Große Sphäre der Zuversicht": "GSdZuversicht",
    "Große Sphäre des Schutzes": "GSdSchutzes",
    "Großer Exorzismus": "Gr Exorzismus",
    "Großer Gesang des Mutes": "GGdM",
    "Großer Gesang des Spotts": "GGdS",
    "Großer Segen": "GS",
    "Hauptmann": "HM",
    "Heiliges Inferno des Akbeth": "Inferno",
    "Heilkräuter anwenden": "HK",
    "Hiebwaffen": "HW",
    "Kleiner Segen": "KS",
    "Klingenwirbel": "KW",
    "Kluge Ratschläge": "KR",
    "Kraft der Erde": "KdErde",
    "Kraft des Eises": "KdEises",
    "Krallenwirbel": "KW",
    "Kriegstanz": "KT",
    "Kräutertee bereiten": "KT",
    "Leichte Trance": "LT",
    "Lenker des göttlichen Sturmes": "LdgS",
    "Licht des Neumonds": "Neumond",
    "Licht des Vollmonds": "Vollmond",
    "Licht des abnehmenden Mondes": "abnehmender Mond",
    "Licht des zunehmenden Mondes": "zunehmender Mond",
    "Magische Markierung": "MM",
    "Magischer Schild": "Mag. Schild",
    "Magischer Schutz": "Mag. Schutz",
    "Manatransfer": "MT",
    "Meisterschuss": "MS",
    "Messerkampf": "MK",
    "Mittagspause": "MiPa",
    "Netz werfen": "Netz",
    "Pfeife rauchen": "Pfeife",
    "Prophezeien": "Prophen",
    "Rasende Wildsau": "RW",
    "Schnelligkeitsschub": "SN-Schub",
    "Schutzzauber": "SZ",
    "Schwertkampf": "SK",
    "Segnung des Feuers": "SdF",
    "Seilklingen": "SK",
    "Sphäre der Elemente": "SdElemente",
    "Sphäre der Erholung": "SdErholung",
    "Sphäre der Heilung": "SdHeilung",
    "Sphäre der Macht": "SdMacht",
    "Sphäre der Zuversicht": "SdZuversicht",
    "Sphäre des Schutzes": "SdSchutzes",
    "Stabkampf": "SK",
    "Stangenwaffen": "SW",
    "Technisches Verständnis": "TV",
    "Tiefe Trance": "TT",
    "Unterstützungszauber": "UZ",
    "Vasallentreue": "VT",
    "Vitalitätsschub": "VS",
    "Vorbeugende Heilung": "VH",
    "Waffengift": "WG",
    "Waffenloser Kampf": "WK",
    "Wesen des Gefährten (Gruppe)": "WdG (Gruppe)",
    "Wesen des Gefährten (Mitstreiter)": "WdG (Mitstreiter)",
    "Wesen des Gefährten (Selbst)": "WdG (Selbst)",
    "Wissen der Alten (defensiv)": "WdA (def)",
    "Wissen der Alten (offensiv)": "WdA (off)",
    "Wissenschaftlicher Vortrag": "WV",
    "Worte der Macht": "WdM",
    "Wurfwaffen": "WuWa",
    "Zaubertrank anwenden": "ZT",
    "Ziel markieren": "ZM",
    "Zwillingswurf": "ZW",
    "Abwarten und nichts tun": "Abwarten"
};

Object.keys(FertigkeitenKuerzel).forEach(sSkillKey => {
    if (typeof Fertigkeiten[sSkillKey] === "undefined") {
        console.warn(`Fertigkeit ${sSkillKey} existiert nicht!`);
        return;
    }
    
    Fertigkeiten[sSkillKey].Short = FertigkeitenKuerzel[sSkillKey];
});