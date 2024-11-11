import React from "react";
import abs1 from "../images/abstract/abs1.webp";
import abs2 from "../images/abstract/Abs2.webp";
import abs3 from "../images/abstract/abs3.webp";
import abs4 from "../images/abstract/abs4.webp";
import abs5 from "../images/abstract/abs5.webp";
import abs6 from "../images/abstract/abs6.webp";
import abs7 from "../images/abstract/abs7.webp";
import abs8 from "../images/abstract/abs8.webp";

const AddProducts = () => {
  const abstract = [
    {
      src: abs1,
      caption: "[AB#001] Dangerous Abstract ",
      price: "From $195",
    },
    {
      src: abs2,
      caption: "[AB#002] Inventive Abstract painting",
      price: "From $195",
    },
    {
      src: abs3,
      caption: "[AB#003] Colorful Abstract painting",
      price: "From $195",
    },
    { src: abs4, caption: "[AB#004] Abstract painting", price: "From $195" },
    {
      src: abs5,
      caption: "[AB#005] Gorgeous Abstract painting",
      price: "From $195",
    },
    { src: abs6, caption: "[AB#006] Abstract painting 07", price: "From $195" },
    { src: abs7, caption: "[AB#007] Abstract painting 06", price: "From $195" },
    { src: abs8, caption: "[AB#008] Abstract painting 08", price: "From $165" },
  ];
  return (
    <div>
      <div className="flex justify-around pt-[32px]">
        <span>Filter and Sort</span>
        <span>Showing 8 results</span>
      </div>
      <div className="w-3/5 m-auto">
        <h1 className="text-[31px] text-left font-extrabold pl-[50px] pb-[10px]">
      Products
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center px-10 2xl:w-[1600px] gap-8 md:px-4 sm:px-7 m-auto mt-20 pt-8 ">
        {abstract.map((item, index) => (
          <div key={index} className="md:w-[302px] ">
            <img
              src={item.src}
              alt={item.caption}
              className="md:w-[302px] w-full md:h-[408px]"
            />
            <p className="text-[18px] text-[#F6C934] list max-w-54 max-h-32 text-left pt-[15px]">
              {item.caption}
            </p>
            <p className="text-[18px] text-[#F6C934] list text-left">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddProducts;
