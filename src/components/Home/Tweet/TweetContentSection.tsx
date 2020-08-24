import * as React from 'react';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import classes from './TweetContentSection.module.css';
import { TweetContent } from './TweetContentContainer/TweetContent';
import { TweetButton } from './TweetContentContainer/TweetButton';
import { TweetButtonIcon } from './TweetContentContainer/TweetButtonIcon';

type Props = {
  replyCount: number;
  retweetCount: number;
  likeCount: number;
  content: string;
};

export const TweetContentSection: React.FC<Props> = ({
  likeCount,
  replyCount,
  retweetCount,
  content,
}) => {
  return (
    <div className={classes.TweetContentContainer}>
      <TweetContent content={content} />
      <div className={classes.TweetButtonsWrapper}>
        <TweetButton
          buttonIcon={<ChatBubbleOutlineOutlinedIcon fontSize="small" />}
          tweetButtonCount={replyCount}
        />
        <TweetButton
          buttonIcon={<RepeatOutlinedIcon fontSize="small" />}
          tweetButtonCount={retweetCount}
        />
        <TweetButton
          buttonIcon={<FavoriteBorderOutlinedIcon fontSize="small" />}
          tweetButtonCount={likeCount}
        />
        <TweetButtonIcon buttonIcon={<ShareOutlinedIcon fontSize="small" />} />
      </div>
    </div>
  );
};
