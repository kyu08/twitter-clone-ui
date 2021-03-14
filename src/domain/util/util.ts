import UserId from '../models/User/UserId/UserId';

export type TODO<T> = any;

// 2階層目まで undefined をチェック
// birthday は optional なので除外
export const ensurePropsContainsNoUndefined = <T>(props: T) => {
  const values = Object.values(props);
  if (values.includes(undefined)) {
    console.log(values);
    console.table({ message: '↑↑↑ this property contains undefined.' });
  }
  values.forEach((value) => {
    if (!value) return;
    if (Object.values(value).includes(undefined)) {
      if (!value.birthday) return;
      console.log(value);
      console.table({ message: '↑↑↑ this property contains undefined.' });
    }
  });
};

export const deleteFromSet = (
  copy: Set<UserId>,
  userId: UserId,
): Set<UserId> => {
  const userIdFound = Array.from(copy.values()).find(
    (e) => e.userId === userId.userId,
  );
  if (userIdFound) copy.delete(userIdFound);

  return copy;
};
