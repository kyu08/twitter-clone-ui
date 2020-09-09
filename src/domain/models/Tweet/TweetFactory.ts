import { TweetDataModel } from '../../../infrastructure/TweetDataModel';
import { AbstractTweet } from './AbstractTweet';
import { TweetCreateProps } from './ITweetRepository';
import Tweet from './ConcreteClasses/Tweet';
import Content from './Content/Content';
import TweetId from './TweetId/TweetId';
import ScreenName from '../User/Profile/ScreenName';
import UserImageURL from '../User/Profile/UserImageURL';
import UserName from '../User/Profile/UserName';

export class TweetFactory {
  createTweetDataModel(tweet: AbstractTweet): TweetDataModel {
    return new TweetDataModel(tweet);
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
