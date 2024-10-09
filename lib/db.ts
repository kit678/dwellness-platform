import knex from 'knex';
import dotenv from 'dotenv';

dotenv.config();

const db = knex({
  client: 'pg',
  connection: process.env.POSTGRES_URL,
  migrations: {
    directory: './migrations'
  },
  seeds: {
    directory: './seeds'
  }
});

export default db;

// Sample query to fetch users
async function getUsers() {
  return await db('users').select('*');
}

// Test the query
getUsers().then(console.log).catch(console.error);

// Function to add dummy data
async function addDummyData() {
  try {
    const user = await db('users').insert({ name: 'John Doe', email: 'john@example.com' }).returning('*');
    const userId = user[0].id;

    const classData = await db('consultations').insert({
      title: 'Math 101',
      description: 'Basic Mathematics',
      schedule: new Date(),
      instructorId: userId,
    }).returning('*');
    const classId = classData[0].id;

    await db('enrollments').insert({
      userId: userId,
      consultationId: classId,
    });

    console.log('Dummy data added successfully!');
  } catch (error) {
    console.error('Failed to add dummy data:', error);
  }
}

// Add dummy data
addDummyData();