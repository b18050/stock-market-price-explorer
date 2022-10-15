import React from 'react';
import { Container} from 'react-bootstrap'
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import UserScreen from './components/UserScreen';
import AdminScreen from './components/AdminScreen';
import './App.css';
const App = () => {

  const [role, setRole] = useState('user')
    const [isUser, setIsUser] = useState(true);
    

    useEffect(() => {
      setIsUser(role =='user');
    }, [role])


  return (
    <div>
      <Container className='App'>
        <Header role={role} setRole={setRole}/>
        {isUser && <UserScreen/>}
        {!isUser && <AdminScreen />}
        <Footer />
      </Container>
      </div>
  );
}

export default App;
