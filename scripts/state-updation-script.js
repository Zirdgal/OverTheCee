import { states } from "../data/stateData.js";

const lithuaniaObj = document.getElementById("country-lithuania");

export function updateFriendlyStateImages() {
    states.forEach(state => {
        if (state.ownedBy === "lat") {
            state.path.src = "../../img/provinces/states/lat/state-" + state.id + ".png";
        }
    });
}

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
