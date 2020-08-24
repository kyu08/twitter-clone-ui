import * as React from 'react';
import classes from './SelectDate.module.css';

type Props = {
  labelTitle: string;
  optionArray: number[];
  handleChange(e: React.ChangeEvent<HTMLSelectElement>): void;
  optionNumber: number;
};

export const SelectDate: React.FC<Props> = ({
  labelTitle,
  optionArray,
  handleChange,
  optionNumber,
}) => {
  return (
    <div className={classes.InputContainer}>
      <label className={classes.InputLabel}>
        {labelTitle}
        <select
          className={classes.BirthdaySelector}
          value={optionNumber}
          onChange={(e) => handleChange(e)}
        >
          {optionArray.map((option, index) => (
            <option value={option} key={index}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};
