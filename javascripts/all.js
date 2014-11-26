var selector = 'nav a';

$(selector).on('click', function(){
  $(selector).removeClass('active');
  $(this).addClass('active');
});
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 50
        }, 1000);
        return false;
      }
    }
  });
});
var elementPosition = $('.nav-wrap').offset();

$(window).scroll(function(){
  if($(window).scrollTop() > elementPosition.top) {
    $('.nav-wrap').css('position','fixed').css('top','0');
  } else {
    $('.nav-wrap').css('position','static');
  }
});
