import React from "react";
import {  Table } from "react-bootstrap";
import { useState, useEffect} from 'react';
import './../App.css';
import stockService from './../services/stocks'; 


const StockSummary = ({message}) => {

    const [dates, setDates] = useState([]);
    const [stockDates, setStockDates] = useState([]);
    
    useEffect(() => {
        stockService.getStocksSummary()
            .then((data) => {
                setStockDates(data);
            }
        )
    },[message]);

    const getStockDate = (stock) => {
        return [stock.TIMESTAMP, stock.count];
    }

    useEffect(() => {
        setDates(stockDates.map(getStockDate));
        console.log(dates)
    }, [stockDates]);


    const getDate = (date) => {
        return (date.substring(0, date.indexOf('T')));
    }
    const ShowTableRow = () => {
        const tableRows = dates.map((date) => {
            return (
            <tr>
                <td> {getDate(date[0])}</td>
                <td> {date[1]}</td>
            </tr>
            )
            
        });
    return <tbody>{tableRows}</tbody>;
    }

    const ShowTableHead = () => {
        return (
            <thead>
                <tr>
                <th>Summary</th>
                <th>Total stocks</th>
                </tr>
            </thead>
        );
    }

    return (
        <div className="stockTable">
        <Table striped>
        <ShowTableHead />
        <ShowTableRow />
            </Table>
            </div>
    );
}

export default StockSummary;