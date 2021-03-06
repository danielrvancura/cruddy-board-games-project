console.log("JS good to go, sir!");

// listen for a "submit" event for the edit page. the edit form will live
// at the path GET /games/:name/edit. Use AJAX to send a PUT request to the
// appropriate URL

// code here ...

// listen for clicks on "delete" links. use AJAX to send a DELETE HTTP request
// to the appropriate URL

// code here ...
$('#editForm').on('submit', function(e){
  e.preventDefault();
  $.ajax({
    method: 'put',
    url: $(this).attr('action'),
    data: $(this).serialize()

  }).done(function(data){
    window.location='/games';
  })
});

$('.delete').on('click', function(e){
  e.preventDefault();
  var gameElement = $(this);
  var gameUrl = gameElement.attr('href');
  $.ajax({
   method: 'DELETE',
   url: gameUrl
 }).done(function(data) {
   console.log(data);
   gameElement.remove();

   // // or, you can redirect to another page
   // window.location = '/teams';
 });
});
})
