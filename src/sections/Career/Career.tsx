import React from 'react';

import Section from '@/components/UiKit/Section/Section';
import Container from '@/components/Container/Container';
import SectionTitle from '@/components/UiKit/SectionTitle/SectionTitle';
import { Text } from '@/components/UiKit/Text/Text';
import CareerForm from '@/components/Modules/CareerForm/CareerForm';

import career from '../../data/career.json';
import { benefitsList } from '../../data/benefitsList.js';

import styles from './Career.module.css';

export interface CareerProps {}

export default function Career({}: CareerProps) {
  return (
    <>
      <div className={styles.career}>
        <Section>
          <Container>
            <SectionTitle>
              <span className="font-thin">{career.title}</span>{' '}
              {career.highlightedTitle}
            </SectionTitle>
            <div className="flex justify-end mt-6 mb-9">
              <Text addStyle="max-w-[179px]">{career.description}</Text>
            </div>
            <h3 className="font-extralight text-3xl uppercase text-right pr-9">
              {career.subtitle}
            </h3>
            <ul className="flex flex-col gap-4 mt-9 max-w-[181px]">
              {benefitsList.map(({ title, description }) => (
                <li key={title} className="text-end">
                  <p className="text-sm mb-2">{title}</p>
                  <p className="text-xs font-extralight">{description}</p>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      </div>
      <div className={styles.career}>
        <Section>
          <Container>
            <div className="flex justify-end  mb-9">
              <Text addStyle="max-w-[179px]">{career.formTitle}</Text>
            </div>
            <CareerForm />
          </Container>
        </Section>
      </div>
    </>
  );
}
