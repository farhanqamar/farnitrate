import { useState } from "react";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";
import { IoRemoveOutline } from "react-icons/io5";
import React from "react";


const AnalyticBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Today');
  
    const toggleDropdown = () => setIsOpen(!isOpen);
  
    const handleOptionClick = (option:string) => {
      setSelectedOption(option);
      setIsOpen(false);  
     

      
    };
  return (
    <section className="overflow-hidden ">
 <div>
 
      <div className="flex justify-evenly bg-white whitespace-nowrap">
            <div className=" w-auto p-2 border-r border-gray-700">
                    <button
                        onClick={toggleDropdown}
                        className="flex lg:text-base text-sm p-4 hover:bg-[#f1f1f1] hover:rounded-lg"> <SlCalender className='text-2xl mr-2'/>
                        {selectedOption}
                    </button>
            </div>
        
            <div className="flex p-3">
                <Link to={'/'} className="hover:bg-[#f1f1f1] hover:rounded-lg p-2">
                    <p className="lg:text-base text-sm font-semibold">Total Orders</p>
                    <div>
                        <span className="flex "><p className="font-semibold">0</p><IoRemoveOutline className='text-xl ml-2 mt-1'/></span>
                        <hr className="w-[40px] h-[2px] bg-sky-300 ml-auto -mt-3"/>
                    </div>
                </Link>
            </div>
                <hr className="w-[1px] h-[70px] bg-gray-300 ml-4"/>
            <div className="hidden lg:block lg:flex p-3">
                <Link to={'/'} className="hover:bg-[#f1f1f1] hover:rounded-lg p-2">
                    <p className="lg:text-base text-sm font-semibold">Ordered items over time</p>
                    <div>
                        <span className="flex "><p className="font-semibold">0</p><IoRemoveOutline className='text-xl ml-2 mt-1'/></span>
                        <hr className="w-[40px] h-[2px] bg-sky-300 ml-auto -mt-3"/>
                    </div>
                </Link>
                <hr className="w-[1px] h-[70px] bg-gray-300 mx-4"/>
            </div>
            <div className="hidden xl:block xl:flex p-3 ">
                <Link to={'/'} className="hover:bg-[#f1f1f1] hover:rounded-lg p-2">
                    <p className="lg:text-base text-sm font-semibold">Returns</p>
                    <div>
                        <span className="flex "><p className="font-semibold">0</p><IoRemoveOutline className='text-xl ml-2 mt-1'/></span>
                    </div>
                </Link>
                <hr className="w-[1px] h-[70px] bg-gray-300 mx-4"/>
            </div>
            <div className="flex p-3">
                <Link to={'/'} className="hover:bg-[#f1f1f1] hover:rounded-lg p-2">
                    <p className="lg:text-base text-sm font-semibold">Fulfilled orders over time</p>
                    <div>
                        <span className="flex "><p className="font-semibold">0</p><IoRemoveOutline className='text-xl ml-2 mt-1'/></span>
                        <hr className="w-[40px] h-[2px] bg-sky-300 ml-auto -mt-3"/>
                    </div>
                </Link>
                <hr className="w-[1px] h-[70px] bg-gray-300 mx-4"/>
            </div>
            <div className="hidden md:block md:flex p-3">
                <Link to={'/'} className="hover:bg-[#f1f1f1] hover:rounded-lg p-2">
                    <p className="lg:text-base text-sm font-semibold">Delivered orders over time</p>
                    <div>
                        <span className="flex "><p className="font-semibold">0</p><IoRemoveOutline className='text-xl ml-2 mt-1'/></span>
                        <hr className="w-[40px] h-[2px] bg-sky-300 ml-auto -mt-3"/>
                    </div>
                </Link>
                <hr className="w-[1px] h-[70px] bg-gray-300 mx-4"/>
            </div>
            <div className="hidden lg:block lg:flex p-3">
                <Link to={'/'} className="hover:bg-[#f1f1f1] hover:rounded-lg p-2">
                    <p className="lg:text-base text-sm font-semibold">Time to fulfill</p>
                    <div>
                        <span className="flex "><p className="font-semibold">0</p><IoRemoveOutline className='text-xl ml-2 mt-1'/></span>
                        <hr className="w-[40px] h-[2px] bg-sky-300 ml-auto -mt-3"/>
                    </div>
                </Link>
                <hr className="w-[1px] h-[70px] bg-gray-300 mx-4"/>
            </div>
        </div>            
    </div>
     
     <div className="mt-3 inline-block">
        {isOpen && (
            <div className=" bg-white rounded-lg">
            <div
                onClick={() => handleOptionClick('Today')}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
            >
                <p className="text-base font-semibold">Today</p>
                <p>Compared to yesterday up to current hour</p>
            </div>
            <div
                onClick={() => handleOptionClick('7 Days')}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
            >
            <p className="text-base font-semibold">Last 7 Days</p>
            <p>Compared to the previous 7 days</p>
            </div>
            <div
                onClick={() => handleOptionClick('30 Days')}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
            >
                <p className="text-base font-semibold">Last 30 Days</p>
                <p>Compared to the previous 30 days</p>
            </div>
            </div>
        )}
      </div>
    </section>
  )
}

export default AnalyticBar
