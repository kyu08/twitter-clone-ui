interface IUserLocation {
  readonly userLocation: string;
}

const MAX_USER_LOCATION_LENGTH = 10;

export default class UserLocation implements IUserLocation {
  readonly userLocation: string;

  constructor(userLocation: string) {
    if (userLocation.length > MAX_USER_LOCATION_LENGTH)
      throw new Error('UserLocation Length error!!');
    this.userLocation = userLocation;
  }
}
