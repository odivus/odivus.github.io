import React from 'react';
import { useEscKeyListener } from '../../../hooks/use-esckey-listener';

import close from '../../../assets/icons/close.svg';
import './Close.css';

function Close({ setState, style }) {
  useEscKeyListener(setState, false);
  return (
    <img 
      src={close} 
      alt='Close'
      className='close'
      style={style}
      onClick={() => setState(false)}
    />
  );
}

export default Close;
