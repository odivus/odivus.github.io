import React from 'react';
import './Anchor-nav.css';

const navItems = [
  'Feedsreader',
  'Unicredit',
  'SPB Global',
  'Unit Converter',
];

function AnchorNav() {
  return (
    <div className='anchor-nav-wrap'>
      <div className='anchor-nav'>
        {
          navItems.map((item, index) => {
            const str = item.split(' ').join('').toLowerCase();
            return (
            <a 
              key={index}
              href={`#${str}`}
              className='anchor-nav__item' 
            >
              {item}
            </a>
            )}
          )
        }
      </div>
    </div>
  );
}

export default AnchorNav;
