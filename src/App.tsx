import React from 'react';
import './App.css';
import { Container } from './container/Container';
import { TweetApplicationService } from './application/Tweet/TweetApplicationService';

const App = () => {
  TweetApplicationService.test();

  return <Container />;
};

export default App;
