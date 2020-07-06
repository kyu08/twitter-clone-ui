interface IYear {
  readonly year: number;
}

export default class Year implements IYear {
  readonly year: number;

  constructor(year: number) {
    if (Year.isInvalid(year)) throw new Error('Year Validation Error!');
    this.year = year;
  }

  static isInvalid(year: number): boolean {
    const now = new Date();
    const UPPER_LIMIT = now.getFullYear();
    const LOWER_LIMIT = 1900;
    const isFuture = year > UPPER_LIMIT;
    const isBefore1900 = year < LOWER_LIMIT;

    return isFuture || isBefore1900 || !Number.isInteger(year);
  }
}
