const Shopper = require('./Shopper');
const InventoryItem = require('./InventoryItem');

const jon = new Shopper('Jon', 100000);

const gShock = new InventoryItem("G-Shock Watch", 9999.99)
const necklace = new InventoryItem("Necklace", 999.99)


jon.purchase(necklace);
jon.purchase(gShock);


jon.printStatus();

