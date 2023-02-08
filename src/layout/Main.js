import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header";

const Main = () => {
  return (
    <div>
      <h4 className="font-bold text-sm my-2">
        Hire My Agency To Help You Grow
      </h4>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
