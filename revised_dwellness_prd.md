
# Dwellness Platform - Revised Product Requirements Document (PRD)

## Overview
Dwellness is a modern, single-page Progressive Web App (PWA) designed to connect users with qualified wellness instructors for personalized consultations and provide a dynamic social space for content sharing and engagement. The platform focuses on delivering a seamless user experience with a mobile-app-like design, offering streamlined functionality and interactive features.

## Project Goals
1. **Connect Users with Wellness Instructors:** Facilitate easy booking of consultations with flexible scheduling and pricing options.
2. **Foster Social Engagement:** Enable users to create, share, and interact with content through a community-focused platform.
3. **Personalized Experience:** Utilize questionnaires and user input to deliver tailored wellness recommendations.
4. **Scalability and Performance:** Build a robust and performant application capable of handling large-scale user growth with fast load times and seamless interactions.
5. **Modern UI/UX Design:** Implement a sleek, toolbar-centric design with a focus on accessibility, responsiveness, and modern front-end interactions.

## Key Features and Components

### Central Toolbar (Primary Navigation)
- **Position:** Bottom center of the viewport.
- **Buttons:** Home/Digest, Consultations, Community, Profile, More/Settings.
- **Features:** Gesture-based navigation, interactive animations using **Framer Motion**, and responsive design for mobile and desktop.

### Digest Feed
- **Description:** Centralized feed for consultations, blog posts, community posts, and embedded Instagram posts from the platform's account.
- **Features:** Infinite scroll, filters, like/comment/share interactions, media support for posts (images, videos).

### Consultations
- **Types:** One-on-one sessions, group sessions, subscription-based monthly packages.
- **Pricing:** 
   - **Hourly Rate:** $50 to $200 per session.
   - **Package Pricing:** $200 to $500 per month for standard plans, with premium offerings ranging up to $1,000+.
   - **Currency:** Default pricing in **USD**, with conversion options for global audiences (INR, EUR, etc.).

### Community Forum
- **Main Screen:** Displays active discussion threads with stats (comments, likes), with a "Create Post" button.
- **Create Post Modal:** Supports text, link, or media posts with category tagging.
- **Post Detail Screen:** Shows full post content, user info, and engagement options (like/comment/share).

### Instructor Profile Modal
- **Components:** Instructor's personal details, qualifications, reviews, available consultations, and contact info.
- **Features:** Direct booking from consultation listings, user feedback system, and profile interactivity.

### Booking Flow Modal
- **Components:**
   - **Booking Confirmation:** Review consultation details (title, date, time, price, instructor).
   - **Payment Processing:** Secure interface for entering payment details (credit card, PayPal).
   - **Booking Summary:** Receipt and confirmation of the booking.

### Modals and Overlays
- **Types:** Login, Signup, Consultation Details, Messaging/Chat, Booking Flow, Post Details, Notifications.
- **Features:** Smooth transitions, accessibility (ARIA labels), responsive design.

## UI/UX Design Guidelines
- **Minimalistic Design:** Focus on essential elements with ample whitespace.
- **Consistency:** Uniform use of fonts, icons, and color schemes across the platform.
- **Interactive Animations:** Use **Framer Motion** for hover effects, button clicks, and toolbar animations.
- **Responsive Design:** Optimize for mobile-first interaction, ensuring scalability across all devices.
- **Performance:** Lazy loading for media and smooth transitions for seamless user experience.
- **Accessibility:** ARIA labels, keyboard navigation, high-contrast modes for inclusivity.

## Conclusion
Dwellness offers a holistic wellness platform combining personalized wellness consultations with engaging social interactions. The platform's modern, mobile-friendly design prioritizes accessibility, scalability, and interactive user experiences, ensuring global reach and competitiveness.
