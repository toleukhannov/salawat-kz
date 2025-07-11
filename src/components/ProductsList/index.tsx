// components
import ProductsListItem from 'components/ProductsList/Item';
// rtk query
import { useGetProductsQuery } from 'store/services/product/productApi';
import { useState } from 'react';
import CategoryTabs from '../CategoryTabs';

const ProductsList = () => {
  const [categoryId, setCategoryId] = useState<string | null>(
    'c1af01bc-2123-4d55-b5e2-4d02c8c9bc33',
  );
  const { data: products, isLoading } = useGetProductsQuery();

  if (isLoading) return <div>Загрузка...</div>;

  const filtered = categoryId ? products.filter((p) => p.categoryUUID === categoryId) : products;

  return (
    <>
      <CategoryTabs onSelect={setCategoryId} />
      <div className="container products-list">
        {filtered.map((product) => (
          <ProductsListItem
            key={product.id}
            id={product.id}
            imgUrl={product.imageUrl}
            name={product.name}
            price={product.sizes[0].price}
            itemId={product.itemId}
          />
        ))}
      </div>
    </>
  );
};

export default ProductsList;
