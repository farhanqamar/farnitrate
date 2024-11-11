import React, { ReactNode } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { LuCircleDashed } from "react-icons/lu";
import { Link } from 'react-router-dom';
import "./Dashboard.css";
import clouth from "../../../public/clouth.jpg";


const Home = () => {
  return (
    <section className='flex flex-col items-center py-5 sm:px-4'>
      <div>
        <div className='px-4'>
          <h1 className='text-2xl text-black font-semibold'>Get ready to sell</h1>
          <p className='font-medium text-black/60'>Here's a guide a get started. As your business grows, you'll get fresh tips and insights here.</p>
        </div>
        <div className='pt-5'>
          <AddProductCard />
        </div>
        <div className='pt-5'>
          <PointofSale
            heading='Set up Point of sale'
            discription="Because you're interested in selling in person."
            completedOrder={0}
            totalOrder={`/ ${2} completed`}
          />
        </div>
        <div className='pt-5'>
          <PointofSale
            heading='Get inspired to launch your business'
            discription="Browsing existing shopify stores to inspire your own approach to bulding a brand and launching a business that stands out."
            totalOrder="View examples"
            image={<img src={clouth} alt="" className='w-24 h-24' />}
          />
        </div>
      </div>
    </section>
  )
}

const AddProductCard = () => {
  return (
    <>
      <div className='bg-[#FFFFFF] p-4 sm:rounded-lg'>
        <div >
          <PointofSale
            heading='Get ready to sell'
            discription="Here's a guide a get started. As your business grows, you'll get fresh tips and insights here."
            completedOrder={0}
            totalOrder={`/ ${6} completed`}
          />
        </div>
        <AddProductBox
          heading='Add your first Product'
          discription={`Write a description, add photos, and set pricing for the products you plan to sell.`}
          image={clouth}
          addButton={`Add product`}
          secondButton={`Import products`}
        />
        <AddProductBox
          heading='Add a custom domain'
          discription={`Write a description, add photos, and set pricing for the products you plan to sell.`}
          image={clouth}
          addButton={`Generate custom themes`}
          secondButton={`Brows premade themes`}
        />
        <AddProductBox
          heading='Customize your online store'
          discription={`Write a description, add photos, and set pricing for the products you plan to sell.`}
          image={clouth}
          addButton={`Add domain`}
        />
        <AddProductBox
          heading='Set your shipping rates'
          discription={`Write a description, add photos, and set pricing for the products you plan to sell.`}
          image={clouth}
          addButton={`Set shipping rates`}
        />
        <AddProductBox
          heading='Set up a payment provider'
          discription={`Write a description, add photos, and set pricing for the products you plan to sell.`}
          image={clouth}
          addButton={`Set up Payments`}
        />
        <AddProductBox
          heading='Place a test order'
          discription={`Write a description, add photos, and set pricing for the products you plan to sell.`}
          image={clouth}
          addButton={`Learn about test orders`}
        />
      </div>
    </>
  )
}

interface AddProductBoxPropse {
  heading: string,
  discription: string,
  image?: string,
  addButton: string,
  secondButton?: string
}

const AddProductBox = ({ heading, discription, image, addButton,secondButton }: AddProductBoxPropse) => {
  return (
    <>
      <Accordion slotProps={{ heading: { component: 'h4' } }}>
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
          className='mb-2 font-semibold text-lg text-black'
        >
          <span className='pr-2 relative top-1'><LuCircleDashed /></span>
          {heading}
        </AccordionSummary>
        <AccordionDetails>
          <div className='flex bg-[#F3F3F3]  p-1 sm:p-4 rounded-lg '>
            <div className='w-[2%] '>
              <input type="checkbox" />
            </div>
            <div className='sm:w-[64%] sm:px-4 flex flex-col gap-4'>
              <div className='px-3'>
                <h2 className='mb-2 font-semibold text-lg text-black'>{heading}</h2>
                <p className='font-semibold text-black/60'>{discription} <span className='text-[#4C8BDE]'><a href="#">Learn more</a></span></p>
              </div>
              <div className='font-medium text-sm p-1 space-x-2'>
                <Link to={'/admin/order'}><button className='bg-black rounded-lg text-white px-3 py-1 text-sm'>{addButton}</button></Link>
                <button className='px-2 py-1 text-sm rounded-lg text-black/70 text-black '>{secondButton}</button>
              </div>
            </div>
            <div className='hidden sm:block w-[34%] sm:px-4 justify-end items-center'>
              <img src={`${image}`} alt="Sample Image" className='w-24 h-24' />
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  )
}

interface PointofSaleProps {
  heading: string
  discription: string | ReactNode
  totalOrder?: number | string
  completedOrder?: number
  image?: ReactNode
}

const PointofSale = ({ heading, discription, totalOrder, completedOrder, image }: PointofSaleProps) => {
  return (
    <>
      <div className='bg-[#FFFFFF] p-4 sm:rounded-lg flex'>
        <div className='sm:w-3/4'>
          <div >
            <h3 className='text-xl font-semibold text-black'>{heading}</h3>
            <p className='font-medium text-black/60'>{discription}</p>
          </div>
          <div>
            <button className='border border-black-100/10 rounded-lg px-2 py-[2px]'>{completedOrder} {totalOrder}</button>
          </div>
        </div>
        <div className='hidden sm:block'>
          {image}
        </div>
      </div>
    </>
  )
}

export default Home;