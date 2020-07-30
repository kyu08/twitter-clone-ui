import Tweet from './ConcreteClasses/Tweet';

export interface TweetCreateProps {
  tweetId: number;
  screenName: string;
  content: string;
  retweetCount: number;
  likeCount: number;
  tweetedAt: Date;
  userImage: string;
  userName: string;
}

export interface ITweetRepository {
  createTweet(props: TweetCreateProps): Tweet;
}
