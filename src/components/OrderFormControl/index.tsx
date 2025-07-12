import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { format, isToday, isTomorrow } from 'date-fns';

const OrderFormControl = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const getLabel = (date: Date | null) => {
    if (!date) return '';
    if (isToday(date)) return 'Сегодня';
    if (isTomorrow(date)) return 'Завтра';
    return format(date, 'dd.MM.yyyy');
  };

  return (
    <div className="container order-form-container">
      <form>
        <input name="address" className="form-input" placeholder="Введите адрес доставки" />

        <div className="form-field">
          <label htmlFor="delivery-date">Выберите дату доставки</label>
          <DatePicker
            id="delivery-date"
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            minDate={new Date()}
            placeholderText="Дата доставки"
            dateFormat="dd.MM.yyyy"
            locale="ru"
            customInput={
              <input
                readOnly
                value={getLabel(selectedDate)} // "Сегодня" / "Завтра" / дата
                className="form-input"
              />
            }
          />
        </div>
      </form>
    </div>
  );
};

export default OrderFormControl;
