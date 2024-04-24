import * as React from 'react';

export interface SectionTitleProps {
  children: React.ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="text-[40px] font-medium tracking-tighter uppercase">
      {children}
    </h2>
  );
}
