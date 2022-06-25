const palindromes = function (word) {
    word = word.replace(/[^a-z]/gi, '')           //remove punctuation

    let reverseWord = word.split("")              //split every character
    reverseWord = reverseWord.reverse().join('')  // combine array to string

    return word.toLowerCase() === reverseWord.toLowerCase()
};

// Do not edit below this line
module.exports = palindromes;
