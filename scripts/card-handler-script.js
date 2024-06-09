import { resourceCount, addResources, subtractResources } from "./resource-handler-script.js";
import { updateAllUnitImages } from "./unit-handler-script.js";
import { handleCombat } from "./combat-handler-script.js";
import { cards } from "../data/cardData.js"
import { states } from "../data/stateData.js";

// this is all for movement idk why it just is
let totalDivs = null;
let totalRequestedDivs = null;
let latRequestedDivs = null;
let gerRequestedDivs = null;

// modal elements
const modal = document.getElementById("modal-container");
const modalContent = document.getElementById("modal-content");
const modalBtn1 = document.getElementById("modal-btn-1");
const modalBtn2 = document.getElementById("modal-btn-2");
const modalText = document.getElementById("modal-text");

// Selected State Actions
const selectedStateActionButton1 = document.getElementById("selected-state-action-button-1");
const selectedStateActionButton2 = document.getElementById("selected-state-action-button-2");

const selectedStateActionText = document.getElementById("selected-state-action-text-container");

const selectedStateActionInput1 = document.getElementById("selected-state-action-input-1");
const selectedStateActionInput2 = document.getElementById("selected-state-action-input-2");


function resetModalStyle() { // I use this function later so i dont need to rewrite all 7 lines of code for this :3
    modal.style.pointerEvents = "auto";
    modal.style.backgroundColor = "rgba(0,0,0,0.4)";
    modalContent.style.marginTop = "25%";
    modalText.innerHTML = "Please select an option:"
    modal.style.display = "block";
    modalBtn1.style.display = "inline-block";
    modalBtn2.style.display = "inline-block";
    // Sets all the modal styles back to default!
    return;
};

function stateSelectionModalStyle() { // I use this function later so i dont need to rewrite all 7 lines of code for this :3
    modal.style.backgroundColor = "transparent";
    modal.style.pointerEvents = "none";
    modalContent.style.marginTop = "5%";
    modalBtn1.style.display = "none";
    modalBtn2.style.display = "none";
    modalText.innerHTML = "Please select a state...";
    // Change the Modals to allow you to click on the state
    return;
};


