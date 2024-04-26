import React from 'react';
import clsx from 'clsx';

export interface TextProps {
  children: React.ReactNode;
  addStyle?: string;
}

export function Text({ children, addStyle }: TextProps) {
  return (
    <p className={clsx('text-sm font-extralight', addStyle)}>{children}</p>
  );
}
