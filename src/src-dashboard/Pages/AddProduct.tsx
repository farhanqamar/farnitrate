import { FaArrowLeftLong, FaPenClip } from "react-icons/fa6";
import CustomerOverview from "../Components/AddProductsComponents/CustomerOverview";
import DefaultAddress from "../Components/AddProductsComponents/DefaultAddress";
import TaxExemptions from "../Components/AddProductsComponents/TaxExemptions";
import { Link } from "react-router-dom";
import React from "react";
import "./Dashboard.css"



const NewCustomer = () => {


    return (
        <section className="flex md:flex-row flex-col justify-center space-x-3">
            <div className="space-y-4 ">
                <div className="">
                    <h1 className='flex text-lg font-bold items-center'>
                        <Link to={"/customer"}><FaArrowLeftLong className="m-2" /></Link>
                        Create Collection
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
            <div className="space-y-4 mt-10">
                <div className="bg-white p-4 rounded-lg space-y-6">
                    <div className="flex justify-between">
                        <h1>Notes</h1>
                        <FaPenClip />
                    </div>
                    <p>Notes are private and won't be shared with the customer.</p>
                </div>
                <div className="bg-white p-4 rounded-lg space-y-6">
                    <div className="flex justify-between">
                        <h1>Tags</h1>
                        <FaPenClip />
                    </div>
                    <input type="text" className="rounded-lg w-full p-2 border border-black" />
                </div>
            </div>
        </section>
    )
}

export default NewCustomer;