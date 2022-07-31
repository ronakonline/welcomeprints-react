import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Service from "./Pages/Service";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="service">
          <Route path=":id" element={<Service />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
