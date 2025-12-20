import { Container, Row, Col, Navbar, Nav, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from 'react'

const About = () => {
  return (
<><Container  style={{marginTop:"9rem"}} className="">
   <div className="default-box-top">
              <div className="left">
                   <img className="icon-box"
            src="/images/penguin.svg"
            
          />
               
              </div>
              <div className="right">
                <h3>About ME</h3>
              </div>
            </div>
<Card className="p-3 bg-light">
<Card.Text className="text-center">
I'm a motivated web developer who loves learning and growing every day.
I enjoy building projects, improving my skills, and exploring new
technologies to become a better developer.
</Card.Text>
</Card>
</Container>
</>
  )
}

export default About