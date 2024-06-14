let ventspilsData = { 
    name: "Ventspils", id: "ventspils", path: document.getElementById("state-ventspils"), region: "Kurzeme", category: "state", 
    ownedBy: "lat", isCoastal: true, isDisabled: false,
    latUnits: 1, gerUnits: 1, sovUnits: 0,
    adjacentState1: "Kuldīga", adjacentState2: "Liepāja", adjacentState3: "Talsi"
};
let kuldigaData = { 
    name: "Kuldīga", id: "kuldiga", path: document.getElementById("state-kuldiga"), region: "Kurzeme", category: "state", 
    ownedBy: "lat", isCoastal: true, isDisabled: false,
    latUnits: 1, gerUnits: 1, sovUnits: 0 ,
    adjacentState1: "Ventspils", adjacentState2: "Talsi", adjacentState3: "Tukums", adjacentState4: "Saldus", adjacentState5: "Liepāja"
};
let liepajaData = { 
    name: "Liepāja", id: "liepaja", path: document.getElementById("state-liepaja"), region: "Kurzeme", category: "state", 
    ownedBy: "lat", isCoastal: true, isDisabled: false,
    latUnits: 1, gerUnits: 1, sovUnits: 0,
    adjacentState1: "Ventspils", adjacentState2: "Kuldīga", adjacentState3: "Saldus"
};
let talsiData = { 
    name: "Talsi", id: "talsi", path: document.getElementById("state-talsi"), region: "Kurzeme", category: "state", 
    ownedBy: "sov", isCoastal: true, isDisabled: false,
    latUnits: 0, gerUnits: 0, sovUnits: 3,
    adjacentState1: "Ventspils", adjacentState2: "Kuldīga", adjacentState3: "Tukums"
};
let saldusData = { 
    name: "Saldus", id: "saldus", path: document.getElementById("state-saldus"), region: "Kurzeme", category: "state", 
    ownedBy: "sov", isCoastal: false, isDisabled: false,
    latUnits: 0, gerUnits: 0, sovUnits: 3,
    adjacentState1: "Liepāja", adjacentState2: "Kuldīga", adjacentState3: "Tukums", adjacentState4: "Dobele"
};
let tukumsData = { 
    name: "Tukums", id: "tukums", path: document.getElementById("state-tukums"), region: "Zemgale", category: "state", 
    ownedBy: "sov", isCoastal: true, isDisabled: false,
    latUnits: 0, gerUnits: 0, sovUnits: 3,
    adjacentState1: "Talsi", adjacentState2: "Kuldīga", adjacentState3: "Saldus", adjacentState4: "Dobele", adjacentState5: "Jelgava", adjacentState6: "Rīga"
};
let dobeleData = { 
    name: "Dobele", id: "dobele", path: document.getElementById("state-dobele"), region: "Zemgale", category: "state", 
    ownedBy: "sov", isCoastal: false, isDisabled: false,
    latUnits: 0, gerUnits: 0, sovUnits: 2,
    adjacentState1: "Saldus", adjacentState2: "Tukums", adjacentState3: "Jelgava"
};
let jelgavaData = { 
    name: "Jelgava", id: "jelgava", path: document.getElementById("state-jelgava"), region: "Zemgale", category: "state", 
    ownedBy: "sov", isCoastal: false, isDisabled: false,
    latUnits: 0, gerUnits: 0, sovUnits: 1,
    adjacentState1: "Dobele", adjacentState2: "Tukums", adjacentState3: "Rīga", adjacentState4: "Bauska"
};
let limbaziData = { 
    name: "Limbaži", id: "limbazi", path: document.getElementById("state-limbazi"), region: "Vidzeme", category: "state", 
    ownedBy: "sov", isCoastal: true, isDisabled: false,
    latUnits: 0, gerUnits: 0, sovUnits: 1,
    adjacentState1: "Valmiera", adjacentState2: "Cēsis", adjacentState3: "Rīga"
};
let rigaData = { 
    name: "Rīga", id: "riga", path: document.getElementById("state-riga"), region: "Vidzeme", category: "state", 
    ownedBy: "sov", isCoastal: true, isDisabled: false,
    latUnits: 0, gerUnits: 0, sovUnits: 3,
    adjacentState1: "Limbaži", adjacentState2: "Cēsis", adjacentState3: "Ogre", adjacentState4: "Bauska", adjacentState5: "Jelgava", adjacentState6: "Tukums"
};
let bauskaData = { 
    name: "Bauska", id: "bauska", path: document.getElementById("state-bauska"), region: "Zemgale", category: "state", 
    ownedBy: "sov", isCoastal: false, isDisabled: false,
    latUnits: 0, gerUnits: 0, sovUnits: 1,
    adjacentState1: "Jelgava", adjacentState2: "Rīga", adjacentState3: "Ogre", adjacentState4: "Aizkraukle"
};
let valmieraData = { 
    name: "Valmiera", id: "valmiera", path: document.getElementById("state-valmiera"), region: "Vidzeme", category: "state", 
    ownedBy: "sov", isCoastal: false, isDisabled: false,
    latUnits: 0, gerUnits: 0, sovUnits: 1,
    adjacentState1: "Limbaži", adjacentState2: "Cēsis", adjacentState3: "Valka"
};
let cesisData = { 
    name: "Cēsis", id: "cesis", path: document.getElementById("state-cesis"), region: "Vidzeme", category: "state", 
    ownedBy: "sov", isCoastal: false, isDisabled: false,
    latUnits: 0, gerUnits: 0, sovUnits: 1,
    adjacentState1: "Limbaži", adjacentState2: "Valmiera", adjacentState3: "Valka", adjacentState4: "Gulbene", adjacentState5: "Madona", adjacentState6: "Ogre", adjacentState7: "Rīga"
};
let ogreData = {
    name: "Ogre", id: "ogre", path: document.getElementById("state-ogre"), region: "Vidzeme", category: "state", 
    ownedBy: "sov", isCoastal: false, isDisabled: false,
    latUnits: 0, gerUnits: 0, sovUnits: 1,
    adjacentState1: "Rīga", adjacentState2: "Cēsis", adjacentState3: "Madona", adjacentState4: "Aizkraukle", adjacentState5: "Bauska"
};
let valkaData = { 
    name: "Valka", id: "valka", path: document.getElementById("state-valka"), region: "Vidzeme", category: "state", 
    ownedBy: "sov", isCoastal: false, isDisabled: false,
    latUnits: 0, gerUnits: 0, sovUnits: 1,
    adjacentState1: "Valmiera", adjacentState2: "Cēsis", adjacentState3: "Gulbene", adjacentState4: "Alūksne"
};
let aluksneData = { 
    name: "Alūksne", id: "aluksne", path: document.getElementById("state-aluksne"), region: "Vidzeme", category: "state", 
    ownedBy: "sov", isCoastal: false, isDisabled: false,
    latUnits: 0, gerUnits: 0, sovUnits: 1,
    adjacentState1: "Valka", adjacentState2: "Gulbene", adjacentState3: "Balvi"
};
let gulbeneData = { 
    name: "Gulbene", id: "gulbene", path: document.getElementById("state-gulbene"), region: "Vidzeme", category: "state", 
    ownedBy: "sov", isCoastal: false, isDisabled: false,
    latUnits: 0, gerUnits: 0, sovUnits: 1,
    adjacentState1: "Valka", adjacentState2: "Alūksne", adjacentState3: "Balvi", adjacentState4: "Madona", adjacentState5: "Cēsis"
};
let madonaData = { 
    name: "Madona", id: "madona", path: document.getElementById("state-madona"), region: "Vidzeme", category: "state", 
    ownedBy: "sov", isCoastal: false, isDisabled: false,
    latUnits: 0, gerUnits: 0, sovUnits: 1,
    adjacentState1: "Cēsis", adjacentState2: "Gulbene", adjacentState3: "Balvi", adjacentState4: "Rēzekne", adjacentState5: "Preiļi", adjacentState6: "Jēkabpils", adjacentState7: "Aizkraukle", adjacentState8: "Ogre"
};

