import { cards, regCards, starterCards, openCardSlots, everyCardSlots } from "../data/cardData.js";

document.addEventListener("DOMContentLoaded", function() {
    console.log('DOM fully loaded and parsed');
    console.log('Starter cards:', starterCards);

    openCardSlots[0].img.src = `../.${starterCards[0].path}`;
    openCardSlots[1].img.src = `../.${starterCards[0].path}`;
    openCardSlots[2].img.src = `../.${starterCards[0].path}`;
    openCardSlots[3].img.src = `../.${starterCards[0].path}`;
    openCardSlots[4].img.src = `../.${starterCards[1].path}`;
    openCardSlots[5].img.src = `../.${starterCards[1].path}`;
    openCardSlots[6].img.src = `../.${starterCards[1].path}`;
    openCardSlots[7].img.src = `../.${starterCards[1].path}`;
    openCardSlots[8].img.src = `../.${starterCards[2].path}`;
    openCardSlots[9].img.src = `../.${starterCards[2].path}`;
    openCardSlots[10].img.src = `../.${starterCards[2].path}`;
    openCardSlots[11].img.src = `../.${starterCards[2].path}`;

});

export function drawRandomRegularCard(cardSlot, arrayType) {
    console.log("drawRandomRegularCard function called");
    console.log("cardSlot passed:", cardSlot);

    function getRandomItem(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    };

    // Get a new random card from the arrayType
    let newCard = getRandomItem(arrayType);
    console.log("New random card drawn:", newCard);

    cardSlot.img.src = `../.${newCard.path}`;  // Ensure to set the src property of the image element
    console.log("Updated image source:", cardSlot.img.src);

    cardSlot.currentCardID = newCard.id; // Changes the current card ID so it knows what it is doing
    cardSlot.btn.style.display = "block";

    // Mark the card slot as not used anymore
    cardSlot.used = false;
};

export function detectOpenCardSlots(number) {
    console.log('detectOpenCardSlots has initiated');

    let processedCount = 0;

    everyCardSlots.forEach(everyCardSlot => {
        // Continue drawing cards until the required number is reached
        if (processedCount < number && everyCardSlot.used === true) {
            // Draw a card and update the slot
            drawRandomRegularCard(everyCardSlot, regCards);
            processedCount++;
            console.log(`processedCount is ${processedCount}`);
        };
    });
};
export function detectOpenCardSlotsAndInsertEstablishedCard(number, card) {
    console.log('detectOpenCardSlotsAndInsertEstablishedCard has initiated');

    let processedCount = 0;

    everyCardSlots.forEach(everyCardSlot => {
        // Continue drawing cards until the required number is reached
        if (processedCount < number && everyCardSlot.used === true) {
            // Draw a card and update the slot
            everyCardSlot.img.src = `../.${card.path}`;  // Ensure to set the src property of the image element
            everyCardSlot.currentCardID = card.id; // Changes the current card ID so it knows what it is doing
            everyCardSlot.btn.style.display = "block";
        
            // Mark the card slot as not used anymore
            everyCardSlot.used = false;
            processedCount++;
            console.log(`processedCount is ${processedCount}`);
        };
    });
};
