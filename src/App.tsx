import React from 'react';
import './App.css';
import Store from './Store';
import { Container } from './components/Container';

const App = () => {
  return (
    <Store.Container>
      <Container />
    </Store.Container>
  );
};

export default App;
