import React from 'react';
import { useAuth } from "./AuthProvider";

const Dashboard = () => {
  const {token} = useAuth()
  
 return( <div>
   <h1>Dashboard (protected)</h1>
   <div>Authenticated as {token}</div>
  </div>
)}
export default Dashboard;