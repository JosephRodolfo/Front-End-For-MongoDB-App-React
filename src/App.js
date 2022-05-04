import React from "react";
import AppRouter from "./routers/AppRouter";
import AuthProvider from "./components/AuthProvider";
import "./styles/styles.scss";

function App() {


  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>

  );
}

export default App;
