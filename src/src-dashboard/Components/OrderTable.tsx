import React, { useState, useRef, useEffect } from "react";
import { IoFilterSharp } from "react-icons/io5";

const columnsData = [
  "id",
  "fulfillment_status",
  "payment_status",
  "order_number",
  "email",
  "billing_address",
  "shipping_address",
  "tracking_number",
  "total_price",
  "subtotal_price",
  "shipping_price",
  "tax_price",
  "discount_price",
  "created_at",
  "updated_at",
  "note",
  "tags",
  "customer",
  "shipping_method",
];

const DynamicTable = () => {
  const [ordrs, setOrdrs] = useState([]);
  const [visibleColumns, setVisibleColumns] = useState(
    columnsData.map((_, index) => index < 10) 
  );

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  // const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownRf = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/store/orders/");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setOrdrs(data); 
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRf.current && !dropdownRf.current.contains(event.target as Node)) {
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
    <div className="p-4">
      <div className="flex justify-end">
        <div className="relative inline-block" ref={dropdownRf}>
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
                    <span className="ml-2">{column.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())}</span>
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="overflow-x-auto mt-4">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              {columnsData.map((column, index) =>
                visibleColumns[index] && (
                  <th key={index} className="border px-4 py-2 bg-[#D9D9D9]">
                    {column.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {ordrs.map((order) => (
              <tr key={order}> 
                {columnsData.map((column, index) =>
                  visibleColumns[index] && (
                    <td key={index} className="border px-4 py-2">
                      {order[column] !== null ? (order[column] as string).toString() : "N/A"}
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DynamicTable;
