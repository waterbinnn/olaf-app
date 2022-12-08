import React from 'react';
import Olaf from '../components/olaf/Olaf';
import Header from '../components/Header';

import { dateString, weekday } from '../common/date';

import './Home.scss';

const Home = () => {
  return (
    <>
      <Header type="home">OLAF!</Header>
      <main className="main">
        <p className="date">{dateString}</p>
        <p className="date-week">오늘은 {weekday}요일 이에요.</p>
        <Olaf />
        <form className="wish-form">
          <label htmlFor="text">오늘의 소원을 적어보세요.</label>
          <input type="text" id="text" />
          <button type="submit">🥕</button>
        </form>
        <div className="user-wish">
          <span>Your Wish</span>
          {/* 작성한 당일에만 나올 수 있게 구현 */}
          <p>회사에서 연락이 좀 왔으면 좋겠다 .. </p>
        </div>
      </main>
    </>
  );
};

export default Home;
