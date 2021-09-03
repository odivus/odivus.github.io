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
          navItems.map((item, index) => (
            <a 
              key={index}
              href={`#${item.toLowerCase()}`} 
              className='anchor-nav__item' 
            >
              {item}
            </a>
            )
          )
        }
      </div>
    </div>
  );
}

export default AnchorNav;
