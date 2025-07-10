// libraries
import { useState } from 'react';
// components
import InputController from 'components/shared/InputController';
import DatePicker from 'components/OrderFormControl/DatePicker';
import TimePicker from 'components/OrderFormControl/TimePicker';

const OrderFormControl = () => {
  const [selectedDate, setSelectedDate] = useState<string>('');

  return (
    <div className="order-form-container">
      <form>
        <input name="address" className="form-input" placeholder="Введите адрес доставки" />

        <DatePicker onDateChange={setSelectedDate} />
        <TimePicker selectedDate={selectedDate} />
        <InputController />
      </form>
    </div>
  );
};

export default OrderFormControl;
