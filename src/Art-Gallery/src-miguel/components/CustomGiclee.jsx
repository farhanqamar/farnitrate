import { Link } from 'react-router-dom'
// import custom_giclee from '../assets/custom_giclee.webp'
import custom_giclee from './custom_giclee.webp'

const CustomGiclee = () => {
  return (
    
    <section>
        <div className='flex items-center justify-between flex-row-reverse'>
            <div className='w-full'>
                <img src={custom_giclee} alt="" className='w-[100%]'/>
            </div>

           <div className='hidden lg:block'>
           <div className='flex justify-center m-auto'>
               <div className=' px-12 space-y-10 text-white'>
               <h1 className='text-[#F6C936] text-3xl font-bold'>Custom Giclee Prints? Sure!</h1>
                <p className='text-lg list'>Your choice and preference can differ from ours, and we respect that. Customization is our specialty, and our Unique Selling Point is to provide satisfied customer service to our clients. Be it printing on a particular canvas size or making some amendments to the design, we do it all!</p>
                <div className='w-auto'>
                   <Link to={'/contact'}>
                        <button className='text-[#f6c936] btn'> Shop all
                        <hr className="w-auto h-[2px] bg-yellow-500 mt-2" />
                        </button>
                   </Link>

                </div>
               </div>
            </div>
           </div>
        </div>
   </section>
  
  )
}

export default CustomGiclee
