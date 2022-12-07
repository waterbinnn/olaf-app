import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Header.scss';

type HeaderType = {
  type: string;
  children: React.ReactNode;
};

const Header = (props: HeaderType) => {
  const { children, type } = props;

  return (
    <header className="header-container">
      {type !== 'home' ? (
        <>
          <button>{'<'}</button>
          <h1>
            <Link to="/">{children}</Link>
          </h1>
        </>
      ) : (
        <h1>
          <Link to="/">{children}</Link>
        </h1>
      )}
    </header>
  );
};

export default Header;
