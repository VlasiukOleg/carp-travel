'use client';

import React, { useState } from 'react';

import Container from '../container/Container';
import Logo from '@/components/ui-kit/logo/Logo';
import MenuBtn from '@/components/ui-kit/menuBtn/MenuBtn';
import MobileMenu from '../modules/mobileMenu/MobileMenu';

export interface HeaderProps {}

export default function Header({}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <div className="pt-9 absolute inset-x-0 top-0">
        <Container>
          <div className="flex justify-between items-center">
            <Logo pathname="/" src="/icons/logo.svg" alt="logo icon" />
            <MenuBtn onClick={toggleMobileMenu}>Menu</MenuBtn>
          </div>
        </Container>
      </div>
      <MobileMenu
        onToggleMobileMenu={toggleMobileMenu}
        mobileMenuOpen={mobileMenuOpen}
      />
    </>
  );
}
