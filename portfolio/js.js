$(document).ready(function () {
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault(); 

    const target = $(this.getAttribute('href'));
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top,
      }, 300);
    }
  });
});

$(document).ready(function () {
  $(window).on('scroll', function () {
    $('.fade-in').each(function () {
      var elementTop = $(this).offset().top;
      var windowHeight = $(window).scrollTop() + $(window).height();

      if (windowHeight > elementTop) {
        $(this).css('visibility', 'visible') 
               .animate({ opacity: 1 }, 2000); 
      }
    });
  });
});