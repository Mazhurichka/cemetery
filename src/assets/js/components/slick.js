//intro

const introSlider = $(".intro__slider");
const portfolioSlider = $(".portfolio__slider");

introSlider.slick({
  autoplay: true,
  autoplaySpeed: 2500,
  infinite: true,
});

portfolioSlider.slick({
  infinite: false,
  speed: 1000,
  rows: 2,
  centerMode: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow:
    "<svg class='gallary-arrow__prev slick-prev slick-arrow'><use xlink:href='#slider-arrow'></use></svg>",
  nextArrow:
    "<svg class='gallary-arrow__next slick-next slick-arrow'><use xlink:href='#slider-arrow'></use></svg>",
  dots: true,

  responsive: [
    {
      breakpoint: 1981,
      settings: {
        arrows: true,
        rows: 2,
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 1300,
      settings: {
        arrows: false,
        rows: 2,
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        rows: 2,
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    { 
      breakpoint: 576,
      settings: {
        arrows: true,
        rows: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
