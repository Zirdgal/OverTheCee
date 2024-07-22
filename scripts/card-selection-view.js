import { cards } from "../data/cardData.js";

// modal elements
const modal = document.getElementById("modal-container");
const modalContent = document.getElementById("modal-content");
export const modalBtn1 = document.getElementById("modal-btn-1");
export const modalBtn2 = document.getElementById("modal-btn-2");
export const modalBtn3 = document.getElementById("modal-btn-3");
export const modalBtn4 = document.getElementById("modal-btn-4");
const modalText = document.getElementById("modal-text");
const enemyCardImage = document.getElementById("enemy-card-img");
const friendlyCardImage = document.getElementById("friendly-card-img");

//sidebar btns
const selectedStateActionButton1 = document.getElementById("selected-state-action-button-1");
const selectedStateActionButton2 = document.getElementById("selected-state-action-button-2");
const selectedStateActionText = document.getElementById("selected-state-action-text-container");
const selectedStateActionInput1 = document.getElementById("selected-state-action-input-1");
const selectedStateActionInput2 = document.getElementById("selected-state-action-input-2");

export function cardSelectionView(cardID) {
    console.log(`cardSelectionView ${cardID}`);

    cards.forEach(card => {
        if (card.id === cardID) {
            friendlyCardImage.src = `../../img/cards/${cardID}.png`;

            modal.style.pointerEvents = "auto";
            modal.style.backgroundColor = "rgba(0,0,0,0.4)";
            modalContent.style.marginTop = "10vh";
            modalContent.style.marginLeft = "40vw";
            modalContent.style.width = "17vw";
            modalContent.style.height = "auto";
            modalContent.style.fontSize = "2vh";
            modalText.innerHTML = "Please select an option:";
            modal.style.display = "block";
            modalContent.style.display = "block";
            modalText.style.display = "block";
            modalBtn1.style.display = "inline-block";
            modalBtn1.style.backgroundImage = "none";
            modalBtn1.style.height = "auto";
            modalBtn1.style.width = "auto";
            modalBtn2.style.display = "inline-block";
            modalBtn2.style.backgroundImage = "none";
            modalBtn2.style.height = "auto";
            modalBtn2.style.width = "auto";
            modalBtn3.style.display = "block";
            modalBtn4.style.display = "none";
            modalBtn3.innerHTML = "CANCEL";
            enemyCardImage.style.display = "none";
            friendlyCardImage.style.display = "block";
            return;
        };
    });
};

export function clearCardSelectionView() {
    modal.style.backgroundColor = "transparent";
    modal.style.pointerEvents = "none";
    modalContent.style.display = "none";
    modalBtn1.style.display = "none";
    modalBtn2.style.display = "none";
    modalBtn3.style.display = "none";
    modalBtn4.style.display = "none";
    enemyCardImage.style.display = "none";
    friendlyCardImage.style.display = "none";
    return;
}

export function stateSelectionView() {
    modal.style.display = "block";
    modal.style.backgroundColor = "transparent";
    modal.style.pointerEvents = "none";
    modalContent.style.marginTop = "5%";
    modalContent.style.width = "25vw";
    modalContent.style.height = "auto";
    modalContent.style.fontSize = "2vh";
    modalContent.style.display = "block";
    modalBtn1.style.display = "none";
    modalBtn2.style.display = "none";
    modalBtn3.style.display = "none";
    modalBtn4.style.display = "none";
    modalText.innerHTML = "Please select a state...";
    modalText.style.display = "block";
    enemyCardImage.style.display = "none";
    friendlyCardImage.style.display = "none";
    return;
};

export function endTurnView() {
    modal.style.pointerEvents = "auto";
    modal.style.backgroundColor = "rgba(0,0,0,0.2)";
    modalContent.style.marginTop = "10vh";
    modalContent.style.marginLeft = "36.5vw";
    modalContent.style.display = "block";
    modalContent.style.height = "auto";
    modalContent.style.fontSize = "2vh";
    modalText.innerHTML = "The Soviets Turn:";
    modal.style.display = "block";
    modalBtn1.style.display = "none";
    modalBtn2.style.display = "none";
    modalBtn3.style.display = "none";
    modalBtn4.style.display = "none";
    friendlyCardImage.style.display = "none";
    enemyCardImage.style.marginLeft = "-11vw";
    selectedStateActionButton1.style.display = "none";
    selectedStateActionButton2.style.display = "none";
    selectedStateActionText.style.display = "none";
    selectedStateActionInput1.style.display = "none";
    selectedStateActionInput2.style.display = "none";
    return;
};

export function endGameView() {
    modal.style.pointerEvents = "auto";
    modal.style.backgroundColor = "rgba(0,0,0,0.4)";
    modalContent.style.marginTop = "25%";
    modalContent.style.marginLeft = "30vw";
    modalContent.style.width = "33vw";
    modal.style.display = "block";
    modalBtn1.style.display = "inline-block";
    modalBtn1.innerHTML = "Play again";
    modalBtn1.style.backgroundImage = "none";
    modalBtn1.style.height = "auto";
    modalBtn1.style.width = "auto";
    modalBtn2.style.display = "inline-block";
    modalBtn2.innerHTML = "Return Home"
    modalBtn2.style.backgroundImage = "none";
    modalBtn2.style.height = "auto";
    modalBtn2.style.width = "auto";
    enemyCardImage.style.display = "none";
    return;
};

export function shopView() {
    modal.style.display = "block";
    modal.style.backgroundColor = "rgba(0,0,0,0.4)";
    modal.style.pointerEvents = "auto";
    modalContent.style.marginTop = "15vh";
    modalContent.style.marginLeft = "14vw";
    modalContent.style.width = "70vw";
    modalContent.style.height = "60vh";
    modalContent.style.fontSize = "4vh";
    modalContent.style.display = "block";
    modalBtn1.style.display = "inline-block";
    modalBtn1.style.height = "50vh";
    modalBtn1.style.width = "20vw";
    modalBtn1.innerHTML = " ";
    modalBtn1.style.backgroundSize = "20vw 50vh";
    modalBtn2.style.display = "inline-block";
    modalBtn2.style.height = "50vh";
    modalBtn2.style.width = "20vw";
    modalBtn2.style.backgroundSize = "20vw 50vh";
    modalBtn2.innerHTML = " ";
    modalBtn4.style.display = "inline-block";
    modalBtn4.style.height = "50vh";
    modalBtn4.style.width = "20vw";
    modalBtn4.style.backgroundSize = "20vw 50vh";
    modalBtn3.style.display = "block";
    modalBtn3.innerHTML = "CLOSE";
    modalText.innerHTML = "The Shop";
    modalText.style.display = "block";
    enemyCardImage.style.display = "none";
    friendlyCardImage.style.display = "none";
    return;
}

