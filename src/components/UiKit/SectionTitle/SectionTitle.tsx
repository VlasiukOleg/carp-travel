import * as React from 'react';

export interface SectionTitleProps {
  children: React.ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="text-[40px] text-left font-medium tracking-tighter uppercase md:text-[67px] md:leading-none xl:text-[98px]">
      {children}
    </h2>
  );
}
