// lib/users.ts
import { MongoClient } from 'mongodb';
import { User } from '../../models/User';

export async function findUserByEmail(client: MongoClient, email: string): Promise<User | null> {
  const db = client.db();
  return db.collection<User>('users').findOne({ email });
}

export async function createUser(client: MongoClient, user: User): Promise<void> {
  const db = client.db();
  await db.collection<User>('users').insertOne(user);
}
