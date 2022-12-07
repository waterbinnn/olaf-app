import React from 'react';
import Olaf from '../components/olaf/Olaf';
import Header from '../components/Header';

import { dateString } from '../common/date';

import './Home.scss';

const Home = () => {
  return (
    <>
      <Header type="home">OLAF!</Header>
      <main className="main">
        <p className="date">{dateString}</p>
        <Olaf />
      </main>
    </>
  );
};

export default Home;
