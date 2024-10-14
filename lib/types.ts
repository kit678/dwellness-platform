// Define domain verification statuses without conflicting definitions

export type DomainVerificationStatusProps =
  | "Valid Configuration"
  | "Invalid Configuration"
  | "Pending Verification"
  | "Domain Not Found"
  | "Unknown Error";

// Interfaces based on Vercel's REST API documentation

// From https://vercel.com/docs/rest-api/endpoints#get-a-project-domain
export interface DomainResponse {
  name: string;
  apexName: string;
  projectId: string;
  redirect?: string | null;
  redirectStatusCode?: 301 | 302 | 307 | 308 | null;
  gitBranch?: string | null;
  updatedAt?: number;
  createdAt?: number;
  verified: boolean;
  verification: VerificationDetail[];
}

// From https://vercel.com/docs/rest-api/endpoints#get-a-domain-s-configuration
export interface DomainConfigResponse {
  configuredBy?: "A" | "CNAME" | "HTTP" | null;
  acceptedChallenges?: Array<"dns-01" | "http-01">;
  misconfigured: boolean;
}

// From https://vercel.com/docs/rest-api/endpoints#verify-project-domain
export interface DomainVerificationResponse {
  name: string;
  apexName: string;
  projectId: string;
  redirect?: string | null;
  redirectStatusCode?: 301 | 302 | 307 | 308 | null;
  gitBranch?: string | null;
  updatedAt?: number;
  createdAt?: number;
  verified: boolean;
  verification?: VerificationDetail[];
}

export interface VerificationDetail {
  type: string;
  domain: string;
  value: string;
  reason: string;
}

// Custom User and Session Interfaces

export interface CustomUser {
  id: string;
  name: string;
  email: string;
  image: string;
  // Add other user properties as needed
}

export interface CustomSession {
  user: CustomUser;
  // Add other session properties as needed
}

// Additional Custom Types

// Example: Post Type
export interface Post {
  id: string;
  title: string;
  content: string;
  authorId: string;
  createdAt: number;
  updatedAt: number;
}

// Example: Site Type
export interface Site {
  id: string;
  domain: string;
  ownerId: string;
  createdAt: number;
  updatedAt: number;
}

// Ensure no conflicting types exist with other schema definitions
