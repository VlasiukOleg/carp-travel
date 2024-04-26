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
          <SectionTitle>
            <span className="font-thin">{about.title}</span> {about.subtitle}
          </SectionTitle>
          <p className="pb-5 text-sm font-extralight max-w-[180px]">
            <span className="font-normal">
              {about.highlightedDescriptionMain}
            </span>
            {about.descriptionMain}
          </p>
          <p className="pb-10 text-sm font-extralight max-w-[180px]">
            <span className="font-normal">
              {about.highlightedDescriptionPrimary}
            </span>
            {about.descriptionPrimary}
          </p>
          <div className="pb-10 text-sm font-extralight text-end">
            <div className="ml-auto inline-block">
              <p className="uppercase font-normal text-start">
                {about.actionTextMain}
              </p>
              <p className="uppercase font-normal">{about.actionTextPrimary}</p>
              <p className="">{about.actionTextSecondary}</p>
            </div>
          </div>
          <p className="text-sm font-extralight">
            <span className="font-normal">
              {about.highlightedDescriptionSecondary}
            </span>
            {about.descriptionSecondary}
          </p>
        </Container>
      </Section>
    </div>
  );
}
