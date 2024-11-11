import { useState, useRef, useEffect } from 'react';
import { LuPlusCircle } from "react-icons/lu";
import { MdArrowBack } from "react-icons/md";
import { Link } from 'react-router-dom';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { countryCodes } from '../Components/AddProductsComponents/CountryCodeInput';
import React from 'react';
import "./Dashboard.css";



export const productCategories = [
  { name: 'Electronics', code: 'ELEC' },
  { name: 'Fashion', code: 'FASH' },
  { name: 'Home & Kitchen', code: 'HOME' },
  { name: 'Beauty & Personal Care', code: 'BEAUTY' },
  { name: 'Sports & Outdoors', code: 'SPORTS' },
  { name: 'Toys & Games', code: 'TOYS' },
  { name: 'Automotive', code: 'AUTO' },
  { name: 'Books', code: 'BOOKS' },
  { name: 'Health & Wellness', code: 'HEALTH' },
  { name: 'Baby Products', code: 'BABY' },
  { name: 'Office Supplies', code: 'OFFICE' },
  { name: 'Music Instruments', code: 'MUSIC' },
  { name: 'Pet Supplies', code: 'PET' },
  { name: 'Groceries', code: 'GROC' },
  { name: 'Jewelry & Watches', code: 'JEWEL' },
  { name: 'Furniture', code: 'FURN' },
  { name: 'Stationery', code: 'STAT' },
  { name: 'Garden & Outdoor', code: 'GARDEN' },
  { name: 'Video Games', code: 'VIDEO' },
  { name: 'Computers & Accessories', code: 'COMP' },
];

