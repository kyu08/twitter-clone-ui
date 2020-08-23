import { TempTweet } from './ConcreteClasses/TempTweet';
import TempContent from './TempContent';
import UserId from '../User/UserId/UserId';
import { TempTweetDataModel } from '../../../infrastructure/TempTweetDataModel';
import Content from '../Tweet/Content/Content';

export class TempTweetFactory {
  createTempTweetDataModel(
    userIdProp: string,
    contentProp: string,
  ): TempTweetDataModel {
    const userId = new UserId(userIdProp);
    const content = new TempContent(contentProp);
    const tempTweet = new TempTweet({ userId, content });

    return new TempTweetDataModel(tempTweet);
  }

  createFromDataModel(tempTweetDataModel: TempTweetDataModel): TempTweet {
    const { userId: userIdProp, content: contentProp } = tempTweetDataModel;
    const userId = new UserId(userIdProp);
    const content = new Content(contentProp);

    return new TempTweet({ userId, content });
  }

  // todo static or not
  static updateTempTweet(
    tempTweetDataModel: TempTweetDataModel,
    content: string,
  ): TempTweet {
    const { userId: userIdProp } = tempTweetDataModel;
    const userId = new UserId(userIdProp);
    const contentUpdated = new TempContent(content);
    const props = { userId, content: contentUpdated };

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
