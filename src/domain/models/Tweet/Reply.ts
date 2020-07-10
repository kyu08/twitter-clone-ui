import { AbstractTweet } from './AbstractTweet';
import { AbstractTweetProps, IAbstractTweet } from './IAbstractTweet';
import TweetId from './TweetId';

interface ReplyProps extends AbstractTweetProps {
  readonly replyTo: TweetId;
}

// memo Reply に独自メソッドを実装する場合は interface ReplyMethods extends IAbstractTweet{ // methods } ってやる
type IReply = ReplyProps & IAbstractTweet;

export default class Reply extends AbstractTweet implements IReply {
  readonly replyTo: TweetId;

  // eslint-disable-next-line no-useless-constructor
  constructor(props: ReplyProps) {
    super(props);
    const { replyTo } = props;
    this.replyTo = replyTo;
  }

  like(): any {
    console.log(1);
  }

  cancelLike(): any {
    console.log(1);
  }

  retweet(): any {
    console.log(1);
  }

  cancelRetweet(): any {
    console.log(1);
  }

  returnUpdatedInstance(): any {
    console.log(1);
  }
}
