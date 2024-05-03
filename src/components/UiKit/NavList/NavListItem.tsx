import React from 'react';
import clsx from 'clsx';

import { Link as ScrollLink } from 'react-scroll';

import styles from '../../../styles/styles.module.css';

export interface NavListItemProps {
  children: React.ReactNode;
  to: string;
  onClick: () => void;
}

export default function NavListItem({
  children,
  to,
  onClick,
}: NavListItemProps) {
  return (
    <ScrollLink
      to={to}
      smooth={true}
      duration={500}
      onClick={onClick}
      className={clsx(
        'text-lg tracking-widest md:text-sm cursor-pointer relative',
        styles.line
      )}
    >
      {children}
    </ScrollLink>
  );
}
