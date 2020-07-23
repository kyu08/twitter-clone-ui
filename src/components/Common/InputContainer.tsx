import * as React from 'react';
import classes from './InputContainer.module.css';

type Props = {
  labelTitle: string;
  inputType: string;
  value: string;
  handleChangeValue(e: React.ChangeEvent<HTMLInputElement>): void;
};

export const InputContainer: React.FC<Props> = (props) => {
  const { labelTitle, inputType, value, handleChangeValue } = props;

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
