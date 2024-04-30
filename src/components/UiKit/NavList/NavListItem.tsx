import React from 'react';
import Link from 'next/link';

export interface NavListItemProps {
  children: React.ReactNode;
}

export default function NavListItem({ children }: NavListItemProps) {
  return (
    <Link href="#">
      <span className="text-lg tracking-widest md:text-sm">{children}</span>
    </Link>
  );
}
