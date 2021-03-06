/*-- Navbar transparent to solid --*/
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.navbar').addClass('solid');
    } else {
      $('.navbar').removeClass('solid');
    }
  });
});

/*-- Close mobile nav on click --*/
$(document).ready(function () {
  $(document).on('click', function (event) {
    const clickover = $(event.target);
    const _opened = $('.navbar-collapse').hasClass('show');
    if (_opened === true && !clickover.hasClass('navbar-toggler')) {
      $('.navbar-toggler').click();
    }
  });
});

/*-- Smooth scrolling to links --*/
$(document).ready(function () {
  $('a').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault();
      const hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function () {
        window.location.hash = hash;
      });
    }
  });
});

/*-- Bouncing Down Arrow --*/
$(document).ready(function () {
  $(window).scroll(function () {
    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 250)
  });
});

/*-- Meet The Team --*/
$(document).ready(function () {
  $("#team-slider").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      768: {
        items: 3
      }
    }
  });
});

/*-- Skills Counter --*/
$(document).ready(function () {
  $('.counter').counterUp({
    delay: 10,
    time: 1800
  });
});

/*-- Clients Carusel --*/
$(document).ready(function () {
  $("#clients-slider").owlCarousel({
    items: 2,
    autoplay: true,
    smartSpeed: 1700,
    loop: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      }
    }
  });
});

// Top Scroll Button
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $('.top-scroll').fadeIn();
    } else {
      $('.top-scroll').fadeOut();
    }
  });
});