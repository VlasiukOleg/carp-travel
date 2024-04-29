import React from 'react';

import NavListItem from './NavListItem';

export interface NavListProps {}

const navList = ['About', 'Services', 'Career', 'Gallery', 'Contacts'];

export default function NavList({}: NavListProps) {
  return (
    <nav>
      <ul className="flex flex-col items-center gap-12 md:flex-row md:gap-6">
        {navList.map((item, i) => (
          <NavListItem key={i}>{item}</NavListItem>
        ))}
      </ul>
    </nav>
  );
}
