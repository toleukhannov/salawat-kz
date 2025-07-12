// libraries
import { type FC } from 'react';
import { getCart } from 'utilities/cartStorage';
import OrderListItem from 'components/OrderList/Item';
import { useGetProductsQuery } from '../../store/services/product/productApi';

const OrderList: FC = () => {
  const cart = getCart();

  const { data: products = [], isLoading, isError } = useGetProductsQuery();

  if (isLoading) return <div>Загрузка...</div>;
  if (isError) return <div>Ошибка загрузки продуктов</div>;

  const cartWithDetails = cart
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
    <div className="container order-list">
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
