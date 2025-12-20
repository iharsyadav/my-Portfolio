import { Container, Row, Col, Navbar, Nav, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";import React from 'react'

const Project = () => {
  return (
    <>
    <Container style={{ marginTop: "9rem" }} className="default-box">
            <div className="default-box-top">
              <div className="left">
                           <img className="icon-box"
            src="/images/project.svg"
            
          />
              </div>
              <div className="right">
                <h3>"My Project"</h3>
              </div>
            </div>
    
            {/* Skills Cards */}
            <Container className="default-box-bottom text-center">
              <Row className="row-con  p-4">
                <Col xs={6} md={3} className="p-2 col-con">
                  <Card className="p-4 shadow-sm border-0">
                   
                  </Card>
                </Col>
    
                <Col xs={6} md={3} className="p-2 col-con">
                  <Card className="p-4 shadow-sm border-0 ">
                   
                  </Card>
                </Col>
    
                <Col xs={6} md={3} className="p-2 col-con">
                  <Card className="p-4 shadow-sm border-0 ">
                    
                  </Card>
                </Col>
    
                <Col xs={6} md={3} className="p-2 col-con">
                  <Card className="p-4 shadow-sm border-0">
                   
                  </Card>
                </Col>
              </Row>
            </Container>
          </Container>
    
    </>
   
  )
}

export default Project
