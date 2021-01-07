import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import Auth from "../utils/auth";
import { LOGIN } from "../utils/mutations";

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: {
          email: formState.email,
          password: formState.password,
        },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container-fluid" id="login-page">
      <div className="row justify-content-center">
        <div id="login-form">
          <h2 id="login-title"> Login </h2>
          <form className="card card-body" onSubmit={handleFormSubmit}>
            <div className="form-group">
              <input
                placeholder="Email"
                name="email"
                type="email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                placeholder="Password"
                name="password"
                type="password"
                id="password"
                onChange={handleChange}
              />
            </div>
            {error ? (
              <div>
                <p className="error-text">
                  The Provided credentials are incorrent
                </p>
              </div>
            ) : null}
            <div className="form-group flex-end justify-item-center">
              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
