// libraries
import type { FC } from 'react';
import { Link } from 'react-router-dom';
// components
import Card from 'components/Card';
// static
import LogotypeSvg from 'assets/icons/logo.svg?react';
import profileImg from 'assets/icons/profile.svg';

const Header: FC = () => {
  return (
    <header className="header">
      <nav className="nav-container">
        <LogotypeSvg />
        <Link to={'/profile'}>
          <img alt="Профиль" src={profileImg} />
          <span>Войти</span>
        </Link>
      </nav>
      <Card></Card>
    </header>
  );
};

export default Header;
