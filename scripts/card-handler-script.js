import { addResources } from "./resource-handler-script.js";
import { updateAllUnitImages } from "./unit-handler-script.js";
import { handleCombat, removeUnits } from "./combat-handler-script.js";
import { drawRandomRegularCard , detectOpenCardSlots} from "./deck-handler-script.js";

import { cards, regCards, everyCardSlots } from "../data/cardData.js";
import { states } from "../data/stateData.js";

import { attachStateClickListeners } from "./sidebar-script.js"; 
import { disableEndTurnButton, enableEndTurnButton } from "./end-turn-script.js";

import { cardSelectionView, clearCardSelectionView, stateSelectionView } from "./card-selection-view.js";

import { clickSFX } from "../data/soundData.js";

// this is all for movement idk why it just is
let totalDivs = null;
let isTheCardSelected = false;
let totalRequestedDivs = null;
let latRequestedDivs = null;
let gerRequestedDivs = null;

// modal elements
const modalBtn1 = document.getElementById("modal-btn-1");
const modalBtn2 = document.getElementById("modal-btn-2");
const modalBtn3 = document.getElementById("modal-btn-3");
const modalText = document.getElementById("modal-text");

const fullScreenCover = document.getElementById("full-screen-cover");

// Selected State Actions
const selectedStateActionButton1 = document.getElementById("selected-state-action-button-1");
const selectedStateActionButton2 = document.getElementById("selected-state-action-button-2");

const selectedStateActionText = document.getElementById("selected-state-action-text-container");

const selectedStateActionInput1 = document.getElementById("selected-state-action-input-1");
const selectedStateActionInput2 = document.getElementById("selected-state-action-input-2");

function clearStateListeners(states) {
    states.forEach(state => {
        let newElement = state.path.cloneNode(true);
        state.path.parentNode.replaceChild(newElement, state.path);
        state.path = newElement;
    });
    attachStateClickListeners(); // Re-attach state click listeners
}

export function updateCardStates() {
    everyCardSlots.forEach(cardSlot => {
        if (cardSlot.used === false) {
            cardSlot.btn.style.display = "block";
        } else {
            cardSlot.btn.style.display = "none";
            cardSlot.id = "";
        };
        return;
    });
};

