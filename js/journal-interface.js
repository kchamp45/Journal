$(document).ready(function() {
  $('#journal-form').submit(function(event) {;
  event.preventDefault();
  var title = $('#title').val();
  var entry = $('entry').val();
  $('description').append("<li>" + title + "<br>" + entry + "</li>");
});

});
