import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header/Header';
import Copyright from '../Copyright/Copyright';
import Card from '../Card/Card';

function Resume() {
  return (
    <>
      <Header />
      <div className='page-wrap'>
        <h1>Резюме</h1>
        <h6>Middle React frontend разработчик</h6>
        <p className='text-center'>
          Смотреть на&nbsp; 
          <a
            href='https://github.com/odivus'
            target='_blank'
            rel='noopener noreferrer'
          >
            Google&nbsp;Docs
          </a>
          <br />
          Скачать PDF, Word
        </p>
        <div className='content'>
          <h3>Frontend разработчик</h3>
          <p>
            <i className='text-marker'>
              Август 2019&nbsp;&ndash; настоящее время
            </i>
          </p>
          <p>
            Как frontend-разработчик создал <b>4</b>&nbsp;персональных проекта:
          </p>
          <Card>
            <a 
              href='https://feedsreader-client.herokuapp.com'
              target='_blank'
              rel='noopener noreferrer'
              className='card__a card__a_size_big'
            >
              Feedsreader
            </a>
            <p className='card__p'>Приложение для чтения rss-фидов.</p>
            <h6 className='card__h6'>Исходный код на&nbsp;GitHub</h6>
            <a
              href='https://github.com/odivus/feedsreader-client'
              target='_blank'
              rel='noopener noreferrer'
              className='card__a'
            >
              Клиентская часть
           </a>
            <a
              href='https://github.com/odivus/feedsreader-server'
              target='_blank'
              rel='noopener noreferrer'
              className='card__a'
            >
              Серверная часть
           </a>
            <h6 className='card__h6'>Стек</h6>
            <p className='card__p'>
              React, React&nbsp;Router, Redux, Redux&nbsp;Thunk, Firebase, Javascript, Css&nbsp;BEM.
            </p>
            <Link
              to='/portfolio'
              className='card__a card__a_size_medium'
            >
              Подробнее
            </Link>
          </Card>
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
            <Link
              to='/portfolio'
              className='card__a card__a_size_medium'
            >
              Подробнее
            </Link>
          </Card>
          <Card>
            <a 
              href='https://spbglobal.vercel.app'
              target='_blank'
              rel='noopener noreferrer'
              className='card__a card__a_size_big'
            >
              SPB Global
            </a>
            <p className='card__p'>Сайт вымышленного венчурного фонда.</p>
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
              React, React&nbsp;Router, React Hook&nbsp;Form, Javascript, Scss&nbsp;BEM, GSAP (ScrollTrigger).
            </p>
            <Link
              to='/portfolio'
              className='card__a card__a_size_medium'
            >
              Подробнее
            </Link>
          </Card>
          <Card>
            <a 
              href='http://odivus-unitconverter.herokuapp.com'
              target='_blank'
              rel='noopener noreferrer'
              className='card__a card__a_size_big'
            >
              Unitconverter
            </a>
            <p className='card__p'>Конвертер международных величин.</p>
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
              React, React&nbsp;Router, Javascript, Css
            </p>
            <Link
              to='/portfolio'
              className='card__a card__a_size_medium'
            >
              Подробнее
            </Link>
          </Card>
          <h3>Студия Артемия Лебедева</h3>
          <p>
            <i className='text-marker'>
              Июль 2014&nbsp;&ndash; Ноябрь 2016 (2&nbsp;года и&nbsp;5&nbsp;месяцев)
            </i>
          </p>
          <p>
            <i className='text-marker'>
              Август 2005&nbsp;&ndash; Июнь 2011 (5&nbsp;лет и&nbsp;11&nbsp;месяцев)
            </i>
          </p>
          <p>
            В&nbsp;студии Лебедева удаленно работал техническим дизайнером.
          </p>
          <p>
            <a
              href='https://www.artlebedev.ru/petko'
              target='_blank'
              rel='noopener noreferrer'
            >
              Портфолио в&nbsp;студии Лебедева
            </a>
          </p>
          <p>
            В&nbsp;разных командах студии работал над новыми проектами и&nbsp;занимался поддержкой уже существующих для таких компаний как:
          </p>
          <p>
            Яндекс, Microsoft, Samsung, Газпром, HP, TNK-BP, Киевстар, Рамблер, Альфа-Банк, банк&nbsp;Аваль и&nbsp;т.&nbsp;д.
          </p>
          <p>
            В&nbsp;мои обязанности технического дизайнера входило:
          </p>
          <ul>
            <li>
              Создание рекламных баннеров для веб,
            </li>
            <li>
              Создание макетов отдельных страниц сайтов,
            </li>
            <li>
              Создание иконок, пиктограмм, иллюстраций для веб,
            </li>
            <li>
              Фото-ретушь,
            </li>
            <li>
              Создание графики для печати (редко),
            </li>
            <li>
              HTML-верстка (редко),
            </li>
            <li>
              Специфические задачи по&nbsp;автоматизации рутинных графических действий.
            </li>
          </ul>
          <h6>Благодарственные письма от&nbsp;компании Газпром</h6>
          <p>
            <a
              href='https://www.artlebedev.ru/studio/documents/gazprom-2015'
              target='_blank'
              rel='noopener noreferrer'
            >
              Gazprom-2015
            </a>
          <br />
            <a
              href='https://www.artlebedev.ru/studio/documents/gazprom-2015-pr'
              target='_blank'
              rel='noopener noreferrer'
            >
              Gazprom-2015-pr
            </a>
          </p>
          <h3>Wonderkid Studio</h3>
          <a
            href='https://www.upwork.com/o/companies/~0101aac0fcaa2cdd21'
            target='_blank'
            rel='noopener noreferrer'
          >
            Профиль студии на&nbsp;Upwork
          </a>
          <p>
            <i className='text-marker'>
              Февраль 2004&nbsp;&ndash; Июнь 2005 (1&nbsp;год и&nbsp;5&nbsp;месяцев)
            </i>
          </p>
          <p>
            Создавал веб-дизайн, иллюстрации для сайтов зарубежных заказчиков
            из&nbsp;США и&nbsp;Европы. Основное время работал удаленно, иногда собирались в&nbsp;офисе для обсуждения проектов.
          </p>
          <h3>Конфедерация независимых профсоюзов Украины</h3>
          <p>
            <i className='text-marker'>
              Январь 2004&nbsp;&ndash; Ноябрь 2005 (11&nbsp;месяцев)
            </i>
          </p>
          <p>
            Работал удаленно над сайтом Конфедерации Независимых профсоюзов Украины в&nbsp;качестве веб-разработчика.
          </p>

          <p>
            Разработал сайт и&nbsp;систему управления контентом, которая позволяла добавлять, редактировать и&nbsp;удалять новости и&nbsp;публикации для соответствующих разделов сайта.
          </p>

          <p>
            Дизайн, верстку и&nbsp;программирование, все реализовал самостоятельно. Сайт успешно проработал около 3-х лет, затем заказчик заказал новую версию в&nbsp;веб-студии.
          </p>
          <h6 className='h6-resume'>Стек</h6>
          <p>PHP, MySQL, HTML, CSS</p>
        </div>
        <Copyright />
      </div>
    </>
  );
}

export default Resume;
