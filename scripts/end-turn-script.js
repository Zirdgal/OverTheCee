import { cards, enemyCards } from "../data/cardData.js";
import { states } from "../data/stateData.js";
import { updateCardStates } from "./card-handler-script.js";
import { updateAllUnitImages } from "./unit-handler-script.js";
import { subtractResources } from "./resource-handler-script.js";
import { handleCombat } from "./combat-handler-script.js";
import { updateStateImages, updateLithuania } from "./state-updation-script.js";

const endTurnButton = document.getElementById("end-turn-button");

// modal elements
const modal = document.getElementById("modal-container");
const modalContent = document.getElementById("modal-content");
const modalBtn1 = document.getElementById("modal-btn-1");
const modalBtn2 = document.getElementById("modal-btn-2");
const modalText = document.getElementById("modal-text");
const enemyCardImage = document.getElementById("enemy-card-img");

const selectedStateActionButton1 = document.getElementById("selected-state-action-button-1");
const selectedStateActionButton2 = document.getElementById("selected-state-action-button-2");

const selectedStateActionText = document.getElementById("selected-state-action-text-container");

const selectedStateActionInput1 = document.getElementById("selected-state-action-input-1");
const selectedStateActionInput2 = document.getElementById("selected-state-action-input-2");

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

    modal.style.pointerEvents = "auto";
    modal.style.backgroundColor = "rgba(0,0,0,0.2)";
    modalContent.style.marginTop = "10vh";
    modalText.innerHTML = "The Soviets Turn:";
    modal.style.display = "block";
    modalBtn1.style.display = "none";
    modalBtn2.style.display = "none";

    selectedStateActionButton1.style.display = "none";
    selectedStateActionButton2.style.display = "none";
    selectedStateActionText.style.display = "none";
    selectedStateActionInput1.style.display = "none";
    selectedStateActionInput2.style.display = "none";

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
                        }
                    }
                }
            }
        }
    }

    moveSovietUnits();

    enemyCards.forEach(card => {
        enemyCardImage.style.display = "block";

        if (card.name === "Placeholder") {
            subtractResources(2);
        }
    });

    setTimeout(continueGame, 2500);

    function continueGame() {
        console.log("continuing game?");
        modal.style.display = "none";
        modal.style.pointerEvents = "none";

        cards.forEach(card => {
            card.used = false;
            updateCardStates();
        });
    }
};
