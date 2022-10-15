import React from "react";
import { Container } from "react-bootstrap";
import { useState} from 'react';
import Notification from "./Notification";
import './../App.css';
import UploadStockForm from "./UploadStockForm";
import StockSummary from "./StockSummary";
const AdminScreen = () => {
    const [message, setMessage] = useState('');
    
    return (
        <Container fluid >
            <Notification message={message} />
            <UploadStockForm setMessage={setMessage}/>
            <StockSummary message={message} />
        </Container>
    );
}

export default AdminScreen;