(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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

},{"./../js/journal.js":1}]},{},[2]);
