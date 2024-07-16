import { states } from "../data/stateData.js";
import { loseGame, winGame } from "./win-lose-handler-script.js";


export let gameLostState = false;


// For Changing states to Latvian owned
export function updateStateImages() {
    let totalLatvianUnits = 0;

    states.forEach(state => {
        if (state.ownedBy === "lat") {
            state.path.src = "../../img/provinces/states/lat/state-" + state.id + ".png";
            totalLatvianUnits += state.latUnits;
        } else if (state.ownedBy === "sov" && state.isDisabled === false) {
            state.path.src = "../../img/provinces/states/sov/state-" + state.id + ".png";
        }

        // Win game script
        if (state.id === "cesis" && state.ownedBy === "lat") {
            winGame();
        }

        // Lose game script
        if (state.id === "liepaja" && state.ownedBy === "sov") {
            gameLostState = true;
            loseGame(1);
        }
    });

    // Check if total Latvian units are zero
    if (totalLatvianUnits === 0) {
        gameLostState = true;
        loseGame(2);
    }
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