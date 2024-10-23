$(document).ready(function(){
    // btn nav js start
    $(".bio-btn").click(function() {
        $(".skill-btn-1").removeClass("act-btn");
        $(".education-btn").removeClass("act-btn");
        $(this).addClass("act-btn");
    });
    $(".skill-btn-1").click(function() {
        $(".bio-btn").removeClass("act-btn");
        $(".education-btn").removeClass("act-btn");
        $(this).addClass("act-btn");
    });
    $(".education-btn").click(function() {
        $(".bio-btn").removeClass("act-btn");
        $(".skill-btn-1").removeClass("act-btn");
        $(this).addClass("act-btn");
    });
    // btn nav js ends

    // btn nav content js start
    $(".bio-btn").click(function(){
        $(".bio-content").css("display", "block");
        $(".education-content").css("display", "none");
        $(".skill-content").css("display", "none");
    });
    $(".skill-btn-1").click(function(){
        $(".bio-content").css("display", "none");
        $(".education-content").css("display", "none");
        $(".skill-content").css("display", "block");
    });
    $(".education-btn").click(function(){
        $(".bio-content").css("display", "none");
        $(".skill-content").css("display", "none");
        $(".education-content").css("display", "block");
    });
    // btn nav content js ends
    // slick slider
    $('.blog-field').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows:false,
        dots:true
      });
    $(".pop-up-item img").click(function(){
        $(".pop-up").fadeOut();
    });
});

var $grid = $('.portfolio-content').isotope({
    // options
  });
  // filter items on button click
  $('.portfolio-btn').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });