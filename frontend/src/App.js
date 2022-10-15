import React from 'react';
import { Container} from 'react-bootstrap'
import { useState, useEffect } from 'react';
import UserScreen from './components/UserScreen';

const App = () => {
  return (
    <div>
      <Container className='App'>
        <UserScreen />
      </Container>
    </div>
  );
}

export default App;
