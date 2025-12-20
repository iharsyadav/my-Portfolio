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
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import "../goodskill/goodskil.css";

const Goodskills = () => {
  return (
    <>
      <Container style={{marginTop:"9rem"}} className="default-box ">
        <div className="default-box-top">
          <div className="left">
                        <img className="icon-box"
            src="/images/skillbook.svg"
            
          />
          </div>
          <div className="right">
            <h3>⭐ "Skills I'm Good At"</h3>
          </div>
        </div>

        <Container  className="default-box-bottom text-center ">
          <Row className=" p-4 row-con">
            <Col xs={6} md={3} className="p-2 col-con">
              <Card className="p-4 shadow-sm border-0">
                <FaHtml5 color="#e34c26" size={50} />
              </Card>
            </Col>

            <Col xs={6} md={3} className=" p-2 col-con">
              <Card className="p-4 shadow-sm border-0">
                <FaCss3Alt color="#264de4" size={50} />
              </Card>
            </Col>

            <Col xs={6} md={3} className="p-2 col-con">
              <Card className="p-4 shadow-sm border-0">
                <FaJs color="#f0db4f" size={50} />
              </Card>
            </Col>

            <Col xs={6} md={3} className="p-2  col-con">
              <Card className="p-4  shadow-sm border-0">
                <FaReact color="#61dbfb" size={50} />
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Goodskills;
