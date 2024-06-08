const ventspilsData = { 
    name: "Ventspils", path: document.getElementById("state-ventspils"), region: "Kurzeme", category: "state", ownedBy: "lat", 
    latUnits: 1, gerUnits: 1, sovUnits: 0,
    adjacentState1: "Kuldīga", adjacentState2: "Liepāja", adjacentState3: "Talsi"
};
const kuldigaData = { 
    name: "Kuldīga", path: document.getElementById("state-kuldiga"), region: "Kurzeme", category: "state", ownedBy: "lat", 
    latUnits: 1, gerUnits: 1, sovUnits: 0 ,
    adjacentState1: "Ventspils", adjacentState2: "Talsi", adjacentState3: "Tukums", adjacentState4: "Saldus", adjacentState5: "Liepāja"
};
const liepajaData = { 
    name: "Liepāja", path: document.getElementById("state-liepaja"), region: "Kurzeme", category: "state", ownedBy: "lat", 
    latUnits: 1, gerUnits: 1, sovUnits: 0,
    adjacentState1: "Ventspils", adjacentState2: "Kuldīga", adjacentState3: "Saldus"
};
const talsiData = { 
    name: "Talsi", path: document.getElementById("state-talsi"), region: "Kurzeme", category: "state", ownedBy: "sov", 
    latUnits: 0, gerUnits: 0, sovUnits: 3,
    adjacentState1: "Ventspils", adjacentState2: "Kuldīga", adjacentState3: "Tukums"
};
const saldusData = { 
    name: "Saldus", path: document.getElementById("state-saldus"), region: "Kurzeme", category: "state", ownedBy: "sov", 
    latUnits: 0, gerUnits: 0, sovUnits: 3  
};

const tukumsData = { 
    name: "Tukums", path: document.getElementById("state-tukums"), region: "Zemgale", category: "state", ownedBy: "sov", 
    latUnits: 0, gerUnits: 0, sovUnits: 3  
};
const dobeleData = { 
    name: "Dobele", path: document.getElementById("state-dobele"), region: "Zemgale", category: "state", ownedBy: "sov", 
    latUnits: 0, gerUnits: 0, sovUnits: 2  
};
const jelgavaData = { 
    name: "Jelgava", path: document.getElementById("state-jelgava"), region: "Zemgale", category: "state", ownedBy: "sov", 
    latUnits: 0, gerUnits: 0, sovUnits: 1 
};
const bauskaData = { 
    name: "Bauska", path: document.getElementById("state-bauska"), region: "Zemgale", category: "state", ownedBy: "sov", 
    latUnits: 0, gerUnits: 0, sovUnits: 1  
};

const limbaziData = { 
    name: "Limbaži", path: document.getElementById("state-limbazi"), region: "Vidzeme", category: "state", ownedBy: "sov", 
    latUnits: 0, gerUnits: 0, sovUnits: 1  
};
const rigaData = { 
    name: "Rīga", path: document.getElementById("state-riga"), region: "Vidzeme", category: "state", ownedBy: "sov", 
    latUnits: 0, gerUnits: 0, sovUnits: 3 
};
const valmieraData = { 
    name: "Valmiera", path: document.getElementById("state-valmiera"), region: "Vidzeme", category: "state", ownedBy: "sov", 
    latUnits: 0, gerUnits: 0, sovUnits: 1  
};
const cesisData = { 
    name: "Cēsis", path: document.getElementById("state-cesis"), region: "Vidzeme", category: "state", ownedBy: "sov", 
    latUnits: 0, gerUnits: 0, sovUnits: 1  
};
const ogreData = {
    name: "Ogre", path: document.getElementById("state-ogre"), region: "Vidzeme", category: "state", ownedBy: "sov", 
    latUnits: 0, gerUnits: 0, sovUnits: 1  
};
const valkaData = { 
    name: "Valka", path: document.getElementById("state-valka"), region: "Vidzeme", category: "state", ownedBy: "sov", 
    latUnits: 0, gerUnits: 0, sovUnits: 1  
};
const aluksneData = { 
    name: "Alūksne", path: document.getElementById("state-aluksne"), region: "Vidzeme", category: "state", ownedBy: "sov", 
    latUnits: 0, gerUnits: 0, sovUnits: 1  
};
const gulbeneData = { 
    name: "Gulbene", path: document.getElementById("state-gulbene"), region: "Vidzeme", category: "state", ownedBy: "sov", 
    latUnits: 0, gerUnits: 0, sovUnits: 1  
};
const madonaData = { 
    name: "Madona", path: document.getElementById("state-madona"), region: "Vidzeme", category: "state", ownedBy: "sov", 
    latUnits: 0, gerUnits: 0, sovUnits: 1  
};

const aizkraukleData = { 
    name: "Aizkraukle", path: document.getElementById("state-aizkraukle"), region: "Sēlija", category: "state", ownedBy: "sov", 
    latUnits: 0, gerUnits: 0, sovUnits: 1  
};
const jekabpilsData = { 
    name: "Jēkabpils", path: document.getElementById("state-jekabpils"), region: "Sēlija", category: "state", ownedBy: "sov", 
    latUnits: 0, gerUnits: 0, sovUnits: 1  
};
const daugavpilsData = {
    name: "Daugavpils", path: document.getElementById("state-daugavpils"), region: "Sēlija", category: "state", ownedBy: "sov", 
    latUnits: 0, gerUnits: 0, sovUnits: 0  
};

const balviData = { 
    name: "Balvi", path: document.getElementById("state-balvi"), region: "Latgale", category: "state", ownedBy: "sov", 
    latUnits: 0, gerUnits: 0, sovUnits: 0  
};
const rezekneData = { 
    name: "Rēzekne", path: document.getElementById("state-rezekne"), region: "Latgale", category: "state", ownedBy: "sov", 
    latUnits: 0, gerUnits: 0, sovUnits: 0 
};
const preiliData = { 
    name: "Preiļi", path: document.getElementById("state-preili"), region: "Latgale", category: "state", ownedBy: "sov", 
    latUnits: 0, gerUnits: 0, sovUnits: 0
};
const ludzaData = { 
    name: "Ludza", path: document.getElementById("state-ludza"), region: "Latgale", category: "state", ownedBy: "sov", 
    latUnits: 0, gerUnits: 0, sovUnits: 0 
};
const kraslavaData = { 
    name: "Krāslava", path: document.getElementById("state-kraslava"), region: "Latgale", category: "state", ownedBy: "sov", 
    latUnits: 0, gerUnits: 0, sovUnits: 0  
};




export const states = [
    ventspilsData, kuldigaData, liepajaData, talsiData, saldusData, tukumsData, dobeleData, jelgavaData, bauskaData, limbaziData,
    rigaData, valmieraData, cesisData, ogreData, valkaData, aluksneData, gulbeneData, madonaData, aizkraukleData, jekabpilsData,
    daugavpilsData, balviData, rezekneData, preiliData, ludzaData, kraslavaData
];