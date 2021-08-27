import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header/Header';
import Copyright from '../Copyright/Copyright';
import alek from '../../assets/img/alek.jpg';
import github from '../../assets/icons/github.svg';

function Main() {
  return (
    <>
      <Header />
      <div className='page-wrap'>
        <div className='odivus-photo'>
          <img src={alek} alt='odivus' className='odivus-photo__img' />
        </div>
        <h1>Олег Петько</h1>
        <h6>Middle React frontend разработчик</h6>
        <div className='github-logo-link'>
          <a
            href='https://github.com/odivus'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={github}
              alt='Github logo'
              className='github-logo'
            />
          </a>
          <a
            href='https://github.com/odivus'
            target='_blank'
            rel='noopener noreferrer'
          >
            github.com/odivus
          </a>
        </div>
        <h2>Опыт работы</h2>
        <p><b>React</b>&nbsp;&ndash; <b>2</b>&nbsp;года</p>
        <p className='text-center'>
          <b>4</b>&nbsp;персональных проекта в&nbsp;
          <Link to='/portfolio'>портфолио</Link>
        </p>
        <h2>Навыки</h2>
        <div className='content'>
          <h4>Frontend</h4>
          <ul>
            <li>JavaScript (ES6+), TypeScript</li>
            <li>ReactJS, NextJS</li>
            <li>Redux, Redux Saga, Redux Thunk, Reselect</li>
            <li>React Hook Form, Formik</li>
            <li>SCSS Sass, Less, PostCSS, BEM</li>
            <li>Material UI, Materialize, Twitter Bootstrap</li>
            <li>Webpack, Parcel, Gulp</li>
            <li>React Testing Library, Jest, Enzyme</li>
          </ul>
          <h4>Backend</h4>
          <ul>
            <li>NodeJs, Express</li>
            <li>MongoDB, Mongoose</li>
            <li>GraphQL</li>
            <li>WebSocket, WebRTC, Socket.io</li>
          </ul>
          <h4>Верстка</h4>
          <ul>
            <li>Адаптивная, кроссбраузерная верстка любой сложности</li>
          </ul>
          <h4>Дизайн</h4>
          <ul>
            <li>UI/UX</li>
            <li>Веб-дизайн</li>
            <li>Графический дизайн</li>
            <li>Любая графика (векторная, растровая), рекламные баннеры, иллюстрации, иконки</li>
          </ul>
        </div>
        <Copyright />
      </div>
    </>
  );
}

export default Main;
