import { FaArrowLeftLong } from "react-icons/fa6";
import CollectionSearchEngin from '../Components/CollectionSearchEngin'
import CollectionType from '../Components/CollectionType'
import DescriptionInput from '../Components/DescriptionInput'
import React from "react";
import "./Dashboard.css"

const New = () => {
  
  return (
    <section className='flex justify-center space-x-2 space-y-4'>
      <div className='w-1/3 space-y-3'>
        <h1 className='flex text-lg font-bold items-center'><FaArrowLeftLong className="m-2"/>
        Create Collection</h1>
          <div className=' bg-white flex flex-col rounded-lg p-2 border'>
            <div className='w-full flex flex-col font-medium p-2'>
                  <label className='text-sm p-1' htmlFor="">Title</label>
                  <input className=' border rounded-lg p-1' type="text" placeholder='e.g. Summer collection, Under $100, Staff picks'/>
            </div>
            <div className=' flex flex-col font-medium p-2'>
                  <label className='text-sm p-1' htmlFor="">Description</label>
                  <DescriptionInput />
            </div>
          </div>

        <div className=''>
            <div className=''>
                  <CollectionType />
            </div>
        </div>

        <div className=' rounded-lg bg-white p-2'>
          <CollectionSearchEngin/>
        </div>
      </div>

      <div className='w-1/4 space-y-3 pt-8'>
        <div className='bg-white p-2 rounded-lg'>
          <div className='flex justify-between'>
              <h1 className='text-base font-semibold'>Publishing</h1>
              <a className='font-semibold' href="">Manage</a>
          </div>
         


          <div className='p-1'>
            <h1 className='font-medium text-sm'>Sales Channels</h1>
            <li className='font-normal text-sm'>Online Store</li>
            <li className='font-normal text-sm'>Point of Sale</li>
            <p className='text-sm'>Point of Sale has not been set up. Finish the remaining steps to start selling in person.</p>
          </div>
        </div>

        <div className='bg-white p-2 rounded-lg flex flex-col'>
          <label htmlFor="" className='text-base font-semibold'>Image</label>
          <input type="file"  className='m-auto py-10 ' placeholder='or drop an image to upload'/> 
        </div>

        <div className='bg-white p-2 rounded-lg flex flex-col'>
            <label htmlFor="" className='text-base font-semibold'>Theme template</label>
            <input type="text"  className='p-2 border rounded-lg' placeholder='Default Collection'/> 
        </div>
      </div>
    </section>
  )
}

export default New
