import type { FC } from 'react';
// components
// static
import ShoppingIcon from 'assets/icons/shopping.svg?react';
// utilities
import { addToCart } from 'utilities/cartStorage';

type ProductsListItemProps = {
  id: number;
  imgUrl: string;
  price: number;
  name: string;
  itemId: string;
};

const ProductsListItem: FC<ProductsListItemProps> = ({ imgUrl, price, name, itemId }) => {
  const handleAdd = () => {
    addToCart(itemId);
  };

  return (
    <div className="card">
      <div>
        <img alt="Изображение товара" className="card-img" src={imgUrl} />
        <p className="card-price">{price.toLocaleString('ru-RU')}₸</p>
        <p className="card-title">{name}</p>
      </div>
      <button className={'button shopping-btn'} onClick={handleAdd}>
        <ShoppingIcon />
        Добавить
      </button>
    </div>
  );
};

export default ProductsListItem;
