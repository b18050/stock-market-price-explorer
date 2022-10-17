import React from 'react';
import { Container} from 'react-bootstrap'
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import UserScreen from './components/UserScreen';
import AdminScreen from './components/AdminScreen';
import { useSelector }  from 'react-redux';

import './App.css';
const App = () => {
  
  const [isUser, setIsUser] = useState(true);
  const role = useSelector(state => state.role);

  useEffect(() => {
    setIsUser( role == 'USER')
  }, [role])

  const BodyComponent = () => {
      if(isUser) {
        return <UserScreen />
      }
      return <AdminScreen />
  }

  return (
    <div>
      <Container className='App'>
        <Header />
        <BodyComponent />
        <Footer />
      </Container>
      </div>
  );
}

export default App;
