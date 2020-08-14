export default class Year {
  readonly year: number;

  constructor(year: number) {
    if (Year.isInvalid(year)) throw new Error('Year Validation Error!');
    this.year = year;
  }

  private static isInvalid(year: number): boolean {
    const now = new Date();
    const LOWER_LIMIT = 1900;
    const UPPER_LIMIT = now.getFullYear();
    const isInvalidRange = year > UPPER_LIMIT || year < LOWER_LIMIT;

    return isInvalidRange || !Number.isInteger(year);
  }
}
