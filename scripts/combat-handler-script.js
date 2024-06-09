import { updateAllUnitImages } from "./unit-handler-script.js";
import { updateFriendlyStateImages } from "./state-updation-script.js";

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
        // Adjust total friendly units
        console.log("adjusting all of friendly units");
        totalFriendlyUnits -= state.sovUnits;

        if (totalFriendlyUnits < 0) {
            console.log("all friendly units are too low, resetting to 0");
            totalFriendlyUnits = 0;
        }

        // Split the remaining friendly units evenly
        let halfUnits = Math.floor(totalFriendlyUnits / 2);
        state.latUnits = halfUnits;
        state.gerUnits = totalFriendlyUnits - halfUnits;

        // Ensure that neither latUnits nor gerUnits goes negative
        if (state.latUnits < 0) {
            state.latUnits = 0;
        }
        if (state.gerUnits < 0) {
            state.gerUnits = 0;
        }

        // Update the state with the new unit counts
        state.sovUnits = enemyUnits;
    }


    if (state.sovUnits === 0 && state.latUnits >= 1 || state.gerUnits >= 1) {
        state.ownedBy = "lat";
        updateFriendlyStateImages();
    }

    updateAllUnitImages();
    console.log(state);
    return;
}
