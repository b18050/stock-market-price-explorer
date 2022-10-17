
import React, {useEffect, useState} from "react";
import {  Row, Col, Form } from "react-bootstrap";
import { useDispatch, useSelector }  from 'react-redux';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { chartTypeChange } from "./../reducers/chartTypeReducer";
import { getRequiredStocks, setStockName } from "../reducers/stockReducer";

const StockForm = () => {

    const dispatch = useDispatch()
    const chartType = useSelector(state => state.chartType)
    const stockName = useSelector(state => state.stock.stockName);
    const stockNames = useSelector(state => state.stock.names);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const handleChartTypeChange = (event) => {
        const chosenChartType = event.target.value;
        dispatch(chartTypeChange(chosenChartType))
    }
    const handleStockNameChange = (value) => {
        const chosenStockName = value;
        dispatch(setStockName(chosenStockName))
    }
    
    const [options, setOptions] = useState([]);
    
    useEffect(() => {
        setOptions(stockNames.map(stock => stock.SYMBOL))
    },[stockNames]);

    useEffect(() => {
        if(stockName == '' || startDate == null) return;
        dispatch(getRequiredStocks(stockName, startDate, endDate));
    }, [stockName, startDate, endDate, dispatch]);
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
                            onChange={handleStockNameChange}
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
                        <Form.Control as="select" custom onChange={handleChartTypeChange} value ={chartType} defaultValue="BAR">
                            <option value="BAR"> Bar Graph </option>
                            <option value="LINE"> Line Graph </option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Col>
                
        </Row>
    )

};

export default StockForm;