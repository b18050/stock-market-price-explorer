import React from "react";
import { Container} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import StockForm from './StockForm';
import ShowStock from './ShowStock';
import stockService from './../services/stocks';
const UserScreen = () => {

    const [stocks, setStocks] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [stockName, setStockName] = useState("");
    const [chartType, setChartType] = useState('bar');

    useEffect(() => {
      if(startDate == null) return;
      stockService.getRequiredStocks(stockName, startDate, endDate)
        .then((data) => {
          setStocks(data);
        })
  }, [startDate, endDate, stockName]);
    return (
        <Container fluid>
          <StockForm   
            chartType={chartType} 
            setChartType={setChartType}
            startDate={startDate} 
            endDate={endDate} 
            stockName={stockName} 
            setStartDate={setStartDate} 
            setEndDate={setEndDate} 
            setStockName={setStockName}
            />
            <ShowStock stocks={stocks} stockName={stockName} chartType={chartType} />
        </Container>
        
    );
}

export default UserScreen;