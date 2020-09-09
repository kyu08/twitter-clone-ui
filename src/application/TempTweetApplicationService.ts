import { TempTweetFactory } from '../domain/models/TempTweet/TempTweetFactory';
import { TempTweetDataModel } from '../infrastructure/TempTweetDataModel';
import UserId from '../domain/models/User/UserId/UserId';

export class TempTweetApplicationService {
  readonly tempTweetFactory: TempTweetFactory;

  constructor() {
    this.tempTweetFactory = new TempTweetFactory();
  }

  getTempTweetDataModel(
    userId: UserId,
    contentEntered: string,
    tempTweetDataModel?: TempTweetDataModel,
  ): TempTweetDataModel {
    if (!tempTweetDataModel) {
      return this.createTempTweetDataModel(userId, contentEntered);
    }

    return this.updateTempTweetDataModel(tempTweetDataModel, contentEntered);
  }

  createTempTweetDataModel(
    userId: UserId,
    content: string,
  ): TempTweetDataModel {
    return this.tempTweetFactory.createTempTweetDataModel(userId, content);
  }

  updateTempTweetDataModel(
    tempTweetDataModel: TempTweetDataModel,
    content: string,
  ): TempTweetDataModel {
    return this.tempTweetFactory.updateTempTweetDataModel(
      tempTweetDataModel,
      content,
    );
  }

  canSubmitTweet(tempTweetDataModel: TempTweetDataModel): boolean {
    const tempTweet = this.tempTweetFactory.createFromDataModel(
      tempTweetDataModel,
    );

    return tempTweet.canSubmit();
  }
}
