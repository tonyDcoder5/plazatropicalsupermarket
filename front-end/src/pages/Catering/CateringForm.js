import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { Form, Row, Col, Button } from "react-bootstrap";

export default function CateringForm() {
 
  

  const [formData, setFormData] = useState(useRef());
  const [sentNotice, setSentNotice] = useState(null);
  const [sendMethod, setSendMethod] = useState(null);

 

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const submitForm = (e) => {
    e.preventDefault();

    if (
      !formData.current[0].value ||
      !formData.current[1].value ||
      !formData.current[2].value || 
      !formData.current[3].value
    ) {
      setSentNotice({
        message: "Message not sent, please review and complete form again",
      });
      setTimeout(() => {
        setSentNotice(null);
      }, 5000);
    } else {

      if (sendMethod === 'email') {
        // Send email with form data as attachment
        console.log('email', formData)
      } else if (sendMethod === 'download') {
        // Create PDF object and prompt user to download
        console.log('Download', formData)
      }
      
      setSentNotice({
        message: "Form prepared, please make sure to follow next steps",
      });
    }
   


      setTimeout(() => {
        setSentNotice(null);
      }, 5000);
  };

  return (
    <div className="catering-div">
      <h2>Cater With Us!</h2>
      <Form ref={formData} onSubmit={submitForm} className="catering-form">
        <Row>
          <Form.Group as={Col} controlId="user_name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter name"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="phone_number">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter phone number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col}>
            <Form.Label htmlFor="emailInput">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="pickupDate">Pickup Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter desired pickup date"
              name="pickup_date"
              value={formData.pickup_date}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col}>
            <Form.Label htmlFor="orderInput">Order Form</Form.Label>
            <Form.Control
              value={formData.order_input}
              type="text"
              as="textarea"
              rows={5}
              name="order_input"
              onChange={handleChange}
            />
          </Form.Group>
        </Row>
        <div className="form-actions">
        <select name="sendMethod" onChange={event => setSendMethod(event.target.value)}>            
            <option value="email">Email Store</option>
            <option value="download">Download PDF</option>
          </select>
          <Button variant="primary" type="submit" name="form-send-btn">
            Submit Form
          </Button>
        </div>
      </Form>
      {sentNotice && (
        <div className="send-notice">
          <h2>{sentNotice.message}</h2>
        </div>
      )}
    </div>
  );
}
