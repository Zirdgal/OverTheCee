import { updateAllUnitImages } from "./unit-handler-script.js";
import { updateFriendlyStateImages, updateLithuania } from "./state-updation-script.js";

export function handleCombat(state) {
    console.log("yes we have ran! (combat-handler-script.js)");
    console.log(state);

    let enemyUnits = state.sovUnits;
    let totalFriendlyUnits = state.latUnits + state.gerUnits;

    // Subtract friendly units from enemy units
    enemyUnits -= totalFriendlyUnits;

    // Ensure enemy units don't go negative
    if (enemyUnits < 0) {
        enemyUnits = 0;
    }

    // Handle case where only Latvian units are involved
    if (state.gerUnits === 0) {
        console.log("no gerUnits detected");
        state.latUnits -= state.sovUnits;
        if (state.latUnits < 0) {
            console.log("latUnits are too low, resetting to 0");
            state.latUnits = 0;
        }
        state.sovUnits = enemyUnits;
    }

    // Handle case where only German units are involved
    else if (state.latUnits === 0) {
        console.log("no latUnits detected");
        state.gerUnits -= state.sovUnits;
        if (state.gerUnits < 0) {
            console.log("gerUnits are too low, resetting to 0");
            state.gerUnits = 0;
        }
        state.sovUnits = enemyUnits;
    }

    // Handle case where both Latvian and German units are involved
    else {
        // Calculate proportion of loss for each type of unit
        let totalLoss = Math.min(state.sovUnits, totalFriendlyUnits);
        let latLoss = Math.floor((state.latUnits / totalFriendlyUnits) * totalLoss);
        let gerLoss = totalLoss - latLoss;

        state.latUnits -= latLoss;
        state.gerUnits -= gerLoss;
        state.sovUnits -= totalLoss;

        // Ensure that neither latUnits nor gerUnits goes negative
        if (state.latUnits < 0) {
            state.latUnits = 0;
        }
        if (state.gerUnits < 0) {
            state.gerUnits = 0;
        }
    }

    console.log(state);

    if (state.sovUnits === 0) {
        state.ownedBy = "lat";
    }

    console.log("Updated state ownership and unit counts:");
    console.log(state);

    updateAllUnitImages();
    updateFriendlyStateImages();
    updateLithuania();
}

export function removeUnits(state, amount) {
    state.sovUnits -= amount;
    if (state.sovUnits < 0) {
        state.sovUnits = 0;
    }
    updateAllUnitImages();
    return;
}
