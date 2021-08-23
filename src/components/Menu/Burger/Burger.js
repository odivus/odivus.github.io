import React from 'react';
import burger from '../../../assets/icons/burger.svg';
import './Burger.css';

function Burger({ setState }) {
  return (
    <div
      className='burger'
      onClick={() => setState(true)}
    >
      {burger}
    </div>
  );
}

export default Burger;
