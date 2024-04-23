import React from 'react';
import Link from 'next/link';

export interface NavListItemProps {
  children: React.ReactNode;
  key: number;
}

export default function NavListItem({ children, key }: NavListItemProps) {
  return (
    <li key={key}>
      <Link href="#">
        <span className="text-lg">{children}</span>
      </Link>
    </li>
  );
}
