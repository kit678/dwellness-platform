// /d/Dev/dwellness-platform/app/api/search/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

// Initialize PostgreSQL connection pool
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

// Define the number of items per page
const PAGE_SIZE = 10;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('query') || '';
  const typesParam = searchParams.get('types') || '';
  const page = parseInt(searchParams.get('page') || '1', 10);
  const offset = (page - 1) * PAGE_SIZE;

  // Map 'types' parameter to an array of types
  const types = typesParam
    .split(',')
    .map(type => type.trim().toLowerCase())
    .filter(type => type.length > 0);

  try {
    let values: any[] = [];
    let whereClauses: string[] = [];

    if (query) {
      // Sanitize and format the query for full-text search
      const sanitizedQuery = query.replace(/[':]/g, '').split(' ').join(' & ');
      whereClauses.push(
        `to_tsvector('english', coalesce(name, '') || ' ' || 
                                     coalesce(username, '') || ' ' || 
                                     coalesce(bio, '') || ' ' || 
                                     coalesce(title, '') || ' ' || 
                                     coalesce(description, '') || ' ' || 
                                     coalesce(excerpt, '')) @@ to_tsquery('english', $${values.length + 1})`
      );
      values.push(sanitizedQuery);
    }

    if (types.length > 0) {
      const typePlaceholders = types.map((_, idx) => `$${values.length + idx + 1}`).join(', ');
      whereClauses.push(`type IN (${typePlaceholders})`);
      values.push(...types);
    }

    let whereClause = '';
    if (whereClauses.length > 0) {
      whereClause = `WHERE ${whereClauses.join(' AND ')}`;
    }

    // Modify the SQL query to order by created_at DESC for consistency
    const sqlQuery = `
      SELECT * FROM digest_discover_view
      ${whereClause}
      ORDER BY created_at DESC
      LIMIT $${values.length + 1} OFFSET $${values.length + 2}
    `;

    values.push(PAGE_SIZE, offset);

    const result = await pool.query(sqlQuery, values);

    const formattedResults = result.rows.map(row => ({
      type: row.type,
      ...row
    }));

    return NextResponse.json({ results: formattedResults });
  } catch (error) {
    console.error('Database query failed:', error);
    return NextResponse.json({ error: 'Failed to fetch search results' }, { status: 500 });
  }
}
