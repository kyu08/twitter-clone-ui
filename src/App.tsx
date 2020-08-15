import React from 'react';
import './App.css';
import InMemoryUserRepository from './inMemory/InMemoryUserRepository';
import Store from './Store';
import { Container } from './components/Container';

const App = () => {
  InMemoryUserRepository.initializeLocalStorage();

  return (
    <Store.Container>
      <Container />
    </Store.Container>
  );
};

export default App;
