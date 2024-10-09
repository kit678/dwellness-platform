import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";
import * as schema from "./schema"; // Ensure this path matches the compiled file

const db = drizzle(sql, { schema, logger: true });

export default db;

// Sample query to fetch users
async function getUsers() {
  return await db.select().from(schema.users);
}

// Test the query
getUsers().then(console.log).catch(console.error);

// Function to add dummy data
async function addDummyData() {
  try {
    const user = await db.insert(schema.users).values({ name: 'John Doe', email: 'john@example.com' }).returning();
    const userId = user[0].id;

    // Comment out or remove the following lines if 'classes' is not needed
    // const classData = await db.insert(schema.classes).values({
    //   title: 'Math 101',
    //   description: 'Basic Mathematics',
    //   schedule: new Date(),
    //   instructorId: userId,
    // }).returning();
    // const classId = classData[0].id;

    // await db.insert(schema.enrollments).values({
    //   userId: userId,
    //   classId: classId,
    // });

    console.log('Dummy data added successfully!');
  } catch (error) {
    console.error('Failed to add dummy data:', error);
  }
}

// Add dummy data
addDummyData();