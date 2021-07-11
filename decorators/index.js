const Shopper = require('./Shopper');
const {
    InventoryItem,
    GoldenInventoryItem,
    DiamondInventoryItem
} = require('./InventoryItem');

const jon = new Shopper('Jon', 100000);

const gShock = new InventoryItem("G-Shock Watch", 9999.99)
const necklace = new InventoryItem("Necklace", 999.99)

/**
 * Make a normal necklace golden or diamond
 * The point of decorators is to be able to attach additonal functionalities to existing objects
 * */

const golden_necklace = new GoldenInventoryItem(necklace);
const diamond_necklace = new DiamondInventoryItem(golden_necklace);

const golden_gShock = new GoldenInventoryItem(gShock);

jon.purchase(golden_gShock);
jon.purchase(diamond_necklace);


jon.printStatus();

