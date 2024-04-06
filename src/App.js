import React from "react";
import Form from "./components/Form";
import Profile from "./components/Profile";
import Questionnaire from "./components/Questionnaire";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container mx-auto">
      <Routes>
        <Route Component={Form} path="/" />
        <Route Component={Profile} path="/profile" />
        <Route Component={Questionnaire} path="/questionnaire" />
        <Route Component={Login} path="/login" />
      </Routes>
    </div>
  );
}

export default App;
