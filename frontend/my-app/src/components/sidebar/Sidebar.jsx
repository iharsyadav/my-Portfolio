import { Container, Row, Col, Navbar, Nav, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";import React from 'react'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import "../sidebar/sidebar.css"


const Sidebar = () => {
  return (
 
  <aside className="sidebar">
      <FaInstagram size={22}  />
      <img className="sidebar-icons" src="/images/resume.svg" width="22" height="22" />
      <FaLinkedin size={22}  />
      <FaGithub  size={22}  />
    </aside>

  )
}

export default Sidebar