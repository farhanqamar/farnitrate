import React, { useRef, useState } from 'react';
import Calendar from '../../Components/Calendar/Calendar'; 
import LineChart from '../../Components/Charts/LineChart';
import { CiCalendar } from "react-icons/ci";
import useOutsideClick from '../../Components/Dropdown/useOutsideClick';
import "../Dashboard.css"


const Analytics: React.FC = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);

  const dropdownRefLogin = useRef(null);

  useOutsideClick({
    ref: dropdownRefLogin,
    handler: () => {
      setIsOpenCalendar(false)
    }
  });

  const currentDate = new Date();
  let dateoption : Intl.DateTimeFormatOptions = {month: "short", day: 'numeric', year:'numeric'} 
  let dateFormate = currentDate.toLocaleDateString('en-US', dateoption)
  
  let Yesterday = new Date(currentDate)
  Yesterday.setDate(Yesterday.getDate() -1)
  let yesterdayDateoption : Intl.DateTimeFormatOptions = {month: "short", day: 'numeric', year:'numeric'} 
  let yesterdayDateFormat = Yesterday.toLocaleDateString('en-US', yesterdayDateoption)
  

  console.log(yesterdayDateFormat);
  

  const data = {
    labels: ['12:00 AM', '4:00 AM', '8:00 AM', '12:00 PM', '4:00 PM', '8:00 PM'],
    datasets: [
      {
        label: dateFormate,
        data: [5, 5, 10, 0, 0, 2],
        borderColor: '#3B82F6',
        backgroundColor: '#3B82F6',
        fill: false,
        pointRadius: 5,
        pointHoverRadius: 10,
      },
      {
        label: yesterdayDateFormat,
        data: [0, 0, 5, 0, 10, 0],
        borderColor: '#93C5FD',
        backgroundColor: '#93C5FD',
        borderDash: [5, 5],
        fill: false,
        pointRadius: 5,
        pointHoverRadius: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      tooltip: {
        enabled: true,
        mode: 'index' as const,
        intersect: false,
        callbacks: {
          label: (context: any) => {
            return  `${context.label}, ${context.parsed.y}: Rs ${context.raw.toFixed(2)};`
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time',
        },
        grid: {
          display: false,
        },
      },
      y: {
        title: {
          display: true,
          text: 'Rs', 
        },
        min: 0,
        max: 10,
        ticks: {
          stepSize: 5,
        },
      },
    },
  };
  

  const handleCalendarToggle = ():any => {
    setShowCalendar((prevState) => !prevState); 
  };

  return (
    <div className="sm:px-8 py-4">
      <section className='px-4 mb-4'>
        <div>
          <p className="text-xl font-bold text-slate-900/90">Analytics</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-2 mt-4">
          <div className="flex md:justify-center gap-4">
            <div className='relative' ref={dropdownRefLogin}>
              <button 
                className="btn-custom"
                onClick={handleCalendarToggle}>
                <span className="relative top-1"><CiCalendar /></span> Today
              </button>
              {showCalendar && (
                <div className='absolute '>
                  <Calendar closeHandler={handleCalendarToggle}/>
                </div>
              )}
            </div>

          
          </div>

          <div className="flex justify-center gap-4">
            <div className="flex gap-1">
              <input type="checkbox" name="" id="" disabled/>
              <label className="border-b-2 border-dotted border-gray-600">Auto-refresh</label>
            </div>
            <div className='hidden md:block'>
              <button className="btn-custom">Customize</button>
            </div>
          </div>
        </div>
      </section>
      
      <div className="sm:p-4 sm:mt-4 flex flex-wrap gap-4">


        <LineChart
          mainHeadline="Total Sales"
          total="Rs 0.00"
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};

export default Analytics;
