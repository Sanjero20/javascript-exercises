const repeatString = function(string, num) {
  if(num >= 0) {
    let word = "";
    for(let i=0; i<num; i++) {
      word += string;
    }
    return word;
  }
  return 'ERROR'
};

// Do not edit below this line
module.exports = repeatString;
