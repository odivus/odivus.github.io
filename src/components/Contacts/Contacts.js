import React from 'react';
import telegram from '../../assets/icons/telegram.svg';
import skype from '../../assets/icons/skype.svg';
import email from '../../assets/icons/email.svg';

import './Contacts.css';

function Contacts({ isMobile }) {
  const className = isMobile ? 'contacts-mobile' : 'contacts';

  return (
    <div className={className}>
      <a href='https://telegram.me/odivus' className='contacts__item'>
        <img src={telegram} alt='Telegram' />
      </a>
      <a href='skype:odivus?chat' className='contacts__item'>
        <img src={skype} alt='Skype' />
      </a>
      <a href='mailto:odivus@gmail.com' className='contacts__item'>
        <img src={email} alt='Email' />
      </a>
    </div>
  );
}

export default Contacts;
