import { UserDataModel } from '../../../infrastructure/UserDataModel';
import { IUser } from './IUser';
import { User } from './User';
import UserId from './UserId/UserId';
import Profile from './Profile/Profile';
import Birthday from './Profile/Birthday';
import ScreenName from './Profile/ScreenName';
import UserName from './Profile/UserName';
import HeaderImageURL from './Profile/HeaderImageURL';
import UserImageURL from './Profile/UserImageURL';
import Bio from './Profile/Bio';
import UserLocation from './Profile/UserLocation';
import Website from './Profile/Website';
import Year from './Profile/Birthday/Year';
import Day from './Profile/Birthday/Day';
import Month from './Profile/Birthday/Month';

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
}
