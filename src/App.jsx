import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { navbar, Navbar } from '@material-tailwind/react'
 
function App() {
    return (
        <>
        
        <div className="container" id="mainhome">
            <Nav classname="navbar navbar-expand-lg navbar-light bg-light" id="navb">
                <a classname="navbar-brand" href="#">
                Portfolio_Perez
                </a>
                <button
                classname="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span classname="navbar-toggler-icon" />
                </button>
                <div classname="collapse navbar-collapse" id="navbarNav">
                    <ul classname="navbar-nav">
                        <li classname="nav-item active">
                        <a classname="nav-link" href="#">
                            Home <span classname="sr-only">(current)</span>
                        </a>
                        </li>
                        <li classname="nav-item">
                        <a classname="nav-link" href="#Resume">
                            Resume
                        </a>
                        </li>
                        <li classname="nav-item">
                        <a classname="nav-link" href="#Certifications">
                            Certifications
                        </a>
                        </li>
                        <li classname="nav-item">
                        <a classname="nav-link" href="#Certificates">
                            Certificates
                        </a>
                        </li>
                        <li classname="nav-item">
                        <a classname="nav-link" href="#Projects">
                            Projects
                        </a>
                        </li>
                    </ul>
                </div>
            </Nav>
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
