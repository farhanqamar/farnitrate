import { useState } from 'react';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

const AccordionCom = ({mainHeading, h1, sh1, h2, sh2, h3, sh3, h4, sh4}) => {
    const [open, setOpen] = useState(0);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);


    return (
        <>
            <div >
                <h3 className='md:text-3xl text-xl font-bold pt-10'>{mainHeading}</h3>
                <Accordion open={open === 1} icon={<Icon id={1} open={open} />} className='w-fit'>
                    <AccordionHeader onClick={() => handleOpen(1)} className='md:text-2xl btn pt-10 text-[#F6C934]'>
                        {h1}
                    </AccordionHeader>
                    <AccordionBody className='font-serif my-6 text-md text-[#fffff] tracking wide'>
                    {sh1}
                    </AccordionBody>
                    
                </Accordion>

                <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(2)} className='md:text-2xl btn pt-10 text-[#F6C934]'>
                        {h2}
                    </AccordionHeader>
                    <AccordionBody className='font-serif my-6 text-md text-[#fffff] tracking wide'>
                    {sh2}
                    </AccordionBody>
                    
                </Accordion>

                <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(3)} className='md:text-2xl btn pt-10 text-[#F6C934]'>
                    {h3}
                    </AccordionHeader>
                    <AccordionBody className='font-serif my-6 text-md text-[#fffff] tracking wide'>
                    {sh3}
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(4)} className='md:text-2xl btn pt-10 text-[#F6C934]'>
                    {h4}
                    </AccordionHeader>
                    <AccordionBody className='font-serif my-6 text-md text-[#fffff] tracking wide'>
                    {sh4}
                    </AccordionBody>
                </Accordion>
            </div>
        </>
    )
}

export default AccordionCom