let aizkraukleData = { 
    name: "Aizkraukle", id: "aizkraukle", path: document.getElementById("state-aizkraukle"), region: "Sēlija", category: "state", 
    ownedBy: "sov", isCoastal: false, isDisabled: false,
    latUnits: 0, gerUnits: 0, sovUnits: 1,
    adjacentState1: "Bauska", adjacentState2: "Ogre", adjacentState3: "Madona", adjacentState4: "Jēkabpils"
};
let jekabpilsData = { 
    name: "Jēkabpils", id: "jekabpils", path: document.getElementById("state-jekabpils"), region: "Sēlija", category: "state", 
    ownedBy: "sov", isCoastal: false, isDisabled: false,
    latUnits: 0, gerUnits: 0, sovUnits: 1,
    adjacentState1: "Aizkraukle", adjacentState2: "Madona", adjacentState3: "Preiļi", adjacentState4: "Daugavpils"
};
let daugavpilsData = {
    name: "Daugavpils", id: "daugavpils", path: document.getElementById("state-daugavpils"), region: "Sēlija", category: "state",
    ownedBy: "sov", isCoastal: false, isDisabled: true,
    latUnits: 0, gerUnits: 0, sovUnits: 0,
    adjacentState1: "Jēkabpils", adjacentState2: "Preiļi", adjacentState3: "Krāslava"
};

