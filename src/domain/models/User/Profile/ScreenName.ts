interface IScreenName {
  readonly screenName: string;
}

export const MAX_SCREEN_NAME_LENGTH = 10;

export default class ScreenName implements IScreenName {
  readonly screenName: string;

  // memo 一意な値であることを保証しないといけないんよな〜
  // todo 半角文字のみにしたい
  constructor(screenName: string) {
    if (screenName.length > MAX_SCREEN_NAME_LENGTH)
      throw new Error('ScreenName Length Error!( > 10 )');
    this.screenName = screenName;
  }
}
