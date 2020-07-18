import Birthday from './Profile/Birthday';
import Profile from './Profile/Profile';
import { User } from './User';
import Bio from './Profile/Bio';
import Day from './Profile/Birthday/Day';
import Follower from './Follower/Follower';
import Following from './Following/Following';
import HeaderImage from './Profile/HeaderImage';
import Month from './Profile/Birthday/Month';
import ScreenName from './Profile/ScreenName';
import UserId from './UserId/UserId';
import UserImage from './Profile/UserImage';
import UserLocation from './Profile/UserLocation';
import UserName from './Profile/UserName';
import Website from './Profile/Website';
import Year from './Profile/Birthday/Year';
import { IProps, IUserProps } from '../../../inMemory/InMemoryUsers';

export default class UserFactory {
  static toInstanceUserId(set: any[]): Set<UserId> {
    // todo ださいきがする
    if (JSON.stringify(set) === '{}') return new Set();
    const setProps = set.map((u) => {
      return new UserId(u);
    });

    return new Set(setProps);
  }

  static createUserPropsFromJSON(propsJSON: any): IUserProps {
    const { follower, following, userId, profile } = propsJSON;
    const followerParsed = UserFactory.toInstanceUserId(follower.follower);
    const followingParsed = UserFactory.toInstanceUserId(following.following);

    const props = {
      bio: profile.bio.bio,
      day: profile.birthday.day.day,
      follower: followerParsed,
      following: followingParsed,
      headerImage: profile.headerImage.headerImage,
      month: profile.birthday.month.month,
      screenName: profile.screenName.screenName,
      userId: userId.userId,
      userImage: profile.userImage.userImage,
      userLocation: profile.userLocation.userLocation,
      userName: profile.userName.userName,
      website: profile.website.website,
      year: profile.birthday.year.year,
    };

    return UserFactory.createProps(props);
  }

  static createProps(props: IProps): IUserProps {
    return {
      bio: new Bio(props.bio),
      day: new Day(props.day),
      follower: new Follower(props.follower),
      following: new Following(props.following),
      headerImage: new HeaderImage(props.headerImage),
      month: new Month(props.month),
      screenName: new ScreenName(props.screenName),
      userId: new UserId(props.userId),
      userImage: new UserImage(props.userImage),
      userLocation: new UserLocation(props.userLocation),
      userName: new UserName(props.userName),
      website: new Website(props.website),
      year: new Year(props.year),
    };
  }

  static create(props: IUserProps) {
    const {
      bio,
      day,
      follower,
      following,
      headerImage,
      month,
      screenName,
      userId,
      userImage,
      userLocation,
      userName,
      website,
      year,
    } = props;
    const birthday = new Birthday({ day, month, year });
    const profile = new Profile({
      birthday,
      bio,
      headerImage,
      screenName,
      userImage,
      userLocation,
      userName,
      website,
    });

    return new User({ profile, follower, following, userId });
  }
}
