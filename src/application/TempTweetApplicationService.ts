import { TempTweetFactory } from '../domain/models/TempTweet/TempTweetFactory';
import { TempTweetDataModel } from '../infrastructure/TempTweetDataModel';

export class TempTweetApplicationService {
  static readonly tempTweetFactory = new TempTweetFactory();

  static getTempTweetDataModel(
    tempTweetDataModel: TempTweetDataModel | undefined,
    userId: string,
    contentEntered: string,
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
    userId: string,
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
