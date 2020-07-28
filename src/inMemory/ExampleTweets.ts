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
    content: 'testだよ',
    retweetMap: new Map(),
    likeSet: new Set(),
    tweetedAt: new Date(),
  },
  {
    tweetId: 3,
    screenName: 'kyu',
    content: 'testなう',
    retweetMap: new Map(),
    likeSet: new Set(),
    tweetedAt: new Date(),
  },
  {
    tweetId: 4,
    screenName: 'kyu',
    content: 'testing',
    retweetMap: new Map(),
    likeSet: new Set(),
    tweetedAt: new Date(),
  },
  {
    tweetId: 5,
    screenName: 'kyu',
    content: 'testing...',
    retweetMap: new Map(),
    likeSet: new Set(),
    tweetedAt: new Date(),
  },
  {
    tweetId: 6,
    screenName: 'kyu',
    content: 'test123',
    retweetMap: new Map(),
    likeSet: new Set(),
    tweetedAt: new Date(),
  },
  {
    tweetId: 7,
    screenName: 'kyu',
    content: 'testoooooooo',
    retweetMap: new Map(),
    likeSet: new Set(),
    tweetedAt: new Date(),
  },
  {
    tweetId: 8,
    screenName: 'kyu',
    content: 'test8',
    retweetMap: new Map(),
    likeSet: new Set(),
    tweetedAt: new Date(),
  },
  {
    tweetId: 9,
    screenName: 'kyu',
    content: 'test9',
    retweetMap: new Map(),
    likeSet: new Set(),
    tweetedAt: new Date(),
  },
];

export const tweetArray: Tweet[] = tweetPropsArray.map((t) =>
  tweetRepository.createTweet(t),
);
