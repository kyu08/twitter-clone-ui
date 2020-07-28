import {
  ITweetRepository,
  TweetCreateProps,
} from '../domain/models/Tweet/ITweetRepository';
import Tweet from '../domain/models/Tweet/ConcreteClasses/Tweet';
import Content from '../domain/models/Tweet/Content/Content';
import LikeSet from '../domain/models/Tweet/LikeSet/LikeSet';
import RetweetMap from '../domain/models/Tweet/RetweetMap/RetweetMap';
import TweetId from '../domain/models/Tweet/TweetId/TweetId';
import ScreenName from '../domain/models/User/Profile/ScreenName';

export class InMemoryTweetRepository implements ITweetRepository {
  createTweet(props: TweetCreateProps): Tweet {
    const {
      content: contentProps,
      likeSet: likeSetProps,
      retweetMap: retweetMapProps,
      tweetId: tweetIdProps,
      tweetedAt: tweetedAtProps,
      screenName: screenNameProps,
    } = props;

    const content = new Content(contentProps);
    const likeSet = new LikeSet(likeSetProps);
    const retweetMap = new RetweetMap(retweetMapProps);
    const tweetId = new TweetId(tweetIdProps);
    const tweetedAt = tweetedAtProps;
    const screenName = new ScreenName(screenNameProps);

    const propsForTweet = {
      content,
      likeSet,
      retweetMap,
      tweetId,
      tweetedAt,
      screenName,
    };

    return new Tweet(propsForTweet);
  }
}
