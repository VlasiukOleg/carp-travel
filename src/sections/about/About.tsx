import React from 'react';

import Section from '@/components/UiKit/Section/Section';
import Container from '@/components/Container/Container';
import SectionTitle from '@/components/UiKit/SectionTitle/SectionTitle';

import about from '../../data/about.json';

import styles from './about.module.css';

export interface AboutProps {}

export default function About({}: AboutProps) {
  return (
    <div className={styles.about}>
      <Section>
        <Container>
          <div className="md:flex md:gap-20 md:mb-16 xl:gap-6">
            <div className="md:flex md:flex-col md:justify-between md:flex-grow xl:flex-grow-0">
              <SectionTitle>
                <span className="font-thin">{about.title}</span>{' '}
                {about.subtitle}
              </SectionTitle>
              <div className="text-sm font-extralight hidden md:block md:text-base xl:hidden">
                <div className="ml-auto inline-block">
                  <p className="uppercase font-normal">
                    {about.actionTextMain}
                  </p>
                  <p className="uppercase font-normal text-end">
                    {about.actionTextPrimary}
                  </p>
                  <p className="">{about.actionTextSecondary}</p>
                </div>
              </div>
            </div>

            <div className="max-w-[180px] md:max-w-[220px] xl:max-w-[292px]">
              <p className="mb-5 text-sm font-extralight  md:mb-4 md:text-base">
                <span className="font-normal">
                  {about.highlightedDescriptionMain}
                </span>
                {about.descriptionMain}
              </p>
              <p className="mb-10 text-sm font-extralight md:text-base md:mb-0">
                <span className="font-normal">
                  {about.highlightedDescriptionPrimary}
                </span>
                {about.descriptionPrimary}
              </p>
            </div>
          </div>

          <div className="mb-10 text-sm font-extralight text-end md:hidden">
            <div className="ml-auto inline-block mb-10 text-sm font-extralight text-end md:hidden">
              <p className="uppercase font-normal text-start">
                {about.actionTextMain}
              </p>
              <p className="uppercase font-normal">{about.actionTextPrimary}</p>
              <p className="">{about.actionTextSecondary}</p>
            </div>
          </div>

          <div className="xl:flex xl:justify-between">
            <p className="text-sm font-extralight md:text-base md:max-w-[463px] md:ml-auto xl:ml-0 md:max-w-[610px]">
              <span className="font-normal">
                {about.highlightedDescriptionSecondary}
              </span>
              {about.descriptionSecondary}
            </p>
            <div className="font-extralight text-base hidden xl:block">
              <div className="ml-auto inline-block">
                <p className="uppercase font-normal">{about.actionTextMain}</p>
                <p className="uppercase font-normal text-end">
                  {about.actionTextPrimary}
                </p>
                <p className="">{about.actionTextSecondary}</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
