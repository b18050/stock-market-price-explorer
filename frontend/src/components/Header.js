import React from "react";
import {Row, Col, Form} from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons';
import { roleChange } from './../reducers/roleReducer';
import { useDispatch, useSelector }  from 'react-redux';
import 'react-bootstrap-typeahead/css/Typeahead.css';
const Header = () => {
    const dispatch = useDispatch()
    const role = useSelector(state => state.role);
    
    const ShowPersonIcon = () => {
        console.log(role);
        if(role == 'USER'){
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

    const handleRoleChange = (event) => {
        const chosenRole = event.target.value;
        dispatch(roleChange(chosenRole))
    }
    
    return (
            <Row className="App-header">
                <Col md={4} style={{ textAlign: 'left' }}>
                    Stock Closed Price
                </Col>
                <Col md={{ span: 2, offset: 3 }} >
                <Form>
                    <Form.Group className="role-select">
                        <Form.Control as="select" custom onChange={handleRoleChange} value ={role} defaultValue="User">
                            <option value="USER"> User 
                            </option>
                            <option value="ADMIN"> Admin </option>
                        </Form.Control>

                    </Form.Group>
                </Form>
            </Col>
            <ShowPersonIcon />
        </Row>
        
    );
}

export default Header;