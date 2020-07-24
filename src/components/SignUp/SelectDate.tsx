import * as React from 'react';
import classes from './SelectDate.module.css';

type Props = {
  labelTitle: string;
  optionArray: number[];
  handleChange(e: React.ChangeEvent<HTMLSelectElement>): void;
  optionNumber: number;
};

export const SelectDate: React.FC<Props> = (props) => {
  const { labelTitle, optionArray, handleChange, optionNumber } = props;
  // const [day, setDay] = React.useState(1);

  // const handleChangeDay = (e: React.ChangeEvent<HTMLSelectElement>): void => {
  //   const dayEntered = Number(e.currentTarget.value);
  //   setDay(dayEntered);
  // };

  return (
    <div className={classes.InputContainer}>
      <label className={classes.InputLabel}>
        {labelTitle}
        <select
          className={classes.BirthdaySelector}
          value={optionNumber}
          onChange={(e) => handleChange(e)}
        >
          {/* eslint-disable-next-line no-shadow */}
          {optionArray.map((option, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <option value={option} key={index}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};
