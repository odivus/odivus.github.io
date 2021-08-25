import React from 'react';
import Contacts from './Contacts';

import './Contacts.css';

function ContactsPage({ isMobile }) {
  return (
    <div className='contacts-page'>
      <h2 className='contacts-page__header'>
        На связи
      </h2>
      <Contacts isMobile={isMobile} />
    </div>
  );
}

export default ContactsPage;
