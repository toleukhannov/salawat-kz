// libraries
import type { FC } from 'react';
import { formatPrice } from 'helpers/formatPrice';
import QuantityControl from 'components/shared/QuantityControl';
import { addToCart, removeFromCart } from 'utilities/cartStorage';

type OrderListItemProps = {
  itemId: string;
  imgUrl: string;
  title: string;
  price: number;
  weight: number;
  quantity: number;
};

const OrderListItem: FC<OrderListItemProps> = ({ itemId, imgUrl, title, price, quantity }) => {
  const handleIncrease = () => {
    addToCart(itemId);
    window.dispatchEvent(new Event('cart-updated'));
  };

  const handleDecrease = () => {
    removeFromCart(itemId);
    window.dispatchEvent(new Event('cart-updated'));
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
