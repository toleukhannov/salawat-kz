import { type FC } from 'react';

type QuantityControlProps = {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  subClass?: string;
};

const QuantityControl: FC<QuantityControlProps> = ({
  quantity,
  onIncrease,
  onDecrease,
  subClass,
}) => {
  return (
    <div className={`quantity-control ${subClass || ''}`}>
      <button className="count-btn" onClick={onDecrease}>
        -
      </button>
      <span className="count">{quantity}</span>
      <button className="count-btn" onClick={onIncrease}>
        +
      </button>
    </div>
  );
};

export default QuantityControl;
