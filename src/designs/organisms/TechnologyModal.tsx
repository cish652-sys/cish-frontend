// src/designs/organisms/TechnologyModal.tsx
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../atoms/card';

// Define a more complete type based on your API response
type ApiTechnology = {
  id: number;
  title: string;
  image: string;
  details: string;
  inventor: string;
  collaborators: string;
  maintainerInventor: string;
  yearOfDevelopment: string;
  yearOfRelease: string;
  yearOfCommercialization: string;
  icNumber: string;
  ppvfraRegistration: string;
  natureOfLicense: string;
  licenseDuration: string;
  licensingTerritory: string;
  licenseFee: string;
  targetCustomers: string;
  royalty: string;
};

type TechnologyModalProps = {
  technology: ApiTechnology;
  onClose: () => void;
};

// A simple component to display a detail row
const DetailRow: React.FC<{ label: string; value?: string }> = ({ label, value }) =>
  value ? (
    <div className="py-2">
      <h3  className="font-semibold text-gray-600">{label}:</h3>
      <h3  className="text-gray-800 ml-2">{value}</h3>
    </div>
  ) : null;


export const TechnologyModal: React.FC<TechnologyModalProps> = ({ technology, onClose }) => {
  if (!technology) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center"
      onClick={onClose} // Close modal on overlay click
    >
      <Card 
        className="relative w-11/12 max-w-2xl max-h-[90vh] overflow-y-auto bg-white"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the card
      >
        <CardHeader className='flex-row items-center justify-between'>
          <CardTitle>{technology.title}</CardTitle>
           <button onClick={onClose} className="text-2xl font-bold text-gray-600 hover:text-gray-900">&times;</button>
        </CardHeader>
        <CardContent>
            <DetailRow label="Details" value={technology.details} />
            <DetailRow label="Inventor" value={technology.inventor} />
            <DetailRow label="Collaborators" value={technology.collaborators} />
            <DetailRow label="Maintainer/Inventor" value={technology.maintainerInventor} />
            <DetailRow label="Year of Development" value={technology.yearOfDevelopment} />
            <DetailRow label="Year of Release" value={technology.yearOfRelease} />
            <DetailRow label="Year of Commercialization" value={technology.yearOfCommercialization} />
            <DetailRow label="IC Number" value={technology.icNumber} />
            <DetailRow label="PPVFRA Registration" value={technology.ppvfraRegistration} />
            <DetailRow label="Nature of License" value={technology.natureOfLicense} />
            <DetailRow label="License Duration" value={technology.licenseDuration} />
            <DetailRow label="Licensing Territory" value={technology.licensingTerritory} />
            <DetailRow label="License Fee" value={technology.licenseFee} />
            <DetailRow label="Royalty" value={technology.royalty} />
            <DetailRow label="Target Customers" value={technology.targetCustomers} />
        </CardContent>
      </Card>
    </div>
  );
};