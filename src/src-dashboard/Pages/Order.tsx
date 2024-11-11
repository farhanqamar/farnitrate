import { useState, useRef, useEffect } from 'react';
import React from 'react';
import order_main from '../Components/imagesAdmin/order_main.png';
import arrow_down from '../Components/arrow_down.png';
import '../indexAdmin.scss';
import { Link } from 'react-router-dom';
import { RxEyeOpen } from "react-icons/rx";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { IoRemoveOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { IoFilterSharp } from "react-icons/io5";
import "./Dashboard.css"

const columnsData = [
  "id",
  "fulfillment_status",
  "payment_status",
  "order_number",
  "email",
  "billing_address",
  "shipping_address",
  "tracking_number",
  "total_price",
  "subtotal_price",
  "shipping_price",
  "tax_price",
  "discount_price",
  "created_at",
  "updated_at",
  "note",
  "tags",
  "customer",
  "shipping_method",
];



const Order = () => {
  const [ordrs, setOrdrs] = useState([]);
  const [visibleColumns, setVisibleColumns] = useState(
    columnsData.map((_, index) => index < 10)
  );

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  // const dropdownRf = useRef(null);
  const dropdownRf = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/store/orders/");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setOrdrs(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      
      if (dropdownRf.current && !dropdownRf.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleCheckboxChange = (index:number) => {
    const newVisibleColumns = [...visibleColumns];

    if (newVisibleColumns[index]) {
      newVisibleColumns[index] = false;
    } else {
      const visibleCount = newVisibleColumns.filter(Boolean).length;
      if (visibleCount >= 10) {
        const firstVisibleIndex = newVisibleColumns.findIndex((col) => col);
        newVisibleColumns[firstVisibleIndex] = false;
      }
      newVisibleColumns[index] = true;
    }

    setVisibleColumns(newVisibleColumns);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Today');
  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false); // Close 
  };

  const [moreAction, setMoreAction] = useState(false);
  const [showAnalytic, setShowAnalytic] = useState(false);
  const [orders, setOrders] = useState([]);
  const dropdownRef = useRef<HTMLUListElement>(null);


  const openDropDown = () => {
    setMoreAction(!moreAction);
  };

  const openAnalytic = () => {
    setShowAnalytic(!showAnalytic);
    setMoreAction(false);
  };


  const manageMoreAction = () =>{
    if(!moreAction && !showAnalytic){
      setMoreAction(!moreAction)
    }else{
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMoreAction(false);
        setShowAnalytic(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/store/orders/");
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <>
      <section className='p-10'>
        <div className='w-[100%] flex justify-around p-5'>
          <div className='mr-auto'>
            <p className='text-2xl font-bold text-[#303030]'>Orders</p>
          </div>
          <div className='md:w-[40%]'>
            <div className='flex flex-col justify-end items-end space-y-3'>
              <button onClick={manageMoreAction} className='flex bg-[#e3e3e3] hover:bg-[#d4d4d4] text-xs font-bold rounded-lg px-2 py-1 text-[#303030]'>
                More Action <img src={arrow_down} alt="" className='h-3 w-3 m-1' />
              </button>

              {moreAction && (
                <ul className='' ref={dropdownRef}>
                  <li>
                    <div className='flex text-sm bg-white rounded-lg px-auto py-2 px-2 text-[#303030]' onClick={() => { openAnalytic(); openDropDown(); }}>
                      <RxEyeOpen className='mr-2 text-xl' />Show Analytic Bar
                    </div>
                  </li>
                </ul>
              )}

              {showAnalytic && (
                <ul className=''>
                  <li>
                    <a className='flex text-sm bg-white rounded-lg px-2 py-2 text-[#303030]' href="" onClick={(e) => { e.preventDefault(); openAnalytic(); }}>
                      <FaRegEyeSlash className='mx-3 text-xl' />Close Analytic Bar
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>

        <div>
          {showAnalytic && (
            <div>

              <section className="overflow-hidden ">
                <div>

                  <div className="flex justify-evenly bg-white whitespace-nowrap">
                    <div className=" w-auto p-2 border-r border-gray-700">
                      <button
                        onClick={toggleDropdown}
                        className="flex lg:text-base text-sm p-4 hover:bg-[#f1f1f1] hover:rounded-lg"> <SlCalender className='text-2xl mr-2' />
                        {selectedOption}
                      </button>
                    </div>

                    <div className="flex p-3">
                      <Link to={''} className="hover:bg-[#f1f1f1] hover:rounded-lg p-2">
                        <p className="lg:text-base text-sm font-semibold">Total Orders</p>
                        <div>
                          <span className="flex "><p className="font-semibold">0</p><IoRemoveOutline className='text-xl ml-2 mt-1' /></span>
                          <hr className="w-[40px] h-[2px] bg-sky-300 ml-auto -mt-3" />
                        </div>
                      </Link>
                    </div>
                    <hr className="w-[1px] h-[70px] bg-gray-300 ml-4" />
                    <div className='hidden lg:block'>
                      <div className=" lg:flex p-3">
                        <Link to={''} className="hover:bg-[#f1f1f1] hover:rounded-lg p-2">
                          <p className="lg:text-base text-sm font-semibold">Ordered items over time</p>
                          <div>
                            <span className="flex "><p className="font-semibold">0</p><IoRemoveOutline className='text-xl ml-2 mt-1' /></span>
                            <hr className="w-[40px] h-[2px] bg-sky-300 ml-auto -mt-3" />
                          </div>
                        </Link>
                        <hr className="w-[1px] h-[70px] bg-gray-300 mx-4" />
                      </div>
                    </div>
                    <div className='hidden xl:block'>
                      <div className=" xl:flex p-3 ">
                        <Link to={''} className="hover:bg-[#f1f1f1] hover:rounded-lg p-2">
                          <p className="lg:text-base text-sm font-semibold">Returns</p>
                          <div>
                            <span className="flex "><p className="font-semibold">0</p><IoRemoveOutline className='text-xl ml-2 mt-1' /></span>
                            {/* <hr className="w-[40px] h-[2px] bg-sky-300 ml-auto -mt-3"/> */}
                          </div>
                        </Link>
                        <hr className="w-[1px] h-[70px] bg-gray-300 mx-4" />
                      </div>
                    </div>
                    <div className="flex p-3">
                      <Link to={''} className="hover:bg-[#f1f1f1] hover:rounded-lg p-2">
                        <p className="lg:text-base text-sm font-semibold">Fulfilled orders over time</p>
                        <div>
                          <span className="flex "><p className="font-semibold">0</p><IoRemoveOutline className='text-xl ml-2 mt-1' /></span>
                          <hr className="w-[40px] h-[2px] bg-sky-300 ml-auto -mt-3" />
                        </div>
                      </Link>
                      <hr className="w-[1px] h-[70px] bg-gray-300 mx-4" />
                    </div>
                    <div className='hidden md:block'>
                      <div className=" md:flex p-3">
                        <Link to={''} className="hover:bg-[#f1f1f1] hover:rounded-lg p-2">
                          <p className="lg:text-base text-sm font-semibold">Delivered orders over time</p>
                          <div>
                            <span className="flex "><p className="font-semibold">0</p><IoRemoveOutline className='text-xl ml-2 mt-1' /></span>
                            <hr className="w-[40px] h-[2px] bg-sky-300 ml-auto -mt-3" />
                          </div>
                        </Link>
                        <hr className="w-[1px] h-[70px] bg-gray-300 mx-4" />
                      </div>
                    </div>
                    <div className='hidden lg:block'>
                      <div className=" lg:flex p-3">
                        <Link to={''} className="hover:bg-[#f1f1f1] hover:rounded-lg p-2">
                          <p className="lg:text-base text-sm font-semibold">Time to fulfill</p>
                          <div>
                            <span className="flex "><p className="font-semibold">0</p><IoRemoveOutline className='text-xl ml-2 mt-1' /></span>
                            <hr className="w-[40px] h-[2px] bg-sky-300 ml-auto -mt-3" />
                          </div>
                        </Link>
                        <hr className="w-[1px] h-[70px] bg-gray-300 mx-4" />
                      </div>
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
            </div>
          )}
        </div>

        <div className="bg-white p-3 rounded-xl">
          {orders.length === 0 ? (
            <div className='pb-16 pt-5'>
              <img src={order_main} className="m-auto" alt="Order Placeholder" />
              <div className="text-center">
                <p className="text-base font-semibold">Your Orders Will Show Here</p>
                <p className="text-sm w-full md:w-1/3 m-auto py-4">To get orders and accept payments from customers, you need to select a plan. You’ll only be charged for your plan after your free trial ends.</p>
              </div>
              <div className="flex flex-col md:flex-row justify-center md:space-x-4 md:space-y-0 space-y-2">
                <Link to={'/admin/order/newOrder'}>
                  <button className="bg-gradient-to-b bg-black/75 hover:bg-black text-white rounded-lg px-3 py-1.5 text-sm flex items-center m-auto ">
                    <IoMdAdd className="mr-1 text-lg" /> Add Order
                  </button>
                </Link>
                <Link to={"/admin/prooduct/allProducts"}>
                  <button className="rounded-lg border-2 m-auto md:m-0 bg-white hover:bg-stone-200 px-3 py-1 text-sm flex items-center">Show All Products</button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="p-4">
              <div className="flex justify-end">
                <div className="relative inline-block" ref={dropdownRf}>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none"
                    onClick={() => setDropdownOpen(!isDropdownOpen)}
                  >
                    <span><IoFilterSharp /></span>
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10 h-[300px] overflow-y-auto">
                      {columnsData.map((column, index) => (
                        <div key={index} className="px-4 py-2">
                          <label className="inline-flex items-center">
                            <input
                              type="checkbox"
                              className="form-checkbox text-blue-600"
                              checked={visibleColumns[index]}
                              onChange={() => handleCheckboxChange(index)}
                            />
                            <span className="ml-2">{column.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())}</span>
                          </label>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="overflow-x-auto mt-4">
                <table className="min-w-full table-auto border-collapse">
                  <thead>
                    <tr>
                      {columnsData.map((column, index) =>
                        visibleColumns[index] && (
                          <th key={index} className="border px-4 py-2 bg-[#D9D9D9]">
                            {column.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {ordrs.map((order) => (
                      <tr key={order}>
                        {columnsData.map((column, index) =>
                          visibleColumns[index] && (
                            <td key={index} className="border px-4 py-2">
                              {order[column] !== null ? (order[column] as string | number).toString() : ""}
                            </td>
                          )
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Order;
