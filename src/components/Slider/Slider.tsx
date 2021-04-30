import React, { useState } from 'react';

// Import Swiper React components
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

import './Slider.scss';

SwiperCore.use([Pagination, Autoplay]);

export default function Slider() {
  const [images] = useState([
    {
      url:
        'https://images.unsplash.com/photo-1562503007-73443f9dc9e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1929&q=80',
      id: 1,
    },
    {
      url:
        'https://images.unsplash.com/photo-1581397867212-e05b3692d16b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      id: 2,
    },
    {
      url:
        'https://images.unsplash.com/photo-1617807666231-331677e1c41f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      id: 3,
    },
    {
      url:
        'https://images.unsplash.com/photo-1605901309584-818e25960a8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1478&q=80',
      id: 4,
    },
    {
      url:
        'https://images.unsplash.com/photo-1482855549413-2a6c9b1955a7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      id: 5,
    },
  ]);

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay
      pagination={{
        dynamicBullets: true,
      }}
      className="slider"
    >
      {images.map((image) => (
        <SwiperSlide key={image.id} className="slider__slide">
          <img className="slider__slide-img" src={image.url} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
