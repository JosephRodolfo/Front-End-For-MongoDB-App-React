import React from "react";
import LoginPage from "../components/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import NoMatch from "../components/NoMatch";
import { Navigation } from "../components/Navigation";
import AuthProvider from "../components/AuthProvider"



function AppRouter() {
   

  

  return (
    <AuthProvider>
    <BrowserRouter>
      <h1>Task Manager</h1>

      <Navigation  />
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="login" element={<LoginPage/>} />
        <Route path="dashboard" element={<Dashboard />} />

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default AppRouter;