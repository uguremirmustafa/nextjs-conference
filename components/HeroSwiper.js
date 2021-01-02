/** @format */

// Import Swiper React components
// import { heroImages } from 'lib/images';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';
import Slide from './Slide';

SwiperCore.use([Navigation, Pagination, Scrollbar]);

const HeroSlider = ({ conference }) => {
  const conf = conference[0];
  return (
    <Swiper navigation pagination={{ clickable: true }}>
      {conf.heroImages.map((image) => (
        <SwiperSlide key={image}>
          <Slide image={image} conf={conf} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default HeroSlider;
