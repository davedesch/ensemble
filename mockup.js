$(document).ready(function(){
  console.log('ready!')
  addNewOutfit();


})

function addNewOutfit(){
  var source = $("#single-outfit-template").html();
  var template =Handlebars.compile(source);
  var context = {}

  $.ajax({
    url: "http://www.reddit.com/r/aww/comments/2y3fas/look_at_this_pile_of_30_dogs_posing_and_looking/.json"
  }).done(function(data){
    // console.log(data);
    context = {outfit: data[0].data.children[0].data}
    $('#single-outfit').prepend(template(context))
  })
}






