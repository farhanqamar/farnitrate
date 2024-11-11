import { Link } from 'react-router-dom'

const Affordable = () => {
  return (
    <section>
    <div>
        <div className='text-white text-center lg:w-1/2 xl:1/3 lg:m-auto space-y-6 py-12 px-6 lg:px-0'>
            <h1 className='lg:text-4xl text-2xl text-[#F6C936] font-bold'>Affordable, Exceptional, Excellent</h1>
            <p className='list'>The giclee print on canvas technique is doing wonders in the art world. You can now own a classic or modern reproduction of original art in various and custom sizes if the originals are sold out, don’t fit your space or out of your budget. The best part of all? No one is likely to tell the difference.</p><br />

            <p className='list'>To order your own customized prints, visit our art gallery in Cave Creek, Arizona, or order online!</p><br />
            
            <div className='w-auto'>
                   <Link to={'/contact'}>
                        <button className='text-[#f6c936] text-[18px] lg:text-[22px] btn'> See Our Latest Collection   
                        <hr className="w-auto h-[2px] bg-yellow-500 mt-2" />
                        </button>
                   </Link>

                </div>
        </div>
    </div>
</section>
  )
}

export default Affordable
