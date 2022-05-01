import LoginPage from "./components/LoginPage";
import { BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom';
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import NoMatch from "./components/NoMatch";
function App() {
  return (
    <BrowserRouter>

      <h1>React Router</h1>

      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="login" element={<LoginPage />} />

        <Route path="*" element={<NoMatch />} />

      </Routes>
      </BrowserRouter >

  );
};

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/login">Login</NavLink>

    </nav>
  );
}

export default App;
