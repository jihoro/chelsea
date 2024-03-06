import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import {HiMenuAlt4} from "react-icons/hi";
import { Link } from "react-router-dom";
import { logotext ,socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavDropdown from 'react-bootstrap/NavDropdown';



const Headermain = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  return (
    <>
      
      <header className="fixed-top site__header">
        {/* <div className="d-flex align-items-center justify-content-between">
          <Link  className="navbar-brand nav_ac" to="/">
            {logotext}
          </Link>
          <div className="d-flex align-items-center">
          <button className="menu__button  nav_ac" onClick={handleToggle}>
            {!isActive ? <VscClose /> : <HiMenuAlt4 />}
          </button>
          
          </div>
        </div> */}
        <Navbar expand="lg" className="bg-body-tertiary bg-white">
            <Navbar.Brand href="/">Chelsea</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav bg-white" />

            <Navbar.Collapse id="basic-navbar-nav bg-white" >
              <Nav variant="underline" className="ms-auto">
                <Nav.Link href="/home" className={
                  window.location.href.includes("home") ? "active" : ""
                }>Home</Nav.Link>
                <Nav.Link href="/about" className={
                  window.location.href.includes("about") ? "active" : ""
                }>About</Nav.Link>                

                <Nav.Link href="/portfolio" className={
                  window.location.href.includes("portfolio") ? "active" : ""
                }>Portfolio</Nav.Link>
                <Nav.Link href="/contact" className={
                  window.location.href.includes("contact") ? "active" : ""
                }>Contact</Nav.Link>
                <Nav.Link href="/project" className={
                  window.location.href.includes("project") ? "active" : ""
                }>Project</Nav.Link>


                
              </Nav>
            </Navbar.Collapse>
        </Navbar>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          {/* <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item ">
                  <Link  onClick={handleToggle} to="/" className="my-3">Home</Link>
                  </li>
                  <li className="menu_item">
                    <Link  onClick={handleToggle} to="/portfolio" className="my-3"> Portfolio</Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/about" className="my-3">About</Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/contact" className="my-3"> Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex">
            <a href={socialprofils.facebook}>Facebook</a>
            <a href={socialprofils.github}>Github</a>
            <a href={socialprofils.twitter}>Twitter</a>
            </div>
            <p className="copyright m-0">copyright __ {logotext}</p>
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
      
    </>
  );
};

export default Headermain;
