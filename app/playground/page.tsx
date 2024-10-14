"use client"; // Add this line at the top

import React, { useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import all components
const components: Record<string, React.ComponentType<any>> = {
  Quest: dynamic(() => import('../components/Quest')),
  QuizList: dynamic(() => import('../components/QuizList')),
  WellnessQuiz: dynamic(() => import('../components/WellnessQuiz')),
  Landing: dynamic(() => import('../components/Landing')),
  UserDashboard: dynamic(() => import('../components/UserDashboard')),
  CommunityForum: dynamic(() => import('../components/CommunityForum')),
  Hero: dynamic(() => import('../components/Hero')),
  PasswordReset: dynamic(() => import('../components/PasswordReset')),
  AdminDashboard: dynamic(() => import('../components/AdminDashboard')),
  ClassListingPage: dynamic(() => import('../components/ClassListingPage')),
  InstructorDashboard: dynamic(() => import('../components/InstructorDashboard')),
  Login: dynamic(() => import('../components/Login')),
  HealthCheckIn: dynamic(() => import('../components/HealthCheckIn')),
  Signup: dynamic(() => import('../components/Signup')),

  Onboarding: dynamic(() => import('../components/Onboarding')),
  DiscoverDigest: dynamic(() => import('../components/DigestDiscover')),
  Toolbar: dynamic(() => import('../components/Toolbar')),
  // Card Components
  BlogCard: dynamic(() => import('../components/BlogCard')),
  ConsultationCard: dynamic(() => import('../components/ConsultationCard')),
  InstagramCard: dynamic(() => import('../components/InstagramCard')),
  UserCard: dynamic(() => import('../components/UserCard')),
  InstructorCard: dynamic(() => import('../components/InstructorCard')),
};

// Define default props for components
const defaultProps: Record<string, any> = {
  BlogCard: {
    title: 'Sample Blog',
    excerpt: 'This is a sample blog excerpt.',
    image: 'https://via.placeholder.com/150',
    author_name: 'Author Name',
    author_profile_image: 'https://via.placeholder.com/50',
    createdAt: '2023-10-17T10:00:00Z',
  },
  ConsultationCard: {
    title: 'Sample Consultation',
    description: 'This is a sample consultation description.',
    schedule: new Date().toISOString(),
    instructor_name: 'Jane Smith',
    instructor_profile_image: 'https://via.placeholder.com/50',
  },
  InstagramCard: {
    content: 'Sample Instagram Post',
    image: 'https://via.placeholder.com/150',
    username: 'instauser',
    timestamp: new Date().toISOString(),
  },
  UserCard: {
    name: 'John Doe',
    username: 'johndoe',
    image: 'https://via.placeholder.com/150',
    bio: 'This is a sample bio for John Doe.',
  },
  InstructorCard: {
    name: 'Jane Smith',
    specialization: 'Yoga Instructor',
    profile_image: 'https://via.placeholder.com/150',
    bio: 'This is a sample bio for Jane Smith.',
  },
  DiscoverDigest: {
    mockData: {
      results: [
        {
          id: 1,
          type: 'user',
          name: 'John Doe',
          username: 'johndoe',
          image: 'https://via.placeholder.com/150',
          bio: 'Lorem ipsum dolor sit amet.',
        },
        {
          id: 2,
          type: 'instructor',
          name: 'Jane Smith',
          specialization: 'Yoga Instructor',
          profile_image: 'https://via.placeholder.com/150',
          bio: 'Certified yoga instructor with 5 years of experience.',
        },
        {
          id: 3,
          type: 'instagram',
          caption: 'Check out my new yoga pose!',
          media_url: 'https://via.placeholder.com/150',
          username: 'yogi_jane',
          timestamp: '2023-10-20T10:00:00Z',
        },
        {
          id: 4,
          type: 'consultation',
          title: 'Personal Training Session',
          description: 'One-on-one training session.',
          schedule: '2023-10-25T15:30:00Z',
          instructor_name: 'Dave Trainer',
          instructor_profile_image: 'https://via.placeholder.com/150',
        },
        {
          id: 5,
          type: 'blog',
          title: 'Healthy Living Tips',
          excerpt: 'Learn how to live a healthier life.',
          media: 'https://via.placeholder.com/150',
          author_name: 'Health Guru',
          author_profile_image: 'https://via.placeholder.com/150',
          createdAt: '2023-10-15T08:00:00Z',
        },
      ],
    },
  },
  // Provide default props for other components if necessary
};

const Playground = () => {
  const [selectedComponent, setSelectedComponent] = useState<keyof typeof components>('Quest');

  const ComponentToRender = components[selectedComponent];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Component Playground</h1>
      <select
        className="border border-gray-300 p-2 rounded mb-4"
        value={selectedComponent}
        onChange={(e) => setSelectedComponent(e.target.value as keyof typeof components)}
      >
        {Object.keys(components).map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>
      <div className="mt-4">
        {ComponentToRender ? (
          <ComponentToRender
            key={selectedComponent} // Added key prop to ensure re-rendering
            {...(defaultProps[selectedComponent] || {})}
          />
        ) : (
          <p>Select a component to render.</p>
        )}
      </div>
    </div>
  );
};

export default Playground;