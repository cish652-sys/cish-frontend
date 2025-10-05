import React from 'react';

interface ViksitKrishiCardProps {
  title: string;
  description: string;
}

const ViksitKrishiCard: React.FC<ViksitKrishiCardProps> = ({ title, description }) => {
  return (
    <div className="w-full max-w-6xl p-6 mb-8 bg-white border border-gray-200 shadow-sm">
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-700 text-base leading-relaxed mb-6">
        {description}
        <span className="text-green-700 font-semibold cursor-pointer hover:underline ml-1">
          View More →
        </span>
      </p>
      <div className="grid pt-[122px] grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="bg-gray-200 h-32 w-full rounded-md"></div>
        ))}
      </div>
    </div>
  );
};

export default ViksitKrishiCard;