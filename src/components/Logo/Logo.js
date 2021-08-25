import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/icons/logo.svg';
import './Logo.css';

function Logo() {
  const location = useLocation().pathname;

  if (location === '/') {
    return (
      <div className='logo logo_nolink'>
        <img 
          src={logo} 
          alt='odivus logo' 
          className='logo'
        />
      </div>
    );
  }

  return (
    <Link to='/'>
      <div className='logo logo_link'>
        <img
          src={logo}
          alt='odivus logo'
          className='logo'
        />
      </div>
    </Link>
  );
}

export default Logo;
