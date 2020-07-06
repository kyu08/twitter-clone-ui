import React from 'react';
import './App.css';
import UserApplicationService from './application/User/UserApplicationService';

const App = () => {
  UserApplicationService.test();

  return <div>hoge</div>;
};

export default App;
