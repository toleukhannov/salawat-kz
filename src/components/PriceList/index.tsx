// libraries
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
// components
import Button from 'components/shared/Button';
// store
import { selectCartItems } from 'store/slices/cartSlice';
import { useGetProductsQuery } from 'store/services/product/productApi';
// helpers
import { formatPrice } from 'helpers/formatPrice';
// config
import { DELIVERY_COST } from 'components/PriceList/config';
// static
import CardIcon from 'assets/icons/ion_card-outline.svg?react';

const PriceList = () => {
  const cartItems = useSelector(selectCartItems);
  const { data: products = [] } = useGetProductsQuery();

  const totalCartPrice = useMemo(() => {
    return cartItems.reduce((sum, cartItem) => {
      const product = products.find((p) => p.itemId === cartItem.itemId);
      const price = product?.sizes?.[0]?.price || 0;
      return sum + price * cartItem.quantity;
    }, 0);
  }, [cartItems, products]);

  const total = totalCartPrice + DELIVERY_COST;

  return (
    <>
      <div className="price-list">
        <div className="summary-row">
          <span>Корзина</span>
          <span className="summary-price">{formatPrice(totalCartPrice)}</span>
        </div>
        <div className="summary-row">
          <span>Доставка</span>
          <span className="summary-price">{formatPrice(DELIVERY_COST)}</span>
        </div>
        <div className="summary-row total">
          <span>Итого</span>
          <span className="summary-price">Перейти к оплате {formatPrice(total)}</span>
        </div>
      </div>
      <Button subClass="order-screen-btn">
        <CardIcon />
        Перейти к оплате {formatPrice(total)}
      </Button>
    </>
  );
};

export default PriceList;
