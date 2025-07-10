// libraries
import type { FC } from 'react';
import { Link } from 'react-router-dom';
// components
import Banner from 'components/Banner';
// static
import LogotypeSvg from 'assets/icons/logo.svg?react';
import profileImg from 'assets/icons/profile.svg';

const Header: FC = () => {
  return (
    <header className="header">
      <nav className="container nav-container">
        <Link to={'/'}>
          <LogotypeSvg className="logo" />
        </Link>
        <Link className="profile-link" to={'/profile'}>
          <img alt="Профиль" src={profileImg} />
          <span>Нурболат</span>
        </Link>
      </nav>
      <Banner />
    </header>
  );
};

export default Header;
