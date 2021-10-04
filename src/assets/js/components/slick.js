//= ../../../../node_modules/slick-carousel/slick/slick.min.js

//intro

const introSlider = $(".intro__slider");
const portfolioSlider = $(".portfolio__slider");

introSlider.slick({
  autoplay: true,
  autoplaySpeed: 3000,
  infinite: true,
});

portfolioSlider.slick({
  infinite: false,
  speed: 1000,
  rows: 2,
  centerMode: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow: $(".gallary-arrow__prev"),
  nextArrow: $(".gallary-arrow__next"),
  arrows: true,
  dots: true,

  responsive: [
    {
      breakpoint: 1981,
      settings: {
        rows: 2,
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 1300,
      settings: {
        rows: 2,
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        rows: 2,
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        rows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
