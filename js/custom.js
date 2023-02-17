$(document).ready(function () {
  $('.banner-slider').slick({
    autoplay: true,
    prevArrow: '<div class="slick-nav prev-arrow"></div>',
    nextArrow: '<div class="slick-nav next-arrow"></div>',
    dots: true,
    speed: 500,
  });
  $('.banner-slider').on('init', function(e, slick) {
    var $firstAnimatingElements = $('div.slick-slide:first-child').find('[data-animation]');
    doAnimations($firstAnimatingElements);    
});
$('.banner-slider').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
          var $animatingElements = $('div.slick-slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
          doAnimations($animatingElements);    
});
  function doAnimations(elements) {
    var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    elements.each(function() {
        var $this = $(this);
        var $animationDelay = $this.data('delay');
        var $animationDuration = $this.data('duration');
        var $animationType = 'animated ' + $this.data('animation');
        $this.css({
            'animation-delay': $animationDelay,
            '-webkit-animation-delay': $animationDelay,
            'animation-duration': $animationDuration,
            '-webkit-animation-duration': $animationDuration,
        });
        $this.addClass($animationType).one(animationEndEvents, function() {
            $this.removeClass($animationType);
        });
    });
}
});