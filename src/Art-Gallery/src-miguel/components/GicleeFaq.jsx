import { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";


const GicleeFaq = () => {
    const[first, setFirst] = useState(false)
    const[second, setSecond] = useState(false)
  return (
    <section>
        <div className='text-[#F6C936] lg:w-2/5 lg:m-auto space-y-10 py-12 px-6 lg:px-0'>
                <div>
                    <h1 className='text-[22px] lg:text-3xl  font-bold'>Frequently Asked Questions</h1>
                </div>
                <div className='border-b-2 py-4'>
                    <h1 onClick={() =>setFirst(!first)} className='flex list items-center justify-between text-base sm:text-2xl font-bold'>Are your giclee prints reproduced on canvas or paper?
                    <IoIosArrowDown />
                    </h1>
                    {first && (
                        <div className='py-4'>
                        <p className='text-white list'>All of our giclee prints are reproduced on high-quality museum-grade real canvas, the same type of canvas any original painting by Miguel Camarena is painted on.</p>
                        </div>
                    )}
                </div>

                <div className='border-b-2 py-4'>
                    <h1 onClick={() =>setSecond(!second)} className='flex list items-center justify-between text-base sm:text-2xl font-bold'>What is an archival print?
                    <IoIosArrowDown />
                    </h1>
                    {second && (
                        <div className='py-4'>
                        <p className='text-white list'>Archival prints are museum-quality pieces that use fine pigment particles to create stunning, high-resolution final artwork. As the name says, this printing process creates artwork meant to last a long time.</p>
                        </div>
                    )}
            </div>
        </div>
    </section>
  )
}

export default GicleeFaq
