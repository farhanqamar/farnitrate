import { IoMdAdd } from "react-icons/io";
import { useState } from "react";
import OrderTable from "../Components/OrderTable";
import { Link } from "react-router-dom";
import React from "react";
import "./Dashboard.css";


const Product: React.FC = () => {
    const [showProduct, setSHowProduct] = useState(true);
    const showTable = () => {
        setSHowProduct(!showProduct)
    }
    return (
        <section className="overflow-x-hidden p-10">
            <div className='p-5'>
                <p className='text-2xl font-bold text-[#303030]'>Products</p>
            </div>

            <div className="shadow-lg rounded-2xl">
                <div className="bg-white py-2">
                    {showProduct ?
                        (<div className="flex justify-evenly py-10">
                            <div className="space-y-4 md:mt-10 mt-5 md:text-start text-center">
                                <p className="text-xl font-bold">Add Your Products</p>
                                <p className="w-auto text-sm">Start by stocking your store with products your customer will love</p>
                                <div className="flex md:space-x-4">
                                    <Link to={'/admin/prooduct/newproduct'}>
                                        <button className="hover:bg-black bg-gradient-to-b bg-black/75 text-white rounded-lg py-1.5 px-3 text-sm flex mt-1">
                                            <IoMdAdd className="mr-1 text-lg" /> Add Product
                                        </button>
                                    </Link>
                                    <Link to={"/admin/product/allProducts"}><button className="rounded-lg hover:bg-stone-200 py-1.5 px-3 text-sm border-2 m-auto md:m-0">Show All Products</button></Link>
                                </div>

                            </div>
                        </div>
                        )
                        : ('')
                    }
                </div>
                {showProduct ?
                    (<div className="bg-gray-400/10 p-5 space-y-6 2xl:px-80 lg:px-40 text-center md:text-left">
                        <div className="">
                            <p className="text-xl font-bold">Find product to sell</p>
                            <p className="text-sm">Have dropshipping or print on demand products shipped directly form supplier to customer, and only pay for what you sell</p>
                        </div>
                        <button className="bg-white text-sm rounded-md px-2 py-1 ">Browse Product Sourcing App</button>
                    </div>)
                    : ('')
                }
            </div>

            {!showProduct ? (<OrderTable />) : ('')}
        </section>
    )
}




export default Product
