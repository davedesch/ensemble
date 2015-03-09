var ready = function(){

  console.log('working!')
  displayAllOutfits();
  displayRecentOutfits();
  displayTrendingHashtags();
    newOutfit();


  bindEvents();
  $('#instagram').on('click', function(){
      console.log('clicked')
    })

    $('#search-form').on('submit', function(event){
      event.preventDefault();
      console.log("form submitted");
      displaySearchedOutfits();
    })
}

$(document).ready(ready);
$(document).on('page:load', ready)

function bindEvents(){



  // function addRatingStars() {
  //   $('.rating').on('click', '.rating-input', function() {
  //     // $('rating-input').css('background', )
  //   })
  // }



}

function displaySearchedOutfits(event) {
    var source = $("#all-outfits-template").html();
    var template =Handlebars.compile(source);
    var context = {}

  $.ajax({
    url: '/search',
    data: {hashtag: $('#search-box')[0].value},

  })
  .done(function(data) {
    context = {allOutfits: data};
    $('#all-outfits').html(template(context));
    addAverageRating(data.avg_rating);
  })
}

function addAverageRating(data) {

 for (var i = 0; i < data.length ; i++ ) {
  var rating = data[i].avg_rating
  if (rating > 0) {
    // var ratingdiv = $("#rating-"+ i + "")
    // var stardiv = $(ratingdiv + "div:lt(" + rating + ")")
    // $(stardiv).css('background', "url('star-full.png')")
    $("#rating-" + i + " div:lt("+ rating +")").css('background', "url('../star-full.png')")
  }
 }
}


function displayAllOutfits(){
  var source = $("#all-outfits-template").html();
  var template =Handlebars.compile(source);
  var context = {}

  $.ajax({
    url: "/ensembles"
  }).done(function(data){
    context = {allOutfits: data};
    console.log(data)
    $('#all-outfits').append(template(context));
    addAverageRating(data);
    addRatingListener();
  })
}

  function addRatingListener() {
    $('.rate-this-button').on('click', function(event) {
      console.log("clicked rate this")
      console.log(this);
    $(this).next('.rating-form').css('display', 'block');
    })
  }

function displayRecentOutfits (){
  var source = $("#recent-outfits-template").html();
  var template =Handlebars.compile(source);
  var context = {};

  $.ajax({
    url: window.location.pathname + "/ensembles"
  }).done(function(data){
    context = {recentOutfits: data};
    $('#recent-outfits').html(template(context));
  })
}

function displayTrendingHashtags (){
  var source = $("#trending-hashtags-template").html();
  var template = Handlebars.compile(source);
  var context = {};

  $.ajax({
    url: "/hashtags"
  }).done(function(data){
    context = {trendingHashtags: data};
    $('#trending-hashtags').html(template(context));
    $('.hashtag-link').on('click', function(event){
      event.preventDefault();

      displayHashtagOutfits(event);
    })
  })
}


function displayHashtagOutfits(event) {
    var source = $("#all-outfits-template").html();
    var template =Handlebars.compile(source);
    var context = {}

  $.ajax({
    url: event.currentTarget.href,
  })
  .done(function(data) {
    context = {allOutfits: data};
    $('#all-outfits').html(template(context));
    addAverageRating(data.avg_rating);

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


function newOutfit() {
  $('#newoutfit').on("click", function(event){
    console.log('clicked!');
    event.preventDefault();
    $.ajax({
      url: window.location.pathname+'/ensembles/new',
      type: 'GET',
      dataType: 'HTML',
      // data: {param1: 'value1'},
    })
    .done(function(a) {
      console.log("success");
      $('#all-outfits').prepend(a);
      uploadImage();
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });

  });
}

var magic = null
function uploadImage() {
 document.getElementById("upload_widget_opener").addEventListener("click", function() {

    cloudinary.openUploadWidget({ cloud_name: 'dzxyyevk0', upload_preset: 'iiv6os2n', max_files: 1, cropping_aspect_ratio: 1, },
      function(error, result) { console.log(error, result)
        magic = result;
          console.log('still working');
          console.log(magic)
          var imgURL = magic[0].secure_url;
          $('#outfit_image_url').val(imgURL);

      });

  }, false);

}


