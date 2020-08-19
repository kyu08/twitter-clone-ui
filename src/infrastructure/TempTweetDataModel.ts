import UserId from '../domain/models/User/UserId/UserId';
import TempContent from '../domain/models/TempTweet/TempContent';
import { AbstractTempTweet } from '../domain/models/TempTweet/AbstractTempTweet';

type TempTweetData = { user_id: string; content: string };

export class TempTweetDataModel {
  private readonly userId: UserId;

  private readonly content: TempContent;

  constructor(props: AbstractTempTweet) {
    const { userId, content } = props;
    this.userId = userId;
    this.content = content;
  }

  getUserId(): string {
    return this.userId.userId;
  }

  getContent(): string {
    return this.content.content;
  }

  build(): TempTweetData {
    return { user_id: this.getUserId(), content: this.getContent() };
  }
}
