import * as React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Timeline } from '../components/Timeline';

export const Container: React.FC<{}> = () => {
  return (
    <div>
      <Header />
      <Timeline />
      <Footer />
    </div>
  );
};
