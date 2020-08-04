import TweetId from './TweetId/TweetId';
import Content from './Content/Content';
import ScreenName from '../User/Profile/ScreenName';
import UserImage from '../User/Profile/UserImage';
import UserName from '../User/Profile/UserName';

export interface AbstractTweetProps {
  tweetId: TweetId;
  screenName: ScreenName;
  content: Content;
  replyCount: number;
  retweetCount: number;
  likeCount: number;
  tweetedAt: Date;
  userImage: UserImage;
  userName: UserName;
}

export type IAbstractTweet = AbstractTweetProps & {
  getTweetId(): number;
};
