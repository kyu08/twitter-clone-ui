import { TempTweet } from '../../models/TempTweet/ConcreteClasses/TempTweet';
import TempContent from '../../models/TempTweet/TempContent';
import UserId from '../../models/User/UserId/UserId';
import { TempTweetDataModel } from '../../../applicationService/DTO/TempTweetDataModel';

export class TempTweetFactory {
  createFromDataModel(tempTweetDataModel: TempTweetDataModel): TempTweet {
    const { userId: userIdProp, content: contentProp } = tempTweetDataModel;
    const userId = new UserId(userIdProp);
    const tempContent = new TempContent(contentProp);

    return new TempTweet({ userId, tempContent });
  }

  updateTempTweet(
    tempTweetDataModel: TempTweetDataModel,
    content: string,
  ): TempTweet {
    const { userId: userIdProp } = tempTweetDataModel;
    const userId = new UserId(userIdProp);
    const contentUpdated = new TempContent(content);
    const props = { userId, tempContent: contentUpdated };

    return new TempTweet(props);
  }
}
