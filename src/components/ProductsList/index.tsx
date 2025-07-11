import React from 'react';
// components
import ProductsListItem from 'components/ProductsList/Item';

const ProductsList = () => {
  return (
    <div className="container products-list">
      <ProductsListItem/>
      <ProductsListItem/>
      <ProductsListItem/>
      <ProductsListItem/>
    </div>
  );
};

export default ProductsList;