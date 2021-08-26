import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Menu.css';

function Menu({ isMobile }) {
  const location = useLocation().pathname;
  let className,
      menuItemClassName,
      menuItemsContent;

  if (isMobile) {
    className = 'nav nav_screen_small';
    menuItemClassName = 'nav__item nav__item_screen_small';
    menuItemsContent = {
      '/': 'Обо мне',
      '/portfolio': 'Портфолио',
      '/resume': 'Резюме',
    };
  } else {
    className = 'nav';
    menuItemClassName = 'nav__item';
    menuItemsContent = {
      '/portfolio': 'Портфолио',
      '/resume': 'Резюме',
    };
  }

  return (
    <ul className={className}>
      {
        Object.entries(menuItemsContent).map((item, index) => {
          if (location === item[0]) return (
            <li
              key={index}
              className={menuItemClassName}
            >
              {item[1]}
            </li>
          );

          return (
            <li
              key={index}
              className={menuItemClassName}
            >
              <Link to={item[0]}>{item[1]}</Link>
            </li>
          );
        })
      }
    </ul>
  );
}

export default Menu;