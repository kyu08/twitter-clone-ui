import Tweet from './ConcreteClasses/Tweet';

export interface TweetCreateProps {
  tweetId: number;
  userId: number;
  content: string;
  retweetMap: Map<any, any>;
  likeSet: Set<any>;
  tweetedAt: Date;
}

export interface ITweetRepository {
  createTweet(props: TweetCreateProps): Tweet;
}
