'use client';
import React from 'react';
import Link from 'next/link';

interface ViksitKrishiCardProps {
  id: number;
  title: string;
  description: string;
  isDetailView?: boolean; 
}

const ViksitKrishiCard: React.FC<ViksitKrishiCardProps> = ({ id, title, description, isDetailView = false }) => {
  return (
    <div className="w-full max-w-6xl p-6 mb-8 bg-white border border-gray-200 shadow-sm">
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-700 text-base leading-relaxed">
        {description}
        {!isDetailView && (
          <Link href={`/viksit-krishi/${id}`} className="text-green-700 font-semibold cursor-pointer hover:underline ml-1">
            View More →
          </Link>
        )}
      </p>

      <div className="grid pt-[122px] grid-cols-2 sm:grid-cols-3 mb-4 md:grid-cols-5 gap-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="bg-gray-200 h-32 w-full"></div>
        ))}
      </div>
    </div>
  );
};

export default ViksitKrishiCard;