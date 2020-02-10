'use strict';

/**
 * Generate a diceware passphrase.
 * 
 * /api/generate?length={number}&seq={string}
 */
module.exports = async function (context, req) {
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: generatePassphrase(req.query.length, req.query.sep, 
            req.query.upper, req.query.digit)
    };
};

/**
 * Return a passphrase constructed from words in wordlist.json.
 * @param {number} length - The number of words in the passphrase.
 * @param {string} sep - The symbol to separate each word.
 * @param {number} upper - Make first letter uppercase if "1".
 * @param {number} digit - Add a digit if "1" .
 */
function generatePassphrase(length=6, sep="", upper = 0, digit = 0) {
    if(sep.length > 1) {
        sep = sep[0];
    }
    if(upper != 1) {
        upper = 0;
    }
    if(digit != 1) {
        digit = 0;
    }
    const wordlist = require('./wordlist.json');
    let passphrase = "";
    for(var i=0; i<length; i++) {
        if(i==0) {
            let word = wordlist[roll5DiceString()];
            if(upper) {
                word = word[0].toUpperCase() + word.substr(1);
            }
            passphrase+=word;
        } else {
            passphrase+=sep;
            passphrase+=wordlist[roll5DiceString()];
        }
    }
    if(digit) {
        passphrase+=roll(0,9);
    }
    return passphrase;
}

/**
 * Return a string ranging from "11111" to "66666".
 */
function roll5DiceString() {
    return ""+roll()+roll()+roll()+roll()+roll();
}

/**
 * Roll a random integer from x to y.
 * @param {number} x - the highest number to be generated.
 */
function roll(x=1, y=6) {
    return Math.floor(Math.random() * y) + x;
}