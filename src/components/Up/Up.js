import React from 'react';
import up from '../../assets/icons/up.svg';
import './Up.css';

function Up({ anchor }) {
  return (
    <div className='up'>
      <img src={up} alt='Up' className='up__item' />
    </div>
  );
}

export default Up;
