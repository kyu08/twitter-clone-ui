interface IWebsite {
  readonly website: string;
}

const MAX_WEBSITE_LENGTH = 30;

export default class Website implements IWebsite {
  readonly website: string;

  constructor(website: string) {
    if (website.length > MAX_WEBSITE_LENGTH)
      throw new Error('Website Length Error!');
    this.website = website;
  }
}
