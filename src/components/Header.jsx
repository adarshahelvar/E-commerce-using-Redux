import React, { useState } from "react";
import logo from "../Imges/logo.png";
import "./Header.css";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function App() {
  const [showNavSecond, setShowNavSecond] = useState(false);

  return (
    <div className="header_parent">
      <MDBNavbar expand="lg" light bgColor="light" className="h-100">
        <img src={logo} alt="logo" className="image_logo" />
        <MDBContainer fluid>
          <MDBNavbarToggler
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavSecond(!showNavSecond)}
          >
            ☰
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNavSecond}>
            <MDBNavbarNav>
              <Link to="/products">
                <MDBNavbarLink active aria-current="page">
                  Home
                </MDBNavbarLink>
              </Link>
              <Link to="/products">
                <MDBNavbarLink>Products</MDBNavbarLink>
              </Link>
              <MDBNavbarLink>Pricing</MDBNavbarLink>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}
