    // Class add starts

$(window).scroll(function(){
    let scrollTop = $(window).scrollTop()
  
    if( scrollTop > 300){
       $('.main-menu').addClass('fixed');
      //  $('.fixed').slideUp(20000)
  
    } else { 
      $('.main-menu').removeClass('fixed')
    }})

    // Class add ends
    
    // Preloader starts

    $(window).on("load", function(){
      $('#preloader').fadeOut()
    })

    // Preloader ends

// Back to top starts
    $('#backToTop').click(function(){

      $("html,body").animate({ scrollTop:0 }, 500);
    });
    // Back to top ends