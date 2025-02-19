import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import useCustomValidate from '../hooks/use-custom-validate';

const SignInForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isRememberred, setIsRememberred] = useState(false);

  const { email, password, emailError, passwordError, handleEmailChange, handlePasswordChange, validateEmail, validatePassword, setEmailError, setPasswordError } = useCustomValidate({ isSubmitted });

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }

    if (!validatePassword(password)) {
      setPasswordError(
        "Password must be at least 8 characters long, include 1 uppercase letter, 1 number, and 1 special character."
      );
    } else {
      setPasswordError("");
    }

    const form = event.currentTarget;

    if (form.checkValidity() && validateEmail(email) && validatePassword(password)) {
      if(isRememberred) {
        const credentials = { email, password }
        localStorage.setItem("credentials", JSON.stringify(credentials) )
      }
      else {
        localStorage.removeItem("credentials")
      }
      dispatch(login());
      navigate("/");
    }

    setIsSubmitted(true);
  };

  return (
    <div className="form-container">
      <h2 className="sign-in-title">Sign In</h2>
      <div className="sign-in-header">
        <h6 className="sign-in-subtitle">
          New user?{" "}
          <a className="create-link" href="">
            Create an account
          </a>
        </h6>
      </div>
      <Form noValidate validated={!emailError && !passwordError && isSubmitted} onSubmit={handleSubmit}>
        <Row className="mb-4">
          <Form.Group as={Col} controlId="validationCustomEmail">
            <InputGroup hasValidation>
              <Form.Control
                type="email"
                placeholder="Username or Email"
                value={email}
                onChange={handleEmailChange}
                required
                isInvalid={!!emailError}
              />
              <Form.Control.Feedback type="invalid">
                {emailError || "Please provide a valid Username or Email."}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>

        <Row className="mb-4">
          <Form.Group as={Col} controlId="validationCustomPassword">
            <InputGroup hasValidation>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                required
                isInvalid={!!passwordError}
              />
              <Form.Control.Feedback type="invalid">
                {passwordError || "Please provide a valid Password."}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>

        <Form.Group className="mb-4">
          <Form.Check
            label="Keep me signed in"
            className="form-checkbox"
            value={isRememberred}
            onClick={() => setIsRememberred(prev => !prev) }
          />
        </Form.Group>

        <Button type="submit" className="w-100">
          Sign In
        </Button>

        <h4 className='styled-header sign-in-header'>
          <span>Or Sign In With</span>
        </h4>

      </Form>
    </div>
  );
};

export default SignInForm;
