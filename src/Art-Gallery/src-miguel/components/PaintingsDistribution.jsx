import { Link } from 'react-router-dom';

const PaintingsDistribution = () => {
  return (
    <section>
    <div>
        <div className='text-white text-center lg:w-1/2 xl:1/3 lg:m-auto space-y-6 py-12 px-6 lg:px-0'>
            <h1 className='text-4xl text-[#F6C936] font-bold'>Wholesale Canvas Paintings Distribution</h1>
            <p className='list'>We distribute wholesale prints to hotels, galleries, designers, art consultants, and more in Cave Creek, Arizona and
            worldwide. We are set up for large-scale and short lead times to meet your art needs.</p>

        
            
            <div className='w-auto'>
                   <Link to={'/collection'}>
                        <button className='text-[#f6c936] btn'> Join Our Wholesale Art Distribution Network Today  
                        <hr className="w-auto h-[2px] bg-yellow-500 mt-2" />
                        </button>
                   </Link>

                </div>
        </div>
    </div>
</section>
  )
}

export default PaintingsDistribution
