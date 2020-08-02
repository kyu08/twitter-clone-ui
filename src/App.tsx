import React from 'react';
import './App.css';
import InMemoryUserRepository from './inMemory/InMemoryUserRepository';
import Store from './Store';
import { Container } from './Container/Container';

const App = () => {
  InMemoryUserRepository.initializeLocalStorage();
  console.log(11);
  React.useEffect(() => {
    fetch('http://localhost:3001/', {
      mode: 'cors',
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log(json);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(22);
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
