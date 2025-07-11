import React, { type FC } from 'react';

type ButtonProps = {
  subClass?: string;
  children?: React.ReactNode;
};

const Button: FC<ButtonProps> = ({ subClass, children }) => {
  return <button className={`button ${subClass}`}>{children}</button>;
};

export default Button;
