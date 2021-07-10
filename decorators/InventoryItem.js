/**
 * Pattern Name: Decorator
 * The Problem: 
 * The Solution:
 * Consequence: 
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


module.exports = InventoryItem;