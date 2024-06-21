    import { resourceCount, addResources, subtractResources } from "./resource-handler-script.js";
    import { updateAllUnitImages } from "./unit-handler-script.js";
    import { handleCombat, removeUnits } from "./combat-handler-script.js";

    import { cards } from "../data/cardData.js";
    import { states } from "../data/stateData.js";

    import { attachStateClickListeners } from "./sidebar-script.js"; 
    import { disableEndTurnButton, enableEndTurnButton } from "./end-turn-script.js";

    // this is all for movement idk why it just is
    let totalDivs = null;
    let isTheCardSelected = false;
    let totalRequestedDivs = null;
    let latRequestedDivs = null;
    let gerRequestedDivs = null;

    // modal elements
    const modal = document.getElementById("modal-container");
    const modalContent = document.getElementById("modal-content");
    const modalBtn1 = document.getElementById("modal-btn-1");
    const modalBtn2 = document.getElementById("modal-btn-2");
    const modalText = document.getElementById("modal-text");
    const enemyCardImage = document.getElementById("enemy-card-img");

    const fullScreenCover = document.getElementById("full-screen-cover");

    // Selected State Actions
    const selectedStateActionButton1 = document.getElementById("selected-state-action-button-1");
    const selectedStateActionButton2 = document.getElementById("selected-state-action-button-2");

    const selectedStateActionText = document.getElementById("selected-state-action-text-container");

    const selectedStateActionInput1 = document.getElementById("selected-state-action-input-1");
    const selectedStateActionInput2 = document.getElementById("selected-state-action-input-2");

    function resetModalStyle() {
        modal.style.pointerEvents = "auto";
        modal.style.backgroundColor = "rgba(0,0,0,0.4)";
        modalContent.style.marginTop = "25%";
        modalText.innerHTML = "Please select an option:";
        modal.style.display = "block";
        modalBtn1.style.display = "inline-block";
        modalBtn2.style.display = "inline-block";
        enemyCardImage.style.display = "none";
        return;
    }

    function stateSelectionModalStyle() {
        modal.style.backgroundColor = "transparent";
        modal.style.pointerEvents = "none";
        modalContent.style.marginTop = "5%";
        modalBtn1.style.display = "none";
        modalBtn2.style.display = "none";
        modalText.innerHTML = "Please select a state...";
        enemyCardImage.style.display = "none";
        return;
    }

    function clearStateListeners(states) {
        states.forEach(state => {
            let newElement = state.path.cloneNode(true);
            state.path.parentNode.replaceChild(newElement, state.path);
            state.path = newElement;
        });
        attachStateClickListeners(); // Re-attach state click listeners
    }

    export function updateCardStates() {
        cards.forEach(card => {
            if (card.used === false) {
                card.path.style.display = "block";
            } else {
                card.path.style.display = "none";
            }
        });
    }

    document.addEventListener("DOMContentLoaded", function() {

        fullScreenCover.style.animation = "fadeInAnimation 3s ease 1 forwards";

        console.log("Document Loaded");

        cards.forEach(card => {
            card.path.addEventListener("click", function() {
                console.log("Card Clicked");

                if (isTheCardSelected === false) {
                    console.log("isTheCardSelected is indeed false");

                    isTheCardSelected = true;
                    let antiReSelectRule = false;
                    selectedStateActionButton1.disabled = false;
                    selectedStateActionButton2.disabled = false;
                    disableEndTurnButton();

                    if (card.cost <= resourceCount) {
                        console.log("we have enough resources!");

                        subtractResources(card.cost);
                        console.log("current resource count:");
                        console.log(resourceCount);
                        resetModalStyle();
                        modalBtn1.innerHTML = `${card.option1} ${card.option1Level}`;
                        modalBtn2.innerHTML = `${card.option2} ${card.option2Level}`;

                        if (card.option2 === "none") {
                            modalBtn2.style.display = "none";
                        } else {
                            modalBtn2.style.display = "inline-block";
                        }

                        if (card.option2 === "alliedShips") {
                            modalBtn2.innerHTML = "Shore Bombardment";
                        };

                        const actions = {
                            "March": (level) => {
                                stateSelectionModalStyle();
                        
                                let isCardUsed = false;
                                let marchRecursion = 0;
                                const abortController = new AbortController();
                        
                                console.log("March action activated");
                        
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
                                                            latRequestedDivs <= state.latUnits &&
                                                            gerRequestedDivs <= state.gerUnits
                                                        ) {
                                                            stateSelectionModalStyle();
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
                        
                                                                                        if (marchRecursion < level - 1) {
                                                                                            console.log(`marchRecursion (${marchRecursion}) < level (${level})`);
                                                                                            marchRecursion++;
                                                                                            selectState();
                                                                                        } else {
                                                                                            isCardUsed = true;
                                                                                            isTheCardSelected = false;
                                                                                            modal.style.display = "none";
                                                                                            abortController.abort();
                                                                                            card.used = true;
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
                                                    modal.style.display = "none";
                                                    abortController.abort();
                                                    card.used = true;
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

                                stateSelectionModalStyle();

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
                                                            selectedStateActionButton1.style.display = "none";
                                                            selectedStateActionButton2.style.display = "none";
                                                            modal.style.display = "none";

                                                            card.used = true;
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
                                                            selectedStateActionButton1.style.display = "none";
                                                            selectedStateActionButton2.style.display = "none";
                                                            modal.style.display = "none";

                                                            card.used = true;
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
                                modal.style.display = "none";
                                isTheCardSelected = false;
                                card.used = true;
                                updateCardStates();
                                enableEndTurnButton();
                            },

                            "Medic": (level) => {
                                console.log(`Medic action with level ${level}`);
                                modal.style.display = "none";
                                isTheCardSelected = false;
                                card.used = true;
                                updateCardStates();
                                enableEndTurnButton();
                            },

                            "None": (level) => {
                                console.log(`None??? action with level ${level}`);
                                modal.style.display = "none";
                                isTheCardSelected = false;
                            },

                            // IRREGULAR ACTIONS
                            "alliedShips": (level) => {
                                console.log(`alliedShips action with level ${level}`);
                                stateSelectionModalStyle();
                                let alliedShipsUsed = false;
                            
                                function onClick(state) {
                                    return function() {
                                        if (!alliedShipsUsed) {
                                            console.log(`State clicked: ${state.name}`);
                                            // Perform the action
                                            removeUnits(state, 3);
                                            
                                            // Clear the modal and reset flags
                                            modal.style.display = "none";
                                            isTheCardSelected = false;
                                            card.used = true;
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
                            if (actions[option]) {
                                actions[option](level);
                            } else {
                                console.error(`Action for option "${option}" not found`);
                            }
                        }

                        modalBtn1.onclick = function() {
                            handleAction(card.option1, card.option1Level);
                        };

                        modalBtn2.onclick = function() {
                            handleAction(card.option2, card.option2Level);
                        };
                    } else {
                        isTheCardSelected = false;
                    }
                }
            });
        });
    });

    export { attachStateClickListeners };
