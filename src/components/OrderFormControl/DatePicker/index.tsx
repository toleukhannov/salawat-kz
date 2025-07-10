// components
import { useState, useMemo, type FC } from 'react';

interface DatePickerProps {
  onDateChange: (date: string) => void;
}

const DatePicker: FC<DatePickerProps> = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState<string>('');

  const dateOptions = useMemo(() => {
    const options = [];
    const today = new Date();
    const tomorrow = new Date(today.getDate() + 1);

    options.push({
      value: today.toISOString().split('T')[0],
      label: 'Сегодня',
    });

    options.push({
      value: tomorrow.toISOString().split('T')[0],
      label: 'Завтра',
    });

    for (let i = 2; i <= 8; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear();

      options.push({
        value: date.toISOString().split('T')[0],
        label: `${day}.${month}.${year}`,
      });
    }

    return options;
  }, []);

  const handleDateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const date = e.target.value;
    setSelectedDate(date);
    onDateChange(date);
  };

  return (
    <label htmlFor="date-select" className="date-select">
      <select
        id="date-select"
        name="deliveryDate"
        value={selectedDate}
        onChange={handleDateChange}
        className=""
      >
        <option value="" disabled>
          &nbsp;
        </option>
        {dateOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <span className="label">Выберите дату доставки</span>
    </label>
  );
};

export default DatePicker;
