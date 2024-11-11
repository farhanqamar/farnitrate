import React from "react";
import discover from "../../images/discover.webp";
import { FiChevronRight } from "react-icons/fi";
import "../Miguel.css";


export const DiscoverFit = () => {
  return (
    <div className="lg:flex md:flex-row items-center justify-center ">
      <div className="lg:w-1/2">
        <img className="w-full" src={discover} alt="disimg" />
      </div>
      <div className="flex lg:w-1/2 text-justify text-yellow-400 px-10 md:pl-[100px] lg:pl-[150px]">
        <div className="xl:w-3/5 justify-center">
          <div>
            <h2 className="text-center text-3xl tracking-wide font-black">
              Discover The Perfect Fit For Your Vision
            </h2>
          </div>
          <div className="flex text-white">
            <div className="w-auto py-7">
              <p className="leading-8 list">
                Our customers often ask this very question. Can they get a
                customized canvas size? Absolutely! This is one of our prime
                services to ensure you receive the perfect-sized canvas for your
                space.
              </p>
              <p className="mt-4">So what are you waiting for?</p>
              <p className="mt-4">
                Be the first to know about new collections and exclusive offers.
              </p>
            </div>
          </div>
          <div className="relative">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter email address"
              autoComplete="email"
              className="text-[16px] bg-[#808080] m-auto border w-full border-white py-4 px-5 text-white placeholder:text-white placeholder:text-[18px] focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            />
      <FiChevronRight className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#808080] h-[50px] border-l border-l-white text-[#F6C934] text-[45px] px-2" />
           </div>
        </div>
      </div>
    </div>
  );
};
