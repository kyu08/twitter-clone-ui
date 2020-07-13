import React from 'react';
import './App.css';
// import { TweetApplicationService } from './application/Tweet/TweetApplicationService';
import UserApplicationService from './application/User/UserApplicationService';
// import UserId from './domain/models/User/UserId/UserId';
import { Container } from './container/Container';

const App = () => {
  // TweetApplicationService.test();
  UserApplicationService.test();

  return <Container />;
};

export default App;
