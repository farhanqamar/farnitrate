import React from 'react'
import FreeArt from '../components/FreeArt'
import CorporateArt from '../components/CorporateArt'
import ArtCuration from '../components/ArtCuration'
// import CallUs from '../components/CallUs'
import ConsultingFAQ from '../components/ConsultingFAQ'
import { Link } from 'react-router-dom'
import "./Miguel.css"

const ArtConsultation = () => {
  return (
   <section>
        <div className='space-y-32 mt-20'>
            <h1 className='md:text-4xl text-2xl font-extrabold text-center'>Art Consultation in Arizona</h1>
            <div>
                <FreeArt />
            </div>
            <div>
                <ArtCuration />
            </div>

            <div>
            <div className='flex flex-col lg:flex-row py-12'>
                <div className='text-white lg:w-1/3 text-center m-auto space-y-6 '>
                    <h1 className='text-[#F6C936] md:text-3xl text-2xl font-bold'>Partner With Fine Art Advisor</h1>
                    <p className='list'>It can be challenging to decide which artwork looks best at your place, and oftentimes we need to get the right size. You don't want that, right? We neither. We want you to have a seamless experience with Miguel Camarena Art Gallery and get an ideal masterpiece for your place, be it home or office.</p>
                </div>

                <div className='hidden lg:block p-2'>
                <hr className='w-[2px] h-[200px] bg-white'/>
                </div>

                <div className='block lg:hidden p-6'>
                <hr className='w-auto h-[2px] bg-white'/>
                </div>

                <div className='text-white lg:w-1/3 text-center m-auto space-y-6'>
                    <h1 className='text-[#F6C936] text-2xl lg:text-3xl font-bold'>Collaborate With Experts</h1>
                    <p className='list'>When you take our art advisory services, we ensure to assign you an experienced and skilled art advisor who selects work tailored to your space, style, and preference.</p><br />
                    <p className='list'>Although there are many art consulting firms out there, no art advisory service provides such a competent facility as we do. That's our dedication, after all!</p>
                </div>
            </div>
            </div>
            <div>
                <CorporateArt />
            </div>
            {/* <div>
                <CallUs />
            </div> */}
            <div>
                <ConsultingFAQ />
            </div>
        </div>
   </section>
  )
}

export default ArtConsultation
