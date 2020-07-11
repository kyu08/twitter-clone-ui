import React from 'react';
import './App.css';
import { TweetApplicationService } from './application/Tweet/TweetApplicationService';
import UserApplicationService from './application/User/UserApplicationService';

const App = () => {
  // TweetApplicationService.test();
  UserApplicationService.test();

  return <div>hoge</div>;
};

export default App;
