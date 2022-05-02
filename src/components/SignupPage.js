import React from "react";
import { useAuth } from "./AuthProvider";


const SignupPage = () => {


  const {token} = useAuth()


  const handleSubmit = async (e) => {

    e.preventDefault();
 


  };

  return (

    token ? <><h1>Error!</h1><p>Sorry, partner, but you're already logged in</p></> : 

    <div className="box-layout">
      <div className="box-layout__box">
        <form onSubmit={handleSubmit}>
          <h1 className="box-layout__title">Create your account!</h1>
          <input type="text" name="name" placeholder="name" />

          <input type="text" name="username" placeholder="email" />
          <input type="password" name="password" placeholder="password" />

          <button className="button" type="submit">
            Submit
            </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;