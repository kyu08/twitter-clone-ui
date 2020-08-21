import UserId from '../User/UserId/UserId';
import TempContent from './TempContent';

export interface AbstractTempTweetProps {
  content: TempContent;
  userId: UserId;
}

export abstract class AbstractTempTweet {
  // todo tempContent にする...?
  readonly content: TempContent;

  readonly userId: UserId;

  protected constructor(props: AbstractTempTweetProps) {
    const { content, userId } = props;
    this.content = content;
    this.userId = userId;
  }

  abstract changeContent(contentString: string): AbstractTempTweet;
}
