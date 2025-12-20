import React from "react";
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
import Header from "../header/Header";
import Hero from "../hero/Hero";
import About from "../about/About";
import Goodskills from "../goodskill/Goodskills";
import Learning from "../learningskill/Learning";
import Contact from "../contact/Contact";
import Project from "../project/Project";
import Sidebar from "../sidebar/Sidebar";
import Scroll from "../scroll/Scroll";

const Testing = () => {
  return (
    <div className="main">
      <div className="side-box">
         <Sidebar/>
      </div>
       
      <div className="main-box">
        <Header />
        <Hero />
        <Scroll/>
        <About />
        <Goodskills />

        <Learning style={{ margintop: "2rem" }} />
        <Project />
        <Contact />
      </div>
    </div>
  );
};

export default Testing;
