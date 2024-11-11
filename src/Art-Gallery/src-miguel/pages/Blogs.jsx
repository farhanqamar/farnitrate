import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Miguel.css";
import Donkey2 from "../images/Donkey2.webp";
import blogside from "../images/blogside.webp";
const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 18;

  const totalPages = Math.ceil(dataArray.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;

  console.log("my Error", startIndex);

  const selectedItems = dataArray.slice(startIndex, startIndex + itemsPerPage);

  const handelCurrentPage = (nowPage) => {
    setCurrentPage(nowPage);
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };
  return (
    <>
      <section className="overflow-x-hidden">
        <div className="m-auto mb-10">
          <div className="px-7">
            <div>
              <p className="list text-[#F6C934] m-[2.4rem]">
                <Link className="list" to="/">
                  HomePage
                </Link>
                &nbsp;/&nbsp;News
              </p>
            </div>
            <div className="mt-5 border-b-2 border-gray-500 w-3/5 m-auto">
              <h1 className="text-3xl font-bold p-5">BLOGS</h1>
              {/* <hr /> */}
            </div>
          </div>
          {/* 1 */}
          <div className="grid md:grid-cols-3 gap-3 xl:w-[1184px] md:justify-evenly sm:px-7 m-auto mt-20 pt-8">
            {selectedItems.slice(0, 6).map((item, index) => (
                <BlogCard
                  key={index}
                  image={item.image}
                  heading={item.heading}
                  subHeading={item.suHeading}
                  author={item.author}
                />
            ))}
          </div>
          <div className="mt-20">
            {card2Data.slice(0, 1).map((item2, index) => (
              <LargCad1
                key={index}
                imageCard2={item2.image}
                heading2={item2.heading}
                subHeading2={item2.subHeading}
              />
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-3 xl:w-[1184px] md:justify-evenly sm:px-7 m-auto mt-20 pt-8">
            {selectedItems.slice(0, 6).map((item, index) => (
              <Link to="/addtocart">
                <BlogCard
                  key={index}
                  image={item.image}
                  heading={item.heading}
                  subHeading={item.suHeading}
                  author={item.author}
                />
              </Link>
            ))}
          </div>
          <div className="mt-20">
            {card2Data.slice(1, 2).map((item2, index) => (
              <LargCad2
                key={index}
                imageCard2={item2.image}
                heading2={item2.heading}
                subHeading2={item2.subHeading}
              />
            ))}
          </div>
          {/* 2 */}
          <div className="grid md:grid-cols-3 gap-3 xl:w-[1184px] md:justify-evenly sm:px-7 m-auto mt-20 pt-8">
            {selectedItems.slice(0, 6).map((item, index) => (
              <BlogCard
                key={index}
                image={item.image}
                heading={item.heading}
                subHeading={item.suHeading}
                author={item.author}
              />
            ))}
          </div>
          <div className="flex gap-8 justify-center items-center mt-12">
            {currentPage > 1 && (
              <button
                onClick={() => handelCurrentPage(currentPage - 1)}
                className="px-2 py[20px] border border-yellow-400 hover:border-yellow-700 text-5xl text-yellow-700 md:text-3xl sm:text-[20px]"
              >
                &#11207;
              </button>
            )}
            <p className="text-5xl sm:text-lg text-[#F6C934]">
              Page {currentPage} of {totalPages}
            </p>
            {currentPage < totalPages && (
              <button
                onClick={() => handelCurrentPage(currentPage + 1)}
                className="px-2 py[20px] border border-yellow-400 hover:border-yellow-700  text-[#f6c936] md:text-3xl sm:text-[16px]"
              >
                &#11208;
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
const BlogCard = ({ image, heading, subHeading, author }) => {
  return (
    <>
      <div className="md:w-auto px-5 text-white group cursor-pointer m-auto">
        <div
          className="overflow-hidden"
          data-aos="zoom-out"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <img
            src={image}
            alt="Card Image"
            className="text-center h-full w-full scale-100 sm:scale-110 group-hover:scale-125
             transition-transform duration-1000 ease-in-out"
          />
        </div>
        <div>
          <h2 className="font-serif font-semibold pt-8 sm:text-lg group-hover:underline">
            {heading}
          </h2>
          <p className="text-3xl sm:text-xl list my-4">{subHeading}</p>
          <p className="text-xl list sm:text-base">Posted by {author}</p>
        </div>
      </div>
    </>
  );
};
const LargCad1 = ({ imageCard2, heading2, subHeading2 }) => {
  return (
    <>
      <div className="text-white px-5 md:flex md:w-4/5 m-auto">
        <div
          className="overflow-hidden w-full md:w-1/2"
          data-aos="zoom-out"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <img
            src={imageCard2}
            alt="Card Image"
            className="group-hover:scale-110 transition-transform duration-1000 ease-in-out"
          />
        </div>
        <div className="p-1 sm:pl-12 sm:pb-14 flex flex-col justify-end border w-full md:w-1/2">
          <div className="sm:w-2/3">
            <h2 className="font-serif sm:font-semibold  sm:text-lg group-hover:underline">
              {heading2}
            </h2>
            <p className="text-2xl list sm:text-sm my-4">{subHeading2}</p>
            <div className="w-fit">
              <p className="text-2xl sm:text-base list text-[#F6C934]">
                Read More
              </p>
              <div className="flex justify-center items-center">
                <div className="w-full group-hover:w-2/4 h-[1px] sm:h-[0.5px] bg-[#F6C934] transition-all duration-700 ease-in-out"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const LargCad2 = ({ imageCard2, heading2, subHeading2 }) => {
  return (
    <>
      <div className=" text-white group m-auto cursor-pointer pb-9 md:flex md:w-4/5 p-5 w-full">
        <div
          className="overflow-hidden md:w-1/2"
          data-aos="zoom-out"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <img
            src={imageCard2}
            alt="Card Image"
            className="group-hover:scale-110 transition-transform duration-1000 ease-in-out"
          />
        </div>
        <div className="md:pl-12 p-5 pb-14 flex flex-col justify-end border md:w-1/2">
          <div className="sm:w-2/3">
            <h2 className="font-serif sm:font-semibold sm:text-lg group-hover:underline">
              {heading2}
            </h2>
            <p className="text-2xl list sm:text-sm my-4">{subHeading2}</p>
            <div className="w-fit">
              <p className="text-2xl sm:text-base list text-[#F6C934]">
                Read More
              </p>
              <div className="flex justify-center items-center">
                <div className="w-full group-hover:w-2/4 h-[1px] sm:h-[0.5px] bg-[#F6C934] transition-all duration-700 ease-in-out"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;

const dataArray = [
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },

  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },

  
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },

  
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },

  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
  {
    image: Donkey2,
    heading: "How To Find An Artist To Commission",
    suHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
    author: "Steve taylor",
  },
];

const card2Data = [
  {
    image: blogside,
    heading: "How To Find An Artist To Commission",
    subHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
  },
  {
    image: blogside,
    heading: "How To Find An Artist To Commission",
    subHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
  },

  
  {
    image: blogside,
    heading: "How To Find An Artist To Commission",
    subHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
  },
  {
    image: blogside,
    heading: "How To Find An Artist To Commission",
    subHeading:
      "Various types of paint are available on the market for painting artwork. While gouache is a relatively new produ...",
  },
];
