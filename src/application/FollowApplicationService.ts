import { FollowRepository } from '../infrastructure/FollowRepository';

export class FollowApplicationService {
  readonly followRepository: FollowRepository;

  constructor() {
    this.followRepository = new FollowRepository();
  }

  follow(followingUserId: string, followerUserId: string): void {
    this.followRepository.follow(followingUserId, followerUserId);
  }

  unFollow(followingUserId: string, followerUserId: string): void {
    this.followRepository.unFollow(followingUserId, followerUserId);
  }
}
