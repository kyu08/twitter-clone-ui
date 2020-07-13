import React from 'react';
import './App.css';
import UserApplicationService from './application/User/UserApplicationService';
import UserId from './domain/models/User/UserId/UserId';

const App = () => {
  const userId = new UserId(1);
  const user = UserApplicationService.findUserByUserId(userId);
  console.log(user);

  return <div>hoge</div>;
};

export default App;
