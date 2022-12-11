// routes.js
import React from "react";
import { Route, Routes } from "react-router-dom";

import { Login, Register } from "../components";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/signup" element={<Register />} />
  </Routes>
);

export default AppRoutes;
