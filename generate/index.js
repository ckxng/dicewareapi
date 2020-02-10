'use strict';

/**
 * Generate a diceware passphrase.
 * 
 * /api/generate?length={number}&seq={string}
 */
module.exports = async function (context, req) {
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: generatePassphrase(req.query.length, req.query.sep)
    };
};

/**
 * Return a passphrase constructed from words in wordlist.json.
 * @param {number} length - The number of words in the passphrase.
 * @param {string} sep - The string to separate each word.
 */
function generatePassphrase(length=6, sep="-") {
    const wordlist = require('./wordlist.json');
    let passphrase = "";
    for(var i=0; i<length; i++) {
        if(i>0) {
            passphrase+=sep;
        }
        passphrase+=wordlist[roll5DiceString()];
    }
    return passphrase;
}

/**
 * Return a string ranging from "11111" to "66666".
 */
function roll5DiceString() {
    return ""+
        rollDice()+
        rollDice()+
        rollDice()+
        rollDice()+
        rollDice();
}

/**
 * Return an integer ranging from 1 to 6.
 */
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}