// Sidebar Movement

const btn = document.getElementById("sidebar-button");
const sideBarContent = document.getElementById("sidebar-full-container");
const endTurnButton = document.getElementById("end-turn-button");

let sideBarState = false;

btn.onclick = function moveSideBar() {
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
};
document.body.onkeyup = function(e) {
    if (e.key == " " ||
        e.code == "Space" ||      
        e.keyCode == 32      
    ) {
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

const selectedStateElem = document.getElementById("selected-state-text");
const selectedStateRegion = document.getElementById("selected-state-region");
import { states } from "../data/stateData.js";

function updateSelectedStateUI(state) {
    selectedStateElem.innerHTML = state.name;
    selectedStateRegion.innerHTML = state.region;
    if (state.ownedBy === "sov") {
        selectedStateElem.style.color = "red";
    } else {
        selectedStateElem.style.color = "green";
    }
}

function attachStateClickListeners() {
    states.forEach(state => {
        state.path.addEventListener("click", function() {
            updateSelectedStateUI(state); // Update selected state UI
        });
    });
}

document.addEventListener("DOMContentLoaded", function() {
    attachStateClickListeners();
});

// Export the function to allow re-attachment after state replacement
export { attachStateClickListeners };
