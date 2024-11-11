import React,{ useState } from 'react'
import CollectionProduct from './CollectionProduct';
import CollectionCondition from './CollectionCondition';

const CollectionType = () => {
    const [checked, setChecked] = useState('manual'); 
    const handleCheckboxChange = (option:any) => {
      setChecked(option); 
    };

    const [collectionProduct, setCollectionProduct] = useState(false)
    const showCollectionProduct = () => {
      setCollectionProduct(!collectionProduct)
    }

  
  return (
   <section className='space-y-3'>
        <div className='space-y-3 bg-white border rounded-lg p-2'>
            <div className=''>
                <h1 className='text-base font-semibold p-1'>Collection Type</h1>
              </div>
            <div className="inline-flex items-start space-x-4">
              <input
                type="checkbox"
                className="rounded-full w-4 h-4 text-white appearance-none relative checked:bg-black/70 bg-gray-200 border-gray-300"
                checked={checked === 'manual'} 
                onChange={() => handleCheckboxChange('manual') } 
                
              />
              <span className="ml-2 text-gray-700 font-semibold">
                Manual
                <p>Add products to this collection one by one. Learn more about manual collections.</p>
              </span>
            </div>

            <div className="inline-flex items-start space-x-4">
              <input
                type="checkbox"
                className="rounded-full w-6 h-4 text-white appearance-none relative checked:bg-black/70 bg-gray-200 border-gray-300"
                checked={checked === 'automated'} 
                onChange={() => handleCheckboxChange('automated')} 
                onClick={showCollectionProduct}
              />
              <span className="ml-2 text-gray-700 font-semibold">
                Automated
                <p>Existing and future products that match the conditions you set will automatically be added to this collection. Learn more about automated collections.</p>
              </span>
            </div>
        </div>

          <div className='bg-white rounded-lg border p-2'>
            {checked === 'manual' ? (<CollectionProduct/>) : (<CollectionCondition/>)}
          </div>

   </section>
  )
}

export default CollectionType
