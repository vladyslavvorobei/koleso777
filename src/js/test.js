import Swiper from "swiper";

let optionPartners = {};

function sliderSizePartners(screenSize, nubersOfElements, spaseBetween) {
  if (window.innerWidth > screenSize) {
    if ( $(".partners-slider__swiper .swiper-slide").length === nubersOfElements ) {
      optionPartners = {
        slidesPerView: nubersOfElements,
        spaceBetween: spaseBetween,
        pagination: false,
        breakpoints: {
          575: {
            slidesPerView: 3,
          },
          767: {
            slidesPerView: 4,
          },
          991: {
            slidesPerView: 5,
          },
          1199: {
            slidesPerView: 7,
            spaceBetween: 40
          },
          1619: {
            slidesPerView: 8,
            spaceBetween: 70
          }
        }
      }
    } else {
      optionPartners = {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        autoplay: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          575: {
            slidesPerView: 3,
          },
          767: {
            slidesPerView: 4,
          },
          991: {
            slidesPerView: 5,
          },
          1199: {
            slidesPerView: 7,
            spaceBetween: 40
          },
          1619: {
            slidesPerView: 8,
            spaceBetween: 70
          },
        }
      }
    }
  }
}
sliderSizePartners(319, 2, 30);
sliderSizePartners(575, 3, 30);
sliderSizePartners(767, 4, 30);
sliderSizePartners(991, 5, 30);
sliderSizePartners(1199, 7, 40);
sliderSizePartners(1619, 8, 70);
$(window).resize(function () {
  if (window.innerWidth < 575) {
    sliderSizePartners(319, 2, 30);
    const swiperPartners = new Swiper('.partners-slider__swiper .swiper-container', optionPartners);
  }
  else if (window.innerWidth < 767) {
    sliderSizePartners(575, 3, 30);
    const swiperPartners = new Swiper('.partners-slider__swiper .swiper-container', optionPartners);
  }
  else if (window.innerWidth < 991) {
    sliderSizePartners(767, 4, 30);
    const swiperPartners = new Swiper('.partners-slider__swiper .swiper-container', optionPartners);
  }
  else if (window.innerWidth < 1199) {
    sliderSizePartners(991, 5, 30);
    const swiperPartners = new Swiper('.partners-slider__swiper .swiper-container', optionPartners);
  }
  else if (window.innerWidth < 1619) {
    sliderSizePartners(1199, 7, 40);
    const swiperPartners = new Swiper('.partners-slider__swiper .swiper-container', optionPartners);
  }
  else {
    sliderSizePartners(1619, 8, 70);
    const swiperPartners = new Swiper('.partners-slider__swiper .swiper-container', optionPartners);
  }
});
const swiperPartners = new Swiper('.partners-slider__swiper .swiper-container', optionPartners);

