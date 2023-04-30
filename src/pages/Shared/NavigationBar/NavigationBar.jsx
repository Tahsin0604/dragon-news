/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const signOut = () => {
    logOut().then().catch();
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="white"
      variant="white"
      className="mb-4"
    >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
          </Nav>
          <Nav className="d-flex align-items-center gap-2">
            <li className="text-secondary">
              {user ? (
                user.photoURL !== null ? (
                  <img
                    src={user.photoURL}
                    alt=""
                    style={{
                      height: "40px",
                      width: "40px",
                      borderRadius: "50%",
                    }}
                  />
                ) : (
                  <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>
                )
              ) : (
                <></>
              )}
            </li>
            <li>
              {user ? (
                <Button variant="dark" onClick={signOut}>
                  Logout
                </Button>
              ) : (
                <Link to="/login">
                  <Button variant="dark">Login</Button>
                </Link>
              )}
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
