import { TweetApplicationService } from '../applicationService/TweetApplicationService';
import { TweetDataModel } from '../applicationService/DTO/TweetDataModel';

const tweetApplicationService = new TweetApplicationService();

test('getTimelineでfetchしたjsonをインスタンス化できている', async () => {
  const currentUserId = 'e15a1c26-9a65-4f89-91b0-99b2055ae26f';
  const tweetDataModelArray = await tweetApplicationService.getTimeLine(
    currentUserId,
  );

  expect(tweetDataModelArray[0]).toBeInstanceOf(TweetDataModel);
});
