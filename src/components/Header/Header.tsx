'use client';

import React, { useState } from 'react';

import Container from '../Container/Container';
import Logo from '@/components/UiKit/Logo/Logo';
import MenuBtn from '@/components/UiKit/MenuBtn/MenuBtn';
import MobileMenu from '../Modules/MobileMenu/MobileMenu';
import NavList from '../UiKit/NavList/NavList';

export interface HeaderProps {}

export default function Header({}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.classList.toggle('overflow-hidden');
  };

  return (
    <>
      <div className="pt-9 absolute inset-x-0 top-0 md:pt-6">
        <Container>
          <header className="flex justify-between items-center">
            <Logo pathname="/" src="/icons/logo.svg" alt="logo icon" />
            <div className="hidden md:block">
              <NavList onClick={() => null} />
            </div>

            <MenuBtn onClick={toggleMobileMenu}>Menu</MenuBtn>
          </header>
        </Container>
      </div>
      <MobileMenu
        onToggleMobileMenu={toggleMobileMenu}
        mobileMenuOpen={mobileMenuOpen}
      />
    </>
  );
}
