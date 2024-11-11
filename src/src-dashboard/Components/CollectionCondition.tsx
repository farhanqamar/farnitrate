import React,{useState} from 'react'
import { FaArrowDownUpAcrossLine } from "react-icons/fa6";



const CollectionCondition = () => {
    
        const [checked, setChecked] = useState('all'); 
        const handleCheckboxChange = (option:any) => {
          setChecked(option); 
        };

        const[sorted, setSorted] = useState(false)
        const showSort = () => {
          setSorted(!sorted)
        }

        const[title, setTitle] = useState(false)
        const showTitle = () => {
            setTitle(!title)
        }

  return (
   <section>
        <div>
            <div>
                <h1 className='text-base font-semibold p-1'>Conditions</h1>
            </div>

            <div className='flex space-x-6 p-1'>
                <p>Product Must Match</p>
               <div className='flex items-center space-x-2'>
                    <input 
                    type="checkbox"
                    className="rounded-full w-4 h-4 text-white appearance-none relative checked:bg-black/70 bg-gray-200 border-gray-300"
                    checked={checked === 'all'}
                    onChange={()=> handleCheckboxChange('all')} />
                    <p>all conditions</p>
               </div>
               <div className='flex items-center space-x-2'>
                    <input 
                    type="checkbox"
                    className="rounded-full w-4 h-4 text-white appearance-none relative checked:bg-black/70 bg-gray-200 border-gray-300"
                    checked={checked === 'any'} 
                    onChange={() => handleCheckboxChange('any')} 
                    />
                    <p>Any conditions</p>
               </div>
            </div>

            <div className='flex justify-between py-4'>
                <div>
                <button onClick={showSort} className='w-[175px] flex rounded-lg p-2 border items-center justify-between'>
                    <span className=' ml-2 flex'>Title</span>
                    <FaArrowDownUpAcrossLine />
                </button>
                {sorted ? (
                    <div className='w-[175px] bg-white space-y-2 border absolute py-2'>
                    <p className='px-2 font-medium hover:bg-blue-500 hover:text-white'> Title</p>
                    <p className='px-2 font-medium hover:bg-blue-500 hover:text-white'>Type</p>
                    <p className='px-2 font-medium hover:bg-blue-500 hover:text-white'>Category</p>
                    <p className='px-2 font-medium hover:bg-blue-500 hover:text-white'> Vendor</p>
                    <p className='px-2 font-medium hover:bg-blue-500 hover:text-white'>Tag</p>
                    <p className='px-2 font-medium hover:bg-blue-500 hover:text-white'>Price</p>
                    <p className='px-2 font-medium hover:bg-blue-500 hover:text-white'>Compare at price</p>
                    <p className='px-2 font-medium hover:bg-blue-500 hover:text-white'>Weight</p>
                    <p className='px-2 font-medium hover:bg-blue-500 hover:text-white'>Inventory stock</p>
                    <p className='px-2 font-medium hover:bg-blue-500 hover:text-white'>Varient's title</p>
                </div>
                ) : ('')}
                </div>

                <div>
                    <button onClick={showTitle} className='w-[175px] flex rounded-lg p-2 border items-center justify-between'>
                        <span className=' ml-2 flex'>Is equal to </span>
                        <FaArrowDownUpAcrossLine />
                    </button>
                    {title ? (
                        <div className='w-[175px] bg-white space-y-2 border absolute py-2'>
                        <p className='px-2 font-medium hover:bg-blue-500 hover:text-white'> Title</p></div>
                    ) : ('')}
                </div>

                <div>
                    <input type="text" className='p-2 w-auto border rounded-lg' />
                </div>
            </div>
        </div>
   </section>
  )
}

export default CollectionCondition
