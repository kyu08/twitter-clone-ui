import * as React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserApplicationService from '../application/UserApplicationService';
import ScreenName from '../domain/models/User/Profile/ScreenName';
import { UserDataModel } from '../infrastructure/UserDataModel';

// todo ここでデータを取得したら list を作ってくれるコンポーネントにデータを渡す。
export const FollowingListContainer: React.FC = () => {
  const [userIndicating, setUserIndicating] = React.useState();
  const [existUser, setExistUser] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);
  // 0. props として :screenName を受け取る
  // 1. UserInfoMini[]をfetchする
  // 2. 表示する
  const { screenName: screenNameRequested } = useParams();
  useEffect(() => {
    (async () => {
      const userGotByScreenName = await UserApplicationService.getUserByScreenName(
        // todo new するのよくないよね
        new ScreenName(screenNameRequested),
      ).catch((e) => e);
      if (!(userGotByScreenName instanceof UserDataModel)) {
        setExistUser(false);

        return;
      }
      console.log(userGotByScreenName);
      setExistUser(true);
      setUserIndicating(userGotByScreenName);
      setIsLoading(false);
    })();
  }, []);

  if (existUser === false)
    return <div>存在しないユーザーです(componentつくろう)</div>;

  if (isLoading) return <div>Loaing...(componentつくろう)</div>;

  console.log(userIndicating.followingMap);

  return (
    <div>
      This is FollowingListContainer.
      {JSON.stringify(userIndicating.followingMap)}
    </div>
  );
};
