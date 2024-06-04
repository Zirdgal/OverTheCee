import { resourceCount } from "./resource-script.js";
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


function resetModalStyle() {
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
function stateSelectionModalStyle() {
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
            if (card.cost >= resourceCount) {// Bassically look at EVEYR SINGLE Card you got and then when clicked show modal (options page)
                resetModalStyle() // Sets all the modal styles back to default by calling a function!
            };
        });
    });


    modalBtn1.onclick = function() {
        modal.style.display = "none"; // TESTING MODE DOES NOTHING AS OF CURRENT
    };


    modalBtn2.onclick = function() { // if the option 2 is clicked

        let isCardUsed = false; // this is here so the eventlisteners dont screw me over

        stateSelectionModalStyle() // Change the Modals to allow you to click on the state

        states.forEach(state => {
            state.path.addEventListener("click", function() {
                
                let totalDivs = state.latUnits + state.gerUnits + state.sovUnits;
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
                        if (state.ownedBy === "lat") {
                            isCardUsed = true;
                            state.latUnits++;
                            updateAllUnitImages();

                            selectedStateActionButton1.style.display = "none";
                            selectedStateActionButton2.style.display = "none";
                            modal.style.display = "none";
                        };
                    }

                    selectedStateActionButton2.style.display = "inline-block";
                    selectedStateActionButton2.innerHTML = "Recruit 2 German Divisions";

                    selectedStateActionButton2.onclick = function() {
                        if (state.ownedBy === "lat") {
                            isCardUsed = true;
                            state.gerUnits += 2;
                            updateAllUnitImages();

                            selectedStateActionButton1.style.display = "none";
                            selectedStateActionButton2.style.display = "none";
                            modal.style.display = "none";
                        };
                    }
                } else {
                    selectedStateActionButton1.disabled = true;
                    selectedStateActionButton2.disabled = true;
                };
            });
        });
    };

});

