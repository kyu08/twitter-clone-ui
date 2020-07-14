import * as React from 'react';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import classes from './TweetContentContainer.module.css';
import { TweetContent } from './TweetContentContainer/TweetContent';
import { TweetButton } from './TweetContentContainer/TweetButton';
import { TweetButtonIcon } from './TweetContentContainer/TweetButtonIcon';

export const TweetContentContainer: React.FC<{}> = () => {
  return (
    <div className={classes.TweetContentContainer}>
      <TweetContent content="hoge_hoge_hoge_hoge_hoge_hoge_hoge_hoge_hoge_hoge_hoge_aaaaaaaaaaaaaaaaaaaahoge_" />
      <div className={classes.TweetButtonsWrapper}>
        <TweetButton
          buttonIcon={<ChatBubbleOutlineOutlinedIcon fontSize="small" />}
          tweetButtonNumber={123}
        />
        <TweetButton
          buttonIcon={<RepeatOutlinedIcon fontSize="small" />}
          tweetButtonNumber={123}
        />
        <TweetButton
          buttonIcon={<FavoriteBorderOutlinedIcon fontSize="small" />}
          tweetButtonNumber={123}
        />
        <TweetButtonIcon buttonIcon={<ShareOutlinedIcon fontSize="small" />} />
      </div>
    </div>
  );
};
