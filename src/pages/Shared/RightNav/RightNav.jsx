import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from "./../../../assets/bg.png";
const RightNav = () => {
  return (
    <div>
      <h4 className="text-center mb-4">Login With</h4>
      <Button
        variant="outline-primary"
        className="w-100 d-flex justify-content-center align-items-center gap-1"
      >
        <FaGoogle />
        Login with Google
      </Button>
      <Button
        variant="outline-secondary"
        className="w-100 mt-2 d-flex justify-content-center align-items-center gap-1"
      >
        <FaGithub />
        Login with Github
      </Button>
      <div>
        <h4>Find us on</h4>
        <ListGroup>
          <ListGroup.Item className="w-100 d-flex  align-items-center gap-2">
            <FaFacebook />
            Facebook
          </ListGroup.Item>
          <ListGroup.Item className="w-100 d-flex  align-items-center gap-2">
            <FaTwitter />
            Twitter
          </ListGroup.Item>
          <ListGroup.Item className="w-100 d-flex  align-items-center gap-2">
            <FaInstagram /> Instagram
          </ListGroup.Item>
        </ListGroup>
        <QZone></QZone>
        <div className="position-relative h-100 mt-4 text-white">
          <img src={bg} alt="" className="w-100 h-100" />
          <div className="position-absolute top-50 start-50 text-center translate-middle">
            <h2 className="mb-4">Create an Amazing Newspaper</h2>
            <p className="mb-4">
              Discover thousands of options, easy to customize layouts,
              one-click to import demo and much more.
            </p>
            <Button variant="danger">Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
