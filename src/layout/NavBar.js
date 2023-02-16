// 1. import area
import { Component } from "react";
import './layout.css'

//1.1 import somedefaultImport from some location/library

//1.2 import {someNamedImport} from some location /library

//2. class component defination area

export class NavBar extends Component{ // extends keyword used to inherit the properties and methods of the parent 
    //1. properties

    //2. constructor
     // constructor method is used to initialize the properties


    //3. methods
    // every class component must have render method

    render(){
        // every method should return something
        return(
            <>
                <nav className="navbar navbar-expand-lg pt-4 head-nav ">
                    <div className="container-fluid">
                    <img src="https://icons.getbootstrap.com/assets/img/icons-hero.png" alt="bstrap-icon" className="bs-icon" />
                        <a className="navbar-brand main-ancor" href="#">Docs</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active child-anchor" aria-current="page" href="#">Examples</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link child-anchor" href="#">Icons</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link child-anchor" href="#">Thems</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link child-anchor" href="#">Blogs</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle child-anchor" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}




//3. export area

//3.1 default export

//3.2 named export