import { useState } from "react";

const useCustomValidate = ({ isSubmitted }) => {

  const stordedCredentials = JSON.parse(localStorage.getItem("credentials"));

  const [email, setEmail] = useState(stordedCredentials?.email || "");
  const [password, setPassword] = useState(stordedCredentials?.password || "");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    if(isSubmitted) {
      if (!validateEmail(value)) {
        if(!value) {
          setEmailError("");
        }
        else {
          setEmailError("Please enter a valid email address.");
        }
      } else {
        setEmailError("");
      }
    }
  };

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);
    if(isSubmitted) {
      if (!validatePassword(value)) {
        if(!value) {
          setPasswordError("");
        }
        else {
          setPasswordError("Password must be at least 8 characters long, include 1 uppercase letter, 1 number, and 1 special character.");
        }
      } else {
        setPasswordError("");
      }
    }
  };

  return { email, password, emailError, passwordError, handleEmailChange, handlePasswordChange, validateEmail, validatePassword,setEmailError, setPasswordError }
}

export default useCustomValidate;