document.addEventListener("DOMContentLoaded", function() {

    fullScreenCover.style.animation = "fadeInAnimation 3s ease 1 forwards";

    console.log("Document Loaded");

    everyCardSlots.forEach(cardSlot => {
        cardSlot.btn.addEventListener("click", function() {
            console.log("Card Clicked");

            let cardIDFinder = cardSlot.currentCardID;
            cards.forEach(card => {
                if ( card.id === cardIDFinder) {
                    if (isTheCardSelected === false) {
                        console.log("isTheCardSelected is indeed false");
        
                        isTheCardSelected = true;
                        let antiReSelectRule = false;
                        let cardID = card.id
                        console.log(`cardID: ${cardID}`);
                        selectedStateActionButton1.disabled = false;
                        selectedStateActionButton2.disabled = false;
                        disableEndTurnButton();

                        clickSFX.play();

                        console.log(`cardID b4 func: ${cardID}`);
                        cardSelectionView(cardID);
                           // Update modal buttons to display options
                        modalBtn1.innerHTML = card.option1.map(option => `${option.name} ${option.level}`).join(", ");
                        modalBtn2.innerHTML = card.option2.map(option => `${option.name} ${option.level}`).join(", ");
    
                        if (card.option2[0].name === "None") {
                            modalBtn2.style.display = "none";
                        } else {
                            modalBtn2.style.display = "inline-block";
                        }
    
                        if (card.option2[0].name === "alliedShips") {
                            modalBtn2.innerHTML = "Shore Bombardment";
                        };
    
                        const actions = {
                            "March": (level) => {
                        
                                let isCardUsed = false;
                                let marchRecursion = 1;
                                const abortController = new AbortController();
                        
                                console.log("March action activated");
                        
                                stateSelectionView();

                                function selectState() {
                                    console.log("selectState called");
                                    clearStateListeners(states);
                                    states.forEach(state => {
                                        state.path.addEventListener("click", function () {
                                            console.log(`State clicked: ${state.name}`);
                                            if (state.ownedBy === "lat" && !state.isDisabled && !isCardUsed && !antiReSelectRule) {
                                                console.log(`Valid state selected: ${state.name}`);
                        
                                                isCardUsed = false;
                        
                                                modalText.innerHTML = "Please select division count that you will move!";
                                                selectedStateActionInput1.style.display = "inline-block";
                                                selectedStateActionInput2.style.display = "inline-block";
                                                selectedStateActionText.style.display = "flex";
                                                selectedStateActionButton1.style.display = "block";
                                                selectedStateActionButton1.disabled = false;
                                                selectedStateActionButton1.innerHTML = "CONFIRM";
                                                selectedStateActionButton2.style.display = "block";
                                                selectedStateActionButton2.disabled = false;
                                                selectedStateActionButton2.innerHTML = "CANCEL";
                        
                                                totalDivs = Number(state.latUnits) + Number(state.gerUnits) + Number(state.sovUnits);
                                                console.log(`Total divisions: ${totalDivs}`);
                        
                                                selectedStateActionButton1.onclick = function () {
                                                    console.log("Confirm Button clicked");

                                                    clickSFX.play();
                        
                                                    if (!antiReSelectRule) {
                                                        latRequestedDivs = Number(selectedStateActionInput1.value);
                                                        gerRequestedDivs = Number(selectedStateActionInput2.value);
                        
                                                        totalRequestedDivs = latRequestedDivs + gerRequestedDivs;
                                                        console.log(`Total requested divisions: ${totalRequestedDivs}`);
                                                        console.log(`Total divisions: ${totalDivs}`);
                        
                                                        // Validate the division request
                                                        if (
                                                            totalRequestedDivs <= 5 && 
                                                            totalRequestedDivs > 0 &&
                                                            totalRequestedDivs < totalDivs &&
                                                            latRequestedDivs <= state.latUnits &&
                                                            gerRequestedDivs <= state.gerUnits
                                                        ) {
                                                            stateSelectionView();
                                                            selectedStateActionInput1.style.display = "none";
                                                            selectedStateActionInput2.style.display = "none";
                                                            selectedStateActionText.style.display = "none";
                                                            selectedStateActionButton1.style.display = "none";
                                                            selectedStateActionButton2.style.display = "none";
                                                            antiReSelectRule = true;
                        
                                                            Object.keys(state).forEach(key => {
                                                                if (key.startsWith("adjacentState")) {
                                                                    let adjacentStateName = state[key];
                                                                    let adjacentState = states.find(s => s.name === adjacentStateName);
                        
                                                                    if (adjacentState && !adjacentState.isDisabled) {
                                                                        console.log(`Adjacent state found: ${adjacentState.name}`);
                                                                        adjacentState.path.style.filter = "brightness(1.5)";
                        
                                                                        (function (adjacentState) {
                                                                            adjacentState.path.onclick = function () {
                                                                                console.log(`Adjacent state clicked: ${adjacentState.name}`);
                        
                                                                                if (!isCardUsed) {
                                                                                    console.log("isCardUsed === false");
                        
                                                                                    let adjacentStateTotalDivs = adjacentState.latUnits + adjacentState.gerUnits + adjacentState.sovUnits;
                                                                                    console.log(`Adjacent state total divisions: ${adjacentStateTotalDivs}`);
                        
                                                                                    if (
                                                                                        (adjacentState.ownedBy === "lat" && adjacentStateTotalDivs + totalRequestedDivs <= 6) || 
                                                                                        (adjacentState.ownedBy !== "lat")
                                                                                    ) {
                                                                                        // Move the divisions
                                                                                        state.latUnits -= latRequestedDivs;
                                                                                        adjacentState.latUnits += latRequestedDivs;
                                                                                        state.gerUnits -= gerRequestedDivs;
                                                                                        adjacentState.gerUnits += gerRequestedDivs;
                        
                                                                                        console.log(`Moved ${latRequestedDivs} Latvian divisions and ${gerRequestedDivs} German divisions`);
                        
                                                                                        states.forEach(state => {
                                                                                            state.path.style.filter = "brightness(1.0)";
                                                                                        });
                        
                                                                                        updateAllUnitImages();
                                                                                        antiReSelectRule = false;
                        
                                                                                        if (adjacentState.ownedBy === "sov") {
                                                                                            handleCombat(adjacentState);
                                                                                        }
                        
                                                                                        if (marchRecursion < level) {
                                                                                            console.log(`marchRecursion (${marchRecursion}) < level (${level})`);
                                                                                            marchRecursion++;
                                                                                            selectState();
                                                                                        } else {
                                                                                            isCardUsed = true;
                                                                                            isTheCardSelected = false;
                                                                                            abortController.abort();
                                                                                            card.used = true;
                                                                                            cardSlot.used = true;
                                                                                            clearCardSelectionView();
                                                                                            updateCardStates();
                                                                                            enableEndTurnButton();
                                                                                        }
                                                                                    } else {
                                                                                        console.log("Adjacent state cannot hold more than 6 divisions if it is friendly");
                                                                                    }
                                                                                }
                                                                            };
                                                                        })(adjacentState);
                                                                    }
                                                                }
                                                            });
                                                        } else {
                                                            console.log("Invalid division request or no divisions selected");
                                                        }
                                                    }
                                                };
                        
                                                selectedStateActionButton2.onclick = function () {
                                                    selectedStateActionInput1.value = "";
                                                    selectedStateActionInput2.value = "";
                                                    selectedStateActionInput1.style.display = "none";
                                                    selectedStateActionInput2.style.display = "none";
                                                    selectedStateActionText.style.display = "none";
                                                    selectedStateActionButton1.style.display = "none";
                                                    selectedStateActionButton2.style.display = "none";
                                                    isCardUsed = true;
                                                    isTheCardSelected = false;
                                                    card.used = true;
                                                    cardSlot.used = true;
                                                    abortController.abort();
                                                    clickSFX.play();
                                                    clearCardSelectionView();
                                                    updateCardStates();
                                                    enableEndTurnButton();
                                                };
                                            }
                                        });
                                    });
                                }
                        
                                selectState(); // Initial call to selectState
                            },
    
                            "Recruit": (level) => {
                                let isCardUsed = false;
                                let recruitCounter = 0;
    
                                stateSelectionView();
    
                                states.forEach(state => {
                                    state.path.addEventListener("click", function() {
                                        totalDivs = state.latUnits + state.gerUnits + state.sovUnits;
                                        console.log(totalDivs);
    
                                        if (totalDivs === 5) {
                                            selectedStateActionButton1.disabled = false;
                                            selectedStateActionButton2.disabled = true;
                                        } else if (totalDivs === 6) {
                                            selectedStateActionButton1.disabled = true;
                                            selectedStateActionButton2.disabled = true;
                                        } else {
                                            selectedStateActionButton1.disabled = false;
                                            selectedStateActionButton2.disabled = false;
                                        }
    
                                        if (state.ownedBy === "lat" && isCardUsed === false && totalDivs <= 6) {
                                            selectedStateActionButton1.style.display = "inline-block";
                                            selectedStateActionButton1.innerHTML = "Recruit 1 Latvian Division";
    
                                            selectedStateActionButton1.onclick = function() {
                                                if (state.ownedBy === "lat" && totalDivs <= 5) {
                                                    if (recruitCounter < level) {

                                                        clickSFX.play();

                                                        recruitCounter++;
                                                        state.latUnits++;
    
                                                        totalDivs = state.latUnits + state.gerUnits;
    
                                                        if (totalDivs === 6) {
                                                            selectedStateActionButton1.disabled = true;
                                                            selectedStateActionButton2.disabled = true;
                                                        }
    
                                                        updateAllUnitImages();
    
                                                        if (recruitCounter >= level) {
                                                            isCardUsed = true;
                                                            isTheCardSelected = false;
                                                            card.used = true;
                                                            cardSlot.used = true;
                                                            selectedStateActionButton1.style.display = "none";
                                                            selectedStateActionButton2.style.display = "none";
                                                            clearCardSelectionView();
                                                            updateCardStates();
                                                            enableEndTurnButton();
                                                        }
                                                    }
                                                }
                                            };
    
                                            selectedStateActionButton2.style.display = "inline-block";
                                            selectedStateActionButton2.innerHTML = "Recruit 2 German Divisions";
    
                                            selectedStateActionButton2.onclick = function() {
                                                if (state.ownedBy === "lat" && totalDivs <= 4) {
                                                    if (recruitCounter < level) {

                                                        clickSFX.play();

                                                        recruitCounter++;
                                                        state.gerUnits += 2;
    
                                                        totalDivs = state.latUnits + state.gerUnits;
    
                                                        if (totalDivs === 6) {
                                                            selectedStateActionButton1.disabled = true;
                                                            selectedStateActionButton2.disabled = true;
                                                        } else if (totalDivs === 5) {
                                                            selectedStateActionButton2.disabled = true;
                                                        }
    
                                                        updateAllUnitImages();
    
                                                        if (recruitCounter >= level) {
                                                            isCardUsed = true;
                                                            isTheCardSelected = false;
                                                            card.used = true;
                                                            cardSlot.used = true;
                                                            selectedStateActionButton1.style.display = "none";
                                                            selectedStateActionButton2.style.display = "none";
                                                            clearCardSelectionView();
                                                            updateCardStates();
                                                            enableEndTurnButton();
                                                        }
                                                    }
                                                }
                                            };
                                        } else {
                                            selectedStateActionButton1.disabled = true;
                                            selectedStateActionButton2.disabled = true;
                                        }
                                    });
                                });
                            },
    
                            "Resource": (level) => {
                                addResources(level);
                                isTheCardSelected = false;
                                card.used = true;
                                cardSlot.used = true;
                                clearCardSelectionView();
                                updateCardStates();
                                enableEndTurnButton();
                            },
    
                            "Medic": (level) => {
                                console.log(`Medic action with level ${level}`);
                                isTheCardSelected = false;
                                card.used = true;
                                cardSlot.used = true;
                                clearCardSelectionView();
                                updateCardStates();
                                enableEndTurnButton();
                            },
    
                            "Draw": (level) => {
                                console.log(`Draw action with level ${level}`);
                                isTheCardSelected = false;
                                card.used = true;
                                cardSlot.used = true;
                                clearCardSelectionView();
                                updateCardStates();
                                enableEndTurnButton();

                                if (level === 1) {
                                    console.log(`Draw action Level 1 function going:`);
                                    drawRandomRegularCard(cardSlot, regCards);
                                } else {
                                    console.log(`Draw action with Level higher than 1`);
                                    detectOpenCardSlots(level);
                                }
                            },
    
                            "None": (level) => {
                                console.log(`None??? action with level ${level}`);
                                clearCardSelectionView();
                                isTheCardSelected = false;
                            },



    
                            // IRREGULAR ACTIONS
                            "alliedShips": (level) => {
                                console.log(`alliedShips action with level ${level}`);
                                stateSelectionView();
                                let alliedShipsUsed = false;
                            
                                function onClick(state) {
                                    return function() {
                                        if (!alliedShipsUsed) {
                                            console.log(`State clicked: ${state.name}`);
                                            // Perform the action
                                            removeUnits(state, 3);
                                            
                                            // Clear the modal and reset flags
                                            clearCardSelectionView();
                                            isTheCardSelected = false;
                                            card.used = true;
                                            cardSlot.used = true;
                                            alliedShipsUsed = true;
                                            updateCardStates();
                                            enableEndTurnButton();
                                            
                                            // Reset filters on all states
                                            states.forEach(s => {
                                                s.path.style.filter = "brightness(1.0)";
                                            });
                            
                                            // Remove event listeners
                                            states.forEach(s => {
                                                s.path.removeEventListener("click", onClick(s));
                                            });
                                        }
                                    };
                                }
                            
                                states.forEach(state => {
                                    if (state.isCoastal === true && state.ownedBy === "sov" && !alliedShipsUsed) {
                                        state.path.style.filter = "brightness(1.5)";
                                        state.path.addEventListener("click", onClick(state));
                                    }
                                });
                            }
    
    
                        };
    
                        function handleAction(option, level) {
                            console.log(`handling action ${option} ${level}`);
                            if (actions[option]) {
                                actions[option](level);
                            } else {
                                console.error(`Action for option "${option}" not found`);
                            }
                        }
    
                        modalBtn1.onclick = function() {
                            
                            clickSFX.play();

                            handleAction(card.option1[0].name, card.option1[0].level);
                            if (typeof card.option1[1] != "undefined") {
                                handleAction(card.option1[1].name, card.option1[1].level);
                            };
                        };
    
                        modalBtn2.onclick = function() {
                            
                            clickSFX.play();

                            handleAction(card.option2[0].name, card.option2[0].level);
                            if (typeof card.option2[1] != "undefined") {
                                handleAction(card.option2[1].name, card.option2[1].level);
                            };
                        };
    
                        modalBtn3.onclick = function() {

                            clickSFX.play();

                            isTheCardSelected = false;
                            enableEndTurnButton();
                            clearCardSelectionView();
                        };
                    };
                };
            });
        });
    });
});

export { attachStateClickListeners };
