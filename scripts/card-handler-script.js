import { resourceCount, addResources, subtractResources } from "./resource-handler-script.js";
import { updateAllUnitImages } from "./unit-handler-script.js";
import { cards } from "../data/cardData.js"
import { states } from "../data/stateData.js";




// modal elements
const modal = document.getElementById("modal-container");
const modalContent = document.getElementById("modal-content");
const modalBtn1 = document.getElementById("modal-btn-1");
const modalBtn2 = document.getElementById("modal-btn-2");
const modalText = document.getElementById("modal-text");

// Selected State Actions
const selectedStateActionButton1 = document.getElementById("selected-state-action-button-1");
const selectedStateActionButton2 = document.getElementById("selected-state-action-button-2");


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
    modalText.innerHTML = "Please select a state..."
    // Change the Modals to allow you to click on the state
    return;
};

document.addEventListener("DOMContentLoaded", function() {

    cards.forEach(card => {
        card.path.addEventListener("click", function() {

            if (card.cost <= resourceCount) {// Bassically look at EVEYR SINGLE Card you got and then when clicked show modal (options page)

                subtractResources(card.cost);
                resetModalStyle()
                modalBtn1.innerHTML = `${card.option1} ${card.option1Level}`;
                modalBtn2.innerHTML = `${card.option2} ${card.option2Level}`;

                if (card.option2 === "none") {
                    modalBtn2.style.display = "none";
                } else {
                    modalBtn2.style.display = "inline-block";
                }

                const actions = { // This is all here to do the action stuff

                    "March": (level) => {
                        console.log(`March action with level ${level}`);
                        modal.style.display = "none"; // TESTING MODE DOES NOTHING AS OF CURRENT
                    },

                    "Recruit": (level) => {

                        let isCardUsed = false;

                        console.log(`Recruit action with level ${level}`);
                        // this is here so the eventlisteners dont screw me over
            
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
                                        if (state.ownedBy === "lat") { // if the state is Latvian (you can click on other states in this screen, thus this check has been added)
                                            isCardUsed = true; // use the card
                                            state.latUnits++; // increment the number of latvian units by 1
                                            updateAllUnitImages(); //  import { updateAllUnitImages } from "./unit-handler-script.js"; this is from there not here
                
                                            selectedStateActionButton1.style.display = "none"; // hide button 1
                                            selectedStateActionButton2.style.display = "none"; // hide button 2
                                            modal.style.display = "none"; // hide the overlay text
                                        };
                                    }
                
                                    selectedStateActionButton2.style.display = "inline-block"; // show button 2
                                    selectedStateActionButton2.innerHTML = "Recruit 2 German Divisions"; // change its text
                
                                    selectedStateActionButton2.onclick = function() { // when button 1 is clicked
                                        if (state.ownedBy === "lat") { // if the state is Latvian...
                                            isCardUsed = true; // use the card
                                            state.gerUnits += 2; // add 2 to the current gerUnits number
                                            updateAllUnitImages(); //  import { updateAllUnitImages } from "./unit-handler-script.js"; this is from there not here
                
                                            selectedStateActionButton1.style.display = "none"; // hide button 1
                                            selectedStateActionButton2.style.display = "none"; // hide button 2
                                            modal.style.display = "none"; // hide the overlay text
                                        };
                                    }
                                } else {
                                    selectedStateActionButton1.disabled = true; // if the player clicks on a soviet state, hide the options
                                    selectedStateActionButton2.disabled = true; // for both of the buttons :3
                                };
                            });
                        });
                    },

                    "Resource": (level) => {
                        console.log(`Resource action with level ${level}`);
                        addResources(level);
                        modal.style.display = "none"; // hide the overlay text
                    },

                    "Medic": (level) => {
                        console.log(`Medic action with level ${level}`);
                        modal.style.display = "none"; // TESTING MODE DOES NOTHING AS OF CURRENT
                    },

                    "None": (level) => {
                        console.log(`None??? action with level ${level}`);
                        modal.style.display = "none"; // TESTING MODE DOES NOTHING AS OF CURRENT

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

                modalBtn2.onclick = function() { // if the option 2 is clicked
                    handleAction(card.option2, card.option2Level);
                };
            };
        });
    });
});

