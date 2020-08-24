import * as React from 'react';
import classes from './InputForm.module.css';

type Props = {
  labelTitle: string;
  inputType: string;
  value: string;
  handleChangeValue(e: React.ChangeEvent<HTMLInputElement>): void;
};

export const InputForm: React.FC<Props> = ({
  labelTitle,
  inputType,
  value,
  handleChangeValue,
}) => {
  return (
    <div className={classes.InputContainer}>
      <label className={classes.InputLabel}>
        {labelTitle}
        <input
          type={inputType}
          value={value}
          className={classes.LoginInput}
          onChange={(e) => handleChangeValue(e)}
        />
      </label>
    </div>
  );
};
