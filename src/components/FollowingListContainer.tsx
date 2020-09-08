import * as React from 'react';
import { useEffect } from 'react';

// todo ここでデータを取得したら list を作ってくれるコンポーネントにデータを渡す。
export const FollowingListContainer: React.FC = () => {
  // 1. fetchする
  // 2. 表示する
  useEffect(() => {
    console.log(1);
  }, []);

  return <>This is FollowingListContainer.</>;
};
