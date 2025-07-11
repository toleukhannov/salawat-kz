// libraries
import { type FC, type ReactNode } from 'react';

type ButtonProps = {
  subClass?: string;
  children?: ReactNode;
  onClick?: () => void;
};

const Button: FC<ButtonProps> = ({ subClass, children }) => {
  return <button className={`button ${subClass}`}>{children}</button>;
};

export default Button;
