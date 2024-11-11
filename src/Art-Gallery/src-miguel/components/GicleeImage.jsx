import giclee_img from './giclee_img.webp'
import giclee_img_2 from './giclee_img_2.webp'
import giclee_img_3 from './giclee_img_3.webp'
import giclee_img_4 from './giclee_img_4.webp'

const GicleeImage = () => {
  return (
   <section>
        <div className='flex flex-col lg:flex-row lg:space-x-10 justify-center py-12 space-y-4 lg:space-y-0 p-4 md:p-0'>
            <div className='xl:w-1/5'>
                <img src={giclee_img} alt="" className='lg:h-[480px]'/>
                <p className='text-[22px] text-[#F6C934] list py-4'>[DL#007] Pinnacle Peak Landscape 02</p>
                <p className='text-[22px] text-[#F6C934] list'>From $ 95</p>
            </div>

            <div className='xl:w-1/5 '>
                <img src={giclee_img_2} alt="" className='lg:h-[480px] w-auto text-center'/>
                <p className='text-[22px] text-[#F6C934] list py-4'>[DL#028] Prickly Pear Cactus on Red BG</p>
                <p className='text-[22px] text-[#F6C934] list'>From $ 95</p>
            </div>

            <div className=' xl:w-1/5 '>
                <img src={giclee_img_3} alt="" className='lg:h-[480px] lg:w-[440px] w-auto'/>
                <p className='text-[22px] text-[#F6C934] list py-4'>[DL#009] Red & Blue Sunset</p>
                <p className='text-[22px] text-[#F6C934] list'>From $ 95</p>
            </div>

            <div className=' xl:w-1/5 '>
                <img src={giclee_img_4} alt="" className='lg:h-[480px] lg:w-[440px] w-auto'/>
                <p className='text-[22px] text-[#F6C934] list py-4'>[FO#004] White Flower Cactus</p>
                <p className='text-[22px] text-[#F6C934] list'>From $ 285</p>
            </div>
        </div>
   </section>
  )
}

export default GicleeImage
