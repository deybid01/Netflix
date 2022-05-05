import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./component/Footer/Footer";
import Home from "./pages/Home";
import NetFlixShow from "./pages/NetFlixShow";
import SignIn from "./pages/SignIn";

function App({}) {
  return (
  <div className="App">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/netflix-show" element={<NetFlixShow />} />
        <Route path="/sign-in" element={<SignIn />} />
    </Routes>
    <Footer />
  </div>
  );
};

export default App;