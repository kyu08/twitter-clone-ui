import UserId from '../User/UserId/UserId';
import TempContent from './TempContent';

export interface AbstractTempTweetProps {
  tempContent: TempContent;
  userId: UserId;
}

export abstract class AbstractTempTweet {
  // todo #192 tempContent にする...?
  readonly tempContent: TempContent;

  readonly userId: UserId;

  protected constructor({ tempContent, userId }: AbstractTempTweetProps) {
    this.tempContent = tempContent;
    this.userId = userId;
  }

  abstract changeContent(contentString: string): AbstractTempTweet;
}
