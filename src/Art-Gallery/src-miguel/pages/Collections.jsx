import React, { useState } from "react";
import AccordionCom from "../components/AccordionCom";
import { Link } from "react-router-dom";
import "./Miguel.css"
import Donkeys from "../images/Tres-Donkeys.webp"
const Collections = () => {
  const dataArray = [
    { image: Donkeys, heading: "Heading 1", subline: "Subline 1" },
    { image: Donkeys, heading: "Heading 2", subline: "Subline 2" },
    { image: Donkeys, heading: "Heading 3", subline: "Subline 3" },
    { image: Donkeys, heading: "Heading 4", subline: "Subline 4" },
    { image: Donkeys, heading: "Heading 5", subline: "Subline 5" },
    { image: Donkeys, heading: "Heading 6", subline: "Subline 6" },
    { image: Donkeys, heading: "Heading 7", subline: "Subline 7" },
    { image: Donkeys, heading: "Heading 8", subline: "Subline 8" },
    { image: Donkeys, heading: "Heading 9", subline: "Subline 9" },
    {
      image: Donkeys,
      heading: "Heading 10",
      subline: "Subline 10",
    },
    {
      image: Donkeys,
      heading: "Heading 11",
      subline: "Subline 11",
    },
    {
      image: Donkeys,
      heading: "Heading 12",
      subline: "Subline 12",
    },
    {
      image: Donkeys,
      heading: "Heading 13",
      subline: "Subline 13",
    },
    {
      image: Donkeys,
      heading: "Heading 14",
      subline: "Subline 14",
    },
    {
      image: Donkeys,
      heading: "Heading 15",
      subline: "Subline 15",
    },
    {
      image: Donkeys,
      heading: "Heading 16",
      subline: "Subline 16",
    },
    {
      image: Donkeys,
      heading: "Heading 17",
      subline: "Subline 17",
    },
    {
      image: Donkeys,
      heading: "Heading 18",
      subline: "Subline 18",
    },
    {
      image: Donkeys,
      heading: "Heading 19",
      subline: "Subline 19",
    },
    {
      image: Donkeys,
      heading: "Heading 20",
      subline: "Subline 20",
    },
    {
      image: Donkeys,
      heading: "Heading 21",
      subline: "Subline 21",
    },
    {
      image: Donkeys,
      heading: "Heading 22",
      subline: "Subline 22",
    },
    {
      image: Donkeys,
      heading: "Heading 23",
      subline: "Subline 23",
    },
    {
      image: Donkeys,
      heading: "Heading 24",
      subline: "Subline 24",
    },
    {
      image: Donkeys,
      heading: "Heading 25",
      subline: "Subline 25",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const totalPages = Math.ceil(dataArray.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  console.log("value", startIndex);

  const selectedItems = dataArray.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <section className="bg-black text-white w-full">
        <div className="2xl:w-[1440px] 2xl:m-auto px-4">
          <div className="my-10">
            <h1 className="text-center text-[40px] pt-10 font-black">
              Captivating Fine Art Giclee Prints on Canvas Paintings
            </h1>
          </div>
          <p className="text-white font-normal list text-[22px] p-10">
            <a className="text-[#ffff]" href="/">
              Homepage
            </a>
            / Collections
          </p>

          <div>
            <div className="mt-10 pt-10  flex flex-wrap justify-center gap-4 lg:gap-6">
              {selectedItems.map((item, index) => (
                <Link to="/abstract">
                  <ImageCard
                    key={index}
                    image={item.image}
                    name={item.heading}
                    shop={item.subline}
                  />
                </Link>
              ))}
            </div>

            <div className="flex gap-8 justify-center items-center mt-8">
              {currentPage > 1 && (
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  className="px-2 border border-yellow-400 hover:border-yellow-700 text-yellow-700 text-[30px]"
                >
                  &#11207;
                </button>
              )}
              <p className="text-lg text-[#F6C934]">
                Page {currentPage} of {totalPages}
              </p>
              {currentPage < totalPages && (
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className="px-2 border border-yellow-400 hover:border-yellow-700 text-yellow-700 text-[30px]"
                >
                  &#11208;
                </button>
              )}
            </div>
          </div>

          <div className="w-full sm:w-2/3 m-auto">

            <div className="">
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="500"
              >
                <h1 className="lg:text-5xl text-2xl  font-bold  pt-10">
                  Captivating Fine Art Giclee Prints on Canvas Paintings
                </h1>
                <p className="font-serif p2 my-6">
                  If our paintings have brought you here, then there must be
                  something that is keeping you hooked and thrilled to explore
                  more!
                </p>
                <p className="font-serif p2">
                  Let us take you through this entire collection of giclee
                  prints on canvas, where you get to experience the magic
                  happening in real life!{" "}
                </p>
                <p className="font-serif p2 my-6">
                  Imagine yourself in an art heaven where creativity knows no
                  boundaries. You’re stunned and fascinated by these vibrant
                  paintings on canvas. You can almost feel as if the painting
                  speaks to your mind and heart.{" "}
                </p>
                <p className="font-serif p2 my-6">
                  Now, what if we told you that all these masterpieces are
                  reproduced to such a fine quality that you won’t be able to
                  distinguish between the original and the print? That’s the
                  magic of giclee prints!
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="500"
              >
                <h1 className="text-3xl font-black  pt-10">
                  What is Giclee Printing, And What Are Giclee Prints?
                </h1>
                <p className="font-serif p2 my-6">
                  Just like many others, you might also not be completely
                  familiar with the term “giclee printing” on paintings, and
                  that’s okay! When put simply, it is a fusion of art and
                  technology.{" "}
                </p>
                <p className="font-serif p2">
                  ‘Giclee’, a French word meaning “to spray” or “to squirt,”
                  refers to the process of applying ink/paint on the canvas or
                  paper during the printing process. This is a state-of-the-art
                  printing technique that is implemented to produce the highest
                  quality artwork. We have latex printers designed specifically
                  for the purpose of fine art giclee prints. We hope to have
                  explained the giclee definition in detail.{" "}
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="500"
              >
                <h1 className="text-3xl font-black  pt-10">
                  What Is Giclee On Canvas
                </h1>
                <p className="font-serif p2 my-6">
                  It basically refers to the printing process of giclee on
                  canvas instead of traditional printing paper or any other
                  material. Canvas is the most commonly used base when it comes
                  to smooth giclee prints to maintain pristine quality and
                  reproduce the original design.
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="500"
              >
                <h1 className="lg:text-5xl text-2xl font-bold  pt-10">
                  How Are Giclees Made?
                </h1>
                <p className="font-serif p2 my-6">
                  Before we persuade you into owning a giclee print on canvas,
                  let us take you through the process of how these giclee art
                  prints comes to life!
                </p>
                <p className="font-serif p2">
                  This process entails high-resolution latex printers and
                  archival-grade materials. A simple overview of how exactly
                  giclees are produced:{" "}
                </p>
                <ul className="pl-4 mt-6">
                  <li className="list-disc mt-6">
                    <span className="font-bold p2">Image Capture:</span> We
                    start by capturing the original artwork with a series of
                    high megapixel pictures from a top-of-the-line
                    high-definition camera. This helps us capture the accurate
                    results of an original image.
                  </li>
                  <li className="list-disc mt-6">
                    <span className="font-bold p2">Color Calibration:</span>{" "}
                    This refers to the calibration of colors from an original
                    image, ensuring fidelity and precision. When needed, we make
                    fine adjustments and corrections.{" "}
                  </li>
                  <li className="list-disc mt-6">
                    <span className="font-bold p2">Printing:</span> Now, latex
                    printers, particularly designed for fine art giclee
                    reproduction, are at work! These printers commonly use 8 -
                    12 ink colors to achieve an accurate color palette from the
                    original design.
                  </li>
                  <li className="list-disc mt-6">
                    <span className="font-bold p2">Substrate Selection:</span>{" "}
                    We use archival-grade material for the longevity of the
                    giclee canvas prints.
                  </li>
                  <li className="list-disc mt-6">
                    <span className="font-bold p2">Quality Control:</span> After
                    the giclee painting has undergone the whole process, we make
                    sure to carefully inspect the quality of the print. It
                    should be a replica of the original artwork.
                  </li>
                </ul>
              </div>

              <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="500"
              >
                <h1 className="lg:text-5xl text-2xl font-bold  pt-10">
                  Unleash The Magic of Vibrant Colors and Exciting Designs
                </h1>
                <p className="font-serif my-6">
                  We’re still in awe of what giclee printing is capable of! It
                  can literally do wonders in the artistic community,
                  replicating every single brushstroke and intricate detail.{" "}
                </p>
                <p className="font-serif">
                  Explore our “Prints On Canvas” page, which displays tons of
                  design catalogs. Each design expresses imagination,
                  inspiration, and observation.{" "}
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="500"
              >
                <h1 className="lg:text-5xl text-2xl font-bold  pt-10">
                  Art Comes to Life!
                </h1>
                <p className="font-serif my-6">
                  Welcome to a whole new world where technology brings art to
                  life before your very eyes.
                </p>
                <p className="font-serif">
                  At Miguel Camarena Art Gallery, we love to play with colors,
                  designs, and styles. Our gallery is a hub for precisely
                  capturing the essence of an original art piece and presenting
                  it in a new avatar.{" "}
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="500"
              >
                <h1 className="lg:text-5xl text-2xl font-bold  pt-10">
                  There’s no science involved. It’s really simple!{" "}
                </h1>
                <p className="font-serif my-6">
                  How Can I Carefully Preserve A Giclee Print?{" "}
                </p>
                <p className="font-serif">
                  These giclee prints are of the best quality and professionally
                  sealed to be able to withstand many elements. However, to
                  ensure the longevity of giclee canvas prints try to avoid
                  direct sun exposure over a long period of time to ensure they
                  don’t fade.{" "}
                </p>
                <p className="font-serif my-6">
                  Regular dusting and soft handling will keep your paintings in
                  pristine condition.
                </p>
              </div>
              {/* 8 */}
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="500"
              >
                <h3 className="md:text-2xl font-extrabold text-xl text-start pt-10">
                  It’s Never Too Late to Own A Masterpiece!
                </h3>
                <p className="font-serif my-6">
                  From vivid landscapes to striking portraits, every giclee
                  painting will bring light to your personal space, allowing you
                  to embrace the beauty of art. We, at Miguel Camarena Art
                  Gallery, strive to meet your expectations and help you find
                  the best artwork for your collection!{" "}
                </p>
              </div>
            </div>

            <div
              className="pb-4"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="500"
            >
              <AccordionCom
                mainHeading={`Frequently Asked Questions`}
                h1={`Is it possible to accurately reproduce an original artwork?`}
                sh1={`With advanced technology and superior quality printers, we can evidently reproduce original artwork with intricate details and meticulous color shades. It’s really, really hard to tell the difference!`}
                h2={`Are giclee prints subject to limited sizes?`}
                sh2={`Giclee prints can be printed on different sizes of canvases according to your requirements, ranging from small, medium, and large giclee prints on canvas. `}
                h3={`What is the value of canvas giclee printing in the market?`}
                sh3={`Canvas giclee prints are gaining massive popularity around the world. It’s definitely an affordable option to acquire your favorite designs and upgrade the interior of your place.`}
                h4={`Can you customize or personalize my giclee print?`}
                sh4={`Absolutely! Just let us know your requirements about color adjustments, desired size, etc.`}
              />
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

const ImageCard = ({ image, name, shop }) => {
  return (
    <div
      className="relative group h-[80%] w-full md:h-[200px] md:w-[350px] lg:h-[260px] lg:w-[480px] xl:h-[300px] xl:w-[600px] 2xl:h-[350px] 2xl:w-[644px] overflow-hidden cursor-pointer"
      data-aos="zoom-out"
      data-aos-easing="linear"
      data-aos-duration="500"
    >
      <img
        src={image}
        alt="Item Image"
        className="z-10 w-full h-full scale-110 group-hover:scale-150 transition-all duration-1000 ease-in-out opacity-75"
      />
      <div className="absolute bottom-8 left-8 z-30">
        <h2 className="text-lg text-white">{name}</h2>
        <div className="w-fit mt-4">
          <p className="mb-1 text-xl">{shop}</p>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Collections;
