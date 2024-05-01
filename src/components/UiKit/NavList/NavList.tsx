import React from 'react';

import NavListItem from './NavListItem';


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
            <NavListItem to={item} onClick={onClick}>
              {item}
            </NavListItem>
          </li>
        ))}
      </ul>
    </nav>
  );
}
