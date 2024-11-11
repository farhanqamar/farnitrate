import React, { useState } from 'react'
import { MdArrowBack } from "react-icons/md";
import { Link } from 'react-router-dom';
import "./Dashboard.css"

const CreateDiscount = () => {
    const [selectedButton, setSelectedButton] = useState('discountCode');
   
  return (
    <section className='flex xl:flex-row flex-col justify-center xl:space-x-4 xl:py-6 space-y-4'>
        <div className='w-full xl:w-2/5 xl:space-y-3'>
            <div className='flex items-center space-x-2 py-4'>
            <Link to={'/admin/discount'}><MdArrowBack className='text-xl'/></Link>
                <h1 className='text-xl font-bold text-black'>Create Product Discount</h1>
            </div>
            <div className='hidden bg-white space-y-4 p-4 rounded-lg'>
                <div className='flex justify-between'>
                    <h1 className='text-base font-semibold'>Amount off products</h1>
                    <h1 className='text-base font-normal text-[#616161]'>Product discount</h1>
                </div>

                <div className='space-y-2 text-sm'>
                    <p>Method</p>
                    <button  onClick={() => setSelectedButton('discountCode')} className={`border ease-in rounded-s-lg p-2 text-black/80 font-semibold ${
                     selectedButton === 'discountCode' ? 'bg-[#cccccc]' : 'bg-white'}`}>Discount Code</button>
                    <button  onClick={() => setSelectedButton('automaticDiscount')} className={`border rounded-e-lg p-2 text-black/80 font-semibold ${
                    selectedButton === 'automaticDiscount' ? 'bg-[#cccccc]' : 'bg-white'}`}>Automatic Discount</button>
                </div>

                <div >
                    <div className='flex flex-col space-y-2 text-sm'>
                        <label htmlFor="">Title</label>
                        <input type="text" className='p-2 border border-black rounded-lg'/>
                    </div>
                    <p className='text-sm'>Customers will see this in their cart and at checkout.</p>
                </div>

            </div>
            
            <div className='hidden bg-white xl:rounded-lg space-y-4 p-4 text-sm'>
                <h1 className='text-base font-semibold text-black'>Discount Value</h1>
                <div className='flex flex-col space-y-2'>
                     <label htmlFor="">Code</label>
                    <input type="text" className='p-2 border border-black rounded-lg'/>
                </div>
                
                <div className='flex flex-col space-y-2'>
                     <label htmlFor="">Amount</label>
                    <input type="text" className='p-2 border border-black rounded-lg'/>
                </div>
                    
                <div className='flex flex-col space-y-2'>
                     <label htmlFor="">Expiry Date</label>
                    <input type="text" className='p-2 border border-black rounded-lg'/>
                </div>
                
                <div className='flex flex-col space-y-2'>
                     <label htmlFor="">Usage Count</label>
                    <input type="text" className='p-2 border border-black rounded-lg'/>
                </div>
            </div>
               
            <div className='bg-white xl:rounded-lg space-y-4 p-4 text-sm'>
                <h1 className='text-base font-semibold text-black'>Discount</h1>
                <div className='flex flex-col space-y-2'>
                     <label htmlFor="">Code</label>
                    <input type="text" className='p-2 border border-black rounded-lg'/>
                </div>

                <div className='flex flex-col space-y-2'>
                     <label htmlFor="">Amount</label>
                    <input type="text" className='p-2 border border-black rounded-lg'/>
                </div>
                
                <div className='flex flex-col space-y-2'>
                     <label htmlFor="">Discount Type</label>
                    <input type="text" className='p-2 border border-black rounded-lg'/>
                </div>

                <div className='flex flex-col space-y-2'>
                     <label htmlFor="">Start Date</label>
                    <input type="date" className='p-2 border border-black rounded-lg'/>
                </div>
                    
                <div className='flex flex-col space-y-2'>
                     <label htmlFor="">End Date</label>
                    <input type="date" className='p-2 border border-black rounded-lg'/>
                </div>
                
                <div className='flex flex-col space-y-2'>
                     <label htmlFor="">Applicable Product</label>
                    <input type="text" className='p-2 border border-black rounded-lg'/>
                </div>

                <div className='flex flex-col space-y-2'>
                     <label htmlFor="">Description</label>
                    <textarea rows={4} className='p-2 border border-black rounded-lg'/>
                </div>
            </div>

        </div>
        <div className='xl:w-1/4 space-y-3 xl:pt-14'>
            <div className='bg-white xl:rounded-lg p-4 space-y-4'>
                <h1 className='font-semibold text-base text-black'>Summary</h1>
                <div className=''>
                    <h1 className='text-base text-black'>Types and Methods</h1>
                   <div className='py-2 '>
                   <li className='text-[16px]'>Amount Off Products</li>
                   <li className='text-[16px]'>Code</li>
                   </div>
                </div>
                <div >
                    <h1 className='text-base text-black'>Details</h1>
                    <li className='text-[16px] py-2'>Can’t combine with other discounts</li>
                </div>
            </div>
            <div className='bg-white xl:rounded-lg p-4 space-y-4 items-center'>
                <div className='flex justify-between'>
                    <h1 className='font-bold text-sm text-black'>Sale Channel</h1>
                    <h1 className='text-black'>0 of 1 selected</h1>
                </div>
                <input type="checkbox" className='mx-2'/>
                <label htmlFor="">Point of sale</label>
            </div>
        <div className='flex justify-end'>
        <button className="bg-black text-white rounded-md px-3 py-2 transition duration-200">
          Save
        </button>
        </div>
        </div>
    </section>
  )
}

export default CreateDiscount
