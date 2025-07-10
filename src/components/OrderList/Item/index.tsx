// libraries
import type { FC } from 'react';
import { useDispatch } from 'react-redux';
// helpers
import { formatPrice } from 'helpers/formatPrice';
// components
import QuantityControl from 'components/shared/QuantityControl';
// store
import { addToCart, removeFromCart } from 'store/slices/cartSlice';

type OrderListItemProps = {
  itemId: string;
  imgUrl: string;
  title: string;
  price: number;
  weight: number;
  quantity: number;
};

const OrderListItem: FC<OrderListItemProps> = ({ itemId, imgUrl, title, price, quantity }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    quantity++;
    dispatch(addToCart(itemId));
  };

  const handleDecrease = () => {
    dispatch(removeFromCart(itemId));
  };

  return (
    <div className="order-list-item">
      <div className="order-list-info">
        <img alt="Изображение предмета" className="item-image" src={imgUrl} />
        <div className="item-details">
          <p className="item-details-title">{title}</p>
          <span className="item-details-price">{formatPrice(price)}</span>
        </div>
      </div>
      <QuantityControl
        quantity={quantity}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />
    </div>
  );
};

export default OrderListItem;
