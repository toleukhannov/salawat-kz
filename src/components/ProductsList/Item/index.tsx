// libraries
import React from 'react';
// components
import Button from 'components/shared/Button';
// static
import ShoppingIcon from 'assets/icons/shopping.svg?react';

const ProductsListItem = () => {
  return (
    <div className="card">
      <img alt="Изображение товара" className="card-img" src="https://16a9564f-f8ec-42ba-a998-3027aa809e50.selstorage.ru/caravan-co-co/7009/images/items/6e739032b4129d03080ecd7cd8d18426.PNG" />
      <p className="card-price">2500 ₸</p>
      <p className="card-title">Куырдак из говядины</p>
      <Button subClass={'shopping-btn'}>
        <ShoppingIcon />
        Добавить
      </Button>
    </div>
  );
};

export default ProductsListItem;
