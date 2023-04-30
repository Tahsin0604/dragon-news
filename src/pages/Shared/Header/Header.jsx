/* eslint-disable no-unused-vars */
import React from "react";
import logo from "./../../../assets/logo.png";
import moment from "moment";
import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <Container>
      <div className="text-center py-5">
        <img src={logo} alt="" />
        <p className="text-secondary mt-2">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p className="text-secondary">
          {moment().format("dddd, MMMM D, YYYY")}
        </p>
      </div>
    </Container>
  );
};

export default Header;
