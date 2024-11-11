import { useState } from "react";
import "./AdminSideBar.scss";
import { Link } from "react-router-dom";
import {
  MdOutlineShoppingBag,
  MdHomeFilled,
  MdArrowForwardIos,
} from "react-icons/md";
import { AiFillReconciliation } from "react-icons/ai";
import { GrUserManager } from "react-icons/gr";
import { SiGoogleanalytics } from "react-icons/si";
import { RiDiscountPercentLine } from "react-icons/ri";
import { IoStorefront } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import React from "react";


const AdminSideBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const checkDropdownOpen = (index: any) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const handleClick = (index: any) => {
    setActiveIndex(index);
  };

  return (
    <section className="sidebarListStyle md:pl-5 md:pr-3 h-[95.6vh] bg-[#EBEBEB] overflow-auto">
    <ul>
      {menuItems.map((item, idx) =>
        item.index === 8 ? (
          <div key={item.index} className="flex justify-between pr-1 my-2 relative md:right-[12px] text-black">
            <p>Sales channels</p>
            <span className="relative top-[6px] text-zinc-400">
              <MdArrowForwardIos />
            </span>
          </div>
        ) : item.index === 11 ? (
          <div key={item.index} className="flex justify-between pr-1 my-2 relative right-[12px]">
            <p>Add apps</p>
            <span className="relative top-[6px] text-zinc-400">
              <MdArrowForwardIos />
            </span>
          </div>
        ) : (
          <div key={item.index} className="py-[4px] pl-2">
            <Link to={`${item.route}`}>
              <li
                className={`flex gap-2 py-1 px-3 hover:bg-[#f3f3f3] text-[#212529] text-lg font-semibold rounded-lg ${
                  activeIndex === item.activeIndex ? "bg-active text-active" : ""
                }`}
                onClick={() => {
                  handleClick(item.activeIndex);
                  checkDropdownOpen(item.index);
                }}
              >
                <span className="relative top-1 text-xg">{item.IconBase}</span>
                <span>{item.title}</span>
              </li>
            </Link>
            {dropdownOpen === item.index && item.items && (
              <ul className="dropdown pl-4">
                {item.items.map((subItem, subIdx) => (
                  <Link key={subItem.activeIndex} to={subItem.route}>
                    <li
                      className={`text-[#75777d] hover:text-black my-[4px] py-1 px-3 hover:bg-[#f3f3f3] text-lg font-semibold rounded-lg ${
                        activeIndex === subItem.activeIndex ? "bg-active text-active" : ""
                      }`}
                      onClick={() => handleClick(subItem.activeIndex)}
                    >
                      {subItem.label}
                    </li>
                  </Link>
                ))}
              </ul>
            )}
          </div>
        )
      )}
    </ul>
  </section>
  
  );
};

export default AdminSideBar;

const menuItems = [
  {
    title: "Home",
    route: "/admin",
    IconBase: <MdHomeFilled />,
    activeIndex: 0,
    index: 0,
  },
  {
    title: "Orders",
    route: "/admin/order",
    IconBase: <AiFillReconciliation />,
    activeIndex: 1,
    index: 1,
   
  },
  {
    title: "Products",
    route: "/admin/prooduct",
    IconBase: <MdOutlineShoppingBag />,
    activeIndex: 4,
    index: 2,
    items: [
      { label: "Collections", route: "/admin/prooduct/coollection", activeIndex: 5 },

    ],
  },
  {
    title: "Customers",
    route: "/admin/customer",
    IconBase: <GrUserManager />,
    activeIndex: 10,
    index: 3,
    items: [

    ],
  },

  {
    title: "Analytics",
    route: "/admin/analytics",
    IconBase: <SiGoogleanalytics />,
    activeIndex: 15,
    index: 5,
 
    
  },

  {
    title: "Discounts",
    route: "/admin/discount",
    IconBase: <RiDiscountPercentLine />,
    activeIndex: 21,
    index: 7,
  },
  {
    index: 8,
    title: "Add apps",
    IconBase: <MdArrowForwardIos />,
  },
  {
    title: "Online Store",
    route: "/admin/blog-post",
    IconBase: <IoStorefront />,
    activeIndex: 24,
    index: 9,
    items: [
      { label: "Blog posts", route: "/admin/blog-post", activeIndex: 24, index: 9 },
   
    ],
  },

  
];
