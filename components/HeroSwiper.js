/** @format */

// Import Swiper React components
import { heroImages } from 'lib/images';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';
import Slide from './Slide';

SwiperCore.use([Navigation, Pagination, Scrollbar]);

const HeroSlider = () => {
  return (
    <Swiper navigation pagination={{ clickable: true }}>
      {heroImages.map((image) => (
        <SwiperSlide key={image}>
          <Slide image={image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default HeroSlider;
