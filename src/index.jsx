import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/index.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Survey from "./pages/Survey/Survey";
import Error from "./components/Error/Error";
import Freelances from "./pages/Freelances/Freelances";
import Results from "./pages/Results/Results";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey/:questionNumber" element={<Survey />} />
        <Route path="/Results" element={Results} />
        <Route path="/Freelances" element={Freelances} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
