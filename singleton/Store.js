const Logger = require("./Logger");
const logger = new Logger();


class Store {
    constructor(name, inventory) {
        this.name = name;
        this.inventory = inventory;
        logger.inventory = inventory;
        logger.log(`New Store: ${name} has ${inventory.length} items in stock.`);
    }
}

modules.export = Store;