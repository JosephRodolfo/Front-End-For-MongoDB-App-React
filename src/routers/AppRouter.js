import LoginPage from "../components/LoginPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import NoMatch from "../components/NoMatch";
import { Navigation } from "../components/Navigation";
import ProtectedRoute from "./ProtectedRoutes";
import SignupPage from "../components/SignupPage"


function AppRouter() {
   

  return (
    <BrowserRouter>
      <h1>Task Manager</h1>

      <Navigation  />
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="login" element={<LoginPage/>} />
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }/>
         <Route path="signup" element={<SignupPage/>} />

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;