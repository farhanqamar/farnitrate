import { useState } from "react";
import DropdownInput from "../DropdownInput";
import CountryCodeInput from "./CountryCodeInput";
import React from "react";

const CustomerOverview = () => {
  const options = ['English [Default]'];
  const [inputValue, setInputValue] = useState('');
  const [isCheckboxEnabled, setIsCheckboxEnabled] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (!isNaN(Number(value)) && value.trim() !== '') {
      setIsCheckboxEnabled(true);
    } else {
      setIsCheckboxEnabled(false);
    }

    setInputValue(value);
  }
  return (
    <section>
      <div>
        <div className='font-medium bg-white flex flex-col sm:rounded-t-xl p-6 border space-y-4 py-4'>
          <div>
            <h1 className='text-base font-bold'>Customer Overview</h1>
          </div>
          <div className='flex md:flex-row flex-col md:space-x-2 space-y-4 md:space-y-0'>
            <div className="flex flex-col w-full">
              <label className=' text-sm p-1' htmlFor="">First Name</label>
              <input className=' border border-black rounded-lg p-1' type="text" placeholder='' />
            </div>
            <div className="flex flex-col w-full">
              <label className='text-sm p-1' htmlFor="">Last Name</label>
              <input className=' border border-black rounded-lg p-1' type="text" placeholder='' />
            </div>
          </div>
          <div >
            <label className='text-sm p-1 ' htmlFor="">Language</label>
            <DropdownInput options={options} />
            <p className="text-sm font-normal text-[#737373] text-medium">This customer will receive notifications in this language</p>
          </div>
          <div className="w-full flex flex-col">
            <label className='text-sm p-1' htmlFor="">Email</label>
            <input className=' border border-black rounded-lg p-2' type="email" />
          </div>
          <div className="">
            <label className='text-sm p-1' htmlFor="">Phone</label>
            <div className="flex space-x-2 ">
              <CountryCodeInput />
              <input
                type="text"
                className=" w-full border border-black p-1"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter a number"
              />
            </div>
            <div className="py-4">
              <input type="checkbox" disabled={!isCheckboxEnabled} id="checkbox" />
              <label htmlFor="checkbox" className="ml-2 text-sm text-[#737373]">Customer agreed to receive SMS marketing text messages.</label>
            </div>
          </div>

        </div>
        <div className="bg-[#F7F7F7] p-5 sm:rounded-b-xl">
          <p className="text-medium">You should ask your customers for permission before you subscribe them to your marketing emails or SMS.</p>
        </div>
      </div>
    </section>
  )
}

export default CustomerOverview
