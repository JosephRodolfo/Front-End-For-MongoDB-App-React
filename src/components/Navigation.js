import { NavLink } from "react-router-dom";
import { startLogout } from "../actions/auth";

export const Navigation = ({token, handleLogout}) => {

   const  logout = async () =>{
    startLogout(token, handleLogout)
    
   }

    return (
      <nav>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        {token && (
          <button type="button" onClick={logout}>
            Sign Out
          </button>
        )}
  
      </nav>
    );
  }