require('dotenv').config(); // Load .env variables
const { Client } = require('pg');

// PostgreSQL connection configuration
const connectionString = process.env.POSTGRES_URL || "postgres://default:8Ptr0WoeQTfx@ep-lucky-pine-a4o5gngp-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require";

async function clearAndDropAllTables() {
  const client = new Client({ connectionString });

  try {
    await client.connect();
    console.log('Connected to the database. Attempting to clear and drop all tables...');

    // Fetch all table names in the public schema, excluding system tables
    const res = await client.query(`
      SELECT tablename
      FROM pg_tables
      WHERE schemaname = 'public';
    `);

    // Clear and drop tables in reverse order of dependencies
    const tableNames = res.rows.map(row => row.tablename);
    for (const tableName of tableNames.reverse()) {
      const qualifiedName = `"public"."${tableName}"`;
      try {
        await client.query(`TRUNCATE TABLE ${qualifiedName} CASCADE`);
        console.log(`Emptied table: ${qualifiedName}`);
        await client.query(`DROP TABLE IF EXISTS ${qualifiedName} CASCADE`);
        console.log(`Dropped table: ${qualifiedName}`);
      } catch (error) {
        console.error(`Error processing table ${qualifiedName}:`, error.message);
      }
    }

  } catch (error) {
    console.error('Error processing tables:', error.message);
  } finally {
    await client.end();
    console.log('Database connection closed.');
  }
}

clearAndDropAllTables();
