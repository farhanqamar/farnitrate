import hand_prints from './hand_prints.webp'
import { Link } from 'react-router-dom'

const HandPrints = () => {
  return (
    <section>
        <div className='flex items-center w-full'>
            <div className='md:w-1/2'>
                <img src={hand_prints} alt="" className='md:w-[100%]'/>
            </div>

            <div className='hidden w-1/2 pl-12 lg:block'>
            <div className='flex justify-center  m-auto'>
               <div className='px-12 space-y-10 text-white'>
               <h1 className='text-[#F6C936] text-3xl font-bold'>Hand Embellished Giclee Prints</h1>
                <p className='text-lg list'>Hand-embellished is a unique method of enhancing already produced giclée prints. By hand, Miguel Camarena adds more details and colors to make each print unique. Its similar to adding a personal touch to a print to make it appear more like a genuine work of art. This can be an ideal choice when you need customization on Giclee prints in Arizona.</p>
                <div className='w-auto'>
                   <Link to={'/contact'}>
                        <button className='text-[#f6c936] btn'> Shop Affordable Print On Canvas Today!
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

export default HandPrints
