'use client';
import React from 'react';

interface UserCardProps {
  name: string;
  username: string;
  image: string;
  
}

const UserCard: React.FC<UserCardProps> = ({ name, username, image }) => (
  <div className="bg-white bg-opacity-80 rounded-xl shadow-lg overflow-hidden backdrop-blur-sm">
    <div className="relative h-40">
      <img src={image} alt={`Profile picture of ${name}`} className="object-cover w-full h-full" />
    </div>
    <div className="p-3">
      <h3 className="text-base font-semibold text-[#4A6C6F] mb-1">{name}</h3>
      <p className="text-[#6B4E71] text-xs">@{username}</p>

    </div>
  </div>
);

export default UserCard;