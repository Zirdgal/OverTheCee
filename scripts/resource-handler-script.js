export let resourceCount = 2; // your current resources are saved here

const resourceCountObj = document.getElementById("resouce-counter");
// the object in the top right

function updateResources() {
    resourceCountObj.innerHTML = `Your resource count: ${resourceCount}`; // changes the counter in the top right
    return;
};

export function addResources(addedResources) { // this function gets called in card-handler-script.js
    resourceCount += Number(addedResources); // changes tehc current resources to the number version of the given addedResources variable
    updateResources(); // call the function up above
    return;
}
export function subtractResources(subtractedResources) {
    resourceCount -= Number(subtractedResources); // changes tehc current resources to the number version of the given subtractedResources variable
    updateResources(); // call the function up above
    return;
}
