import * as React from 'react';
import styled from 'styled-components';
import { UserImageSection } from './Tweet/UserImageSection';
import { TweetInformationSection } from './Tweet/TweetInformationSection';
import { TweetContentSection } from './Tweet/TweetContentSection';
import { TweetDataModel } from '../../applicationService/DTO/TweetDataModel';
import { TweetApplicationService } from '../../applicationService/TweetApplicationService';

const IMAGE_SIZE = 49;

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
  const tweetApplicationService = new TweetApplicationService();

  const howLongAgo = tweetApplicationService.howLongAgo(tweetDataModel);

  return (
    <TweetContainer>
      <Tweet>
        <UserImageSection
          userImageURL={userImageURL}
          imageSize={IMAGE_SIZE}
          screenName={screenName}
        />
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
