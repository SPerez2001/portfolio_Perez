import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { navbar, Navbar } from '@material-tailwind/react'
 
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
            
            <div classname="container" id="maincon">
                <div classname="container" id="Home">
                    <div classname="row">
                        <div classname="col" style={{ paddingTop: "5rem" }}>
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
                            <div classname="container" style={{ width: 300, height: 200 }}>
                                <div classname="row" style={{ marginTop: "1rem" }}>
                                    <div classname="col">
                                        <a href="https://www.facebook.com/natsumeyuujinchou23">
                                        <i
                                            classname="fa-brands fa-facebook"
                                            style={{ fontSize: 48, color: "black" }}
                                        />
                                        </a>
                                    </div>
                                    <div classname="col">
                                        <a href="https://www.linkedin.com/in/sheena-perez-b0a514324/">
                                        <i
                                            classname="fa-brands fa-github"
                                            style={{ fontSize: 48, color: "black" }}
                                        />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div classname="col">
                            <img
                                src="/img/umlog.png"
                                alt="UM LOGO"
                                width={250}
                                height={250}
                                style={{ marginTop: "1rem", marginBottom: "1rem" }}
                            />
                            <h1 style={{ margin: "auto" }}>
                                "{"{"} ... {"}"}"
                            </h1>
                        </div>
                    </div>
                </div>
                <div classname="container" id="Resume">
                    <h1> Resume</h1>
                    <img
                        src={"/img/resume.png"}
                        alt="Resume"
                        width={400}
                        height={600}
                        style={{ margin: "auto" }}
                    />
                </div>
            </div>
        </div>
        </>
    )
  }

  export default App; 
