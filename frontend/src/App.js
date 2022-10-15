import React from 'react';
import { Container} from 'react-bootstrap'
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import UserScreen from './components/UserScreen';
import './App.css';
const App = () => {
  return (
    <div>
      <Container className='App'>
        <Header />
        <UserScreen />
        
        <Footer />
      </Container>
    </div>
  );
}

export default App;
