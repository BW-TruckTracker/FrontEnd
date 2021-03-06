import React, { useState, useEffect } from "react";
import axios from "axios";
import schema from "./validation/registerSchema";
import * as yup from "yup";
import { Link  } from 'react-router-dom';
import Navbar from '../components/Navbar.js';
import Footer from '../components/footer/Footer.js';

const baseUrl = "https://unit4-build-week-backend.herokuapp.com/api";
const registerUrl = "auth/register";

// INITIAL STATES
// INITIAL STATES
const initialFormValues = {
  username: "",
  password: "",
  email: "",
  terms: false,
};

// // USED IN VALIDATION
const initialFormErrors = {
  username: "",
  password: "",
  email: "",
  terms: false,
};

export default function SignUp() {
  // STATES
  // STATES
  const [users, setUsers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);
  // EVENT HANDLERS
  // EVENT HANDLERS
  
  //Changes the form when form value is changed
  const updateForm = (inputName, inputValue) => {
    yup
      .reach(schema, inputName)
      .validate(inputValue)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [inputName]: "",
        });
      })
      //Returning error messages from validation
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [inputName]: err.formErrors,
        });
      });

    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    });
  };

  //Submit the form and post to backend using POST
  const registerUser = () => {
    const newUser = {
      username: formValues.username.trim(),
      password: formValues.password.trim(),
      email: formValues.email.trim(),
    };
    // I don't need these two lines of code because I'm using schema for validation. But... Maybe it would have been more clean to use these two lines. 
//     if (!newUser.username || !newUser.password || !newUser.email)
//     return;

    //POST request to /auth/register and reset form
    axios
      .post(`${baseUrl}/${registerUrl}`, newUser)
      .then((res) => {
        setUsers([newUser, ...users]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log("This is an error from POST request!");
      });
  };

  //Side Effects
  //put user in state
  useEffect(() => {
    axios
      .get(`${baseUrl}/${registerUrl}`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log("This is an error from GET request!");
      });
  }, []);

  // this adjusts the status of 'disabled' every time when formValues change
  useEffect(() => {
    schema.isValid(formValues).then(valid => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <>
  
    <Navbar />
    <div className="central">
      <h2>Signup</h2>
    <form className="form container" onSubmit={registerUser}>
      <div className="register container">
        <label>
          Username
          <input
            name="username"
            type="text"
            placeholder="enter username"
            maxLength="30"
            value={formValues.username}
            onChange={updateForm}
          />
          <br></br>
        </label>
        <label>
          Password
          <input
            name="password"
            type="text"
            placeholder="enter password"
            maxLength="30"
            value={formValues.password}
            onChange={updateForm}
          />
        </label>
        <label>
        <br></br>
          Email
          <input
            name="email"
            type="email"
            placeholder="enter email"
            maxLength="30"
            value={formValues.email} 
            onChange={updateForm}
          />
        </label>
        <label>
        <br></br>
          <input
            name="terms"
            type="checkbox"
            checked={formValues.terms}
            onChange={updateForm}
          />
          <span>I agree to all the statements in the <b>terms of service</b></span>
        </label>
        <br></br>
        <button>Sign Up!</button>
        <button disabled={disabled}>Sign Up!</button>
        <Link to='/Login'>I'm already a member</Link>
      </div>
    </form>
    </div>
    <Footer />
    </>
  );
}
