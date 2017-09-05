var Entry = require("./../js/journal.js").entryModule;

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
  event.preventDefault();
  var title = $('#title').val();
  var entry = $('#entry').val();
  var newEntry = new Entry (entry);
  var numOfConsonants = newEntry.countConsonants(entry);
  $('#description').append("<li>" + "Number of Consonants in your entry" + " " + numOfConsonants + "</li>");
});

});
