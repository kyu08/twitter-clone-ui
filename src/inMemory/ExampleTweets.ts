// ここで props を用意
// TweetRepositoryに投げてインスタンスをもらう
// Tweet[]をUIに投げる

import Tweet from '../domain/models/Tweet/ConcreteClasses/Tweet';
import { InMemoryTweetRepository } from './InMemoryTweetRepository';

const tweetRepository = new InMemoryTweetRepository();

const tweetProps1 = {
  tweetId: 1,
  userId: 1,
  content: 'test',
  retweetMap: new Map(),
  likeSet: new Set(),
  tweetedAt: new Date(),
};

const tweetProps2 = {
  tweetId: 1,
  userId: 1,
  content: 'test',
  retweetMap: new Map(),
  likeSet: new Set(),
  tweetedAt: new Date(),
};

const tweetPropsArray = [tweetProps1, tweetProps2];

export const tweetArray: Tweet[] = tweetPropsArray.map((t) =>
  tweetRepository.createTweet(t),
);
