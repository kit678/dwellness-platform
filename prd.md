Dwellness Platform - Product Requirements Document
Overview
Dwellness is a comprehensive wellness platform designed to connect users with qualified instructors for wellness consultations and provide a social space for content sharing and engagement. The platform emphasizes ancient Indian wellness knowledge, presented through a modern, sophisticated design that subtly reflects its roots.

The application will be a multi-tenant Progressive Web App (PWA) built on top of the Vercel Platforms Starter Kit, leveraging its existing technologies only when necessary. We aim to minimize the need for additional external packages to keep the application lean and efficient.

Project Goals
Connect Users with Wellness Instructors: Facilitate easy booking of consultations with flexible scheduling and pricing options.
Social Engagement: Enable users to create and share content, interact with posts, and engage with the community.
Personalized Experience: Utilize questionnaires and user input to provide tailored recommendations.
Scalable and Performant: Build a robust application capable of handling growth with fast load times and seamless interactions.
Modern Design with Cultural Roots: Present a sleek interface that subtly incorporates elements reflecting ancient Indian wellness traditions.
Technologies Used
We will use the technologies provided in the Vercel Platforms Starter Kit where appropriate, avoiding external packages when possible.

Frontend Technologies:

Next.js App Router: For building the user interface.
Tailwind CSS: For styling and rapid UI development.
Vercel Edge Network: For fast content delivery.
Backend Technologies:

Vercel Postgres: For data storage.
Vercel Functions: For backend API endpoints.
Vercel Blob: For handling file uploads.
Vercel Domains API: For managing custom domains and SSL certificates.
Additional Technologies (used only if necessary):

Authentication: Utilize built-in Next.js features or NextAuth.js if required (since NextAuth.js is already part of the starter kit, no additional installation is needed).
Payment Processing: Stripe API (only if necessary and cannot be replaced with existing tools).
Date and Time Handling: Use native JavaScript capabilities or built-in libraries.
Data Visualization: Use simple, built-in methods for charts or graphs to avoid external libraries.
Dummy Data Generation: Use simple scripts or existing tools within the stack instead of external packages like Faker.js.
Functional Requirements
1. User Roles and Authentication
Roles:
Admin
User
Instructor
Authentication:
Implement using existing Next.js authentication methods.
Support for:
Email/Password
Google (if possible without external packages)
Facebook (if possible without external packages)
Authorization:
Set up Role-Based Access Control (RBAC) using built-in features to restrict access based on user roles.
2. User Onboarding and Profiles
User Onboarding:
Multi-step form collecting:
Basic information: age, weight, height, dietary preferences, fitness level, wellness goals.
Option to upload health-related documents (images or PDFs) using Vercel Blob.
Allow users to skip steps but encourage completion.
Encrypt sensitive data before storage, using built-in encryption methods.
User Dashboard:
View purchased and upcoming consultations.
Access recommended consultations based on questionnaire responses.
Retake or update questionnaires.
Visualize questionnaire results using simple charts (avoid external libraries if possible).
Input additional health data manually.
3. Instructor Onboarding and Profiles
Instructor Onboarding:
Registration form collecting:
Personal details.
Professional qualifications.
Upload certifications using Vercel Blob.
Agree to terms and conditions.
Application marked as 'Pending Approval'.
Admin Approval:
Admin dashboard to review applications and approve or reject.
Email notifications sent to instructors regarding application status (use existing email capabilities).
Instructor Dashboard:
Create and manage consultations.
View scheduled consultations.
Earnings and transaction history.
Communicate with clients via messaging (implement using existing tools).
Analytics on consultations (basic statistics without external libraries).
4. Consultations
Types:
One-on-One Sessions
Group Sessions
Session Options:
Single Session
Session Packages
Monthly Subscription
Duration Options:
30 minutes
60 minutes
90 minutes
Features:
Instructors set:

Pricing.
Discount codes and promotional offers.
Availability via a calendar interface (use built-in date/time handling).
Categories from predefined list (Yoga, Nutrition, etc.).
Detailed description of the consultation.
Users can:

