export let resourceCount = 2; // your current resources are saved here

// the object in the top right
const resourceObj1 = document.getElementById("resource-block-1");
const resourceObj2 = document.getElementById("resource-block-2");
const resourceObj3 = document.getElementById("resource-block-3");
const resourceObj4 = document.getElementById("resource-block-4");
const resourceObj5 = document.getElementById("resource-block-5");
const resourceObj6 = document.getElementById("resource-block-6");
const resourceObj7 = document.getElementById("resource-block-7");
const resourceObj8 = document.getElementById("resource-block-8");
const resourceObj9 = document.getElementById("resource-block-9");
const resourceObj10 = document.getElementById("resource-block-10");
const resourceObj11 = document.getElementById("resource-block-11");
const resourceObj12 = document.getElementById("resource-block-12");
const resourceObj13 = document.getElementById("resource-block-13");
const resourceObj14 = document.getElementById("resource-block-14");
const resourceObj15 = document.getElementById("resource-block-15");
const resourceObj16 = document.getElementById("resource-block-16");

const allResourceObj = [
    resourceObj1, resourceObj2, resourceObj3, resourceObj4, resourceObj5, resourceObj6, resourceObj7, resourceObj8, resourceObj9, resourceObj10, resourceObj11, resourceObj12,
    resourceObj13, resourceObj14, resourceObj15, resourceObj16
];

function updateResources() {
    // Reset all resource blocks
    allResourceObj.forEach(obj => obj.style.backgroundColor = "#888");
    
    // Highlight only the resource block at the resourceCount index
    if (resourceCount > 0 && resourceCount <= allResourceObj.length) {
        allResourceObj[resourceCount - 1].style.backgroundColor = "lightgray";
    }

    if (resourceCount === 0) {
        allResourceObj.forEach(obj => {
            obj.style.backgroundColor = "lightcoral";
        })
    }
}

export function addResources(addedResources) {
    resourceCount = Math.min(allResourceObj.length, resourceCount + Number(addedResources));
    updateResources();
    console.log("current resource count:");
    console.log(resourceCount);
}

export function subtractResources(subtractedResources) {
    resourceCount = Math.max(0, resourceCount - Number(subtractedResources));
    updateResources();
    console.log("current resource count:");
    console.log(resourceCount);
}
