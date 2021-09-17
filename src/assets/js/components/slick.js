//= ../../../../node_modules/slick-carousel/slick/slick.min.js

//intro

$(".intro__slider").slick({
  autoplay: false,
  autoplaySpeed: 4000,
  infinite: true,
});

$(".portfolio__slider").slick({
  infinite: false,
  speed: 2000,
  slidesToShow: 4,
  slidesToScroll: 4,
  rows: 2,

   responsive: [
     {
       breakpoint: 768,
       settings: {
         arrows: false,
         centerMode: true,
         centerPadding: "40px",
         slidesToShow: 3,
       },
     },
     {
       breakpoint: 480,
       settings: {
         arrows: false,
         centerMode: true,
         centerPadding: "40px",
         slidesToShow: 1,
       },
     },
   ],
});
