import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { navbar, Navbar } from '@material-tailwind/react'
 
export default function App() {
    return (
        <>
        <body>
            <nav class="navbar navbar-expand-lg navbar-light bg-light" id ="navb">
                <a class="navbar-brand" href="#">Portfolio_Perez</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#Resume">Resume</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#Certifications">Certifications</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#Certificates">Certificates</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#Projects">Projects</a>
                    </li>
                    
                    </ul>
                </div>
            </nav>
            <div class="container" id = "maincon" >
                <div class="container" id = "Home">
                    <div class="row">
                        <div class="col" style="padding-top: 5rem;">
                            <h1 > Sheena S. Perez</h1>
                            <h6> BS - Information Technology</h6>
                            <hr class="rounded" style="width: 200px;color: rgb(112, 111, 111);margin: auto; font-size: 5px;"> </hr>
                            <div class="container" style="width: 300px; height: 200px;">
                            <div class="row" style = "margin-top: 1rem;">
                                <div class="col">
                                    <a href="https://www.facebook.com/natsumeyuujinchou23"><i class="fa-brands fa-facebook" style="font-size:48px; color: black;"></i></a>
                                </div>
                                <div class="col">
                                <a href="https://www.linkedin.com/in/sheena-perez-b0a514324/"><i class="fa-brands fa-github" style="font-size:48px; color: black;"></i></a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="col">
                            <img src="/img/umlog.png" alt="UM LOGO" width="250" height="250" style="margin-top: 1rem; margin-bottom: 1rem;"> </img>
                            <h1 style="margin: auto; " > { "{ ... }" } </h1>
                        </div>
                    </div>
                </div>
                <div class="container" id = "Resume">
                    <h1 > Resume</h1>
                    <img src="/img/resume.png" alt="Resume" width="400" height="600" style="margin: auto;"> </img>
                </div>
            </div>
        </body>
        </>
    )
  }
