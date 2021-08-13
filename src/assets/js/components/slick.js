//= ../../../../node_modules/slick-carousel/slick/slick.min.js

//intro

     $(".intro__slider").slick({
       autoplay: true,
       autoplaySpeed: 4000,
       infinite:true,
     });


     $(".portfolio__slider").slick({
       centerMode: true,
       centerPadding: "60px",
       slidesToShow: 3,
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