document.addEventListener("DOMContentLoaded", function() {

    cards.forEach(card => {
        card.path.addEventListener("click", function() {

            let antiReSelectRule = false;
            selectedStateActionButton1.disabled = false; // enable it
            selectedStateActionButton2.disabled = false; // for both of the buttons :3

            if (card.cost <= resourceCount) {// Bassically look at EVEYR SINGLE Card you got and then when clicked show modal (options page)

                subtractResources(card.cost); // imported script to handle the resource loss
                resetModalStyle() // the modal style that gives two options
                modalBtn1.innerHTML = `${card.option1} ${card.option1Level}`; // changes the text to the card option and its level (example): March 2
                modalBtn2.innerHTML = `${card.option2} ${card.option2Level}`; // changes the text to the card option and its level (example): March 2

                if (card.option2 === "none") { // if the card.option2 is none
                    modalBtn2.style.display = "none"; // SHOW NOTHING!
                } else {
                    modalBtn2.style.display = "inline-block"; // all other times its okay :thumbs_up+1:
                }

                const actions = { // This is all here to do the action stuff

                    "March": (level) => {
                        stateSelectionModalStyle() // Change the Modals to allow you to click on the state

                        let isCardUsed = false;
                        const abortController = new AbortController(); 

                        states.forEach(state => {

                            state.path.addEventListener("click", function() {

                                if (state.ownedBy === "lat" && isCardUsed === false && antiReSelectRule === false) {

                                    isCardUsed = false;

                                    modalText.innerHTML = "Please select division count that you will move!";
                                    selectedStateActionInput1.style.display = "inline-block";
                                    selectedStateActionInput2.style.display = "inline-block";
                                    selectedStateActionText.style.display = "flex";
                                    selectedStateActionButton1.style.display = "block";
                                    selectedStateActionButton1.disabled = false;
                                    selectedStateActionButton1.innerHTML = "CONFIRM";
    
                                    totalDivs = Number(state.latUnits) + Number(state.gerUnits) + Number(state.sovUnits); // save a variable of the clicked states total divisions
                                    console.log(totalDivs); // log it into console for uhhh debugging reasons :3
    
                                    selectedStateActionButton1.onclick = function() {

                                        if (antiReSelectRule === false) {
                                            latRequestedDivs = Number(selectedStateActionInput1.value);
                                            gerRequestedDivs = Number(selectedStateActionInput2.value);

                                            totalRequestedDivs = latRequestedDivs + gerRequestedDivs;
                                            console.log(totalRequestedDivs); // log it into console for uhhh debugging reasons :3
                                            console.log(totalDivs);
        
                                            if (totalRequestedDivs < totalDivs && totalRequestedDivs != 0 && totalDivs != 1) {
                                                stateSelectionModalStyle();
                                                selectedStateActionInput1.style.display = "none";
                                                selectedStateActionInput2.style.display = "none";
                                                selectedStateActionText.style.display = "none";
                                                selectedStateActionButton1.style.display = "none";
                                                antiReSelectRule = true;
        
                                                Object.keys(state).forEach(key => {
                                                    if (key.startsWith("adjacentState")) {
                                                        let adjacentStateName = state[key];
                                                        let adjacentState = states.find(s => s.name === adjacentStateName);
                                                
                                                        if (adjacentState) {
                                                            console.log(adjacentState);
                                                            adjacentState.path.style.filter = "brightness(1.5)";
                                                
                                                            // Create a closure to preserve the current adjacentState
                                                            (function(adjacentState) {
                                                                adjacentState.path.onclick = function() {
                                                                    if (isCardUsed === false) {
                                                                        isCardUsed = true;
                                                                        antiReSelectRule = false;
                                                                        state.latUnits -= latRequestedDivs;
                                                                        adjacentState.latUnits += latRequestedDivs;
                                                                        state.gerUnits -= gerRequestedDivs;
                                                                        adjacentState.gerUnits += gerRequestedDivs;
                                                                        updateAllUnitImages();
                                                                        modal.style.display = "none";
                                                                        abortController.abort();
                                                                        states.forEach(state => {
                                                                            state.path.style.filter = "brightness(1.0)";
                                                                        });
                                                                        if (adjacentState.ownedBy === "sov") {
                                                                            handleCombat(adjacentState);
                                                                        }
                                                                    }
                                                                };
                                                            })(adjacentState);
                                                        }
                                                    }
                                                });
        
        
                                            } else {
                                                modalText.innerHTML = "Try again (total div count must be higher than 0 and lower than total)!";
                                            };
                                        }
                                    };
                                };
                            }, { signal: abortController.signal });
                        });
                    },

                    "Recruit": (level) => {

                        let isCardUsed = false;
                        let recruitCounter = 0;
            
                        stateSelectionModalStyle() // Change the Modals to allow you to click on the state
                
                        states.forEach(state => { // Go through every single state in states
                
                            state.path.addEventListener("click", function() { // When a state img file is clicked...
                                
                                let totalDivs = state.latUnits + state.gerUnits + state.sovUnits; // save a variable of the clicked states total divisions
                                console.log(totalDivs); // log it into console for uhhh debugging reasons :3
                
                                if (totalDivs === 5) { // if the totalDivs is EXACTLY equal to 5
                                    selectedStateActionButton1.disabled = false; // allow to recruit latvians
                                    selectedStateActionButton2.disabled = true; //disallow to recruit germans
                                } else if (totalDivs === 6) {  // if the totalDivs is EXACTLY equal to 6
                                    selectedStateActionButton1.disabled = true; //disallow to recruit latvians
                                    selectedStateActionButton2.disabled = true; //disallow to recruit germans
                                } else {  // well if not fuck it
                                    selectedStateActionButton1.disabled = false; //allow to recruit latvians
                                    selectedStateActionButton2.disabled = false; //allow to recruit germans
                                }
                
                                if (state.ownedBy === "lat" && isCardUsed === false && totalDivs <= 6) {
                                    // if state is latvian AND the card hasnt been used AND the total divisions isnt over 6 (yes i know im doing this again)
                
                                    selectedStateActionButton1.style.display = "inline-block"; // show button 1
                                    selectedStateActionButton1.innerHTML = "Recruit 1 Latvian Division"; // change its text
                
                                    selectedStateActionButton1.onclick = function() { // when button 1 is clicked
                                        if (state.ownedBy === "lat" && totalDivs <= 5) { // if the state is Latvian (you can click on other states in this screen, thus this check has been added)
                                            if (recruitCounter < level) { // Check if the counter is less than the level
                                                recruitCounter++; // Increment the counter
                                                state.latUnits++; // Increment the number of latvian units by 1

                                                totalDivs = state.latUnits + state.gerUnits;

                                                if (totalDivs === 6 ) {
                                                    selectedStateActionButton1.disabled = true;
                                                }

                                                updateAllUnitImages(); //  import { updateAllUnitImages } from "./unit-handler-script.js"; this is from there not here
                    
                                                // Hide buttons and modal if max recruits reached
                                                if (recruitCounter >= level) {
                                                    isCardUsed = true; // Use the card
                                                    selectedStateActionButton1.style.display = "none"; // Hide button 1
                                                    selectedStateActionButton2.style.display = "none"; // Hide button 2
                                                    modal.style.display = "none"; // Hide the overlay text
                                                };
                                            };
                                        };
                                    };
                
                                    selectedStateActionButton2.style.display = "inline-block"; // show button 2
                                    selectedStateActionButton2.innerHTML = "Recruit 2 German Divisions"; // change its text
                
                                    selectedStateActionButton2.onclick = function() { // when button 1 is clicked
                                        if (state.ownedBy === "lat" && totalDivs <= 4) { // if the state is Latvian (you can click on other states in this screen, thus this check has been added)
                                            if (recruitCounter < level) { // Check if the counter is less than the level
                                                recruitCounter++; // Increment the counter
                                                state.gerUnits += 2; // Increment the number of latvian units by 1
                                                updateAllUnitImages(); //  import { updateAllUnitImages } from "./unit-handler-script.js"; this is from there not here
                    
                                                // Hide buttons and modal if max recruits reached
                                                if (recruitCounter >= level) {
                                                    isCardUsed = true; // Use the card
                                                    selectedStateActionButton1.style.display = "none"; // Hide button 1
                                                    selectedStateActionButton2.style.display = "none"; // Hide button 2
                                                    modal.style.display = "none"; // Hide the overlay text
                                                };
                                            };
                                        };
                                    };
                                } else {
                                    selectedStateActionButton1.disabled = true; // if the player clicks on a soviet state, hide the options
                                    selectedStateActionButton2.disabled = true; // for both of the buttons :3
                                };
                            });
                        });
                    },

                    "Resource": (level) => {
                        addResources(level); // imported script to handle the addition of resources
                        modal.style.display = "none"; // hide the overlay text
                    },

                    "Medic": (level) => {
                        console.log(`Medic action with level ${level}`);
                        modal.style.display = "none"; // hide the overlay text
                    },

                    "None": (level) => {
                        console.log(`None??? action with level ${level}`);
                        modal.style.display = "none"; // hide the overlay text

                    }
                };

                function handleAction(option, level) {
                    if (actions[option]) { // i do not know how this code works :3
                        actions[option](level);
                    } else {
                        console.error(`Action for option "${option}" not found`);
                    }
                }

                modalBtn1.onclick = function() {
                    handleAction(card.option1, card.option1Level);
                };

                modalBtn2.onclick = function() { // if the option 2 is clicked
                    handleAction(card.option2, card.option2Level);
                };
            };
        });
    });
});

