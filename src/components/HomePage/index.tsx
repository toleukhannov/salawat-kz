import { type FC } from 'react';
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
