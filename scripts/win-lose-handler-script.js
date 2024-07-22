
import { endGameView } from "./card-selection-view.js";

const modal = document.getElementById("modal-container");
const modalContent = document.getElementById("modal-content");
const modalBtn1 = document.getElementById("modal-btn-1");
const modalBtn2 = document.getElementById("modal-btn-2");
const modalText = document.getElementById("modal-text");
const enemyCardImage = document.getElementById("enemy-card-img");

function styleization() {

    endGameView();

    modalBtn1.onclick = function playAgain() {
        location.reload(); 
    }
    modalBtn2.onclick = function returnHome() {
        window.location.href = "https://zirdgal.github.io/OverTheCee"
    }
}

export function loseGame(x) {
    if (x === 1) {
        modalText.innerHTML = "You have lost! (Liepāja fell into Soviet Hands)";
    } else {
        modalText.innerHTML = "You have lost! (You have lost all Latvian Units)";
    };
    styleization();
};

export function winGame() {
    modalText.innerHTML = "You have won! (You've taken Cēsis!)";
    styleization();
}



