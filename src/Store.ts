import { Store, createConnectedStore } from 'undux';

type State = {
  screenName?: string;
};

const initialState: State = {
  screenName: undefined,
};

export default createConnectedStore(initialState);

export type StoreProps = {
  store: Store<State>;
};
