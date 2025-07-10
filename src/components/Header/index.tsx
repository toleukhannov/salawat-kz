// libraries
import type { FC } from 'react';
// static
import LogotypeSvg from 'assets/icons/logo.svg?react';

const Header: FC = () => {
  return (
    <header className="header">
      <nav>
        <LogotypeSvg />
      </nav>
    </header>
  );
};

export default Header;
