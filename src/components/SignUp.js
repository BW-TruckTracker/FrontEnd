

import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import * as yup from "yup";
import signupSchema from "./validation/registerSchema";
import "../App.css";
const INITIAL_FORM_STATE = {
    username: "",
    email: "",
    password: "",
};
const INITIAL_ERROR_STATE = {
    username: "",
    password: "",
    email: "",
};
const SignUp = (props) => {
    const [formState, setFormState] = useState(INITIAL_FORM_STATE);
    const [responseMsg, setResponseMsg] = useState({ success: null, msg: "" });
    const [formErrors, setFormErrors] = useState(INITIAL_ERROR_STATE);
    const [disabled, setDisabled] = useState(true);
    const [formChanged, setFormChanged] = useState(false);
    useEffect(() => {
        if (props && props.userData) {
            setFormState(props.userData);
        }
    }, [props]);
    const handleInputChange = (e) => {
        const target = e.target;
        validate(target.name, target.value);
        setFormState({ ...formState, [target.name]: target.value });
    };
    const validate = (name, value) => {
        yup
            .reach(signupSchema, name)
            .validate(value)
            .then((valid) => {
                setFormChanged(true);
                setFormErrors({
                    ...formErrors,
                    [name]: "",
                });
            })
            .catch((err) => {
                setFormErrors({
                    ...formErrors,
                    [name]: err.errors[0],
                });
            });
    };
    useEffect(() => {
        signupSchema.isValid(formState).then((valid) => {
            setDisabled(!valid);
        });
    }, [formState]);
    useEffect(() => {
        signupSchema.isValid(formChanged).then((valid) => {
            setDisabled(!valid);
        });
    }, [formChanged]);
    const onFormSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post("/auth/register", formState)
            .then((res) => {
                console.log(res);
                if (res.statusText === "Created") {
                    console.log("New account is created successfully.");
                    const successMsg = props.btn
                        ? "Account is updated successfully."
                        : "New account is created successfully.";
                    setFormState(INITIAL_FORM_STATE);
                    setResponseMsg({
                        success: true,
                        msg: successMsg,
                    });
                }
                window.location = "/login";
            })
            .catch((err) => {
                // debugger;
                if (err.response) {
                    console.log(err.response);
                    setResponseMsg({
                        success: false,
                        msg: err.response.data.message,
                    });
                }
            });
    };
    return (
        <div>
            <h1>Sign Up</h1>
            {responseMsg.success !== null && (
                <p
                    className={`text-center ${
                        responseMsg.success ? "text-success" : "text-danger"
                    }`}
                >
                    {responseMsg.msg}
                </p>
            )}
            <form onSubmit={onFormSubmit}>
                <label>
                    Username <br />
                    <input
                        name="username"
                        type="text"
                        placeholder="Username"
                        value={formState.username}
                        onChange={handleInputChange}
                    />
                    <div className="text-danger">{formErrors.username}</div>
                </label>
                <label>
                    Email <br />
                    <input
                        name="email"
                        type="email"
                        placeholder="Your email"
                        value={formState.email}
                        onChange={handleInputChange}
                    />
                    <div className="text-danger">{formErrors.email}</div>
                </label>
                <label>
                    Password <br />
                    <input
                        name="password"
                        type="password"
                        value={formState.password}
                        onChange={handleInputChange}
                    />
                    <div className="text-danger">{formErrors.password}</div>
                </label>
                <button type="submit" name="loginButton">
                    submit
                </button>
            </form>
        </div>
    );
};
export default SignUp;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import schema from "./validation/registerSchema";
// import * as yup from "yup";
// import { Link  } from 'react-router-dom';
// import Navbar from '../components/Navbar.js';
// import Footer from '../components/footer/Footer.js';

// const baseUrl = "https://unit4-build-week-backend.herokuapp.com/api";
// const registerUrl = "auth/register";

// // INITIAL STATES
// // INITIAL STATES
// const initialFormValues = {
//   username: "",
//   password: "",
//   email: "",
//   terms: false,
// };

