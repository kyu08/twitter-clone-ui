import Profile from './Profile/Profile';
import UserId from './UserId/UserId';
import Following from './Following/Following';
import Follower from './Follower/Follower';

export interface IUser {
  // todo follow method と同時に followed method を実行したいけどどこでやろうね
  readonly follower: Follower;
  readonly following: Following;
  readonly profile: Profile;
  readonly userId: UserId;
  follow(userId: UserId): IUser;
  unFollow(userId: UserId): IUser;
  followed(userId: UserId): IUser;
  unFollowed(userId: UserId): IUser;
}
