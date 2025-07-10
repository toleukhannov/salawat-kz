// libraries
import { type FC } from 'react';
// components
import Header from 'components/Header';
import ProductsList from 'components/ProductsList';

const HomePage: FC = () => {
  return (
    <>
      <Header />
      <ProductsList />
    </>
  );
};

export default HomePage;
