// libraries
import type { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
// components
import Header from 'components/Header';
import CategoryTabs from './CategoryTabs';
import ProductsList from './ProductsList';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <CategoryTabs/>
      <ProductsList/>
    </BrowserRouter>
  );
};

export default App;
