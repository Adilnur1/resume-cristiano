import React from "react";
import { Route, Routes } from "react-router-dom";
import Users from "./components/Users";
import NotFoundPage from "./components/NotFoundPage";
import HomePage from "./components/HomePage";

const MainRouts = () => {
  return (
    <Routes>
      <Route path="/users" element={<Users />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default MainRouts;
