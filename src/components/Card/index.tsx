// libraries
import React from 'react';
// components
import Button from 'components/shared/Button';
// static
import ShoppingIcon from 'assets/icons/shopping.svg?react';

const Card = () => {
  return (
    <div className="card">
      <img alt="Изображение товара" className="card-img" />
      <p className="price">price</p>
      <p className="card-title">Куырдак из говядины</p>
      <Button subClass={'shopping-btn'}>
        <ShoppingIcon />
        Добавить
      </Button>
    </div>
  );
};

export default Card;
