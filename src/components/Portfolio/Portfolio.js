import React from 'react';

import Header from '../Header/Header';
import Copyright from '../Copyright/Copyright';
import Card from '../Card/Card';
import AnchorNav from '../Anchor-nav/Anchor-nav';
import Up from '../Up/Up';

import { useSetTitle } from '../../hooks/use-set-title';
import { useScrollUp } from '../../hooks/scroll-up';

import '../Card/Card.css';

function Portfolio() {
  useSetTitle('Олег Петько – портфолио');
  useScrollUp();

  return (
    <>
      <Header />
      <div className='page-wrap'>
        <h1>Портфолио</h1>
        <AnchorNav />
        <div id='feedsreader' className='anchor-nav-wrapper'>
          <Card>
            <a
              href='https://feedsreader-client.herokuapp.com'
              target='_blank'
              rel='noopener noreferrer'
              className='card__a card__a_size_big'
            >
              Feedsreader
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
        </div>
        <div id='unicredit' className='anchor-nav-wrapper'>
          <Card>
            <a
              href='https://creditagregator.vercel.app'
              target='_blank'
              rel='noopener noreferrer'
              className='card__a card__a_size_big'
            >
              Unicredit
            </a>
            <p className='card__p'>
              Прототип сервиса по&nbsp;подбору кредитов на&nbsp;приобретаемые товары.
            </p>
            <a
              href='https://github.com/odivus/unicredit'
              target='_blank'
              rel='noopener noreferrer'
              className='card__a card__a_size_medium'
            >
              Исходный код на&nbsp;GitHub
            </a>
            <h6 className='card__h6'>Стек</h6>
            <p className='card__p'>
              Next.js, TypeScript, MongoDB, Mongoose, Scss&nbsp;BEM, Materialize, lottie.
            </p>
            <h6 className='card__h6'>Возможности прототипа</h6>
            <p className='card__p card__p_first'>
              Сервис позволяет оформить заявку на&nbsp;получение кредита у&nbsp;банков-партнеров на&nbsp;общую сумму выбранных товаров из&nbsp;разных категорий.
            </p>
            <p className='card__p'>
              Пользователь может отложить оформление заявки на&nbsp;кредит, выбранные товары сохраняются.
            </p>
            <p className='card__p'>
              Кредитный калькулятор позволяет выбрать сумму ежемесячного платежа, определить сумму первого взноса и&nbsp;выбрать из&nbsp;предложенных вариантов банк с&nbsp;наиболее выгодными условиями.
            </p>
            <p className='card__p'>
              После оформления, заявка на&nbsp;кредит отправляется в&nbsp;выбранный пользователем банк, затем приходит уведомление о&nbsp;выдаче кредита. Заявка также может быть отклонена банком.
            </p>
            <p className='card__p'>
              Все заявки пользователя доступны в&nbsp;соответствующем разделе.
            </p>
            <p className='card__p'>
              Пользователь может редактировать личную информацию в&nbsp;своем профиле.
            </p>
            <h6 className='card__h6'>Демонстрация</h6>
            <Up />
          </Card>
        </div>
        <div id='spb%20global' className='anchor-nav-wrapper'>
          <Card>
            <a
              href='https://spbglobal.vercel.app'
              target='_blank'
              rel='noopener noreferrer'
              className='card__a card__a_size_big'
            >
              SPB&nbsp;Global
            </a>
            <p className='card__p'>
              Сайт вымышленного венчурного фонда.
            </p>
            <a
              href='https://github.com/odivus/spbglobal'
              target='_blank'
              rel='noopener noreferrer'
              className='card__a card__a_size_medium'
            >
              Исходный код на&nbsp;GitHub
            </a>
            <h6 className='card__h6'>Стек</h6>
            <p className='card__p'>
              React, React Router, React Hook Form, Javascript, Scss BEM, GSAP (ScrollTrigger).
            </p>
            <h6 className='card__h6'>Демонстрация</h6>
            <Up />
          </Card>
        </div>
        <div id='unit%20converter' className='anchor-nav-wrapper'>
          <Card>
            <a
              href='http://odivus-unitconverter.herokuapp.com'
              target='_blank'
              rel='noopener noreferrer'
              className='card__a card__a_size_big'
            >
              Unit Converter
            </a>
            <p className='card__p'>
              Конвертер международных величин.
            </p>
            <a
              href='https://github.com/odivus/unitconverter'
              target='_blank'
              rel='noopener noreferrer'
              className='card__a card__a_size_medium'
            >
              Исходный код на&nbsp;GitHub
            </a>
            <h6 className='card__h6'>Стек</h6>
            <p className='card__p'>
              React, React Router, Javascript, Css.
            </p>
            <h6 className='card__h6'>Демонстрация</h6>
            <Up />
          </Card>
        </div>
        <Copyright />
      </div>
    </>
  );
}

export default Portfolio;
