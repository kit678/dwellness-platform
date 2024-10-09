require('dotenv').config(); // Load .env variables
const { Client } = require('pg');

// PostgreSQL connection configuration
const connectionString = process.env.POSTGRES_URL || "your_connection_string_here";

async function clearAndDropAllTables() {
  const client = new Client({ connectionString });

  try {
    await client.connect();
    console.log('Connected to the database. Attempting to clear and drop all tables...');

    // Fetch all table names in the public schema, excluding system tables
    const res = await client.query(`
      SELECT tablename
      FROM pg_tables
      WHERE schemaname = 'public'
      AND tablename NOT IN ('knex_migrations', 'knex_migrations_lock');
    `);

    // Clear and drop tables in reverse order of dependencies
    const tableNames = res.rows.map(row => row.tablename);
    for (const tableName of tableNames.reverse()) {
      try {
        await client.query(`DROP TABLE IF EXISTS ${tableName} CASCADE`);
        console.log(`Dropped table: ${tableName}`);
      } catch (error) {
        console.error(`Error dropping table ${tableName}:`, error);
      }
    }

  } catch (error) {
    console.error('Error processing tables:', error);
  } finally {
    await client.end();
    console.log('Database connection closed.');
  }
}

clearAndDropAllTables();