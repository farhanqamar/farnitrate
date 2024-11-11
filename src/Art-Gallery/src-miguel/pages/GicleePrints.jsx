import React from 'react'
import GicleeImage from '../components/GicleeImage'
import HandPrints from '../components/HandPrints'
import FavoritePainting from '../components/FavoritePainting'
import CustomGiclee from '../components/CustomGiclee'
import Affordable from '../components/Affordable'
import GicleeFaq from '../components/GicleeFaq'
import "./Miguel.css"

const GicleePrints = () => {
  return (
   <section className=''>
        <div className='space-y-12'>
            <div className='text-white text-center lg:w-2/5 m-auto py-12 p-6'>
                <h1 className='text-[#F6C936] py-8 lg:text-[40px] font-extrabold'>Exclusive High-Quality Giclee Prints
                In Arizona</h1>

                <p className='text-[16px] list'>We present affordable, high-quality, original-like prints on canvas for art lovers looking for
                more economical alternatives to original paintings.</p> <br />

                <p className='text-[16px] list'>These prints, often called giclee prints, faithfully replicate the essence of the original art to the extent that
                    differentiation becomes challenging. Utilizing our in-house digitization and printing processes in
                    Cave Creek, Arizona, we produce these prints to your specifications,ensuring exceptional quality.</p>
            </div>

            <div>
                <GicleeImage />
            </div>

            <div>
                <HandPrints />
            </div>

            <div className='flex flex-col lg:flex-row py-12 px-5'>
                <div className='text-white lg:w-1/3 text-center m-auto space-y-6 '>
                    <h1 className='text-[#F6C936] md:text-3xl font-bold'>An Affordable Yet Lucrative Option</h1>
                    <p  className='text-[18px] list'>What could the cost of giclee printing be? Many people wonder. You're not alone. We all wish to own a stunning piece of art and display it proudly on our living room walls, but budgets break our hearts. Not to worry anymore! Giclee prints on canvas are now becoming everyone's go-to option for owning a replica of the original artwork.</p>
                </div>

                <div className='hidden lg:block p-2'>
                <hr className='w-[2px] h-[200px] bg-white'/>
                </div>

                <div className='block lg:hidden p-6'>
                <hr className='w-auto h-[2px] bg-white'/>
                </div>

                <div className='text-white lg:w-1/3 text-center m-auto space-y-6'>
                    <h1 className='text-[#F6C936] md:text-3xl font-bold'>An Affordable Yet Lucrative Option</h1>
                    <p  className='text-[18px] list'>What could the cost of giclee printing be? Many people wonder. You're not alone. We all wish to own a stunning piece of art and display it proudly on our living room walls, but budgets break our hearts. Not to worry anymore! Giclee prints on canvas are now becoming everyone's go-to option for owning a replica of the original artwork.</p>
                </div>
            </div>

            <div>
                <FavoritePainting />
            </div>

            <div>
                <CustomGiclee />
            </div>

            <div>
                <Affordable />
            </div>

            <div>
                <GicleeFaq />
            </div>
        </div>
   </section>
  )
}

export default GicleePrints
