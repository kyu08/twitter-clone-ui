import React from 'react';
import './App.css';
// import UserApplicationService from './application/User/UserApplicationService';
import { TweetApplicationService } from './application/Tweet/TweetApplicationService';

const App = () => {
  TweetApplicationService.test();

  return <div>hoge</div>;
};

export default App;
