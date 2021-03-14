import UserId from '../../domain/models/User/UserId/UserId';
import { TempTweetDataModel } from '../DTO/TempTweetDataModel';
import TempContent from '../../domain/models/TempTweet/TempContent';
import { TempTweet } from '../../domain/models/TempTweet/ConcreteClasses/TempTweet';
import { TempTweetFactory } from '../../domain/factory/tempTweet/TempTweetFactory';

export class TempTweetDataModelFactory {
  readonly tempTweetFactory: TempTweetFactory;

  constructor() {
    this.tempTweetFactory = new TempTweetFactory();
  }

  createTempTweetDataModel(
    userId: UserId,
    contentProp: string,
  ): TempTweetDataModel {
    const tempContent = new TempContent(contentProp);
    const tempTweet = new TempTweet({ userId, tempContent });

    return new TempTweetDataModel(tempTweet);
  }

  updateTempTweetDataModel(
    tempTweetDataModel: TempTweetDataModel,
    content: string,
  ): TempTweetDataModel {
    const updatedTempTweet = this.tempTweetFactory.updateTempTweet(
      tempTweetDataModel,
      content,
    );

    return new TempTweetDataModel(updatedTempTweet);
  }
}
