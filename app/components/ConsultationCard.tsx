'use client';
import React from 'react';
import { format, parseISO, isValid } from 'date-fns'; // Importing format from date-fns

interface ConsultationCardProps {
  title: string;
  description: string;
  schedule?: string; // Make schedule optional
  instructor_name: string;
  instructor_profile_image: string;
}

const ConsultationCard: React.FC<ConsultationCardProps> = ({
  title,
  description,
  schedule = '', // Default to an empty string
  instructor_name,
  instructor_profile_image,
}) => {
  const parsedDate = parseISO(schedule);
  const formattedDate = isValid(parsedDate) ? format(parsedDate, 'MM/dd/yyyy, HH:mm:ss') : 'Invalid date';

  return (
    <div className="bg-white bg-opacity-80 rounded-xl shadow-lg overflow-hidden backdrop-blur-sm">
      <div className="p-3">
        <h3 className="text-base font-semibold text-[#4A6C6F] mb-1">{title}</h3>
        <p className="text-[#6B4E71] text-xs mb-2">{description}</p>
        <div className="flex items-center mb-2">
          <img
            src={instructor_profile_image}
            alt={`Instructor ${instructor_name}`}
            className="w-8 h-8 rounded-full mr-2"
          />
          <p className="text-[#6B4E71] text-xs">{instructor_name}</p>
        </div>
        <p className="text-[#4A6C6F] text-xs">
          Scheduled for: {formattedDate}
        </p>
      </div>
    </div>
  );
};

export default ConsultationCard;
