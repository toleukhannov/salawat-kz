// libraries
import { useEffect, type FC } from 'react';
// components
import ModalHeader from 'components/shared/ModalHeader';
import OrderList from 'components/OrderList';
import OrderFormControl from 'components/OrderFormControl';
import PriceList from 'components/PriceList';

interface OrderScreenProps {
  onClose: () => void;
}

const OrderScreen: FC<OrderScreenProps> = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="container order-screen-overlay">
      <div className="order-screen">
        <ModalHeader title={'Состав заказа'} onClose={onClose} />
        <OrderList />
        <OrderFormControl />
        <PriceList />
      </div>
    </div>
  );
};

export default OrderScreen;
