import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function ensureUsersTableExists() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS Users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
  } catch (error) {
    console.error("Error ensuring Users table exists:", error);
    throw new Error('Could not create Users table');
  }
}

export async function GET() {
  try {
    await ensureUsersTableExists();

    const { rows } = await sql`
      SELECT id, name, email, created_at 
      FROM Users;
    `;
    return NextResponse.json({ success: true, data: rows });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ success: false, message: 'Error fetching users' }, { status: 500 });
  }
}
