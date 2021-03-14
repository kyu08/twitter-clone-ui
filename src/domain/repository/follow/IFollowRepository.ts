export type IFollowRepository = {
  follow(followingUserId: string, followerUserId: string): void;
  unFollow(followingUserId: string, followerUserId: string): void;
};
