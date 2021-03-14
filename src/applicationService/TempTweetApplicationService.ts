import { TempTweetFactory } from '../domain/factory/tempTweet/TempTweetFactory';
import UserId from '../domain/models/User/UserId/UserId';
import { TempTweetDataModel } from './DTO/TempTweetDataModel';
import { TempTweetDataModelFactory } from './DTOFactory/TempTweetDataModelFactory';

export class TempTweetApplicationService {
  readonly tempTweetDataModelFactory: TempTweetDataModelFactory;

  readonly tempTweetFactory: TempTweetFactory;

  constructor() {
    this.tempTweetDataModelFactory = new TempTweetDataModelFactory();
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
    return this.tempTweetDataModelFactory.createTempTweetDataModel(
      userId,
      content,
    );
  }

  updateTempTweetDataModel(
    tempTweetDataModel: TempTweetDataModel,
    content: string,
  ): TempTweetDataModel {
    return this.tempTweetDataModelFactory.updateTempTweetDataModel(
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
