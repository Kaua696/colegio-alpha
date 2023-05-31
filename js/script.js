/* MENU DROPDOWM */ 
 window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.head-menu');
    if (window.pageYOffset > 0) {
      navbar.style.top = '0';
    } else {
      navbar.style.top = '43px';
    }
  });
/* OFF MENU DROPDOWM */ 