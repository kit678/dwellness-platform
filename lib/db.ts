import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";
import * as schema from "./schema"; // Ensure this path matches your schema file
import { createId } from "@paralleldrive/cuid2"; // Import a UUID generator

// Create a Drizzle ORM instance with the schema and logger enabled
const db = drizzle(sql, { schema, logger: true });

export default db;
export type DrizzleClient = typeof db;