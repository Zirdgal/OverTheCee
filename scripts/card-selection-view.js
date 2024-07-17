import { cards } from "../data/cardData.js";

// modal elements
const modal = document.getElementById("modal-container");
const modalContent = document.getElementById("modal-content");
const modalBtn1 = document.getElementById("modal-btn-1");
const modalBtn2 = document.getElementById("modal-btn-2");
const modalBtn3 = document.getElementById("modal-btn-3");
const modalText = document.getElementById("modal-text");
const enemyCardImage = document.getElementById("enemy-card-img");
const friendlyCardImage = document.getElementById("friendly-card-img");

export function cardSelectionView(cardID) {
    console.log(`cardSelectionView ${cardID}`);

    cards.forEach(card => {
        if (card.id === cardID) {
            friendlyCardImage.src = `../../img/cards/${cardID}.png`;

            modal.style.pointerEvents = "auto";
            modal.style.backgroundColor = "rgba(0,0,0,0.4)";
            modalContent.style.marginTop = "10vh";
            modalContent.style.marginLeft = "40vw";
            modalText.innerHTML = "Please select an option:";
            modal.style.display = "block";
            modalBtn1.style.display = "inline-block";
            modalBtn2.style.display = "inline-block";
            modalBtn3.style.display = "block";
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
    modalText.style.display = "none";
    enemyCardImage.style.display = "none";
    friendlyCardImage.style.display = "none";
}