Browse consultations with filters.
View instructor profiles with ratings and reviews.
Book consultations by selecting time slots.
Handle international time zones (use built-in JavaScript Date objects).
5. Payment Processing
Integrate payment processing using existing tools within the stack.
If necessary, use Stripe API (only if no alternative is available).
Support basic payment functionalities required for transactions.
Record transactions in the database.
Provide receipts and transaction histories.
Implement simple refund and dispute handling policies.
6. Messaging System
Enable communication between instructors and their clients.
Store messages in the database.
Accessible through user and instructor dashboards.
Implement using built-in features, avoiding external packages if possible.
7. Digest - Social Content Section
Users and admins can create posts with text and images.
Use Vercel Blob for image uploads.
Implement social interactions:
Like, comment, and share posts.
Content tagging for categorization.
Basic content moderation tools (without external AI services).
8. Sitewide Search Functionality
Implement search across consultations, instructors, posts, and users.
Use built-in features to implement predictive search and autocomplete (if feasible).
Utilize tagging and categories to enhance search results.
Optimize for performance using existing stack capabilities.
9. Admin Dashboard
Manage instructor applications.
Content moderation tools for posts and comments.
Platform metrics overview (users, bookings, revenue).
Handle refunds and disputes.
Manage categories and tags.
10. UI/UX Design
Modern, sophisticated design with subtle cultural elements.
Use Tailwind CSS for styling.
Ensure responsiveness across devices.
Plan for future integration of an LLM-based chat interface.
Implement dark mode support if possible with existing tools.
11. Animations and Interactivity
Use CSS transitions and animations provided by Tailwind CSS.
Enhance user experience with interactive elements.
Avoid installing external animation libraries unless necessary.
12. Performance and Optimization
Utilize Vercel Edge Network for fast content delivery.
Use built-in Next.js features for performance optimization.
Optimize images and assets using tools available in the stack.
Ensure fast load times, especially on mobile devices.
13. Security and Compliance
Encrypt sensitive data using built-in methods.
Implement input validation on all forms.
Protect against web vulnerabilities (XSS, CSRF, SQL Injection) using best practices.
Plan for future compliance with data protection regulations.
Consult legal experts as necessary.
14. Internationalization (Optional for Future)
Prepare the app to support multiple languages using Next.js i18n capabilities.
Adjust date and time formats based on locale using built-in functions.
15. Testing and Data Generation
Use simple scripts or existing tools within the stack to generate dummy data.
Include edge cases and stress test scenarios.
Regularly test features to ensure functionality.
16. Deployment
Deploy on Vercel using the Platforms Starter Kit.
Set up environment variables.
Test the build process and resolve any deployment issues.
Use Vercel Functions for backend operations.
Development Approach with Cursor IDE and Composer
Best Practices
Prompt Engineering: Break down development tasks into manageable prompts. Provide clear, detailed instructions for each component, specifying that we should use existing technologies and avoid external packages where possible.

Combine Prompts and Files: Guide complex workflows by combining instructions, ensuring backend and frontend components are well-coordinated.

Manual Oversight: Regularly review and test the generated code, focusing on areas where external packages might have been used to ensure alternatives within the existing stack are utilized instead.

Suggested Development Steps
Initialize Project:

Start with the Vercel Platforms Starter Kit.
Set up the project structure with Next.js and Tailwind CSS.
Configure necessary Vercel services.
Set Up Authentication:

Implement authentication using existing Next.js methods.
Configure providers supported without additional packages.
Define Database Schema:

Use the built-in ORM or database tools provided in the starter kit.
Define models with necessary fields and relationships.
Develop Onboarding Flows:

Create multi-step forms for users and instructors.
Implement file uploads using Vercel Blob.
Ensure data encryption using built-in methods.
Build Dashboards:

Develop user, instructor, and admin dashboards.
Use simple methods for data visualization.
Implement Consultations and Booking:

Set up consultation creation and management.
Develop booking flow using built-in date/time handling.
Integrate payment processing using existing tools or Stripe API if necessary.
Add Social Features:

Create the Digest section with content creation and interactions.
Implement content moderation using basic tools.
Implement Search Functionality:

Develop sitewide search using built-in features.
Optimize for performance.
Enhance UI/UX:

Apply design guidelines using Tailwind CSS.
Use built-in animations and transitions.
Testing and Deployment:

Generate dummy data using simple scripts.
Test all features thoroughly.
Deploy on Vercel and monitor performance.
File Structure and Documentation
README.md: Overview of the project, setup instructions, and development guidelines.
PRODUCT_REQUIREMENTS.md: (This document) Detailed requirements and project goals.
/pages: Next.js pages for routing.
/components: Reusable React components.
/styles: Global and component-specific styles.
/lib: Utility functions and libraries.
/db: Database schema and migrations using tools from the starter kit.
/api: Backend API endpoints using Vercel Functions.
/public: Static assets.
