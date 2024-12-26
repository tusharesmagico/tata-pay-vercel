import React, { useState } from 'react';
import filter from '../../app/assets/img/filter.png'
import Image from 'next/image';

const YearFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState('2024');

  const toggleFilter = () => setIsOpen(!isOpen);

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleFilter}
        className="p-1 rounded-full bg-gray-100 transition-colors"
        aria-label="Toggle year filter"
      >
       <Image src={filter} alt="filter" className='h-[32px] w-[32px]' />
      </button>
      
      {isOpen && (
        <div className="absolute right-full  mr-2 mt-2 w-32 bg-white rounded-lg shadow-lg z-10 ">
          <div className="p-2 space-y-2">
            {['2024', '2023'].map((year) => (
              <label key={year} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="year"
                  value={year}
                  checked={selectedYear === year}
                  onChange={() => handleYearSelect(year)}
                  className="form-checkbox text-purple-600 rounded-sm"
                />
                <span className={`${selectedYear === year ? 'text-purple-600 font-semibold' : 'text-gray-700'}`}>
                  {year}
                </span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default YearFilter;