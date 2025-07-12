import React, { useEffect, useState } from 'react';
import ModalHeader from 'components/shared/ModalHeader';
import OrderList from 'components/OrderList';
import OrderFormControl from 'components/OrderFormControl';
import CartButton from 'components/CartButton';
import { getCart } from 'utilities/cartStorage';

const OrderScreen = () => {
  return (
    <div className="order-screen">
      <ModalHeader title={'Состав заказа'} />
      <OrderList />
      <OrderFormControl />
    </div>
  );
};

export default OrderScreen;
