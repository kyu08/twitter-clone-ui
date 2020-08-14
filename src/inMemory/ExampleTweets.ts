import Tweet from '../domain/models/Tweet/ConcreteClasses/Tweet';
import { InMemoryTweetRepository } from './InMemoryTweetRepository';
import doit from './doit.png';

const tweetRepository = new InMemoryTweetRepository();

// api 完成前用のツイートのテストデータ
const tweetPropsArray = [
  {
    tweetId: 1,
    screenName: 'doit_uncle',
    content:
      'do it!!!do it!!!do it!!!do it!!!do it!!!do it!!!do it!!!do it!!!do it!!!do it!!!do it!!!do it!!!do it!!!do it!!!',
    replyCount: 12,
    retweetCount: 13,
    likeCount: 13,
    tweetedAt: new Date(),
    userImageURL: doit,
    userName: 'doit!!',
  },
  {
    tweetId: 2,
    screenName: 'doit2',
    content:
      '2do it!!!do it!!!do it!!!do it!!!do it!!!do it!!!do it!!!do it!!!do it!!!do it!!!do it!!!do it!!!do it!!!do it!!!',
    replyCount: 13,
    retweetCount: 131,
    likeCount: 1334,
    tweetedAt: new Date(),
    userImageURL: doit,
    userName: '2doit!!',
  },
  // {
  //   tweetId: 2,
  //   screenName: 'kyu',
  //   content: 'testだよ',
  //   retweetMap: new Map(),
  //   likeSet: new Set(),
  //   tweetedAt: new Date(),
  // },
  // {
  //   tweetId: 3,
  //   screenName: 'kyu',
  //   content: 'testなう',
  //   retweetMap: new Map(),
  //   likeSet: new Set(),
  //   tweetedAt: new Date(),
  // },
  // {
  //   tweetId: 4,
  //   screenName: 'kyu',
  //   content: 'testing',
  //   retweetMap: new Map(),
  //   likeSet: new Set(),
  //   tweetedAt: new Date(),
  // },
  // {
  //   tweetId: 5,
  //   screenName: 'kyu',
  //   content: 'testing...',
  //   retweetMap: new Map(),
  //   likeSet: new Set(),
  //   tweetedAt: new Date(),
  // },
  // {
  //   tweetId: 6,
  //   screenName: 'kyu',
  //   content: 'test123',
  //   retweetMap: new Map(),
  //   likeSet: new Set(),
  //   tweetedAt: new Date(),
  // },
  // {
  //   tweetId: 7,
  //   screenName: 'kyu',
  //   content: 'testoooooooo',
  //   retweetMap: new Map(),
  //   likeSet: new Set(),
  //   tweetedAt: new Date(),
  // },
  // {
  //   tweetId: 8,
  //   screenName: 'kyu',
  //   content: 'test8',
  //   retweetMap: new Map(),
  //   likeSet: new Set(),
  //   tweetedAt: new Date(),
  // },
  // {
  //   tweetId: 9,
  //   screenName: 'kyu',
  //   content: 'test9',
  //   retweetMap: new Map(),
  //   likeSet: new Set(),
  //   tweetedAt: new Date(),
  // },
];

export const tweetArrayStatic: Tweet[] = tweetPropsArray.map((t) =>
  tweetRepository.createTweet(t),
);
