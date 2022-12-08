import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/common/Header';
import NewsItem from '../components/news/NewsItem';

import './News.scss';
import '../components/news/NewsItem.scss';

const News = () => {
  const [newsList, setNewsList] = useState([]);

  const getNews = async () => {
    try {
      const res = await axios.get(
        `https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${process.env.REACT_APP_TIMES_API_KEY}`
      );
      setNewsList(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <>
      <Header type="news" link="/news">
        NEWS NOW
      </Header>
      <main className="main">
        <h2 className="sub-title">
          [New York Times] Up-to-the-minute Stream Of Published Articles
        </h2>

        <section className="news-section">
          <h2 className="visually-hidden">news</h2>
          <ul className="news-wrapper">
            {newsList.length > 0 ? (
              newsList.map((news: [], key: number) => (
                <NewsItem data={news} key={key} />
              ))
            ) : (
              <p>Loading...</p>
            )}
          </ul>
        </section>
      </main>
    </>
  );
};

export default News;
