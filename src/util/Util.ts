import UserId from '../domain/models/User/UserId/UserId';

export type TODO<T> = any;

export const hostURL = 'http://localhost:3001';

// todo ↓これも
export const deleteFromSet = (
  copy: Set<UserId>,
  userId: UserId,
): Set<UserId> => {
  const userIdFound = Array.from(copy.values()).find(
    (e) => e.userId === userId.userId,
  );
  if (userIdFound) copy.delete(userIdFound);

  return copy;

  // todo ↓これもあまり綺麗でない
  // for (const value of copy.values()) {
  //   if (value.userId === userId.userId) copy.delete(value);
  //   break;
  // }
};
