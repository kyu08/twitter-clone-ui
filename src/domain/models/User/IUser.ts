import { TODO } from '../../../util/Util';

// todo value object 使おう
export interface IUser {
  // todo userId どうやって生成しよう
  readonly userId: TODO<'userId'>;
  readonly following: Set<TODO<'userId'>>;
  readonly follower: Set<TODO<'userId'>>;
  readonly profile: TODO<'profile'>;
}
