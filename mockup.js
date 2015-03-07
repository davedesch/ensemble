$(document).ready(function(){

  displayAllOutfits();
  displayRecentOutfits();
  displayTrendingHashtags();
  addRating();
})

  function addRating(){
    var $me = $( '.star-ctr' );

   var $bg, $fg, step, wd, cc,
       sw, fw, cs, cw, ini;

   $bg = $me.children( 'ul' );
   $fg = $bg.clone().addClass( 'star-fg' ).css( 'width', 0 ).appendTo( $me );
   $bg.addClass( 'star-bg' );

   function initialize() {

      ini = true;

      // How many rating elements
      cc = $bg.children().length;

      steps = Math.floor( +( $me.attr( 'data-steps' ) || 0 ) );

      // Total width of the bar
      wd = $bg.width();

      // Width of one rating element; assumes all are the
      // same width;  Used if step > cc
      sw = $bg.children().first().outerWidth( true );

      // Width of each star (including spacing)
      fw = wd / cc;

      if ( steps > 0 ) {

         // Width of each sub-step
         cw = sw / steps;
      }
   }

   $me.mousemove(function( e ) {
      if ( !ini ) initialize();

      var dt, nm, nw, ns, ow, vl;

      // Where is the mouse relative to the left
      // side of the bar?
      ow = dt = e.pageX - $me.offset().left;
      vl = Math.round( ow / wd * cc * 10 ) / 10;

      // steps == 0 means continous mode, so no need to
      // waste time finding a snapping point
      if ( steps > 0 ) {

         // Find the per element step
         vl = nm = Math.floor( dt / fw );
         ow = nw = $fg.children().eq( nm ).position().left;

         // Now find any sub-step within an element
         // when the number of steps is larger
         // than the number of elements
         ns = Math.round( ( dt - nw ) / cw );
         ow = nw + ns * cw;

         // The fractional part of the rating
         vl += Math.round( ( ns / steps ) * 10 ) / 10;
      }

      $me.attr( 'data-value', vl );
      $fg.css( 'width', Math.round( ow )+'px' );

   }).click(function() {

       // Grab value
       alert( $( this ).attr( 'data-value' ) );

       return false;
   });
  }

function displayAllOutfits(){
  var source = $("#all-outfits-template").html();
  var template =Handlebars.compile(source);
  var context = {}

  $.ajax({
    url: "http://www.reddit.com/r/aww/top/.json"
  }).done(function(data){
    context = {allOutfits: data.data.children};
    $('#all-outfits').html(template(context))
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






