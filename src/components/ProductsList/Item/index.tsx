// libraries
import { type FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// components
import QuantityControl from 'components/shared/QuantityControl';
// static
import ShoppingIcon from 'assets/icons/shopping.svg?react';
// store
import { addToCart, removeFromCart, selectCartItemQuantity } from 'store/slices/cartSlice';
// helpers
import { formatPrice } from 'helpers/formatPrice';

type ProductsListItemProps = {
  id: number;
  imgUrl: string;
  price: number;
  name: string;
  itemId: string;
};

const ProductsListItem: FC<ProductsListItemProps> = ({ imgUrl, price, name, itemId }) => {
  const dispatch = useDispatch();
  const quantity = useSelector(selectCartItemQuantity(itemId));

  const handleIncrease = () => {
    dispatch(addToCart(itemId));
  };

  const handleDecrease = () => {
    dispatch(removeFromCart(itemId));
  };

  const handleAddToCart = () => {
    dispatch(addToCart(itemId));
  };

  return (
    <div className="card">
      <div>
        <img alt="Изображение товара" className="card-img" src={imgUrl} />
        <p className="card-price">{formatPrice(price)}</p>
        <p className="card-title">{name}</p>
      </div>

      {quantity > 0 ? (
        <QuantityControl
          subClass={'quantity-card'}
          quantity={quantity}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
        />
      ) : (
        <button className={'button shopping-btn'} onClick={handleAddToCart}>
          <ShoppingIcon />
          Добавить
        </button>
      )}
    </div>
  );
};

export default ProductsListItem;
