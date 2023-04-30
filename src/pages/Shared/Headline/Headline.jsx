/* eslint-disable no-unused-vars */
import React from "react";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
const Headline = () => {
  return (
    <Container className="d-flex">
      <Button variant="danger" style={{ width: "150px" }}>
        Read Now
      </Button>
      <Marquee className="text-danger" speed={50}>
        1,000 pairs of autographed Size 22 Reeboks were made available thanks to
        a partnership between Shaquille O’Neal and Steiner Sports.
      </Marquee>
    </Container>
  );
};

export default Headline;
