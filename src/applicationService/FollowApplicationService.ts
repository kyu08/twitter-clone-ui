import { FollowRepositoryImpl } from '../infrastructure/repository/FollowRepositoryImpl';
import { IFollowRepository } from '../domain/repository/follow/IFollowRepository';

export class FollowApplicationService {
  readonly followRepository: IFollowRepository;

  constructor() {
    // TODO DI したい
    this.followRepository = new FollowRepositoryImpl();
  }

  follow(followingUserId: string, followerUserId: string): void {
    this.followRepository.follow(followingUserId, followerUserId);
  }

  unFollow(followingUserId: string, followerUserId: string): void {
    this.followRepository.unFollow(followingUserId, followerUserId);
  }
}
