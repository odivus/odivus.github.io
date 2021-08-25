import React from 'react';
import { useEscKeyListener } from '../../../hooks/use-esckey-listener';

import close from '../../../assets/icons/close.svg';
import './Close.css';

function Close({ setState }) {
  useEscKeyListener(setState, false);
  return (
    <img 
      src={close} 
      alt='Close'
      className='close'
      onClick={() => setState(false)}
    />
  );
}

export default Close;
