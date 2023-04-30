/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
const Register = () => {
  //hook variable
  const { signUpUsingEmailPass } = useContext(AuthContext);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [terms, setTerms] = useState(false);

  //handling method
  const handleCheckBox = () => {
    setTerms(!terms);
  };
  const handleSignUp = (event) => {
    setSuccess("");
    setError("");
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    if (email === "" || name === "" || password === "") {
      setError("please enter all value");
      return;
    }
    signUpUsingEmailPass(email, password)
      .then((result) => {
        const loggedUser = result.user;
        updateProfile(loggedUser, {
          displayName: name,
          photoURL: photo,
        });
        setSuccess("User Created");
        form.reset();
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <Container className="form-width mx-auto">
      <h3 className="text-center">Register your Account</h3>
      <Form onSubmit={handleSignUp}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" name="name" placeholder="Enter Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhoto">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control type="text" name="photo" placeholder="Enter url" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Accept terms and conditions"
            onClick={handleCheckBox}
          />
        </Form.Group>
        <p></p>
        <Button variant="primary" type="submit" disabled={!terms}>
          Register
        </Button>
        <Form.Group className="mb-3 mt-2" controlId="formBasicCheckbox">
          <Form.Text className="text-secondary mt-3">
            Already have an Account. <Link to="/login">Login</Link>
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 mt-2" controlId="formBasicCheckbox">
          <Form.Text className="text-danger">{error}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 mt-2" controlId="formBasicCheckbox">
          <Form.Text className="text-success">{success}</Form.Text>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Register;
