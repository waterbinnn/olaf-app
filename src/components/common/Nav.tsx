import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Nav.scss';

const Nav = () => {
  const location = useLocation();
  const [path, setPath] = useState('');

  useEffect(() => {
    if (location.pathname === '/') {
      setPath('/');
    } else if (location.pathname === '/todolist' || '/addTodo' || '/editTodo') {
      setPath('/todolist');
    } else {
      setPath('/news');
    }
  }, [location]);

  return (
    <footer className="footer">
      <nav className="nav-container">
        <ul className="nav-wrapper">
          <li className={path === '/todolist' ? 'nav-item active' : 'nav-item'}>
            <Link to={'todolist'}>TODO</Link>
          </li>
          <li className={path === '/' ? 'nav-item active' : 'nav-item'}>
            <Link to={'/'}>HOME</Link>
          </li>
          <li className={path === '/news' ? 'nav-item active' : 'nav-item'}>
            <Link to={'news'}>NEWS</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Nav;
