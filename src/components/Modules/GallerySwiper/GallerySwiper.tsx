'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import clsx from 'clsx';

import { galleryImages } from '../../../data/galleryImageList.js';

import image1 from '../../../../public/image/gallery/gallery1.jpg';
import image2 from '../../../../public/image/gallery/gallery2.jpg';
import image3 from '../../../../public/image/gallery/gallery3.jpg';

import styles from './GallerySwiper.module.css';

import 'swiper/css/effect-coverflow';

const slides = [image1, image2, image3];

export default function GallerySwiper() {
  const swiperRef = useRef<SwiperRef | null>(null);

  const onHandlePrevBtn = () => {
    if (!swiperRef.current) return false;
    swiperRef.current?.swiper?.slidePrev();
  };

  const onHandleNextBtn = () => {
    if (!swiperRef.current) return false;
    swiperRef.current?.swiper?.slideNext();
  };

  return (
    <div className="hidden md:block relative ">
      <Swiper
        ref={swiperRef}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow]}
        slidesPerView={3}
        spaceBetween={24}
        breakpoints={{
          768: {
            coverflowEffect: {
              rotate: 0,
              stretch: -44,
              depth: 0,
              modifier: 1,
              scale: 0.35,
            },
          },

          1280: {
            coverflowEffect: {
              rotate: 0,
              stretch: -52,
              depth: 0,
              modifier: 1,
              scale: 0.5,
            },
          },
        }}
      >
        {[...galleryImages, ...galleryImages].map((slide, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div
                className={clsx(
                  styles.wrap,
                  'relative right-[80px] w-[415px] h-[294px] xl:w-[606px] xl:h-[429px]',
                  isActive
                    ? 'before:hidden md:right-[90px] xl:right-[95px]'
                    : ''
                )}
              >
                <Image src={slide.image} alt={slide.alt} />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        type="button"
        className="absolute z-10 bottom-10 left-10 text-[33px] font-thin uppercase xl:bottom-0 xl:left-[13rem] hover:scale-105 focus:scale-105 transition"
        onClick={onHandlePrevBtn}
      >
        Back
      </button>
      <button
        type="button"
        className="absolute z-10 bottom-10 right-8 text-[33px] font-thin uppercase xl:bottom-0 xl:right-[12rem] hover:scale-105 focus:scale-105 transition"
        onClick={onHandleNextBtn}
      >
        Next
      </button>
    </div>
  );
}
