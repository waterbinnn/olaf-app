import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Olaf from '../components/wish/Olaf';
import Header from '../components/common/Header';
import WishItem from '../components/wish/WishItem';
import { dateString, weekday } from '../common/date';
import { addWish } from '../redux/wishSlice';

import './Home.scss';

export interface WishStateType {
  wish: {
    wishList: string[];
  };
}

const Home = () => {
  const [wish, setWish] = useState('');

  const wishList = useSelector((state: WishStateType) => state.wish.wishList);
  const dispatch = useDispatch();

  const handleWish = () => {
    let date = new Date();
    let time = date.getTime();

    const wishItem = {
      id: time,
      wish: wish,
    };
    dispatch(addWish(wishItem));
  };

  return (
    <>
      <Header type="home" link="/">
        OLAF!
      </Header>
      <main className="main">
        <p className="date">{dateString}</p>
        <p className="date-week">오늘은 {weekday}요일 이에요.</p>
        <Olaf />
        <form className="wish-form" onSubmit={handleWish}>
          <label htmlFor="text">오늘의 소원을 적어보세요.</label>
          <input
            type="text"
            id="text"
            value={wish}
            onChange={(e) => setWish(e.target.value)}
          />
          <button type="submit">🥕</button>
        </form>
        <div className="user-wish">
          <>
            <span>Your Wish</span>
            {wishList.length > 0 &&
              wishList.map((data, key) => <WishItem data={data} key={key} />)}
          </>
        </div>
      </main>
    </>
  );
};

export default Home;
