import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import AddService from "./Pages/AddService";
import ServiceList from "./Pages/ServiceList";
import Errorpage from "./Pages/Errorpage";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<AddService />}></Route>
        <Route path="/servicelist" element={<ServiceList />}></Route>
        <Route path="*" element={<Errorpage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
