import React from 'react';
import clsx from 'clsx';

import styles from '../../../styles/styles.module.css';

export interface SocialLinkProps {
  children: React.ReactNode;
  href: string;
}

export default function SocialLink({ children, href }: SocialLinkProps) {
  return (
    <a
      className={clsx(
        'text-sm leading-6  md:text-base xl:text-lg relative',
        styles.line
      )}
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow"
    >
      {children}
    </a>
  );
}
