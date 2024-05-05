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

export default function Career() {
  return (
    <>
      <div className={styles.career} id="Career">
        <Section>
          <Container>
            <div className="md:flex md:justify-between md:items-center md:mb-1 xl:mb-8">
              <SectionTitle addStyle="max-md:mb-6">
                <span className="font-thin">{career.title}</span>{' '}
                {career.highlightedTitle}
              </SectionTitle>

              <Text addStyle="max-w-[179px]  mb-9 ml-auto md:ml-0 md:max-w-[221px] md:my-0 md:text-[13px] xl:text-lg  xl:max-w-[293px]">
                {career.description}
              </Text>
            </div>
            <h3 className="mb-9 md:mb-14 font-extralight text-3xl uppercase text-right  md:w-[221px] xl:hidden xl:text-4xl">
              {career.subtitle}
            </h3>
            <div className="md:flex md:gap-5 xl:gap-6 xl:justify-end">
              <div className="max-w-[181px] md:max-w-[221px] xl:max-w-[562px]">
                <h3 className="text-4xl mb-11 font-extralight  uppercase text-right  w-[252px] hidden xl:block ">
                  {career.subtitle}
                </h3>
                <ul className="flex flex-col gap-4    md:gap-6 md:mt-0 ">
                  {benefitsList.map(({ title, description }) => (
                    <li key={title} className="text-end xl:flex xl:justify-end">
                      <p className="text-sm mb-2 md:text-base xl:text-lg xl:mb-0">
                        {title}
                      </p>
                      <p className="text-xs font-extralight xl:max-w-[285px] xl:leading-6">
                        {description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hidden md:block">
                <Text addStyle="max-w-[179px] md:text-[13px] md:max-w-[221px] md:mb-8 xl:text-lg xl:max-w-[234px] xl:leading-6 xl:mb-4">
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
