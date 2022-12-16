import React from 'react';

import ContactsPage from '../Contacts/Contacts-page';
import Menu from '../Menu/Menu';
import Close from './Close/Close';

import './Menu.css';

function MenuMobile(props) {
  const {
    scrollBarWidth,
    menuIsOpen,
    setMenuIsOpen 
  } = props;

  const navWrapClassName = menuIsOpen ? 'nav-wrap nav-wrap_open' : 'nav-wrap';
  const closeStyle = {
    marginRight: scrollBarWidth + 'px'
  }

  return (
    <div className={navWrapClassName}>
      <div className='mobile-header'>
        <Close
          style={closeStyle}
          setState={setMenuIsOpen}
        />
      </div>
      <Menu isMobile={true} />
      <ContactsPage isMobile={true} />
    </div>
  );
}

export default MenuMobile;