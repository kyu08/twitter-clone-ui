import * as React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router-dom';
import classes from './GoBackButton.module.css';

// container であり presentation でもあるけどいいかな、、、
export const GoBackButton: React.FC = () => {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };

  return (
    <div className={classes.Icon} onClick={() => goBack()}>
      <ArrowBackIcon />
    </div>
  );
};
