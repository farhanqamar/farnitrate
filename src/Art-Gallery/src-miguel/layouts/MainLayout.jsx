import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from '../pages/Home/NavbarArt';
import Footer from "../pages/Home/Footer";
import FooterBottom from "../pages/Home/FooterBottom";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="pt-44">
        <Outlet />
      </div>

      <Footer />
      <FooterBottom />
    </>
  );
};

export default MainLayout;
