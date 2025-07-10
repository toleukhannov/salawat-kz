import { type FC, useEffect, useState } from 'react';

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
  const [qt, setQt] = useState(quantity);

  useEffect(() => {
    const updateQt = () => {
      setQt(qt + 1);
    };

    window.addEventListener('cart-updated', updateQt);

    return () => {
      window.removeEventListener('cart-updated', updateQt);
    };
  }, []);
  return (
    <div className={`quantity-control ${subClass}`}>
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
