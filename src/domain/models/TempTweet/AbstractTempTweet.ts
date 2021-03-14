import UserId from '../User/UserId/UserId';
import TempContent from './TempContent';

export interface AbstractTempTweetProps {
  tempContent: TempContent;
  userId: UserId;
}

type IAbstractTempTweet = {
  tempContent: TempContent;
  userId: UserId;
  changeContent(contentString: string): AbstractTempTweet;
  build(): TempTweetData;
};

export type TempTweetData = {
  tempContent: string;
  userId: string;
};

export abstract class AbstractTempTweet implements IAbstractTempTweet {
  readonly tempContent: TempContent;

  readonly userId: UserId;

  protected constructor({ tempContent, userId }: AbstractTempTweetProps) {
    this.tempContent = tempContent;
    this.userId = userId;
  }

  abstract changeContent(contentString: string): AbstractTempTweet;

  abstract build(): TempTweetData;
}
