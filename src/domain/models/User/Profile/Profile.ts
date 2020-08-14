import Bio from './Bio';
import UserLocation from './UserLocation';
import ScreenName from './ScreenName';
import UserName from './UserName';
import Website from './Website';
import Birthday, { BirthdayProps, IBirthday } from './Birthday';
import UserImage from './UserImage';
import HeaderImage from './HeaderImage';
import Day from './Birthday/Day';
import Year from './Birthday/Year';
import Month from './Birthday/Month';

interface ProfileProps {
  readonly screenName: ScreenName;
  readonly userName: UserName;
  // todo imageURL にする
  readonly headerImage: HeaderImage;
  // todo imageURL にする
  readonly userImage: UserImage;
  readonly bio: Bio;
  readonly birthday: Birthday;
  readonly userLocation: UserLocation;
  readonly website: Website;
}

// note userImage, bio, userLocation, website optional にするかも
export default class Profile {
  readonly screenName: ScreenName;

  readonly userName: UserName;

  readonly headerImage: HeaderImage;

  readonly userImage: UserImage;

  readonly bio: Bio;

  readonly birthday: Birthday;

  readonly userLocation: UserLocation;

  readonly website: Website;

  constructor(props: ProfileProps) {
    const {
      screenName,
      userName,
      headerImage,
      userImage,
      bio,
      birthday,
      userLocation,
      website,
    } = props;
    this.userName = userName;
    this.screenName = screenName;
    this.headerImage = headerImage;
    this.userImage = userImage;
    this.bio = bio;
    this.birthday = birthday;
    this.userLocation = userLocation;
    this.website = website;
  }

  updateBio(bioString: string): Profile {
    const bio = new Bio(bioString);
    const updatedProps = { ...this, bio };

    return new Profile(updatedProps);
  }

  updateBirthday(birthdayProps: BirthdayProps): Profile {
    const { day, month, year } = birthdayProps;
    const props: IBirthday = {
      day: new Day(day),
      month: new Month(month),
      year: new Year(year),
    };
    const birthday = new Birthday(props);
    const updatedProps = { ...this, birthday };

    return new Profile(updatedProps);
  }

  updateUserLocation(userLocationString: string): Profile {
    const userLocation = new UserLocation(userLocationString);
    const updatedProps = { ...this, userLocation };

    return new Profile(updatedProps);
  }

  updateWebsite(webSiteString: string): Profile {
    const website = new Website(webSiteString);
    const updatedProps = { ...this, website };

    return new Profile(updatedProps);
  }

  updateUserName(userNameString: string): Profile {
    const userName = new UserName(userNameString);
    const updatedProps = { ...this, userName };

    return new Profile(updatedProps);
  }
}
