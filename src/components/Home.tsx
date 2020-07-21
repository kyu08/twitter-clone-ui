import * as React from 'react';
import { Header } from './Common/Header';
import { Timeline } from './Timeline/Timeline';
import { Footer } from './Common/Footer';
import Store from '../Store';

// this is container component.
export const Home: React.FC<{}> = () => {
  const store = Store.useStore();

  const logout = (): void => {
    // effect によって LocalStorage.removeItem('screenName') される
    store.set('screenName')(undefined);
    window.location.href = '/home';
  };

  return (
    <>
      <Header logout={logout} />
      {/* ここの中身を分岐 */}
      <Timeline />
      <Footer />
    </>
  );
};
