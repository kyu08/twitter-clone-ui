import * as React from 'react';
import classes from './Home.module.css';
import { Header } from './Common/Header';
import { Timeline } from './Timeline/Timeline';
import { Footer } from './Common/Footer';

export const Home: React.FC<{}> = () => {
  return (
    <div className={classes.Home}>
      <Header />
      {/* ここの中身を分岐 */}
      <Timeline />
      <Footer />
    </div>
  );
};
