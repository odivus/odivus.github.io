import React from 'react';
import './Copyright.css';

function Copyright() {
  const yearNow = new Date().getFullYear();
  return (
    <div className='copyright'>
      &copy;&nbsp;2021&ndash;{yearNow} Олег&nbsp;Петько
    </div>
  );
}

export default Copyright;
