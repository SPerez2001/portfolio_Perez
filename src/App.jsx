import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import umlog from "../img/umlog.png";
import resume from "/img/resume.png";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import java from "/img/javacert.png";
import database from "/img/databasecert.png";
import networksec from "/img/networkseccert.png"
import nc2 from "/img/nc2cert.png";
 
function App() {
    return (
        <>
        
        <div className="container" id="mainhome">
            <Navbar expand="lg" className="navbar-light bg-light" id ="navb"> 
                <Container>
                    <Navbar.Brand href="#home">Portfolio_Perez</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#Resume">Resume</Nav.Link>
                            <Nav.Link href="#Certifications">Certifications</Nav.Link>
                            <Nav.Link href="#Certificates">Certificates</Nav.Link>
                            <Nav.Link href="#Projects">Projects</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                
            </Navbar>
            <Container id="maincon" >
                <Container id="Home">
                    <Row style={{ display: "block" }}>
                        <Col style={{ paddingTop: "5rem" }}>
                            <h1> Sheena S. Perez</h1>
                            <h6> BS - Information Technology</h6>
                            <hr
                                classname="rounded"
                                style={{
                                width: 200,
                                color: "rgb(112, 111, 111)",
                                margin: "auto",
                                fontSize: 5
                                }}
                            />
                            <Container style={{ width: 300, height: 200 }}>
                                <Row style={{ marginTop: "1rem", display: "block" }}>
                                    <Col>
                                        <a href="https://www.facebook.com/natsumeyuujinchou23">
                                            <i
                                                classname="fa-brands fa-facebook"
                                                style={{ fontSize: 48, color: "black" }}
                                            />
                                        </a>
                                    </Col>
                                    <Col>
                                        <a href="https://www.linkedin.com/in/sheena-perez-b0a514324/">
                                            <i
                                                classname="fa-brands fa-github"
                                                style={{ fontSize: 48, color: "black" }}
                                            />
                                        </a>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                            <img
                                src={umlog}
                                alt="UM LOGO"
                                width={250}
                                height={250}
                                style={{ marginTop: "1rem", marginBottom: "1rem" }}
                            />
                            <h1 style={{ margin: "auto" }}>
                                "{"{"} ... {"}"}"
                            </h1>
                        <Col>
                        </Col>
                    </Row>
                </Container>
                <Container id="Resume">
                    
                    <h1> Resume</h1>
                    <img
                        src={resume}
                        alt="Resume"
                        width={400}
                        height={600}
                        style={{ margin: "auto" }}
                    />        
                </Container>
            </Container>
            <Container id = "Certifications">
                <h1 > Certifications</h1>
                <Row style={{ marginTop: "2rem" }}>
                    <Col>
                        <img
                            src={java}
                            alt="Java"
                            width={400}
                            height={300}
                            style={{ margin: "auto" }}
                        /> 
                    </Col>
                    <Col>
                    <img
                            src={database}
                            alt="Database"
                            width={400}
                            height={300}
                            style={{ margin: "auto" }}
                        />
                    </Col>
                </Row>
            </Container>
            <Container id = "Certifications2">
                <Row style={{ marginTop: "2rem" }}>
                    <Col>
                        <img
                            src={networksec}
                            alt="Network Security"
                            width={400}
                            height={300}
                            style={{ margin: "auto" }}
                        /> 
                    </Col>
                    <Col>
                    <img
                            src={nc2}
                            alt="NC 2"
                            width={300}
                            height={400}
                            style={{ margin: "auto" }}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
  }

  export default App; 
