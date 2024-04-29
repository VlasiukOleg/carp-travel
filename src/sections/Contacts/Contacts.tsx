import React from 'react';

import Section from '@/components/UiKit/Section/Section';
import Container from '@/components/Container/Container';
import SectionTitle from '@/components/UiKit/SectionTitle/SectionTitle';
import SocialLink from '@/components/UiKit/SocialLink/SocialLink';
import ContactForm from '@/components/Modules/ContactForm/ContactForm';

import contacts from '../../data/contacts.json';

import styles from './Contacts.module.css';

export interface ContactsProps {}

export default function Contacts({}: ContactsProps) {
  return (
    <div className={styles.contact}>
      <Section>
        <Container>
          <SectionTitle>
            <span className="font-thin">{contacts.title}</span>{' '}
            {contacts.highlightedTitle}
          </SectionTitle>
          <div className="flex gap-5 mt-9 mb-6">
            <ul className="text-right w-[175px]">
              <li className="text-sm leading-6">
                <a href="tel:+380981234567">+38 (098) 12 34 567</a>
              </li>
              <li className="text-sm leading-6">
                <a href="tel:+380731234567">+38 (073) 12 34 567</a>
              </li>
            </ul>
            <p className="text-xs font-extralight leading-6 ">Phone Number</p>
          </div>
          <div className="flex gap-5  mb-6">
            <div className="w-[175px] text-right">
              <a
                href="mailto:support@carptravel.com"
                className=" text-sm leading-6"
              >
                support@carptravel.com
              </a>
            </div>

            <p className="text-xs font-extralight leading-6">E-mail</p>
          </div>
          <div className="flex gap-5 mb-3">
            <p className="text-xs text-right font-extralight leading-6 w-[175px]">
              Follow us
            </p>
            <ul className="flex-grow ">
              <li>
                <SocialLink href="https://facebook.com">facebook</SocialLink>
              </li>
              <li className="text-sm leading-6">
                <SocialLink href="https://instagram.com">instagram</SocialLink>
              </li>
              <li className="text-sm leading-6">
                <SocialLink href="https://youtube.com">youtube</SocialLink>
              </li>
              <li className="text-sm leading-6">
                <SocialLink href="https://tiktok.com">tiktok</SocialLink>
              </li>
            </ul>
          </div>
          <ContactForm />
        </Container>
      </Section>
    </div>
  );
}
