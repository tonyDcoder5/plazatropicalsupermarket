import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Form, Row, Col, Button } from "react-bootstrap";

export default function ContactForm() {

  const form = useRef();
  const [sentNotice, setSentNotice] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      !form.current[0].value ||
      !form.current[1].value ||
      !form.current[2].value
    ) {
      setSentNotice({message: "Message not sent, please review and complete form again"});
      setTimeout(() => {
        setSentNotice(null);
      }, 5000);
    }

    else {
      emailjs
        .sendForm(
          "service_6fzawbm",
          "template_h2l1b8h",
          form.current,
          "RRnnfbuWcvP7APmgW"
        )
        .then(
          (result) => {
            console.log(result.text);
            e.target.reset();
            setSentNotice({ message: "Message Sent Successfully!" });
          },
          (error) => {
            console.log(error.text);
            setSentNotice({ message: error.text });
          }
        );

      setTimeout(() => {
        setSentNotice(null);
      }, 5000);
    }
  };


  
  return (
    <div className="container-two">
      <h2>Contact Us!</h2>
        <Form ref={form} onSubmit={sendEmail} className="contact-form">
          <Row>
            <Form.Group as={Col} controlId="user_name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={form.user_name}
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
                value={form.user_email}
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col}>
              <Form.Label htmlFor="messageInput">Message</Form.Label>
              <Form.Control 
              value={form.message} 
              type="text" 
              as="textarea"
              rows={5}
              name="message" />
            </Form.Group>
          </Row>
          <Button variant="primary" type="submit" name="contact-send-btn">
            Send
          </Button>
        </Form>
      {sentNotice && (
        <div className="send-notice">
          <h2>{sentNotice.message}</h2>
        </div>
      )}
    </div>
  );
}
