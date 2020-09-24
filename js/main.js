$(document).ready(function(){

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

  $('#next-review').click(function() {
    $(".review-slider, .person-slider").trigger('next.owl.carousel');
  });
  
  $('#prev-review').click(function() {
    $(".review-slider, .person-slider").trigger('prev.owl.carousel');
  });

  $(".faq-box").on("click", (e) => {
    $(".faq-content").not($(e.target).next()).slideUp().parent().removeClass("active");
    $(e.target).next().slideToggle().addClass("active");
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

  $('#next-blog').click(function() {
    $(".blog-slider").trigger('next.owl.carousel');
  });
  
  $('#prev-blog').click(function() {
    $(".blog-slider").trigger('prev.owl.carousel');
  });


  window.onscroll = (e) => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.querySelector(".navbar").classList.add("navbar-background");
    } else {
      document.querySelector(".navbar").classList.remove("navbar-background");
    }
  }

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

  $(".mobile-menu").on("click", () => {
    $(".navbar ul").slideToggle();
    if (document.body.scrollTop <= 20 || document.documentElement.scrollTop <= 20) {
      document.querySelector(".navbar").classList.add("navbar-background");
    }
  });
  

});