import UserId from '../domain/models/User/UserId/UserId';
import TempContent from '../domain/models/TempTweet/TempContent';
import { AbstractTempTweet } from '../domain/models/TempTweet/AbstractTempTweet';

export type TempTweetData = { user_id: string; content: string };

export class TempTweetDataModel {
  readonly userId: UserId;

  readonly content: TempContent;

  constructor(props: AbstractTempTweet) {
    const { userId, content } = props;
    this.userId = userId;
    this.content = content;
  }

  private getUserId(): string {
    return this.userId.userId;
  }

  private getContent(): string {
    return this.content.content;
  }

  // todo これ TempTweet でやればいい気がする
  // todo ここで content.length の validation するか？
  build(): TempTweetData {
    return { user_id: this.getUserId(), content: this.getContent() };
  }
}
