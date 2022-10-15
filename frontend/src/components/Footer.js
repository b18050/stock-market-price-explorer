import React from 'react';
import {Row, Col} from 'react-bootstrap'

const Footer = () => {
    return (
        <Row className="App-footer">
        <Col md={4} style={{ textAlign: 'center'}}>
            All rights reserved! 
        </Col>
        </Row>
    );
}

export default Footer;