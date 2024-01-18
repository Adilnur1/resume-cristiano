import React from "react";
import Navbar from "./components/Navbar";
import MainRouts from "./MainRouts";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <HomePage /> */}
      <MainRouts />
    </div>
  );
};

export default App;
