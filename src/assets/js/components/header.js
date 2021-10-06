$(function () {
  let header = $(".header");
  let headerHeight = header.innerHeight();
  let intro = $(".intro");
  let introHeight = intro.innerHeight();
  let scrollTop = 0;

  changeHeaderColor();

  $(window).on("scroll", function () {
    scrollTop = $(header).offset().top;
    changeHeaderColor();
  });

  function changeHeaderColor() {
    if (scrollTop >= headerHeight) {
      header.addClass("header--dark");
    } else {
      header.removeClass("header--dark");
    }
  }
});
