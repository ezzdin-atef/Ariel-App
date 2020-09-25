$(document).ready(function(){

  // Handle Includes
  const includes = $('[data-include]');
  jQuery.each(includes, function() {
    const file = 'includes/' + $(this).data('include') + '.html';
    $(this).load(file, function () {
      $(this).replaceWith($(this).contents());
    });
  });

  // When all the includes done
  $(document).ajaxStop(function () {
    
    // Hanlde The Navbar Scroll Show Up
    window.onscroll = (e) => {
      if ($(window).scrollTop() > 20) {
        $(".navbar").addClass("navbar-background");
      } else {
        $(".navbar").removeClass("navbar-background");
      }
    };

    // Handle OWL Carousel
    $(".review-slider").owlCarousel({
      items: 1,
      dots: false,
      loop: true,
      rtl:true,
      mouseDrag: false
    });

    $(".person-slider").owlCarousel({
      items: 3,
      dots: false,
      loop: true,
      rtl:true,
      mouseDrag: false,
      center: true
    });

    $(".blog-slider").owlCarousel({
      items: 3,
      dots: false,
      loop: true,
      rtl:true,
      responsive: {
        0 : {
          items: 1
        },
        768: {
          items: 2
        },
        992: {
          items: 3
        }
      }
    });

    $('#next-review').click(function() {
      $(".review-slider, .person-slider").trigger('next.owl.carousel');
    });
    
    $('#prev-review').click(function() {
      $(".review-slider, .person-slider").trigger('prev.owl.carousel');
    });

    $('#next-blog').click(function() {
      $(".blog-slider").trigger('next.owl.carousel');
    });
    
    $('#prev-blog').click(function() {
      $(".blog-slider").trigger('prev.owl.carousel');
    });


    // FAQ Clicks
    $(".faq-box").on("click", (e) => {
      $(".faq-content").not($(e.target).next()).slideUp().parent().removeClass("active");
      $(e.target).next().slideToggle().addClass("active");
    });


    // Handle The Price Section
    $("#year").on("click", () => {
      $(".year").css("display", "flex");
      $(".month").css("display", "none");
      $("#year").addClass("active");
      $("#month").removeClass("active");
    });

    $("#month").on("click", () => {
      $(".year").css("display", "none");
      $(".month").css("display", "flex");
      $("#month").addClass("active");
      $("#year").removeClass("active");
    });


    // Handle The Navbar in Mobile
    $(".mobile-menu").on("click", () => {
      $(".navbar ul").slideToggle();
      if ($(window).scrollTop() <= 20) {
        $(".navbar").addClass("navbar-background");
      }
    });


  });
  
});