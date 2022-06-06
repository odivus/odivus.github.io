import React from 'react';
import { HashLink } from 'react-router-hash-link';

import Header from '../Header/Header';
import Copyright from '../Copyright/Copyright';
import Card from '../Card/Card';
import Message from '../Message/Message';

import { useSetTitle } from '../../hooks/use-set-title';
import { useScrollUp } from '../../hooks/use-scroll-up';

function Resume() {
  useSetTitle('Олег Петько – резюме');
  useScrollUp();

  return (
    <>
      <Header />
      <div className='page-wrap'>
        <h1>Резюме</h1>
        <h6 className='text-center'>Middle React frontend-разработчик</h6>
        <p className='text-center p-download'>
          Смотреть на&nbsp; 
          <a
            href='https://docs.google.com/document/d/1poA6SnxQUpeotgc7Ns9NC7-UABcp2eY9F5fmCs0DFlg/edit?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
          >
            Google&nbsp;Docs
          </a>
          <br />
          Скачать <a
            href='https://disk.yandex.com/i/7kquavmOZI1KhQ'
            target='_blank'
            rel='noopener noreferrer'
            >
            PDF
          </a>
        </p>
        <div className='content'>
          <div className='content-wrap'>
            <h3>EANLights</h3>
            <p className='p-marker'>
              <i className='text-marker'>
                Январь 2020&nbsp; &ndash; Март 2022 (2&nbsp;года и&nbsp;3&nbsp;месяца)
              </i>
            </p>
            <p className='p-first'>
              Удаленно работал frontend-разработчиком в&nbsp; международной голландской компании (аутстаффинг), которая занимается оптовой продажей и&nbsp;арендой светового оборудования.
            </p>
            <p className='p-first'>
              В мои обязанности frontend-разработчика входило:
            </p>
            <ul>
              <li>
                Разработка и поддержка корпоративного веб-приложения для партнеров и&nbsp;клиентов компании;
              </li>
              <li>
                Создание рекламных одностраничных сайтов для продвижения бизнеса компании и привлечения новых клиентов;
              </li>
              <li>
                Проектирование архитектурных решений клиентского приложения;
              </li>
              <li>
                Участие в декомпозиции проектных задач;
              </li>
              <li>
                Оптимизация производительности клиентского кода;
              </li>
              <li>
                Написание юнит-тестов;
              </li>
              <li>
                Проведение Code Review.
              </li>
            </ul>
            <h3 className='h3-first'>Персональные проекты</h3>
            <p className='p-marker'>
              <i className='text-marker'>
                Август 2019&nbsp;&ndash; настоящее время
              </i>
            </p>
            <p className='p-first'>
              Как frontend-разработчик создал <b>4</b>&nbsp;персональных проекта:
            </p>
          </div>
          <div id='feedsreader' className='id-block-first'>&nbsp;</div>
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
            <Message />
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
            <HashLink
              to='/portfolio#feedsreader'
              className='card__a card__a_size_medium'
            >
              Подробнее
            </HashLink>
          </Card>
          <div id='unicredit' className='id-block'>&nbsp;</div>
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
            <HashLink
              to='/portfolio#unicredit'
              className='card__a card__a_size_medium'
            >
              Подробнее
            </HashLink>
          </Card>
          <div id='spbglobal' className='id-block'>&nbsp;</div>
          <Card>
            <a 
              href='https://spbglobal.vercel.app'
              target='_blank'
              rel='noopener noreferrer'
              className='card__a card__a_size_big'
            >
              SPB Global
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
              React, React&nbsp;Router, React Hook&nbsp;Form, Javascript, Scss&nbsp;BEM, GSAP (ScrollTrigger).
            </p>
            <HashLink
              to='/portfolio#spbglobal'
              className='card__a card__a_size_medium'
            >
              Подробнее
            </HashLink>
          </Card>
          <div id='unitconverter' className='id-block'>&nbsp;</div>
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
              React, React&nbsp;Router, Javascript, Css.
            </p>
            <HashLink
              to='/portfolio#unitconverter'
              className='card__a card__a_size_medium'
            >
              Подробнее
            </HashLink>
          </Card>
          <div className='content-wrap'>
            <h3>Студия Артемия Лебедева</h3>
            <p className='p-marker'>
              <i className='text-marker'>
                Июль 2014&nbsp;&ndash; Ноябрь 2016 (2&nbsp;года и&nbsp;5&nbsp;месяцев)
              </i>
            </p>
            <p className='p-marker'>
              <i className='text-marker'>
                Август 2005&nbsp;&ndash; Июнь 2011 (5&nbsp;лет и&nbsp;11&nbsp;месяцев)
              </i>
            </p>
            <a
              href='https://www.artlebedev.ru/petko'
              target='_blank'
              rel='noopener noreferrer'
            >
              Портфолио в&nbsp;студии Лебедева
            </a>
            <p className='p-first'>
              В&nbsp;студии Лебедева удаленно работал техническим дизайнером.
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
                Создание рекламных баннеров для веб;
              </li>
              <li>
                Создание макетов отдельных страниц сайтов;
              </li>
              <li>
                Создание иконок, пиктограмм, иллюстраций для веб;
              </li>
              <li>
                Фото-ретушь;
              </li>
              <li>
                Создание графики для печати (редко);
              </li>
              <li>
                HTML-верстка (редко);
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
                className='a-content-links'
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
            <p className='p-marker'>
              <i className='text-marker'>
                Февраль 2004&nbsp;&ndash; Июнь 2005 (1&nbsp;год и&nbsp;5&nbsp;месяцев)
              </i>
            </p>
            <p className='p-first'>
              В Wonderkid Studio создавал веб-дизайн, иллюстрации для заказчиков из&nbsp;США и&nbsp;Европы. Основное время работал удаленно, иногда собирались в&nbsp;офисе для обсуждения проектов.
            </p>
            <h3>Конфедерация независимых профсоюзов Украины</h3>
            <p className='p-marker'>
              <i className='text-marker'>
                Январь 2004&nbsp;&ndash; Ноябрь 2005 (11&nbsp;месяцев)
              </i>
            </p>
            <p>
              В Конфедерации Независимых профсоюзов Украины работал удаленно над сайтом в&nbsp;качестве веб-разработчика.
            </p>
            <p>
              Разработал сайт и&nbsp;систему управления контентом, которая позволяла добавлять, редактировать и&nbsp;удалять новости и&nbsp;публикации для соответствующих разделов сайта.
            </p>
            <p>
              Дизайн, верстку и&nbsp;программирование реализовал самостоятельно. Сайт успешно проработал около 3-х лет, затем заказчик заказал новую версию в&nbsp;веб-студии.
            </p>
            <h6 className='h6-resume'>Стек</h6>
            <p>PHP, MySQL, HTML, CSS.</p>
            <h3>
              Восточноукраинский национальный университет имени В.&nbsp;И.&nbsp;Даля
            </h3>
            <p className='p-marker'>
              <i className='text-marker'>
                сентябрь 1996&nbsp;&ndash; июль 2001
              </i>
            </p>
            <h6 className='h6-resume'>Специальность</h6>
            <p>
              Организация перевозок и&nbsp;управление на&nbsp;промышленном транспорте.
            </p>
          </div>
        </div>
        <Copyright />
      </div>
    </>
  );
}

export default Resume;
