import * as React from 'react';
import classes from './AlertMessage.module.css';

type Props = {
  alertMessage: string;
};

export const AlertMessage: React.FC<Props> = (props) => {
  const { alertMessage } = props;

  return (
    <div className={classes.InvalidLogin}>
      <span>
        {alertMessage}
      </span>
    </div>
  );
};
