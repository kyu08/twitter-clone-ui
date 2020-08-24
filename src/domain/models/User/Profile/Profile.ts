import Bio from './Bio';
import UserLocation from './UserLocation';
import ScreenName from './ScreenName';
import UserName from './UserName';
import Website from './Website';
import Birthday, { BirthdayProps, IBirthday } from './Birthday';
import UserImageURL from './UserImageURL';
import HeaderImageURL from './HeaderImageURL';
import Day from './Birthday/Day';
import Year from './Birthday/Year';
import Month from './Birthday/Month';

interface ProfileProps {
  readonly screenName: ScreenName;
  readonly userName: UserName;
  readonly headerImageURL: HeaderImageURL;
  readonly userImageURL: UserImageURL;
  readonly bio: Bio;
  readonly birthday?: Birthday;
  readonly userLocation: UserLocation;
  readonly website: Website;
}

// note UserImageURL, birthday optional にするかも
export default class Profile {
  readonly screenName: ScreenName;

  readonly userName: UserName;

  readonly headerImageURL: HeaderImageURL;

  readonly userImageURL: UserImageURL;

  readonly bio: Bio;

  readonly birthday?: Birthday;

  readonly userLocation: UserLocation;

  readonly website: Website;

  constructor({
    screenName,
    userName,
    headerImageURL,
    userImageURL,
    bio,
    birthday,
    userLocation,
    website,
  }: ProfileProps) {
    this.userName = userName;
    this.screenName = screenName;
    this.headerImageURL = headerImageURL;
    this.userImageURL = userImageURL;
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
