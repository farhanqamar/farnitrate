import React from 'react'
import wholsale from '../images/wholesale.webp'
import PaintingsDistribution from '../components/PaintingsDistribution'
import WholesaleArtwork from '../components/WholesaleArtwork'
import InteriorDesign from '../components/InteriorDesign'
import ArtJourney from '../components/ArtJourney'
import ConsultingFAQ from '../components/ConsultingFAQ'
import ExploreProducts from '../components/ExploreProducts'
import "./Miguel.css"


const WholsalePrints = () => {
  return (
    <section>
        <div className='lg:space-y-32'>
          <div>
            <img src={wholsale} alt="" />
          </div>
          <div>
            <PaintingsDistribution />
          </div>
          <div>
            <WholesaleArtwork />
          </div>

          <div>
            <div className='lg:w-4/6 m-auto'>
          <div className='flex flex-col py-12 px-5'>
                <div className='text-white md:flex items-center m-auto py-5'>
                    <h1 className='text-[#F6C936] md:w-1/2 text-center text-3xl font-bold'>Art Delivered On Your Terms</h1>
                    <p className='md:w-1/2 text-left list'>We love challenges, especially when handling mass orders for wholesale art supplies for businesses. Be it a time-sensitive project or an expanded installation, we've got you covered! Even with the bulk order, we ensure to meet the deadlines, and you get your shipment on your doorstep right on time!</p>
                </div>

              <div className=' p-6'>
                <hr className='lg:w-full m-auto h-[2px] bg-white'/>
                </div>

                <div className='text-white md:flex items-center m-auto py-5'>
                    <h1 className='text-[#F6C936] md:w-1/2 text-center text-3xl font-bold'>Global Access, Local Presence</h1>
                    <p className='md:w-1/2 text-left list'>We are rooted in Arizona to serve our local clients, but boundaries do not bind our wings. We have clients all over the world. You can communicate with us online, over the phone, or in person at our gallery location about your art needs.</p>
                </div>
            </div>
          </div>
          </div>

          <div>
            <InteriorDesign />
          </div>

          <div>
            <ArtJourney />
          </div>

          <div className='py-20'>
            <ExploreProducts />
          </div>

          <div>
              <ConsultingFAQ />
          </div>

        </div>
    </section>
  )
}

export default WholsalePrints
