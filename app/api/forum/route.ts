import { NextRequest, NextResponse } from 'next/server';

// Handle GET requests
export async function GET(req: NextRequest) {
  // Your GET logic here
  return NextResponse.json({ message: 'GET request for forum successful' });
}

// Handle POST requests
export async function POST(req: NextRequest) {
  const data = await req.json();
  // Your POST logic here
  return NextResponse.json({ message: 'POST request for forum successful', data });
}