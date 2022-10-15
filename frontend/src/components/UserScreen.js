import React from "react";
import { Container} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import StockForm from './StockForm';
const UserScreen = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [stockName, setStockName] = useState("");
        
    return (
        <Container fluid>
          <StockForm   
            startDate={startDate} 
            endDate={endDate} 
            stockName={stockName} 
            setStartDate={setStartDate} 
            setEndDate={setEndDate} 
            setStockName={setStockName}
            />
        </Container>
    );
}

export default UserScreen;