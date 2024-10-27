import React from "react";
import HomeRouter from "./routers/HomeRouter";
import AuthRouter from "./routers/AuthRouter";


import "./App.css";

function App() {
  const isLogged = true; 


  return (
    <>
      {isLogged ?  <HomeRouter /> : <AuthRouter />}
    </>
  );
}

export default App;
