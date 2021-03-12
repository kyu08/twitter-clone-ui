import { TempTweet } from '../../models/TempTweet/ConcreteClasses/TempTweet';

export type ITweetRepository = {
  fetchTimeline(currentUserId: string): Promise<Response>;
  postTweet(tempTweet: TempTweet): Promise<Response>;
};
