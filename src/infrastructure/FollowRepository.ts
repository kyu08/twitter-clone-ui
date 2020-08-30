import { hostURL } from '../util/Util';

export class FollowRepository {
  follow(followingUserId: string, followerUserId: string): void {
    const followData = { followingUserId, followerUserId };
    fetch(`${hostURL}/follow`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(followData),
    });
  }

  unFollow(followingUserId: string, followerUserId: string): void {
    const followData = { followingUserId, followerUserId };
    fetch(`${hostURL}/follow`, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(followData),
    });
  }

  isFollowing(
    followingUserId: string,
    followerUserId: string,
  ): Promise<Response> {
    return fetch(
      `${hostURL}/follow?followingUserId=${followingUserId}&followerUserId=${followerUserId}`,
      {
        mode: 'cors',
      },
    );
  }
}
