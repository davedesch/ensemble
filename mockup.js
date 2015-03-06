$(document).ready(function(){

  addNewOutfit();
  displayRecentOutfits();

})


function addNewOutfit(){
  var source = $("#single-outfit-template").html();
  var template =Handlebars.compile(source);
  var context = {}

  $.ajax({
    url: "http://www.reddit.com/r/aww/comments/2y3fas/look_at_this_pile_of_30_dogs_posing_and_looking/.json"
  }).done(function(data){
    context = {outfit: data[0].data.children[0].data}
    $('#single-outfit').prepend(template(context))
  })
}

function displayRecentOutfits (){
  var source = $("#recent-outfits-template").html();
  var template =Handlebars.compile(source);
  var context = {recentOutfits: []};

  $.ajax({
    url: "http://www.reddit.com/r/aww/top/.json"
  }).done(function(data){
    context.recentOutfits = data.data.children;
    // console.log(context.recentOutfits)
    // context = {outfits: data[0].data.children[0].data}
    $('#recent-outfits').html(template(context));
  })
}





