import TweetId from './TweetId/TweetId';
import Content from './Content/Content';
import ScreenName from '../User/Profile/ScreenName';
import UserImageURL from '../User/Profile/UserImageURL';
import UserName from '../User/Profile/UserName';

export interface AbstractTweetProps {
  tweetId: TweetId;
  screenName: ScreenName;
  content: Content;
  replyCount: number;
  retweetCount: number;
  likeCount: number;
  tweetedAt: Date;
  userImageURL: UserImageURL;
  userName: UserName;
}

// todo これ使われてない
export type IAbstractTweet = AbstractTweetProps & {
  getTweetId(): string;
};
