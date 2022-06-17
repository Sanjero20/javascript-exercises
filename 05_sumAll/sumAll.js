const sumAll = function(start, end) {
  let sum = 0;

  //return ERROR if args is a negative number
  if (start < 0 || end < 0) {
    return "ERROR";
  }
  // return ERROR if args is not a number
  if (typeof(start) != 'number' || typeof(end) != 'number') {
    return "ERROR";
  }

  // Switch places if start is bigger than the end
  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }

  for(let i=start; i <= end; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
