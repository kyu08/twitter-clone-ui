interface IScreenName {
  readonly screenName: string;
}

const MAX_SCREEN_NAME_LENGTH = 10;

export default class ScreenName implements IScreenName {
  readonly screenName: string;

  constructor(screenName: string) {
    if (screenName.length > MAX_SCREEN_NAME_LENGTH)
      throw new Error('ScreenName Length Error!');
    this.screenName = screenName;
  }
}
