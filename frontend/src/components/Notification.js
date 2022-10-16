import React from "react";
import { Row } from "react-bootstrap";
import './../App.css';

const Notification = ({message}) => {
    console.log(message)
    if(message === '') {
      return (null)
    }
    if(!message.includes('success')){
        return (
            <Row className="error" >
                {message}
            </Row>
          )
    }
    return (
      <Row className="success">
          {message}
      </Row>
    )
}

export default Notification;

