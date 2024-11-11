import  React,{ useState } from 'react'
import { FaArrowDownUpAcrossLine } from "react-icons/fa6";
// import tag_icon from '../assets/tag_icon.svg'

const CollectionProduct = () => {

  const[sorted, setSorted] = useState(false)
  const showSort = () => {
    setSorted(!sorted)
  }

  return (
    <section>
        <div>
          <div>
            <h1 className='text-base font-semibold p-1'>Products</h1>
          </div>

          <div className='flex space-x-2'>
            <input type="text" className='w-1/2 border rounded-lg p-2' placeholder='Search Product' />
            <button className='p-2 rounded-lg border'>Browse</button>
            <div>
              <button onClick={showSort} className='w-[225px] flex rounded-lg p-2 border items-center justify-between'>
                <span className='font-semibold ml-2 flex'>Sort :<p> Best Selling</p></span>
                <FaArrowDownUpAcrossLine />
              </button>
              {sorted ? (
                <div className='w-[225px] bg-white space-y-2 border absolute py-2'>
                <p className='px-2 font-medium hover:bg-blue-500 hover:text-white'>Product Title A-Z</p>
                <p className='px-2 font-medium hover:bg-blue-500 hover:text-white'>Product Title Z-A</p>
                <p className='px-2 font-medium hover:bg-blue-500 hover:text-white'>Highest Price</p>
                <p className='px-2 font-medium hover:bg-blue-500 hover:text-white'>Lowest Price</p>
                <p className='px-2 font-medium hover:bg-blue-500 hover:text-white'>Newest</p>
                <p className='px-2 font-medium hover:bg-blue-500 hover:text-white'>Oldest</p>
                <p className='px-2 font-medium hover:bg-blue-500 hover:text-white'>Manually</p>
              </div>
              ) : ('')}
            </div>
          </div>


          <div>
            <div className='w-[] py-10 text-center'>
              <img className='w-10 h-10 m-auto ' src="" alt="" />
              <p className='pt-4'>There are no products in this collection. <br />Search or browse to add products.</p>
            </div>
          </div>

            

            
        </div>
    </section>
  )
}

export default CollectionProduct
