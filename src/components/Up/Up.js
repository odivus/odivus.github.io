import React from 'react';
import up from '../../assets/icons/up.svg';
import './Up.css';

function Up() {
  return (
    <div 
      className='up'
      onClick={() => window.scrollTo(0, 0)}
    >
      <img src={up} alt='Up' className='up__item' />
    </div>
  );
}

export default Up;
