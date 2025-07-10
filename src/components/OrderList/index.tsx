// libraries
import { type FC } from 'react';
import { useSelector } from 'react-redux';
// components
import OrderListItem from 'components/OrderList/Item';
// store
import { selectCartItems } from 'store/slices/cartSlice';
import { useGetProductsQuery } from 'store/services/product/productApi';

const OrderList: FC = () => {
  const cartItems = useSelector(selectCartItems);
  const { data: products = [], isLoading, isError } = useGetProductsQuery();

  if (isLoading) return <div>Загрузка...</div>;
  if (isError) return <div>Ошибка загрузки продуктов</div>;

  const cartWithDetails = cartItems
    .map((item) => {
      const product = products.find((p) => p.itemId === item.itemId);
      if (!product) return null;
      return {
        ...item,
        title: product.name,
        price: product.sizes[0].price,
        imgUrl: product.imageUrl,
        weight: product.sizes[0].positionGrams,
      };
    })
    .filter(Boolean);

  return (
    <div className="order-list">
      {cartWithDetails.map((item) => (
        <OrderListItem
          key={item.itemId}
          itemId={item.itemId}
          imgUrl={item.imgUrl}
          title={item.title}
          price={item.price}
          weight={item.weight}
          quantity={item.quantity}
        />
      ))}
    </div>
  );
};

export default OrderList;
