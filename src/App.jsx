import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { navbar, Navbar } from '@material-tailwind/react'
 
function App() {
    return (
        <>
        <body>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" id ="navb">
                <a className="navbar-brand" href="#">Portfolio_Perez</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Resume">Resume</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Certifications">Certifications</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Certificates">Certificates</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Projects">Projects</a>
                    </li>
                    
                    </ul>
                </div>
            </nav>
            <div className="container" id = "maincon" >
                <div className="container" id = "Home">
                    <div className="row">
                        <div className="col" style="padding-top: 5rem;">
                            <h1 > Sheena S. Perez</h1>
                            <h6> BS - Information Technology</h6>
                            <hr className="rounded" style="width: 200px;color: rgb(112, 111, 111);margin: auto; font-size: 5px;"> </hr>
                            <div className="container" style="width: 300px; height: 200px;">
                            <div className="row" style = "margin-top: 1rem;">
                                <div className="col">
                                    <a href="https://www.facebook.com/natsumeyuujinchou23"><i className="fa-brands fa-facebook" style="font-size:48px; color: black;"></i></a>
                                </div>
                                <div className="col">
                                <a href="https://www.linkedin.com/in/sheena-perez-b0a514324/"><i className="fa-brands fa-github" style="font-size:48px; color: black;"></i></a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col">
                            <img src="/img/umlog.png" alt="UM LOGO" width="250" height="250" style="margin-top: 1rem; margin-bottom: 1rem;"> </img>
                            <h1 style="margin: auto; " > { "{ ... }" } </h1>
                        </div>
                    </div>
                </div>
                <div className="container" id = "Resume">
                    <h1 > Resume</h1>
                    <img src="/img/resume.png" alt="Resume" width="400" height="600" style="margin: auto;"> </img>
                </div>
            </div>
        </body>
        </>
    )
  }

  export default App; 
