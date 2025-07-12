import type { FC } from 'react';

type QuantityControlProps = {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
};

const QuantityControl: FC<QuantityControlProps> = ({ quantity, onIncrease, onDecrease }) => (
  <div className="quantity-control">
    <button onClick={onDecrease}>-</button>
    <span>{quantity}</span>
    <button onClick={onIncrease}>+</button>
  </div>
);
export default QuantityControl;
