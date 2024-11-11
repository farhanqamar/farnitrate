import frames from './frames.jpg';


const WholesaleArtwork = () => {
  return (
    <section>
      <div className='flex items-center justify-between flex-row-reverse'>
        <div className='w-full lg:w-1/2'>
          <img src={frames} alt="" className='w-[100%]' />
        </div>

        <div className='hidden w-1/2 lg:block'>
          <div className='flex justify-center m-auto'>
            <div className=' px-12 space-y-10 text-white'>
              <h1 className='text-[#F6C936] text-3xl font-bold'>Wholesale Artwork Distributor Of 30 Years</h1>
              <p className='text- list'>Your space is precious; therefore, how you decorate and decorate that space should be a smooth and enjoyable process. Therefore, work with one of the best wholesale artwork distributors.
                For over two decades, Miguel Camarena Art Gallery has been in the art world dealing with the wholesale distribution of canvas wall art. We deal with bulk paintings and prints of our original artwork created by Miguel Camarena himself. Our collections provide an impeccable selection of paintings for todays home décor, capable of addressing a wide range of requirements.</p>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WholesaleArtwork
