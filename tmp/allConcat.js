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

var Entry = require("./../js/journal.js").entryModule;

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
  event.preventDefault();
  var title = $('#title').val();
  var entry = $('#entry').val();
  $('#description').append("<li>" + title + "<br>" + entry + "</li>");
});

});

var Entry = require("./../js/journal.js").entryModule;

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
  event.preventDefault();
  var title = $('#title').val();
  var entry = $('#entry').val();
  var newEntry = new Entry (entry);
  var eightWords = newEntry.getTeaser(entry);
  $('#description').append("<li>" + "First sentence" + " " + eightWords + "</li>");
});

});

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

var Entry = require("./../js/journal.js").entryModule;

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
  event.preventDefault();
  var title = $('#title').val();
  var entry = $('#entry').val();
  var newEntry = new Entry (entry);
  var numOfWords = newEntry.countWords(entry);
  $('#description').append("<li>" + "Number of words in your entry" + " " + numOfWords + "</li>");
});

});
