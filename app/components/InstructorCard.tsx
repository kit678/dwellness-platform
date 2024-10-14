'use client';
import React from 'react';

interface InstructorCardProps {
  name: string;
  specialization: string;
  profile_image: string;
  bio: string;
}

const InstructorCard: React.FC<InstructorCardProps> = ({
  name,
  specialization,
  profile_image,
  bio,
}) => (
  <div className="bg-white bg-opacity-80 rounded-xl shadow-lg overflow-hidden backdrop-blur-sm">
    <div className="relative h-40">
      <img src={profile_image} alt={`Profile picture of ${name}`} className="object-cover w-full h-full" />
    </div>
    <div className="p-3">
      <h3 className="text-base font-semibold text-[#4A6C6F] mb-1">{name}</h3>
      <p className="text-[#6B4E71] text-xs mb-1">{specialization}</p>
      <p className="text-[#6B4E71] text-xs">{bio}</p>
    </div>
  </div>
);

export default InstructorCard;