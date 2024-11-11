import React from "react";
import MiguelJourney from "./MiguelJourney";
// import MiguelJourney from './MiguelJourney';
import Services from "./Services";
import { DiscoverFit } from "./DiscoverFit";
import Footer from "./Footer";
import FooterBottom from "./FooterBottom";
import Imagepath from "./Imagepath";
import Welcome from "./Welcome";
import SideImage from "./SideImage";
import PrintOnCanvas from "./PrintOnCanvas";
import Navbar from "./NavbarArt";
// import '../../indexArt.css'
import "../Miguel.css"


function homePage() {
  return (
    <>
      <section className="overflow-x-hidden">
        <Welcome />

        <div className="lg:flex py-[160px]">
          <div className="lg:w-1/2">
            <SideImage />
          </div>
          <div className="lg:w-1/2">
            <Imagepath />
          </div>
        </div>

        <PrintOnCanvas />
        <MiguelJourney />
        <Services />
        <DiscoverFit />
      </section>
    </>
  );
}

export default homePage;
