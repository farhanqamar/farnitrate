import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

const ArtJourney = () => {
  return (
    <section>
    <div>
        <div className='text-[#F6C936] px-5 text-center lg:w-1/3 m-auto space-y-12 '>
            <div>
            <h1 className='text-3xl font-bold'>Get Started on Your Art Journey</h1>
            <p className='list'>We are the leading fine art wholesalers dealing with originals and giclee prints. Our process is streamlined with the best possible experience for our clients. If you or your close ones are looking for custom canvas prints or bulk art prints, we are here to help!</p>
            </div>
           <Link to={'/contact'} className='py-12'>
           <button className='flex items-center text-[12px] bg-[#F6C936] text-black px-4 py-4 m-auto my-10 list'>CONTACT US FOR YOUR WHOLESALE ORDER
            <IoIosArrowForward size={24} className='ml-2'/>
            </button>
            </Link>
        </div>
    </div>
</section>
  )
}

export default ArtJourney
