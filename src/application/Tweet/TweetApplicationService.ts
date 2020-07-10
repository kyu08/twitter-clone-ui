import Tweet from '../../domain/models/Tweet/Tweet';
import LikeSet from '../../domain/models/Tweet/LikeSet';
import TweetId from '../../domain/models/Tweet/TweetId';
import UserId from '../../domain/models/User/UserId';
import Content from '../../domain/models/Tweet/Content';
import RetweetMap from '../../domain/models/Tweet/RetweetMap';

export class TweetApplicationService {
  static test() {
    const tweetId = new TweetId('hoge');
    const userId = new UserId(123);
    const content = new Content('this is content.');
    const retweetMap = new RetweetMap();
    const likeSet = new LikeSet();
    const tweetedAt = new Date();
    const updatedAt = new Date();
    const props = {
      tweetId,
      userId,
      content,
      retweetMap,
      likeSet,
      tweetedAt,
      updatedAt,
    };
    const tweet = new Tweet(props);
    const userA = new UserId(1234);
    const tweetB = tweet.like(userA);
    const userB = new UserId(2345);
    const tweetC = tweetB.like(userB);
    console.log(tweetC);
  }
}
