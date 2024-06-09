import { states } from "../data/stateData.js";

export function updateFriendlyStateImages() {
    states.forEach(state => {
        if (state.ownedBy === "lat") {
            state.path.src = "../../img/provinces/states/lat/state-" + state.id + ".png"
            console.log("cool");
        }
    });
};