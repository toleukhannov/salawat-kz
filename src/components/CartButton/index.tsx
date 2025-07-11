// libraries
import type { FC } from 'react';
// components
import Button from 'components/shared/Button';
// static
import ShoppingIcon from 'assets/icons/shopping.svg?react';

const CartButton: FC<{}> = () => {
  return (
    <Button subClass="to-cart-btn">
      <ShoppingIcon />В корзину - 5 000
    </Button>
  );
};

export default CartButton;
