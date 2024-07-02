import { states } from "../data/stateData.js";

// For Changing states to Latvian owned
export function updateStateImages() {
    states.forEach(state => {
        if (state.ownedBy === "lat") {
            state.path.src = "../../img/provinces/states/lat/state-" + state.id + ".png";
        } else if (state.ownedBy === "sov" && state.isDisabled === false) {
            state.path.src = "../../img/provinces/states/sov/state-" + state.id + ".png";
        }
    });
}

// MOVING LITHUANIA SCRIPT
const lithuaniaObj = document.getElementById("country-lithuania");

export function updateLithuania() {
    let lithuaniaSrc = "../../img/lithuania1918.png";
    if (states[6].ownedBy === "lat") {
        lithuaniaSrc = "../../img/lithuania1918moved1.png";
    }
    if (states[8].ownedBy === "lat") {
        lithuaniaSrc = "../../img/lithuania1918moved2.png";
    }
    lithuaniaObj.src = lithuaniaSrc;
}
