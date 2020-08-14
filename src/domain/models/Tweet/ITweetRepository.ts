import Tweet from './ConcreteClasses/Tweet';

export interface TweetCreateProps {
  tweetId: number;
  screenName: string;
  content: string;
  replyCount: number;
  retweetCount: number;
  likeCount: number;
  tweetedAt: Date;
  userImageURL: string;
  userName: string;
}

export interface ITweetRepository {
  createTweet(props: TweetCreateProps): Tweet;
}
