import React from "react";
import AdminRouter from "./routers/AdminRouter";
import AuthRouter from "./routers/AuthRouter";
import HomeRouter from "./routers/HomeRouter";

import "./App.css";

function App() {
  const isLogged = true; // Replace with actual logic to determine if the user is logged in
  const isAdmin = true; // Replace with actual logic to determine if the user is an admin

  return (
    <>
      {isLogged ? (isAdmin ? <AdminRouter /> : <HomeRouter />) : <AuthRouter />}
    </>
  );
}

export default App;
