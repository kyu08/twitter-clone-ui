import { TweetApplicationService } from '../applicationService/TweetApplicationService';
import { TweetDataModel } from '../applicationService/DTO/TweetDataModel';
import TempContent from '../domain/models/TempTweet/TempContent';
import UserId from '../domain/models/User/UserId/UserId';
import { TempTweet } from '../domain/models/TempTweet/ConcreteClasses/TempTweet';
import { TempTweetDataModel } from '../applicationService/DTO/TempTweetDataModel';

const tweetApplicationService = new TweetApplicationService();

// TODO これ、ツイートを消すところまでやりたい。。
// (それはバックエンドのテストとしてやるべきか...? てことはここでは mock 的な repository を使うべきか！)
describe('postTweet', () => {
  test('postTweet が成功すると status === 200 な Response が返ってくる', async () => {
    const tempContent = new TempContent('This is a tweet for Test using Jest.');
    const userId = new UserId('e15a1c26-9a65-4f89-91b0-99b2055ae26f');
    const tempTweetProps = { tempContent, userId };
    const tempTweet = new TempTweet(tempTweetProps);
    const tempTweetDataModel = new TempTweetDataModel(tempTweet);
    const response = await tweetApplicationService.postTweet(
      tempTweetDataModel,
    );
    expect(response.status).toBe(200);
  });
});

describe('getTimeLine', () => {
  test('getTimelineでfetchしたjsonをインスタンス化できている', async () => {
    const currentUserId = 'e15a1c26-9a65-4f89-91b0-99b2055ae26f';
    const tweetDataModelArray = await tweetApplicationService.getTimeLine(
      currentUserId,
    );

    expect(tweetDataModelArray[0]).toBeInstanceOf(TweetDataModel);
  });
});
