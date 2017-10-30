$(function() {

  //add selector for smoothScrool
  smoothScroll('.topmenu_link');

  // function smoothScrool
  function smoothScroll(element) {
    $(element).on('click', function(event){
      $('.topmenu_close').click();
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
           scrollTop: $(hash).offset().top
        }, 900, function(){
            window.location.hash = hash;
        });
      } 
    });
  };// function smoothScrool END
  
  // function reducing the height navbar when scrolling
  $(window).scroll(function() {
    if ($(".navbar").offset().top > 70) {
        $(".mainlogo_img").addClass('mainlogo_img-scroll');
        $(".header_navbar").addClass('header_navbar-scroll');
      } else {
        $(".mainlogo_img").removeClass('mainlogo_img-scroll');
        $(".header_navbar").removeClass('header_navbar-scroll');
    }
  });// function reducing the height navbar when scrolling END

});
