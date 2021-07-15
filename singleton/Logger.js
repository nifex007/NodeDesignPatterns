/**
 * Singleton 
 * Creates only one instance of a class no matter how many times it is the class is being
 * instantiated.
 * 
 **/

class Logger {
    constructor() {
        this.logs= [];
    }

    get count(){
        return this.logs.length;
    }

    log(message){
        const timestamp = new Date().toISOString();
        this.logs.push({message, timestamp});
        console.log(`${timestamp} ${message}`);
    }
}

module.exports = Logger();
