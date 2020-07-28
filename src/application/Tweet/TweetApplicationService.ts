import LikeSet from '../../domain/models/Tweet/LikeSet/LikeSet';
import TweetId from '../../domain/models/Tweet/TweetId/TweetId';
import UserId from '../../domain/models/User/UserId/UserId';
import Content from '../../domain/models/Tweet/Content/Content';
import RetweetMap from '../../domain/models/Tweet/RetweetMap/RetweetMap';
import Reply from '../../domain/models/Tweet/ConcreteClasses/Reply';
import ScreenName from '../../domain/models/User/Profile/ScreenName';

export class TweetApplicationService {
  static test() {
    const tweetId = new TweetId(123);
    const screenName = new ScreenName('123');
    const content = new Content('this is content.');
    const retweetMap = new RetweetMap();
    const likeSet = new LikeSet();
    const tweetedAt = new Date();
    const updatedAt = new Date();
    const replyTo = tweetId;
    const props = {
      tweetId,
      screenName,
      content,
      retweetMap,
      likeSet,
      tweetedAt,
      updatedAt,
      replyTo,
    };
    const tweet = new Reply(props);
    const userA = new UserId(1234);
    // const userB = new UserId(12344);
    const tweetB = tweet.like(userA);
    const tweetC = tweetB.cancelLike(userA);
    console.log(tweetB);
    // const tweetC = tweetB.cancelLike(userA);
    console.log(tweetC);
  }
}
