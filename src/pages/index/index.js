import './index.scss';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import Swiper from 'swiper/bundle';

// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination]);

$(function() {
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
})