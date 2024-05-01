import React from 'react';

import clsx from 'clsx';

import MenuBtn from '@/components/UiKit/MenuBtn/MenuBtn';
import NavList from '@/components/UiKit/NavList/NavList';

export interface MobileMenuProps {
  onToggleMobileMenu: () => void;
  mobileMenuOpen: boolean;
}

export default function MobileMenu({
  onToggleMobileMenu,
  mobileMenuOpen,
}: MobileMenuProps) {
  return (
    <div
      className={clsx(
        'fixed z-50 top-0 left-0 w-screen h-screen backdrop-filter backdrop-blur-md bg-opacity-75 bg-gray-800  overflow-hidden flex justify-center items-center transition-opacity',
        mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
    >
      <header className="absolute top-11 right-5">
        <MenuBtn onClick={onToggleMobileMenu}>Close</MenuBtn>
      </header>
      <NavList />
    </div>
  );
}