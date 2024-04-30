import React from 'react';

import clsx from 'clsx';

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
            <div className="md:flex justify-between">
              <SectionTitle>
                <span className="font-thin">{career.title}</span>{' '}
                {career.highlightedTitle}
              </SectionTitle>

              <Text addStyle="max-w-[179px]  mt-6 mb-9 ml-auto md:ml-0 md:max-w-[221px] md:my-0 md:text-[13px]">
                {career.description}
              </Text>
            </div>
            <h3 className="font-extralight text-3xl uppercase text-right  md:w-[221px]">
              {career.subtitle}
            </h3>
            <div className="md:flex md:gap-5  md:mt-14">
              <div>
                <ul className="flex flex-col gap-4 mt-9 max-w-[181px] md:max-w-[221px] md:gap-6 md:mt-0">
                  {benefitsList.map(({ title, description }) => (
                    <li key={title} className="text-end">
                      <p className="text-sm mb-2 md:text-base">{title}</p>
                      <p className="text-xs font-extralight">{description}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hidden md:block">
                <Text addStyle="max-w-[179px] md:text-[13px] md:max-w-[221px] md:mb-8">
                  {career.formTitle}
                </Text>
                <CareerForm />
              </div>
            </div>
          </Container>
        </Section>
      </div>

      <div className={clsx(styles.career, 'md:hidden')}>
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
