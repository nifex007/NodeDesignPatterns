/**
 * Observer 
 * A one-to-many dependency between objects so that when one object changes state, all its
 * dependents are notified and updated automatically.
 * 
 **/

const Store = require('./Store');
const Shopper = require('./Shopper');
const Mall = require('./Mall');

const bagsStore = new Store('All Bags');
const shoesStore = new Store('All Shoes');

const joy = new Shopper('Joy');
const oluwafemi = new Shopper('Oluwafemi');
const jay = new Shopper('Jay');
const ian = new Shopper('Ian');

const lekkiMall = new Mall();

/**
 * Obeserver pattern 
 * Shopper observes changes in Stores 
 * i.e. Store is the observable object
 * subscribing objects (Shopper, Mall) listens for sales 
 **/

bagsStore.subscribe(joy);
bagsStore.subscribe(oluwafemi)
bagsStore.subscribe(jay);
bagsStore.subscribe(ian);
bagsStore.subscribe(lekkiMall);

shoesStore.subscribe(joy);
shoesStore.subscribe(lekkiMall);

/**
 * Set sales for Stores
 **/
bagsStore.sale(20);
shoesStore.sale(50);

console.log(lekkiMall.sales);










