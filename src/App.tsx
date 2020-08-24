import React from 'react';
import './App.css';
import UserRepository from './infrastructure/UserRepository';
import Store from './Store';
import { Container } from './components/Container';

const App = () => {
  UserRepository.initializeLocalStorage();

  return (
    <Store.Container>
      <Container />
    </Store.Container>
  );
};

export default App;
