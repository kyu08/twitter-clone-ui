import {
  ITweetRepository,
  TweetCreateProps,
} from '../domain/models/Tweet/ITweetRepository';
import Tweet from '../domain/models/Tweet/ConcreteClasses/Tweet';
import TweetId from '../domain/models/Tweet/TweetId/TweetId';
import ScreenName from '../domain/models/User/Profile/ScreenName';
import UserName from '../domain/models/User/Profile/UserName';
import UserImage from '../domain/models/User/Profile/UserImage';
import Content from '../domain/models/Tweet/Content/Content';

export class InMemoryTweetRepository implements ITweetRepository {
  createTweet(props: TweetCreateProps): Tweet {
    const {
      content: contentProps,
      likeCount: likeCountProps,
      retweetCount: retweetCountProps,
      tweetId: tweetIdProps,
      tweetedAt: tweetedAtProps,
      screenName: screenNameProps,
      userImage: userImageProps,
      userName: userNameProps,
    } = props;

    const content = new Content(contentProps);
    const likeCount = likeCountProps;
    const retweetCount = retweetCountProps;
    const tweetId = new TweetId(tweetIdProps);
    const tweetedAt = tweetedAtProps;
    const screenName = new ScreenName(screenNameProps);
    const userImage = new UserImage(userImageProps);
    const userName = new UserName(userNameProps);

    const propsForTweet = {
      content,
      likeCount,
      retweetCount,
      tweetId,
      tweetedAt,
      screenName,
      userName,
      userImage,
    };

    return new Tweet(propsForTweet);
  }
}
