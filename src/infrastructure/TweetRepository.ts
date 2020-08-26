import { hostURL } from '../util/Util';
import { TempTweetDataModel } from './TempTweetDataModel';
import { TweetCreateProps } from '../domain/models/Tweet/ITweetRepository';
import Tweet from '../domain/models/Tweet/ConcreteClasses/Tweet';
import Content from '../domain/models/Tweet/Content/Content';
import TweetId from '../domain/models/Tweet/TweetId/TweetId';
import ScreenName from '../domain/models/User/Profile/ScreenName';
import UserImageURL from '../domain/models/User/Profile/UserImageURL';
import UserName from '../domain/models/User/Profile/UserName';

export class TweetRepository {
  fetchTimeline(): Promise<Response> {
    return fetch(`${hostURL}/home/123`, {
      mode: 'cors',
    });
  }

  postTweet(tweetDataModel: TempTweetDataModel): Promise<Response> {
    const tweetData = tweetDataModel.build();

    return fetch(`${hostURL}/tweet`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tweetData),
    });
  }

  createTweet({
    content: contentProps,
    replyCount: replyCountProps,
    likeCount: likeCountProps,
    retweetCount: retweetCountProps,
    tweetId: tweetIdProps,
    createdAt: createdAtProps,
    screenName: screenNameProps,
    userImageURL: userImageURLProps,
    userName: userNameProps,
  }: TweetCreateProps): Tweet {
    const content = new Content(contentProps);
    const replyCount = replyCountProps;
    const likeCount = likeCountProps;
    const retweetCount = retweetCountProps;
    const tweetId = new TweetId(tweetIdProps);
    const createdAt = new Date(createdAtProps);
    const screenName = new ScreenName(screenNameProps);
    const userImageURL = new UserImageURL(userImageURLProps);
    const userName = new UserName(userNameProps);

    const propsForTweet = {
      content,
      replyCount,
      likeCount,
      retweetCount,
      tweetId,
      createdAt,
      screenName,
      userName,
      userImageURL,
    };

    return new Tweet(propsForTweet);
  }
}
