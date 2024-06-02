// Sidebar Movement

const btn = document.getElementById("sidebar-button");
const sideBarContent = document.getElementById("sidebar-full-container");

let sideBarState = true;

btn.onclick = function moveSideBar() {
    if (sideBarState === true) {
        sideBarContent.style.display = "none";
        btn.innerHTML = ">";
        sideBarState = false;
    } else {
        sideBarContent.style.display = "block";
        btn.innerHTML = "<";
        sideBarState = true;
    }
};

// State Selection

const selectedStateElem = document.getElementById("selected-state-text");
const selectedStateRegion = document.getElementById("selected-state-region");

import { states } from "../data/stateData.js";

document.addEventListener("DOMContentLoaded", function() {
    states.forEach(state => {
        state.path.addEventListener("click", function() { // Attach click event listener to each state's path element
            selectedStateElem.innerHTML = state.name;
            selectedStateRegion.innerHTML = state.region;
            if (state.ownedBy === "sov") {
                selectedStateElem.style.color = "red";
            } else {
                selectedStateElem.style.color = "green";
            };
        });
    });
});


