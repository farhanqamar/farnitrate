import React, { useState } from "react";
import art from "../images/rentart.webp";
import panda from "../images/panda.webp";
import flower from "../images/flowerwall.webp";
import wallpaint from "../images/wallpaintig.webp";

import "./Miguel.css"
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const RentingArt = () => {
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <h2 className="text-center pt-10 font-extrabold text-[24px] lg:text-[38px]">
        Renting Art For Staging In Arizona
      </h2>
      <section className="space-y-16">
        <div className="flex flex-col lg:flex-row w-full  pt-[128px] pb-[50px] px-5">
          <div className="w-full lg:w-1/2">
            <img className="w-[951.5px] md:h-[866.25px]" src={art} alt="art" />
          </div>

          <div className="flex items-center lg:pl-30 text-white sm:px-10 w-full lg:w-1/2">
           <div className="py-8">
           <h1 className="md:text-3xl font-bold text-xl ">Renting Artwork For Real Estate And Home Staging</h1>
            <p className="mt-4 text-justify list text-[20px] leading-[2rem]">
              Looking for the ideal accent pieces to enhance the appeal of your
              home or office building? Miguel Camarena offers to rent art for
              staging, including original paintings and canvas prints. We offer
              standard and custom sizes for giclee prints on canvas if you want
              to fill a specific spot.
              <br /> <br />
              Book Your Art! Call Us At (480) 595-2671 or visit us at our art
              gallery in Cave Creek, Arizona.
            </p>
           </div>
          </div>
        </div>
      </section>



      <section>
        <div>
          <div>
            <div>
              <div className="mx-auto px-5 sm:px-16 lg:w-[800px]">
                <h2 className="text-[39px] py-4 font-bold">What Is Art Staging?</h2>
                <p className="leading-7 list text-white">
                  Art staging for real estate strategically places carefully
                  selected artworks in a property listed for sale. It improves
                  aesthetic appeal, evokes an emotional response, establishes a
                  distinct ambiance, and makes the home stand out, allowing
                  potential buyers to imagine themselves living there. This
                  strategy gives the property individuality, professionalism,
                  and distinctiveness, which might lead to a faster sale at a
                  better price.
                </p>
                <div>
                  <h2 className="text-[39px] py-4 font-bold">
                    Types Of Fine Art Staging For Rent
                  </h2>
                  <p className="leading-7 pb-[96px] text-white list">
                    You can find tons of categories regarding diversity in our
                    artwork. Miguel Camarena has painted all his life, capturing
                    the essence of the Southwest's nature, culture, and history.
                    Our rented artwork has helped many real estate professionals
                    to showcase the property's aesthetics to their potential
                    buyers.
                    <br />
                    <br /> We lease original art for commercial display at
                    staging events for real estate purposes. You can connect
                    with our team to discuss your requirements for the perfect
                    artwork.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section>
        <div className="flex justify-between flex-col lg:flex-row">
          <div className="lg:w-1/2 p-4">
            <img className="w-full" src={panda}></img>

          </div>
          <div className="hidden lg:flex text-white items-center pl-20 lg:w-1/2">

          <d  iv className="p-4">
            <h1 className="md:text-3xl font-bold text-xl">Exhibit Rental Art To Sell Your Property In Arizona</h1>
            <p className="list py-4">
              First impressions are everything! The longer a home is on the
              market, the less money the seller is expected to get. So what's
              the solution?
              <br />
            </p>
            <p className="py-4 list">
              Property staging can be an important marketing tool that helps
              potential buyers connect with your property, resulting in faster
              sales at a high price.
            </p>
            <br />
            <button className="custom-underline btn font-bold text-[22px] tracking-wider">
              Art for Staging Homes. Explore Now!
            </button>
          </d>
          </div>
        </div>
      </section>



      <section>
        <div className="py-12 p-4">
          <div className="lg:w-[700px] text-white mx-auto">
          <h2 className="text-[39px] py-4 font-bold">
          What Kind Of Art To Display In Home Staging?
            </h2>
            <p className="list">
              The staging art you display in the house should complement the
              place's theme and style. For a better overall impact, match the
              colors of the walls with the staging wall art you bring to hang.
              If unsure, abstract flowers and landscapes look great in any home.
              Otherwise, you can always consult with us.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col lg:flex-row gap-10  justify-center px-[56px] ">
        <div > <img src={flower} alt="flower" /></div> 
        <div>  <img src={wallpaint} alt="wallpaint" /></div>
        </div>
      </section>
      <section>
        <div className="text-center mx-auto lg:w-[800px] px-[10px]">
        <h2 className="text-[39px] py-8 font-bold">
        Rent Exclusive Paintings By Miguel Camarena
          </h2>
          <p className="my-[18px] list text-white">
            Camarena If you want your real estate property to get noticed, get
            high-end art for real estate staging by Miguel Camarena Art Gallery.
            Renting art for staging would be an amazing opportunity for you and
            your real estate property to get a beautiful enhancement.
          </p>
          <button className="custom-underline font-bold pt-[20px] text-[20px] tracking-wider">
            Get A Quote Now!
          </button>
        </div>
      </section>
      <div
        className="pb-4"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="500"
      >
        <div className="lg:w-[800px] py-10 m-auto px-10">
          <h3 className="lg:text-[24px] font-extrabold text-base text-[20px] lg:extrabold py-10">
            Frequently Asked Questions
          </h3>

          <Accordion
            open={open === 1}
            icon={<Icon id={1} open={open} />}
            className="w-fit"
          >
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="lg:text-3xl list font-bold py-8 text-[#f6c936] text-xl"
            >
              Where to buy staging art for real estate?
            </AccordionHeader>
            <AccordionBody className="font-serif text-base my-6 text-[#ffffff]">
              You can visit Miguel Camarena Art Gallery in Cave Creek, Arizona,
              or check our official website to book decorative arts for real
              estate staging on rent. We have a wide variety of artwork for you
              to choose from.
            </AccordionBody>

          
          </Accordion>

          <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="lg:text-3xl list font-bold py-8 text-[#f6c936] text-xl"
            >
              What is the cost of renting art for staging?
            </AccordionHeader>

            <AccordionBody className="font-serif my-6 text-base text-[#ffffff]">
              Fees for renting are 10% of the total cost of the piece per month
              for giclee prints on canvas and 5% per month for original
              paintings.{" "}
            </AccordionBody>
            
          </Accordion>

          <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className="lg:text-3xl list font-bold py-8 text-[#f6c936] text-xl"
            >
              Can you make custom sizes for elite staging and artwork rentals?{" "}
            </AccordionHeader>

            <AccordionBody className="font-serif my-6 text-base text-[#ffffff]">
              Absolutely! Along with our free consultancy, we also offer
              customized canvas sizes for specific spots so that your real
              estate property looks its best.{" "}
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default RentingArt;
