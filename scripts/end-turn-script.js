import { enemyCards, openCardSlots, regCards } from "../data/cardData.js";
import { states } from "../data/stateData.js";
import { updateAllUnitImages } from "./unit-handler-script.js";
import { subtractResources } from "./resource-handler-script.js";
import { handleCombat } from "./combat-handler-script.js";
import { gameLostState, updateStateImages, updateLithuania } from "./state-updation-script.js";
import { drawRandomRegularCard } from "./deck-handler-script.js";
import { clickSFX } from "../data/soundData.js";
import { endTurnView } from "./card-selection-view.js";

const endTurnButton = document.getElementById("end-turn-button");

// modal elements
const modal = document.getElementById("modal-container");
const enemyCardImage = document.getElementById("enemy-card-img");

export function disableEndTurnButton() {
    endTurnButton.disabled = true;
    return;
};
export function enableEndTurnButton() {
    endTurnButton.disabled = false;
    return;
};

endTurnButton.onclick = function endTurn() {
    console.log("end turn button clicked");

    clickSFX.play();
    endTurnView();

    const updatedStates = new Set();

    states.forEach(state => {
        if (state.ownedBy === "lat") {
            const adjacentStates = [
                state.adjacentState1, state.adjacentState2, state.adjacentState3,
                state.adjacentState4, state.adjacentState5, state.adjacentState6,
                state.adjacentState7, state.adjacentState8
            ].filter(Boolean);

            adjacentStates.forEach(adjacentStateName => {
                const adjacentState = states.find(st => st.name === adjacentStateName);
                if (adjacentState && adjacentState.ownedBy === "sov" && !updatedStates.has(adjacentState.name)) {
                    adjacentState.sovUnits = Math.min(adjacentState.sovUnits + 2, 6);
                    updatedStates.add(adjacentState.name);
                }
            });
        }
    });

    function moveSovietUnits() {
        for (let state of states) {
            if (state.ownedBy === "lat") {
                const adjacentStates = [
                    state.adjacentState1, state.adjacentState2, state.adjacentState3,
                    state.adjacentState4, state.adjacentState5, state.adjacentState6,
                    state.adjacentState7, state.adjacentState8
                ].filter(Boolean);

                for (let adjacentStateName of adjacentStates) {
                    const adjacentState = states.find(st => st.name === adjacentStateName);
                    if (adjacentState && adjacentState.ownedBy === "sov") {
                        const combinedLatvianGermanUnits = state.latUnits + state.gerUnits;
                        if (adjacentState.sovUnits > combinedLatvianGermanUnits) {
                            // Determine the number of Soviet units to move
                            let sovUnitsToMove = Math.min(adjacentState.sovUnits, 2);

                            // Move the Soviet units to the Latvian state
                            state.sovUnits += sovUnitsToMove;
                            adjacentState.sovUnits -= sovUnitsToMove;

                            // Handle combat after moving units
                            handleCombat(state);

                            // Ensure the state ownership and color update correctly
                            if (state.sovUnits > 0 && state.latUnits + state.gerUnits === 0) {
                                state.ownedBy = "sov";
                            }
                            updateStateImages();
                            updateAllUnitImages();
                            updateLithuania();

                            // Stop moving more units into the same Latvian state to avoid dogpiling
                            break;
                        };
                    };
                };
            };
        };
    };

    moveSovietUnits();

    if (gameLostState === false) {
        enemyCards.forEach(card => {
            enemyCardImage.style.display = "block";
    
            if (card.id === "resourceConstraints") {
                subtractResources(2);
            }
        });
    
        setTimeout(continueGame, 2500);
    
        function continueGame() {
            console.log("continuing game?");
            modal.style.display = "none";
            modal.style.pointerEvents = "none";
    
            openCardSlots.forEach(cardSlot => {
                if (cardSlot.used === true) {
                    updateStateImages();
                    updateAllUnitImages();
                    updateLithuania();
                };
            });
        };
    };
};
