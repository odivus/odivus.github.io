import React, { useState, useEffect, useRef } from 'react';

import Logo from '../Logo/Logo';
import Contacts from '../Contacts/Contacts';
import Menu from '../Menu/Menu';
import MenuMobile from '../Menu/Menu-mobile';
import Burger from '../Menu/Burger/Burger';

import './Header.css';

function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [
    windowOffsetWidth,
    setWindowOffsetWidth
  ] = useState(document.body.offsetWidth);

  const [scrollBarWidth, setScrollBarWidth] = useState(0);

  const headerRef = useRef(null);

  useEffect(() => {
    if (menuIsOpen) {
      document.body.style.overflow = 'hidden';
      if (document.body.clientWidth > windowOffsetWidth) {
        setScrollBarWidth(document.body.clientWidth - windowOffsetWidth);
      }
    }

    if (!menuIsOpen) {
      document.body.style.overflow = 'visible';
      setWindowOffsetWidth(document.body.offsetWidth);
    }
  }, [menuIsOpen, scrollBarWidth, windowOffsetWidth]);

  useEffect(() => {
    const callback = () => {
      if (document.body.offsetWidth >= 720) setMenuIsOpen(false);
      setWindowOffsetWidth(document.body.offsetWidth);
    }

    window.addEventListener('resize', callback, false);

    return () => window.removeEventListener('resize', callback);

  }, []);

  return (
    <div className='header-wrapper'>
      <div className='header-wrap'>
        <div className='header' ref={headerRef}>
          <Logo />
          <Menu isMobile={false} />
          <Contacts />
          <Burger setState={setMenuIsOpen} />
          <MenuMobile
            scrollBarWidth={scrollBarWidth}
            menuIsOpen={menuIsOpen}
            setMenuIsOpen={setMenuIsOpen}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;