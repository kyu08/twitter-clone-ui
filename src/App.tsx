import React from 'react';
import './App.css';
import UserApplicationService from './application/User/UserApplicationService';
import UserId from './domain/models/User/UserId/UserId';
import InMemoryUserRepository from './inMemory/InMemoryUserRepository';
import Store from './Store';
import { RootComponent } from './components/RootComponent';

const App = () => {
  InMemoryUserRepository.initializeLocalStorage();
  const userId = new UserId(2);
  const userIdB = new UserId(3);
  // const user = UserApplicationService.findUserByUserId(userId);
  // const userB = UserApplicationService.findUserByUserId(userIdB);
  UserApplicationService.follow(userId, userIdB);
  // const userUpdated = UserApplicationService.findUserByUserId(userId);
  // const userBUpdated = UserApplicationService.findUserByUserId(userIdB);
  // console.log(user);
  // console.log(userB);
  // console.log(userUpdated);
  // console.log(userBUpdated);

  return (
    <Store.Container>
      <RootComponent />
    </Store.Container>
  );
};

export default App;
