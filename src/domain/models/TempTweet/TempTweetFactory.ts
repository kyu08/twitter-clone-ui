import { TempTweet } from './ConcreteClasses/TempTweet';
import TempContent from './TempContent';
import UserId from '../User/UserId/UserId';
import { TempTweetDataModel } from '../../../infrastructure/TempTweetDataModel';

export class TempTweetFactory {
  createTempTweetDataModel(
    userId: UserId,
    contentProp: string,
  ): TempTweetDataModel {
    const tempContent = new TempContent(contentProp);
    const tempTweet = new TempTweet({ userId, tempContent });

    return new TempTweetDataModel(tempTweet);
  }

  createFromDataModel(tempTweetDataModel: TempTweetDataModel): TempTweet {
    const { userId: userIdProp, content: contentProp } = tempTweetDataModel;
    const userId = new UserId(userIdProp);
    const tempContent = new TempContent(contentProp);

    return new TempTweet({ userId, tempContent });
  }

  // todo static or not
  static updateTempTweet(
    tempTweetDataModel: TempTweetDataModel,
    content: string,
  ): TempTweet {
    const { userId: userIdProp } = tempTweetDataModel;
    const userId = new UserId(userIdProp);
    const contentUpdated = new TempContent(content);
    const props = { userId, tempContent: contentUpdated };

    return new TempTweet(props);
  }

  // todo static or not
  updateTempTweetDataModel(
    tempTweetDataModel: TempTweetDataModel,
    content: string,
  ): TempTweetDataModel {
    const updatedTempTweet = TempTweetFactory.updateTempTweet(
      tempTweetDataModel,
      content,
    );

    return new TempTweetDataModel(updatedTempTweet);
  }
}
