import original_art_for_sale from './original_art_for_sale.webp';



const MigualTeam = () => {
  return (
   <section>
        <div className='flex items-center '>
            <div className='w-full'>
                <img src={original_art_for_sale} alt="" className='w-[100%]'/>
            </div>

           <div className='hidden lg:block'>
           <div className='flex justify-center m-auto'>
               <div className='px-12 space-y-10'>
               <h1 className='text-[#F6C936] text-3xl font-bold'>Miguel Camarena And His World-Class Team!</h1>
                <p className='text-lg list text-[18px]'>We take full pride in sharing that our clientele is diversified around the globe, and were known for delivering positive experiences to our clients. Our team works 24/7 to ensure your shipments safe and secure delivery and that you get what you hoped for.</p>
                <p className='list text-[18px]'>Your space needs an artistic makeover. Miguels art is an ideal option!</p>
               </div>
            </div>
           </div>
        </div>
   </section>
  )
}

export default MigualTeam
