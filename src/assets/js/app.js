document.addEventListener("DOMContentLoaded", function () {
  //= ../../../node_modules/jquery/dist/jquery.js
  //= vendor/slick.js
  //= components/slick.js
  //= components/header.js
  //= vendor/fancyapp.js

  window.addEventListener("resize", function () {
    if (window.innerWidth <= 767) {
      addBurgerMenu();
    }
  });

  if (window.innerWidth <= 767) {
    addBurgerMenu();
  }

  function addBurgerMenu() {
    //= components/burger.js
  }

  //= components/date.js
});
