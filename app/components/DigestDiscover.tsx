// /d/Dev/dwellness-platform/app/components/DigestDiscover.tsx

'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import Toolbar from './Toolbar';
import UserCard from './UserCard';
import InstructorCard from './InstructorCard';
import InstagramCard from './InstagramCard';
import ConsultationCard from './ConsultationCard';
import BlogCard from './BlogCard';
import axios from 'axios';
import debounce from 'lodash.debounce';
import '/styles/globals.css';

interface DigestDiscoverProps {}

interface UserResult {
  type: 'user';
  user_id: string;
  user_name: string;
  user_username: string;
  user_image: string;
}

interface InstructorResult {
  type: 'instructor';
  instructor_id: string;
  instructor_name: string;
  instructor_specialization: string;
  instructor_profile_image: string;
  instructor_bio: string;
}

interface InstagramResult {
  type: 'instagram';
  id: string;
  instagram_caption: string;
  instagram_media_url: string;
  instagram_username: string;
  instagram_timestamp: string;
}

interface ConsultationResult {
  type: 'consultation';
  consultation_title: string;
  consultation_description: string;
  consultation_schedule: string;
  consultation_instructor_name: string;
  consultation_instructor_profile_image: string;
}

interface BlogResult {
  type: 'blog';
  blog_title: string;
  blog_excerpt: string;
  blog_image: string;
  blog_author_name: string;
  blog_author_profile_image: string;
  blog_created_at: string;
}

type SearchResult = UserResult | InstructorResult | InstagramResult | ConsultationResult | BlogResult;

const PAGE_SIZE = 10;

const DigestDiscover: React.FC<DigestDiscoverProps> = () => {
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState('All');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loader = useRef<HTMLDivElement>(null);

  const tabTypeMap: { [key: string]: string[] } = {
    All: [],
    Community: ['blog', 'instagram'],
    Consultations: ['consultation'],
    Users: ['user'],
    Instructors: ['instructor'],
  };

  const debouncedSetQuery = useCallback(
    debounce((value: string) => {
      setQuery(value);
    }, 300),
    []
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSetQuery(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      fetchData(1, true);
    }
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setPage(1); // Reset to first page on tab change
    fetchData(1, true); // Ensure data is fetched on tab change
  };

  const fetchData = async (pageNumber: number, reset: boolean = false) => {
    if (isLoading) return;
    setIsLoading(true);
    setError(null);

    const types = tabTypeMap[activeTab];
    const params: any = {
      query: query,
      page: pageNumber,
    };
    if (types.length > 0) {
      params.types = types.join(',');
    }

    try {
      const response = await axios.get('/api/search', { params });
      const newResults = response.data.results;
      setResults((prevResults) => (reset ? newResults : [...prevResults, ...newResults]));
      setHasMore(newResults.length === PAGE_SIZE);
      setPage(pageNumber);
    } catch (err) {
      console.error('Fetch error:', err);
      setError('Failed to load data.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(1, true);
  }, [query, activeTab]);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting && hasMore && !isLoading) {
        fetchData(page + 1);
      }
    },
    [hasMore, page, isLoading]
  );

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0.1,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
    return () => {
      if (loader.current) observer.unobserve(loader.current);
    };
  }, [handleObserver]);

  const renderCard = (result: SearchResult): React.ReactElement | null => {
    switch (result.type) {
      case 'user':
        return (
          <UserCard
            key={`user-${result.user_id}`}
            name={result.user_name}
            username={result.user_username}
            image={result.user_image}
          />
        );
      case 'instructor':
        return (
          <InstructorCard
            key={`instructor-${result.instructor_id}`}
            name={result.instructor_name}
            specialization={result.instructor_specialization}
            profile_image={result.instructor_profile_image}
            bio={result.instructor_bio}
          />
        );
      case 'instagram':
        return (
          <InstagramCard
            key={`instagram-${result.id}`}
            content={result.instagram_caption}
            image={result.instagram_media_url}
            username={result.instagram_username}
            timestamp={result.instagram_timestamp}
          />
        );
      case 'consultation':
        return (
          <ConsultationCard
            key={`consultation-${result.consultation_title}-${result.consultation_schedule}`}
            title={result.consultation_title}
            description={result.consultation_description}
            schedule={result.consultation_schedule}
            instructor_name={result.consultation_instructor_name}
            instructor_profile_image={result.consultation_instructor_profile_image}
          />
        );
      case 'blog':
        return (
          <BlogCard
            key={`blog-${result.blog_title}-${result.blog_created_at}`}
            title={result.blog_title}
            excerpt={result.blog_excerpt}
            image={result.blog_image}
            author_name={result.blog_author_name}
            author_profile_image={result.blog_author_profile_image}
            createdAt={result.blog_created_at}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col items-center p-4">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 bg-black z-10 p-4 max-w-full">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center">Discover</h1>
          <div className="w-full mb-4 flex justify-center">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search"
                className="w-full p-3 bg-gray-800 text-gray-400 rounded-full focus:outline-none pl-10"
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
              />
              <span className="absolute left-3 top-3 text-gray-400">🔍</span>
            </div>
          </div>
          <div className="flex space-x-4 text-sm overflow-x-auto no-scrollbar justify-center mb-4">
            {['All', 'Community', 'Consultations', 'Users', 'Instructors'].map((tab) => (
              <span
                key={tab}
                className={`pb-1 cursor-pointer whitespace-nowrap ${
                  activeTab === tab ? 'border-b-2 border-white' : ''
                } hover:text-gray-300`}
                onClick={() => handleTabChange(tab)}
              >
                {tab}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl mt-32 px-4">
        {isLoading && results.length === 0 ? (
          <div className="flex justify-center col-span-full">
            <svg
              className="animate-spin h-10 w-10 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              ></path>
            </svg>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center col-span-full">
            <p className="text-lg text-red-500">{error}</p>
            <button
              className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
              onClick={() => fetchData(1, true)}
            >
              Retry
            </button>
          </div>
        ) : results.length > 0 ? (
          results.map((result) => renderCard(result))
        ) : (
          <div className="flex flex-col items-center col-span-full">
            <img src="/no-results.svg" alt="No results found" className="w-32 h-32 mb-4" />
            <p className="text-lg">Nothing found here!</p>
          </div>
        )}
      </div>

      {/* Loader for Infinite Scroll */}
      <div ref={loader} />

      {/* Loading Indicator for Pagination */}
      {isLoading && results.length > 0 && (
        <div className="flex justify-center mt-4">
          <svg
            className="animate-spin h-8 w-8 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            ></path>
          </svg>
        </div>
      )}

      {/* Toolbar */}
      <Toolbar />
    </div>
  );
};

export default DigestDiscover;
