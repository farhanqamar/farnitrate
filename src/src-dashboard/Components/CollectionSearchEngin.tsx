import React, { useState } from 'react'
import { FaPenClip } from 'react-icons/fa6'

const CollectionSearchEngin = () => {
    const[desc, setDesc] = useState(false)
    const showDesc = () =>{
        setDesc(!desc)
    }

  return (
   <section>
        <div className='space-y-4'>
            <div className='flex border-b py-2'>
                <div>
                    <h1 className='text-base font-semibold'>Search engine listing</h1>
                    <p>Add a title and description to see how this collection might appear in a search engine listing</p>
                </div>
                <div>
                    <FaPenClip onClick={showDesc} className='ml-20 cursor-pointer'/>
                </div>
            </div>

            {desc ? (
                <div>
                    <div className='space-y-1'>
                        <label className='text-base' htmlFor="">Page Title</label>
                        <input type="text" className='w-full p-2 rounded-lg border' />
                    </div>

                    <div className='space-y-1'>
                        <label className='text-base' htmlFor="">Meta Description</label>
                        <textarea rows={4}  className='w-full p-2 rounded-lg border' ></textarea>
                    </div>

                    <div className='space-y-1'>
                        <label className='text-base' htmlFor="">URL Handle</label>
                        <input type="text" className='w-full p-2 rounded-lg border' placeholder='https://28f8ab-02.myshopify.com/collections/' />
                    </div>
                </div>
            ): ('')}

        </div>
   </section>
  )
}

export default CollectionSearchEngin
