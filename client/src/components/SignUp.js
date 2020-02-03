import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from "styled-components";

const StyledSignUp = styled.div`
margin-top: 8%;
  height: 80vh;
  color: #e76e3c;

  display: block;
  width: 80%;
  margin: 2rem auto;

  signup-form {	    
    width: 70%;	    
    margin: 15% auto 2% auto;	    
    padding: 3rem 1rem;	      
    border-radius: 5rem;	     
    background-color: white;
    width: 70%;

    ::before {
      background-image: url("../images/SignIn_Page3 hdPTXwI-lc.png");

      background-size: cover;
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -2;
      opacity: 0.4;
    }
    
    input[type='text],
    input[type='number'] {
        border: 1px solid #e76e3c;
        width: 70%;
        display: block;
        margin: 1rem auto 2rem auto;
        padding: 0.5rem 0;
    }

    label {
      display: block;
      width: 80%;
      margin: 2rem auto;
    }

    button {
      width: 50%;
      padding: 1rem;
      background-color: #e76e3c;
      color: white;
      border: 1px solid #e76e3c;

      &:hover{
        background-color: white;
        border: 1px solid #e76e3c;
        color: #e76e3c;
      }
    }
  }

  p {
    color: black;
    background-color: white;
    width: 50%;
    margin: 0 auto;
    padding: 1rem;
  }

  a {
    color: #e76e3c;
    text-decoration: none;

    &: hover {
      text-decoration: underline;
    }
  }
`;

const SignUp = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    email: "",
    location: ""
  });

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    axiosWithAuth()
      .post()
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/protected");
      })
      .catch(err => {
        console.log("signup error", err);
      });
  };

  return (
    <StyledSignUp>
    <div className="signup-form">
         <h1>Sign Up</h1>
        <form onSubmit={submitForm}>
          <input
            type="text"
            className="username"
            placeholder="Enter username..."
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            type="text"
            className="password"
            placeholder="Enter password..."
            value={credentials.password}
            onChange={handleChange}
          />
          <input
            type="text"
            className="email"
            placeholder="Enter email..."
            value={credentials.email}
            onChange={handleChange}
          />
          <input
            type="number"
            className="location"
            placeholder="Enter zip code..."
            value={credentials.location}
            onChange={handleChange}
          />
          <button type="submit">Sign Up</button>
        </form>
    </div>
    </StyledSignUp>
  );
};

export default SignUp;
