import React from 'react';
import { useEscKeyListener } from '../../../hooks/use-esckey-listener';

import close from '../../../assets/icons/close.svg';
import './Close.css';

function Close({ setState }) {
  useEscKeyListener(setState, false);

  return (
    <div 
      className='close'
      onClick={() => setState(false)}
    >
      {close}
    </div>
  );
}

export default Close;
