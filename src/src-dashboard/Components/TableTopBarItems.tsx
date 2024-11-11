
import { IoMdAdd } from 'react-icons/io' 
import { BiSearch } from "react-icons/bi";
import { IoFilterSharp } from "react-icons/io5";
import React from 'react';




const TableTopBarItems = () => {
  return (
   <section className=''>
   

            <div className="flex justify-between p-2 border-b-2 border-gray-400/10">
                <div className='flex px-2'>
                    <button className='bg-gray-400/10 text-gray-400/50 rounded-lg text-lg px-3 font-semibold'>All</button>
                   
                    <IoMdAdd className='text-2xl mt-0.5 ml-3 font-semibold text-gray-400/50'/>

                </div>

                <div className="bg-gray-400/10 text-gray-400/50 text-lg flex rounded-lg p-2 space-x-4">
                    <BiSearch />
                    <IoFilterSharp />
                   
                </div>
            </div>
   
   </section>
  )
}

export default TableTopBarItems
