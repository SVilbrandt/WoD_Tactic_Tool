"use strict";

const wodTacticTool = {
    aRooms: ["default", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    aBBCodes: [],
    sCopySuccess: "Taktik wurde in die Zwischenablage kopiert",
    sNotificationTypeInfo: "info",
    
    init() {
        const self = wodTacticTool;
        
        self.setElementVariables();
        self.getPlayerSkills();
        self.createGroupLevelDropDown();
        self.updateGroupLevelDropDown();
        self.createTableRows();
        self.updateAllSkillDropdowns();
        self.updateTabNavigation();
        self.createTabContainers();
        self.updateTableBodiesArray();
        self.addCopyDropDownOptions();
        self.setEventListener();
    },
    
    /*
     ***** START TOOL *****
     */
    setElementVariables() {
        const self = wodTacticTool;
        
        self.oTacticName = document.getElementById("TacticName");
        self.oSaveTactic = document.getElementById("TacticSave");
        self.oLoadTactic = document.getElementById("TacticGetLocalFile");
        self.oGroupLevelSelect = document.getElementById("TacticGroupLevel");
        self.oGeneralInformation = document.getElementById("TacticGeneralInformation");
        self.aTableBodies = document.querySelectorAll(".TacticTableBody");
        self.oTableRowTemplate = document.getElementById("TacticTableRowTemplate");
        self.oTacticMainSection = document.getElementById("TacticMainSection");
        self.oTabNav = document.getElementById("TacticTabNav");
        self.oTabSection = document.getElementById("TacticTabSection");
        self.oBBCodeOutputElement = document.getElementById("BBCode");
        self.oUserNotification = document.getElementById("TacticUserNotification");
    },
    
    setEventListener() {
        const self = wodTacticTool;
        
        self.oSaveTactic.addEventListener("click", () => {
            const oData = self.getDataForFile();
            const oBlob = self.createFileBlob(oData);
            
            self.downloadFile(oBlob);
        });
        
        self.oLoadTactic.addEventListener("change", e => {
            let oFileReader = self.loadData(e);
            
            oFileReader.addEventListener("load", e => {
                self.applySavedData(self.decodeData(e))
                self.showBBCode();
            });
        });
        
        self.oGroupLevelSelect.addEventListener("change", (e) => {
            self.updateAllSkillDropdowns();
            self.showBBCode();
        });
        
        self.oGeneralInformation.addEventListener("input", () => {
            self.showBBCode();
        });
        
        self.oTabNav.addEventListener("click", (e) => {
            let oTab = e.target.dataset.tab;
            
            if (oTab) {
                e.preventDefault();
                self.switchTabContainer(oTab);
            }
        });
        
        self.oTabSection.addEventListener("input", (e) => {
            let oTarget = e.target;
            
            if (oTarget.dataset.skillSelection === "") {
                let oSkillBox = oTarget.closest("[data-skill-box]");
                self.setItemDropdown(oSkillBox);
                self.addAdditionalSkillBox(oSkillBox);
            }
            
            if (oTarget.dataset.roomCopy === "") {
                self.copyRoom(oTarget);
            }
            
            self.updateBBCode(oTarget.closest("[data-tab-container]"));
            self.showBBCode();
        });
        
        self.oBBCodeOutputElement.addEventListener("click", (e) => {
            self.copyBBCode(e.target);
            self.sendUserNotification(self.sCopySuccess, self.sNotificationTypeInfo);
        });
    },
    
    getPlayerSkills() {
        Object.keys(Fertigkeiten).forEach((sSkillName) => {
            let oSkill = Fertigkeiten[sSkillName];
            
            Object.keys(oSkill.Verfuegbar).forEach((sAvailableKey) => {
                Object.keys(Spieler).forEach((sPlayerKey) => {
                    const oPlayer = Spieler[sPlayerKey];
                    let blIsAvailableGift = oPlayer.Gabenstrang !== "" && `${oPlayer.Klasse}/${oPlayer.Gabenstrang}` === sAvailableKey;
                    
                    if (oPlayer.Klasse === sAvailableKey || oPlayer.Volk === sAvailableKey || blIsAvailableGift) {
                        if (typeof oPlayer.Fertigkeiten.skills === "undefined") {
                            oPlayer.Fertigkeiten.skills = {
                                "vorrunde": [],
                                "hauptrunde": []
                            };
                        }
                        
                        if (!ZeigeSelbstSkills && oSkill.Ziel === "Selbst") {
                            return;
                        }
                        
                        // todo: Initiative? ja, nein?
                        
                        if (oSkill.Verwendbar.match("in Vorrunde")) {
                            oPlayer.Fertigkeiten.skills.vorrunde.push(sSkillName);
                        }
                        
                        if (oSkill.Verwendbar.match("in Runde")) {
                            oPlayer.Fertigkeiten.skills.hauptrunde.push(sSkillName);
                        }
                    }
                });
            });
        });
    },
    
    createTableRows() {
        const self = wodTacticTool;
        let oFragment = document.createDocumentFragment();
        
        Object.keys(Spieler).forEach((sSpielerKey) => {
            let oRow = self.oTableRowTemplate.content.cloneNode(true);
            
            self.setPlayerName(oRow, sSpielerKey);
            self.setFieldNamePlayer(oRow, sSpielerKey);
            
            oFragment.appendChild(oRow);
        });
        
        self.aTableBodies.forEach(oTableBody => {
            oTableBody.appendChild(oFragment.cloneNode(true));
        });
    },
    
    addCopyDropDownOptions() {
        const self = wodTacticTool;
        let oOptionTemplate = document.createElement("option");
        
        self.oTabSection.querySelectorAll("[data-tab-container]").forEach(oTabContainer => {
            let oFragment = document.createDocumentFragment();
            
            for (let i = 0; i <= self.aRooms.length - 1; i++) {
                let sRoomKey = self.aRooms[i];
                let sRoomLabel = sRoomKey;
                
                if (oTabContainer.dataset.tabContainer === self.aRooms[i]) {
                    continue;
                }
                
                if (sRoomKey === "default") {
                    sRoomLabel = "Standard";
                }
                
                let oOption = oOptionTemplate.cloneNode();
                oOption.value = sRoomKey;
                oOption.textContent = sRoomLabel;
                
                oFragment.appendChild(oOption);
            }
    
            oTabContainer.querySelector("[data-room-copy]").appendChild(oFragment);
        });
    },
    
    setPlayerName(oRow, sSpielerKey) {
        oRow.querySelector("[data-hero-field]").textContent = sSpielerKey;
        
    },
    
    setFieldNamePlayer(oRow, sSpielerKey) {
        oRow.querySelectorAll("[data-hero]").forEach(oField => {
            oField.dataset.hero = sSpielerKey;
        });
    },
    
    updateTableBodiesArray() {
        wodTacticTool.aTableBodies = document.querySelectorAll(".TacticTableBody");
    },
    
    /*
     ***** /START TOOL *****
     ***** TABS *****
     */
    
    updateTabNavigation() {
        const self = wodTacticTool;
        let oFragment = document.createDocumentFragment();
        let oAnchor = document.createElement("a");
        oAnchor.href = "";
        
        for (let i = 1; i <= self.aRooms.length - 1; i++) {
            let oNavElement = oAnchor.cloneNode();
            oNavElement.dataset.tab = self.aRooms[i];
            oNavElement.textContent = self.aRooms[i];
            
            oFragment.appendChild(oNavElement);
        }
        
        self.oTabNav.appendChild(oFragment);
    },
    
    createTabContainers() {
        const self = wodTacticTool;
        let oTabContainer = document.querySelector(`[data-tab-container="${self.aRooms[0]}"]`);
        let oFragment = document.createDocumentFragment();
        
        for (let i = 1; i <= self.aRooms.length - 1; i++) {
            let oClone = oTabContainer.cloneNode(true);
            oClone.classList.remove("active");
            oClone.setAttribute("data-tab-container", self.aRooms[i]);
            
            oFragment.appendChild(oClone);
        }
        
        document.querySelector("[data-tab-section]").appendChild(oFragment);
    },
    
    switchTabContainer(sNewActiveTab) {
        const self = wodTacticTool;
        
        self.oTabNav.querySelector("[data-tab].active").classList.remove("active");
        self.oTabNav.querySelector(`[data-tab="${sNewActiveTab}"]`).classList.add("active");
        
        self.oTabSection.querySelector("[data-tab-container].active").classList.remove("active");
        self.oTabSection.querySelector(`[data-tab-container="${sNewActiveTab}"]`).classList.add("active");
    },
    
    copyRoom(oCopySelect) {
        const self = wodTacticTool;
        let oTargetContainer = oCopySelect.closest("[data-tab-container]");
        let oSourceContainer = self.oTabSection.querySelector(`[data-tab-container="${oCopySelect.value}"]`);
        
        oTargetContainer.querySelector("[data-room-areals]").value = oSourceContainer.querySelector("[data-room-areals]").value;
        oTargetContainer.querySelector("[data-room-enemies]").value = oSourceContainer.querySelector("[data-room-enemies]").value;
        oTargetContainer.querySelector("[data-room-info]").value = oSourceContainer.querySelector("[data-room-info]").value;
        oTargetContainer.querySelector(".TacticTable").replaceWith(oSourceContainer.querySelector(".TacticTable").cloneNode(true));
        
        oSourceContainer.querySelectorAll(`[data-skill-selection]`).forEach(oElement => {
            if (oElement.value === "-") {
                return;
            }
            
            oTargetContainer.querySelector(`[data-skill-selection][data-hero="${oElement.dataset.hero}"][data-round="${oElement.dataset.round}"][data-index="${oElement.dataset.index}"]`).value = oElement.value;
        });
    
        oSourceContainer.querySelectorAll(`[data-item-selection]`).forEach(oElement => {
            if (oElement.value === "-") {
                return;
            }
        
            oTargetContainer.querySelector(`[data-item-selection][data-hero="${oElement.dataset.hero}"][data-round="${oElement.dataset.round}"][data-index="${oElement.dataset.index}"]`).value = oElement.value;
        });
        
        oCopySelect.value = "-";
    },
    
    /*
     ***** /TABS *****
     ***** GROUP LEVEL DROPDOWN *****
     */
    
    createGroupLevelDropDown() {
        let self = wodTacticTool;
        let oFragment = document.createDocumentFragment();
        
        for (let i = 1; i <= 40; i++) {
            let oLevelOption = document.createElement("option");
            
            oLevelOption.value = i.toString();
            oLevelOption.textContent = i.toString();
            oFragment.appendChild(oLevelOption);
        }
        
        self.oGroupLevelSelect.appendChild(oFragment);
    },
    
    updateGroupLevelDropDown() {
        let self = wodTacticTool;
        let iGroupLevel = 1;
        
        if (typeof GruppenStufe === "undefined") {
            return;
        }
        
        iGroupLevel = GruppenStufe;
        
        if (iGroupLevel <= 0) {
            iGroupLevel = 1;
        }
        
        if (iGroupLevel > 40) {
            iGroupLevel = 40;
        }
        
        self.oGroupLevelSelect.value = iGroupLevel;
    },
    
    /*
     ***** /GROUP LEVEL DROPDOWN *****
     ***** SKILL BOX *****
     */
    
    /**
     * todo: optionale gegenstände
     * todo: sonderfälle wie Mittagspause oder Barden-Lieder, wo die Skills Topf/Instrument brauchen, welche wiederum dann die VG benötigen
     * @param oDropdownBox
     */
    setItemDropdown(oDropdownBox) {
        let self = wodTacticTool;
        let oSkillNameField = oDropdownBox.querySelector("[data-skill-selection]");
        let sSkillName = oSkillNameField.value;
        let oItemDropDown = oDropdownBox.querySelector("[data-item-selection]");
        
        if (sSkillName === "-") {
            self.clearItemDropdown(oItemDropDown);
            self.hideItemDropdown(oItemDropDown);
            return;
        }
        
        let sItemClass = Fertigkeiten[sSkillName].Gegenstand;
        
        if (sItemClass === "-") {
            self.clearItemDropdown(oItemDropDown);
            self.hideItemDropdown(oItemDropDown);
            return;
        }
        
        if (typeof Items[sItemClass] === "undefined") {
            self.clearItemDropdown(oItemDropDown);
            self.hideItemDropdown(oItemDropDown);
            return;
        }
        
        self.addItemOptions(oItemDropDown, sItemClass);
        self.showItemDropdown(oItemDropDown);
    },
    
    addItemOptions(oItemDropDown, sItemClass) {
        let oFragment = document.createDocumentFragment();
        
        Items[sItemClass].forEach(oItem => {
            let oItemOption = document.createElement("option");
            
            oItemOption.value = oItem.name;
            oItemOption.textContent = oItem.name;
            oFragment.appendChild(oItemOption);
        });
        
        oItemDropDown.appendChild(oFragment);
    },
    
    addAdditionalSkillBox(oDropdownBox) {
        if (oDropdownBox.nextElementSibling) {
            return;
        }
        
        let self = wodTacticTool;
        let oDropdownClone = oDropdownBox.cloneNode(true);
        let oItemSelection = oDropdownClone.querySelector("[data-item-selection]");
        
        self.resetSkillDropdown(oDropdownClone);
        self.clearItemDropdown(oItemSelection);
        self.hideItemDropdown(oItemSelection);
        self.resetInstructionDropdown(oDropdownClone);
        self.updateFieldsIndex(oDropdownClone);
        
        oDropdownBox.parentNode.appendChild(oDropdownClone);
    },
    
    updateAllSkillDropdowns() {
        const self = wodTacticTool;
        const iGroupLevel = parseInt(self.oGroupLevelSelect.value);
        
        self.aTableBodies.forEach(oTableBody => {
            oTableBody.querySelectorAll("tr").forEach(oRow => {
                self.updateSkillDropdown(oRow, "vorrunde", iGroupLevel);
                self.updateSkillDropdown(oRow, "hauptrunde", iGroupLevel);
            });
            
            self.updateBBCode(oTableBody.closest("[data-tab-container]"), true);
        });
    },
    
    updateSkillDropdown(oRow, sRoundType, iGroupLevel) {
        let sPlayerKey = oRow.querySelector("[data-hero-field]").textContent;
        let oPlayer = Spieler[sPlayerKey];
        let sLastSkill = "";
        
        oPlayer.Fertigkeiten.skills[sRoundType].forEach(sSkillName => {
            let oSkill = Fertigkeiten[sSkillName];
            let sGiftPath = `${oPlayer.Klasse}/${oPlayer.Gabenstrang}`;
            
            let oSkillLevel = oSkill.Verfuegbar[oPlayer.Klasse] ?? oSkill.Verfuegbar[oPlayer.Volk] ?? oSkill.Verfuegbar[sGiftPath];
            let blUpdate = true;
            
            if (oPlayer.Fertigkeiten.zeigeNur[sRoundType].length > 0 && !oPlayer.Fertigkeiten.zeigeNur[sRoundType].includes(sSkillName)) {
                if (sSkillName !== Fertigkeiten["Abwarten und nichts tun"].Name) {
                    blUpdate = false;
                }
            }
            
            if (oPlayer.Fertigkeiten.zeigeNicht[sRoundType].includes(sSkillName)) {
                blUpdate = false;
            }
            
            if (blUpdate) {
                oRow.querySelectorAll(`[data-${sRoundType}-box]`).forEach(oBox => {
                    let oSkillSelect = oBox.querySelector("[data-skill-selection]");
                    let oSkillEntry = oSkillSelect.querySelector(`option[value="${sSkillName}"]`);
                    let oLastSkillEntry = oSkillSelect.querySelector(`option[value="${sLastSkill}"]`) ?? oSkillSelect.querySelector("option[value='-']");
                    
                    if (oSkillEntry && iGroupLevel < oSkillLevel.level) {
                        oSkillEntry.parentElement.removeChild(oSkillEntry);
                    }
                    
                    if (!oSkillEntry && iGroupLevel >= oSkillLevel.level) {
                        let oNewSkillEntry = document.createElement("option");
                        oNewSkillEntry.value = sSkillName;
                        oNewSkillEntry.textContent = sSkillName;
                        oLastSkillEntry.parentNode.insertBefore(oNewSkillEntry, oLastSkillEntry.nextSibling);
                    }
                });
                
                if (iGroupLevel >= oSkillLevel.level) {
                    sLastSkill = sSkillName;
                }
            }
        });
    },
    
    updateFieldsIndex(oDropdownBox) {
        let oSkillSelection = oDropdownBox.querySelector("[data-skill-selection]");
        let oItemSelection = oDropdownBox.querySelector("[data-item-selection]");
        let oInstructionText = oDropdownBox.querySelector("[data-instructions]");
        let iOldIndex = parseInt(oSkillSelection.dataset.index);
        let iNewIndex = (iOldIndex + 1).toString();
        
        oSkillSelection.dataset.index = iNewIndex;
        oItemSelection.dataset.index = iNewIndex;
        oInstructionText.dataset.index = iNewIndex;
    },
    
    showItemDropdown(oItemDropDown) {
        oItemDropDown.classList.remove("invisible");
    },
    
    hideItemDropdown(oItemDropDown) {
        oItemDropDown.classList.add("invisible");
    },
    
    clearItemDropdown(oItemDropDown) {
        oItemDropDown.querySelectorAll("option:not([value='-'])").forEach(oOption => {
            oOption.parentElement.removeChild(oOption);
        });
        oItemDropDown.value = "-";
    },
    
    resetSkillDropdown(oDropdownBox) {
        oDropdownBox.querySelector("[data-skill-selection]").value = "-";
    },
    
    resetInstructionDropdown(oDropdownBox) {
        oDropdownBox.querySelector("[data-instructions]").value = "";
    },
    
    /*
     ***** /SKILL BOX *****
     ***** SAVE FILE *****
     */
    
    getDataForFile() {
        const self = wodTacticTool;
        let oData = {
            "tactic-name": self.oTacticName.value,
            "group-level": self.oGroupLevelSelect.value,
            "general-info": self.oGeneralInformation.value,
            "rooms": {}
        };
        
        self.oTabSection.querySelectorAll("[data-tab-container]").forEach(oTabContainer => {
            let sDungeonRoom = oTabContainer.dataset.tabContainer;
            let sRoomAreals = oTabContainer.querySelector("[data-room-areals]").value;
            let sRoomEnemies = oTabContainer.querySelector("[data-room-enemies]").value;
            let sRoomInfos = oTabContainer.querySelector("[data-room-info]").value;
            
            if (parseInt(sRoomAreals) > 1) {
                if (typeof oData.rooms[sDungeonRoom] === "undefined") {
                    oData.rooms[sDungeonRoom] = {};
                }
                oData.rooms[sDungeonRoom]["areals"] = sRoomAreals;
            }
            
            if (sRoomEnemies !== "") {
                if (typeof oData.rooms[sDungeonRoom] === "undefined") {
                    oData.rooms[sDungeonRoom] = {};
                }
                oData.rooms[sDungeonRoom]["enemies"] = sRoomEnemies;
            }
            
            if (sRoomInfos !== "") {
                if (typeof oData.rooms[sDungeonRoom] === "undefined") {
                    oData.rooms[sDungeonRoom] = {};
                }
                oData.rooms[sDungeonRoom]["info"] = sRoomInfos;
            }
            
            oTabContainer.querySelector(".TacticTableBody").querySelectorAll("tr").forEach(oRow => {
                oRow.querySelectorAll("[data-skill-selection]").forEach(oField => {
                    if (oField.value !== "-") {
                        oData = self.assignRoomDataToFileObject(oData, oField, sDungeonRoom, "skills");
                    }
                });
                
                oRow.querySelectorAll("[data-item-selection]").forEach(oField => {
                    if (oField.value !== "-") {
                        oData = self.assignRoomDataToFileObject(oData, oField, sDungeonRoom, "items");
                    }
                });
                
                oRow.querySelectorAll("[data-instructions]").forEach(oField => {
                    if (oField.value !== "") {
                        oData = self.assignRoomDataToFileObject(oData, oField, sDungeonRoom, "instructions");
                    }
                });
            });
        });
        
        oData["bbcode"] = self.oBBCodeOutputElement.value;
        
        return oData;
    },
    
    assignRoomDataToFileObject(oData, oField, sDungeonRoom, sValueType) {
        let sRoundType = oField.dataset.round;
        let sHeroName = oField.dataset.hero
        let sIndex = oField.dataset.index;
        
        if (typeof oData.rooms[sDungeonRoom] === "undefined") {
            oData.rooms[sDungeonRoom] = {};
        }
        if (typeof oData.rooms[sDungeonRoom]["heroes"] === "undefined") {
            oData.rooms[sDungeonRoom]["heroes"] = {};
        }
        if (typeof oData.rooms[sDungeonRoom]["heroes"][sHeroName] === "undefined") {
            oData.rooms[sDungeonRoom]["heroes"][sHeroName] = {};
        }
        if (typeof oData.rooms[sDungeonRoom]["heroes"][sHeroName][sValueType] === "undefined") {
            oData.rooms[sDungeonRoom]["heroes"][sHeroName][sValueType] = {};
        }
        if (typeof oData.rooms[sDungeonRoom]["heroes"][sHeroName][sValueType][sRoundType] === "undefined") {
            oData.rooms[sDungeonRoom]["heroes"][sHeroName][sValueType][sRoundType] = {};
        }
        
        oData.rooms[sDungeonRoom]["heroes"][sHeroName][sValueType][sRoundType][sIndex] = oField.value;
        
        return oData;
    },
    
    createFileBlob(oData) {
        return new Blob([JSON.stringify(oData)], {type: "application/json"});
    },
    
    downloadFile(oBlob) {
        let self = wodTacticTool;
        
        self.oSaveTactic.href = window.URL.createObjectURL(oBlob);
        self.oSaveTactic.download = `${wodTacticTool.oTacticName.value}.json`;
    },
    
    /*
     ***** /SAVE FILE *****
     ***** LOAD FILE *****
     */
    
    loadData(oInputChangeEvent) {
        let oFileReader = new FileReader();
        
        oFileReader.readAsDataURL(oInputChangeEvent.target.files[0]);
        
        return oFileReader;
    },
    
    decodeData(e) {
        // [https://developer.mozilla.org/en-US/docs/Glossary/Base64#the_unicode_problem]
        // [https://stackoverflow.com/a/65075578]
        let sJsonString = e.target.result.substring(29);
        let sBinString = atob(sJsonString);
        let sFinalString = Uint8Array.from(sBinString, (m) => m.codePointAt(0));
        let txtDecoder = new TextDecoder();
        
        return JSON.parse(txtDecoder.decode(sFinalString));
    },
    
    applySavedData(oData) {
        const self = wodTacticTool;
        
        self.applyGeneralData(oData);
        self.updateAllSkillDropdowns();
        
        if (typeof oData.rooms === "undefined") {
            return;
        }
        
        Object.keys(oData.rooms).forEach(sRoomKey => {
            let oRoomTab = self.oTabSection.querySelector(`[data-tab-container="${sRoomKey}"]`);
            let oHeroData = oData.rooms[sRoomKey].heroes;
            
            self.applyGeneralRoomData(oData.rooms[sRoomKey], oRoomTab, sRoomKey);
            
            if (typeof oHeroData === "undefined") {
                return;
            }
            
            Object.keys(oHeroData).forEach(sHeroKey => {
                let oHeroSkills = oHeroData[sHeroKey].skills;
                let oHeroItems = oHeroData[sHeroKey].items;
                let oHeroInstructions = oHeroData[sHeroKey].instructions;
                
                self.applySavedHeroData(oHeroSkills, oRoomTab, sHeroKey, "data-skill-selection");
                self.applySavedHeroData(oHeroItems, oRoomTab, sHeroKey, "data-item-selection");
                self.applySavedHeroData(oHeroInstructions, oRoomTab, sHeroKey, "data-instructions");
            });
    
            self.updateBBCode(oRoomTab);
        });
    },
    
    applyGeneralData(oData) {
        const self = wodTacticTool;
        
        self.oGroupLevelSelect.value = oData["group-level"];
        self.oTacticName.value = oData["tactic-name"];
        self.oGeneralInformation.value = oData["general-info"];
    },
    
    applyGeneralRoomData(oRoomData, oRoomTab) {
        if (oRoomData.areals) {
            oRoomTab.querySelector("[data-room-areals]").value = oRoomData.areals;
        }
        
        if (oRoomData.enemies) {
            oRoomTab.querySelector("[data-room-enemies]").value = oRoomData.enemies;
        }
        
        if (oRoomData.info) {
            oRoomTab.querySelector("[data-room-info]").value = oRoomData.info;
        }
    },
    
    applySavedHeroData(oHeroTypeData, oRoomTab, sHeroKey, sDataType) {
        let self = wodTacticTool;
        
        if (typeof oHeroTypeData === "undefined") {
            return;
        }
        
        Object.keys(oHeroTypeData).forEach(sRoundType => {
            Object.keys(oHeroTypeData[sRoundType]).forEach(sIndex => {
                let oField = oRoomTab.querySelector(`[${sDataType}][data-hero="${sHeroKey}"][data-round="${sRoundType}"][data-index="${sIndex}"]`);
                
                // kann passieren wenn taktiken von einer gruppe zur nächsten übertragen werden zum beispiel
                // todo: in solchen fällen gucken dass die gruppenzusammenstellung überschrieben wird?
                if (!oField) {
                    return;
                }
                
                let oDropDownBox = oField.closest("[data-skill-box]");
    
                oField.value = oHeroTypeData[sRoundType][sIndex];
                
                if (sDataType === "data-skill-selection") {
                    self.setItemDropdown(oDropDownBox);
                    self.addAdditionalSkillBox(oDropDownBox);
                }
            });
        });
    },
    
    /*
     ***** /LOAD FILE *****
     ***** BBCODE *****
     */
    
    updateBBCode(oContainer, blUpdateOnly = false) {
        let self = wodTacticTool;
        let oGeneralText = oContainer.querySelector(".TacticGeneral");
        let oEnemiesText = oContainer.querySelector(".TacticEnemies");
        let oArealNumbers = oContainer.querySelector("[data-room-areals]");
        let sContainerKey = oContainer.getAttribute("data-tab-container");
        let iBBCodeIndex = parseInt(sContainerKey) > 0 ? parseInt(sContainerKey) : 0;
        let sBBCode = "";
        
        if (blUpdateOnly && typeof self.aBBCodes[iBBCodeIndex] === "undefined") {
            return;
        }
        
        let sSpoilerTitle = iBBCodeIndex > 0 ? `Level ${iBBCodeIndex}` : "Standard";
        let sAreals = oArealNumbers.value > 1 ? ` (${oArealNumbers.value} Bereiche)` : "";
        sBBCode += `[spoiler title="${sSpoilerTitle}${sAreals}"]${self.preserveLinebreaks(oEnemiesText.value)}[/spoiler][br]`;
        
        if (oGeneralText.value !== "") {
            sBBCode += `${self.preserveLinebreaks(oGeneralText.value)}[br][br]`;
        }
        
        sBBCode += `[table border=${TabellenOptionen.table.border}][tr]`
            + `[th align=${TabellenOptionen.head.player.align} valign=${TabellenOptionen.head.player.valign}]${TabellenOptionen.head.player.text}[/th]`
            + `[th align=${TabellenOptionen.head.vorrunde.align} valign=${TabellenOptionen.head.vorrunde.valign}]${TabellenOptionen.head.vorrunde.text}[/th]`
            + `[th align=${TabellenOptionen.head.hauptrunde.align} valign=${TabellenOptionen.head.hauptrunde.valign}]${TabellenOptionen.head.hauptrunde.text}[/th][/tr]`;
        
        oContainer.querySelector(".TacticTableBody").querySelectorAll("tr").forEach((oRow) => {
            let sPlayerKey = oRow.querySelector("[data-hero-field]").textContent;
            
            sBBCode += `[tr]`
                + `[td align=${TabellenOptionen.body.player.align} valign=${TabellenOptionen.body.player.valign}]`
                + `[hero:${Spieler[sPlayerKey].Held}|${sPlayerKey}][/td]`
                + `[td align=${TabellenOptionen.body.vorrunde.align} valign=${TabellenOptionen.body.vorrunde.valign}]`;
            
            sBBCode += self.addSkillToBBCode(oRow, "vorrunde");
            
            sBBCode += `[/td][td align=${TabellenOptionen.body.hauptrunde.align} valign=${TabellenOptionen.body.hauptrunde.valign}]`;
            
            sBBCode += self.addSkillToBBCode(oRow, "hauptrunde");
            
            sBBCode += `[/td][/tr]`;
        });
        
        sBBCode += "[/table][br][br][hr][br][br]";
        
        self.aBBCodes[iBBCodeIndex] = sBBCode;
    },
    
    addSkillToBBCode(oRow, sRoundType) {
        let sBBCode = "";
        
        oRow.querySelectorAll(`[data-${sRoundType}-box]`).forEach((oRoundBox, iIndex) => {
            let oSkillDropDown = oRoundBox.querySelector("[data-skill-selection]");
            let oItemDropdown = oRoundBox.querySelector("[data-item-selection]");
            let oInstructionText = oRoundBox.querySelector("[data-instructions]");
            let blShowItemBrackets = true;
            
            if (oSkillDropDown.value === "-" && iIndex > 0 && !oInstructionText.value) {
                return;
            }
            
            if (iIndex > 0) {
                sBBCode += ", ";
            }
            
            if (oSkillDropDown.value === "-") {
                if (!oInstructionText.value) {
                    sBBCode += "-";
                }
            } else {
                if (oItemDropdown.value !== "-" && (ZeigeItemAnstattSkill || (ZeigeItemAnstattSkillSpecial && SpecialItemKlassen.includes(Fertigkeiten[oSkillDropDown.value].Gegenstand)))) {
                    blShowItemBrackets = false;
                } else {
                    if (oSkillDropDown.value === Fertigkeiten["Abwarten und nichts tun"].Name) {
                        sBBCode += oSkillDropDown.value;
                    } else {
                        sBBCode += `[skill: ${oSkillDropDown.value}`;
                        
                        if (typeof Fertigkeiten[oSkillDropDown.value].Short !== "undefined") {
                            sBBCode += `|${Fertigkeiten[oSkillDropDown.value].Short}`;
                        }
                        
                        sBBCode += "]"
                    }
                }
            }
            
            if (oItemDropdown.value !== "-") {
                if (blShowItemBrackets) {
                    sBBCode += " (";
                }
                sBBCode += `[item: ${oItemDropdown.value}]`;
                if (blShowItemBrackets) {
                    sBBCode += ")";
                }
            }
            
            if (oInstructionText.value !== "") {
                sBBCode += ` ${oInstructionText.value}`;
            }
        });
        
        return sBBCode;
    },
    
    showBBCode() {
        const self = wodTacticTool;
        let sCompleteBBCode = "";
        
        if (self.oGeneralInformation.value !== "") {
            sCompleteBBCode = `[quote=Allgemeines]${self.preserveLinebreaks(self.oGeneralInformation.value)}[/quote][br][br]`;
        }
        
        self.aBBCodes.forEach((sBBCode, iIndex) => {
            if (iIndex === self.aBBCodes.length - 1) {
                // remove space after last table
                sBBCode = sBBCode.replace(/\[br]\[br]\[hr]\[br]\[br]$/, "");
            }
            sCompleteBBCode += sBBCode;
        });
        
        self.oBBCodeOutputElement.textContent = sCompleteBBCode;
    },
    
    copyBBCode(oBBCodeElement) {
        oBBCodeElement.select();
        oBBCodeElement.setSelectionRange(0, 99999); // For mobile devices
        navigator.clipboard.writeText(oBBCodeElement.value);
    },
    
    preserveLinebreaks(sText) {
        //convert all linebreaks
        sText = sText.replace(/\n/gm, "[br]");
        
        //remove linebreaks between table elements
        sText = sText.replace(/(\[table[A-z0-9=\s*]*?]\s*?)(\[br])+/gm, "$1");
        sText = sText.replace(/(\[tr[A-z0-9=\s*]*?]\s*?)(\[br])+/gm, "$1");
        sText = sText.replace(/(\[\/th]\s*?)(\[br])+/gm, "$1");
        sText = sText.replace(/(\[\/td]\s*?)(\[br])+/gm, "$1");
        sText = sText.replace(/(\[\/tr]\s*?)(\[br])+/gm, "$1");
        
        //remove linebreaks between list-elements
        sText = sText.replace(/(\[list[A-z0-9=\s*]*?]\s*?)(\[br])+/gm, "$1");
        sText = sText.replace(/(\[br])+(\[\*[A-z0-9=\s*]*?]\s*?)/gm, "$2");
        
        return sText
    },
    
    /*
     ***** /BBCODE *****
     ***** HELPERS *****
     */
    
    sendUserNotification(sText, sNotificationType) {
        const self = wodTacticTool;
        const sFadeAwayClass = "fade-away";
        
        self.oUserNotification.textContent = sText;
        
        if (sNotificationType === self.sNotificationTypeInfo) {
            self.oUserNotification.classList.add(sFadeAwayClass);
            
            setTimeout(() => {
                self.oUserNotification.innerHTML = "&nbsp;";
                self.oUserNotification.classList.remove(sFadeAwayClass);
            }, 5000);
        }
    },
};

document.addEventListener("DOMContentLoaded", () => {
    wodTacticTool.init();
});