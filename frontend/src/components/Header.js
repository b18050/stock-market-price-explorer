import React from "react";
import {Row, Col, Form} from 'react-bootstrap'

const Header = () => {

    
    return (
            <Row className="App-header">
                <Col md={4} style={{ textAlign: 'left' }}>
                    Stock Closed Price
                </Col>
                <Col md={{ span: 2, offset: 3 }} >
                <Form>
                    <Form.Group className="country-select">
                        <Form.Control as="select" custom onChange={(e) => console.log(e.target.value)} value ='user' defaultValue="User">
                            <option value="user"> User 
                            </option>
                            <option value="admin"> Admin </option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
        
    );
}

export default Header;