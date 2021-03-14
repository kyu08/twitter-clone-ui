import Tweet from '../../models/Tweet/ConcreteClasses/Tweet';
import Content from '../../models/Tweet/Content/Content';
import TweetId from '../../models/Tweet/TweetId/TweetId';
import ScreenName from '../../models/User/Profile/ScreenName';
import UserImageURL from '../../models/User/Profile/UserImageURL';
import UserName from '../../models/User/Profile/UserName';
import { TweetDataModel } from '../../../applicationService/DTO/TweetDataModel';

export interface TweetCreateProps {
  tweetId: string;
  screenName: string;
  content: string;
  replyCount: number;
  retweetCount: number;
  likeCount: number;
  createdAt: string;
  userImageURL: string;
  userName: string;
}

export class TweetFactory {
  createTweet(tweetCreateProps: TweetCreateProps): Tweet;

  createTweet(tweetDataModel: TweetDataModel): Tweet;

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
  }: TweetCreateProps | TweetDataModel): Tweet {
    const content = new Content(contentProps);
    const replyCount = replyCountProps;
    const likeCount = likeCountProps;
    const retweetCount = retweetCountProps;
    const tweetId = new TweetId(tweetIdProps);
    const createdAt =
      typeof createdAtProps === 'string'
        ? new Date(createdAtProps)
        : createdAtProps;
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
