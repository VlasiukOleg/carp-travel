import React from 'react';

export interface SectionProps {
  children: React.ReactNode;
}

export default function Section({ children }: SectionProps) {
  return <section className="py-14">{children}</section>;
}
