import * as React from 'react';

export const SelectDate: React.FC = () => {
  const [day, setDay] = React.useState(1);

  const handleChangeDay = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const dayEntered = Number(e.currentTarget.value);
    setDay(dayEntered);
    console.log(dayEntered);
  };

  return (
    <select value={day} onChange={(e) => handleChangeDay(e)}>
      {/* eslint-disable-next-line no-shadow */}
      {[30, 31].map((day, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <option value={day} key={index}>
          {day}
        </option>
      ))}
    </select>
  );
};
