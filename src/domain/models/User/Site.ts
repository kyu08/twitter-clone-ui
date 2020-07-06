interface ISite {
  readonly site: string;
}

const MAX_SITE_LENGTH = 10;

export default class Site implements ISite {
  readonly site: string;

  constructor(site: string) {
    if (site.length > MAX_SITE_LENGTH) throw new Error('Site Length error!!');
    this.site = site;
  }
}
