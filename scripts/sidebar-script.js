
import { clickSFX } from "../data/soundData.js";

// Sidebar Movement

const btn = document.getElementById("sidebar-button");
const sideBarContent = document.getElementById("sidebar-full-container");
const endTurnButton = document.getElementById("end-turn-button");

let sideBarState = false; // variable to just keep track if the sidebar is open

btn.onclick = function moveSideBar() { // if the sidebar button is clicked ...

    clickSFX.play();

    if (sideBarState === true) { // AND if the sidebar is open...
        sideBarContent.style.display = "none"; // close the bar
        btn.innerHTML = ">"; // make the sidebar arrow turn around
        sideBarState = false; // make the variable say that the sidebar is closed
    } else { // Or if the sidebar is closed....
        sideBarContent.style.display = "block"; // open the side bar
        btn.innerHTML = "<"; // turn that arrow!
        sideBarState = true; // update the variable 
        endTurnButton.style.display = "block"; // (this is for when the player opens the game for the first time)
    }
};
document.body.onkeyup = function(e) { // when any key is pressed
    if ( e.key == " " || e.code == "Space" || e.keyCode == 32 ) { // if the key is the spacebar do the same as the above lmfao

        clickSFX.play();

        if (sideBarState === true) { 
            sideBarContent.style.display = "none";
            btn.innerHTML = ">";
            sideBarState = false;
            endTurnButton.style.display = "block";
        } else {
            sideBarContent.style.display = "block";
            btn.innerHTML = "<";
            sideBarState = true;
            endTurnButton.style.display = "block";
        }
    }
  }

// State Selection

const selectedStateElem = document.getElementById("selected-state-text"); // the <h1> tag
const selectedStateRegion = document.getElementById("selected-state-region"); // the <p> tag
import { statesAndCountries } from "../data/stateData.js"; // get all of the state data :3

function updateSelectedStateUI(state) {
    selectedStateElem.innerHTML = state.name;
    selectedStateRegion.innerHTML = state.region;
    if (state.ownedBy === "sov") {
        selectedStateElem.style.color = "red";
    } else if (state.ownedBy === "lit"){
        selectedStateElem.style.color = "yellow";
    } else if (state.ownedBy === "ger"){
        selectedStateElem.style.color = "gray";
    } else if (state.ownedBy === "est"){
        selectedStateElem.style.color = "blue";
    } else {
        selectedStateElem.style.color = "green";
    }
}

function attachStateClickListeners() {
    statesAndCountries.forEach(state => {
        state.path.addEventListener("click", function() {
            updateSelectedStateUI(state); // Update selected state UI
            clickSFX.play();
        });
    });
}

document.addEventListener("DOMContentLoaded", function() {
    attachStateClickListeners();
});

// Export the function to allow re-attachment after state replacement
export { attachStateClickListeners };
