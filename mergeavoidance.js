// the document ready that launches everything.

var ready = function(){

  console.log('working!');
  sortByRatings();
  displayAllOutfits();
  displayRecentOutfits();
  displayTrendingHashtags();
  newOutfit();


  $('.img-thumbnail').on('click', function(event) {
    console.log("you clicked a pic")
    var imgURL = this.src
    console.log(imgURL)
    $('#outfit_image_url').val(imgURL);
    $('#newoutfitthumbnail').append("<img src="+ imgURL +">")
    $('#instagram_select').empty();
  })

  $('#get_from_instagram').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      url: '/instagram/recent',
      type: 'GET',
      dataType: 'html',
    })
    .done(function(response) {
      $('#instagram_select').html(response)
    });
    console.log("success");
  });

  $('#search-form').on('submit', function(event){
    event.preventDefault();
    console.log("form submitted");
    displaySearchedOutfits();
  })
}
// FIND A BETTER WAY TO TRIGGER THIS SO IT DOESN'T CAUSE EVERYTHING TO REFRESH WHEN YOU DO AN AJAX CALL
$(document).ready(ready);
$(document).on('page:load', ready)

// STAR RATINGS RAN HERE
// When you search for something it displays all outfits that correllate with hashtag
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
    addAverageRating(data);
    addRatingListener(); //function to add star ratings and allow to give star rating
    newRatingStarsClick();
  })
}

// SETS AVERAGE RATING FOR EACH OUTFIT ON FEED. DATA COMES FROM WHATEVER AJAX CALL POPULATES THE FEED.
function addAverageRating(data) {
 for (var i = 0; i < data.length ; i++ ) {
  var rating = data[i].avg_rating
  if (rating > 0) {
    $("#rating-" + i + " div:lt("+ rating +")").css('background', "url('../star-full.png')")
  }
}
}

// Also Calls the Star Ratings because it displays all outfits
// SEE IF WE CAN MOVE ALL FUNCTIONS TO A RENDER FUNCTION SO IT DOESN'T HAVE TO CALL EVERYTHING
function displayAllOutfits(){
  var source = $("#all-outfits-template").html();
  var template =Handlebars.compile(source);
  var context = {}

  $.ajax({
    url: "/ensembles"
  }).done(function(data){
    context = {allOutfits: data};
    $('#all-outfits').append(template(context));
    addAverageRating(data);
    addRatingListener();
    newRatingStarsClick();
    sortByRatings();
  })
}

// IN PROGRESS. CURRENTLY RETURNS AN ARRAY SORTED HIGHEST TO LOWEST WITHOUT CORRESPONDING VALUES
function sortByRatings() {
  $('#sort-by-ratings').on('click', function() {
    var allRatings = $(".rating");
    console.log(allRatings)
    var sortedOutfits = allRatings.sort(function(a,b){
      return a.getAttribute('value') - b.getAttribute('value')
    })
    console.log(sortedOutfits)

    // ratingsToSort = []
    // var context = {}
    // console.log(allRatings);
    // for (var i=0; i < allRatings.length; i++) {
      // ratingsToSort.push(allRatings[i].getAttribute('value'));
      // console.log(sortByRatings);
    // }
      // console.log(ratingsToSort);
      // console.log(ratingsToSort.sort(function(a, b){return b-a}));

    // var sortedOutfits = source.sort(function(a,b){
    //   return a-b
  })

    // context = {allOutfits: sortedOutfits};
    // $('#all-outfits').html(template(context));

  // })
}
// WAITS FOR RATING BUTTON TO BE CLICKED
// SEE IF ALL LISTENERS CAN BE MOVED TO LISTENER MODULE
function addRatingListener() {
  $('.rate-this-button').on('click', function(event) {
    $(this).next('.rating-form').css('display', 'block');

  })
}

// POPULATES A HIDDEN VALUE IN FORM THAT WILL LATER UPDATE AR IN POST ROUTE.
function newRatingStarsClick(){
  $('.new-rating-stars').on('click', function(event){
    console.log('clicked on a star')
    var starNumber = event.currentTarget.id.substring(4)
    var thisOutfitsRatingForm = $(this).parent()[0]
    var outfitIndex = thisOutfitsRatingForm.id.substring(10)
    $("#newrating-" + outfitIndex + " div:lt("+ starNumber +")").css('background', "url('../star-full.png')")
    $("#form-" + outfitIndex)[0][0].value = starNumber
  })
}
// SELF EXPLANATORY. ANYTHING THAT JUST GOT ADDED GETS PUT TO THE TOP OF THE FEED.
// THIS DISPLAYS ON THE WIDGET ON THE LEFT
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

// THE WIDGET THAT DISPLAYS ALL HASHTAGS ON THE RIGHT SIDE OF THE SCREEN. RENAME TO WIDGET SOON.
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

// THIS IS THE SAME AS DISPLAY ALL OUTFITS AND WE CAN PROBABLY BURN IT.
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
    addAverageRating(data);
    addRatingListener();
    newRatingStarsClick();
  })
}


// POST ROUTE THAT ENABLES CLOUDINARY AND PREPENDS PICTURE AND DATA TO TOP OF FEED
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
// MOSTLY VANILLA JS TO BRING UP CLOUDINARY WIDGET. RENAME MAGIC SOON.
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



















