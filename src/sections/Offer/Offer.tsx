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
          <SectionTitle>
            {' '}
            <span className="font-thin">{offer.title}</span> {offer.subtitle}
          </SectionTitle>
          <p className="font-thin text-[43px] text-right pt-6 pb-4">
            0{slide.id}/
            <span className="text-white opacity-20">0{offerSlides.length}</span>
          </p>
          <Image src={slide.image} alt={slide.title} loading="lazy" />
          <p className="text-xs text-right font-extralight mt-3 mb-6 tracking-[.2em]">
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
                      'text-xl font-extralight leading-none uppercase',
                      activeSlide === index && 'font-medium'
                    )}
                  >
                    {slide.title}
                    <span className="block mt-[-4px]">{slide.subtitle}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <p
            className={clsx(
              'text-sm font-extralight text-start pt-8',
              slide.id === 2 && 'pt-[74px]',
              slide.id === 3 && 'pt-[74px]',
              slide.id === 4 && 'pt-[54px]',
              slide.id === 5 && 'pt-[34px]'
            )}
          >
            {slide.description}
          </p>
        </Container>
      </Section>
    </div>
  );
}
