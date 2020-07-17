import React from 'react';
import './App.css';
import { Container } from './container/Container';
import UserApplicationService from './application/User/UserApplicationService';
import UserId from './domain/models/User/UserId/UserId';
import InMemoryUserRepository from './inMemory/InMemoryUserRepository';

const App = () => {
  InMemoryUserRepository.initializeLocalStorage();
  const userId = new UserId(2);
  const userIdB = new UserId(3);
  const user = UserApplicationService.findUserByUserId(userId);
  const userB = UserApplicationService.findUserByUserId(userIdB);
  UserApplicationService.follow(userId, userIdB);
  const userUpdated = UserApplicationService.findUserByUserId(userId);
  const userBUpdated = UserApplicationService.findUserByUserId(userIdB);
  console.log(user);
  console.log(userB);
  console.log(userUpdated);
  console.log(userBUpdated);

  return <Container />;
};

export default App;
