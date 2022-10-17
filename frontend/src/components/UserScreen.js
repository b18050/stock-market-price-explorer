import React, {useEffect} from "react";
import { Container} from 'react-bootstrap';
import StockForm from './StockForm';
import ShowStock from './ShowStock';
import { useDispatch, useSelector }  from 'react-redux';
import { initializeStockNames } from "../reducers/stockReducer";
const UserScreen = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeStockNames());
},[dispatch]);
    return (
        <Container fluid>
          <StockForm />
          <ShowStock />
        </Container>
        
    );
}

export default UserScreen;