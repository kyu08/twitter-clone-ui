import { TempTweet } from '../domain/models/TempTweet/ConcreteClasses/TempTweet';
import TempContent from '../domain/models/TempTweet/TempContent';
import UserId from '../domain/models/User/UserId/UserId';

describe('canSubmit', () => {
  test('tempContent.length = 0 のときcanSubmit が false を返す', () => {
    const tempContent = new TempContent('');
    const userId = new UserId('e15a1c26-9a65-4f89-91b0-99b2055ae26f');
    const tempTweetProps = { tempContent, userId };
    const tempTweet = new TempTweet(tempTweetProps);
    expect(tempTweet.canSubmit()).toBe(false);
  });

  test('tempContent.length = 1 のときcanSubmit が true を返す', () => {
    const tempContent = new TempContent('1');
    const userId = new UserId('e15a1c26-9a65-4f89-91b0-99b2055ae26f');
    const tempTweetProps = { tempContent, userId };
    const tempTweet = new TempTweet(tempTweetProps);
    expect(tempTweet.canSubmit()).toBe(true);
  });

  test('tempContent.length = 6 のときcanSubmit が true を返す', () => {
    const tempContent = new TempContent('hello.');
    const userId = new UserId('e15a1c26-9a65-4f89-91b0-99b2055ae26f');
    const tempTweetProps = { tempContent, userId };
    const tempTweet = new TempTweet(tempTweetProps);
    expect(tempTweet.canSubmit()).toBe(true);
  });

  test('tempContent.length = 140 のときcanSubmit が true を返す', () => {
    const tempContent = new TempContent(
      '12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890',
    );
    const userId = new UserId('e15a1c26-9a65-4f89-91b0-99b2055ae26f');
    const tempTweetProps = { tempContent, userId };
    const tempTweet = new TempTweet(tempTweetProps);
    expect(tempTweet.canSubmit()).toBe(true);
  });

  test('tempContent.length = 141 のときcanSubmit が false を返す', () => {
    const tempContent = new TempContent(
      '123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901',
    );
    const userId = new UserId('e15a1c26-9a65-4f89-91b0-99b2055ae26f');
    const tempTweetProps = { tempContent, userId };
    const tempTweet = new TempTweet(tempTweetProps);
    expect(tempTweet.canSubmit()).toBe(false);
  });
});
