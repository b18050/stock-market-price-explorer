import React from "react";
import {  Row, Col, Form, Button } from "react-bootstrap";
import { useState} from 'react';
import './../App.css';
import stockService from './../services/stocks'; 

const UploadStockForm = ({setMessage}) => {

    const [csvFile, setCsvFile] = useState(null);
    const handleFileUpload = async () => {
        const formData = new FormData();
        formData.append("file", csvFile, csvFile.name);
        const fileName = csvFile.name;
        const stockDate = `${fileName.substr(2, 2)} ${fileName.substr(4, 3)} ${fileName.substr(7, 4)}`;
        stockService.uploadCSV(formData)
            .then(result => {
                console.log(result);
                setMessage(`Stocks for date : ${stockDate} uploaded successfully`)
                setTimeout(() => {
                    setMessage('')
                },5000)  
                })
            .catch(error => {
                console.log(error.response.data.error)
                console.log(error.code)
                setMessage(error.response.data.error)
                setTimeout(() => {
                    setMessage('')
                },5000)  
            })
        }

    const onFileChange = (event) => {
        setCsvFile(event.target.files[0]);
    }
    return(
        <>
        <Row className="justify-content-center">
            <Col md={6} style={{textAlign: 'center', marginTop: 50}}>
            <Form.Group >
                    <Form.Label style={{ fontFamily: 'sans-serif'}} > Choose Stock File </Form.Label>
                    <Form.Control type="file" custom onChange={onFileChange} >
                    
                    </Form.Control>
                </Form.Group>
            </Col>
        </Row>
        <Row className="justify-content-center">
            <Col md={3} style={{ textAlign: 'center', marginTop: 30}}>
                <Button variant="success" size="lg" onClick={handleFileUpload}
                    >Upload
                </Button>
            </Col>
        </Row>
        </>
    )

}

export default UploadStockForm;