const NewProduct = () => {
  const [selectedCod, setSelectedCod] = useState('');
  const [showDropdon, setShowDropdon] = useState(false);

  const handleSelectCod = (code: string) => {
    setSelectedCod(code);
    setShowDropdon(false);
  };
  const handleSelectName = (name: string) => {
    setSelectedCod(name);
    setShowDropdon(false);
  };

  
  const [isCheckd, setIsCheckd] = useState(true);

  const handleCheckboxChang = () => {
    setIsCheckd(!isCheckd);
  };


  const [isChecked, setIsChecked] = useState(true);
  const[barCode, setBarCode] = useState(false)

  const openBarCode = () => {
    setBarCode(!barCode)
  }
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const [selectedCode, setSelectedCode] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSelectCode = (code: string) => {
    setSelectedCode(code);
    setShowDropdown(false);
  };

  const editorRef = useRef<HTMLDivElement | null>(null);
  const toolbarRef = useRef<HTMLDivElement | null>(null);
  const quillInstance = useRef<Quill | null>(null); 

  useEffect(() => {
    if (editorRef.current && toolbarRef.current && !quillInstance.current) {
      const toolbarOptions = [
        [{ 'header': [1, 2, 3, false] }],
        ['bold', 'italic', 'underline'],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'align': [] }],
        ['blockquote', 'code-block'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'indent': '-1' }, { 'indent': '+1' }],
        ['image', 'video'],
        ['clean']
      ]; // This was missing a closing bracket and semicolon.
  
      quillInstance.current = new Quill(editorRef.current, {
        theme: 'snow',
        modules: { toolbar: toolbarRef.current } // Updated toolbar reference to toolbarOptions
      });
    }
  
    return () => {
      if (quillInstance.current) {
        quillInstance.current = null;
      }
    };
  }, []);
  

  const [shipping, setShipping] = useState(false)
  return (
    <>
    <section className="sm:px-5 pb-24">
      <div className='flex justify-center lg:flex-row flex-col py-5'>
        <div className='flex items-center w-3/4'>
          <Link to={'/admin/order'}> <span className='hover:bg-[#D4D4D4]'><MdArrowBack className='text-xl' /></span> </Link>
          <h1 className="text-lg font-bold p-2 text-black">Add Order</h1>
        </div>
      </div>

      <div className='flex flex-col xl:flex-row justify-center gap-4'>
        <div className="w-full xl:w-2/5 space-y-4 m-auto md:m-0">
          <div className="bg-white shadow-lg sm:rounded-lg px-2 py-4 border">
            <div>
              <div className="p-4 rounded-lg space-y-4">
                <div className="flex flex-col space-y-2">
                  <label className='font-semibold' htmlFor="title">Title</label>
                  <input
                    type="text"
                    className="p-2 border border-black rounded-lg"
                  />
                </div>

                <div>
                <section>
                    <div className="h-auto rounded-lg shadow-md">
                    <div ref={toolbarRef} id="toolbar" className='rounded-t-lg'>
                      <span className="ql-formats">
                        <select className="ql-header">
                          <option value="1"></option>
                          <option value="2"></option>
                          <option selected></option>
                        </select>
                        <button className="ql-bold"></button>
                        <button className="ql-italic"></button>
                        <button className="ql-underline"></button>
                      </span>
                      <span className="ql-formats">
                        <select className="ql-color"></select>
                        <select className="ql-background"></select>
                      </span>
                      <span className="ql-formats">
                        <button className="ql-list" value="ordered"></button>
                        <button className="ql-list" value="bullet"></button>
                        <button className="ql-indent" value="-1"></button>
                        <button className="ql-indent" value="+1"></button>
                      </span>
                      <span className="ql-formats">
                        <button className="ql-blockquote"></button>
                        <button className="ql-code-block"></button>
                      </span>
                      <span className="ql-formats">
                        <button className="ql-image"></button>
                        <button className="ql-video"></button>
                        <button className="ql-clean"></button>
                      </span>
                    </div>
                    <div ref={editorRef} className="h-auto rounded-b-lg"></div>
                  </div>
                    </section>
                </div>
              </div>
            </div>
            <div className='px-4 '>
              <h1 className="text-base font-semibold py-1 text-black">Media</h1>
              <div className="py-2 px-0 rounded-lg border border-dashed border-black text-center">
                <input type="file" className="py-6 px-5" />
              </div>
              <div className='py-3'>
                <label className="font-semibold py-1" htmlFor="category">
                  Category
                </label>
                <div className=" space-x-2 w-full">
                      <section>
                            <div>
                            <div className=' border-black relative w-auto'>
                          
                          <input
                            type="text"
                            value={selectedCode}
                            onClick={() => setShowDropdown(!showDropdown)}
                            readOnly
                            placeholder="Product"
                            className='w-full p-2 border border-black rounded-lg'
                            />
                          {showDropdown && (
                            <div
                              style={{
                                position: 'absolute',
                                top: '100%',
                                left: 0,
                                width: '100%',
                                maxHeight: '200px',
                                overflowY: 'auto',
                                border: '1px solid #ccc',
                                backgroundColor: '#fff',
                                zIndex: 1,
                              }}
                            >
                              {productCategories.map((country, index) => (
                                <div
                                  key={index}
                                  onClick={() => handleSelectCode(country.code)}
                                  className='p-2 border-b cursor-pointer'
                                >
                                  {country.code}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                            </div>
                      </section>


                </div>
                <p className='text-sm'>
                  Determines tax rates and adds metafields to improve search,
                  filters, and cross-channel sales.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg space-y-3 lg:space-y-0 sm:rounded-lg px-4 py-2 border">
            <div className="border-b py-2">
              <h1 className="font-bold text-base pb-2 text-black">Pricing</h1>

              <div className="flex xl:flex-row flex-col gap-2 overflow-x-hidden">
                <div className="flex flex-col">
                  <label htmlFor="price">Price</label>
                  <input
                    type="text"
                    placeholder="Rs 0.00"
                    className="border border-black rounded-md p-1 w-auto"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="comparePrice">Compare-at price</label>
                  <input
                    type="text"
                    placeholder="Rs 0.00"
                    className="border border-black rounded-md p-1 w-auto"
                  />
                </div>
              </div>

              <div className="flex items-center mt-4">
                <input type="checkbox" id="chargeTax" />
                <label htmlFor="chargeTax" className="ml-2">
                  Charge tax on this product
                </label>
              </div>
            </div>

            <div className="flex 2xl:flex-row flex-col gap-4 py-4 overflow-x-hidden">
              <div className="flex flex-col">
                <label htmlFor="cost">Cost Per Item</label>
                <input
                  type="text"
                  placeholder="Rs 0.00"
                  className="border border-black rounded-md p-1 w-auto"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="profit">Profit</label>
                <input
                  type="text"
                  placeholder="--"
                  className="border border-black rounded-md p-1 w-auto"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="margin">Margin</label>
                <input
                  type="text"
                  placeholder="--"
                  className="border border-black rounded-md p-1 w-auto"
                />
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg py-4 sm:rounded-lg border">
                  <section>
                        <div className='bg-white rounded-xl px-4 space-y-2' >
                          <h1 className='font-bold text-base text-black'>Inventory</h1>
                          <div className='border-b space-y-2'>
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={handleCheckboxChange}
                              id="toggleCheckbox"
                            />
                              <label htmlFor="toggleCheckbox" style={{ marginLeft: '8px' }}>
                                Quality Track
                              </label>
                            <div className=''>
                              <h1 className='font-bold text-black'>Quality</h1>
                            </div>
                          </div>
                          

                          {isChecked && (
                            <div className='flex space-x-2'>
                              <input
                                type="checkbox"
                              />
                              <label htmlFor="">Continue selling when out of stock</label>
                            </div>
                          )}

                          <div className="flex items-center space-x-2 mt-4">
                              <input type="checkbox" id="sku" onClick={openBarCode}/>
                              <label htmlFor="sku">This product has a SKU or barcode</label>
                            </div>

                            {barCode && (
                              <div className='flex gap-4'>
                                <div className='flex flex-col py-2 w-full'>
                                <label htmlFor="">SKU (Stock Keeping Unit)</label>
                                <input type="text" className='border border-black p-1 rounded-lg w-full'/>
                                </div>
                                <div className='flex flex-col py-2 w-full'>
                                <label htmlFor="">Barcode (ISBN, UPC, GTIN, etc.)</label>
                                <input type="text" className='border border-black p-1 rounded-lg w-full'/>
                                </div>
                              </div>
                            )}
                        </div>


                  </section>
          </div>

          <div className="bg-white shadow-lg p-3 sm:rounded-lg border">
                <section>
                  <div className='bg-white rounded-lg py-4 space-y-4'>
                    <h1 className='font-bold text-base text-black'>Shipping</h1>

                    <div className='space-y-2'>
                      <input
                        type="checkbox"
                        checked={isCheckd}
                        onChange={handleCheckboxChang}
                        id="toggleCheckbox"
                        className='mr-2'
                      />
                      <label htmlFor="toggleCheckbox">
                        This is a Physical Product
                      </label>
                    </div>

                    {isCheckd && (
                      <div className='space-y-4'>
                        <div className='flex flex-col space-y-2'>
                          <label htmlFor="">Weight</label>
                          <input
                            type="text"
                            placeholder='0.0'
                            className="w-[200px] p-2 border border-black rounded-md"
                          />
                        </div>
                        <p className='text-sm'>
                          Customers won’t enter shipping details at checkout. Learn how to set up your store for digital products or services.
                        </p>
                      </div>
                    )}
                  </div>
                </section>

            <div className='border-t flex text-center py-4 space-x-2'>
              <LuPlusCircle onClick={() => setShipping(!shipping)} className='my-0.5 font-bold' />
              <p className='font-semibold text-sm'>Add Customs information</p>

            </div>

            {shipping && (
               <div className=' w-full relative space-y-4'>

               <input
                 type="text"
                 value={selectedCod}
                 onClick={() => setShowDropdon(!showDropdon)}
                 readOnly
                 placeholder="Pakistan"
                 className='w-full p-2 border border-black rounded-lg'
               />
               
               <div className='flex flex-col w-full py-2'>
                   <label htmlFor="">Harmonized System (HS) Code</label>
                   <input type="text" placeholder='Search By Product KeyWord Or Code' className='w-full p-2 border border-black rounded-lg'/>
               </div>
         
               {showDropdon && (
                 <div
                   style={{
                     position: 'absolute',
                     top: '25px',
                     left: 0,
                     width: '100%',
                     maxHeight: '200px',
                     overflowY: 'auto',
                     border: '1px solid #ccc',
                     backgroundColor: '#fff',
                     zIndex: 1,
                   }}
                 >
                   {countryCodes.map((country, index) => (
                     <div
                       key={index}
                       onClick={() => handleSelectName(country.name)}
                       style={{ width: '100%', padding: '8px', cursor: 'pointer', borderBottom: '1px solid #ddd' }}
                     >
                       {country.name}
                     </div>
                   ))}
                 </div>
               )}
             </div>
            )}
          </div>

          <div className="space-y-4 bg-white shadow-lg p-3 sm:rounded-lg border">
            <h1 className='font-bold text-black'>Search engine listing</h1>
            <p>
              Add a title and description to see how this product might appear in
              a search engine listing.
            </p>

            <div className="flex flex-col space-y-2">
              <label htmlFor="pageTitle">Page Title</label>
              <input
                type="text"
                className="p-1 border border-black rounded-md"
              />
              <p>0-70 characters used</p>
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="metaDescription">Meta Description</label>
              <textarea
                rows={4}
                className="p-1 border border-black rounded-md"
              />
              <p>0-320 characters used</p>
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="urlHandle">URL Handle</label>
              <input
                type="text"
                className="p-1 border border-black rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="w-full xl:w-1/3 space-y-4 m-auto md:m-0">
        

          <div className="bg-white shadow-lg p-4 sm:rounded-lg border space-y-2">
            <h1 className='font-bold text-black'>Product Organization</h1>
            <div className="flex flex-col space-y-2">
              <label htmlFor="productType">Product type</label>
              <input
                type="text"
                className="border border-black p-1 rounded-md"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="vendor">Vendor</label>
              <input
                type="text"
                className="border border-black p-1 rounded-md"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="collection">Collection</label>
              <input
                type="text"
                className="border border-black p-1 rounded-md"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="tag">Tag</label>
              <input
                type="text"
                className="border border-black p-1 rounded-md"
              />
            </div>
          </div>

          <div className='flex justify-end'>
            <button className='px-4 py-2 rounded-lg bg-black text-white'>Save</button>
          </div>
        </div>

      </div>
    </section></>
  );
};

export default NewProduct;