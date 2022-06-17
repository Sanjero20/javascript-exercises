const reverseString = function(word) {
  const splitWord = word.split("");
  let reversedWord = splitWord.reverse();
  return reversedWord.join("");
};

// Do not edit below this line
module.exports = reverseString;
