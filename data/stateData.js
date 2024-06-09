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
    latUnits: 0, gerUnits: 0, sovUnits: 3,
    adjacentState1: "Liepāja", adjacentState2: "Kuldīga", adjacentState3: "Tukums", adjacentState4: "Dobele"
};
const tukumsData = { 
    name: "Tukums", path: document.getElementById("state-tukums"), region: "Zemgale", category: "state", ownedBy: "sov", 
    latUnits: 0, gerUnits: 0, sovUnits: 3,
    adjacentState1: "Talsi", adjacentState2: "Kuldīga", adjacentState3: "Saldus", adjacentState4: "Dobele", adjacentState5: "Jelgava", adjacentState6: "Rīga"
};
const dobeleData = { 
    name: "Dobele", path: document.getElementById("state-dobele"), region: "Zemgale", category: "state", ownedBy: "sov", 
    latUnits: 0, gerUnits: 0, sovUnits: 2,
    adjacentState1: "Saldus", adjacentState2: "Tukums", adjacentState3: "Jelgava"
};
const jelgavaData = { 
    name: "Jelgava", path: document.getElementById("state-jelgava"), region: "Zemgale", category: "state", ownedBy: "sov", 
    latUnits: 0, gerUnits: 0, sovUnits: 1,
    adjacentState1: "Dobele", adjacentState2: "Tukums", adjacentState3: "Rīga", adjacentState4: "Bauska"
};
const limbaziData = { 
    name: "Limbaži", path: document.getElementById("state-limbazi"), region: "Vidzeme", category: "state", ownedBy: "sov", 
    latUnits: 0, gerUnits: 0, sovUnits: 1,
    adjacentState1: "Valmiera", adjacentState2: "Cēsis", adjacentState3: "Rīga"
};
const rigaData = { 
    name: "Rīga", path: document.getElementById("state-riga"), region: "Vidzeme", category: "state", ownedBy: "sov", 
    latUnits: 0, gerUnits: 0, sovUnits: 3,
    adjacentState1: "Limbaži", adjacentState2: "Cēsis", adjacentState3: "Ogre", adjacentState4: "Bauska", adjacentState5: "Jelgava", adjacentState6: "Tukums"
};
const bauskaData = { 
    name: "Bauska", path: document.getElementById("state-bauska"), region: "Zemgale", category: "state", ownedBy: "sov", 
    latUnits: 0, gerUnits: 0, sovUnits: 1,
    adjacentState1: "Jelgava", adjacentState2: "Rīga", adjacentState3: "Ogre", adjacentState4: "Aizkraukle"
};
const valmieraData = { 
    name: "Valmiera", path: document.getElementById("state-valmiera"), region: "Vidzeme", category: "state", ownedBy: "sov", 
    latUnits: 0, gerUnits: 0, sovUnits: 1,
    adjacentState1: "Limbaži", adjacentState2: "Cēsis", adjacentState3: "Valka"
};
const cesisData = { 
    name: "Cēsis", path: document.getElementById("state-cesis"), region: "Vidzeme", category: "state", ownedBy: "sov", 
    latUnits: 0, gerUnits: 0, sovUnits: 1,
    adjacentState1: "Limbaži", adjacentState2: "Valmiera", adjacentState3: "Valka", adjacentState4: "Gulbene", adjacentState5: "Madona", adjacentState6: "Ogre", adjacentState7: "Rīga"
};
const ogreData = {
    name: "Ogre", path: document.getElementById("state-ogre"), region: "Vidzeme", category: "state", ownedBy: "sov", 
    latUnits: 0, gerUnits: 0, sovUnits: 1,
    adjacentState1: "Rīga", adjacentState2: "Cēsis", adjacentState3: "Madona", adjacentState4: "Aizkraukle", adjacentState5: "Bauska"
};
const valkaData = { 
    name: "Valka", path: document.getElementById("state-valka"), region: "Vidzeme", category: "state", ownedBy: "sov", 
    latUnits: 0, gerUnits: 0, sovUnits: 1,
    adjacentState1: "Valmiera", adjacentState2: "Cēsis", adjacentState3: "Gulbene", adjacentState4: "Alūksne"
};
const aluksneData = { 
    name: "Alūksne", path: document.getElementById("state-aluksne"), region: "Vidzeme", category: "state", ownedBy: "sov", 
    latUnits: 0, gerUnits: 0, sovUnits: 1,
    adjacentState1: "Valka", adjacentState2: "Gulbene", adjacentState3: "Balvi"
};
const gulbeneData = { 
    name: "Gulbene", path: document.getElementById("state-gulbene"), region: "Vidzeme", category: "state", ownedBy: "sov", 
    latUnits: 0, gerUnits: 0, sovUnits: 1,
    adjacentState1: "Valka", adjacentState2: "Alūksne", adjacentState3: "Balvi", adjacentState4: "Madona", adjacentState5: "Cēsis"
};
const madonaData = { 
    name: "Madona", path: document.getElementById("state-madona"), region: "Vidzeme", category: "state", ownedBy: "sov", 
    latUnits: 0, gerUnits: 0, sovUnits: 1,
    adjacentState1: "Cēsis", adjacentState2: "Gulbene", adjacentState3: "Balvi", adjacentState4: "Rēzekne", adjacentState5: "Preiļi", adjacentState6: "Jēkabpils", adjacentState7: "Aizkraukle", adjacentState8: "Ogre"
};

