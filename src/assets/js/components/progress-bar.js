$(function () {
  let progressBar = $(".live-line");

  $(window).on("scroll", scrollHandler);

  function scrollHandler() {
    let scrollPosition =
      document.body.scrollTop || document.documentElement.scrollTop;
    let windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollOnPercent = (scrollPosition / windowHeight) * 100;

    progressBar.css({ width: scrollOnPercent + "%" });
  }
});
