class Mall {

    constructor(){
        this.sales = [];
    }

    notify(storeName, discount) { 
        console.log(this.sales.push({storeName, discount}));
    }

}

module.exports = Mall;