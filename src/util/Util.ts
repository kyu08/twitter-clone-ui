import UserId from '../domain/models/User/UserId/UserId';

export type TODO<T> = any;

// MEMO used by infrastructure
/* export const hostURL = 'http://localhost:3001'; */
export const hostURL = 'http://3.34.32.57';

export const DefaultUserImageURL =
  'https://test-kyu08.s3-ap-northeast-1.amazonaws.com/userImage/default-user-image.png';

// MEMO used by models
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
};

export const LinkStyle = { textDecoration: 'none', color: 'white' };
