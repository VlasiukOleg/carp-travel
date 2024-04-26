'use client';

import React, { useState } from 'react';
import { useRef } from 'react';

import { Swiper as SwiperReact, SwiperSlide, SwiperRef } from 'swiper/react';
import { EffectFade } from 'swiper/modules';

import Offer from '@/sections/Offer/Offer';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import { offerSlides } from '../../../sections/Offer/offers';

export interface OfferSwiperProps {}

export default function OfferSwiper({}: OfferSwiperProps) {
  const swiperRef = useRef<SwiperRef | null>(null);

  const [activeSlide, setActiveSlide] = useState<number>(0);

  const onHandleCLickBtn = (index: number) => {
    if (!swiperRef.current) return false;
    swiperRef.current?.swiper?.slideTo(index);
    setActiveSlide(index);
  };

  const onSlideChange = (swiper: any) => {
    setActiveSlide(swiper.realIndex);
  };

  return (
    <>
      <>
        <SwiperReact
          className="mySwiper"
          ref={swiperRef}
          effect={'fade'}
          modules={[EffectFade]}
          onSlideChange={onSlideChange}
        >
          {offerSlides.map(slide => (
            <SwiperSlide key={slide.id}>
              <Offer
                slide={slide}
                onHandleCLickBtn={onHandleCLickBtn}
                activeSlide={activeSlide}
              />
            </SwiperSlide>
          ))}
        </SwiperReact>
      </>
    </>
  );
}
