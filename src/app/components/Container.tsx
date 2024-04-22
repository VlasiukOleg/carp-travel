import * as React from 'react';

export interface ContainerProps {
  children: React.ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <div className="max-w-screen-mobile mx-auto px-5 py-14 md:max-w-screen-tablet md:px-8 md:py-16 xl:max-w-screen-desktop xl:p-104">
      {children}
    </div>
  );
}