let balviData = { 
    name: "Balvi", id: "balvi", path: document.getElementById("state-balvi"), region: "Latgale", category: "state", 
    ownedBy: "sov", isCoastal: false, isDisabled: true,
    latUnits: 0, gerUnits: 0, sovUnits: 0,
    adjacentState1: "Alūksne", adjacentState2: "Gulbene", adjacentState3: "Madona", adjacentState4: "Rēzekne", adjacentState5: "Ludza"
};
let rezekneData = { 
    name: "Rēzekne", id: "rezekne", path: document.getElementById("state-rezekne"), region: "Latgale", category: "state",
    ownedBy: "sov", isCoastal: false, isDisabled: true,
    latUnits: 0, gerUnits: 0, sovUnits: 0,
    adjacentState1: "Balvi", adjacentState2: "Ludza", adjacentState3: "Krāslava", adjacentState4: "Preiļi", adjacentState5: "Madona"
};
let preiliData = { 
    name: "Preiļi", id: "preili", path: document.getElementById("state-preili"), region: "Latgale", category: "state", 
    ownedBy: "sov", isCoastal: false, isDisabled: true,
    latUnits: 0, gerUnits: 0, sovUnits: 0,
    adjacentState1: "Madona", adjacentState2: "Rēzekne", adjacentState3: "Krāslava", adjacentState4: "Daugavpils", adjacentState5: "Jēkabpils"
};
let ludzaData = { 
    name: "Ludza", id: "ludza", path: document.getElementById("state-ludza"), region: "Latgale", category: "state", 
    ownedBy: "sov", isCoastal: false, isDisabled: true,
    latUnits: 0, gerUnits: 0, sovUnits: 0,
    adjacentState1: "Balvi", adjacentState2: "Ludza", adjacentState3: "Krāslava"
};
let kraslavaData = { 
    name: "Krāslava", id: "kraslava", path: document.getElementById("state-kraslava"), region: "Latgale", category: "state", 
    ownedBy: "sov", isCoastal: false, isDisabled: true,
    latUnits: 0, gerUnits: 0, sovUnits: 0,
    adjacentState1: "Daugavpils", adjacentState2: "Preiļi", adjacentState3: "Rēzekne", adjacentState4: "Ludza"
};




export const states = [
    ventspilsData, kuldigaData, liepajaData, talsiData, saldusData, tukumsData, dobeleData, jelgavaData, bauskaData, limbaziData,
    rigaData, valmieraData, cesisData, ogreData, valkaData, aluksneData, gulbeneData, madonaData, aizkraukleData, jekabpilsData,
    daugavpilsData, balviData, rezekneData, preiliData, ludzaData, kraslavaData
];