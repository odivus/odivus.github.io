import React from 'react';
import telegram from '../../assets/icons/telegram.svg';
import skype from '../../assets/icons/skype.svg';
import email from '../../assets/icons/email.svg';

import './Contacts.css';

function Contacts({ isMobile }) {
  const className = isMobile ? 'contacts-mobile' : 'contacts';

  return (
    <div className={className}>
      <img src={telegram} alt='Telegram' className='contacts__item' />
      <img src={skype} alt='Skype' className='contacts__item' />
      <img src={email} alt='Email' className='contacts__item' />
    </div>
  );
}

export default Contacts;
