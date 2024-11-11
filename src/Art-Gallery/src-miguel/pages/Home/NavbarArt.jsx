import React, { useState } from "react";
// import img from "../../../images/logo_test_2.avif";
// import { CiUser } from "react-icons/ci";
// import { IoIosSearch } from "react-icons/io";
// import { FaOpencart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
// import { IoMenu } from "react-icons/io5";
// import ResponsiveMenuBar from '../../components/ResponsiveMenuBar'

import { ChevronDownIcon } from "@heroicons/react/20/solid";
// import { MdClose } from "react-icons/md";
import MiddleBar from "./MiddleBar";

const Navbar = () => {
  const [responsiveMenu, setResponsiveMenu] = useState (false)
  return (
    <header className="fixed top-0 w-full bg-black z-50">
      <div className="px-[56px] bg-color">
        <p className="text-[#ffffff] my-0 py-[8px] text-[20px] font-bold list text-center">
          Visit us at 6220 E Cave Creek rd, Cave Creek AZ 85331 (480) 595-2671
        </p>
      </div>

      <div className="">
        <MiddleBar />
      </div>

      <div>
        <nav className=" hidden lg:block nav">
          <ul className="menu">
            <li className="hover:underline">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:underline btn">
              <Link to="/orignalpainting">Original Paintings</Link>
            </li>
            <li className="hover:underline btn">
              <Link to="/collections">Prints on Canvas</Link>
            </li>

            <li className="hover:underline btn">
              <Dropdown />
            </li>

            <li className="hover:underline btn">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="hover:underline btn">
              <Link to="/bio">Bio</Link>
            </li>
            <li className="hover:underline btn">
              <Link to="/blog">Blogs</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const Dropdown = () => {
  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <MenuButton className="inline-flex w-full justify-center bg-black items-center text-[22px] font-normal text-[#F6C934] shadow-sm">
           <Link to="/artservices">Services</Link>
            <ChevronDownIcon
              aria-hidden="true"
              className="h-5 w-5 text-[#F6c936] mx-1"
            />
          </MenuButton>
        </div>

        <MenuItems
          transition
          className="absolute z-10 mt-2 w-56 origin-top-right divide-y rounded-md bg-black shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <div className="py-1">
            <MenuItem>
              <Link
                to="/orignalart"
                className="block px-4 py-2 text-[18px] hover:underline data-[focus]:text-gray-900"
              >
                Orignal Art
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                to="/giclee"
                className="block px-4 py-2 hover:underline text-[18px] data-[focus]:text-gray-900"
              >
                Giclee Prints
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                to="/artconsultation"
                className="block px-4 hover:underline py-2 text-[18px] data-[focus]:text-gray-900"
              >
                Art Consulation
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                to="/wholsaleprints"
                className="block px-4 hover:underline py-2 text-[18px] data-[focus]:text-gray-900"
              >
                Wholesale Prints
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                to="/rentart"
                className="block px-4 hover:underline py-2 text-[18px] data-[focus]:text-gray-900"
              >
                Renting Art For Staging
              </Link>
            </MenuItem>
            </div>

        </MenuItems>
      </Menu>
    </>
  );
};
export default Navbar;
