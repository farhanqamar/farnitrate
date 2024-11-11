import React, { useState } from "react";
import abs1 from "../images/abstract/abs1.webp";
import abs2 from "../images/abstract/Abs2.webp";
import abs3 from "../images/abstract/abs3.webp";
import abs4 from "../images/abstract/abs4.webp";
import abs5 from "../images/abstract/abs5.webp";
import abs6 from "../images/abstract/abs6.webp";
import abs7 from "../images/abstract/abs7.webp";
import abs8 from "../images/abstract/abs8.webp";

import "./Miguel.css";
import { IoIosArrowDown } from "react-icons/io";


const Abstract = () => {
  const [first, setFirst] = useState(false);
  const [secondFaq, setSecondFaq] = useState(false); 

  const abstract = [
    { src: abs1, caption: "[AB#001] Dangerous Abstract ", price: "From $195" },
    { src: abs2, caption: "[AB#002] Inventive Abstract painting", price: "From $195" },
    { src: abs3, caption: "[AB#003] Colorful Abstract painting", price: "From $195" },
    { src: abs4, caption: "[AB#004] Abstract painting", price: "From $195" },
    { src: abs5, caption: "[AB#005] Gorgeous Abstract painting", price: "From $195" },
    { src: abs6, caption: "[AB#006] Abstract painting 07", price: "From $195" },
    { src: abs7, caption: "[AB#007] Abstract painting 06", price: "From $195" },
    { src: abs8, caption: "[AB#008] Abstract painting 08", price: "From $165" },
  ];

  return (
    <>
      <div className="flex justify-around pt-[32px]">
        <span>Filter and Sort</span>
        <span>Showing 8 results</span>
      </div>
      <div>
        <h1 className="text-[31px] font-extrabold pl-[50px] pb-[10px]">
          Abstract Art For Sale In Arizona
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center px-10 2xl:w-[1600px] gap-8 md:px-4 sm:px-7 m-auto mt-20 pt-8">
        {abstract.map((item, index) => (
          <div key={index} className="md:w-[302px]">
            <img
              src={item.src}
              alt={item.caption}
              className="md:w-[302px] w-full md:h-[408px]"
            />
            <p className="text-[18px] text-[#F6C934] max-w-54 max-h-32 list text-left pt-[15px]">
              {item.caption}
            </p>
            <p className="text-[18px] text-[#F6C934] list text-left">
              {item.price}
            </p>
          </div>
        ))}
      </div>
      <section>
        <div className="text-[#F6C936] lg:w-2/5 lg:m-auto space-y-10 py-12 px-6 lg:px-0">
          <div>
            <h1 className="text-[22px] lg:text-3xl font-bold">
              Frequently Asked Questions
            </h1>
          </div>
          <div className="border-b-2 py-4">
            <h1
              onClick={() => setFirst(!first)}
              className="flex list items-center justify-between text-base sm:text-2xl font-bold"
            >
              What is the purpose of abstract art? <IoIosArrowDown />
            </h1>
            {first && (
              <div className="py-4">
                <p className="text-white list">
                  Abstract art does not seek to convey an accurate depiction of
                  a visual reality but achieves its effect via the use of shapes,
                  colors, forms, and gestural marks.
                </p>
              </div>
            )}
          </div>

          <div className="border-b-2 py-4">
            <h1
              onClick={() => setSecondFaq(!secondFaq)}
              className="flex list items-center justify-between text-base sm:text-2xl font-bold"
            >
              What is abstract in painting? <IoIosArrowDown />
            </h1>
            {secondFaq && (
              <div className="py-4">
                <p className="text-white list">
                  Abstract art does not seek to convey an accurate depiction of
                  a visual reality but achieves its effect via the use of shapes,
                  colors, forms, and gestural marks.
                </p>
              </div>
            )}
          </div>

        </div>
      </section>
    </>
  );
};

export default Abstract;
