import * as React from 'react';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import classes from './TweetContentContainer.module.css';
import { TweetContent } from './TweetContentContainer/TweetContent';
import { TweetButton } from './TweetContentContainer/TweetButton';
import { TweetButtonIcon } from './TweetContentContainer/TweetButtonIcon';

type Props = {
  replyNumber: number;
  retweetNumber: number;
  likeNumber: number;
  content: string;
};

export const TweetContentContainer: React.FC<Props> = (props) => {
  const { likeNumber, replyNumber, retweetNumber, content } = props;

  return (
    <div className={classes.TweetContentContainer}>
      <TweetContent content={content} />
      <div className={classes.TweetButtonsWrapper}>
        <TweetButton
          buttonIcon={<ChatBubbleOutlineOutlinedIcon fontSize="small" />}
          tweetButtonNumber={replyNumber}
        />
        <TweetButton
          buttonIcon={<RepeatOutlinedIcon fontSize="small" />}
          tweetButtonNumber={retweetNumber}
        />
        <TweetButton
          buttonIcon={<FavoriteBorderOutlinedIcon fontSize="small" />}
          tweetButtonNumber={likeNumber}
        />
        <TweetButtonIcon buttonIcon={<ShareOutlinedIcon fontSize="small" />} />
      </div>
    </div>
  );
};
