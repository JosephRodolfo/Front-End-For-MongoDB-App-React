import React from "react";
import { startLogin } from "../actions/auth";
import { useAuth } from "./AuthProvider";
import { useNavigate, useLocation } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const { onLogin } = useAuth();



  const handleSubmit = async (e) => {

    e.preventDefault();
    const { username, password } = document.forms[0];

    startLogin(
      { email: username.value, password: password.value },
      onLogin,
      ()=>{
        const previousLocation = location.state?.from?.pathname || '/dashboard';

        navigate(previousLocation)}

    );
  };

  return (
    <div className="box-layout">
      <div className="box-layout__box">
      <h1 className="box-layout__title">Log in</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-group">
          <input className=".input-group__item text-input" type="text" name="username" placeholder="email" />
          <input className=".input-group__item text-input" type="password" name="password" placeholder="password" />

          <button className=".input-group__item button" type="submit">
            Log in
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
