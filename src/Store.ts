import { Store, createConnectedStore, Effects } from 'undux';
// eslint-disable-next-line import/no-cycle
import effects from './Effects';

type State = {
  screenName?: string;
};

const initialState: State = {
  screenName: undefined,
};

export default createConnectedStore(initialState, effects);

export type StoreProps = {
  store: Store<State>;
};

export type StoreEffects = Effects<State>;
