import { Store, createConnectedStore, Effects } from 'undux';
// eslint-disable-next-line import/no-cycle
import effects from './Effects';
import UserId from './domain/models/User/UserId/UserId';

type State = {
  userId?: UserId;
  isLogin: boolean;
};

const initialState: State = {
  userId: undefined,
  isLogin: false,
};

export default createConnectedStore(initialState, effects);

export type StoreProps = {
  store: Store<State>;
};

export type StoreEffects = Effects<State>;
