class Shopper {
    constructor(name){
        this.name = name;
    }

    notify(storeName, discount){
        console.log(`${this.name}, there is a ${discount}% discount on everything at ${storeName}`);
    }
}

module.exports = Shopper;
