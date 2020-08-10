import React from 'react';
import './App.css';
import InMemoryUserRepository from './inMemory/InMemoryUserRepository';
import Store from './Store';
import { Container } from './components/Container';

const App = () => {
  InMemoryUserRepository.initializeLocalStorage();
  const test = localStorage.getItem('userMap');
  if (test) console.log(JSON.parse(test));
  // const user = UserApplicationService.findUserByUserId(userId);
  // const userB = UserApplicationService.findUserByUserId(userIdB);
  // UserApplicationService.follow(userId, userIdB);
  // const userUpdated = UserApplicationService.findUserByUserId(userId);
  // const userBUpdated = UserApplicationService.findUserByUserId(userIdB);
  // console.log(user);
  // console.log(userB);
  // console.log(userUpdated);
  // console.log(userBUpdated);

  return (
    <Store.Container>
      <Container />
    </Store.Container>
  );
};

export default App;
