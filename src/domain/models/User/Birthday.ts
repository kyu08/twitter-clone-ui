import Year from './Year';
import Month from './Month';
import Day from './Day';

interface IBirthday {
  readonly year: Year;
  readonly month: Month;
  readonly day: Day;
}

export default class Birthday implements IBirthday {
  readonly year: Year;

  readonly month: Month;

  readonly day: Day;

  constructor(props: IBirthday) {
    // todo 月と日の組み合わせが適当かチェックする
    const { year, month, day } = props;
    this.year = year;
    this.month = month;
    this.day = day;
  }
}
