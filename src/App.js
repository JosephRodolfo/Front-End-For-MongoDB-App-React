import React from "react";
import AppRouter from "./routers/AppRouter";
import AuthProvider from "./components/AuthProvider";
function App() {


  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>

  );
}

export default App;
