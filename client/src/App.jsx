import React from "react";
import "./App.css";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home";
import Login from "./components/Login";
import Joinagame from "./components/Joinagame";
import Creategame from "./components/Creategame";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="joinagame" element={<Joinagame/>}/>
          <Route path="createagame" element={<Creategame/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
