import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import OriginalArtWork from "../components/OriginalArtWork";
import "./Miguel.css"
const filterAndSort = [
  { name: "Filter & Sort" },
  {
    name: "Availability",
    icon: <IoIosArrowForward />,
    subItems: [{ name: "InStock" }, { name: "OutStock" }],
  },
  { name: "Price", icon: <IoIosArrowForward /> },
];

const OriginalPainting = () => {
  const [filterSort, setFilterSort] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);


  return (
    <section className="space-y-6">
      <div className="text-[#f6c936] py-10 space-y-6">
        <div className="flex justify-around m-auto">
          <p
            onClick={() => setFilterSort(!filterSort)}
            className="cursor-pointer text-[#f6c936]"
          >
            Filter & Sort
          </p>
           <p  className="cursor-pointer text-[#f6c936]">Showing 49 results</p>
        </div>
        <div className="w-[80%] m-auto">
          <h1 className="text-3xl font-extrabold">Original Artwork Gallery Collection  </h1>
        </div>
      </div>

      {filterSort && (
        <div className="w-1/4 text-[#f6c936] p-6 shadow-lg h-[100vh] absolute top-0 right-0 bg-black">
          <MdClose
            onClick={() => setFilterSort(!filterSort)}
            className="text-xl absolute top-12 right-4"
          />
          <ul className="text-[#f6c936]">
            {filterAndSort.map((item, index) => (
              <li
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
                className="flex items-center justify-between border-b py-6"
                key={index}
              >
                {item.name}
                {item.icon}

                {item.subItems && expandedIndex === index && (
                  <div>
                    {item.subItems.map((subItem, subIndex) => (
                      <div>
                        <input key={subIndex} type="checkbox" />
                        {subItem.name}
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

      )}

      <div>
        <OriginalArtWork />
      </div>
      

      <div className="text-[#f6c936] flex justify-center py-10 px-8 2xl:w-[1183px] m-auto">
        <p className="btn text-xl text-[#f6c936]">
          For available originals or to be put on a wait list for upcoming
          original paintings by Miguel Camarena please call or text (480)
          595-2671 or send an email to camarenamart@gmail.com.
        </p>
      </div>
    </section>
  );
};

export default OriginalPainting;
