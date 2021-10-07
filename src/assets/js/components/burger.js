$(function () {
  let burger = $("#burger");
  let nav = $("#nav");

  function showBurgerMenu() {
    burger.toggleClass("active");
    nav.toggleClass("nav--mobile");
  }

  burger.on("click", showBurgerMenu);
});
