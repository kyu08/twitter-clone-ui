import * as React from 'react';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import classes from './TweetInformationContainer.module.css';
import { UserName } from './TweetInformationContainer/UserName';
import { ScreenName } from './TweetInformationContainer/ScreenName';
import { HowLongAgo } from './TweetInformationContainer/HowLongAgo';

type Props = {
  userName: string;
  screenName: string;
  howLongAgo: string;
};

export const TweetInformationContainer: React.FC<Props> = (props) => {
  const { howLongAgo, screenName, userName } = props;

  return (
    <div className={classes.TweetInformationContainer}>
      <UserName userName={userName} />
      <ScreenName screenName={screenName} />
      <HowLongAgo howLongAgo={howLongAgo} />
      <div className={classes.TweetOptionButtonWrapper}>
        <ExpandMoreOutlinedIcon />
      </div>
    </div>
  );
};
