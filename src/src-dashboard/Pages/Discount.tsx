// import Discount_img from '../Components/imagesAdmin/Discount_img.svg'
import { Link } from 'react-router-dom';
import { IoMdAdd } from "react-icons/io";

import React from 'react';
import "./Dashboard.css"

const Discount = () => {



    return (
        <section className='md:p-10'>
            <div className='w-[100%] flex justify-around py-5'>
                <div className='mr-auto'>
                    <p className='text-2xl font-bold text-[#303030]'>Discounts</p>
                </div>
                <div className='w-[40%] '>
                    <div className='flex flex-col justify-end items-end'>
                        <Link to='/admin/discount/createDiscount'><button className='flex bg-black/75 hover:bg-black text-sm font-bold rounded-lg px-3 py-2 text-white'>Create Discount </button>
                        </Link>
                    </div>
                </div>
            </div>


            <div className="bg-white py-10 rounded-xl border">
                <div>
                    <img src={``} className="m-auto" />
                </div>
                <div className="text-center">
                    <p className="text-base font-semibold">Manage discounts and promotions</p>
                    <p className="text-sm w-full md:w-1/3 m-auto py-4">Create discount codes and automatic discounts that apply at checkout. You can also use discounts with compare at prices.</p>
                </div>

                <div className='flex gap-1 justify-center'>
                    <Link to='/admin/discount/createDiscount'><button className='flex bg-gradient-to-b from-black/80 to-black/60 hover:bg-black text-sm font-bold rounded-lg px-2 py-1.5 text-white'><IoMdAdd className="mr-1 mt-0.5" />Create Discount </button>
                    </Link>
                    <Link to='/admin/discount/discountTable'><button className='flex text-sm font-bold rounded-lg px-2 py-1.5 border  hover:bg-stone-200'>All Discount </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
export default Discount;