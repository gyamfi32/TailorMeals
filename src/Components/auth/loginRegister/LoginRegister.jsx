import React, { useState, useEffect } from "react";
import "./LoginRegister.css";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
// import {
//   doSignInWithEmailAndPassword,
//   doSignInWithGoogle,
//   doCreateUserWithEmailAndPassword,
// } from "./auth";
// import { useAuth } from "../../../contexts/authContext";
// import { useNavigate } from "react-router-dom";




function LoginRegister () {
  // const { userLoggedIn } = useAuth();
  // const  navigate = useNavigate();
  // const [email, setEmail] = useState("");
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [isSigningIn, setIsSigningIn] = useState(false);
  const [action, setAction] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

//   useEffect(() => {
//     if (userLoggedIn) {
//       navigate("/");
//     }
//   }, [userLoggedIn, navigate]);


  const registerLink = (e) => {
    e.preventDefault();
    setAction(" active");
    setErrorMessage("");
  };

  const loginLink = (e) => {
    e.preventDefault();
    setAction(" ");
    setErrorMessage("");
  };

//   const onSubmitLogin = async (e) => {
//     e.preventDefault();
//     if (!isSigningIn) {
//       setIsSigningIn(true);
//       try {
//         await doSignInWithEmailAndPassword(email, password);
//         setIsSigningIn(false);
//         navigate("/");
//       } catch (error) {
//         setIsSigningIn(false);
//         setErrorMessage("Error logging in: " + error.message);
//       }
//     }
//   };

//   const onSubmitRegister = async (e) => {
//     e.preventDefault();
//     if (!isSigningIn) {
//       setIsSigningIn(true);
//       try {
//         await doCreateUserWithEmailAndPassword(email, password);
//         setIsSigningIn(false);
//         navigate("/");
//       } catch (error) {
//         setIsSigningIn(false);
//         setErrorMessage("Error registering: " + error.message);
//       }
//     }
//   };

//   const onGoogleSignIn = async (e) => {
//     e.preventDefault();
//     if (!isSigningIn) {
//       setIsSigningIn(true);
//       try {
//         await doSignInWithGoogle();
//         setIsSigningIn(false);
//       } catch (error) {
//         setIsSigningIn(false);
//         setErrorMessage("Error signing in with Google: " + error.message);
//       }
//     }
//   };

//   if (userLoggedIn) {
//     return null;
//   }

  return (
    <div className="login-register-container">
      <div className={`wrapper${action}`}>
        <div className="form-box login">
          {/* <form onSubmit={onSubmitLogin}> */}
          <form action="" >
            <h1>Login</h1>
            <div className="input-box">
              <input
                type="text"
                placeholder="Email"
                required
                // value={email}
                // onChange={(e) => {
                //   setEmail(e.target.value);
                //   setErrorMessage("");
                // }}
                // aria-label="Email"
              />
              <FaEnvelope className="icon" />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                required
                // value={password}
                // onChange={(e) => {
                //   setPassword(e.target.value);
                //   setErrorMessage("");
                // }}
                // aria-label="Password"
              />
              <FaLock className="icon" />
            </div>
            {errorMessage && <p className="error">{errorMessage}</p>}
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#">Forgot password?</a>
            </div>

            <button type="submit">Login</button>
            <button type="submit">
            {/* <button onClick={onGoogleSignIn} disabled={isSigningIn}> */}
              Login with Google
            </button>

            <div className="register-link">
              <p>
                Don't have an account?{" "}
                <a href="loginregister" onClick={registerLink}>
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>
        <div className="form-box register">
          <form>
          {/* <form onSubmit={onSubmitRegister}> */}
            <h1>Registration</h1>
            <div className="input-box">
              <input
                type="text"
                placeholder="Username"
                required
                // value={username}
                // onChange={(e) => {
                //   setUsername(e.target.value);
                //   setErrorMessage("");
                // }}
                // aria-label="Username"
              />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input
                type="email"
                placeholder="Email"
                required
                // value={email}
                // onChange={(e) => {
                //   setEmail(e.target.value);
                //   setErrorMessage("");
                // }}
                // aria-label="Email"
              />
              <FaEnvelope className="icon" />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                required
                // value={password}
                // onChange={(e) => {
                //   setPassword(e.target.value);
                //   setErrorMessage("");
                // }}
                // aria-label="Password"
              />
              <FaLock className="icon" />
            </div>
            {errorMessage && <p className="error">{errorMessage}</p>}
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />I agree to the terms & conditions
              </label>
            </div>
            <button type="submit">
            {/* <button type="submit" disabled={isSigningIn}> */}
              Register
            </button>

            <div className="register-link">
              <p>
                Already have an account?{" "}
                <a href="loginregister" onClick={loginLink}>
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
