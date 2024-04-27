import React from 'react';

import styles from './button.module.css';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button type="button" className={styles.button}>
      {children}
    </button>
  );
}
