import { hostURL } from '../../util/Util';
import { IFollowRepository } from '../../domain/repository/follow/IFollowRepository';

export class FollowRepositoryImpl implements IFollowRepository {
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
}
