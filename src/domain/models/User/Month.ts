interface IMonth {
  readonly month: number;
}

export default class Month implements IMonth {
  readonly month: number;

  constructor(month: number) {
    // todo UI側との兼ね合いによってはここのvalidationは不要？
    if (Month.isInvalid(month)) throw new Error('Month Validation Error!');
    this.month = month;
  }

  static isInvalid(month: number): boolean {
    const LOWER_LIMIT = 1;
    const UPPER_LIMIT = 12;
    const isInvalidRange = month < LOWER_LIMIT || month > UPPER_LIMIT;

    return isInvalidRange || !Number.isInteger(month);
  }
}
