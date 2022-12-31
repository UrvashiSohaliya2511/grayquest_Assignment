import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import User from "../pages/User/User";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<User />} />
    </Routes>
  );
};

export default AllRoutes;
