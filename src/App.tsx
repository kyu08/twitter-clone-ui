import React from 'react';
import './App.css';
import UserApplicationService from './application/User/UserApplicationService';
import { Container } from './container/Container';

const App = () => {
  UserApplicationService.test();

  return <Container />;
};

export default App;
