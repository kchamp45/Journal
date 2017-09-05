function Entry (entry) {
  this.entry = entry;
}

Entry.prototype.countWords = function(entry) {
  var eachWord = entry.split(" ");
  return eachWord.length;
};

Entry.prototype.countVowels = function(entry) {
  var vowels = entry.match(/[aeiou]/gi);
  return vowels.length;
}

Entry.prototype.countConsonants = function(entry) {
  var consonants = entry.match(/[bcdfghjklmnpqrstvwxyz]/gi);
  return consonants.length;
}

Entry.prototype.getTeaser = function (entry) {
  var eightWords = entry.match(/[^\.!\?]+[\.!\?]+/g)[0];
  var eachPiece = eightWords.split(" ");
  var size = 8;
  var items = eachPiece.slice(0, size);
  var newItems = " ";
  items.forEach(function(eachItem) {
    newItems += eachItem + " ";
  });
  return newItems;
};

exports.entryModule = Entry;
