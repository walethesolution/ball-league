import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { ensureUsersTableExists } from '../users/route';

export async function POST(req: Request) {
  try {
    const { name, email, password, verifyPassword } = await req.json();

    if (!name || !email || !password || !verifyPassword) {
      throw new Error("Missing required fields");
    }

    if (password !== verifyPassword) {
      throw new Error("Passwords do not match");
    }

    // Ensure the Users table exists
    await ensureUsersTableExists();

    // Check if the email already exists
    const { rowCount } = await sql`
      SELECT id FROM Users WHERE email = ${email};
    `;

    if (rowCount != null && rowCount > 0) {
      return NextResponse.json({ success: false, message: "Email already exists" }, { status: 400 });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the new user into the Users table
    await sql`
      INSERT INTO Users (name, email, password)
      VALUES (${name}, ${email}, ${hashedPassword});
    `;

    return NextResponse.json({ success: true, message: "User registered successfully" }, { status: 201 });

  } catch (error) {
    console.error("Error during registration:", error);
    return NextResponse.json({ success: false, message: "Error during registration" }, { status: 500 });
  }
}