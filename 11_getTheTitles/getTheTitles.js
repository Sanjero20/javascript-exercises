const getTheTitles = function(array) {
  let title = []
  array.forEach(book => {
      title.push(book.title)
  });
  return title;
};

// Do not edit below this line
module.exports = getTheTitles;
