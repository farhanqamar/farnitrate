import React from "react";
import "./Miguel.css"
const ArtServices = () => {
  return (
    <>
      <p className="text-white font-normal btn text-[22px] p-10">
        <a className="btn text-[#ffff]" href="/">
          Homepage
        </a>
        /Art Services in Arizona
      </p>

      <div className="flex justify-center">
        <div className="w-full md:w-3/4 lg:w-[40%] px-5 text-white">
          <div className="py-[30px]">
            <h1 className="font-black my-10 text-4xl">Our Services</h1>
            <h2 className="tracking-wider leading-10 font-extrabold my-10 text-3xl">
              Original Artwork From World-Renowned Artist Miguel Camarena
            </h2>
            <ul className="list-disc ml-5 text-[20px]">
              <li className="list">
                Original paintings ranging from abstract, contemporary,
                southwest, impressionistic, modern, and more.
              </li>
              <li className="list">
                Custom paintings and commission work are available upon request.
                
                </li>
                <li className="list">
                Please &nbsp;
                <a href="/contact" className="underline text-white text-[18px]">
                  contact us &nbsp;
                </a>{" "}
                for more information.
              </li>
            </ul>
            <button className="btn text-yellow-400 text-[18px] underline mt-4">
              Learn More
            </button>
          </div>
          <div className="pb-[30px]">
            <h2 className="tracking-wider text-3xl py-12 font-extrabold">Exclusive High-Quality Giclee Prints On Canvas.</h2>
            <li className="list">Fine art reproduced to the highest standard, printed in-house on the highest quality canvas with the latest technology for long-lasting, pristine pieces of art.</li>
            <li className="list">Custom sizes are available upon request.</li>
            <li className="list">Hand-embellished options are available for any giclee print.
            </li>
            <button className="text-yellow-400 btn text-[18px] underline mt-4">
              Learn More
            </button>
          </div>
          <div className="pb-[30px]">
            <h2 className="tracking-wider text-3xl py-12 font-extrabold">
              In-Home And Office Art Consultations In Arizona
            </h2>
            <ul className="list-disc ml-5">
              <li className="list">
                We will visit your location to assist with your selection of
                artwork.
              </li>
              <li className="list">Specific sizes and dimensions can be recommended.</li>
            </ul>
            <button className="text-yellow-400 btn text-[18px] underline mt-4">
              Learn More
            </button>
          </div>
          <div className="pb-[30px]">
            <h2 className="tracking-wider text-3xl py-12 font-extrabold">Wholesale Distribution In Arizona</h2>
            <p className="mt-2 list">
              Miguel Camarena Art Gallery is an industry leader in wholesale
              distribution in Arizona and around the world, providing artwork to
              hotels, galleries, designers, and art consultants. We are set up
              for large-scale and short lead times to serve all your art needs.
            </p>
            <button className="text-yellow-400 btn underline text-[18px] mt-4">
              Learn More
            </button>
          </div>
          <div className="pb-[30px]">
            <h2 className="tracking-wider text-3xl py-12 font-extrabold">
              Renting Artwork For Real Estate And Home Staging
            </h2>
            <p className="mt-2 list">
              You need the perfect accent pieces to help sell your home or
              office building. Miguel Camarena offers art for rent for both
              originals as well as giclee prints on canvas.
            </p>
            <ul className="list-disc ml-5">
            <li className="list">
            Fees for renting are 10% of the total cost of the piece per
                month for giclee prints on canvas and 5% per month for original
                paintings.
              </li>
              <li className="list">
                On giclee prints on canvas, we offer standard sizes as well as
                custom sizes if you're looking to fill a specific spot.
              </li>
            </ul>
            <p className="list">Contact us if you have any questions.</p>
            <button className="text-yellow-400 text-[18px] btn underline mt-4">
              Learn More
            </button>
          </div>

          <div className="pb-[30px]">
            <p className="text-#f6c934  list bold mt-6">
              Miguel Camarena Art Gallery
            </p>
            <p className="list">Open Monday through Sunday, 10:00 a.m. to 6:00 p.m.</p>
            <p className="list">6220 E Cave Creek rd., Cave Creek, Arizona 85331</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtServices;
