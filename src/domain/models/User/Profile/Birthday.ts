import Year from './Birthday/Year';
import Month from './Birthday/Month';
import Day from './Birthday/Day';

export interface IBirthday {
  readonly year: Year;
  readonly month: Month;
  readonly day: Day;
}

export interface BirthdayProps {
  year: number;
  month: number;
  day: number;
}

export default class Birthday {
  readonly year: Year;

  readonly month: Month;

  readonly day: Day;

  constructor(props: IBirthday) {
    const { year, month, day } = props;
    this.year = year;
    this.month = month;
    this.day = day;
  }
}
