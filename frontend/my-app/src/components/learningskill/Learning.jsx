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
import { FaFigma, FaBootstrap } from "react-icons/fa";
import { SiNodedotjs, SiMongodb } from "react-icons/si";
import "../learningskill/learning.css";

const Learning = () => {
  return (
    <>
      <Container style={{ marginTop: "9rem" }} className="default-box">
        <div className="default-box-top">
          <div className="left">
            <img className="icon-box" src="/images/reading.svg" />
          </div>
          <div className="right">
            <div>
              {" "}
             
              <h3> <img
                className=""
                width={30}
                height={30}
                src="/images/book.svg"
              />“Skills I’m Learning”</h3>
            </div>
          </div>
        </div>

        {/* Skills Cards */}
        <Container className=" default-box-bottom text-center">
          <Row className="row-con  p-4">
            <Col xs={6} md={3} className="p-2 col-con">
              <Card className="p-4 shadow-sm border-0">
                <FaFigma color="#a259ff" size={50} />
              </Card>
            </Col>

            <Col xs={6} md={3} className="p-2 col-con">
              <Card className="p-4 shadow-sm border-0 ">
                <SiNodedotjs color="#3c873a" size={50} />
              </Card>
            </Col>

            <Col xs={6} md={3} className="p-2 col-con">
              <Card className="p-4 shadow-sm border-0 ">
                <SiMongodb color="#4db33d" size={50} />
              </Card>
            </Col>

            <Col xs={6} md={3} className="p-2 col-con">
              <Card className="p-4 shadow-sm border-0">
                <FaBootstrap color="#7952b3" size={50} />
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Learning;
