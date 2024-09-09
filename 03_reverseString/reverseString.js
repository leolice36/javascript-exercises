const reverseString = function(word) {
    let wordArray = word.split('')
    wordArray.reverse()
    let reversedWord = wordArray.join('')
    return reversedWord
};

// Do not edit below this line
module.exports = reverseString;
