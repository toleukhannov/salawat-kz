// libraries
import type { FC } from 'react';
// components
import Header from 'components/Header';
import { BrowserRouter } from 'react-router-dom';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <h1>Some Text</h1>
    </BrowserRouter>
  );
};

export default App;
