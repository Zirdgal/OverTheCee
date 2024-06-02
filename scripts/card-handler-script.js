import { resourceCount } from "./resource-script.js";
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

document.addEventListener("DOMContentLoaded", function() {

    cards.forEach(card => {
        card.path.addEventListener("click", function() {
            if (card.cost >= resourceCount) {
                modal.style.display = "block"; // Bassically look at EVEYR SINGLE Card you got and then when clicked show modal (options page)
            };
        });
    });


    modalBtn1.onclick = function() {
        modal.style.display = "none";
    };
    modalBtn2.onclick = function() {
        modal.style.backgroundColor = "transparent";
        modal.style.pointerEvents = "none";
        modalContent.style.marginTop = "5%";
        modalBtn1.style.display = "none";
        modalBtn2.style.display = "none";
        modalText.innerHTML = "Please select a state..."

        states.forEach(state => {
            state.path.addEventListener("click", function() {
                if (state.ownedBy = "lat") {
                    selectedStateActionButton1.style.display = "block";
                    selectedStateActionButton1.innerHTML = "Recruit 1 Latvian Division";
                }
            });
        });
    };

});

