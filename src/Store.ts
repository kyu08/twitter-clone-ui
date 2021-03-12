import { createConnectedStore, Effects, Store } from 'undux';
// eslint-disable-next-line import/no-cycle
import effects from './Effects';
import UserId from './domain/models/User/UserId/UserId';
import { UserDataModel } from './applicationService/DTO/UserDataModel';

type State = {
  userId?: UserId;
  // currentUser の UserDataModel インスタンス
  userDataModel?: UserDataModel;
  isLogin: boolean;
};

const initialState: State = {
  userId: undefined,
  userDataModel: undefined,
  isLogin: false,
};

export default createConnectedStore(initialState, effects);

export type StoreProps = {
  store: Store<State>;
};

export type StoreEffects = Effects<State>;
