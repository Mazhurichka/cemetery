$(function () {
  const buttonUp = $("#button-up");

  chekScrollPosition();
  $(window).scroll(function () {
    chekScrollPosition();
  });

  function chekScrollPosition() {
      console.log($(this).scrollTop());
    if ($(this).scrollTop() > 1000) {
      buttonUp.addClass("visible");
    } else {
      buttonUp.removeClass("visible");
    }
  }

  if (buttonUp) {
    buttonUp.on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, 500);
    });
  }
});
