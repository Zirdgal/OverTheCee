const marchData = { name: "March", id: "march", used: false, path: "./img/cards/march.png", cost: 0, option1: "March", option1Level: 2, option2: "Recruit", option2Level: 2 };
const recruitData = { name: "Recruit", id: "recruit" , used: false, path: "./img/cards/recruit.png", cost: 0, option1: "Recruit", option1Level: 2, option2: "Resource", option2Level: 2 };
const equipmentData = { name: "Equipment", id: "equipment" , used: false, path: "./img/cards/equipment.png", cost: 0, option1: "Resource", option1Level: 2, option2: "March", option2Level: 2 };
const karlisUlmanisData = { name: "Kārlis Ulmanis", id: "karlisUlmanis", used: false, path: "./img/cards/karlisUlmanis.png", cost: 2, option1: "Resource", option1Level: 5, option2: "none", option2Level: 0 };
const m1890Data = { name: "M-1890", id: "m1890", used: false, path: "./img/cards/m1890.png", cost: 0, option1: "March", option1Level: 1, option2: "none", option2Level: 0 };
const m1902Data = { name: "M-1902", id: "m1902", used: false, path: "./img/cards/m1902.png", cost: 1, option1: "March", option1Level: 2, option2: "none", option2Level: 0 };
const m1910Data = { name: "M-1910", id: "m1910", used: false, path: "./img/cards/m1910.png", cost: 2, option1: "March", option1Level: 3, option2: "none", option2Level: 0 };
const alliedShipsData = { name: "English and French War Fleet", id: "alliedShips", used: false, path: "./img/cards/alliedShips.png", cost: 1, option1: "Resource", option1Level: 2, option2: "alliedShips", option2Level: 1 };

export const cards = [ marchData, karlisUlmanisData, recruitData, m1890Data, m1902Data, m1910Data, alliedShipsData, equipmentData ];
export const starterCards = [ marchData, recruitData, equipmentData ];
export const regCards = [ karlisUlmanisData, m1890Data, m1902Data, m1910Data, alliedShipsData];

//Enemy Cards
const placeholderData = { name: "Placeholder", used: false };


export const enemyCards = [ placeholderData ];



//Card - Buttons
const openCardSlot1 = { id: "slot1", used: false, img: document.getElementById("open-card-slot-1-img"), btn: document.getElementById("open-card-slot-1"), currentCardID: "march" };
const openCardSlot2 = { id: "slot2", used: false, img: document.getElementById("open-card-slot-2-img"), btn: document.getElementById("open-card-slot-2"), currentCardID: "march" };
const openCardSlot3 = { id: "slot3", used: false, img: document.getElementById("open-card-slot-3-img"), btn: document.getElementById("open-card-slot-3"), currentCardID: "march" };
const openCardSlot4 = { id: "slot4", used: false, img: document.getElementById("open-card-slot-4-img"), btn: document.getElementById("open-card-slot-4"), currentCardID: "march" };
const openCardSlot5 = { id: "slot5", used: false, img: document.getElementById("open-card-slot-5-img"), btn: document.getElementById("open-card-slot-5"), currentCardID: "recruit" };
const openCardSlot6 = { id: "slot6", used: false, img: document.getElementById("open-card-slot-6-img"), btn: document.getElementById("open-card-slot-6"), currentCardID: "recruit" };
const openCardSlot7 = { id: "slot7", used: false, img: document.getElementById("open-card-slot-7-img"), btn: document.getElementById("open-card-slot-7"), currentCardID: "recruit" };
const openCardSlot8 = { id: "slot8", used: false, img: document.getElementById("open-card-slot-8-img"), btn: document.getElementById("open-card-slot-8"), currentCardID: "recruit" };
const openCardSlot9 = { id: "slot9", used: false, img: document.getElementById("open-card-slot-9-img"), btn: document.getElementById("open-card-slot-9"), currentCardID: "equipment" };
const openCardSlot10 = { id: "slot10", used: false, img: document.getElementById("open-card-slot-10-img"), btn: document.getElementById("open-card-slot-10"), currentCardID: "equipment" };
const openCardSlot11 = { id: "slot11", used: false, img: document.getElementById("open-card-slot-11-img"), btn: document.getElementById("open-card-slot-11"), currentCardID: "equipment" };
const openCardSlot12 = { id: "slot12", used: false, img: document.getElementById("open-card-slot-12-img"), btn: document.getElementById("open-card-slot-12"), currentCardID: "equipment" };
const openCardSlot13 = { id: "slot13", used: true, img: document.getElementById("open-card-slot-13-img"), btn: document.getElementById("open-card-slot-13"), currentCardID: "none" };
const openCardSlot14 = { id: "slot14", used: true, img: document.getElementById("open-card-slot-14-img"), btn: document.getElementById("open-card-slot-14"), currentCardID: "none" };
const openCardSlot15 = { id: "slot15", used: true, img: document.getElementById("open-card-slot-15-img"), btn: document.getElementById("open-card-slot-15"), currentCardID: "none" };
const openCardSlot16 = { id: "slot16", used: true, img: document.getElementById("open-card-slot-16-img"), btn: document.getElementById("open-card-slot-16"), currentCardID: "none" };

export const openCardSlots = [ openCardSlot1, openCardSlot2, openCardSlot3, openCardSlot4, openCardSlot5, openCardSlot6, openCardSlot7, openCardSlot8, openCardSlot9, openCardSlot10, openCardSlot11, openCardSlot12 ];
export const everyCardSlots = [openCardSlot1, openCardSlot2, openCardSlot3, openCardSlot4, openCardSlot5, openCardSlot6, openCardSlot7, openCardSlot8, openCardSlot9, openCardSlot10, openCardSlot11, openCardSlot12, openCardSlot13, openCardSlot14, openCardSlot15, openCardSlot16 ];

