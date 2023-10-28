import React from 'react';
import { useEffect } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import styles from './Carousel.module.css';
import CarouselLeftNavigation from '../Carousel/CarouselLeftNavigation.jsx';
import CarouselRightNavigation from '../Carousel/CarouselRightNavigation.jsx';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

const Controls = ({ data }) => {
  const swiper = useSwiper();
  console.log(swiper);
  useEffect(() => {
    swiper.slideTo(0, null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  return <></>;
};

const Carousel = ({ data, componentRender }) => {
  return (
    <div className={styles.wrapper}>
      <Swiper
        style={{ padding: '0px 20px' }}
        initialSlide={0}
        slidesPerView={'auto'}
        spaceBetween={40}
        modules={[Navigation]}
        allowTouchMove
      >
        <Controls data={data} />
        <CarouselLeftNavigation />
        <CarouselRightNavigation />
        {data.map(item => {
          return (
            <SwiperSlide key={item.id}> {componentRender(item)}</SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
