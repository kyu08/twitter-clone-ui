export default class Month {
  readonly month: number;

  constructor(month: number) {
    if (Month.isInvalid(month)) throw new Error('Month Validation Error!');
    this.month = month;
  }

  private static isInvalid(month: number): boolean {
    const LOWER_LIMIT = 1;
    const UPPER_LIMIT = 12;
    const isInvalidRange = month < LOWER_LIMIT || month > UPPER_LIMIT;

    return isInvalidRange || !Number.isInteger(month);
  }
}
