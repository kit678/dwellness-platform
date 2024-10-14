'use client';
import React from 'react';
import { Instagram } from 'lucide-react';

interface InstagramCardProps {
  content: string;
  image: string;
  username: string;
  timestamp: string;
}

const InstagramCard: React.FC<InstagramCardProps> = ({
  content,
  image,
  username,
  timestamp,
}) => (
  <div className="bg-white bg-opacity-80 rounded-xl shadow-lg overflow-hidden backdrop-blur-sm">
    <div className="relative h-40">
      <img src={image} alt={`Instagram post by ${username}`} className="object-cover w-full h-full" />
      <div className="absolute top-2 left-2 bg-white rounded-full p-1">
        <Instagram className="h-5 w-5 text-[#6B4E71]" />
      </div>
    </div>
    <div className="p-3">
      <div className="flex items-center mb-1">
        <p className="text-[#6B4E71] text-xs font-semibold">{username}</p>
        <span className="text-[#6B4E71] text-xs ml-auto">
          {new Date(timestamp).toLocaleDateString()}
        </span>
      </div>
      <p className="text-[#6B4E71] text-xs">{content}</p>
    </div>
  </div>
);

export default InstagramCard;