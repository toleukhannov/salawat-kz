// libraries
import { type FC, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
// components
import HomePage from 'components/HomePage';
import { getCart } from 'utilities/cartStorage';
import CartButton from 'components/CartButton';

registerLocale('ru', ru);

const App: FC = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const updateCartState = () => {
      const cart = getCart();
      setShow(cart.length > 0);
    };

    updateCartState();

    window.addEventListener('cart-updated', updateCartState);

    return () => {
      window.removeEventListener('cart-updated', updateCartState);
    };
  }, []);

  return (
    <BrowserRouter>
      <HomePage />
      {show && <CartButton />}
    </BrowserRouter>
  );
};

export default App;
