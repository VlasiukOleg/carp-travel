import React from 'react';
import clsx from 'clsx';

import Section from '@/components/UiKit/Section/Section';
import Container from '@/components/Container/Container';
import SectionTitle from '@/components/UiKit/SectionTitle/SectionTitle';
import SocialLink from '@/components/UiKit/SocialLink/SocialLink';
import ContactForm from '@/components/Modules/ContactForm/ContactForm';

import contacts from '../../data/contacts.json';

import styles from './Contacts.module.css';
import stylesLine from './../../styles/styles.module.css';

export default function Contacts() {
  return (
    <div className={styles.contact} id="Contacts">
      <Section>
        <Container>
          <SectionTitle addStyle="mb-9 xl:mb-[71px]">
            <span className="font-thin">{contacts.title}</span>{' '}
            {contacts.highlightedTitle}
          </SectionTitle>
          <div className="xl:flex">
            <div className="md:flex md:mb-16 md:pl-8 xl:block xl:flex-grow xl:my-0 xl:pl-20">
              <div>
                <div className="flex gap-5 mb-6 xl:mb-16">
                  <ul className="text-right w-[175px] md:w-[187px] xl:w-[210px]">
                    <li className="text-sm leading-6 md:text-base xl:text-lg hover:scale-105 focus:scale-105 transition">
                      <a href="tel:+380981234567">+38 (098) 12 34 567</a>
                    </li>
                    <li className="text-sm leading-6 md:text-base xl:text-lg hover:scale-105 focus:scale-105 transition">
                      <a href="tel:+380731234567">+38 (073) 12 34 567</a>
                    </li>
                  </ul>
                  <p className="text-xs font-extralight leading-6 ">
                    Phone Number
                  </p>
                </div>

                <div className="flex gap-5  mb-6 xl:mb-[124px]">
                  <div className="w-[175px] text-right md:w-[187px] xl:w-[210px] hover:scale-105 focus:scale-105 transition">
                    <a
                      href="mailto:support@carptravel.com"
                      className="text-sm leading-6 md:text-base xl:text-lg "
                    >
                      support@carptravel.com
                    </a>
                  </div>

                  <p className="text-xs font-extralight leading-6 ">E-mail</p>
                </div>
              </div>

              <div className="flex gap-5 mb-3 xl:flex-row-reverse xl:justify-end">
                <p className="text-xs text-right font-extralight leading-6 w-[175px] xl:w-max">
                  Follow us
                </p>
                <ul className="flex-grow xl:w-[210px] xl:flex-grow-0 xl:text-right">
                  <li>
                    <SocialLink href="https://facebook.com">
                      facebook
                    </SocialLink>
                  </li>
                  <li>
                    <SocialLink href="https://instagram.com">
                      instagram
                    </SocialLink>
                  </li>
                  <li>
                    <SocialLink href="https://youtube.com">youtube</SocialLink>
                  </li>
                  <li>
                    <SocialLink href="https://tiktok.com">tiktok</SocialLink>
                  </li>
                </ul>
              </div>
            </div>

            <ContactForm />
          </div>
        </Container>
      </Section>
    </div>
  );
}
