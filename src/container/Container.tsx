import * as React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Timeline } from '../components/Timeline';
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
