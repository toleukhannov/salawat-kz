// libraries
import { type FC, useEffect, useState } from 'react';
// static
import ShoppingIcon from 'assets/icons/shoppingFilled.svg?react';
import { getCart } from '../../utilities/cartStorage';

const CartButton: FC = () => {
  const [totalQty, setTotalQty] = useState(0);

  useEffect(() => {
    const update = () => {
      const cart = getCart();
      const total = cart.reduce((sum, item) => sum + item.quantity, 0);
      setTotalQty(total);
    };

    update();

    window.addEventListener('cart-updated', update);
    return () => window.removeEventListener('cart-updated', update);
  }, []);

  return (
    <div className="container cart-btn-wrapper">
      <button className="to-cart-btn">
        <ShoppingIcon />В корзину - {totalQty}
      </button>
    </div>
  );
};

export default CartButton;
