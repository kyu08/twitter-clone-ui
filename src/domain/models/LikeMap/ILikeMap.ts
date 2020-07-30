import UserId from '../User/UserId/UserId';
import TweetId from '../Tweet/TweetId/TweetId';

export interface ILikeSet {
  readonly tweetId: TweetId;
  readonly likeSet: Set<UserId>;
  like(userId: UserId): ILikeSet;
  cancelLike(userId: UserId): ILikeSet;
}
