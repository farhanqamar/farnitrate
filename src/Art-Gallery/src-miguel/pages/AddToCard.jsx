import React, { useState } from 'react';
  import { RiShoppingBag3Line } from "react-icons/ri";
import "./Miguel.css"
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
};
const AddToCard = () => {
  const [open, setOpen] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sidebarContent, setSidebarContent] = useState('');
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const toggleSidebar = (content = '') => {
    setSidebarContent(content); 
    setIsSidebarOpen(!isSidebarOpen); 
  };
  return (
    <>
      <section>
        <div className='flex flex-col gap-4'>
          <p><span className='hover:underline'><Link to={"/"}>Homepage/</Link></span>Arizona Horses</p>
          <h3 className='text-[#F6C934] text-[25px] font-extrabold'>Arizona Horses</h3>
          <p className='text-[#F6C934] text-md underline list'>Miguel Camarena Art Gallery</p>
          <div className='my-4'>
          <p className='text-[#808080] font-semibold list'>Sold out</p>
            <div className='px-2 bg-white'>
              
              <span className=' text-black w-full'>$95</span>
            </div>
            <div className='mt-4'>
            <p className='text-base'>
              <a href="#" className='text-white underline'>Shipping</a> calculated at checkout.
            </p>
            </div>
          </div>
          <p className='text-xs'>
            Pay in 4 interest-free installments of $23.75 with
            <a href="#" className='text-white underline text-sm'>Learn more</a>
          </p>
          <hr />
          <div className='w-full'>
            <p>Size (in inches)</p>
            <SelectBox />
          </div>
          <div>
            <QuantityButton />
          </div>
          <div>
            <div className="flex flex-col items-center space-y-4 mt-6">
              <button className="w-full bg-yellow-500 text-center text-xs text-black font-bold  px-4 hover:bg-yellow-600 group duration-150">
                <span className='relative bottom-2 group-hover:text-white'>ADD TO CART</span>
                <span className="text-4xl relative bottom-1 group-hover:text-white"> &#8250; </span>
              </button>
              <button className="w-full bg-purple-600 text-white text-xs font-bold py-2 px-4 hover:bg-purple-700 space-x-2">
                <span>Buy with</span>
              </button>
              <a href="#" className="text-yellow-500 font-bold underline">
                More payment options
              </a>
            </div>
          </div>
          <div>
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />} className='w-fit'>
              <AccordionHeader onClick={() => handleOpen(1)} className='text-2xl  pt-10'>
                Description
              </AccordionHeader>
              <AccordionBody className='font-serif my-6 text-white'>
                Abstract Painting Expressions Prints on Canvas by Miguel Camarena
                <p className='text-white my-4 text-base'>
                  Definitely, everyone will love to decorate Living Room, Bedroom, Dining Room, Office, Music Gallery, Work, and workplaces with this original abstract modern Wall Art Painting Expressions prints.
                </p>
                <ul className='list-disc text-white my-4'>
                  <li className='my-2'>
                    All prints that are shipped come as a rolled canvas and would require to be stretched. Any local art store should be able to provide that service for a minimal cost.
                  </li>
                  <li className='my-2'>
                    Prints that will be picked up in person from our Art Gallery in Arizona, Cave Creek Road can be stretched by us for an additional cost.
                  </li>
                  <li className='my-2'>
                    Custom sizes available, please contact us for pricing based on your order.
                  </li>
                </ul>
              </AccordionBody>
            </Accordion>
          </div>
          <div>
         
          <div className='sm:flex gap-4'> <div onClick={toggleSidebar}>
            <Underline h2Text={`Shopping & Returns`} />
          </div>
          <div onClick={toggleSidebar}>
            <Underline h2Text={`Material & Care`} />
          </div></div>
        </div>
          <div className=''>
            <div className='flex'>
              <span className='relative bottom-1 mr-2 text-[#F6C934] text-lg'><RiShoppingBag3Line /></span>
              <p className='text-[#F6C934] text-xs'>Pick up available at Camarena Art Gallery</p>
            </div>
            <p className='text-[#F6C934] text-sm'>Usually ready in 2-4 days</p>
          </div>
          <div>
            <Underline
              h2Text={`View store information`}
              onClick={() => toggleSidebar('Store Information Content')}
            />
          </div>
          <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} content={sidebarContent} />
        </div>
      </section>
    </>
  );
};
export default AddToCard;
const SelectBox = () => {
  const [selectedSize, setSelectedSize] = useState('8 x 12');
  const sizes = [
    '8 x 12', '14 x 20', '16 x 24', '18 x 27', '24 x 36',
    '30 x 45', '38 x 58', '48 x 72', '58 x 87',
  ];
  return (
    <div className="w-60">
      <label htmlFor="sizeSelect" className="block text-sm font-medium text-gray-700">
        Size (in inches)
      </label>
      <select
        id="sizeSelect"
        value={selectedSize}
        onChange={(e) => setSelectedSize(e.target.value)}
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white text-black  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        {sizes.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>
  );
};
const QuantityButton = () => {
  const [quantity, setQuantity] = useState(1);
  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };
  return (
    <div className="w-full">
      <label className="text-lg text-start text-white mb-2">Quantity</label>
      <div className="flex border border-gray-300 bg-white w-fit">
        <button
          onClick={decrementQuantity}
          className="px-4 py-2 text-xl font-bold border-r border-gray-300 hover:bg-gray-200 text-black "
        >
          -
        </button>
        <span className="px-4 py-2 text-lg font-medium text-black">{quantity}</span>
        <button
          onClick={incrementQuantity}
          className="px-4 py-2 text-xl font-bold border-l border-gray-300 hover:bg-gray-200 text-black "
        >
          +
        </button>
      </div>
    </div>
  );
};
const Underline = ({ h2Text, onClick }) => {
  return (
    <div className='relative' onClick={onClick}>
      <div className='w-fit h-[84px] cursor-pointer group'>
        <h2 className='text-base'>{h2Text}</h2>
        <div className="flex justify-center items-center">
          <div className="w-full group-hover:w-2/4 h-[1px] sm:h-[0.5px] bg-[#F6C934] transition-all duration-700 ease-in-out"></div>
        </div>
      </div>
    </div>
  );
};
const SideBar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      <div
        className={`fixed top-0 right-0 h-[80vh] w-[30%] bg-black text-white transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <h1>All Prints on Canvas...</h1>
          <button
            onClick={toggleSidebar}
            className="text-yellow-500 font-bold text-lg"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

AddToCard.js