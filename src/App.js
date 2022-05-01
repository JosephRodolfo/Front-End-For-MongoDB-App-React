import React from "react";
import LoginPage from "./components/LoginPage";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import NoMatch from "./components/NoMatch";
import { useState } from "react";
import { Navigation } from "./components/Navigation";
function App() {
  const [token, setToken] = useState(null);

  const onLogin = (user) => {
    setToken(user.token);
  };

  const onLogout = () => {
    setToken(null);
  };

  return (
    <BrowserRouter>
      <h1>Task Manager</h1>

      <Navigation token={token} handleLogout={onLogout} />
      <Routes>
        <Route index element={<LoginPage handleLogin={onLogin} />} />
        <Route path="login" element={<LoginPage handleLogin={onLogin} />} />
        <Route path="dashboard" element={<Dashboard />} />

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
