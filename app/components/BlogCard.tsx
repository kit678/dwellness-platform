'use client';
import React from 'react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  author_name: string;
  author_profile_image: string;
  createdAt: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  excerpt,
  image,
  author_name,
  author_profile_image,
  createdAt,
}) => (
  <div className="bg-white bg-opacity-80 rounded-xl shadow-lg overflow-hidden backdrop-blur-sm">
    <div className="relative h-40">
      <img src={image} alt={`Blog post titled ${title}`} className="object-cover w-full h-full" />
    </div>
    <div className="p-3">
      <h3 className="text-base font-semibold text-[#4A6C6F] mb-1">{title}</h3>
      <p className="text-[#6B4E71] text-xs mb-2">{excerpt}</p>
      <div className="flex items-center">
        <img
          src={author_profile_image}
          alt={`Author ${author_name}`}
          className="w-6 h-6 rounded-full mr-2"
        />
        <p className="text-[#6B4E71] text-xs">{author_name}</p>
        <span className="text-[#6B4E71] text-xs ml-auto">
          {new Date(createdAt).toLocaleDateString()}
        </span>
      </div>
    </div>
  </div>
);

export default BlogCard;