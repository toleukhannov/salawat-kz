// libraries
import { type FC, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { registerLocale } from 'react-datepicker';
import { useDispatch, useSelector } from 'react-redux';
import ru from 'date-fns/locale/ru';
// components
import HomePage from 'components/HomePage';
import OrderScreen from 'components/OrderScreen';
import CartButton from 'components/CartButton';
import { useModal } from '../hooks/useModal';
// redux
import { initializeCart, selectCartIsEmpty } from 'store/slices/cartSlice';

registerLocale('ru', ru);

const App: FC = () => {
  const dispatch = useDispatch();
  const [isOrderOpen, setIsOrderOpen] = useState(false);

  const isCartEmpty = useSelector(selectCartIsEmpty);

  useModal(isOrderOpen, () => setIsOrderOpen(false));

  useEffect(() => {
    dispatch(initializeCart());
  }, [dispatch]);

  const handleOpenOrder = () => {
    setIsOrderOpen(true);
  };

  const handleCloseOrder = () => {
    setIsOrderOpen(false);
  };

  return (
    <BrowserRouter>
      <HomePage />
      {!isCartEmpty && <CartButton onOpenOrder={handleOpenOrder} />}
      {isOrderOpen && <OrderScreen onClose={handleCloseOrder} />}
    </BrowserRouter>
  );
};

export default App;
