/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
const Login = () => {
  //hook
  const { login } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/categories/0";
  console.log(location);
  console.log(from);
  // form handle
  const handleLogin = (event) => {
    setError("");
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    if (email === "" || password === "") {
      setError("please enter all value");
      return;
    }
    login(email, password)
      .then((result) => {
        const loggedUser = result.user;
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <Container className="form-width mx-auto">
      <h3 className="text-center">Please Login</h3>
      <Form onSubmit={handleLogin}>
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
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <p></p>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <Form.Group className="mb-3 mt-2" controlId="formBasicCheckbox">
          <Form.Text className="text-secondary mt-3">
            Don't have an Account. <Link to="/register">Register</Link>
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 mt-2" controlId="formBasicCheckbox">
          <Form.Text className="text-danger">{error}</Form.Text>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Login;
