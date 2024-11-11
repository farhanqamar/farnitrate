import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdCardTravel, MdClose, MdSearch } from "react-icons/md";
import { CiUser } from "react-icons/ci";
// import logo from "../../../ArtImage/logo.png";
import logo from "../../ArtImages/logo.png"

import { IoMenu } from "react-icons/io5";
import ResponsiveMenuBar from "../../components/ResponsiveMenuBar";

const MiddleBar = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [responsiveMenu, setResponsiveMenu] = useState(false);
  const SearchInOurStore = (e) => {
    e.preventDefault;
    setOpenSearch(!openSearch);
  };
  return (
    <nav>
      {openSearch ? (
        <div className="absolute w-full flex justify-between bg-black items-center p-5">
          <div className="flex gap-5  justify-center">
            <MdSearch className="text-[#F6C936] text-2xl" />
            <input
              type="text"
              placeholder="Search Our Store"
              className="outline-none text-white bg-black"
            />
          </div>
          <MdClose
            className="text-[#F6C936] text-xl"
            onClick={() => setOpenSearch(!openSearch)}
          />
        </div>
      ) : (
        ""
      )}

      <div className="flex justify-between p-5 items-center bg-black md:px-16 border-b-2 lg:border-none">
        <div>
          <MdSearch
            className="hidden lg:block text-2xl text-[#F6C936]"
            onClick={SearchInOurStore}
          />
          {responsiveMenu ? (
            <MdClose
              onClick={() => setResponsiveMenu(false)}
              className=" text-3xl text-[#F6C936]"
            />
          ) : (
            <IoMenu
              onClick={() => setResponsiveMenu(true)}
              className="block lg:hidden text-3xl text-[#F6C936]"
            />
          )}
        </div>

        <div className="w-[150px] sm:w-auto">
          <img src={logo} alt="Logo" />
        </div>

        <div className="flex lg:gap-12">
          <Link to="/account">
            {" "}
            <CiUser className="hidden lg:block text-2xl text-[#F6C936]" />
          </Link>
          <Link to="cart">
            {" "}
            <MdCardTravel className="text-2xl text-[#F6C936]" />
          </Link>
        </div>
      </div>

      <div className="block lg:hidden">{responsiveMenu && <ResponsiveMenuBar closeMenu={() => setResponsiveMenu(false)} />}</div>
    </nav>
  );
};

export default MiddleBar;
