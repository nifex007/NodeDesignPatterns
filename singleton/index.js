/**
 * Singleton 
 * Creates only one instance of a class no matter how many times it is the class is being
 * instantiated.
 * 
 **/

const Logger = require('./Logger');
const Shopper = require('./Shopper');
const Store = require('./Store');


const logger = new Logger();

logger.log('starts app..');

const jon = new Shopper('Jon', '5000');
const ski_shop = new Store(`Steep & Deep Supplies`, [
    {
        item: 'Boots',
        qty: 1,
        price: 200
    },
    {
        item: 'Shirt',
        qty: 1,
        price: 100
    }
])


logger.log('finshing config ...');

console.log(`${logger.count} logs total`);
logger.logs.map(log => console.log(log.message));