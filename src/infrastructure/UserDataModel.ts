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

  // todo 本当は ↓この3つ、 toLocaleString() して string として扱いたい
  readonly followerCount: number;

  readonly followingCount: number;

  readonly tweetCount: number;

  constructor({
    profile,
    userId,
    followerCount,
    followingCount,
    tweetCount,
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
  }
}
