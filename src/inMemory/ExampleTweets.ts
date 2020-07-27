// ここで props を用意
// TweetRepositoryに投げてインスタンスをもらう
// Tweet[]をUIに投げる

import Tweet from '../domain/models/Tweet/ConcreteClasses/Tweet';
import { InMemoryTweetRepository } from './InMemoryTweetRepository';

const tweetRepository = new InMemoryTweetRepository();

const tweetPropsArray = [
  {
    tweetId: 1,
    screenName: 'kyu',
    content: 'test',
    retweetMap: new Map(),
    likeSet: new Set(),
    tweetedAt: new Date(),
  },
  {
    tweetId: 2,
    screenName: 'kyu',
    content: 'test',
    retweetMap: new Map(),
    likeSet: new Set(),
    tweetedAt: new Date(),
  },
];

export const tweetArray: Tweet[] = tweetPropsArray.map((t) =>
  tweetRepository.createTweet(t),
);
