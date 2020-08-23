import { AbstractTempTweet } from '../domain/models/TempTweet/AbstractTempTweet';

export type TempTweetData = { user_id: string; content: string };

export class TempTweetDataModel {
  readonly userId: string;

  readonly content: string;

  constructor(props: AbstractTempTweet) {
    const { userId, content } = props;
    this.userId = userId.userId;
    this.content = content.content;
  }

  private getUserId(): string {
    return this.userId;
  }

  private getContent(): string {
    return this.content;
  }

  build(): TempTweetData {
    return { user_id: this.getUserId(), content: this.getContent() };
  }
}