// //Where should the rest of the request body be created?
// //"current_location_lat": "16.293869", #optional, defaults to target market if not provided.
// //"current_location_long": "26.2199",  #optional, defaults to target market if not provided.

// //The success response?
// //     "user_id": 7,
// //     "username": "foodieFan",
// //     "current_location_lat": "16.293869",
// //     "current_location_long": "26.2199",
// //     "created_at": "2020-12-23 19:56:28",
// //     "updated_at": "2020-12-23 19:56:28"

// // USED IN VALIDATION
// const initialFormErrors = {
//   username: "",
//   password: "",
//   email: "",
//   terms: false,
// };

// export default function SignUp() {
//   // STATES
//   // STATES
//   const [users, setUsers] = useState([]);
//   const [formValues, setFormValues] = useState(initialFormValues);
//   const [formErrors, setFormErrors] = useState(initialFormErrors);
//   const [disabled, setDisabled] = useState(true);
//   // EVENT HANDLERS
//   // EVENT HANDLERS
  
//   //Changes the form when form value is changed
//   const updateForm = (inputName, inputValue) => {
//     yup
//       .reach(schema, inputName)
//       .validate(inputValue)
//       .then(() => {
//         setFormErrors({
//           ...formErrors,
//           [inputName]: "",
//         });
//       })
//       //Returning error messages from validation
//       .catch((err) => {
//         setFormErrors({
//           ...formErrors,
//           [inputName]: err.formErrors,
//         });
//       });

//     setFormValues({
//       ...formValues,
//       [inputName]: inputValue,
//     });
//   };

//   //Submit the form and post to backend using POST
//   const registerUser = () => {
//     const newUser = {
//       username: formValues.username.trim(),
//       password: formValues.password.trim(),
//       email: formValues.email.trim(),
//     };
//     // I don't need these two lines of code because I'm using schema for validation. But... Maybe it would have been more clean to use these two lines. 
//     // if (!newUser.username || !newUser.password || !newUser.email)
//     // return;

//     //POST request to /auth/register and reset form
//     axios
//       .post(`${baseUrl}/${registerUrl}`, newUser)
//       .then((res) => {
//         setUsers([newUser, ...users]);
//         setFormValues(initialFormValues);
//       })
//       .catch((err) => {
//         console.log("This is an error from POST request!");
//       });
//   };

//   //Side Effects
//   //put user in state. GET all users from user or register API? Do I need to get users to make sure they're not registering twice?

//   useEffect(() => {
//     axios
//       .get(`${baseUrl}/${registerUrl}`)
//       .then((res) => {
//         setUsers(res.data);
//       })
//       .catch((err) => {
//         console.log("This is an error from GET request!");
//       });
//   }, []);

//   // this adjusts the status of 'disabled' every time when formValues change
//   useEffect(() => {
//     schema.isValid(formValues).then(valid => {
//       setDisabled(!valid);
//     });
//   }, [formValues]);

//   return (
//     <>
  
//     <Navbar />
//     <form className="form container" onSubmit={registerUser}>
//       <div className="register container">
//         <label>
//           Username
//           <input
//             name="username"
//             type="text"
//             placeholder="enter username"
//             maxLength="30"
//             value={formValues.username}
//             onChange={updateForm}
//           />
//         </label>
//         <label>
//           Password
//           <input
//             name="password"
//             type="text"
//             placeholder="enter password"
//             maxLength="30"
//             value={formValues.password}
//             onChange={updateForm}
//           />
//         </label>
//         <label>
//           Email
//           <input
//             name="email"
//             type="email"
//             placeholder="enter email"
//             maxLength="30"
//             value={formValues.email} 
//             onChange={updateForm}
//           />
//         </label>
//         <label>
//           <input
//             name="terms"
//             type="checkbox"
//             checked={formValues.terms}
//             onChange={updateForm}
//           />
//           <span>I agree to all the statements in the <b>terms of service</b></span>
//         </label>
//         <button disabled={disabled}>Sign Up!</button>
//         {/* This should Link to the sign in component. Make sure path in Route matches also*/}
//         <Link to='/'>I'm already a member</Link>

       
//       </div>
//     </form>
//     <Footer />
//     </>
//   );
// }
