import React from "react";
import { Route, Routes } from "react-router-dom";
import Users from "./components/Users";
import AboutPage from "./components/AboutPage";
import NotFoundPage from "./components/NotFoundPage";
import UserDitails from "./components/UserDitails";
import HomePage from "./components/HomePage";

// ! Устанавливаем бибилиотеку npm react-router-dom
// ! Обернуть App в BrowserRouter
// ! Создаем файл MainRouts
// ! Настраиваем наши роуты (Route)

const MainRouts = () => {
  return (
    <Routes>
      <Route path="/users" element={<Users />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/users/:id" element={<UserDitails />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/" element={<AboutPage />} />
    </Routes>
  );
};

export default MainRouts;
