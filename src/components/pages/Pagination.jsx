import React, { useState } from 'react';

const Pagination = () => {
  const [activeButton, setActiveButton] = useState(1);

  const handleClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  return (
    <div className="flex space-x-2">
      {['Prev','Next'].map((buttonNumber) => (
        <button
          key={buttonNumber}
          className={`px-4 py-2 rounded ${activeButton === buttonNumber ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          onClick={() => handleClick(buttonNumber)}
        >
          {buttonNumber}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
