// Project specific JS goes here


// ======================================
//    Waypoints
//    nav highlight on sticky header
// ======================================

$('.section').waypoint(function(direction) {
   if (direction === 'up') {
    // highlight previous region
    var previousRegionId = $('#' + this.element.id).prev().attr('id');
    $('.site-nav__item.is-active').removeClass('is-active');
    $('.site-nav__item--' + previousRegionId).addClass('is-active');
   } else if (direction === 'down') {
     // highlight current section
     var currentRegionId = this.element.id;
     $('.site-nav__item.is-active').removeClass('is-active');
     $('.site-nav__item--' + currentRegionId).addClass('is-active');
   }
 });



 // ======================================
 //    responsive image for main title
 // ======================================

// chooses which image should be loaded
function whichTitle(option) {

  // which image file should be used
  var imageFile;
  if (Modernizr.svgasimg) {
    imageFile = '.svg';
  } else {
    imageFile = '.png';
  }

  // change image src to correct file
  $('.js-title').attr('src', '/capital-region-usa/img/content/title-' + option + imageFile);

}


// checks if image is below the breakpoint
function windowWidth() {
  if ( $(window).width() < 650 ) {
    // change title to vertical option
    whichTitle('vertical');
  } else {
    // keep title to horizontal option
    whichTitle('horizontal');
  }
}


// run breakpoint check on page load
windowWidth()


// run breakpoint check on page load with limiter
var resizeTimer;
$(window).on('resize', function(e) {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    windowWidth();
  }, 100);
});