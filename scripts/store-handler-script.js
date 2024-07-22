import { regCards } from "../data/cardData.js";
import { storeSFX, clickSFX, chaChingSFX } from "../data/soundData.js";
import { shopView, clearCardSelectionView } from "./card-selection-view.js";
import { modalBtn1, modalBtn2, modalBtn3, modalBtn4 } from "./card-selection-view.js";
import { subtractResources, resourceCount } from "./resource-handler-script.js";
import { detectOpenCardSlotsAndInsertEstablishedCard } from "./deck-handler-script.js";

const storeBtn = document.getElementById("shop-button");

let availableCards = [...regCards];  // Initialize availableCards with all cards
let usedCards = [];
let firstTime = true;

// Object to store the card information for each slot
let slotCards = {
    modalBtn1: null,
    modalBtn2: null,
    modalBtn3: null,
    modalBtn4: null
};

document.addEventListener("DOMContentLoaded", function() {
    firstTime = true;
});

function refreshShopCard(shopSlot, slotName) {
    function getRandomItem(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    // Check if availableCards is empty, if so, refill it from usedCards and clear usedCards
    if (availableCards.length === 0) {
        availableCards = [...usedCards];
        usedCards = [];
    }

    // Get a new random card from the availableCards
    let newCard = getRandomItem(availableCards);

    // Remove the selected card from availableCards and add it to usedCards
    availableCards = availableCards.filter(card => card !== newCard);
    usedCards.push(newCard);

    // Correctly set the backgroundImage property
    shopSlot.style.backgroundImage = `url('./../.${newCard.path}')`;

    // Update the slotCards object
    slotCards[slotName] = newCard;
}

storeBtn.onclick = function() {
    storeSFX.play();
    shopView();

    if (firstTime === true) {
        refreshShopCard(modalBtn1, 'modalBtn1');
        refreshShopCard(modalBtn2, 'modalBtn2');
        refreshShopCard(modalBtn4, 'modalBtn4');
        firstTime = false; // Set firstTime to false after the initial refresh
    } else {
        // Set the background image from the stored slotCards object
        modalBtn1.style.backgroundImage = `url('./../.${slotCards.modalBtn1.path}')`;
        modalBtn2.style.backgroundImage = `url('./../.${slotCards.modalBtn2.path}')`;
        modalBtn4.style.backgroundImage = `url('./../.${slotCards.modalBtn4.path}')`;
    }

    modalBtn1.onclick = function() {
        if(slotCards[`modalBtn1`].cost <= resourceCount ) {
            chaChingSFX.play();
            subtractResources(slotCards[`modalBtn1`].cost);
            detectOpenCardSlotsAndInsertEstablishedCard(1, slotCards[`modalBtn1`]);
            refreshShopCard(modalBtn1, 'modalBtn1');
        } else {
            window.alert(`You do not have enough resources to purcahse this card.`);
        };
    };
    modalBtn2.onclick = function() {
        if(slotCards[`modalBtn2`].cost <= resourceCount ) {
            chaChingSFX.play();
            subtractResources(slotCards[`modalBtn2`].cost);
            detectOpenCardSlotsAndInsertEstablishedCard(1, slotCards[`modalBtn2`]);
            refreshShopCard(modalBtn2, 'modalBtn2');
        } else {
            window.alert(`You do not have enough resources to purcahse this card.`);
        };
    };
    modalBtn4.onclick = function() {
        if(slotCards[`modalBtn4`].cost <= resourceCount ) {
            chaChingSFX.play();
            subtractResources(slotCards[`modalBtn4`].cost);
            detectOpenCardSlotsAndInsertEstablishedCard(1, slotCards[`modalBtn4`]);
            refreshShopCard(modalBtn4, 'modalBtn4');
        } else {
            window.alert(`You do not have enough resources to purcahse this card.`);
        };
    };

    modalBtn3.onclick = function() {
        clearCardSelectionView();
        clickSFX.play();
    };
};
