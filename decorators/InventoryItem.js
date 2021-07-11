/**
 * Pattern Name: Decorator
 * 
 * 
 * Decorators are design patterns that allows us to dynamically attach additonal properties, methods to existing objects
 * Decorators take in a base item/class and extends the functionality
 * 
 * 
 * Intent: Attach additional responsiblities to an object dynamically. Decorators provide a flexible alternative to subclassing
 * for extending functionality
 * 
 */ 

class InventoryItem {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    print() {
        console.log(`${item.name} costs ${items.price}`);
    }
}

class GoldenInventoryItem {
    constructor(baseItem) {
        this.name = `Golden ${baseItem.name}`
        this.price = baseItem.price + 10000
    }
}

class DiamondInventoryItem {
    constructor(baseItem) {
        this.name = `Diamond ${baseItem.name}`
        this.price = baseItem.price + 100000
        this.cutsGlass = true
    }

    print() {
        console.log(`${item.name} costs more`);
    }




}


module.exports = {InventoryItem, GoldenInventoryItem, DiamondInventoryItem};