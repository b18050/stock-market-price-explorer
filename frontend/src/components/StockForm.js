
import React, {useEffect, useState} from "react";
import {  Row, Col, Form } from "react-bootstrap";
import stockService from './../services/stocks'; 
import {
    Typeahead
  } from 'react-bootstrap-typeahead';

import 'react-bootstrap-typeahead/css/Typeahead.css';
const StockForm = ({chartType, setChartType, stockName, startDate, endDate, setStartDate,  setEndDate, setStockName}) => {

    const [stockNames, setStockNames] = useState([]);

    useEffect(() => {
        stockService.getStockNames()
            .then((data) => {
                setStockNames(data)
            }
        );
    },[]);
    const getNames = (stock) => {
        return stock.SYMBOL;
    }
    const [options, setOptions] = useState([]);
    useEffect(() => {
        setOptions(stockNames.map(getNames))
        console.log(options)
    },[stockNames]);
    return(
        <Row className="justify-content-center">
                <Col md={3} style={{ textAlign: 'center', marginTop: 40}}>
                    <Form.Group >
                        <Form.Label style={{ fontFamily: 'sans-serif'}}> Stock Name </Form.Label>
                        <Typeahead
                            id="pagination-example"
                            maxResults={false}
                            paginate={false}
                            placeholder="Choose your stock here..."
                            selected={stockName}
                            onChange={setStockName}
                            options={options}
                        />
                    </Form.Group>
                </Col>
                <Col md={2} style={{ textAlign: 'center', marginTop: 40}}>
                    <Form.Group>
                    <Form.Label style={{ fontFamily: 'sans-serif'}}> Enter Start Date </Form.Label>
                            <Form.Control type="date" custom onChange={(e) => setStartDate(e.target.value)} value ={startDate}>
                        
                            </Form.Control>
                    </Form.Group>
                </Col>
                <Col md={2} style={{ textAlign: 'center', marginTop: 40}}>
                    <Form.Group>
                    <Form.Label style={{ fontFamily: 'sans-serif'}}> Enter End Date </Form.Label>
                            <Form.Control type="date" custom onChange={(e) => setEndDate(e.target.value)} value ={endDate}>
                        
                            </Form.Control>
                    </Form.Group>
                </Col>
                <Col md={2} style={{ textAlign: 'center', marginTop: 40}} >
                <Form>
                    <Form.Group>
                    <Form.Label style={{ fontFamily: 'sans-serif'}}> Select Chart type </Form.Label>
                        <Form.Control as="select" custom onChange={(e) => setChartType(e.target.value)} value ={chartType}>
                            <option value="bar"> Bar Graph </option>
                            <option value="line"> Line Graph </option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Col>
                
        </Row>
    )

};

export default StockForm;