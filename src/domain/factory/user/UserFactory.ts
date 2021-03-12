import { UserDataModel } from '../../../applicationService/DTO/UserDataModel';
import { User } from '../../models/User/User';
import UserId from '../../models/User/UserId/UserId';
import UserImageURL from '../../models/User/Profile/UserImageURL';
import Profile from '../../models/User/Profile/Profile';
import Day from '../../models/User/Profile/Birthday/Day';
import HeaderImageURL from '../../models/User/Profile/HeaderImageURL';
import Bio from '../../models/User/Profile/Bio';
import Month from '../../models/User/Profile/Birthday/Month';
import { IUser } from '../../models/User/IUser';
import UserLocation from '../../models/User/Profile/UserLocation';
import Year from '../../models/User/Profile/Birthday/Year';
import Website from '../../models/User/Profile/Website';
import Birthday from '../../models/User/Profile/Birthday';
import ScreenName from '../../models/User/Profile/ScreenName';
import UserName from '../../models/User/Profile/UserName';

type UserPropsDetail = {
  id: string;
  screen_name: string;
  user_name: string;
  header_image_url: string;
  user_image_url: string;
  bio: string;
  birthday: string;
  user_location: string;
  website: string;
  created_at: string;
  tweetCount: number;
  followingMap: [string, string][];
  followerMap: [string, string][];
};

export class UserFactory {
  createUserDataModel(user: IUser): UserDataModel {
    return new UserDataModel(user);
  }

  convertUserDataModelToUser(userDataModel: UserDataModel): IUser {
    const {
      screenName,
      userName,
      headerImageURL,
      userImageURL,
      bio,
      userLocation,
      website,
      userId,
      birthday: birthdayProps,
      tweetCount,
      followingMap,
      followerMap,
    } = userDataModel;
    const profileProps = {
      screenName: new ScreenName(screenName),
      userName: new UserName(userName),
      headerImageURL: new HeaderImageURL(headerImageURL),
      userImageURL: new UserImageURL(userImageURL),
      bio: new Bio(bio),
      userLocation: new UserLocation(userLocation),
      website: new Website(website),
    };
    if (birthdayProps) {
      const { year, month, day } = birthdayProps;
      const birthday = new Birthday({
        year: new Year(year),
        month: new Month(month),
        day: new Day(day),
      });
      Object.assign(profileProps, birthday);
    }
    const profile = new Profile(profileProps);
    const userProps = {
      profile,
      tweetCount,
      userId: new UserId(userId),
      followingMap,
      followerMap,
    };

    return new User(userProps);
  }

  toInstance({
    id: userId,
    screen_name: screenName,
    user_name: userName,
    header_image_url: headerImageURL,
    user_image_url: userImageURL,
    bio,
    birthday: birthdayProp,
    user_location: userLocation,
    website,
    // created_at: createdAt,
    tweetCount,
    followerMap: followerMapProp,
    followingMap: followingMapProp,
  }: UserPropsDetail): User {
    const profileProps = {
      screenName: new ScreenName(screenName),
      userName: new UserName(userName),
      headerImageURL: new HeaderImageURL(headerImageURL),
      userImageURL: new UserImageURL(userImageURL),
      bio: new Bio(bio),
      userLocation: new UserLocation(userLocation),
      website: new Website(website),
    };
    if (birthdayProp) {
      const date = new Date(birthdayProp);
      const year = new Year(date.getFullYear());
      const month = new Month(date.getMonth() + 1);
      const day = new Day(date.getDate());
      Object.assign(profileProps, {
        birthday: new Birthday({ year, month, day }),
      });
    }
    const profile = new Profile(profileProps);

    // todo refactor
    const followingMapPropInstance: [string, Date][] = followingMapProp
      ? followingMapProp.map((followInfo) => {
          return [followInfo[0], new Date(followInfo[1])];
        })
      : [];
    const followerMapPropInstance: [string, Date][] = followerMapProp
      ? followerMapProp.map((followInfo) => {
          return [followInfo[0], new Date(followInfo[1])];
        })
      : [];
    const followingMap = new Map(followingMapPropInstance);
    const followerMap = new Map(followerMapPropInstance);

    return new User({
      profile,
      tweetCount,
      userId: new UserId(userId),
      followingMap,
      followerMap,
    });
  }
}
