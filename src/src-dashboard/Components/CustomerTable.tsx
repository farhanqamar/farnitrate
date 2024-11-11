import React, { useState, useRef, useEffect } from "react";
import { IoFilterSharp } from "react-icons/io5";
import CustomerAnalyticBar from './CustomerAnalyticBar';

const columnsData = [
  "id", 
  "first_name", 
  "last_name", 
  "email", 
  "phone", 
  "company", 
  "address1", 
  "address2", 
  "city", 
  "province", 
  "country", 
  "zip_code", 
  "accepts_marketing", 
  "tags", 
  "note", 
  "loyalty_points", 
  "groups"
];

const DynamicTable = () => {
  const [customers, setCustomers] = useState([]);
  const [visibleColumns, setVisibleColumns] = useState(
    columnsData.map((_, index) => index < 10)
  );

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/store/customers/");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setCustomers(data);
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    };
    fetchCustomers();
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleCheckboxChange = (index) => {
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
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">Customers</h1>

      <CustomerAnalyticBar />

      <div className="bg-white p-4 rounded shadow-md">
        <div className="flex justify-end mb-4">
          <div className="relative inline-block" ref={dropdownRef}>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none"
              onClick={() => setDropdownOpen(!isDropdownOpen)}>
              <IoFilterSharp />
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
                      <span className="ml-2">{column.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase())}</span>
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr>
                {columnsData.map(
                  (column, index) =>
                    visibleColumns[index] && (
                      <th key={index} className="border px-6 py-4 bg-[#D9D9D9] text-left">
                        {column.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase())}
                      </th>
                    )
                )}
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer}>
                  {columnsData.map((column, index) =>
                    visibleColumns[index] && (
                      <td key={index} className="border px-6 py-4">
                        {customer[column] !== null ? (customer[column] as string).toString() : "N/A"}
                      </td>
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DynamicTable;
