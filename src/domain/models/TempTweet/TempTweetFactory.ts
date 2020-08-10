import { TempTweet } from './ConcreteClasses/TempTweet';
import { AbstractTempTweetProps } from './AbstractTempTweet';
import TempContent from './TempContent';
import UserId from '../User/UserId/UserId';

export class TempTweetFactory {
  createTempTweet(userId: string, content: string): TempTweet {
    const props: AbstractTempTweetProps = {
      content: new TempContent(content),
      userId: new UserId(userId),
    };

    return new TempTweet(props);
  }
}
