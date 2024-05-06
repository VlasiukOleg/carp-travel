import React from 'react';

import Section from '@/components/UiKit/Section/Section';
import Container from '@/components/Container/Container';
import SectionTitle from '@/components/UiKit/SectionTitle/SectionTitle';
import SocialLink from '@/components/UiKit/SocialLink/SocialLink';
import ContactForm from '@/components/Modules/ContactForm/ContactForm';

import contacts from '../../data/contacts.json';

import styles from './Contacts.module.css';

export default function Contacts() {
  const { title, highlightedTitle, phone, email, social } = contacts;
  return (
    <div className={styles.contact} id="Contacts">
      <Section>
        <Container>
          <SectionTitle addStyle="mb-9 xl:mb-[71px]">
            <span className="font-thin">{title}</span> {highlightedTitle}
          </SectionTitle>
          <div className="xl:flex">
            <div className="md:flex md:mb-16 md:pl-8 xl:block xl:flex-grow xl:my-0 xl:pl-20">
              <div>
                <div className="flex gap-5 mb-6 xl:mb-16">
                  <ul className="text-right w-[175px] md:w-[187px] xl:w-[210px]">
                    <li className="text-sm leading-6 md:text-base xl:text-lg hover:scale-105 focus:scale-105 transition">
                      <a href="tel:+380981234567">{phone.primaryNumber}</a>
                    </li>
                    <li className="text-sm leading-6 md:text-base xl:text-lg hover:scale-105 focus:scale-105 transition">
                      <a href="tel:+380731234567">{phone.secondaryNumber}</a>
                    </li>
                  </ul>
                  <p className="text-xs font-extralight leading-6 ">
                    {phone.title}
                  </p>
                </div>

                <div className="flex gap-5  mb-6 xl:mb-[124px]">
                  <div className="w-[175px] text-right md:w-[187px] xl:w-[210px] hover:scale-105 focus:scale-105 transition">
                    <a
                      href="mailto:support@carptravel.com"
                      className="text-sm leading-6 md:text-base xl:text-lg "
                    >
                      {email.primaryEmail}
                    </a>
                  </div>

                  <p className="text-xs font-extralight leading-6 ">
                    {email.title}
                  </p>
                </div>
              </div>

              <div className="flex gap-5 mb-3 xl:flex-row-reverse xl:justify-end">
                <p className="text-xs text-right font-extralight leading-6 w-[175px] xl:w-max">
                  {social.title}
                </p>
                <ul className="flex-grow xl:w-[210px] xl:flex-grow-0 xl:text-right">
                  {social.socialList.map(item => (
                    <li key={item}>
                      <SocialLink href="https://facebook.com">
                        {item}
                      </SocialLink>
                    </li>
                  ))}
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
