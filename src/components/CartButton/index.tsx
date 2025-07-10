// libraries
import { type FC, useMemo } from 'react';
import { useSelector } from 'react-redux';
// static
import ShoppingIcon from 'assets/icons/shoppingFilled.svg?react';
// store
import { useGetProductsQuery } from 'store/services/product/productApi';
import { selectCartItems } from 'store/slices/cartSlice';
// helpers
import { formatPrice } from 'helpers/formatPrice';

interface CartButtonProps {
  onOpenOrder: () => void;
}

const CartButton: FC<CartButtonProps> = ({ onOpenOrder }) => {
  const cartItems = useSelector(selectCartItems);
  const { data: products = [] } = useGetProductsQuery();

  const totalCartPrice = useMemo(() => {
    return cartItems.reduce((sum, cartItem) => {
      const product = products.find((p) => p.itemId === cartItem.itemId);
      const price = product?.sizes?.[0]?.price || 0;
      return sum + price * cartItem.quantity;
    }, 0);
  }, [cartItems, products]);

  return (
    <div className="container cart-btn-wrapper">
      <button className="to-cart-btn" onClick={onOpenOrder}>
        <ShoppingIcon />В корзину - {formatPrice(totalCartPrice)}
      </button>
    </div>
  );
};

export default CartButton;
