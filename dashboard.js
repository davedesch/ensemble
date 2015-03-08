var ready = function(){
  displayAllOutfits();
  displayRecentOutfits();
  displayTrendingHashtags();
  // addAverageRating();
  // bindEvents();
  getRatingStars();

}

$(document).ready(ready);
$(document).on('page:load', ready);



  function getRatingStars() {
    // selector selects an array with button inside and also cannot run method on button
    $('#rate-this').on('click', function(){
      $('#rating-form').css('display', 'block');
    })
  }


function bindEvents(){

  function addRating() {
    $('.rating').on('click', '.rating-input', function() {
      // we will need the jquery in the addAverageRaitng function to change the css background of ratings to star-full.png
    })
  }

}// closing bindEvents braces


// adds static rating on dashboard load
function addAverageRating(average) {
  $('.rating div:lt(average)').css('background', "url('star-full.png')")
}


function displayAllOutfits(){
  var source = $("#all-outfits-template").html();
  var template =Handlebars.compile(source);
  var context = {}

  $.ajax({
    url: "http://www.reddit.com/r/aww/top/.json"
  }).done(function(data){
    context = {allOutfits: data.data.children};
    $('#all-outfits').html(template(context));
    // addAverageRating();
  })
}


function displayRecentOutfits (){
  var source = $("#recent-outfits-template").html();
  var template =Handlebars.compile(source);
  var context = {};

  $.ajax({
    url: "http://www.reddit.com/r/aww/top/.json"
  }).done(function(data){
    context = {recentOutfits: data.data.children};
    $('#recent-outfits').html(template(context));
  })
}

function displayTrendingHashtags (){
  var source = $("#trending-hashtags-template").html();
  var template = Handlebars.compile(source);
  var context = {};

  $.ajax({
    url: "http://www.reddit.com/r/aww/top/.json"
  }).done(function(data){
    context = {trendingHashtags: data.data.children};
    $('#trending-hashtags').html(template(context));
  })
}




// just in case we want to prepend a newly created outfit...

// function addNewOutfit(){
//   var source = $("#new-outfit-template").html();
//   var template =Handlebars.compile(source);
//   var context = {}

//   $.ajax({
//     url: "http://www.reddit.com/r/aww/comments/2y3fas/look_at_this_pile_of_30_dogs_posing_and_looking/.json"
//   }).done(function(data){
//     context = {outfit: data[0].data.children[0].data}
//     $('#all-outfits').prepend(template(context))
//   })
// }





