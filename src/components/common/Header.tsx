import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Header.scss';

type HeaderType = {
  type: string;
  link: string;
  children: React.ReactNode;
};

const Header = (props: HeaderType) => {
  const { children, type, link } = props;
  const navigate = useNavigate();

  return (
    <header className="header-container">
      {type === 'todo' ? (
        <>
          <button type="button" onClick={() => navigate(-1)}>
            {'<'}
          </button>
          <h1>
            <Link to={link}>{children}</Link>
          </h1>
        </>
      ) : (
        <h1>
          <Link to={link}>{children}</Link>
        </h1>
      )}
    </header>
  );
};

export default Header;
