// libraries
import type { FC } from 'react';

type OrderListItemProps = {
  imgUrl: string;
  title: string;
  price: number;
  weight: number;
};
const OrderListItem: FC<OrderListItemProps> = (props) => {
  return (
    <div className="order-list-item">
      <img alt="Изображение предмета" src={props.imgUrl} />
      <div className="item-details">
        <p className="item-details-title">{props.title}</p>
        <span className="item-details-price">{props.price}</span>
        <span className="item-details-weight">{props.weight}</span>
      </div>
    </div>
  );
};

export default OrderListItem;
