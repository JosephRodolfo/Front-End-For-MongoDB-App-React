import React from "react";
import { startLogin } from "../actions/auth";
import { useAuth } from "./AuthProvider";

const LoginPage = () => {
  const { onLogin } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = document.forms[0];

    startLogin(
      { email: username.value, password: password.value },
      onLogin
    );
  };

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
