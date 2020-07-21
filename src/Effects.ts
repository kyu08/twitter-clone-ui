// eslint-disable-next-line import/no-cycle
import { StoreEffects } from './Store';

const effects: StoreEffects = (store) => {
  store.on('screenName').subscribe((screenName) => console.log(screenName));
  localStorage.setItem('hogemi', 'hogemi');

  return store;
};

export default effects;
