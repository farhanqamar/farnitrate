import React from "react";
import Test from "./Test";
import SideImage from "./SideImage";
import Donkey1 from "../../images/Donkey1.webp";
import Donkey2 from "../../images/Donkey2.webp";
import Donkey3 from "../../images/Donkey3.webp";
import Donkey4 from "../../images/Donkey4.webp";
import Donkey5 from "../../images/Donkey5.webp";
import Donkey6 from "../../images/Donkey6.webp";
import Donkey7 from "../../images/Donkey7.webp";
import Donkey8 from "../../images/Donkey8.webp";
import Donkey9 from "../../images/Donkey9.webp";
import Donkey10 from "../../images/Donkey10.webp";

export const imageItems = [
  {
    src: Donkey1,
    caption: "[DO#001] Baja Donkey From $ 95",
  },
  {
    src: Donkey2,
    caption: "[DO#002] Blue Donkey Door From $ 95",
  },
  {
    src: Donkey3,
    caption: "[DO#003] Red Donkey Door From $ 95",
  },
  {
    src: Donkey4,
    caption: "[DO#004] Down Pour Donkey Door From $ 95",
  },
  {
    src: Donkey5,
    caption: "[DO#005] Turquoise Donkey Door From $ 95",
  },
  {
    src: Donkey6,
    caption: "[DO#006] Three Donkeys From $ 95",
  },
  {
    src: Donkey7,
    caption: "[DO#007] Tres Donkeys From $95",
  },
  {
    src: Donkey8,
    caption: "[DO#008] Three Curios Donkeys From $95",
  },
  {
    src: Donkey9,
    caption: "[DO#009] Colorful Crazy 5 Donkeys From $285", // Fixed missing quote
  },
  {
    src: Donkey10,
    caption: "[DO#010] Sepia Crazy 5 Donkeys From $285",
  },
];

const Imagepath = () => {
  return (
    <>
      <div>
        
        <div className="flex flex-col justify-around">
         <div className="md:pl-[95px] px-5">
         <h2 className="text-3xl font-black">Exclusive Donkey Collection</h2>
          <p className="tracking-wider mb-[8px] list text-white">
            No wonder this is our best-selling painting collection in Arizona.
            It has also captivated the hearts of many art lovers worldwide. What
            makes these our hot-selling items? Perhaps these creatures have
            something magical in themselves that makes people connect with them
            instantly and want to take them home!
          </p>
          <button className="custom-button" onClick={() => window.location.href = '#'}>View Full Collection</button>
         </div>
          {/* Test component */}
          <div className="mt-[5px]">
          <Test />
          </div>
        </div>
      </div>
    </>
  );
};

export default Imagepath;
