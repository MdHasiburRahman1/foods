$(document).ready(function() {
    $(".radio-btn").on("click", function() {
      $(".radio-inner").toggleClass("active");
      $("body").toggleClass("dark");
    })
  })

  // swipe icon start 
  $("document").ready(function(){
    $(window).scroll(function(){
      if($(this).scrollTop()>300){
        $(".topicon").fadeIn(500);
      }else{
        $('.topicon').fadeOut(1000);
      }
    })
  })
// owl carosal start 
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})
  


