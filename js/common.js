$(function() {

  smoothScroll('.topmenu_link','.nav_link');


  function smoothScroll(element) {
    $(element).on('click', function(event){
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
           scrollTop: $(hash).offset().top
        }, 900, function(){
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
      } // End if
    });
  }

  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
         scrollTop: $(hash).offset().top
      }, 900, function(){
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
      });
    } // End if
  });



  $(window).scroll(function() {
    if ($(".navbar").offset().top > 70) {
        //$(".mainlogo").css('visibility', 'hidden');
        $(".mainlogo_img").addClass('mainlogo_img-scroll');
        $(".header_navbar").addClass('header_navbar-scroll');
      } else {
        $(".mainlogo_img").removeClass('mainlogo_img-scroll');
        $(".header_navbar").removeClass('header_navbar-scroll');
    }
  });

  $(document).ready(function () {
    $(".topmenu_link").click(function(event) {
      $(".header_topmenu").collapse('hide');
    });
  });

  /*
  $(window).scroll(function() {
    $(".animation").each(function(){
      var pos = $(this).offset().top;
      //var winTop = $(window).scrollTop();
      var winTop = $(window).scrollTop();
      console.log('pos:' + pos);
      console.log('winTop:' + winTop);
      if (pos > (winTop)/2) {
        //alert('pos' + pos + 'winTop' + winTop);
        $(this).addClass("animated fadeInUpBig");
        //$(".fadeUp").removeClass("fadeUp").addClass("animated fadeInUpBig");
        //$(".fadeDown").removeClass("fadeDown").addClass("animated fadeInDownBig");
      }
    });
  });
  */



});
