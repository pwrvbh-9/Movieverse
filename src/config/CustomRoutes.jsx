import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";

import Details from "../pages/detail/Details";
import Catalog from "../pages/Catalog";

function CustomRoutes() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/:category/search/:keyword" element={<Catalog />} />
    <Route path="/:category/:id" element={<Details />} />
    <Route path="/:category" element={<Catalog />} />
  </Routes>
  );
}

export default CustomRoutes;