const aizkraukleData = { 
    name: "Aizkraukle", path: document.getElementById("state-aizkraukle"), region: "Sēlija", category: "state", ownedBy: "sov", 
    latUnits: 0, gerUnits: 0, sovUnits: 1,
    adjacentState1: "Bauska", adjacentState2: "Ogre", adjacentState3: "Madona", adjacentState4: "Jēkabpils"
};
const jekabpilsData = { 
    name: "Jēkabpils", path: document.getElementById("state-jekabpils"), region: "Sēlija", category: "state", ownedBy: "sov", 
    latUnits: 0, gerUnits: 0, sovUnits: 1,
    adjacentState1: "Aizkraukle", adjacentState2: "Madona", adjacentState3: "Preiļi", adjacentState4: "Daugavpils"
};
const daugavpilsData = {
    name: "Daugavpils", path: document.getElementById("state-daugavpils"), region: "Sēlija", category: "state", ownedBy: "sov", 
    latUnits: 0, gerUnits: 0, sovUnits: 0,
    adjacentState1: "Jēkabpils", adjacentState2: "Preiļi", adjacentState3: "Krāslava"
};

const balviData = { 
    name: "Balvi", path: document.getElementById("state-balvi"), region: "Latgale", category: "state", ownedBy: "sov", 
    latUnits: 0, gerUnits: 0, sovUnits: 0,
    adjacentState1: "Alūksne", adjacentState2: "Gulbene", adjacentState3: "Madona", adjacentState4: "Rēzekne", adjacentState5: "Ludza"
};
const rezekneData = { 
    name: "Rēzekne", path: document.getElementById("state-rezekne"), region: "Latgale", category: "state", ownedBy: "sov", 
    latUnits: 0, gerUnits: 0, sovUnits: 0,
    adjacentState1: "Balvi", adjacentState2: "Ludza", adjacentState3: "Krāslava", adjacentState4: "Preiļi", adjacentState5: "Madona"
};
const preiliData = { 
    name: "Preiļi", path: document.getElementById("state-preili"), region: "Latgale", category: "state", ownedBy: "sov", 
    latUnits: 0, gerUnits: 0, sovUnits: 0,
    adjacentState1: "Madona", adjacentState2: "Rēzekne", adjacentState3: "Krāslava", adjacentState4: "Daugavpils", adjacentState5: "Jēkabpils"
};
const ludzaData = { 
    name: "Ludza", path: document.getElementById("state-ludza"), region: "Latgale", category: "state", ownedBy: "sov", 
    latUnits: 0, gerUnits: 0, sovUnits: 0,
    adjacentState1: "Balvi", adjacentState2: "Ludza", adjacentState3: "Krāslava"
};
const kraslavaData = { 
    name: "Krāslava", path: document.getElementById("state-kraslava"), region: "Latgale", category: "state", ownedBy: "sov", 
    latUnits: 0, gerUnits: 0, sovUnits: 0,
    adjacentState1: "Daugavpils", adjacentState2: "Preiļi", adjacentState3: "Rēzekne", adjacentState4: "Ludza"
};




export const states = [
    ventspilsData, kuldigaData, liepajaData, talsiData, saldusData, tukumsData, dobeleData, jelgavaData, bauskaData, limbaziData,
    rigaData, valmieraData, cesisData, ogreData, valkaData, aluksneData, gulbeneData, madonaData, aizkraukleData, jekabpilsData,
    daugavpilsData, balviData, rezekneData, preiliData, ludzaData, kraslavaData
];