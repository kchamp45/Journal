var Entry = require("./../js/journal.js").entryModule;

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
  event.preventDefault();
  var title = $('#title').val();
  var entry = $('#entry').val();
  var newEntry = new Entry (entry);
  var numOfVowels = newEntry.countVowels(entry);
  $('#description').append("<li>" + "Number of vowels in your entry" + " " + numOfVowels + "</li>");
});

});
