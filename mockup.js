$(document).ready(function(){
  console.log('ready!')
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
    // console.log(data);
    context = {outfit: data[0].data.children[0].data}
    $('#single-outfit').prepend(template(context))
  })
}

function displayRecentOutfits (){
  var source = $("#recent-outfits-template").html();
  var template =Handlebars.compile(source);
  var context = {allOutfits: []};

  $.ajax({
    url: "http://www.reddit.com/r/aww/top/.json"
  }).done(function(data){
    // console.log(data.data.children);
    context.allOutfits = data.data.children;
    console.log(context.allOutfits)
    // context = {outfits: data[0].data.children[0].data}
    $('#recent-outfits').html(template(context));
  })
}




