// libraries
import type { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
// components
import Header from 'components/Header';
import ProductsList from './ProductsList';
import ModalHeader from './shared/ModalHeader';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <ProductsList />
      <ModalHeader title={'Состав заказа'} />
    </BrowserRouter>
  );
};

export default App;
