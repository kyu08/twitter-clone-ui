import * as React from 'react';
import styled from 'styled-components';
import { UserImageSection } from './Tweet/UserImageSection';
import { TweetInformationSection } from './Tweet/TweetInformationSection';
import { TweetContentSection } from './Tweet/TweetContentSection';
import { TweetDataModel } from '../../infrastructure/TweetDataModel';
import { TweetApplicationService } from '../../application/TweetApplicationService';

type Props = {
  tweetDataModel: TweetDataModel;
};

const TweetContainer = styled.div`
  border-bottom: 1px #8899a6 solid;
`;

const Tweet = styled.div`
  display: flex;
  margin: 0 10px;
`;

export const TweetCard: React.FC<Props> = ({ tweetDataModel }) => {
  const {
    content,
    likeCount,
    replyCount,
    retweetCount,
    screenName,
    userImageURL,
    userName,
  } = tweetDataModel;

  const howLongAgo = TweetApplicationService.howLongAgo(tweetDataModel);
  const imageSize = 49;

  return (
    <TweetContainer>
      <Tweet>
        <UserImageSection userImageURL={userImageURL} imageSize={imageSize} />
        <div>
          <TweetInformationSection
            userName={userName}
            screenName={screenName}
            howLongAgo={howLongAgo}
          />
          <TweetContentSection
            replyCount={replyCount}
            retweetCount={retweetCount}
            likeCount={likeCount}
            content={content}
          />
        </div>
      </Tweet>
    </TweetContainer>
  );
};
