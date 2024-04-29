import React, { useState } from 'react';

import Image from 'next/image';
import clsx from 'clsx';

import Section from '@/components/UiKit/Section/Section';
import Container from '@/components/Container/Container';
import SectionTitle from '@/components/UiKit/SectionTitle/SectionTitle';

import { OfferSlide } from './offers';

import offer from '../../data/offer.json';
import { offerSlides } from './offers';

import styles from './Offer.module.css';

export interface OfferProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  slide: OfferSlide;
  onHandleCLickBtn: (index: number) => void;
  activeSlide: number;
}

export default function Offer({
  slide,
  onHandleCLickBtn,
  activeSlide,
}: OfferProps) {
  return (
    <div className={clsx(styles.offer, styles[`offer${slide.id}`])}>
      <Section>
        <Container>
          <div className="md:flex md:gap-5 md:mb-9">
            <div className="md:w-[463px]">
              <SectionTitle>
                {' '}
                <span className="font-thin">{offer.title}</span>{' '}
                {offer.subtitle}
              </SectionTitle>
            </div>

            <p className="font-thin text-[43px] text-right mt-6 mb-4 md:text-[67px] md:my-0 md:leading-none">
              0{slide.id}/
              <span className="text-white opacity-20">
                0{offerSlides.length}
              </span>
            </p>
          </div>

          <div className="md:flex md:gap-5">
            <div className="md:w-[463px] md:h-[370px]">
              <Image src={slide.image} alt={slide.title} loading="lazy" />
            </div>

            <div>
              {' '}
              <p className="text-xs text-right font-extralight mt-3 mb-6 tracking-[.2em] md:hidden">
                {slide.actionText}
              </p>
              <ul className="flex flex-col gap-4 items-start">
                {offerSlides.map((slide, index) => (
                  <li key={slide.id}>
                    <button
                      className="pointer text-start flex items-center"
                      type="button"
                      onClick={() => {
                        onHandleCLickBtn(index);
                      }}
                    >
                      {activeSlide === index && (
                        <span className="before:block mr-2  w-1.5 h-1.5 bg-white transform rotate-45 inline-block"></span>
                      )}

                      <span
                        className={clsx(
                          'text-xl font-extralight leading-none uppercase  md:text-[22px]',
                          activeSlide === index && 'font-medium'
                        )}
                      >
                        {slide.title}
                        <span className="block mt-[-4px]">
                          {slide.subtitle}
                        </span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-left font-extralight mt-6 tracking-[.2em]">
                {slide.actionText}
              </p>
              <p
                className={clsx(
                  'text-sm font-extralight text-start  max-w-[280px] md:text-[13px] md:max-w-[221px]',
                  slide.id === 1 && 'mt-[34px]',
                  slide.id === 2 && 'mt-[74px] md:mt-[54px]',
                  slide.id === 3 && 'mt-[74px] md:mt-[54px]',
                  slide.id === 4 && 'mt-[54px] md:mt-[34px]',
                  slide.id === 5 && 'mt-[34px] md:mt-[34px]'
                )}
              >
                {slide.description}
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
