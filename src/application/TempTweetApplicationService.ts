import { TempTweetFactory } from '../domain/models/TempTweet/TempTweetFactory';
import { TempTweetDataModel } from '../infrastructure/TempTweetDataModel';
import UserId from '../domain/models/User/UserId/UserId';

export class TempTweetApplicationService {
  static readonly tempTweetFactory = new TempTweetFactory();

  static getTempTweetDataModel(
    userId: UserId,
    contentEntered: string,
    tempTweetDataModel?: TempTweetDataModel,
  ): TempTweetDataModel {
    if (!tempTweetDataModel) {
      return TempTweetApplicationService.createTempTweetDataModel(
        userId,
        contentEntered,
      );
    }

    return TempTweetApplicationService.updateTempTweetDataModel(
      tempTweetDataModel,
      contentEntered,
    );
  }

  static createTempTweetDataModel(
    userId: UserId,
    content: string,
  ): TempTweetDataModel {
    return TempTweetApplicationService.tempTweetFactory.createTempTweetDataModel(
      userId,
      content,
    );
  }

  static updateTempTweetDataModel(
    tempTweetDataModel: TempTweetDataModel,
    content: string,
  ): TempTweetDataModel {
    return TempTweetApplicationService.tempTweetFactory.updateTempTweetDataModel(
      tempTweetDataModel,
      content,
    );
  }

  static canSubmitTweet(tempTweetDataModel: TempTweetDataModel): boolean {
    const tempTweet = TempTweetApplicationService.tempTweetFactory.createFromDataModel(
      tempTweetDataModel,
    );

    return tempTweet.canSubmit();
  }
}
