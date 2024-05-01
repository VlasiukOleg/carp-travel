import React from 'react';

export interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="max-w-screen-mobile mx-auto px-5  md:max-w-screen-tablet md:px-8  xl:max-w-screen-desktop xl:px-6">
      {children}
    </div>
  );
}
