import * as React from 'react';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import styled from 'styled-components';
import { TweetContent } from './TweetContentContainer/TweetContent';
import { TweetButton } from './TweetContentContainer/TweetButton';
import { TweetButtonIcon } from './TweetContentContainer/TweetButtonIcon';

type Props = {
  replyCount: number;
  retweetCount: number;
  likeCount: number;
  content: string;
};

const TweetContentContainer = styled.div`
  font-size: 15px;
`;

const TweetButtonsWrapper = styled.div`
  color: #8899a6;
  display: flex;
  justify-content: space-between;
`;

export const TweetContentSection: React.FC<Props> = ({
  likeCount,
  replyCount,
  retweetCount,
  content,
}) => {
  return (
    <TweetContentContainer>
      <TweetContent content={content} />
      <TweetButtonsWrapper>
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
      </TweetButtonsWrapper>
    </TweetContentContainer>
  );
};
