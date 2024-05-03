import React from 'react';

import { Link as ScrollLink } from 'react-scroll';

import styles from './ScrollButton.module.css';

export interface ScrollButtonProps {
  children: React.ReactNode;
}

export default function ScrollButton({ children }: ScrollButtonProps) {
  return (
    <ScrollLink
      href='#'
      to="Contacts"
      smooth={true}
      duration={500}
      className={styles.button}
    >
      {children}
    </ScrollLink>
  );
}
