import React from "react";
import { FaArrowLeftLong, FaPenClip } from "react-icons/fa6";
import CustomerOverview from "./AddProductsComponents/CustomerOverview";
import DefaultAddress from "./AddProductsComponents/DefaultAddress";
import TaxExemptions from "./AddProductsComponents/TaxExemptions";
import { Link } from "react-router-dom";


const NewCustomer = () => {
    
 
  return (
   <section className="flex xl:flex-row flex-col justify-center xl:space-x-3 sm:px-4 xl:px-0">
       <div className="space-y-4 py-4">
            <div className="">
                        <h1 className='flex text-lg font-bold items-center py-4'>
                            <Link to={"/customer"}><FaArrowLeftLong className="m-2"/></Link>
                            New Customer
                        </h1>
                    <CustomerOverview />
            </div>

            <div className="">
                <DefaultAddress />
            </div>

            <div>
                
                <TaxExemptions />
            </div>
        </div>
       <div className="space-y-4 xl:mt-20">
       <div className="bg-white p-4 sm:rounded-lg space-y-6 text-sm">
            <div className="flex justify-between">
                <h1 className="text-base font-semibold">Notes</h1>
                <FaPenClip />
            </div>
            <p>Notes are private and won't be shared with the customer.</p>
        </div>
        <div className="bg-white p-4 sm:rounded-lg space-y-6 text-sm">
            <div className="flex justify-between">
                <h1 className="text-base font-semibold">Tags</h1>
                <FaPenClip />
            </div>
            <input type="text" className="rounded-lg w-full p-2 border border-black" />
        </div>

        <div className="text-end py-4 px-2 xl:py-0 xl:px-0">
          <button className="bg-black text-white p-2 rounded-lg ">Submit</button>
        </div>
       </div>
   </section>
  )
}

export default NewCustomer;
