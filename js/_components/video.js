///////////////////////////////////////
//      Youtube thumbnails
///////////////////////////////////////

// stopped on touch devices
if ( $('html.touch').length === 0 ) {

  // Loops through all videos on page
  $('.js-youtube-thumbnail').each(function(index, el) {
    var video             = $(this).find('.video__iframe'),
        videoSrc          = video.attr('src'),
        thumbnailImg      = $(this).data('thumbnail-img'),
        thumbnailElement  = '<div class="video__thumbnail" style="background-image: url(\'' + thumbnailImg + '\')"><div class="video__play js-play-video"></div></div>';

    // hide video, but keep aspect ratio
    video.css('visibility', 'hidden');

    // Add thumbnail element to hold image & play button
    $(this).prepend(thumbnailElement);
    var thumbnail   = $(this).find('.video__thumbnail'),
        playButton  = $(this).find('.js-play-video');

    // play button event
      playButton.on('click', function(e) {
        e.preventDefault();
        // add auto play query to iframe
        video.attr('src', videoSrc + '&autoplay=1');
        // fade out iframe and show video
        thumbnail.fadeOut( 175, function() {
          video.css('visibility', 'visible');
        });
      });

  });
}