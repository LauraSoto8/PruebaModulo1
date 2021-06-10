
  $( document ).ready(function(){
    $('.carousel-inner').carousel({
      interval: 2000
    })
});

var nav = document.querySelector('nav');
 
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 10) {
    nav.classList.add('bg-dark');
  } else {
    nav.classList.remove('bg-dark');
  }
});