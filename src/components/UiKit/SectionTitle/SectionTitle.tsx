import React from 'react';
import clsx from 'clsx';

export interface SectionTitleProps {
  children: React.ReactNode;
  addStyle?: string;
}

export default function SectionTitle({
  children,
  addStyle,
}: SectionTitleProps) {
  return (
    <h2
      className={clsx(
        'text-[40px] text-left font-medium tracking-tighter uppercase md:text-[67px] md:leading-none xl:text-[98px]',
        addStyle
      )}
    >
      {children}
    </h2>
  );
}
