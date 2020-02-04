import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { axiosWithAuth } from "../utils/axiosWithAuth";

import styled from "styled-components";
import Signup from "../images/Signup.png";

const StyledSignUp = styled.div`
  margin-top: 8%;
  height: 80vh;
  color: #e8964a;
  display: block;
  width: 80%;
  margin: 2rem auto;

  form {
    width: 70%;
    margin: 1% auto 2% auto;
    padding: 3rem 1rem;
    border-radius: 5rem;

    ::before {
      background-image: url(${Signup});
      background-size: cover;
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -2;
      opacity: 0.8;
    }

    input[name="email"],
    input[name="username"],
    input[name="password"],
    input[name="confirm"],
    input[name="location"] {
      border: 1px solid #e76e3c;
      border-radius: 5px;
      width: 80%;
      display: block;
      margin: 1rem auto 2rem auto;
      padding: 0.8rem 0;
    }

    label {
      display: block;
      width: 80%;
      margin: 2rem auto;
    }

    .submit {
      width: 50%;
      padding: 1rem;
      background-color: #c45228;
      border-radius: 5px;
      color: white;
      font-size: 0.9rem;
      text-shadow: 1px 2px #181212;
      border: 1px solid #e76e3c;

      &:hover {
        background-color: #e8964a;
        border: 1px solid #e76e3c;
        color: #181212;
        text-shadow: 1px 2px white;
      }
    }
  }

  h1 {
    color: #c45228;
    text-shadow: 1px 2px #181212;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #c45228;
    text-shadow: 1px 2px #181212;
  }

  p {
    color: black;
    // background-color: white;
    color: #c45228;
    text-shadow: 1px 2px #181212;
    // width: 50%;
    margin: 0 auto;
    // padding: 1rem;
  }

  a {
    color: #e8964a;
    text-decoration: none;

    &: hover {
      text-decoration: underline;
    }
  }
`;

const SignUp = props => {
  const { register, handleSubmit, watch, errors } = useForm();

  console.log("signup form firing", watch("email"));

  const submitForm = data => {
    axiosWithAuth()
      .post("", data)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/login");
      })
      .catch(err => {
        console.log("login error", err);
      });
  };

  return (
    <StyledSignUp>
      <div className="signup-form">
        <h1>Sign Up for Foodie Fun</h1>
        <form onSubmit={handleSubmit(submitForm)}>
          <h2>Enter an Email</h2>
          <input
            type="text"
            name="email"
            placeholder="Enter an email..."
            ref={register({ required: true, maxLength: 10 })}
          />
          {errors.email && <p>Email is required!</p>}

          <h2>Create a Username</h2>
          <input
            type="text"
            name="username"
            placeholder="Enter a username..."
            ref={register({ required: true, maxLength: 10 })}
          />
          {errors.username && <p>Username is required!</p>}

          <h2>Create a Password</h2>
          <input
            type="text"
            name="password"
            placeholder="Enter a username..."
            ref={register({ required: true, maxLength: 10 })}
          />
          {errors.password && <p>Password is required!</p>}

          <h2>Confirm Password</h2>
          <input
            type="text"
            name="confirm"
            placeholder="Enter password again..."
            ref={register({ required: true, maxLength: 10 })}
          />
          {errors.email && <p>Your passwords must match!</p>}

          <h2>Zipcode</h2>
          <input
            type="number"
            name="location"
            placeholder="Enter your five digit zipcode..."
            ref={register({ required: true, maxLength: 5 })}
          />
          {errors.location && <p>Your five-digit zipcode is required!</p>}

          <br />
          <input className="submit" type="submit" />

          <h5>
            Aleady have an account? <br />
            <Link to="/login">Log in here!</Link>{" "}
          </h5>
        </form>
      </div>
    </StyledSignUp>
  );
};

export default SignUp;

// OLD CODE

// const SignUp = props => {
//   const [credentials, setCredentials] = useState({
//     username: "",
//     password: "",
//     email: "",
//     location: ""
//   });

//   const handleChange = e => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   const submitForm = e => {
//     e.preventDefault();
//     axiosWithAuth()
//       .post()
//       .then(res => {
//         localStorage.setItem("token", res.data.payload);
//         props.history.push("/login");
//       })
//       .catch(err => {
//         console.log("signup error", err);
//       });
//   };

//   return (
//     <StyledSignUp>
//     <div className="signup-form">
//          <h1>Sign Up</h1>
//         <form onSubmit={submitForm}>
//           <input
//             type="text"
//             className="username"
//             placeholder="Enter username..."
//             value={credentials.username}
//             onChange={handleChange}
//           />
//           <input
//             type="text"
//             className="password"
//             placeholder="Enter password..."
//             value={credentials.password}
//             onChange={handleChange}
//           />
//           <input
//             type="text"
//             className="email"
//             placeholder="Enter email..."
//             value={credentials.email}
//             onChange={handleChange}
//           />
//           <input
//             type="number"
//             className="location"
//             placeholder="Enter zip code..."
//             value={credentials.location}
//             onChange={handleChange}
//           />
//           <button type="submit">Sign Up</button>
//         </form>
//     </div>
//     </StyledSignUp>
//   );
// };
