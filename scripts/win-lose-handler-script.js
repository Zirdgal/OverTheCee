const modal = document.getElementById("modal-container");
const modalContent = document.getElementById("modal-content");
const modalBtn1 = document.getElementById("modal-btn-1");
const modalBtn2 = document.getElementById("modal-btn-2");
const modalText = document.getElementById("modal-text");
const enemyCardImage = document.getElementById("enemy-card-img");

export function loseGame() {
    modal.style.pointerEvents = "auto";
    modal.style.backgroundColor = "rgba(0,0,0,0.4)";
    modalContent.style.marginTop = "25%";
    modalText.innerHTML = "You have lost! (Liepāja fell into Soviet Hands)";
    modal.style.display = "block";
    modalBtn1.style.display = "inline-block";
    modalBtn1.innerHTML = "Play again"
    modalBtn2.style.display = "inline-block";
    modalBtn2.innerHTML = "Return Home"
    enemyCardImage.style.display = "none";


    modalBtn1.onclick = function playAgain() {
        location.reload(); 
    }
    modalBtn2.onclick = function returnHome() {
        window.location.href = "https://zirdgal.github.io/OverTheCee"
    }
};