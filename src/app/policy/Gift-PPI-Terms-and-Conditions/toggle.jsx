import React, { useState } from 'react';

const LanguageToggle = ({ onLanguageChange, visible = true }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('english');

  const languages = [
    { value: 'english', label: 'English' },
    { value: 'hindi', label: 'हिंदी' },
    { value: 'marathi', label: 'मराठी' },
  ];

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage);
    onLanguageChange(newLanguage);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="flex items-center space-x-4">
      <label htmlFor="language-select" className="text-gray-700 text-base font-medium">
        Choose language
      </label>
      <select
        id="language-select"
        value={selectedLanguage}
        onChange={handleLanguageChange}
        className="border outline-none border-gray-300 rounded-lg p-2 text-gray-700 text-base w-[156x] h-[40px] focus:ring-1  focus:outline-none "
      >
        {languages.map(({ value, label }) => (
          <option key={value} value={value} className='text-base p-2 focus:bg-gray-100'>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageToggle;
