import React from "react";
import pay from "../../images/pay.png";
import { Link } from "react-router-dom";
const FooterBottom = () => {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row lg:justify-around items-start lg:items-center border-thin">
        <div className="p-5 flex lg:flex-row-reverse flex-col lg:items-center lg:space-y-0 space-y-10">
          <div className="flex text-[#ffff] flex-col lg:flex-row lg:items-center font-basic list-none">
            <Link to="/contact">
              <li className="text-base text-white lg:text-xl">Contact&nbsp;</li>
            </Link>
            <Link to="/bio">
              <li className="text-base text-white lg:text-xl">
                &nbsp;Bio
              </li>
            </Link>
          </div>

        
          <div className="flex items-start">
            <Link className="text-white md:text-base text-sm">© 2024 Miguel Camarena Art Gallery,&nbsp;&nbsp;</Link>
            <Link className="text-white md:text-base text-sm">Powered by Shopify&nbsp;&nbsp;&nbsp;&nbsp;
            </Link>
          </div>
        </div>
        <img className="h-[100px]" src={pay} alt="pay" />
        <div className="p-5">
          <p className="text-white  block lg:hidden tracking-wide text-left text-[18px] lg:text-[20px]">
            English / EN / USD
          </p>
        </div>
      </div>
    </>
  );
};

export default FooterBottom;
