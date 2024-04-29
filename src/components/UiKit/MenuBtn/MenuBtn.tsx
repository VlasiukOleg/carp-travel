import * as React from 'react';

export interface MenuBtnProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function MenuBtn({ children, ...props }: MenuBtnProps) {
  return (
    <button
      {...props}
      type="button"
      className="text-sm bg-transparent cursor-pointer uppercase md:hidden"
    >
      {children}
    </button>
  );
}
