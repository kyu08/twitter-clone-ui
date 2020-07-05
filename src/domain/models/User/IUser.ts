import { TODO } from '../../../util/Util';

// todo value object 使おう
export interface IUser {
  readonly UUID: TODO<'UUID'>;
  readonly userId: TODO<'userId'>;
  readonly userName: TODO<'userName'>;
  readonly headerImage: TODO<'headerImage'>;
  readonly userImage: TODO<'userImage'>;
  readonly following: Set<TODO<'userId'>>;
  readonly follower: Set<TODO<'userId'>>;
  readonly bio: TODO<'bio'>;
}
