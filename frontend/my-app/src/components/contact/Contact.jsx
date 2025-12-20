import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Card,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import { Form } from "react-bootstrap";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
    const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, subject, message }),
    });

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    alert("Message sent");
  };
  return (
    <>
      <Container style={{ marginTop: "9rem" }} className=" default-box ">
        <div className=" default-box-top">
          <div className="left">
                     <img className="icon-box"
            src="/images/contact.svg"
            
          />
          </div>
          <div className="right">
            <h3>⭐ "Get in Touch"</h3>
          </div>
        </div>

        {/* Skills Cards */}
        <Container className="default-box-bottom text-center">
          <Form  onSubmit={handleSubmit}>
            <Form.Group style={{padding:".5rem"}} className="mb-3" controlId="formGroupname">
             
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group style={{padding:".5rem"}} className="mb-3" controlId="formGroupname">
        
              <Form.Control
                type="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group style={{padding:".5rem"}} className="mb-3" controlId="formGroupPassword">
              
              <Form.Control
                type="text"
                placeholder="Enter your Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </Form.Group>
            <Form.Group style={{padding:".5rem"}} className="mb-3" controlId="Textarea">
              
              <Form.Control
                as="textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
              />
            </Form.Group>
            <Button type="submit">SEND MESSAGE</Button>
          </Form>
        </Container>
      </Container>
    </>
  );
};

export default Contact;
