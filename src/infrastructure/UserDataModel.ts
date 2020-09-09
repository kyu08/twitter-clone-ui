import { IUser } from '../domain/models/User/IUser';
import { BirthdayProps } from '../domain/models/User/Profile/Birthday';

export class UserDataModel {
  readonly screenName: string;

  readonly userName: string;

  readonly headerImageURL: string;

  readonly userImageURL: string;

  readonly bio: string;

  readonly birthday?: BirthdayProps;

  readonly userLocation: string;

  readonly website: string;

  readonly userId: string;

  // todo 本当は ↓この3つ、 toLocaleString() して string として扱いたいかもしれない?
  // todo User, UserDataModel に followingList, followerList をもたせる
  // followerCount, followingCount はメソッドを通して提供する
  readonly followerCount: number;

  readonly followingCount: number;

  readonly tweetCount: number;

  readonly followingMap: Map<string, Date>;

  readonly followerMap: Map<string, Date>;

  constructor({
    profile,
    userId,
    followerCount,
    followingCount,
    tweetCount,
    followingMap,
    followerMap,
  }: IUser) {
    const {
      bio,
      birthday,
      headerImageURL,
      screenName,
      userImageURL,
      userLocation,
      userName,
      website,
    } = profile;
    if (birthday) {
      this.birthday = {
        year: birthday.year.year,
        month: birthday.month.month,
        day: birthday.day.day,
      };
    }
    this.screenName = screenName.screenName;
    this.userName = userName.userName;
    this.headerImageURL = headerImageURL.headerImageURL;
    this.userImageURL = userImageURL.userImageURL;
    this.bio = bio.bio;
    this.userLocation = userLocation.userLocation;
    this.website = website.website;
    this.userId = userId.userId;
    this.followerCount = followerCount;
    this.followingCount = followingCount;
    this.tweetCount = tweetCount;
    this.followingMap = followingMap;
    this.followerMap = followerMap;
  }
}
