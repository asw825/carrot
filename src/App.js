import React from "react";
import { Route, Routes } from "react-router-dom";

import Main from "./pages/Main";
import Header from "./components/header/Header";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Stores from "./pages/Stores";
import PartTimeJob from "./pages/PartTimeJob";
import RealEstate from "./pages/RealEstate";
import UsedCars from "./pages/UsedCars";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/parttimejob" element={<PartTimeJob />} />
        <Route path="/realestate" element={<RealEstate />} />
        <Route path="/usedcars" element={<UsedCars />} />
      </Routes>
    </div>
  );
}

export default App;
