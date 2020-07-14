import * as React from 'react';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import classes from './TweetContentContainer.module.css';
import { TweetContent } from './TweetContentContainer/TweetContent';
import { TweetButtonContainer } from './TweetContentContainer/TweetButtonContainer';

export const TweetContentContainer: React.FC<{}> = () => {
  return (
    <div className={classes.TweetContentContainer}>
      <TweetContent content="hoge_hoge_hoge_hoge_hoge_hoge_hoge_hoge_hoge_hoge_hoge_aaaaaaaaaaaaaaaaaaaahoge_" />
      <div className={classes.TweetButtonsWrapper}>
        {/* todo map で書く?*/}
        <TweetButtonContainer
          buttonIcon={<ChatBubbleOutlineOutlinedIcon fontSize="small" />}
        />
        <TweetButtonContainer
          buttonIcon={<RepeatOutlinedIcon fontSize="small" />}
        />
        <TweetButtonContainer
          buttonIcon={<FavoriteBorderOutlinedIcon fontSize="small" />}
        />
        <TweetButtonContainer
          buttonIcon={<ShareOutlinedIcon fontSize="small" />}
        />
      </div>
    </div>
  );
};
