import * as React from 'react';
import { Header } from './Common/Header';
import { Timeline } from './Timeline/Timeline';
import { Footer } from './Common/Footer';

export const Home: React.FC<{}> = () => {
  return (
    <>
      <Header />
      {/* ここの中身を分岐 */}
      <Timeline />
      <Footer />
    </>
  );
};
