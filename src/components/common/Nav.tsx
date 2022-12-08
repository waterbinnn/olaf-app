import { Link } from 'react-router-dom';

import './Nav.scss';

const Nav = () => {
  return (
    <footer className="footer">
      <nav className="nav-container">
        <ul className="nav-wrapper">
          <li className="nav-item">
            <Link to={'addTodo'}>TODO</Link>
          </li>
          <li className="nav-item">
            <Link to={'/'}>HOME</Link>
          </li>
          <li className="nav-item">
            <Link to={'news'}>NEWS</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Nav;
