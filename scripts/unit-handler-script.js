import { states } from "../data/stateData.js";

function getUnitImageFilename(unitCount) { // Function to get the correct image filename based on unit count
    return `${unitCount}inf.png`;
}

function sanitizeStateName(stateName) {
    return stateName.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9]/g, "").toLowerCase(); // Remove any special characters from the latvian alphabet
}

function updateUnitImageForState(state, unitType) {

    const unitCount = state[unitType]; // it takes ventspilsData.latUnits for example it just saves the amount of the units of the specific type here
    const unitImageFilename = getUnitImageFilename(unitCount); // make the image filename

    const unitTypePrefixMap = { // Define the correct prefix for each unit type
        latUnits: "lat",
        gerUnits: "ger",
        sovUnits: "sov"
    };

    const unitTypePrefix = unitTypePrefixMap[unitType]; // Look if its lat ger or sov
    const sanitizedStateName = sanitizeStateName(state.name); // remove latvian characters

    const unitElementId = `${unitTypePrefix}-unit-${sanitizedStateName}`; // Create ID of the <img> tag
    const unitImgElement = document.getElementById(unitElementId); // Get the ID of the <img> tag

    if (unitImgElement) { // If it exists, then change it
        unitImgElement.src = `../../img/units/${unitTypePrefix}/${unitImageFilename}`;
    } else {
        console.error(`Image element with ID ${unitElementId} not found`); // else log da errorsss
    }
}
export function updateAllUnitImages() {
    // for every state =>
    states.forEach(state => { // saves state as its own variable
        // check every Latvian german and soviet union 
        ['latUnits', 'gerUnits', 'sovUnits'].forEach(unitType => { // saves unit type
            updateUnitImageForState(state, unitType); // now calls the function above with the two variables here
        });
    });
}

// Call the function to update all unit images
updateAllUnitImages();
