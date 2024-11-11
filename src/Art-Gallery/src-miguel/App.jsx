import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage"

import MainLayout from "./layouts/MainLayout";
import Contact from "./pages/Contact";

import RentingArt from "./pages/RentingArt";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
import Abstract from "./pages/Abstract";
import Products from "./pages/Products";
import Collections from "./pages/Collections";
import Blogs from "./pages/Blogs";
import Bio from "./pages/Bio";
import GicleePrints from "./pages/GicleePrints";
import OriginalPainting from "./pages/OriginalPainting";
import OriginalArt from "./pages/OriginalArt";
import Services from "./pages/Home/Services";
import AddToCard from "./pages/AddToCard";
import ArtServices from "./pages/ArtServices";
import ArtConsultation from "./pages/ArtConsultation";
import WholsalePrints from "./pages/WholsalePrints";
import PrintCanvas from "./pages/Home/PrintCanvas";
import AddProducts from "./pages/AddProducts";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();

    const allImages = document.querySelectorAll('img');
    allImages.forEach((img) => {
      img.setAttribute('data-aos', 'fade-down');
      img.setAttribute('data-aos-anchor-placement', 'top-bottom');
      img.setAttribute('data-aos-duration', '500');
    });
  }, []);

 


  return (
    
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/artservices" element={<ArtServices />} />
          <Route path="/rentart" element={<RentingArt />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<Account />} />
          <Route path="/abstract" element={<Abstract />} />
          <Route path="/product" element={<Products />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/giclee" element={<GicleePrints />} />
          <Route path="/orignalpainting" element={<OriginalPainting />} />
          <Route path="/orignalart" element={<OriginalArt />} />
          <Route path="/services" element={<Services />} />
          <Route path="/artconsultation" element={<ArtConsultation />} />
          <Route path="/wholsaleprints" element={<WholsalePrints />} />
          <Route path="/printcanvas" element={<PrintCanvas />} />
          <Route path="/addtocart" element={<AddToCard />} />
          <Route path="/addprod" element={<AddProducts />} />

        </Route>
      </Routes>
    
  );
}

export default App;
