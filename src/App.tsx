import React from 'react';
import './App.css';
import { Container } from './container/Container';
import UserApplicationService from './application/User/UserApplicationService';
import UserId from './domain/models/User/UserId/UserId';
import InMemoryUserRepository from './inMemory/InMemoryUserRepository';

const App = () => {
  InMemoryUserRepository.initializeLocalStorage();
  const userId = new UserId(2);
  const user = UserApplicationService.findUserByUserId(userId);
  console.log(user);

  return <Container />;
};

export default App;
