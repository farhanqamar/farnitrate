import React, { useState, useRef, useEffect } from "react";
import { IoFilterSharp } from "react-icons/io5";
// import order_main from '../assets/order_main.png';
import ProductAnalyticBar from './ProductAnalyticBar';

const columnsData = [
  "id", "title", "description", "vendor", "product_type", "tags", "variants", "images", "price",
  "compare_at_price", "inventory_quantity", "availability", "weight", "weight_unit",
  "dimensions", "height", "width", "depth", "seo_title", "seo_description", "url_handle", "template"
];

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [visibleColumns, setVisibleColumns] = useState(columnsData.map((_, index) => index < 12));
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/store/products/");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleCheckboxChange = (index: number) => {
    const newVisibleColumns = [...visibleColumns];

    if (newVisibleColumns[index]) {
      newVisibleColumns[index] = false;
    } else {
      const visibleCount = newVisibleColumns.filter(Boolean).length;
      if (visibleCount >= 10) {
        const firstVisibleIndex = newVisibleColumns.findIndex((col) => col);
        newVisibleColumns[firstVisibleIndex] = false;
      }
      newVisibleColumns[index] = true;
    }

    setVisibleColumns(newVisibleColumns);
  };

  return (
    <section className="p-4">
      <div className="mb-6">
        <p className='text-2xl font-bold text-[#303030]'>Products</p>
      </div>

      <div className="mb-8">
        <ProductAnalyticBar />
      </div>

      <div className="bg-white p-4 rounded shadow mt-4">
        <div className="flex justify-end mb-4" ref={dropdownRef}>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none"
            onClick={() => setDropdownOpen(!isDropdownOpen)}
          >
            <span><IoFilterSharp /></span>
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10 h-[300px] overflow-y-auto">
              {columnsData.map((column, index) => (
                <div key={index} className="px-4 py-2">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-blue-600"
                      checked={visibleColumns[index]}
                      onChange={() => handleCheckboxChange(index)}
                    />
                    <span className="ml-2">{capitalizeFirstLetter(column.replace(/_/g, ' '))}</span>
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>

        {products.length === 0 ? (
          <div className="bg-white py-3 rounded-xl text-center mb-6">
            <img src="" className="m-auto" alt="Order Placeholder" />
            <div className="text-center">
              <p className="text-base font-semibold">Your Products Will Show Here</p>
              <p className="text-sm w-full md:w-1/3 m-auto py-4">
                To add products and manage inventory, you need to select a plan. You’ll only be charged for your plan after your free trial ends.
              </p>
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto mt-4">
            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr>
                  {columnsData.map((column, index) =>
                    visibleColumns[index] && (
                      <th key={index} className="border px-6 py-4 bg-[#D9D9D9]">
                        {capitalizeFirstLetter(column.replace(/_/g, ' '))}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product} className="hover:bg-gray-100 transition-colors">
                    {columnsData.map((column, index) =>
                      visibleColumns[index] && (
                        <td key={index} className="border px-6 py-4">
                          {product[column] !== null ? (product[column] as string).toString() : "N/A"}
                        </td>
                      )
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductTable;
