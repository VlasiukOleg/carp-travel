import React from 'react';

import { Link } from 'react-scroll';

import clsx from 'clsx';

import styles from '../../../styles/styles.module.css';

export interface NavListProps {
  onClick: () => void;
}

const navList = ['About', 'Services', 'Career', 'Gallery', 'Contacts'];

export default function NavList({ onClick }: NavListProps) {
  return (
    <nav>
      <ul className="flex flex-col items-center gap-12 md:flex-row md:gap-6 xl:gap-14">
        {navList.map((item, i) => (
          <li key={i}>
            <Link
              href="#"
              to={item}
              smooth={true}
              duration={500}
              onClick={onClick}
              className={clsx(
                'text-lg tracking-widest md:text-sm cursor-pointer relative',
                styles.line
              )}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
