import * as React from 'react';
import { Header } from '../components/Common/Header';
import { Footer } from '../components/Common/Footer';
import { Timeline } from '../components/Timeline/Timeline';
import classes from './Container.module.css';

export const Container: React.FC<{}> = () => {
  return (
    <div className={classes.Container}>
      <Header />
      <Timeline />
      <Footer />
    </div>
  );
};
