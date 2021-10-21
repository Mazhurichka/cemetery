$(function () {
  let burger = $("#burger");
  let nav = $("#nav");
  let header = $("#header");

  function showBurgerMenu() {
    burger.toggleClass("active");
    nav.toggleClass("nav--mobile");
    $("body").toggleClass("no-scroll");

    $("body").toggleClass("show-nav");
  }

  burger.on("click", showBurgerMenu);
});
