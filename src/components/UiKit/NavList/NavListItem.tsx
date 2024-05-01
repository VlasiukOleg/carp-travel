import React from 'react';

import { Link as ScrollLink } from 'react-scroll';

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
    <ScrollLink to={to} smooth={true} duration={500} onClick={onClick}>
      <span className="text-lg tracking-widest md:text-sm cursor-pointer">
        {children}
      </span>
    </ScrollLink>
  );
}
