import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header/Header';
import Copyright from '../Copyright/Copyright';
import Card from '../Card/Card';
import Up from '../Up/Up';

import '../Card/Card.css';

function Portfolio() {
  return (
    <>
      <Header />
      <div className='page-wrap'>
        <h1>Портфолио</h1>
        <Card>
          <a
            href='https://feedsreader-client.herokuapp.com'
            target='_blank'
            rel='noopener noreferrer'
            className='card__a card__a_size_big'
          >
            Feedsreader
          </a>
          <a 
            href='#feedsreader' 
            className='card__anchor'
          >
            &nbsp;
          </a>
          <p className='card__p'>
            Приложение для чтения rss-фидов.
          </p>
          <h6 className='card__h6'>Исходный код на&nbsp;GitHub</h6>
          <a
            href='https://github.com/odivus/feedsreader-client'
            target='_blank'
            rel='noopener noreferrer'
            className='card__a card__a_block'
          >
            Клиентская часть
          </a>
          <a
            href='https://github.com/odivus/feedsreader-server'
            target='_blank'
            rel='noopener noreferrer'
            className='card__a card__a_block'
          >
            Серверная часть
          </a>
          <h6 className='card__h6'>Стек</h6>
          <p className='card__p'>
            React, React&nbsp;Router, Redux, Redux&nbsp;Thunk, Firebase, Javascript, Css&nbsp;BEM.
          </p>
          <h6 className='card__h6'>Возможности приложения</h6>
          <ol className='card__ol'>
            <li>
              Регистрация, аутентификация пользователя.
            </li>
            <li>
              Добавление, редактирование, удаление rss-фидов.
            </li>
            <li>
              Настройка внешнего вида приложения:
              <ul className='card__ul'>
                <li>Светлая и темная темы.</li>
                <li>
                  Три режима отображения rss-фидов: &laquo;Карточки&raquo;, &laquo;Заголовки&raquo;, &laquo;Журнал&raquo;.
                </li>
              </ul>
            </li>
            <li>
              Выбор отображаемых rss-фидов (один источник или все)
            </li>
            <li>
              Добавление rss-фида в&nbsp;&laquo;Избранное&raquo;.
            </li>
            <li>
              Управление разделом Избранное:
              <ul className='card__ul'>
                <li>Удаление rss-фидов по&nbsp;одному.</li>
                <li>Удаление всех rss-фидов.</li>
              </ul>
            </li>
            <li>
              Доступность для чтения полного текста rss-фида, даже если сервер полный текст в&nbsp;rss-формате не&nbsp;предоставляет (большинство серверов предоставляют только фрагменты текста и&nbsp;заголовки).
            </li>
            <li>
              Переход по&nbsp;полным текстам rss-фида во&nbsp;время чтения, например, вперед&nbsp;&ndash; &laquo;новее&raquo; по&nbsp;дате, назад&nbsp;&ndash; &laquo;старее&raquo; по&nbsp;дате.
            </li>
          </ol>
          <h6 className='card__h6'>Демонстрация</h6>
          <Up />
        </Card>
        <Copyright />
      </div>
    </>
  );
}

export default Portfolio;
