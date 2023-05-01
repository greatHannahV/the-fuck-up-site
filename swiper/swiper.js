
var swiper = new Swiper(".inner", {
slidesPerView: 4.5,
spaceBetween: 20,
freeMode: true,
loop:false,


navigation:{
nextEl:'.button-next',
prevEl:'.button-prev'
},
breakpoints:{
    1200:{
        spaceBetween:15,
        slidesPerView: 3.5,
    },
    951:{
        spaceBetween:10,
        slidesPerView: 2.5,
    },
  
    320:{
        spaceBetween:5,
        slidesPerView: 1,
    },
    0:{
        spaceBetween:0,
        slidesPerView: 1,
    },


},

});
