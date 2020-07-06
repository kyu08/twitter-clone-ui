import Year from './Yaer';

interface IBirthday {
  readonly year: Year;
  // readonly month: Month;
  // readonly day: Day;
}

export default class Birthday implements IBirthday {
  readonly year: Year;

  // readonly month: Month;
  //
  // readonly day: Day;

  constructor(props: IBirthday) {
    // const { year, month, day } = props;
    // this.year = year;
    // this.month = month;
    // this.day = day;
    this.year = props.year;
  }
}
