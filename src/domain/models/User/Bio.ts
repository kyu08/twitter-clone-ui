import { MAX_BIO_LENGTH } from '../../../util/Util';

interface IBio {
  readonly bio: string;
}

export default class Bio implements IBio {
  readonly bio: string;

  constructor(bio: string) {
    if (bio.length > MAX_BIO_LENGTH) throw new Error('Bio Length Error!');
    this.bio = bio;
  }
}
