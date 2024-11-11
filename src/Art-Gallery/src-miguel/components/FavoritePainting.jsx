import { Link } from 'react-router-dom'

const FavoritePainting = () => {
  return (
    <section>
        <div className='lg:w-1/2 m-auto space-y-6 text-white py-12 px-8 lg:px-0'>
                <h1 className='text-lg sm:text-2xl lg:text-5xl font-bold text-[#f6c936]'>Your Favorite Painting is Sold Out? No worries</h1>
                <div className=''>
                    <p className='list text-[18px]'>What if we sell out quickly before all art lovers can own a piece? So, Miguel began creating prints from his original paintings. Voila! All his original paintings have now been transformed into digital designs that can be printed on canvas with genuine-like quality and detailing. </p> <br />

                    <p className='list text-[18px]'>Transform Your Walls with Giclee Canvas Art.</p> <br />

                </div>
                <div className='w-auto'>
                   <Link to={'/printoncanvas'}>
                        <button className='text-[#f6c936] btn text-[20px]'> Shop Now!
                        <hr className="w-auto h-[2px] bg-yellow-500 mt-2" />
                        </button>
                   </Link>

                </div>
            </div>
    </section>
  )
}

export default FavoritePainting
