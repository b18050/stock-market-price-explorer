import React from "react";
import {Row, Col, Form} from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons';
import {
    Typeahead
  } from 'react-bootstrap-typeahead';

  import 'react-bootstrap-typeahead/css/Typeahead.css';
const Header = ({role, setRole}) => {

    const ShowPersonIcon = () => {
        console.log(role);
        if(role == 'user'){
            return (
                <Col md={{ span: 1, offset: 1 }} >
                <Icon.PersonCircle />
            </Col>
            );
        }
        return (
            <Col md={{ span: 1, offset: 1 }} >
            <Icon.PersonCheckFill />
        </Col>
        );
    }
    const options = ["User", "Admin"];
    
    return (
            <Row className="App-header">
                <Col md={4} style={{ textAlign: 'left' }}>
                    Stock Closed Price
                </Col>
                <Col md={{ span: 2, offset: 3 }} >
                <Form>
                    <Form.Group className="role-select">
                        <Form.Control as="select" custom onChange={(e) => setRole(e.target.value)} value ={role} defaultValue="User">
                            <option value="user"> User 
                            </option>
                            <option value="admin"> Admin </option>
                        </Form.Control>

                    </Form.Group>
                </Form>
            </Col>
            <ShowPersonIcon />
        </Row>
        
    );
}

export default Header;