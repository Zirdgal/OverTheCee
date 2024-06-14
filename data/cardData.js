const marchData = { name: "March", used: false, path: document.getElementById("march-card"), cost: "0", option1: "March", option1Level: "2", option2: "Recruit", option2Level: "2" };
const recruitData = { name: "Recruit", used: false, path: document.getElementById("recruit-card"), cost: "0", option1: "Recruit", option1Level: "2", option2: "Resource", option2Level: "2" };
const karlisUlmanisData = { name: "Kārlis Ulmanis", used: false, path: document.getElementById("karlis-ulmanis-card"), cost: "2", option1: "Resource", option1Level: "5", option2: "none", option2Level: "0" };
const m1890Data = { name: "M-1890", used: false, path: document.getElementById("m1890-card"), cost: "0", option1: "March", option1Level: "1", option2: "none", option2Level: "0" };
const m1902Data = { name: "M-1902", used: false, path: document.getElementById("m1902-card"), cost: "1", option1: "March", option1Level: "2", option2: "none", option2Level: "0" };
const m1910Data = { name: "M-1910", used: false, path: document.getElementById("m1910-card"), cost: "2", option1: "March", option1Level: "3", option2: "none", option2Level: "0" };




export const cards = [ marchData, karlisUlmanisData, recruitData, m1890Data, m1902Data, m1910Data ];



const placeholderData = { name: "Placeholder", used: false };


export const enemyCards = [ placeholderData ];

