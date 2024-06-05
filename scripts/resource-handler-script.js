export let resourceCount = 2;

const resourceCountObj = document.getElementById("resouce-counter");


function updateResources() {
    resourceCountObj.innerHTML = `Your resource count: ${resourceCount}`;
    return;
};

export function addResources(addedResources) {
    resourceCount += Number(addedResources);
    updateResources();
    return;
}
export function subtractResources(subtractedResources) {
    resourceCount -= Number(subtractedResources);
    updateResources();
    return;
}
