require('dotenv').config(); // Load .env variables
const { Client } = require('pg');

// PostgreSQL connection configuration
const connectionString = process.env.POSTGRES_URL || "postgres://default:8Ptr0WoeQTfx@ep-lucky-pine-a4o5gngp-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require";

async function clearAllTables() {
  const client = new Client({ connectionString });

  try {
    await client.connect();
    console.log('Connected to the database. Attempting to clear all tables...');

    // Fetch all table names in the public schema, excluding Knex tables
    const res = await client.query(`
      SELECT tablename
      FROM pg_tables
      WHERE schemaname = 'public'
      AND tablename NOT IN ('knex_migrations', 'knex_migrations_lock');
    `);

    for (const row of res.rows) {
      const tableName = row.tablename;
      try {
        await client.query(`DELETE FROM ${tableName}`);
        console.log(`Cleared records from table: ${tableName}`);
      } catch (error) {
        console.error(`Error clearing table ${tableName}:`, error);
      }
    }
  } catch (error) {
    console.error('Error fetching table names:', error);
  } finally {
    await client.end();
    console.log('Database connection closed.');
  }
}

clearAllTables();