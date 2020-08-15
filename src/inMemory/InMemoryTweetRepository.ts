import {
  ITweetRepository,
  TweetCreateProps,
} from '../domain/models/Tweet/ITweetRepository';
import Tweet from '../domain/models/Tweet/ConcreteClasses/Tweet';
import TweetId from '../domain/models/Tweet/TweetId/TweetId';
import ScreenName from '../domain/models/User/Profile/ScreenName';
import UserName from '../domain/models/User/Profile/UserName';
import UserImageURL from '../domain/models/User/Profile/UserImageURL';
import Content from '../domain/models/Tweet/Content/Content';

export class InMemoryTweetRepository implements ITweetRepository {
  createTweet(props: TweetCreateProps): Tweet {
    const {
      content: contentProps,
      replyCount: replyCountProps,
      likeCount: likeCountProps,
      retweetCount: retweetCountProps,
      tweetId: tweetIdProps,
      createdAt: createdAtProps,
      screenName: screenNameProps,
      userImageURL: userImageURLProps,
      userName: userNameProps,
    } = props;

    const content = new Content(contentProps);
    const replyCount = replyCountProps;
    const likeCount = likeCountProps;
    const retweetCount = retweetCountProps;
    const tweetId = new TweetId(tweetIdProps);
    const createdAt = createdAtProps;
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
