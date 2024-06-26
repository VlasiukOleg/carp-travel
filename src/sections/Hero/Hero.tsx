'use client';

import React from 'react';

import Section from '@/components/UiKit/Section/Section';
import Container from '@/components/Container/Container';
import ScrollButton from '@/components/UiKit/ScrollButton/ScrollButton';

import hero from '../../data/hero.json';

import styles from './Hero.module.css';

export default function Hero() {
  return (
    <div className={styles.hero} id="Hero">
      <Section>
        <Container>
          <div className="flex justify-end mb-6 md:hidden">
            <p className="text-[37px] uppercase  font-thin max-w-[113px] leading-[0.4] ">
              <span className="font-medium">{hero.labelNumber}</span>
              {hero.labelTitle}
              <span className="inline-block text-xs font-light tracking-[0.75em]">
                {hero.labelSubtitle}
              </span>
            </p>
          </div>

          <div className="md:flex gap-12">
            <div className="flex-grow">
              <h1 className="text-[40px] tracking-tighter leading-[3.5rem] font-thin uppercase mb-6 md:text-[67px]  md:leading-tight md:mb-[68px] xl:text-[98px] xl:mb-36 xl:leading-[1.2]">
                <span className="font-medium block">{hero.title}</span>
                {hero.subtitle}
              </h1>
              <p className="text-[10px] font-extralight max-w-[157px] mb-6 md:text-sm md:mb-0 md:tracking-[0.09em] md:max-w-[263px] xl:text-base xl:max-w-[610px]">
                {hero.location}
              </p>
            </div>

            <div className="md:max-w-[230px] xl:max-w-[305px]">
              <p className="text-[67px] uppercase  font-thin  hidden md:block tracking-[0.12em] leading-none xl:text-[98px] xl:tracking-[0.04em]">
                <span className="font-medium">{hero.labelNumber}</span>
                {hero.labelTitle}
              </p>
              <p className="uppercase font-light text-sm mt-[-8px] tracking-[1.85em] hidden md:block md:mb-14  xl:mb-[181px] xl:text-base xl:tracking-[2.25em]">
                {hero.labelSubtitle}
              </p>
              <p className="text-justify font-extralight  mb-7  xl:tracking-wider">
                {hero.description}
              </p>
              <ScrollButton>Join Now</ScrollButton>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
