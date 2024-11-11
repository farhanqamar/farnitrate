import React from "react";
import sideimg from "../../images/miguel.webp";
import Mcrop from "../../images/miguelcopy.jpg";

const MiguelJourney = () => {
  return (
    <div className="lg:px-[56px] lg:flex flex-col lg:flex-row mt-16 lg:mt-40 overflow-hidden">
      <img
        className="lg:w-1/2 object-cover border-thin border-spacing-0"
        src={Mcrop}
        alt="Miguel Journey"
      />

      <div className="lg:px-[48px] flex items-center justify-center">
        <div className="flex flex-col leading-14 w-full xl:w-1/2 px-5 lg:px-0">
          <h2 className="text-center md:text-[36px] leading-10 text-yellow-400 font-extrabold">
            Miguel Journey Through Art
          </h2>
          <div className="text-center  leading-7 space-y-6">
            <p className="text-[#ffffff] list my-[18px]">
              Ah, the man of the hour! Miguel Camarena is a visionary artist and
              expert in all styles of art from contemporary, impressionistic to
              abstract. His artistic soul and wild passion for creativity makes
              Miguel one of the top artists in Arizona and the world.
            </p>
            <p className="text-[#ffffff] list my-[18px]">
              His brushstrokes tame nature and wildlife. He has always been
              inspired by nature and wanted to express his vision so it could
              reach the whole world.
            </p>
            <p className="text-[#ffffff] list my-[18px]">
              Miguel Camarena invites you to immerse yourself in a universe
              where fantasy and reality mix perfectly, leaving an unforgettable
              mark on the canvas of your spirit with each stroke.
            </p>
            <button className="btn text-[18px] pb-[5px] pt-[40px] md:text-[22px] text-yellow-400 underline custom-underline mt-6"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiguelJourney;
