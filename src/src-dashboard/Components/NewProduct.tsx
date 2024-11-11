import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { LuPlusCircle } from "react-icons/lu";
import { MdArrowBack } from "react-icons/md";
import React from 'react';
import { countryCodes } from './AddProductsComponents/CountryCodeInput';


const styles = {
  h1:{
    color: 'black',
  },
  h2:{
    color: 'black',
  },
  p:{
    color: 'black',
  },
};

const TrackQuantity = () => {
  const [isChecked, setIsChecked] = useState(true);
  const [barCode, setBarCode] = useState(false);

  const openBarCode = () => {
    setBarCode(!barCode);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <section>
      <div  className="bg-white rounded-xl px-4 space-y-2">
        <h1 style={styles.h1} className="font-bold text-base">Inventory</h1>
        <div className="border-b space-y-2">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            id="toggleCheckbox"
          />
          <label htmlFor="toggleCheckbox" style={{ marginLeft: '8px' }}>
            Track Quantity
          </label>
          <div>
            <h1 style={styles.h1} className="font-bold">Quantity</h1>
          </div>
        </div>

        {isChecked && (
          <div className="flex space-x-2">
            <input type="checkbox" />
            <label htmlFor="">Continue selling when out of stock</label>
          </div>
        )}

        <div className="flex items-center space-x-2 mt-4">
          <input type="checkbox" id="sku" onClick={openBarCode} />
          <label htmlFor="sku">This product has a SKU or barcode</label>
        </div>

        {barCode && (
          <div className="flex gap-4">
            <div className="flex flex-col py-2 w-full">
              <label htmlFor="sku-input">SKU (Stock Keeping Unit)</label>
              <input
                type="text"
                id="sku-input"
                className="border border-black p-1 rounded-lg w-full"
                placeholder="Enter SKU"
              />
            </div>
            <div className="flex flex-col py-2 w-full">
              <label htmlFor="barcode-input">Barcode (ISBN, UPC, GTIN, etc.)</label>
              <input
                type="text"
                id="barcode-input"
                className="border border-black p-1 rounded-lg w-full"
                placeholder="Enter barcode"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
interface ShippingProps {
  onWeightChange: string;
  onWeightUnitChange: (categoryId: string) => void;
}

const Shipping = ({ onWeightChange, onWeightUnitChange }) => {
  const [isChecked, setIsChecked] = useState(true);
  const [weight, setWeight] = useState("0.0");
  const [weightUnit, setWeightUnit] = useState("kg");

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleWeightChange = (event) => {
    const value = event.target.value;
    setWeight(value);
    onWeightChange(value);
  };

  const handleWeightUnitChange = (event) => {
    const unit = event.target.value;
    setWeightUnit(unit);
    onWeightUnitChange(unit);
  };

  return (
    <section>
      <div className='bg-white rounded-lg py-4 space-y-4'>
        <h1 style={styles.h1} className='font-bold text-base'>Shipping</h1>

        <div className='space-y-2'>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            id="toggleCheckbox"
            className='mr-2'
          />
          <label htmlFor="toggleCheckbox">
            This is a Physical Product
          </label>
        </div>

        {isChecked && (
          <div className='space-y-4'>
            <div className='flex items-center space-x-2'>
              <div className='flex flex-col'>
                <label htmlFor="">Weight</label>
                <input
                  type="text"
                  value={weight}
                  onChange={handleWeightChange}
                  placeholder='0.0'
                  className="w-[170px] p-2 border border-black rounded-md"
                />
              </div>
              <div className='flex flex-col'>
                <label htmlFor="">Weight Unit</label>
                <select
                  value={weightUnit}
                  onChange={handleWeightUnitChange}
                  className="w-[170px] p-2 border border-black rounded-md"
                >
                  <option value="kg">kg</option>
                  <option value="g">g</option>
                  <option value="lb">lb</option>
                  <option value="oz">oz</option>
                  <option value="ton">ton</option>
                  <option value="mg">mg</option>
                  <option value="st">st</option>
                  <option value="cwt">cwt</option>
                </select>
              </div>
            </div>
            <p className='text-sm'>
              Customers wont enter shipping details at checkout. Learn how to set up your store for digital products or services.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

type DropdownItem = {
  id: string;
  label: string;
};
type StatusProps = {
  onStatusChange: (newStatus: string) => void; 
};

const Status = ({ onStatusChange }) => {
  const [inputValue, setInputValue] = useState<string>("Active");
  const [selectedItem, setSelectedItem] = useState<string>("active");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const dropdownItems: DropdownItem[] = [
    { id: 'active', label: "Active" },
    { id: 'draft',  label: "Draft" },
  ];

  const handleDropdownClick = (item: DropdownItem) => {
    setInputValue(item.label);
    setSelectedItem(item.id);
    setIsDropdownOpen(false);
    onStatusChange(item.id);
  };

  return (
    <div className="relative w-full p-2 rounded-lg space-y-2">
      <label className="text-base font-semibold" htmlFor="status-input">
        Status
      </label>
      <input
        id="status-input"
        type="text"
        className="w-full p-2 border border-black rounded-md"
        value={inputValue}
        readOnly
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      />
      {isDropdownOpen && (
        <ul className="absolute left-0 right-0 border bg-white z-[1000] p-0 m-0 list-none rounded-lg">
          {dropdownItems.map((item) => (
            <li
              key={item.id}
              onClick={() => handleDropdownClick(item)}
              className={`p-2 cursor-pointer flex justify-between font-semibold hover:bg-[#EBEBEB] ${selectedItem === item.id ? "bg-gray-200" : "bg-white"
                }`}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


const Country = () => {
  const [selectedCode, setSelectedCode] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSelectCode = (code: string) => {
    setSelectedCode(code);
    setShowDropdown(false);
  };
  const handleSelectName = (name: string) => {
    setSelectedCode(name);
    setShowDropdown(false);
  };
  return (
    <div className=' w-full relative space-y-4'>

      <input
        type="text"
        value={selectedCode}
        onClick={() => setShowDropdown(!showDropdown)}
        readOnly
        placeholder="Pakistan"
        className='w-full p-2 border border-black rounded-lg'
      />

      <div className='flex flex-col w-full py-2'>
        <label htmlFor="">Harmonized System (HS) Code</label>
        <input type="text" placeholder='Search By Product KeyWord Or Code' className='w-full p-2 border border-black rounded-lg' />
      </div>

      {showDropdown && (
        <div
          style={{
            position: 'absolute',
            top: '30px',
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
              onClick={() =>{ handleSelectCode(country.code); handleSelectName(country.name)}}
              style={{ width: '100%', padding: '8px', cursor: 'pointer', borderBottom: '1px solid #ddd' }}
            >
              {country.name}
            </div>
          ))}
        </div>
      )}
    </div>
  )
};

interface Category {
  id: string;    
  title: string;
}
interface ProductCategoryProps {
  selectedCategory: string; 
  onCategoryChange: (categoryId: string) => void;
}
const ProductCategory = ({ selectedCategory, onCategoryChange }) => {
  const [categories, setCategories] =useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/store/categories/');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleChange = (event) => {
    const value = event.target.value;
    onCategoryChange(value);
  };

  if (loading) return <div>Loading categories...</div>;
  if (error) return <div>Error loading categories: {error}</div>;

  return (
    <select
      name="category"
      id="category"
      value={selectedCategory}
      onChange={handleChange}
      style={{ border: '1px solid #ccc', borderRadius: '0.25rem', padding: '0.5rem', width: '100%' }}
    >
      <option value="">Select a Category</option>
      {categories.map((category, index) => (
        <option key={index} value={category.id}>
          {category.title}
        </option>
      ))}
    </select>
  );
};

const NewProduct = () => {
  const [shipping, setShipping] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [status, setStatus] = useState('active');
  const [weight, setWeight] = useState("0.0");
  const [weightUnit, setWeightUnit] = useState("kg");
  const [errorMessage, setErrorMessage] = useState('');

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleStatusChange = (newStatus: string) => {
    setStatus(newStatus);
  };

  const handleWeightChange = (newWeight: string) => {
    setWeight(newWeight);
  };

  const handleWeightUnitChange = (newWeightUnit: string) => {
    setWeightUnit(newWeightUnit);                                                              
  };

  const sendProductData = async () => {
    const titleInput = document.getElementById('title-input') as HTMLInputElement;
    const titleValue = titleInput.value;

    const descriptionInput = document.getElementById('description-input') as HTMLTextAreaElement;
    const descriptionValue = descriptionInput.value;

    const priceInput = document.getElementById('price-input') as HTMLInputElement;
    const priceValue = priceInput.value;

    const comparePriceInput = document.getElementById('comparePrice-input') as HTMLInputElement;
    const comparePriceValue = comparePriceInput.value;

    const costInput = document.getElementById('cost-input') as HTMLInputElement;
    const costValue = costInput.value;

    const profitInput = document.getElementById('profit-input') as HTMLInputElement;
    const profitValue = profitInput.value;

    const marginInput = document.getElementById('margin-input') as HTMLInputElement;
    const marginValue = marginInput.value;

    const skuInput = document.getElementById('sku-input') as HTMLInputElement;
    const skuValue = skuInput ? skuInput.value : null;

    const barcodeInput = document.getElementById('barcode-input') as HTMLInputElement;
    const barcodeValue = barcodeInput ? barcodeInput.value : null;

    const availabilitySelect = document.getElementById('availability') as HTMLSelectElement;
    const availabilityValue = availabilitySelect.value;

    const stockQuantityInput = document.getElementById('stockQuantity') as HTMLInputElement;
    const stockQuantityValue = stockQuantityInput.value;

    const harmonizedCodeInput = document.getElementById('harmonizedCode') as HTMLInputElement;
    const harmonizedCodeValue = harmonizedCodeInput.value;

    const payload = {
      title: titleValue,
      description: descriptionValue || "",
      media: null,
      price: priceValue || "0.00",
      compare_at_price: comparePriceValue || null,
      cost_per_item: costValue || "0.00",
      sku: skuValue,
      barcode: barcodeValue || null,
      availability: availabilityValue,
      stock_quantity: stockQuantityValue || "0",
      harmonized_code: harmonizedCodeValue || null,
      weight: weight,
      weight_unit: weightUnit,
      status: status,
      category: selectedCategory,
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/store/products/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Product successfully added:', data);
        setErrorMessage('');
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || response.statusText);
        console.error('Failed to add product:', errorData);
      }
    } catch (error) {
      setErrorMessage('Error sending product data: ' + (error as Error).message);
      console.error('Error sending product data:', error);
    }
  };

  return (
    <section style={styles.h1} className="space-y-4 flex xl:flex-row flex-col justify-center sm:px-4 xl:px-0 xl:space-x-3 py-6 ">
      <div className="w-full xl:w-1/2 space-y-6 m-auto md:m-0">
        <div className='flex items-center'>
          <Link to={'/admin/prooduct'}>
            <MdArrowBack className='text-xl' />
          </Link>
          <h1 style={styles.h1} className="text-lg font-bold p-2">Add Product</h1>
        </div>

        {errorMessage && (
          <div className="bg-red-500 text-white p-4 rounded-lg mb-4">
            {errorMessage}
          </div>
        )}

        <div className="bg-white shadow-lg sm:rounded-lg px-2 py-4 border">
          <div className="p-4 rounded-lg space-y-4">
            <div className="flex flex-col space-y-2">
              <label className='font-semibold' htmlFor="title">Title</label>
              <input
                type="text"
                id="title-input"
                className="p-2 border border-black rounded-lg"
              />
            </div>
            <div className="flex flex-col space-y-2 mt-4">
              <label className='font-semibold' htmlFor="description">Description</label>
              <textarea
                id="description-input"
                className="p-2 border border-black rounded-lg"
                rows={4}
                placeholder="Enter product description here"
              />
            </div>

          </div>

          <div className='px-4'>
            <h1 style={styles.h1} className="text-base font-semibold mb-3 h1">Media</h1>
            <div className="py-2 px-0 rounded-lg border border-dashed border-black">
              <input type="file" className="py-6 px-5" />
            </div>
            <div className='py-3'>
              <label className="font-semibold" htmlFor="category">Category</label>
              <div className="space-x-2 w-full">
                <ProductCategory selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
              </div>
              <p>
                Determines tax rates and adds metafields to improve search,
                filters, and cross-channel sales.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg space-y-3 lg:space-y-0 sm:rounded-lg px-4 py-2 border">
          <div className="border-b py-2">
            <h1 style={styles.h1} className="font-bold text-base mb-3">Pricing</h1>
            <div className="flex xl:flex-row flex-col gap-2 overflow-x-hidden">
              <div className="flex flex-col">
                <label htmlFor="price">Price</label>
                <input
                  type="text"
                  id="price-input"
                  placeholder="Rs 0.00"
                  className="border border-black rounded-md p-1 w-auto"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="comparePrice">Compare-at price</label>
                <input
                  type="text"
                  id="comparePrice-input"
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
                id="cost-input"
                placeholder="Rs 0.00"
                className="border border-black rounded-md p-1 w-auto"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="profit">Profit</label>
              <input
                type="text"
                id="profit-input"
                placeholder="--"
                className="border border-black rounded-md p-1 w-auto"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="margin">Margin</label>
              <input
                type="text"
                id="margin-input"
                placeholder="--"
                className="border border-black rounded-md p-1 w-auto"
              />
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg py-4 sm:rounded-lg border">
          <TrackQuantity />
        </div>

        <div className="bg-white shadow-lg space-y-3 lg:space-y-0 sm:rounded-lg px-4 py-2 border">
          <Shipping onWeightChange={handleWeightChange} onWeightUnitChange={handleWeightUnitChange} />  
          <div className='border-t flex text-center py-4 space-x-2'>
            <LuPlusCircle onClick={() => setShipping(!shipping)} className='my-0.5 font-bold' />
            <p className='font-semibold text-sm'>Add Customs information</p>
          </div>
          {shipping && (<Country />)}
        </div>

        <div className="bg-white shadow-lg space-y-3 lg:space-y-0 sm:rounded-lg px-4 py-2 border">
          <div className="border-b py-2">
            <h1 style={styles.h1} className="font-bold text-base mb-3">Product Details</h1>
            <div className="flex xl:flex-row flex-col gap-4 overflow-x-hidden">
              <div className="flex flex-col flex-1">
                <label htmlFor="availability">Availability</label>
                <select
                  id="availability"
                  className="border border-black rounded-md p-1"
                >
                  <option value="in_stock">In Stock</option>
                  <option value="out_of_stock">Out of Stock</option>
                  <option value="preorder">Preorder</option>
                  <option value="discontinued">Discontinued</option>
                </select>
              </div>
              <div className="flex flex-col flex-1">
                <label htmlFor="stockQuantity">Stock Quantity</label>
                <input
                  type="number"
                  id="stockQuantity"
                  placeholder="0"
                  className="border border-black rounded-md p-1"
                />
              </div>
              <div className="flex flex-col flex-1">
                <label htmlFor="harmonizedCode">Harmonized Code</label>
                <input
                  type="text"
                  id="harmonizedCode"
                  placeholder="Enter code"
                  className="border border-black rounded-md p-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="xl:w-1/4 w-full flex flex-col gap-4 xl:mt-10 xl:pt-15 xl:py-12">
        <div className="bg-white shadow-lg sm:rounded-lg border p-3">
          <Status onStatusChange={handleStatusChange} />
        </div>
        <div className='flex justify-end'>
        <button
          onClick={sendProductData}
          className="bg-black text-white rounded-md px-3 py-2 transition duration-200"
        >
          Save
        </button>
        </div>
      </div>
    </section>
  );
};

export default NewProduct;
