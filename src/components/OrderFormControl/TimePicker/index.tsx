import React, { useState, useMemo } from 'react';

interface TimePickerProps {
  selectedDate?: string;
}

const TimePicker: React.FC<TimePickerProps> = ({ selectedDate }) => {
  const [selectedTime, setSelectedTime] = useState<string>('');

  const timeOptions = useMemo(() => {
    const options = [];
    const now = new Date();
    const today = now.toISOString().split('T')[0];
    const isToday = selectedDate === today;
    const currentHour = now.getHours();

    for (let hour = 9; hour <= 22; hour++) {
      if (isToday && hour <= currentHour + 1) {
        continue;
      }

      const startHour = hour.toString().padStart(2, '0');
      const endHour = (hour + 1).toString().padStart(2, '0');

      options.push({
        value: `${startHour}:00-${endHour}:00`,
        label: `${startHour}:00 - ${endHour}:00`,
      });
    }

    return options;
  }, [selectedDate]);

  const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTime(e.target.value);
  };

  return (
    <label className="time-select">
      <select name="deliveryTime" value={selectedTime} onChange={handleTimeChange}>
        <option value="" disabled>
          &nbsp;
        </option>
        {timeOptions.length > 0 ? (
          timeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))
        ) : (
          <option value="no-slots" disabled>
            Нет доступных временных слотов на сегодня
          </option>
        )}
      </select>
      <span className="label">Выберите время доставки</span>
    </label>
  );
};

export default TimePicker;
