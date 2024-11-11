import free_art from './free_art.webp'

const FreeArt = () => {
  return (
    <section>
    <div className='flex flex-row-reverse items-center '>
        <div className='w-full'>
            <img src={free_art} alt="" className='w-[100%]'/>
        </div>

        <div className='hidden lg:block'>
        <div className='flex justify-center  m-auto'>
           <div className='px-12 space-y-10 text-white'>
           <h1 className='text-[#F6C936] text-3xl font-bold'>Get Free Art Consulting In Arizona</h1>
            <p className='text-lg list'>Our team of corporate art advisors at Miguel Camarena offers free consultations for your art requirements by visiting your place to suggest what fits best at your place. We also take the dimensions of the space and customize a canvas accordingly.</p>
            <p className='text-lg list'>Get FREE Art Consultation Now. Call Us (480) 595-2671</p>
          
           </div>
        </div>
        </div>
    </div>
</section>  
  )
}

export default FreeArt
