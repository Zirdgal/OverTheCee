const playButton = document.getElementById("play-button");
const containerDiv = document.getElementById("container-div");
const backgroundImg = document.getElementById("background-img");

const selectionDiv = document.getElementById("selection-container");
const selectionText = document.getElementById("selection-text");

const estonianHitBox = document.getElementById("estonian-hitbox");
const latvianHitBox = document.getElementById("latvian-hitbox");
const lithuanianHitBox = document.getElementById("lithuanian-hitbox");

const scenarioBtn1 = document.getElementById("scenario-button-1");
const scenarioBtn2 = document.getElementById("scenario-button-2");
const scenarioBtn3 = document.getElementById("scenario-button-3");

function showScenarioBtns() {
    selectionText.innerHTML = "Please select a Scenario:";
    scenarioBtn1.hidden = false;
    scenarioBtn2.hidden = false;
    scenarioBtn2.disabled = true;
    scenarioBtn3.hidden = false;
    scenarioBtn3.disabled = true;
}

document.addEventListener("DOMContentLoaded", function() {
    playButton.onclick = function() {
        containerDiv.style.display = "none";
        selectionDiv.style.display = "flex";
        backgroundImg.style.animation = "none"; // Stop current animation
        backgroundImg.style.transform = "scale(2.5) translate(10vw, 25vh)";
        backgroundImg.src = "./img/map-coloured.png";
        
        // Start the swayZoomed animation after image source has changed
        setTimeout(function() {
            backgroundImg.style.animation = "swayZoomed 15s infinite linear";
        }, 50);

        estonianHitBox.style.display = "block";
        latvianHitBox.style.display = "block";
        lithuanianHitBox.style.display = "block";

        estonianHitBox.onclick = function() {
            selectionText.style.color = "lightblue";
            scenarioBtn1.disabled = true;
            showScenarioBtns();
        };
        latvianHitBox.onclick = function() {
            selectionText.style.color = "lightcoral";
            scenarioBtn1.disabled = false;
            showScenarioBtns();
            scenarioBtn1.onclick = function() {
                window.location.href = "./pages/inbetween.html";
            }
        };
        lithuanianHitBox.onclick = function() {
            selectionText.style.color = "lightgreen";
            showScenarioBtns();
            scenarioBtn1.disabled = true;
        };
    };
});
