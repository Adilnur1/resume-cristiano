import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Outlet />
      <footer>@geeks2024</footer>
    </>
  );
};

export default Layout;
