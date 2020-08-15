import UserId from '../domain/models/User/UserId/UserId';

export type TODO<T> = any;

export const hostURL = 'http://localhost:3001';

// 2階層目まで undefined をチェック
export const ensurePropsContainsNoUndefined = <T>(props: T) => {
  const values = Object.values(props);
  if (values.includes(undefined)) {
    console.log(values);
    throw new Error('↑↑↑ this property contains undefined.');
  }
  values.forEach((value) => {
    if (!value) return;
    if (Object.values(value).includes(undefined)) {
      console.log(value);
      throw new Error('↑↑↑ this property contains undefined.');
    }
  });
};

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
