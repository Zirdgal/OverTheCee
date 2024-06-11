import { cards } from "../data/cardData.js";
import { updateCardStates } from "./card-handler-script.js";

const endTurnButton = document.getElementById("end-turn-button");

endTurnButton.onclick = function endTurn() {
    cards.forEach(card => {
        card.used = false;
        updateCardStates();
    })
}