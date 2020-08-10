import Content from '../Tweet/Content/Content';
import UserId from '../User/UserId/UserId';

export interface AbstractTempTweetProps {
  content: Content;
  userId: UserId;
}

export class AbstractTempTweet {
  readonly content: Content;

  readonly userId: UserId;

  constructor(props: AbstractTempTweetProps) {
    const { content, userId } = props;
    this.content = content;
    this.userId = userId;
  }
}
