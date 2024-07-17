const marchData = { name: "March", id: "march", used: false, path: document.getElementById("march-card"), cost: "0", option1: "March", option1Level: "2", option2: "Recruit", option2Level: "2" };
const recruitData = { name: "Recruit", id: "recruit" , used: false, path: document.getElementById("recruit-card"), cost: "0", option1: "Recruit", option1Level: "2", option2: "Resource", option2Level: "2" };
const karlisUlmanisData = { name: "Kārlis Ulmanis", id: "karlisUlmanis", used: false, path: document.getElementById("karlis-ulmanis-card"), cost: "2", option1: "Resource", option1Level: "5", option2: "none", option2Level: "0" };
const m1890Data = { name: "M-1890", id: "m1890", used: false, path: document.getElementById("m1890-card"), cost: "0", option1: "March", option1Level: "1", option2: "none", option2Level: "0" };
const m1902Data = { name: "M-1902", id: "m1902", used: false, path: document.getElementById("m1902-card"), cost: "1", option1: "March", option1Level: "2", option2: "none", option2Level: "0" };
const m1910Data = { name: "M-1910", id: "m1910", used: false, path: document.getElementById("m1910-card"), cost: "2", option1: "March", option1Level: "3", option2: "none", option2Level: "0" };
const alliedShipsData = { name: "English and French War Fleet", id: "alliedShips", used: false, path: document.getElementById("allied-ships-card"), cost: "1", option1: "Resource", option1Level: "2", option2: "alliedShips", option2Level: "1" };




export const cards = [ marchData, karlisUlmanisData, recruitData, m1890Data, m1902Data, m1910Data, alliedShipsData ];



const placeholderData = { name: "Placeholder", used: false };


export const enemyCards = [ placeholderData ];

