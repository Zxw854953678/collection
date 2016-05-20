function collect_all_even(collection) {
  var evenArray = [];

  collection.forEach(function (elem) {
    if (elem % 2 === 0) {
      evenArray.push(elem);
    }
  });

  return evenArray;
}

module.exports = collect_all_even;
