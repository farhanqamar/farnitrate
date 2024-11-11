import { useState } from "react";
import Donkey from "../images/Donkey1.webp";
import { Link } from "react-router-dom";
import "../pages/Miguel.css";


const OriginalArtWork = () => {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(imgArray.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;

  console.log("my Error", startIndex);

  const selectedItems = imgArray.slice(startIndex, startIndex + itemsPerPage);

  const handelCurrentPage = (nowPage) => {
    setCurrentPage(nowPage);
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  return (
    <section>
      <div className=" mx-auto">
        <div className="flex justify-center flex-wrap gap-8">
          {imgArray.map((item, index) => (
            <Link to="/product" key={index}>
              <div className="p-2">
                <div className="w-full md:w-[300px]">
                  <img src={item.image} alt="Img" />
                </div>
                <h1 className="btn text-2xl pt-3 font-crimson">{item.h1}</h1>
                <p className="text-[22px] list text-gray-400">{item.p}</p>
              </div>
            </Link>
          ))}
        </div>
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
            className="px-2 py[20px] border border-yellow-400 hover:border-yellow-700 text-5xl text-yellow-700 md:text-3xl sm:text-[20px]"
          >
            &#11208;
          </button>
        )}
      </div>
    </section>
  );
};

const imgArray = [
  { image: Donkey, h1: "Arizona Horses", p: "sold out" },
  { image: Donkey, h1: "Arizona Horses", p: "sold out" },
  { image: Donkey, h1: "Arizona Horses", p: 195 },
  { image: Donkey, h1: "Arizona Horses", p: "sold out" },

  // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
  // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
  // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
  // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
  // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
  // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
  // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
  // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
  // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
  // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
  // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
  // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
  // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
  // { image: "/Acrylic.webp", h1: "Arizona Horses", p: 195 },
  // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
  // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
  // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
  // { image: "/Acrylic.webp", h1: "Arizona Horses", p: 195 },
  // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
  // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
  // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
  // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
  // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
  // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
  // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
  // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
  // { image: "/Acrylic.webp", h1: "Arizona Horses", p: 195 },
  // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
  // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
  // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
  // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
  // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
  // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
  // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
  // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
  // { image: "/Acrylic.webp", h1: "Arizona Horses", p: "sold out" },
];

export default OriginalArtWork;
