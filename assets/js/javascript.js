$(window).on("scroll", function(){
    if($(document).scrollTop() >10)
      {
        $('.navbar').addClass('navbar-dark bg-dark');
    }
  });

  $( document ).ready(function(){
    $('.carousel-inner').carousel({
      interval: 2000
    })
});
