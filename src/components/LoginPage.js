import React from "react";
import { startLogin } from "../actions/auth";
import { useState } from "react";

const LoginPage = ({ handleLogin }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = document.forms[0];

    startLogin(
      { email: username.value, password: password.value },
      handleLogin
    );
    //
  };

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  return (
    <div className="box-layout">
      <div className="box-layout__box">
        <form onSubmit={handleSubmit}>
          <h1 className="box-layout__title">Log in</h1>
          <input type="text" name="username" placeholder="email" />
          <input type="password" name="password" placeholder="password" />

          <button className="button" type="submit">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
