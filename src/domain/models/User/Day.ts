interface IDay {
  readonly day: number;
}

export default class Day implements IDay {
  readonly day: number;

  constructor(day: number) {
    if (Day.isInvalid(day)) throw new Error('Day Validation Error!');
    this.day = day;
  }

  static isInvalid(day: number): boolean {
    const LOWER_LIMIT = 1;
    const UPPER_LIMIT = 31;
    const isInvalidRange = day < LOWER_LIMIT || day > UPPER_LIMIT;

    return isInvalidRange || !Number.isInteger(day);
  }
}
