import React from 'react';

const NewsCard = ({ imageUrl, date, category, readTime, title, description, link }) => {
  return (
    <div className=" flex flex-wrap w-[328px] sm:w-[255px] bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
      <div className="relative w-[120px] sm:w-full h-48 ">
        {/* Image or placeholder */}
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="Card Image"
            className="object-cover h-full  sm:w-full"
          />
        ) : (
          <div className=" flex items-center justify-center h-full w-full bg-gray-200 text-gray-400">
            16:9
          </div>
        )}
      </div>

      <div className="p-[12px] sm:p-[16px]  w-[200px] sm:w-[255px]">
        {/* Metadata */}
        <div className="text-[14px] text-gray-500 mb-2">
          <span>{date}</span> | <span className='text-[#4D4D4D]'>{category}</span> | <span className='text-[#4D4D4D]'>{readTime}</span>
        </div>

        {/* Title */}
        <h2 className="font-semibold text-[18px] text-gray-800 mb-1">{title}</h2>

        {/* Description */}
        <p className="text-[#666666] text-[14px] mb-4">{description}</p>

        {/* Read more link */}
        <a href={link} className="text-[#8800EC] font-semibold">
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
