import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./lib/schema.ts", // Path to your schema file
  dialect: "postgresql", // Database dialect
  out: "./drizzle/migrations", // Directory for migration files
  dbCredentials: {
    url: process.env.POSTGRES_URL!, // Database connection URL
  },
  migrations: {
    table: "__drizzle_migrations__", // Default migration table
    schema: "public", // Default schema for PostgreSQL
  },
  breakpoints: false, // Disable SQL statement breakpoints
});